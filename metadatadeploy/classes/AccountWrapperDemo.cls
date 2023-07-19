public with sharing class AccountWrapperDemo {

    @AuraEnabled(cacheable=true)
    public static List<AccountWrapper> getAccountWithContact(){
        List<AccountWrapper> wrapList = new List<AccountWrapper>();
        List<Account> accList = [SELECT Id, Name, (SELECT Id, FirstName, LastName FROM contacts) FROM Account LIMIT 10];

        if(!accList.isEmpty()){
            for(Account acc : accList){
                wrapList.add(new AccountWrapper(acc, acc.contacts));
            }
        }
        return wrapList;
    }

    //wrapper class
    public class AccountWrapper{
        @AuraEnabled public Account accRecord{get;set;}
        @AuraEnabled public List<Contact> contactList{get;set;}

        //constructor
            public AccountWrapper(Account accRecord, List<Contact> contactList){
                this.accRecord = accRecord;
                this.contactList = contactList;
            }
    }

}
