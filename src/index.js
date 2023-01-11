import "./style.scss";
import { storeNotes, getNotes, removeNotes,getNoteNumber } from "./local_storage";
import { getForm, displayArrayNotes} from "./user_inputs";





//today >>> link the forms result to the js page and then store it in local storage


//storeNotes("testing",test1);
//console.log(getNotes("testing1"));
//const test2= {title:"clean house",description:"clean like it's the president's house", category:"crazy",due:"today",importance:"important" }
//storeNotes("testing1",test2);

function userInfo(){
    //notes will be the main array that stores all note objects
    this.past_notes=getNotes("testing2");  
    this.all_notes=[];
    this.current_notes=0;
    this.note_number=0;
    this.current_note_class="";
    //add a function that loads current note number


}
const user1= new userInfo();
getForm(user1);

if(isEmpty()==false){
    displayArrayNotes();
}

//put this on other file
function isEmpty(){
    let array=getNoteNumber()[0];
    
    return array.length>0? false:true;
}