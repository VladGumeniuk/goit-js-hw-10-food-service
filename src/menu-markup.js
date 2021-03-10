import foodCards from './menu.json';
import foodServiceTemplate from './food-service.hbs';

const menuGallery = document.querySelector('ul.js-menu');

const cardsMarkup = foodServiceTemplate(foodCards);

menuGallery.insertAdjacentHTML('beforeend', cardsMarkup);
