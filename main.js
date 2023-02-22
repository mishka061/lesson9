//Задание первое

let array =['п', 'р', 'о', 'и', 'з', 'в', 'о', 'л', 'ь', 'н', 'ы', 'й', ' ', 'м', 'а', 'с', 'с', 'и', 'в']
let out = ' '
for(let i = 0; array.length > i; i++ ){
    setTimeout(function(){
        document.querySelector('.out').innerHTML += array[i] ;
    }, i*500);
}

let btn = document.querySelector('.btn')
let text = ' '
btn.onclick = () => {
    for(let i = 12; array.length > i; i++){
        text += array[i]
    }
    document.querySelector('#text').innerHTML = text
}

//Задание Второе

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let out1 =' '
for( let i = 0; num.length > i; i ++){
    out1 += num[i] + ' '
}
document.querySelector('.out1').innerHTML = out1

let btn1 = document.querySelector('.btn1')
let text1 = ' '
btn1.onclick = () => {
    for(let i = 0; num.length > i; i++){
        if (i % 2 == 0 ){
            text1 += num[i] + ' '
        }
    }
    document.querySelector('#text1').innerHTML = text1
}

//Задание третье

let out2 =' '

for( let i = 0; num.length > i; i ++){
    out2 += num[i] + ' '
}
document.querySelector('.out2').innerHTML = out2

let btn2 = document.querySelector('.btn2')
let text2 = ' '
btn2.onclick = () => {
    for(let i = 0; num.length > i; i++){
        if (i % 2 == 1 ){
            text2 += num[i] + ' '
        }
    }
    document.querySelector('#text2').innerHTML = text2
}
