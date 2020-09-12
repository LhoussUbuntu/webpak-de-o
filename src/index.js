import './styles/main.scss';
import  navbar  from './js/nav.js';
import  main  from './js/main.js';

const content = document.getElementById('content');


content.appendChild(navbar);
content.appendChild(main);