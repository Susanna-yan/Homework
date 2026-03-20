/*------1--------
function isEven(n){
    if(n % 2 === 0){
        return true;
    } else{
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(1));
console.log(isEven(0));
console.log(isEven(-2));*/

/*-------2---------
function sumUpTo(n){
    let sum = 0;
    for(let i = n; i > 0; --i){
        sum += i;
    }
     return sum;
}
console.log(sumUpTo(5));
console.log(sumUpTo(10));*/

/*---------3------------
function minInArray(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; ++i){
        if(min > arr[i]){
            min = arr[i];
        }
    }
     return min;
}
console.log(minInArray([3,1,2]));
console.log(minInArray([-2, -10, 0]));
console.log(minInArray([7]));*/

/*--------4----------
function countDigits(n){
    let count = 0;
    n = Math.abs(n);
    if(n === 0) return 1;
    while(n >= 1){
        n = Math.floor(n / 10);
        count++;
    }
     return count;
}
console.log(countDigits(123));
console.log(countDigits(-94));
console.log(countDigits(0));*/

/*--------5---------
function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; ++i){
        sum += arr[i];
    }
      return sum;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([-1, 1]));
console.log(sumArray([5]));*/

/*--------6----------
function average(arr){
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < arr.length; ++i){
        sum += arr[i];
        avg = sum / arr.length;
    }
      return avg;
}
console.log(average([2,4,6]));
console.log(average([1,1,1,1]));
console.log(average([5]));*/

/*----------7--------------
function countChar(str,char){
    let count = 0;
    for(let i = 0; i < str.length; ++i){
        if(str[i] === char){
            count++;
        }
    }
      return count;
}
console.log(countChar("hello","l"));
console.log(countChar("JavaScript", "a"));
console.log(countChar("abc", "d"));*/

/*----------8-------------
function removeFirstChar(str){
    return str.slice(1);
}
console.log(removeFirstChar("hello"));
console.log(removeFirstChar("a"));
console.log(removeFirstChar(""));*/

/*---------9------------
function power(base, exp){
    let pow = 1;
    for(let i = 0; i < exp; ++i){
        pow *= base;
    }
     return pow;
}
console.log(power(2,3));
console.log(power(5, 0));
console.log(power(3, 2));*/

/*----------10-----------
function contains(arr,val){
        if(arr.includes(val)){
            return true;
        } else{
            return false;
        }
}
console.log(contains([1, 2, 3], 2));
console.log(contains([1, 2, 3], 5));
console.log(contains([], 1));*/

/*--------10----------
function con(arr,val){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === val){
            return true;
        } 
    }
      return false;
}
console.log(con([1, 2, 3], 2));*/

/*-----------11------------
function repeatString(str,n){
     let s = "";
    for(let i = 0; i < n; ++i){
        s += str;
    }
      return s;
}
console.log(repeatString("a",3));
console.log(repeatString("hi", 1));
console.log(repeatString("x", 0));*/

/*---------12------------
function firstAndLast(arr){
    if(arr.length === 0) return [];
    return [arr[0],arr[arr.length-1]];
}
console.log(firstAndLast([1, 2, 3]));
console.log(firstAndLast([5]));
console.log(firstAndLast([]));*/