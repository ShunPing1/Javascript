        // 宣告變數
        let height = document.querySelector('.height');
        let weight = document.querySelector('.weight');
        let startCalcBtn = document.querySelector('.startCalcBtn');
        let reset = document.querySelector('.reset');
        let result = document.querySelector('.result');
        let resultContent = document.querySelector('.result-content');

        function bmiCalc(num1, num2) {
            let bmiCalcProcess = Number (num2 / ((num1 / 100) * (num1 / 100)));
            
            return bmiCalcProcess.toFixed(1);
        }
                    
  

        startCalcBtn.addEventListener('click', function () {
            let heightValue = parseInt(height.value);
            let weightValue = parseInt(weight.value);
            if (isNaN(heightValue) || isNaN(weightValue)) {
                return alert('請輸入數字');
            }else if(heightValue <= 30 || heightValue > 251){
                return alert('身高輸入異常');
            }else if(weightValue <= 0 || weightValue > 650){
                return alert('體重輸入異常');
            }
            let bmiCalcResult = bmiCalc(heightValue, weightValue);
            let output = '111';
            if (bmiCalcResult <= 18.5) {
                output = '體重過輕';
            }else if(bmiCalcResult <24) {
                output = '正常範圍';
            }else if(bmiCalcResult <27) {
                output = '過重';
            }else if(bmiCalcResult <30) {
                output = '輕度肥胖';
            }else if(bmiCalcResult <35) {
                output = '中度肥胖';
            }else{
                output = '重度肥胖';
            }
            console.log(bmiCalc(heightValue, weightValue));
            result.innerHTML = '<div>您的BMI為：</div>' + bmiCalcResult + '屬於' +output;
            result.classList.add('result-active');   
            // console.log(result);
        });
        
        reset.addEventListener('click' , function () {
            height.value = '';
            weight.value = '';
            result.classList.remove('result-active');

        });