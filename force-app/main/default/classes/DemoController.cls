global with sharing class DemoController {  
    @RemoteAction
    global static Shoes__c[] getShoes() {
        return [SELECT Id, Name, price__c, quantity__c, title__c, img__c FROM Shoes__c LIMIT 20];
    }
    
    @RemoteAction
    global static void makeSale(Receipt_item__c[] saleItems) {
        try {
            Sale__c s = new Sale__c(Name='Sale at ' + DateTime.now().format('yyyy-MMM-dd HH:mm:ss'));
            insert s;
            
            for (Receipt_item__c rItem : saleItems) {
                rItem.Sale__c = s.Id;
                insert rItem;
            }
        } catch(DmlException e) {
            System.debug('An unexpected error has occurred: ' + e.getMessage());
        }
    }
}