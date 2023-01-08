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
export function getNoteNumber(){
    let current_key="";
    for(var i=0; i< localStorage.length;i++){
        const key= localStorage.key(i);
        if(key.startsWith("note")){
            const value= localStorage.getItem(key);
            console.log(`${key}:${value} olha isso`);
            current_key=key
        }
    }
    
    return current_key
}
