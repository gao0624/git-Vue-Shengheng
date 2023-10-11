<template>
    <div style="width: 100%;opacity: 0.9;display: flex;justify-content: center;color: white;background: url(https://www.wanzhuang.com/Public/Home/Version2/images/m_img03.jpg) no-repeat;">
        <div style="width: 1200px;">
            <div style="font-size: 42px;width: 100%;text-align: center;margin-top: 60px;">
                我们已经服务了
            </div>

            <div style="display: flex;justify-content: center;height:160px;width: 100%;margin-top: 80px;border-bottom: 1px dashed #fff;">
                <div style="width: 600px;text-align: center;">
                    <div style="font-size: 12px;font-size: 20px;">发布金额</div>
                    <div style="font-size: 60px;" class="data">7000000</div>
                </div>
                <div style="width: 600px;text-align: center;">
                    <div style="font-size: 12px;font-size: 20px;">服务装修公司</div>
                    <div style="font-size: 60px;" class="data1">28530</div>
                </div>
            </div>

            <div style="width: 100%;display: flex;justify-content: center;padding-top: 40px;padding-bottom: 40px;">
                <div style="width: 400px;text-align: center;">
                    <div style="font-size: 20px;">服务城市</div>
                    <div style="font-size: 36px;" class="data2">210</div>
                </div>
                <div style="width: 400px;text-align: center;">
                    <div style="font-size: 20px;">服务设计师</div>
                    <div style="font-size: 36px;" class="data3">40267</div>
                </div>
                <div style="width: 400px;text-align: center;">
                    <div style="font-size: 20px;">服务家庭</div>
                    <div style="font-size: 36px;" class="data4">311503</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        creat(){
            
        },
        methods:{
            setJumpNumber(startNum, targetNum, time, selector){
                let dom = document.querySelector(selector);
                let originNum = startNum;
                let stepNum = 0;
                let timeNum = time;
                dom.innerHTML = startNum;
                let timeId = setInterval(() => {
                    if (originNum < targetNum) {
                        timeNum -= 0.001;
                        let strNum = originNum.toString();
                        // 数字比较少的时候直接用 + 1; 数字很大直接 +1 要很久才能调到最对应的数字，所有后三位数随机跳动的方式进行模拟生成
                        if (targetNum.toString().length < 6) {
                            stepNum += 1; // 这样才可以实现越跳越快的效果
                            originNum = originNum + stepNum;
                            dom.innerHTML = originNum;
                        } else {
                            stepNum += 500; // 这样才可以实现越跳越快的效果
                            originNum = originNum + stepNum;
                            dom.innerHTML = strNum.substr(0, strNum.length - 3) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10);
                        }
                    } else {
                        dom.innerHTML = targetNum;
                        clearInterval(timeId);
                    }
                }, timeNum);
            },
            start (startNum,targetNum,time,selector) {
                this.setJumpNumber(startNum,targetNum,time,selector);
            },     
        },
        mounted() {
            this.start (0, 7000000, 3, '.data');
            this.start (0, 28530, 3, '.data1');
            this.start (0, 210, 3, '.data2');
            this.start (0, 40267, 3, '.data3');
            this.start (0, 311503, 3, '.data4');
        }
    }
</script>

<style>
    
</style>