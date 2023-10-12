<template>
    <div class="rendering">
        <div style="width: 1400px;">
            <div style="width: 100%;margin-top: 40px;">
                <div style="width: 100%;height: 55px;font-size: 42px;color: #3d3333;text-align: center;margin-bottom: 10px;">装修效果图</div>
                <div style="width: 100%;font-size: 18px;color: #9e9595;text-align: center;">陪你一起发现最美的装修，给你更多的灵感</div>
            </div>
            <div style="width: 1400px;height: 600px;margin-top: 50px;">
                <div class="shell">
                    <input type="radio" name="position" style="margin-right: 20px;">
                    <input type="radio" name="position" style="margin-right: 20px;">
                    <input type="radio" name="position" style="margin-right: 20px;" checked>
                    <input type="radio" name="position" style="margin-right: 20px;">
                    <input type="radio" name="position">
                    <div class="box">
                        <div class="item">
                            <a href="https://www.kujiale.cn/design/3FO3TO5OVJDO/show?fromqrcode=true" target="_blank">
                                <div  style="width: 350px;height: 500px;"></div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.kujiale.cn/design/3FO3TO651QR9/show?fromqrcode=true" target="_blank">
                                <div  style="width: 350px;height: 500px;"></div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://yun.kujiale.com/design/3FO413GV19UX/show?fromqrcode=true" target="_blank">
                                <div  style="width: 350px;height: 500px;"></div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://yun.kujiale.com/design/3FO412KX5WP0/show?fromqrcode=true" target="_blank">
                                <div  style="width: 350px;height: 500px;"></div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="https://www.kujiale.cn/design/3FO3TO68RCKB/show?fromqrcode=true" target="_blank">
                                <div  style="width: 350px;height: 500px;"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
        return{}
    }
  };
  </script>
  
  <style>
    .rendering{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 60px;
        }

        .shell {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            display: grid;
            grid-template-rows: 500px 200px;
        }

        .box {
            /*  将容器放置在第一行，其高度为第一行的高度 */
            grid-row: 1 / 2;
            /*  将容器放置在第一列，其宽度为第一到第八列的宽度 */
            grid-column: 1 / 8;
            width: 100vw;
            height: 570px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            /* 设置 3D 转换，以便于创建立体效果 */
            transform-style: preserve-3d;
            /* 定义立体效果的观察距离 */
            perspective: 800px;
            /*  定义容器内包含的元素数量 */
            --items: 5;
            /* 定义容器内居中显示的元素 */
            --middle: 3;
            /* 定义容器内当前位置的元素 */
            --position: 1;
        }

        div.item {
            position: absolute;
            width: 350px;
            height: 500px;
            background-color: coral;
            /* 定义一个 CSS 变量 --r 的值为 var(--position) - var(--offset) */
            --r: calc(var(--position) - var(--offset));
            /* 定义变量 --abs 的值为 var(--r) * -1 和 var(--r) 中的最大值 */
            --abs: max(calc(var(--r) * -1), var(--r));
            /* 元素的过渡效果为所有属性在 0.25 秒内以线性方式变化 */
            transition: all 0.25s linear;
            /* 旋转-10deg*var(--r)角度,并向x轴负方向平移-330px*var(--r) */
            transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-330px * var(--r)));
            /* 使当前的图片位于最前面 */
            z-index: calc((var(--position) - var(--abs)));
            background-size: cover;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
            border: #b5c5ff 10px solid;
            border-radius: 5px;
        }

        input {
            width: 35px;
            height: 35px;
        }

        .box .item:nth-of-type(1) {
            --offset: 1;
            background-image: url(http://img.haojie.cool/template/jiazhuang/50.png);
        }

        .box .item:nth-of-type(2) {
            --offset: 2;
            background-image: url(http://img.haojie.cool/template/jiazhuang/49.png);
        }

        .box .item:nth-of-type(3) {
            --offset: 3;
            background-image: url(http://img.haojie.cool/template/jiazhuang/47.png);
        }

        .box .item:nth-of-type(4) {
            --offset: 4;
            background-image: url(http://img.haojie.cool/template/jiazhuang/46.png);
        }

        .box .item:nth-of-type(5) {
            --offset: 5;
            background-image: url(http://img.haojie.cool/template/jiazhuang/45.png);
        }

        input:nth-of-type(1) {
            grid-column: 2/3;
            grid-row: 2/3;
        }

        input:nth-of-type(2) {
            grid-column: 3/4;
            grid-row: 2/3;
        }

        input:nth-of-type(3) {
            grid-column: 4/5;
            grid-row: 2/3;
        }

        input:nth-of-type(4) {
            grid-column: 5/6;
            grid-row: 2/3;
        }

        input:nth-of-type(5) {
            grid-column: 6/7;
            grid-row: 2/3;
        }

        input:nth-of-type(1):checked~.box {
            --position: 1;
        }

        input:nth-of-type(2):checked~.box {
            --position: 2;
        }

        input:nth-of-type(3):checked~.box {
            --position: 3;
        }

        input:nth-of-type(4):checked~.box {
            --position: 4;
        }

        input:nth-of-type(5):checked~.box {
            --position: 5;
        }
  </style>
  