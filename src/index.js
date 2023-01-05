import "./style.scss";
import { storeNotes, getNotes, removeNotes } from "./local_storage";
import { getForm, displayNotes} from "./user_inputs";
console.log("hello world");




//today >>> link the forms result to the js page and then store it in local storage


//storeNotes("testing",test1);
//console.log(getNotes("testing1"));
//const test2= {title:"clean house",description:"clean like it's the president's house", category:"crazy",due:"today",importance:"important" }
//storeNotes("testing1",test2);

function userInfo(){
    //notes will be the main array that stores all note objects
    this.past_notes=getNotes("testing2");  
    this.all_notes=[];
    this.current_notes=null;



}
const user1= new userInfo();
getForm(user1);
displayNotes(user1.past_notes)
console.log(user1.current_notes);
