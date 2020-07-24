import Benchmark from "benchmark";

import {palindromeDescendant as craig} from './implementations/craig.js';
import {palindromeDescendant as matt} from './implementations/matt.js';
import {PalindromeDescendant as alex} from './implementations/alex.js';
import numbers from "./numbers";

const suite = new Benchmark.Suite;

suite
    .add('palindromeDescendant#craig', function () {
        numbers.forEach((x) => craig(x));
    })
    .add('palindromeDescendant#matt', function () {
        numbers.forEach((x) => matt(x));
    })
    .add('palindromeDescendant#alex', function () {
        numbers.forEach((x) => alex(x));
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});
