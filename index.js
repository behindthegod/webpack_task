import './index.css';
import imgJS from './assets/img.png';


console.log('hello world');

const img = document.createElement('img');
img.className = 'js-image';
img.src = imgJS;

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';


document.body.append(img, h1);