/**
 * Using Salesforce as our API.
 */
import * as LCC from 'lightning-container'

export default {
  getProducts: function (cb) {
    console.log("Fetching shoes inventory from salesforce.");
    LCC.callApex("DemoController.getShoes",
      (result, event) => {
        if (event.status) {

          //Turn shoes into products.
          let id = 1;
          for (let item of result) {
            item.price = item.price__c;
            item.inventory = item.quantity__c;
            item.title = item.title__c;
            item.img = item.img__c;
            item.id = id;
            id = id + 1;
          }

          console.log(result);
          cb(result);
        } else if (event.type === "exception") {
          console.log(event.message + " : " + event.where);
        }

      },
      { escape: true });
  },
  buyProducts: function (products, cb) {
    console.log("Logging sale in salesforce.");

    //Turn products back to shoes.
    console.log(products);
    let saleItems = [];
    for (let item of products) {
      for (let i = 0; i < item.quantity; i++) {
        saleItems.push({"Shoe__c": item.Id});
      }
    }

    console.log(saleItems);
    LCC.callApex("DemoController.makeSale",
      saleItems,
      (result, event) => {
        if (event.status) {
          console.log(result);
          cb(result);
        } else if (event.type === "exception") {
          console.log(event.message + " : " + event.where);
        }

      },
      { escape: true });
  },
}
