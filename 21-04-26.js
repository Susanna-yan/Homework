/*-----------1---------
const myRange = {
    from: 10,
    to: 20,
    [Symbol.iterator](){
      let curr = this.to;
      let last = this.from;

      return {
        next(){
            if(curr >= last) {
                return {value: curr--, done: false};
            } else {
                return {done: true};
            }
        }
      };
    }
};

console.log([...myRange]);

for(let rang of myRange){
    console.log(rang);
}*/

/*---------2----------
const digits = [1,2,3];
const bonus = [4,5];

const extraNumbers = {
    [Symbol.isConcatSpreadable]: true,
    0: 4,
    1: 5,
    length: 2
}

bonus[Symbol.isConcatSpreadable] = false;

const res = digits.concat(extraNumbers);
console.log(res);
const resBon = digits.concat(bonus);
console.log(resBon);*/

/*------------3---------
class OldValidator{
    static [Symbol.hasInstance](instance){
        if(typeof instance === 'number' && instance % 2 !== 0) return true;
        if(typeof instance === 'string') return false;
    }
}

const x = 5;
const y = 10;
const z = "7";

console.log(x instanceof OldValidator);
console.log(y instanceof OldValidator);
console.log(z instanceof OldValidator);*/

/*----------4---------
const Account = {
    balance: 500,
    currency: "USD",
    [Symbol.toPrimitive](hint){
        if(hint === 'number') return this.balance;
        if(hint === 'string') return `Account Balance: ${this.balance} ${this.currency}`;
        return this.balance; 
    }
};

console.log(+Account);
console.log(String(Account));
console.log(Account + 500);*/

