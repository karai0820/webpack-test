import './hellowebpack.js';
import '../css/style.scss';
import jpg from './image1.jpg';

let imgJpg = document.createElement('img');
imgJpg.src = jpg;
document.getElementById('box').appendChild(imgJpg);

