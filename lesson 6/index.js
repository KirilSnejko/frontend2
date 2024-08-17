// const Vehicle = function(make, model) {
//   this.make = make;
//   this.model = model
// }

// class Auto {
//   constructor(make, model) {
//     this._wheels = 4;
//     this.make = make;
//     this.model = model;
//   }
//   redecorated(options) {
//     for (const [key, value] of Object.entries(options)) {
//       this[key] = value;
//     }
//   }
// }

// class Vehicle extends Auto {
//   constructor(make, model, color) {
//     super(make, model);
//     this.color = color;
//   }
//   static isRed(car) {
//     return car.color === "red";
//   }
// }

// const fordF150 = new Vehicle("ford", "F150", "red");

// console.log(fordF150);

// // fordF150.redecorated({ lights: "led" });

// // console.log(fordF150);
// console.log(Object.keys(fordF150));
// console.log(Vehicle.isRed(fordF150));

// class PowerArray extends Array {
//   constructor(...params) {
//     super(params);
//     this.powerLength = params.length;
//   }

//   isEmpty() {
//     return !this.length;
//   }
// }

// const arr = new PowerArray(1, 2, 3, 4, 5);
// console.log(arr.powerLength);

// const obj = {};

// const callSayHello = (param) => param.sayHello();

// try {
//   try {
//     throw new Error("test error");
//   } catch (e) {
//     console.log();
//     console.log();
//   }
// } catch (error) {
//   console.log(error.message);
// }

// let num = +prompt("Введите положительное целое число?", 35);

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Должно быть целое неотрицательное число");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (e) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// alert(result || "возникла ошибка");

// alert(`Выполнение заняло ${diff}ms`);
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

class BankAccount {
  constructor(initialBalance) {
    this.balance = Number(initialBalance);
    this.intervalId = null;
  }

  isPositiveNumber(value) {
    return !isNaN(value) && Number(value) > 0;
  }

  deposit(depAmount) {
    try {
      if (!this.isPositiveNumber(depAmount)) {
        throw new Error("Deposit amount must be a positive number.");
      }
      this.balance += depAmount;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  withdraw(withdrawal) {
    try {
      if (!this.isPositiveNumber(withdrawal)) {
        throw new Error("Withdrawal amount must be a positive number.");
      }
      if (this.balance < withdrawal) {
        throw new Error("Insufficient funds for withdrawal.");
      }
      this.balance -= withdrawal;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  getBalance() {
    console.log(this.balance);
  }

  startInterest(interval, rate) {
    if (!this.isPositiveNumber(interval) || !this.isPositiveNumber(rate)) {
      console.error("Invalid interval or rate.");
      return;
    }
    this.intervalId = setInterval(() => {
      const interest = this.balance * (rate / 100);
      this.balance += interest;
      console.log(
        `Interest of ${interest} added. New balance: ${this.balance}`
      );
    }, interval * 1000);
  }

  stopInterest() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log("Interest calculation stopped.");
    } else {
      console.error("No active interest calculation.");
    }
  }

  scheduleTransaction(type, amount, delay) {
    setTimeout(() => {
      switch (type) {
        case "deposit":
          this.deposit(amount);
          console.log(`Deposited ${amount}. New balance: ${this.balance}`);
          break;
        case "withdraw":
          this.withdraw(amount);
          console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
          break;
        default:
          console.error("Unknown transaction type.");
          break;
      }
    }, delay * 1000);
  }
}

const mainAccount = new BankAccount(300);
const extraAccount = new BankAccount(2000);

console.log(mainAccount);
mainAccount.getBalance();

mainAccount.deposit(100);
mainAccount.getBalance();

mainAccount.withdraw(50);
mainAccount.getBalance();

mainAccount.withdraw(100000000);
mainAccount.getBalance();

mainAccount.deposit(-100);
mainAccount.getBalance();

mainAccount.deposit(0);
mainAccount.getBalance();

mainAccount.startInterest(3, 5);
mainAccount.stopInterest();

mainAccount.scheduleTransaction("deposit", 300, 2);
mainAccount.scheduleTransaction("withdraw", 200, 5);
