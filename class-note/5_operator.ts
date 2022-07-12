// function logMessage(value: any):void{
//     console.log(value)
// }

// logMessage('hello')
// logMessage(100)



// | 를 사용하여 다중 타입 지원
function logMessage(value:string | number):void {
 if(typeof value === 'number'){
     value.toLocaleString();
 }
 if(typeof value === 'string'){
     value.toString()
 }

 throw new TypeError('value must be string or number');
}


logMessage('hello')
logMessage(100)



interface Developer {
    name : string;
    skill:string;
}

interface Person {
    name : string
    age : number
}


// function askSomeone(someone: Developer | Person) {
//     someone.name
//     // 타입스크립트 입장에선 명확한 타입이 아니기때문에 union type의 경우에 Developer와 Person의 종복되는 것들만 okay
//     // someone.skill
//     // someone.age
// }

// askSomeone({name : '디벨로퍼', skill:'웹개발'})
// askSomeone({name : '디벨로퍼', age:13})



//인터섹션
function askSomeone(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}
askSomeone({name : '디벨로퍼', skill:'웹개발',age:10})


// var seho: string | number | boolean
// var jagnju: string & number & boolean