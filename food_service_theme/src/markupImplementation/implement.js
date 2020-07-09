import markupTemplate from '../template/menuPattern.hbs';
import itemsArray from '../menu.json';
import './switchTheme';

const jsMenu = document.querySelector('.js-menu');
const markup = itemsArray.map(item => markupTemplate(item)).join('');

jsMenu.insertAdjacentHTML('beforeend', markup);