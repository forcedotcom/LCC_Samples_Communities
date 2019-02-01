global with sharing class RecordController {
    @RemoteAction
    global static Account[] getAccounts() {
        return [SELECT Id, Name, Phone, Type, NumberOfEmployees FROM Account Limit 10];
    }
}