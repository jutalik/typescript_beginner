// enum Shoes {
//     Nike ,
//     Adidas,
//     NewBalance
// }



// var myShoes = Shoes.Nike;
// // 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급됨
// console.log(myShoes) // 0 

enum Shoes {
    Nike = 'nike',
    Adidas = '아디다스',
    NewBalance = '뉴발란스'
}



var myShoes = Shoes.Nike;
// 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급됨
console.log(myShoes) // 'nike'


enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: string){
    if(answer ===Answer.Yes){
        console.log('정답입니다')
    }
    if(answer ===Answer.No){
        console.log('오답입니다')
    }

}

askQuestion(Answer.Yes)

