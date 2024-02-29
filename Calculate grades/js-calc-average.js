let chinese = document.querySelector('#chinese');
let english = document.querySelector('#english');
let math = document.querySelector('#math');
let result = document.querySelector('#result');
let reset = document.querySelector('#reset');
let avg = document.querySelector('#avg');
let level = document.querySelector('#level');



// 事件監聽
result.addEventListener('click', function () {
    let svgCalc = ((chinese.value*1 + english.value*1 + math.value*1) / 3);
    let svgResult = svgCalc.toFixed(2);
    let levelResult = '';
    if (svgResult >= 90) {
        levelResult = 'A';
    }else if(svgResult >= 80){
        levelResult = 'B';
    }else if(svgResult >= 70){
        levelResult = 'C';
    }else if(svgResult >= 60){
        levelResult = 'D';
    }else{
        levelResult = '不及格！！';
    }
    console.log(svgResult);
    console.log(levelResult);
    avg.innerHTML = svgResult;
    level.innerHTML = levelResult;
});

reset.addEventListener('click', function () {
    // input要靠value賦值
    chinese.value = '';
    english.value = '';
    math.value = '';
    avg.innerHTML = '';
    level.innerHTML = '';
})

