public with sharing class AccountHelperClass {
    
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Rating, Phone, ]
    }
}