<template>
    
    <div class="contact-container">
    <h1 class="page-title">客户服务联系</h1>
        <!-- 联系人 -->
        <div class="contact-item">
            <div class="icon-wrapper">
                <i class="fas fa-user-tie contact-icon"></i>
            </div>
            <div class="content-wrapper">
                <p class="item-title">联系人</p>
                <p class="highlight">薛先生</p>
                <p class="sub-text">（商务经理）</p>
            </div>
        </div>

        <!-- 联系热线 -->
        <div class="contact-item">
            <div class="icon-wrapper">
                <i class="fas fa-phone-alt contact-icon"></i>
            </div>
            <div class="content-wrapper">
                <p class="item-title">联系热线</p>
                <p class="highlight">+86-133 3606 2322</p>
                <p class="sub-text">+86-571-8627 3270</p>
            </div>
        </div>

        <!-- 电子邮件 -->
        <div class="contact-item">
            <div class="icon-wrapper">
                <i class="fas fa-envelope contact-icon"></i>
            </div>
            <div class="content-wrapper">
                <p class="item-title">电子邮件</p>
                <p class="highlight">yaosen@chemball.com</p>
                <p class="sub-text">yaosen@mail.chemball.com</p>
            </div>
        </div>

        <!-- 办公地址 -->
        <div class="contact-item">
            <div class="icon-wrapper">
                <i class="fas fa-map-marker-alt contact-icon"></i>
            </div>
            <div class="content-wrapper">
                <p class="item-title">办公地址</p>
                <p class="highlight">浙江省杭州市余杭区西溪联合科技广场4号楼406室</p>
                <p class="sub-text">苏州工业园区（华东办事处）</p>
                <p class="sub-text">广州办事处：天河区珠江新城金融中心</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return {

            }
        }
    }

</script>

<style>
    :root {
    --primary-color: #2196F3;  /* 改为更明亮的蓝色 */
    --text-primary: #333333;   /* 深灰色文字 */
    --border-color: #e0e0e0;  /* 新增浅灰色边框 */
    }



    .page-title {
        color: var(--primary-color);
        font-size: 2.2rem;
        margin-bottom: 2rem;
        text-align: center;
        letter-spacing: 1px;
    }

    .contact-container {
        background: #ffffff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* 添加柔和阴影 */
        max-width:1000px;
        margin:0 auto;
    }

    .contact-item {
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
        padding: 1.2rem;
        background: #f8f9fa;  /* 浅灰色背景块 */
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .contact-item:hover {
        box-shadow: 0 2px 8px rgba(33,150,243,0.15); /* 蓝色系悬浮效果 */
    }

    .icon-wrapper {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        background: rgba(33,150,243,0.1); /* 浅蓝色背景 */
        border-radius: 50%;
    }

    .contact-icon {
        color: var(--primary-color);
        font-size: 1.6rem;
    }

    .content-wrapper p {
        margin: 0.3rem 0;
        color: var(--text-primary);
        line-height: 1.6;
    }

    .item-title {
        font-size: 1.1rem;
        color: #666 !important;
        margin-bottom: 0.5rem !important;
    }

    .highlight {
        font-size: 1.1rem;
        color: var(--text-primary);
        font-weight: 500;
    }

    .sub-text {
        color: #666 !important;
        font-size: 0.9rem;
    }
</style>

