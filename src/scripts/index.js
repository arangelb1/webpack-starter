import '../styles/index.scss';

// const { Car } = require("./models/car");

// // if (process.env.NODE_ENV === 'development') {
// //   require('../index.html');
// // }

// // console.log('webpack starterkit');


// // const carId = 100;

// // let carID = 42;
// console.log('Hello World!!!');

// let carId = 100;
// console.log(carId);
// carId = 50;
// console.log(carId);
// function sendCars(day, ...allCarIds) {
//     allCarIds.forEach( id => console.log(id));
// }
// sendCars('Monday', 100, 200, 555);
// let carIds = [1, 2, 5];

// // let [car1, car2, car3] = carIds;
// // console.log(car1, car2, car3);

// let car1, remainingCars;
// [car1, ... remainingCars] = carIds;
// console.log(car1, remainingCars);

// let car = { id: 5000, style: 'convertible'};
// let id, style;
// ({ id, style } = car);
// console.log(id, style);

// function startCars(car1, car2, car3, ...rest) {
//     console.log(car1, rest);
// }

// let carCodes = [100, 300, 500, 'abc', 40, 20];

// startCars(...carCodes);

// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof('Hello'));
// // console.log(typeof( function() {} );
// console.log(typeof({}));
// console.log(typeof(null));
// console.log(typeof(undefined));
// // console.log(typeof(NaN);

// console.log(carIds.toString());
// console.log(Number.parseInt('55'));
// console.log(Number.parseFloat('55.88ABC'));
// console.log(Number.parseFloat('Abc55.88'));

// let i=0;
// for (; i<5; i++) {
//     // console.log(i);
//     if (i === 3) {
//         break;
//     }
// }
// console.log(i);

// for (let i=0; i<4; i++) {
//      if (i === 2) {
//         continue;
//     }
//     console.log(i);
// }

// import {Car} from './models/car.js';

// let car = new Car(123);
// console.log(car.id);


// let Caryear = 1965;

// console.log(window.innerWidth);

// console.log(document.location.href);

// let el = document.getElementById('first');

// el.textContent = 'Another New Text';
// console.log(el);

// let els = document.getElementsByClassName('p3');
// el.style.color = 'green';

// console.log(els);

// try { 
//     let car = new Car;
//     console.log(car);
// }
// catch(error) {
//     console.log('error: ', error);
// }

// console.log('continuing...');


// let promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(resolve, 100, 'someValue');
//     }
// );

// promise.then(
//     value => console.log('fulfilled: ' + value),
//     error => console.log('rejected: ' + error)
// );

// console.log(promise);

// import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];

    let userError = document.getElementById('user-error');

    userError.textContent - 'Invalid entry';
    userError.style.color = 'red';
    user.style.borderColor = 'red';
    user.focus();

	let avatarFile = form.elements['avatar-file'];

    console.log(user.value, avatarFile.value);
    
    event.preventDefault();
});