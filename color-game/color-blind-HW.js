
// 需求 (11/20 檢討)
// 1. 要有得分 顯示在畫面上
// 2. 要能依據得分 增加等級
// 3. 答案的透明度要依據等級越來越不透明
// 4. 進入遊戲的時候 顏色不能定死
// 5. 承上 選到正解 要能換色換答案
// 6. 選錯 要有懲罰

// 宣告變數-起始介面
const interFaceStart = document.querySelector('.wrap-start');
const interFaceGame = document.querySelector('.wrap-game');
const playBtn = document.querySelector('.play-btn');
console.log(playBtn);

// 宣告變數-遊戲內容
const container = document.querySelector('.container');
const ans = document.querySelector('.ans');
const getScore = document.querySelector('.getScore');
const levelArea = document.querySelector('.level-area');
const resetBtn = document.querySelector('.reset-btn');
const promptBtn = document.querySelector('.prompt-btn');
console.log(ans);
// 宣告變數-倒計時功能
const stopBtn = document.querySelector('.stop-btn');
const continueBtn = document.querySelector('.continue-btn');
const countDownTimer = document.querySelector('.countdown-timer');
const stopTimer = document.querySelector('.stop-timer');
const interFaceTimeStop = document.querySelector('.wrap-time-stop');
// 宣告變數-統計結果
const interFaceResult = document.querySelector('.wrap-result');
const scoreResult = document.querySelector('.score-result');
const levelResult = document.querySelector('.level-result');
const comments = document.querySelector('.comments');
const backBtn = document.querySelector('.back-btn')
console.log(backBtn);

//事件監聽 轉換介面
playBtn.addEventListener('click', function () {
    interFaceStart.style.display = 'none';
    interFaceGame.style.display = 'flex';
    reStart();
});

// 事件監聽 點擊.container >.box 宣告初始值
let level = 1;
let score = 0;
getScore.innerHTML = `得分：${score}`;
levelArea.innerHTML = `第${level}關`;
// 事件監聽 點擊.container >.box
container.addEventListener('click', function () {
    // console.log(event.target);  

    if (!event.target.classList.contains('box')) {
        return;
    }

    // 點到答案時，接著隨機生成方塊
    if (event.target.classList.contains('ans')) {
        addBoxes();
        score++;
        getScore.innerHTML = `得分：${score}`;
        levelArea.innerHTML = `第${level}關`;

        // 晉級判斷
        if (score <= 3) {
            level++;

        } else if (score > 3 && score % 3 === 0) {
            level++;
        }
        // console.log('score:', score);
        // console.log('level', level);    

    } else {
        // 降級判斷
        console.log('normal', level);
        if (score > 0) {
            alert('扣一分')
            score = score - 1;
        };
        if (score > 3 && score % 3 === 0) {
            alert('答錯降一關～');
            level--;
        } else if (score >= 1 && score <= 3) {
            alert('答錯降一關～!!');
            level = score;
            console.log('1~3', level);
        } else if (score <= 0) {
            alert('加油好嗎');
            score = 0;
            level = 1;
        };
        getScore.innerHTML = `得分：${score}`;
        levelArea.innerHTML = `第${level}關`;
        addBoxes();

    };


});
// 事件監聽 Time Stop
stopBtn.addEventListener('click', function () {
    clearInterval(timer);
    interFaceGame.style.display = 'none';
    interFaceTimeStop.style.display = 'flex';
    stopTimer.innerHTML = countDown;

});
// 事件監聽 Time Start
continueBtn.addEventListener('click', function () {
    startCountdown(timer);
    interFaceGame.style.display = 'flex';
    interFaceTimeStop.style.display = 'none';
});

// 事件監聽 提示功能
let promptTimes = 3;
promptBtn.addEventListener('click', function () {
    const ans = document.querySelector('.ans');

    ans.classList.add('ani')

    setTimeout(() => {
        ans.classList.remove('ani')
    }, 2000);
    promptTimes--;
    promptBtn.innerHTML = `提示剩餘${promptTimes}次`;
    console.log(promptTimes);
    if (promptTimes < 0) {
        promptTimes = 0;
        promptBtn.innerHTML = `提示剩餘0次`;
        ans.classList.remove('ani')
        alert('提示已用盡!!');
    }



});

