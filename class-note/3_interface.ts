interface User {
    age:number;
    name: string;    
    option?: any
}



// 변수에 인터페이스 활용
var seho: User = {
    name: 'seho',
    age: 10
}

// 함수에 인터페이스 활용
function getUser(user:User):void{
    console.log(user)
}

const capt = {
    name: '캡틴'
}
// getUser(capt);
getUser(seho);



// 함수의 스펙(구조)에 인터페이스를 활용
interface PlusFunction {
    (a:number,b:number): number
}

var plus : PlusFunction
plus = function (a:number,b:number):number {
    return a+b;
}



// 인덱싱
interface StringArray {
    [index:number]: string
}


var _arr: StringArray = ['a','b','c'];
// _arr[0] = '10'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;    
}

var _obj:StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}


Object.keys(_obj).forEach(function(value){

})



// 인터페이스 확장
interface Person{
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var jangju: Developer ={
    name:'jangju',
    age: 34,
    language:'js'
}








