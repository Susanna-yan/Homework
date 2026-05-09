/*----Part 1 task 1------
console.log("Start");
setTimeout(() => {
    console.log("Hello after 2 seconds");
},2000);*/

/*--------2-----------
for(let i = 5 ; i > 0; --i){
    setTimeout(()=>{
        console.log(i);
     if(i === 1){
        console.log("Go!");
     }
    },(5 - i) * 1000);
}*/

/*---------3------------
const exec = setTimeout(() => {
    console.log("Executed");
}, 5000);

setTimeout(() => {
    clearTimeout(exec);
    console.log("Canceled");
},2000)*/

/*-------4-----
let count = 1;
function rec(){
    console.log(count);
    count++;
    setTimeout(rec,1000);
}
rec();*/

/*------5---------
console.log("Start");
setTimeout(() => {
 console.log("Timeout");
}, 0);

console.log("End");
// Start --> Call Stack 
// Timeount --> Macrotask Queue
// End --> Call Stack*/

/*------------6------------
setTimeout(() => console.log("A"), 1000);

setTimeout(() => console.log("B"), 0);

console.log("C");
// C --> Call Stack
// B --> Macrotask Queue
// A --> Macrotask Queue*/

/*-----------7--------
function delay(massage, time){
    setTimeout(() => {
        console.log(massage);
    }, time);
}
delay("Hello", 3000);*/

/*---------------8---------
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});*/

/*-------------9------------
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Error!");
    }, 1000)
})

promise.catch((error)=>{
    console.log(error);  
})*/

/*----------------10----------
function pay(balance, amount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(balance >= amount){
             resolve("Payment successful!");
          } else {
            reject("Not enough money!");
          }
    },1000);
  });
};

pay(1000,300)
    .then((result) => {
       console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });*/

/*-------------11-------------
function getUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id:1, name: "Anna"})
        }, 1000)
    });
};

function getPosts(){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {id: 1, post: "post 1"},
            {id: 2, post: "post 2"}
          ]);
        }, 1000);
    });
};

function getComments(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve([
                "Your are awsome",
                "Nice post"
            ]);
        }, 1000)
    });
};

getUser()
    .then((user) => {
        console.log("User: ", user);
        return getPosts(user);
    })
    .then((post) => {
        console.log(("Posts: ", post));
        return getComments(post);
    })
    .then((comments) => {
        console.log("Comments: ", comments);
    })
    .catch((error) => {
        console.log(error);
        
    })*/

/*------12-------
console.log("1");

setTimeout(() => {
 console.log("2");
}, 0);
Promise.resolve().then(() => {
 console.log("3");
});

console.log("4");
// 1 --> call stack
// 2 --> macrotask
// 3 --> microtask        // 1,4,3,2
// 4 --> call stack*/

/*-----------13-----------
console.log("A");

Promise.resolve().then(() => {
 console.log("B");
});

Promise.resolve().then(() => {
 console.log("C");
});

setTimeout(() => {
 console.log("D");
}, 0);

console.log("E");
// A --> call stack
// B --> microtask
// C --> microtask
// D --> macrotask
// E --> call stack         // A,E,B,C,D*/

/*---------14-------------
console.log("Start");
setTimeout(() => {
 console.log("Timeout 1");

 Promise.resolve().then(() => {
   console.log("Promise inside timeout");
 });
}, 0);

Promise.resolve().then(() => {
 console.log("Promise 1");
});

setTimeout(() => {
 console.log("Timeout 2");
}, 0);

console.log("End");
// Start --> call stack
// Timeout 1 --> macrotask
// Promise inside timeout --> microtask
// Promise 1 --> microtask
// Timeout 2 --> macrotask    
// End --> call stack        // Start,End,Promise 1,Timeout 1,Promise inside timeout, Timeout 2*/

/*--------------15--------------
function changeLight(color, time){
    return new Promise((resolve) => {
        console.log(color);
        setTimeout(() => {
            resolve();
        }, time);
    })
};

function traffic(){
     changeLight("Red", 3000)
     .then(() => changeLight("Green", 2000))
     .then(() => changeLight("Yellow", 1000))
     .then(() =>{
        traffic();
     })
};
traffic();*/

/*-------------16--------------
function downloadFile(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File downloaded!");
        }, 1000);
    });
};

function resizeImage(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Image resized!");
        }, 2000);
    });
};

function uploadFile(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("FIle uploaded!");
        },3000);
    });
};

downloadFile()
      .then((down)=>{
         console.log(down);
         return resizeImage();
      })
      .then((resize)=>{
        console.log(resize);
        return uploadFile();
      })
      .then((upload)=>{
        console.log(upload);
      })*/


/* Task 17 — Mini Event Loop Explanation
 Call Stack
1) Սա այն տեղն է, որտեղ JavaScript-ը “աշխատեցնում է” կոդը քայլ առ քայլ։
Ինչ որ function կանչվում է մտնում է stack, ավարտվում է դուրս է գալիս։
Միաժամանակ աշխատում է միայն մեկը։

 Web API
2) Սա browser-ի “օգնական համակարգն” է։
Այստեղ են գնում async բաները օրինակ setTimeout, fetch, event-ներ։
JavaScript-ը ինքնուրույն չի սպասում, տալիս է Web API-ին ու շարունակում է աշխատանքը։

 Macrotask Queue
3) Սա հերթ է, որտեղ գնում են “մեծ” async tasks-ը
օրինակ setTimeout, setInterval, DOM events։
Event Loop-ը հետո հերթով վերցնում է այստեղից։

 Microtask Queue
4) Սա ավելի բարձր priority ունեցող հերթ է։
Օրինակ Promise.then, catch, queueMicrotask։
Սա աշխատում է Macrotask-ից առաջ։

 Event Loop
5) Սա այն “մեխանիզմն” է, որը նայում է՝
Call Stack-ը դատարկ է եթե այո
վերցնում է microtask-ները, հետո macrotask-ները ու ուղարկում execution-ի։*/

/*--------Bonus Tasks---------
function wait(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, time);
    });
};

wait(2000).then(()=>{
    console.log("Done");
});*/

/*-----Hard Challenge----------
console.log("1");
setTimeout(() => {
 console.log("2");

 Promise.resolve().then(() => {
   console.log("3");
 });

}, 0);

Promise.resolve().then(() => {
 console.log("4");
});

console.log("5");

setTimeout(() => {
 console.log("6");
}, 0);
// 1 --> Call Stack
// 2 --> Macrotask
// 3 --> Macrotask
// 4 --> Microtask
// 5 --> Call Stack
// 6 --> Macrotask    // 1,5,4,2,3,6*/
