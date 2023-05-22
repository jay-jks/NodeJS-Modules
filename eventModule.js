import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('TankFull', () => {
  console.log('Please turn off motor!');
  setTimeout(()=>{
    console.log("It is a gentle reminder to turn off motor!");
  },5000);
});

console.log("The script is running");
myEmitter.emit('TankFull');
console.log("The script is still running");