

// 타입 추론 기본 1 
var a;

function getB(b = 10) {
    var c = 'hi'
    return b + c;
}


// 타입 추론 기본 2
// interface dropddown<T>{
//     value: T
//     title: string;
// }

// var shoppingItem : dropddown<string> = {
//     value : 'abc',
//     title: 'hello'
// }


// 타입 추론 기본 3
interface dropddown<T>{
    value: T
    title: string;
}

interface DetailedDropdown<K> extends dropddown<K>{
    description: string;
    tag: K;
}


var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description:'ab',
    value:'fdsaf',
    tag:'dfas'

}

// best common type
var arr = [1,2,'3',null]