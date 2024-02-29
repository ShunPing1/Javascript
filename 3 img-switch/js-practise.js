let img = document.querySelector('img');
let flag = true;
let imgPath = ['./img/01.jpg','./img/02.jpg','./img/03.jpg'];
let clickTimes = 0;
console.log(imgPath);

// let orig = img.src;
// let number = 0;


console.dir(img);
// 計算點擊
// img.addEventListener('click', function () {
//     number++;
//     if (number % 2 === 1) {
//         img.src = "./img/sponge.jpg";
//     }else{
//         img.src = "./img/pactrick.jpg";
//     }
// })

// 使用布林值區分
// img.addEventListener('click', function () {
//     if (flag) {
//         console.log(flag);
//         img.src = './img/01.jpg';
//         flag = false;
//     }else{
//         img.src = './img/02.jpg';
//         flag = true;
//     }
// });

img.addEventListener('click', function () {
    clickTimes++;
    console.log(clickTimes);
    
    if (clickTimes >= imgPath.length) {
        clickTimes = 0;
        
    }
    img.src = imgPath[clickTimes];
});