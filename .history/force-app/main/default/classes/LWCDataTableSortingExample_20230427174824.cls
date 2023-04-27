public with sharing class LWCDataTableSortingExample {
    @AuraEnabled
    public static string methodName(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    public static List<Contact> getContacts(){
        List<Contact> contList = [SELECT Id, FirstName, LastName, Phone, Email, FROM Contact LIMIT 10];
        return contList;
    }
}