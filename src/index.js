import "./style.scss";
import { storeNotes, getNotes, removeNotes,getNoteNumber } from "./local_storage";
import { getForm, displayArrayNotes, loadAllNotes, menuClickEvent,loadMenu} from "./user_inputs";
import { createFormHtml,defaultPage } from "./page_generation";




//today >>> link the forms result to the js page and then store it in local storage


//storeNotes("testing",test1);
//console.log(getNotes("testing1"));
//const test2= {title:"clean house",description:"clean like it's the president's house", category:"crazy",due:"today",importance:"important" }
//storeNotes("testing1",test2);

loadMenu();
menuClickEvent();
defaultPage();