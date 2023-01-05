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
