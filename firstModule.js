// const simpleE = require('./secondModule.js');

// import {simple} from "./secondModule.mjs"
// import {simple1 as simple} from "./secondModule.mjs"
// import simple7 from "./secondModule.mjs"
// import {simple, simple2} from "./secondModule.mjs"
import * as a from "./secondModule.mjs"


// simpleE();
// simple();
// simple7();
// simple2();
console.log(a);
a.simple();
a.default();
a.simple2();
console.log(a.simple2());