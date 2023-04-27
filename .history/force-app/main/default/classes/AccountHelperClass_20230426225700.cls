public with sharing class AccountHelperClass {
    @AuraEnabled(Cas)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Rating, Phone, Website, AnnualRevenue FROM Account];
    }
}