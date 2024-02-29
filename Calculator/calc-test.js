// 宣告
let numA = document.querySelector('.numA');
let numB = document.querySelector('.numB');
let addBtn = document.querySelector('.add-btn');
let minusBtn = document.querySelector('.minus-btn');
let multBtn = document.querySelector('.mult-btn');
let divisionBtn = document.querySelector('.division-btn');
let result = document.querySelector('.result');
let resetBtn = document.querySelector('.reset-btn');
// fn area
function add(num1, num2) {
    result.innerHTML = num1 + num2;
}
function minus(num1, num2) {
    result.innerHTML = num1 - num2;
}
function mult(num1, num2) {
    let multCalc = (num1 * num2);
    result.innerHTML = multCalc;
}
function division(num1, num2) {
    let divisionCalc = (num1 / num2).toFixed(2);
    result.innerHTML = divisionCalc;
}


function nanResult(num1, num2) {
    if (num1 == NaN || num2 == NaN) {
        return console.log(111);
    }
}
console.log(typeof nanResult('1', 1));

// console.log('加法' , add(2,3));
// console.log('減法' + minus(2,3));
// console.log('乘法' + mult(2,3));
// console.log('除法' + division(2,3));

// 事件監聽
addBtn.addEventListener('click', function () {
    let numAValue = parseInt(numA.value);
    let numBValue = parseInt(numB.value);
    if (isNaN(numAValue) || isNaN(numBValue)) {
        console.log('請輸入數字');
        return alert('請輸入數字');
    }


    add(numAValue, numBValue);
})
minusBtn.addEventListener('click', function () {
    let numAValue = parseInt(numA.value);
    let numBValue = parseInt(numB.value);
    if (isNaN(numAValue) || isNaN(numBValue)) {
        console.log('請輸入數字');
        return alert('請輸入數字');
    }
    minus(numAValue, numBValue);
})
multBtn.addEventListener('click', function () {
    let numAValue = parseInt(numA.value);
    let numBValue = parseInt(numB.value);
    if (isNaN(numAValue) || isNaN(numBValue)) {
        console.log('請輸入數字');
        return alert('請輸入數字');
    }
    mult(numAValue, numBValue);
})
divisionBtn.addEventListener('click', function () {
    let numAValue = parseInt(numA.value);
    let numBValue = parseInt(numB.value);
    if (isNaN(numAValue) || isNaN(numBValue)) {
        console.log('請輸入數字');
        return alert('請輸入數字');
    }
    division(numAValue, numBValue);
})







