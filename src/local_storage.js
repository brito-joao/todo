export function storeNotes(key, value){
    const valueString= JSON.stringify(value);

    localStorage.setItem(key, valueString);
}

export function getNotes(key){
    const valueString= localStorage.getItem(key);

    return JSON.parse(valueString);
}

export function removeNotes(key){

    localStorage.removeItem(key);
};

export function storeNoteNumber(number){
    const valueString=JSON.stringify(number);
    localStorage.setItem(`note-${number}`,valueString);
}

//change the name of this function
export function getNoteNumber(){
    
    let notes=[];
    for(var i=0; i< localStorage.length;i++){
        const key= localStorage.key(i);
        if(key.startsWith("note")){
            const value= JSON.parse(localStorage.getItem(key));
            
            notes.push(value)
            
        }
    }
    
    return [notes,findNoteNumber(notes)];
}

function findNoteNumber(notes){
    let note_orders=[];
    notes.forEach((item)=>{
        note_orders.push(item.order);
        
    })
    let current_number=Math.max(...note_orders);
    
    
    return current_number;
}
