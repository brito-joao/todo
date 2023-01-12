import { storeNotes , removeNotes, storeNoteNumber, getNoteNumber} from "./local_storage";
import { createFormHtml, defaultPage } from "./page_generation";

export function getForm(user){
    
  const form = document.querySelector('#form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form); 

    
    const title_form = formData.get('title');
    const description_form= formData.get("description");
    const category_form=formData.get("category");
    const due_form=formData.get("due");
    const importance_form=formData.get("priority");
    user.current_notes={title:title_form, description:description_form, category:category_form, due:due_form,importance:importance_form,order:user.note_number};
    
    form.reset();
    user.current_notes.order=getNoteNumber()[1]>0 ? getNoteNumber()[1]: 0;
    user.current_notes.order+=1;
    displayNotes(user.current_notes);
    
    storeNotes(`note-${user.current_notes.order}`,user.current_notes);

    //create a function that makes an html thing for the todos
  });

}
//get the list of numbers , then loop through the classes

export function displayNotes(note_to_display){
  let note_class=`note-${note_to_display.order}`;
  const notes= document.querySelector(".notes");
  
  notes.innerHTML+=`<div class='note ${note_class}'><p class='title'>${note_to_display.title}</p><p class='description'>${note_to_display.description}</p><div><p class='others'>${note_to_display.category}</p><p class='others'>${note_to_display.due}</p><p class='others'>${note_to_display.importance}</p></div><button class='button' value='${note_class}'>Remove</button></div>`;
  
  
  

}


export function deleteNotes(){
  
  let buttons=document.querySelectorAll(`.button`);
  
  
  buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
      removeDisplayNotes(button.value);
    });
  })
    
  
}
function removeDisplayNotes(note_class){
  const note=document.querySelector(`.${note_class}`);
  note.remove();
  removeNotes(note_class);
}

export function displayArrayNotes(){
  let array=getNoteNumber()[0];

  array.forEach((object)=>{
    displayNotes(object)
  })
  deleteNotes();
}
function loadNotesDiv(){
  const body=document.querySelector("body");

  const notes=document.createElement("div");
  notes.setAttribute("class","notes");
  body.appendChild(notes);
}
export function loadAllNotes(){
  const body=document.querySelector("body");
  body.innerHTML="";
  loadMenu();
  menuClickEvent();
  loadNotesDiv();
  if(isEmpty()==false){
      displayArrayNotes();
  }

  
  
}
function isEmpty(){
      let array=getNoteNumber()[0];
      
      return array.length>0? false:true;
  }
export function menuClickEvent(){
  const buttons = document.querySelectorAll("li");
  let options=["New","All Notes","About"];
  buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
      console.log(button.innerText);

      options[0]==button.innerText?createFormHtml()
      :options[1]==button.innerText?loadAllNotes()
      :options[2]==button.innerText?defaultPage()
      :{};



    })
  })
}

export function loadMenu(){
  const body= document.querySelector("body");
  var ul = document.createElement("ul");
  ul.setAttribute("class", "menu");
  
  var li1 = document.createElement("li");
  li1.innerHTML = "New";
  
  var li2 = document.createElement("li");
  li2.innerHTML = "All Notes";
  
  var li3 = document.createElement("li");
  li3.innerHTML = "About";
  
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  body.appendChild(ul);
}