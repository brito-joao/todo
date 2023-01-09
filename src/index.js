import "./style.scss";
import { storeNotes, getNotes, removeNotes,getNoteNumber } from "./local_storage";
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
    this.current_notes=0;
    this.note_number=0;
    this.current_note_class="";
    //add a function that loads current note number


}
const user1= new userInfo();
getForm(user1);
try{
    //change this and fix this part, not working

    //tomorrow, work on creating a for loop that displays all of the notes,
    //and remove the current note class thing, only use note number
    user1.note_number=getNoteNumber();
    user1.current_note_class=""; 
    console.log(user1.current_notes,"current notes ------",user1.note_number);
    displayNotes(user1.past_notes,user1.note_number,user1.current_note_class);
    
    console.log("current note",user1.current_notes)
} catch (error){
    console.log(error);
    user1.current_notes=0;
}


//user1.current_notes=getNoteNumber();
console.log(user1.current_notes);
