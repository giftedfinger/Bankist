'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// creating a user name


function createUserName (accs){
  accs.forEach(acc=>{

    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })

}
createUserName(accounts)


const displayMovement = function(movements){
  containerMovements.innerHTML='';
movements.forEach((mov,i)=>{
let type = mov > 0 ? 'deposit':'withdrawal';

  const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i+1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€ </div>
        </div>`;
 
containerMovements.insertAdjacentHTML('afterbegin', html)
})

}



// calculating and  displaying balance

/* in Reduce, the first arguement is the accumulator which serves as summ
of all the movement values and then the other three. and the last is the 
initial value of accumulator.
*/

function calcDisplayBalance(movement){
let balance= movement.reduce((acc,mov) => acc + mov
,0);
  labelBalance.textContent = `${balance}€ `
}





// display summary

function DisplaySummary(acc){
 const income = acc.movements.filter(mov => mov > 0).reduce((acc,cur)=> acc + cur,0)
  const outcome = acc.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur,0)

  labelSumIn.textContent = `${income}€ `
  labelSumOut.textContent = `${outcome }€ `

}



//  Login

let currentAccount;

btnLogin.addEventListener('click', (e)=> {
  e.preventDefault()
  // console.log('yes')
  currentAccount = accounts.find(a=> a.username === inputLoginUsername.value);

if(currentAccount?.pin === Number(inputLoginPin.value)){
  // Display Ui and message
labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity=1;

// clear input log in pin
inputLoginUsername.value =inputLoginPin.value =' '
inputLoginUsername.blur();

// display Movement
  displayMovement(currentAccount.movements);
// display balance
  calcDisplayBalance(currentAccount.movements)
//display summary
  DisplaySummary(currentAccount);

}

})


//------------Transfer

 
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Creating a username for each accounts.
// split allows us to break strings into an array...
// foreach here makes us to create a side effect which means without returning




console.log(accounts)

let movements =[5000, 3400, -150, -790, -3210, -1000, 8500, -30]

let withdrawal = movements.filter(mov => mov<0);
console.log(withdrawal)

const account = accounts.find(a => a.owner === 'Jonas Schmedtmann',)


console.log(account?.movements)






// let balance =movements.reduce(function(acc,cur,i ,arr){
// console.log(`iteration ${i}: ${acc}`)
//   return acc + cur

// },0)

// console.log(balance)
// let movDescription =account3.movements.map((mov,i)=> `movement ${i+1 }: you ${ mov > 0 ? ' deposited': ' withdraw'} ${Math.abs(mov)}`

// )

// console.log(movDescription)