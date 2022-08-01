import { LightningElement, track, wire } from 'lwc';
import retrieveData from '@salesforce/apex/fetchRelatedRecords.retrieveContact';
export default class DisplayContactsOnAccountName extends LightningElement {
@track accountName;
@track sName;
handleChangeAccName(event){
this.accountName = event.target.value;
}
handleAccountSearch(){
this.sName = this.accountName;
}
@track records;
@track dataNotFound;
@wire (retrieveData,{keySearch:'$sName'})
wireRecord({data,error}){
if(data){
this.records = data;
this.error = undefined;
this.dataNotFound = '';
if(this.records === ''){
 this.dataNotFound = 'There is no Contact found related to Account name';
}
}else{
this.error = error;
this.data=undefined;
//this.dataNotFound = 'There is no Contact found related to Account name';
}
}
}