
let array =['п', 'р', 'о', 'и', 'з', 'в', 'о', 'л', 'ь', 'н', 'ы', 'й', ' ', 'м', 'а', 'с', 'с', 'и', 'в']
for(let i = 0; array.length > i; i++ ){
    setTimeout(function(){
        document.querySelector('.out').innerHTML += array[i] ;
    }, i*500);
}

let btn = document.querySelector('.btn')
btn.onclick = () => {
    let newtext = array.filter(one => one )
    document.querySelector('#text').innerHTML = newtext[4]
}

//Задание Второе
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNum = num.filter(arr => arr)
document.querySelector('.out1').innerHTML = newNum

let btn1 = document.querySelector('.btn1')
btn1.onclick = () => {
    let evenNumbers = num.filter(arrNum => arrNum % 2 == 1)
    document.querySelector('#text1').innerHTML = evenNumbers
}

//Задание третье
document.querySelector('.out2').innerHTML = newNum

let btn2 = document.querySelector('.btn2')

btn2.onclick = () => {
    let nonEvenNumbers = num.filter(numArr => numArr % 2 == 0)
    document.querySelector('#text2').innerHTML = nonEvenNumbers
}
// Четвертое задание
let forArr = [
    ['Первый ', 1 , 2 , 3],
    ['Второй ', 'a ', 'b ', 'c' ],
    ['Третий ', 7 , 8 , 9 ]
] 

forArr.forEach(txt => document.querySelector('.out3').innerHTML += txt.join(' ')+ ', ')

let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')

let out4 = ' '
btn3.onclick = () => {
    for(let i =forArr.length -1; i>=0 ; i-- ){
        out4 += forArr[i].join(' ') + ', '
    }
    document.querySelector('#text3').innerHTML  = out4
}

let out5 = ' '
btn4.onclick = () => {
    for(let i = 0; forArr.length > i ; i++ ){
        let c = forArr[i]
        for(let j=c.length -1;j>=0;j--){
            out5 += c[j] + ' ' 
        }
    }
    document.querySelector('#text4').innerHTML  = out5 
}
let out6 = ' '
btn5.onclick = () => {
    for(let i =forArr.length -1; i>=0 ; i-- ){
        let c = forArr[i]
        for(let j=c.length -1;j>=0;j--){
            console.log(c[j])
            out6 += c[j]+ ' '
        }
    }
    document.querySelector('#text5').innerHTML  = out6
}