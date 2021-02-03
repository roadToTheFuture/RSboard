import createDomElement from '@js/utils/createDomElement.js';
import state from '@js/components/board/state.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import refInfo from '@js/database/refInfo.js';

class Card {
  constructor(defaultText, elem, state) {
    this.defaultText = defaultText;
    this.elem = elem;
    this.state = state;
  }

  render() {
    const card = createDomElement('div', 'column__card', '', this.elem);
    const textarea = createDomElement('textarea', 'column__card__textarea', '', card);
    textarea.placeholder = this.defaultText;
    textarea.focus();
    card.id = this.defaultText;
    card.draggable = 'true';
    const dragstart = function (event) {
      setTimeout(() =>{
        card.style.display = 'none';
      }, 0); 
      event.dataTransfer.setData('text/plain', event.target.id);
    }
    const dragend = function () {
      card.style.display = 'flex';
    }
    card.addEventListener('dragstart', dragstart); 
    card.addEventListener('dragend', dragend); 
    textarea.addEventListener('blur', () =>{
     const key = (((card.parentNode).parentNode).querySelector('.column__text')).textContent;
     state[`${key}`].[`${textarea.value}`] = textarea.value;
     if (textarea.value === '') {
      card.id = this.defaultText;
     } else {
      card.id = textarea.value;
     }
     textarea.readOnly = 'true';
     textarea.classList.add('column__card__textarea--hover');
  
     refInfo('cards' ,{title: textarea.value});

    });

    const buttonWrapper = createDomElement('div', 'column__card__button-wrapper', '', card);

    const buttonCardEdit = createDomElement('i', 'far fa-edit i-edit', '', buttonWrapper);
    const buttonCardDelete = createDomElement('i', 'far fa-trash-alt i-delete', '', buttonWrapper);
   
    buttonCardDelete.addEventListener('click', () => {
      card.remove();
    });
    
    
    buttonCardEdit.addEventListener('click', () => {
      textarea.removeAttribute('readOnly');
      textarea.classList.remove('column__card__textarea--hover');
    });
    buttonWrapper.append(buttonCardDelete,buttonCardEdit);
  }
}
export { Card };
