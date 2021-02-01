import createDomElement from '@js/utils/createDomElement.js';
import state from '@js/components/board/state.js';

class Card {
  constructor(defaultText, elem, state) {
    this.defaultText = defaultText;
    this.elem = elem;
    this.state = state;
  }

  render() {
    const card = createDomElement('div', 'column__card', '', this.elem);
  
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
  
    const textarea = createDomElement('textarea', 'column__card__textarea', '', card);
    textarea.placeholder = this.defaultText;

    textarea.addEventListener('change', () =>{
     const key = (((card.parentNode).parentNode).querySelector('.column__text')).textContent;
     state[`${key}`].[`${textarea.value}`] = textarea.value;
     card.id = textarea.value;
     console.log(state);
     textarea.readOnly = 'true';
     textarea.classList.add('column__card__textarea--hover');
     textarea.style.backgroundColor = '#dee5f3';
    });
   
    const buttonWrapper = createDomElement('div', 'column__card__button-wrapper', '', card);
    const buttonCardDelete = createDomElement('i', 'far fa-trash-alt column__card__button', '', card);
   
    buttonCardDelete.addEventListener('click', () => {
      card.remove();
    });

    const buttonCardEdit = createDomElement('img', 'column__card__button', '', card);
    buttonCardEdit.src = 'https://user-images.githubusercontent.com/61156194/106360848-80275a80-6323-11eb-9ef7-e3fa7337a5ac.png';

    buttonCardEdit.addEventListener('click', () => {
      textarea.removeAttribute('readOnly');
      textarea.classList.remove('column__card__textarea--hover');
    });

    buttonWrapper.append(buttonCardDelete,buttonCardEdit);
  }
}
export { Card };
