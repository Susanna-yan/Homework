/*----------1-------------
function getUniqueUsers(users){
    const map = new Map();
    for(let user of users){
        map.set(user.id, user);
    }

    return Array.from(map.values());
}

const users = [
    {id: 1, user: 'John'},
    {id: 2, user: 'Anna'},
    {id: 1, user: 'John'}
];

console.log(getUniqueUsers(users));*/

/*--------------2----------
function mapToJson(map){
    return JSON.stringify([...map]);
}

function jsonToMap(jsonStr){
    return new Map(JSON.parse(jsonStr));
}

const myMap = new Map([['a',1],['b',2]]);
const jsonStr = mapToJson(myMap);
console.log(jsonStr);
const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap);*/

/*----------3------------
function groupByGroup(students){
   const map = new Map();
   for(let student of students){
    const group = student.group;
    const name = student.name;
     if(!map.has(group)){
        map.set(group, []);
     }
      map.get(group).push(name)
   }
    return map;
}

const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

console.log(groupByGroup(students));*/

/*----------4---------
const likesMap = new Map();
function addLike(post,user){
    if(!likesMap.has(post)){
        likesMap.set(post, []);
    }
    likesMap.get(post).push(user);
}

function getLikes(post){
    return likesMap.get(post) || [];
}

let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

addLike(post1, 'John');
addLike(post1, 'Anna');

console.log(getLikes(post1)); 
console.log(getLikes(post2));*/

/*-----------5-------------
function filterSpam(text, badWordsArray){
    const Wordset = new Set(badWordsArray);
    return text
        .split(" ")
        .map(word => Wordset.has(word) ? "***" : word)
        .join(" ");
}

const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

console.log(filterSpam(text, badWords));*/

/*----------6-------------
function intersection(set1, set2){
 const interset = new Set();
    for(let int of set1){
        if(set2.has(int)){
            interset.add(int);
        }
    }
     return interset;
}

function difference(set1, set2){
   const diffset = new Set();
   for(let diff of set1){
    if(!set2.has(diff)){
        diffset.add(diff);
    }
   }
    return diffset;
}

const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);
console.log(intersection(setA,setB));
console.log(difference(setA,setB));*/
