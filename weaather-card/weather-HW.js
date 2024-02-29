// 誰***
// 宣告變數
const tabs = document.querySelectorAll('.tab');
const locCard = document.querySelector('.loc-card');
const cardResults = document.querySelectorAll('.card-content');

// 宣告地區陣列
const locArr = [
    ['全台'],
    ['臺北市', '新北市', '基隆市', '新竹市', '桃園市', '新竹縣', '宜蘭縣'],
    ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
    ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣'],
    ['花蓮縣', '臺東縣'],
    ['金門縣', '連江縣'],
];



let i = 0
// 使用fetch請求36小時天氣資訊
fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2497FEFB-378D-4EE8-B9BE-C99ACEB8E680')
    .then((res) => {
        return res.json();
    }).then((data) => {
        

        // 預設初始畫面為全台天氣資料
        locShow(data,0);

        // 甚麼時候***
        // 事件監聽 切換頁籤，使用forEac遍歷所有tab
        tabs.forEach((tab, tabIndex) => {
            // console.log(tab);
            tab.addEventListener('click', () => {
                console.log(i++);
                // 點擊tab時所有tab移除CSS
                tabs.forEach((removeTab) => {
                    removeTab.classList.remove('tab-active');
                });
                // 移除後個別tab在新增CSS，結合上方移除功能達到切換頁籤換色效果。
                tab.classList.add('tab-active');

                //*** 先清空效果在長出新內容***(詢問老師為何使用+=依舊會蓋過之前的內容)
                locCard.innerHTML = '';

                // console.log(locArr[tabIndex]);
                // 要做什麼***
                // 點擊tab時更換內容
                locShow(data,tabIndex);

            });


        });
        

    });




// 將location.forEach做成fn，多使用一個參數來決定目前地區誰要顯示
function locShow(material, index) {
    const location = material.records.location;
    console.log(location);
    location.forEach((locEl, locIndex) => {
        const locName = locEl.locationName;
        const weatherEl = locEl.weatherElement;
        const Wx = weatherEl[0];
        const PoP = weatherEl[1];
        const MinT = weatherEl[2];
        const CI = weatherEl[3];
        const MaxT = weatherEl[4];

        // console.log(locName);
        if (locArr[index].includes('全台') || locArr[index].includes(locName)) {
            // 預設為全台地區氣象
            locCard.innerHTML += `
            <h2>${locEl.locationName}</h2>
            <div class="card-content">
                <div class="card-content-left">
                    <h3>今日白天</h3>
                    <p class="temperature">${MinT.time[0].parameter.parameterName}~${MaxT.time[0].parameter.parameterName}℃</p>
                    <p class="feel">${CI.time[0].parameter.parameterName}</p>
                    <p class="rainy">降雨機率:${PoP.time[0].parameter.parameterName}%</p>
                </div>
                <div class="pic"><img src="${changeImg(Wx.time[0].parameter.parameterName)}" alt="${changeImg(Wx.time[0].parameter.parameterName)}"></div>
            </div>
            <div class="card-content">
                <div class="card-content-left">
                    <h3>今晚明晨</h3>
                    <p class="temperature">${MinT.time[1].parameter.parameterName}~${MaxT.time[1].parameter.parameterName}℃</p>
                    <p class="feel">${CI.time[1].parameter.parameterName}</p>
                    <p class="rainy">降雨機率:${PoP.time[1].parameter.parameterName}%</p>
                </div>
                <div class="pic"><img src="${changeImg(Wx.time[1].parameter.parameterName)}" alt="${changeImg(Wx.time[1].parameter.parameterName)}"></div>
            </div>
            <div class="card-content">
                <div class="card-content-left">
                    <h3>明日白天</h3>
                    <p class="temperature">${MinT.time[2].parameter.parameterName}~${MaxT.time[2].parameter.parameterName}℃</p>
                    <p class="feel">${CI.time[2].parameter.parameterName}</p>
                    <p class="rainy">降雨機率:${PoP.time[2].parameter.parameterName}%</p>
                </div>
                <div class="pic"><img src="${changeImg(Wx.time[2].parameter.parameterName)}" alt="${changeImg(Wx.time[2].parameter.parameterName)}"></div>
            </div>

        `;
        };
        console.log(locArr[index]);
    });


};

// fn 換圖片
function changeImg(index) {
    let change;
    let imgArr = [
        './img/01.svg',
        './img/02.svg',
        './img/05.svg',
        './img/09.svg',
        './img/10.svg',
    ];
    if (index.includes('晴天')) {
        change = imgArr[0];
    } else if (index.includes('晴') || index.includes('多雲')) {
        change = imgArr[1];
    } else if (index.includes('雨')) {
        change = imgArr[2];
    } else if (index.includes('陰')) {
        change = imgArr[3];
    } else {
        change = imgArr[4];
    };


    return change;
};


