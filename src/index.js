import sum from './sum.js';
import whatIsWebpack from '../assets/img/what-is-webpack.png';
import './style.scss';

const total = sum(1, 1);

console.log(total);

const image = document.createElement('img');
image.src   = whatIsWebpack;

document.body.appendChild(image);
