// 宣告變數
// 創建空物件
// 將input的輸入值儲存成物件，並有對應的屬性
// 典籍創建按鈕後，將結果呈現在畫面中
const inputs = document.querySelectorAll('input');
const creatBtn = document.querySelector('.creat-btn');
const cardResult = document.querySelector('.card-area');
console.log(creatBtn);

let storeList = [
    {
        name: '柒串燒 逢甲店',
        img_path: 'https://lh3.googleusercontent.com/o1yKjJ2euZX401BP0BFlz8hEeLrzgUVW2qzWpzEKZ-QBkfnycoa2m9RFibsWBy_5n4uxNCtvWWCu1KaQeLkd80J2auFn6_JdEqCGJTyJMCc9=s360',
        address: '臺中市西屯區福星路365號',
        star: 4.8,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.75810846663!2d120.64255867618314!3d24.18021467837957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469174ab08f6be9%3A0x1091a4dd434f25c1!2z5p-S5Liy54eSIOmAoueUsuW6lw!5e0!3m2!1szh-TW!2stw!4v1700535298966!5m2!1szh-TW!2stw',
    },
    {
        name: 'Moi x pho 哞一河粉',
        img_path: 'https://lh3.googleusercontent.com/KOUDUilN-zLlwSRpiyrYnuh75NIogJbfwyZJBw72MS1B7taMdnybrdTM13pWKAD5nceU74bHI-rOP_vN1ZvxEuOqcpthHLMH7ZoX8MninZSt=s360',
        address: '臺中市西區公正路156巷9號',
        star: 4.8,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.626599584724!2d120.66066010000002!3d24.149748100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917fb55a88467%3A0xd51acb3d3ec9fd4e!2zbW9pIHggcGhvIOWTnuS4gOays-eyiSDooZfpgorlv6vploPlupc!5e0!3m2!1szh-TW!2stw!4v1700535352353!5m2!1szh-TW!2stw',
    },
    {
        name: '星饗道國際自助餐',
        img_path: 'https://lh3.googleusercontent.com/A8jMDpiXmTMRznrRbG0Uw5IIhxowdxme0OT4FNhBKusaMCKFmKtgpCuvcJ9MUNvS1MrDGgpyBqmztjzzlVja-Rm5O_j0oW2obruKiGzlxjc=s360',
        address: '臺中市西屯區福星北路18號',
        star: 4.3,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6801474403073!2d120.64241427618335!3d24.182947778377695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469163d3c65f67f%3A0xe9e206f30ad0467b!2z5pif6aWX6YGT5ZyL6Zqb6Ieq5Yqp6aSQIEluIFNreSBJbnRlcm5hdGlvbmFsIEJ1ZmZldA!5e0!3m2!1szh-TW!2stw!4v1700535395550!5m2!1szh-TW!2stw',
    },
    {
        name: '春三朝午',
        img_path: 'https://lh3.googleusercontent.com/44D2uVZCTh9dZkvAQW3nZZt-KXw1KYjU7CRnSd7rqN1j5kublvB-xRg59CO3fmgH7klwD3zw6bmOTdbRvvB4Jc4zdI7R-Bm6dhcPu8EyCvBS=s360',
        address: '臺中市西屯區上石路179號',
        star: 4.4,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.0348372933063!2d120.64344157618301!3d24.170510978386208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8a7db24a8b%3A0xe860637d146b932b!2z5pil5LiJ5pyd5Y2IfOWPsOS4reaXqeWNiOmkkC_lj7DkuK3nvo7po5_mjqjolqYv5Y-w5Lit576p5aSn5Yip6bq1L-WPsOS4reWSluWVoeW7sy_lj7DkuK3ogZrppJDppJDlu7Mv5Y-w5Lit5YyF5buC6aSQ5buzL-WPsOS4reWvteeJqeWPi-WWhOmkkOW7sy_pgKLnlLLnvo7po58v6KW_5bGv576O6aOfL-WPsOS4reaXqemkkA!5e0!3m2!1szh-TW!2stw!4v1700535422070!5m2!1szh-TW!2stw',
    },
    {
        name: '萬客什鍋',
        img_path: 'https://lh3.googleusercontent.com/D2XolFaNKrSKZbHw1p4BZw4TBBSXWEB4gvbeXg-b-8SoNviEw6UrF0lNi4ze00KTxxrOQUfrjyMNj-73A0DUfjCZckK9_1aunrliunKspSeVhw=s360',
        address: '台中市青海路二段246-15號',
        star: 4.4,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29119.867574560623!2d120.60708681083983!3d24.172313300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346916200335b575%3A0x38b72fc0ea38cb18!2z6JCs5a6i5LuA6Y2LIOmdkua1t-W6lw!5e0!3m2!1szh-TW!2stw!4v1700535451070!5m2!1szh-TW!2stw',
    },
    {
        name: '九九蒙古烤肉火鍋吃到飽',
        img_path: 'https://lh3.googleusercontent.com/beWKsBWk87oO7TPU0Hz-amsrP5LnS6AilvMygUxd27cwjXx6KZfFXrkFhqOegfZ2gkea0xkwQDde-SVzc-_YDbsvNYu-88zk4oQaJdYSTCZtbA=s360',
        address: '臺中市西屯區西屯路三段149之1號',
        star: 4.1,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.596069365122!2d120.6226705!3d24.185895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917ebc8dae915%3A0x7c43ce7008ba3d16!2z5Lmd5Lmd6JKZ5Y-k54Ok6IKJ54Gr6Y2L5ZCD5Yiw6aO9!5e0!3m2!1szh-TW!2stw!4v1700535475101!5m2!1szh-TW!2stw',
    },
    {
        name: 'JiNHER今鶴-義式餐酒館 逢甲店',
        img_path: 'https://lh3.googleusercontent.com/LmgmONiorCosldkejHgZYhWiUHmLCbNsiVa0AATWhFMWPtTQv9CQxXeKg73Adi1niIssclwa5Gem6FwAHcJOelURlkAkFpJkX3xyxQ80kBo=s360',
        address: '臺中市西屯區黎明路三段385之1號',
        star: 4.9,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.7038238682076!2d120.63608007618339!3d24.182117778378252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917e76f7ab6e3%3A0x39a7fe2d2f378c1c!2zSmlOSEVS5LuK6ba0Lee-qeW8j-mkkOmFkumkqOmAoueUsuW6lw!5e0!3m2!1szh-TW!2stw!4v1700535496046!5m2!1szh-TW!2stw',
    },
    {
        name: '銅鑼灣文記港式餐廳',
        img_path: 'https://lh3.googleusercontent.com/WAOL-yPOhkibEZZ88_EJNx62zR1Bi6K1fzJ_O-Aa_ds-wxsyhY6Wh_C2ektrMa-2mtIFtsS6rQzw3OQLpoBhMeUaSoBwsw=s360',
        address: '臺中市西屯區河南路二段510號',
        star: 4.5,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.0705055473773!2d120.63944897618295!3d24.169259978386933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693df5271a2ea3%3A0xa49ebd7283bf0055!2z6YqF6ZG854Gj5paH6KiY5riv5byP6aSQ5buzL-mHkemQmOeHkuiHmOmLqg!5e0!3m2!1szh-TW!2stw!4v1700535514809!5m2!1szh-TW!2stw',
    },
    {
        name: '小時厚牛排-台中逢甲店',
        img_path: 'https://lh3.googleusercontent.com/uZFm-nYrFJP-1oM1uW6xi9p7lbbYpaJI3odOv2AuOEB90t1cij9HXYo0UcG9F7wdQruk3NK5N500QrOEOMtoX4hi1sOzjsHmlwrxd8POabHp=s360',
        address: '臺中市西屯區河南路二段241之5號',
        star: 4.4,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.920609607009!2d120.64860669999999!3d24.17451690000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917b320b02f25%3A0xe6a489108ccf1684!2z5bCP5pmC5Y6a54mb5o6SLeWPsOS4remAoueUsuW6lw!5e0!3m2!1szh-TW!2stw!4v1700535538814!5m2!1szh-TW!2stw',
    },
    {
        name: '拾陌 Shihmo',
        img_path: 'https://lh3.googleusercontent.com/TBgwY0NgoA2Uryk08zdgC0E8nk6yMzoMUB1neHKrRnJq-QXzse8B_exiNi-6flrukXJ7mGe7_Tr7nEr2C9oc5ZK8sxeWziY=s360',
        address: '臺中市西屯區櫻城五街5號',
        star: 4.3,
        google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.0055116135736!2d120.64832117618302!3d24.171539478385377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469162711fccb7b%3A0xd66d1320493e8190!2z5ou-6ZmMIFNoaWhtbw!5e0!3m2!1szh-TW!2stw!4v1700535560790!5m2!1szh-TW!2stw',
    },
];
console.log(storeList);
cardResult.innerHTML = '';
storeList.forEach(item => {
    cardResult.innerHTML += `
        <div class="card">
            <h2 class = "name">${item.name}</h2>
            <img src="${item.img_path}">
            <div class = "content">
                <span class="address">地址:${item.address}</span>
                <br>
                <span class="star">星等:${item.star}</span>
            </div>
            <iframe src="${item.google_map}">
            </iframe>
        </div>`;

});



