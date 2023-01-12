import { storeNotes, getNotes, removeNotes,getNoteNumber } from "./local_storage";
import { getForm, displayArrayNotes, loadAllNotes, menuClickEvent,loadMenu} from "./user_inputs";



export function createFormHtml(){
    
    const body=document.querySelector("body");
    body.innerHTML="";
    loadMenu();
    menuClickEvent();
    var form = document.createElement("form");
    form.setAttribute("id", "form");

    var input1 = document.createElement("input");
    input1.setAttribute("class", "span-3");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "title");
    input1.setAttribute("name", "title");
    input1.setAttribute("placeholder", "title");

    var input2 = document.createElement("input");
    input2.setAttribute("class", "span-3");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "description");
    input2.setAttribute("name", "description");
    input2.setAttribute("placeholder", "description");

    var div = document.createElement("div");

    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "category");
    input3.setAttribute("name", "category");
    input3.setAttribute("placeholder", "category");

    var select1 = document.createElement("select");
    select1.setAttribute("id", "Due");
    select1.setAttribute("name", "due");

    var option1 = document.createElement("option");
    option1.setAttribute("value", "today");
    option1.innerHTML = "today";

    var option2 = document.createElement("option");
    option2.setAttribute("value", "tomorrow");
    option2.innerHTML = "tomorrow";

    var option3 = document.createElement("option");
    option3.setAttribute("value", "after-tomorrow");
    option3.innerHTML = "after tomorrow";

    var option4 = document.createElement("option");
    option4.setAttribute("value", "a week");
    option4.innerHTML = "a week";

    select1.appendChild(option1);
    select1.appendChild(option2);
    select1.appendChild(option3);
    select1.appendChild(option4);

    var select2 = document.createElement("select");
    select2.setAttribute("id", "priority");
    select2.setAttribute("name", "priority");

    var option5 = document.createElement("option");
    option5.setAttribute("value", "important");
    option5.innerHTML = "important";

    var option6 = document.createElement("option");
    option6.setAttribute("value", "not-important");
    option6.innerHTML = "not important";

    var option7 = document.createElement("option");
    option7.setAttribute("value", "very-important");
    option7.innerHTML = "very important";

    select2.appendChild(option5);
    select2.appendChild(option6);
    select2.appendChild(option7);

    var input4 = document.createElement("input");
    input4.setAttribute("class", "span-3 submit");
    input4.setAttribute("type", "submit");
    input4.setAttribute("value", "Add Note");

    div.appendChild(input3);
    div.appendChild(select1);
    div.appendChild(select2);

    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(div)
    var notes= document.createElement("div");
    notes.setAttribute("class","notes");

    
    form.appendChild(input4);
    
    
    body.appendChild(form);
    body.appendChild(notes);

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
}

export function defaultPage(){
    const body=document.querySelector("body");
    body.innerHTML="";
    loadMenu();
    menuClickEvent();
    
    var currentTime = new Date().getHours();

    
    var greeting = document.createElement("p");
    greeting.setAttribute("class","greeting");
    
    if (currentTime < 12) {
    greeting.innerText = "Good morning!";
    } else if (currentTime < 18) {
    greeting.innerText = "Good afternoon!";
    } else {
    greeting.innerText = "Good evening!";
    }

    var instruction=document.createElement("p");
    instruction.setAttribute("class","instruction");
    instruction.innerText="To create notes click 'New' on the menu";

    
    body.appendChild(greeting);
    body.appendChild(instruction);
    document.body.appendChild(Object.assign(document.createElement("a"), { href: "http://github.com/brito-joao?tab=repositories", innerText: "My Github", className:"link" }))
}