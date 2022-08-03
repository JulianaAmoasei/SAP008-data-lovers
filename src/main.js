import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

function soma(num) {
  return num + num;
}

soma(1)

function multiplicar(num) {
  console.log("chamou a function multiplicar")
  return num * num
}

multiplicar(2)

console.log(example, data);
