import sum from './js/sum.js';

import whatIsWebpack from './assets/images/what-is-webpack.png';

import './assets/styles/style.scss';

const total = sum(2, 2);

console.log(total);

const image = document.createElement('img');
image.src   = whatIsWebpack;

document.body.appendChild(image);
