public with sharing class AccountHelperClass {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> accList = [SELECT Id, Name, Type, Rating, Phone, Website, AnnualRevenue FROM Account];
        return accList
    }
}