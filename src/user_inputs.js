import { storeNotes , removeNotes} from "./local_storage";

export function getForm(user){
    
    const form = document.querySelector('#form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form); 

    
    const title_form = formData.get('title');
    console.log(title_form);
    const description_form= formData.get("description");
    const category_form=formData.get("category");
    const due_form=formData.get("due");
    const importance_form=formData.get("priority");
    user.current_notes={title:title_form, description:description_form, category:category_form, due:due_form,importance:importance_form};
    
    form.reset();

    displayNotes(user.current_notes);
    storeNotes("testing2",user.current_notes);

    //create a function that makes an html thing for the todos
  });

}


export function displayNotes(note_to_display){
  const notes= document.querySelector(".notes");
  notes.innerHTML+=`<div class='note ${"id-note"}'><p class='title'>${note_to_display.title}</p><p class='description'>${note_to_display.description}</p><div><p class='others'>${note_to_display.category}</p><p class='others'>${note_to_display.due}</p><p class='others'>${note_to_display.importance}</p></div><button class='button' value=${"id-note"}>remove</button></div>`;
  deleteNotes();
}
export function deleteNotes(){
  
  const button=document.querySelector(".button");
  button.addEventListener("click",()=>{
    
    let note_class=button.value;
    const note=document.querySelector(`.${note_class}`);
    console.log(note, "note correct");
    note.remove();
    //change this to the correct address;
    removeNotes("testing2");
  })
}
