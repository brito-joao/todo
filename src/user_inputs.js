import { storeNotes , removeNotes, storeNoteNumber, getNoteNumber} from "./local_storage";

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
    user.current_notes.order+=1;
    displayNotes(user.current_notes);

    storeNotes(`note-${user.current_notes.order}`,user.current_notes);

    //create a function that makes an html thing for the todos
  });

}
//get the list of numbers , then loop through the classes

export function displayNotes(note_to_display){
  let note_class=`note-${note_to_display.order}`;
  console.log("note to dispaly",note_class);
  const notes= document.querySelector(".notes");
  console.log(note_to_display.order,"hahaha",note_to_display.title,note_class);
  
  notes.innerHTML+=`<div class='note ${note_class}'><p class='title'>${note_to_display.title}</p><p class='description'>${note_to_display.description}</p><div><p class='others'>${note_to_display.category}</p><p class='others'>${note_to_display.due}</p><p class='others'>${note_to_display.importance}</p></div><button class='button ${note_class}' value='${note_class}'>remove</button></div>`;
  deleteNotes(note_class,note_to_display);
  
  console.log(note_to_display.order,"heeasdflksjdhfalsd note num");
  

}
export function deleteNotes(note_class,notes){
  console.log("hello woeldasdajsdçlkjasçfldkj");
  let button=document.querySelector(`.button.note-${notes.order}`);
  console.log(button,"heasldkjfalfsçlkd");
  
  button.addEventListener("click",()=>{
    console.log(note_class,"hello asflkjsdçlfkjasdljfasçldkfjaçsldkjfçaslkdjfç");
  })
}


export function displayArrayNotes(){
  let array=getNoteNumber()[0];
  array.forEach((object)=>{
    displayNotes(object)
  })

}