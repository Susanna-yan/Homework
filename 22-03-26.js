/*-----------------Call----------------------
Function.prototype.myCall = function(thisArgs, ...args){
    thisArgs = thisArgs ?? globalThis;
    thisArgs = Object(thisArgs);
    const sym = Symbol();
    thisArgs[sym] = this;
    const res = thisArgs[sym](...args);
    delete thisArgs[sym];
    return res;
}
    function showInfo(city, country){
        return `${this.name} lives in ${city}, ${country}`;
    }

const user = {name: "Joe Doe"};
console.log(showInfo.myCall(user,"New-York","USA"));*/

/*------------------Apply---------------------
Function.prototype.myApply = function (thisArgs, args){
    thisArgs = thisArgs ?? globalThis;
    thisArgs = Object(thisArgs);
    const sym = Symbol();
    thisArgs[sym] = this;
    const res = thisArgs[sym](...args);
    delete thisArgs[sym];
    return res;
}

  function showInfo(city,country){
    return `I'm ${this.name} lives in ${city}, ${country}`;
  }

const user = {name: "Anna"};
const arg = ["Moscow", "Russia"];
console.log(showInfo.myApply(user,arg));*/

/*--------------------Bind--------------------
Function.prototype.myBind = function(thisArgs, ...args){
   const fn = this;
   return function(...argsCall){
     return fn.apply(thisArgs,[...args, ...argsCall]);
   }
}

  function showInfo(city,country){
      return `I'm ${this.name} lives in ${city}, ${country}`
  }

const person = {name: "Nare"};
const boundShowInfo = showInfo.myBind(person, "Erevan");
console.log(boundShowInfo("Armenia"));*/
