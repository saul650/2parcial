import { addNewCard } from './addNewCard.js';

const removeButton = document.querySelector( "#remove-button" );
const gallery = document.querySelector( "#gallery" )

addButton.addEventListener( "click", () => addNewCard( gallery ), false );
