public with sharing class fetchRelatedRecords {
    @AuraEnabled(cacheable=true)
    public static List<Contact> retrieveContact(string keySearch){
        String s='%'+keySearch+'%';
        List<Contact> cList = [Select Id, FirstName, LastName, Email, Phone, Account.Name From Contact Where Account.Name =:keySearch];
        return cList;
    }
}