// 事件監聽 重置關卡
resetBtn.addEventListener('click', reStart)

// 事件監聽 返回起始頁
backBtn.addEventListener('click', function () {
    interFaceResult.style.display = 'none';
    interFaceStart.style.display = 'flex';
});

// 遊戲介面 - 初始畫面
addBoxes();
//fn 生成方塊
function addBoxes() {
    let boxLvAmount = boxAmount(level);
    // console.log(boxLvAmount);
    let randomAnsBox = randomNumber(boxLvAmount, 0);
    // console.log(randomAnsBox);

    // 在生成方塊之前，先清空所有方塊
    container.innerHTML = '';


    // 取得rgb顏色
    let rColor = randomNumber(200, 50);
    let gColor = randomNumber(200, 50);
    let bColor = randomNumber(200, 50);


    for (let i = 0; i < boxLvAmount; i++) {
        if (i == randomAnsBox) {
            container.innerHTML += `
            <div class="box ans" 
            style="width:${boxVolume(level)}px;
            height:${boxVolume(level)}px;
            background-color:rgb(${rColor},${gColor},${bColor});
            opacity: ${addOpacity(level, 0.2)};">
            </div>`;

        } else {
            container.innerHTML += `<div class="box" 
            style="width:${boxVolume(level)}px;
            height:${boxVolume(level)}px;
            background-color:rgb(${rColor},${gColor},${bColor});">
            </div>`;
        }
    };
    console.log('opacity', addOpacity(level, 0.2));

};




//fn 亂數
function randomNumber(max, min) {
    return Math.floor((Math.random() * (max - min)) + min);
};
// console.log('亂數：',randomNumber(255,50));
//fn 不同等級的box數量
function boxAmount(lv) {
    return (lv + 1) * (lv + 1);
};
//fn box自動生成寬高計算
function boxVolume(lv) {
    if( window.innerWidth <= 767 ){
        return ((330 - 30) - 5 * lv) / (lv + 1);
    }else{
        return ((600 - 30) - 15 * lv) / (lv + 1);
    }
};
//fn 透明度設置
function addOpacity(lv, opa) {
    // 由第2關開始減少透明度
    for (let i = 1; i < lv; i++) {
        if (i >= 2) {
            opa = opa + 0.08;
        };
    }
    if (opa >= 0.85) {
        opa = 0.85;
    };
    return opa;
};
// console.log(addOpacity(level,0.2));

//fn 倒數計時
let countDown = 59;
let timer;
startCountdown();
function startCountdown() {
    timer = setInterval(function () {
        countDown--;
        countDownTimer.innerHTML = countDown;
        if (countDown <= 0) {
            clearInterval(timer);
            countDownTimer.innerHTML = "0";
            interFaceGame.style.display = 'none';
            interFaceResult.style.display = 'flex';
            scoreResult.innerHTML = `分數：${score}；`;
            levelResult.innerHTML = `等級：${level}`;
            comments.innerHTML = ``;
            if (level <= 3) {
                comments.innerHTML = `階級為：蝙蝠`;
            } else if (level <= 6) {
                comments.innerHTML = `階級為：大象`;
            } else if (level <= 9) {
                comments.innerHTML = `階級為：貓`;
            } else if (level <= 12) {
                comments.innerHTML = `階級為：狗`;
            } else if (level <= 14) {
                comments.innerHTML = `階級為：猩猩`;
            } else if (level == 15) {
                comments.innerHTML = `階級為：老鷹`;
            } else {
                comments.innerHTML = `階級為：神`;
            }
        }
    }, 1000);
}

//fn 重置關卡
function reStart() {
    score = 0;
    level = 1;
    getScore.innerHTML = `得分：${score}`;
    levelArea.innerHTML = `第${level}關`;
    addBoxes();
    clearInterval(timer);
    countDown = 60;
    startCountdown();
    promptTimes = 3;
    promptBtn.innerHTML = `提示剩餘${promptTimes}次`;
};

