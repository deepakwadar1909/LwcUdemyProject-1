public with sharing class WrapperClassDemo {
    
    public static List<AccountContactWrapperClass> fetchAccountContactDetails(){

        List<AccountContactWrapperClass> lstAccContWrapper = new List<AccountContactWrapperClass> ();
        for(Account acc: [SELECT id, Name,BillingStreet, BillingCity, BillingCountry, (SELECT id FROM Contacts) FROM Account WHERE Name != null LIMIT 10]){
            lstAccContWrapper.add(new AccountContactWrapperClass(acc, acc.contacts.size()));
        }
        return lstAccContWrapper;
    }

    public class AccountContactWrapperClass{
        @AuraEnabled
        public Account acc;

        @AuraEnabled
        public Integer totalContacts;

        @AuraEnabled
        public String billingAddress;

        @AuraEnabled
        public String type;

        @AuraEnabled
        public String accountName;

        @AuraEnabled
        public String accountLink;

        public AccountContactWrapperClass(Account acc, Integer totalContacts){

            this.acc = acc;
            this.totalContacts = totalContacts;
            //for link use '/'
            this.accountLink = '/' + acc.Id;
            this.type = acc.Type;
            this.accountName =  acc.Name;
            this.billingAddress = acc.BillingStreet + ',' + acc.BillingCity + ',' + acc.BillingCountry;
        }
    }
}