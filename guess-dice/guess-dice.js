
// 誰
let selects = document.querySelectorAll('select');
let startBtn = document.querySelector('button');
let ansResult = document.querySelector('tbody');
console.log(selects);
// 什麼時候
startBtn.addEventListener('click', function () {
    // 要做什麼
    // 1.取得select的值，預設123
    // 2.迴圈不斷執行直到數字出現123
    // 3.迴圈過程紀錄每一次出現的值

    ansResult.innerHTML = '';
    let ans = '';
    for (let i = 0; i < selects.length; i++) {

        ans += selects[i].value;

    }
    console.log(ans);

    let count = 1;
    let systemAns = '';
    for (let i = 1; ans !== systemAns; i++) {
        systemAns = '';
        for (let i = 0; i < ans.length; i++) {

            systemAns += randomNumber(6, 1);

        };
        console.log(systemAns);
        ansResult.innerHTML += `
            <tr>
                <td>第${count}次</td>
                <td>${systemAns}</td>
            </tr>
            `;
        count++;
    }
});



// fn
function randomNumber(max, min) {
    return Math.floor(Math.random() * max) + min;
};



