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

    const textarea = createDomElement('textarea', 'column__card__textarea', '', card);
    textarea.placeholder = this.defaultText;

    textarea.addEventListener('change', () =>{
     const key = (((card.parentNode).parentNode).querySelector('.column__text')).textContent;
     state[`${key}`].[`${textarea.value}`] = textarea.value;
     console.log(state);
    });

    const buttonCardDelete = createDomElement('img', 'column__card__button', '', card);
    buttonCardDelete.src = 'https://user-images.githubusercontent.com/61156194/104500143-b310e500-55e6-11eb-900c-2c23db449231.png';

    buttonCardDelete.addEventListener('click', () => {
      card.remove();
    });
  }
}
export { Card };
