import { storeNotes , removeNotes, storeNoteNumber} from "./local_storage";

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
    user.current_notes={title:title_form, description:description_form, category:category_form, due:due_form,importance:importance_form,order:user.note_number};
    
    form.reset();
    console.log("hahjkljklçhjk",user.current_notes)
    user.note_number+=1;
    displayNotes(user.current_notes,user.note_number,user.current_note_class);

    storeNotes(`note-${user.note_number}`,user.current_notes);

    //create a function that makes an html thing for the todos
  });

}


export function displayNotes(note_to_display,note_number,note_class){
  const notes= document.querySelector(".notes");
  console.log(note_number,"hahaha",note_to_display.title,note_class);
  
  notes.innerHTML+=`<div class='note ${note_class}'><p class='title'>${note_to_display.title}</p><p class='description'>${note_to_display.description}</p><div><p class='others'>${note_to_display.category}</p><p class='others'>${note_to_display.due}</p><p class='others'>${note_to_display.importance}</p></div><button class='button' value='${note_class}'>remove</button></div>`;
  deleteNotes();
  
  console.log(note_number,"heeasdflksjdhfalsd note num");
  storeNoteNumber(note_number);

}
export function deleteNotes(){
  
  const button=document.querySelector(`.button`);
  button.addEventListener("click",()=>{
    
    console.log("note correct",button.value,"jalasd");
    const note=document.querySelector(`.${button.value}`);
    
    note.remove();
    //change this to the correct address; already changed
    removeNotes(button.value);
    
  })
  
}
