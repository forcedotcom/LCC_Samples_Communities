import Controller from '@ember/controller';
import * as LCC from 'lightning-container';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      console.log(LCC);

      LCC.callApex("ContactController.getContactsByName",
                 "",
                 (result, event) => {
                     console.log("Called VF");
                     if (event.status) {
                         console.log(result[0]);
                     } else if (event.type === "exception") {
                         console.log(event.message + " : " + event.where);
                     }

                 },
                 { escape: true });

      if (param !== '') {
        return this.get('store').query('rental', { city: param }).then((filteredResults) => {
          return { query: param, results: filteredResults };
        });
      } else {
        return this.get('store').findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
