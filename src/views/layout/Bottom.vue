<template>
    <div>
        <div class="footer-module">
            <div class="footer-container">
                <!-- 导航链接 -->
                <nav class="nav-links">
                    <a href="#" class="nav-link">关于站长之家</a>
                    <a href="#" class="nav-link">联系我们</a>
                    <a href="#" class="nav-link">广告服务</a>
                    <a href="#" class="nav-link">友情链接</a>
                    <a href="#" class="nav-link">版权声明</a>
                    <a href="#" class="nav-link">人才招聘</a>
                    <a href="#" class="nav-link">网站动态</a>
                    <a href="#" class="nav-link">帮助</a>
                    <a href="#" class="nav-link">手机版</a>
                </nav>

                <!-- 版权信息 -->
                <div class="copyright">
                    <div>ⓒCopyRight 2002-2025 CHINAZ.Com Inc All Rights Reserved.</div>
                    <div>站长之家 版权所有</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {}
        }
    }
</script>


<style>
    

    .footer-module {
        background: #ffffff;
        border-top: 1px solid #eeeeee;
        padding: 40px 0;
        font-family: "Microsoft YaHei", sans-serif;
        margin-top:20px;
    }

    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    .nav-links {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 30px;
        margin-bottom: 20px;
    }

    .nav-link {
        color: #333333;
        font-size: 14px;
        text-decoration: none;
        position: relative;
        transition: color 0.3s;
    }

    .nav-link:not(:last-child)::after {
        content: "|";
        color: #cccccc;
        position: absolute;
        right: -18px;
    }

    .nav-link:hover {
        color: #1787e0;
    }

    .copyright {
        color: #999999;
        font-size: 12px;
        line-height: 1.8;
        margin-top: 15px;
    }

    @media (max-width: 768px) {
        .nav-links {
            gap: 15px;
            justify-content: center;
        }
        
        .nav-link {
            font-size: 13px;
        }
        
        .nav-link::after {
            display: none;
        }
    }
</style>