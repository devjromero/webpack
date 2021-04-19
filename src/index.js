import style from './style.css';
import logo from './assets/baby-yoda.jpeg';
import data from './data.json';
import { Hi } from './components/hi.js';

const numbers = [1, 2, 3];

const codeESNext = () => console.log(...numbers);


console.log('Hello world');
codeESNext();

// document.getElementById('app').innerHTML = `<img src="${logo}" alt="Webpack"/>`;

const d = document,
    $app = d.getElementById('app'),
    $h1 = d.createElement('h1'),
    $logo = d.createElement('img'),
    $nav = d.createElement('nav');

let menu = "", hello = new Hi('Vanilla Js');

data.links.forEach((link) => (menu += `<a href="${link[1]}">${link[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add('icon');
$nav.classList.add('menu');
$nav.innerHTML = menu;

$app.appendChild($h1);
$app.appendChild($nav);
$app.appendChild($logo);
