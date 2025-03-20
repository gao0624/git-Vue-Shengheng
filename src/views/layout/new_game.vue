<template>
    <div class="billiards-container">
        <div class="tournament-header">
            <h1>2024职业台球大师赛</h1>
            <div class="tournament-code">
                300000 9BALL-23 1100000PT
            </div>
            <span class="badge">国际认证赛事</span>
        </div>

        <div class="tournament-details">
            <div class="detail-card">
                <div class="detail-label">赛事信息</div>
                <div class="detail-content">
                    <p>• 日期：2023.11.15-2024.1.20</p>
                    <p>• 场地：上海大师赛体育馆</p>
                    <p>• 赛制：美式9球</p>
                </div>
            </div>

            <div class="detail-card">
                <div class="detail-label">参赛规模</div>
                <div class="detail-content">
                    <p>• 职业选手：300,000+</p>
                    <p>• 赛事积分：1,100,000PT</p>
                    <p>• 奖金池：¥23,000,000</p>
                </div>
            </div>

            <div class="detail-card">
                <div class="detail-label">直播平台</div>
                <div class="detail-content">
                    <p>• 央视体育频道</p>
                    <p>• 抖音体育直播</p>
                    <p>• 腾讯体育VIP</p>
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
    :root {
        --table-green: #2A5C3D;
        --cue-blue: #1E3799;
        --ball-red: #EB3B5A;
    }

    .billiards-container {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 2rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .tournament-header {
        text-align: center;
        border-bottom: 3px solid var(--table-green);
        padding-bottom: 1.5rem;
        margin-bottom: 2rem;
    }

    .tournament-code {
        font-family: 'Courier New', monospace;
        font-size: 2.2rem;
        letter-spacing: 2px;
        color: var(--cue-blue);
        margin: 1rem 0;
    }

    .tournament-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 1.5rem;
    }

    .detail-card {
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid var(--ball-red);
        transition: transform 0.3s ease;
    }

    .detail-card:hover {
        transform: translateY(-5px);
    }

    .detail-label {
        color: var(--table-green);
        font-weight: 600;
        margin-bottom: 0.8rem;
    }

    .detail-content {
        color: #333;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        background: var(--ball-red);
        color: white;
        border-radius: 20px;
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        .tournament-code {
            font-size: 1.8rem;
        }
        
        .detail-card {
            margin: 0.5rem;
        }
    }
</style>