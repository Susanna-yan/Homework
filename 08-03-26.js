/*------------1--------------
function forEach(arr,callback){
    for(let i = 0; i < arr.length; ++i){
        callback(arr[i], i, arr);
    }
}
let array = [60,30,40,"hello"];
forEach(array,function(currval,index,arr){
    console.log(`Value: ${currval}, Index: ${index}, Array: ${arr}`);
})*/

/*------------2-------------
function myMap(arr,callback){
    let array = [];
    for(let i = 0; i < arr.length; ++i){
       array.push(callback(arr[i],i, arr));
    }
     return array;
}

let arr = [10,30,60,33];
let res = myMap(arr,function(currVal,index,arr){
    console.log(`Value: ${currVal}, Index: ${index}, Array: ${arr}`);
    return currVal * 2;

})
console.log(res);*/

/*----------3---------------
function myFilter(arr,callback){
    let array = [];
    for(let i = 0; i < arr.length; ++i){
        if(callback(arr[i],i,arr)){
            array.push(arr[i]);
        }
    }
      return array;
}

let arr = [12,19,20,11];
let res = myFilter(arr,function(currVal,index,arr){
    // console.log(`Value: ${currVal}, Index: ${index}, Array: ${arr}`);
    return currVal >= 18;
})
console.log(res);*/

/*------------4-------------
function mySome(arr,callback){
    for(let i = 0; i < arr.length; ++i){
        if(callback(arr[i],i,arr)){
            return true;
        }
    }
     return false;
}

let array = [1,2,3,5];
let even = mySome(array,function(val){
     return (val % 2 === 0); 
})
console.log(even);*/

/*-------------5----------------
function myEvery(arr,callback){
    for(let i = 0; i < arr.length; ++i){
        if(!callback(arr[i],i,arr)){
            return false;
        }
    }
     return true;
}

let array = [1,3,5,7,9];
let odd = myEvery(array,function(val){
    return (val % 2 !== 0);
          
})
console.log(odd);*/

/*------------6---------------
function myIndexOf(arr, search){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === search){
            return i;
        }
    }
      return -1;
}

let arr = [3,2,4,5,7];
let index = myIndexOf(arr,7);
console.log(index);*/