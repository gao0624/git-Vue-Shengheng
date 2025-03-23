<template>
  <div class="middle-content">
    <!-- 文本跑马灯 -->
    <div class="marquee text-marquee">
      <div class="marquee-content">
        <span>欢迎光临台球预定系统！</span>
        <span>【新店开业】台球王店盛大开业！</span>
        <span>充值优惠，立减50元！</span>
        <span>限时抢购，优惠不断！</span>
      </div>
    </div>

    <!-- 预定卡片 -->
    <div class="main-content">
        <div class="reservation-card">
        <h2 class="card-title">预定您的台球场</h2>
        
        <div class="form-group">
            <label for="store">选择店铺</label>
            <select id="store" v-model="selectedStore">
            <option disabled value="">请选择店铺</option>
            <option v-for="store in stores" :key="store" :value="store">{{ store }}</option>
            </select>
        </div>

        <div class="form-group">
            <label for="hall">选择大厅</label>
            <select id="hall" v-model="selectedHall">
            <option disabled value="">请选择大厅</option>
            <option v-for="hall in halls" :key="hall" :value="hall">{{ hall }}</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="table">选择桌台号</label>
            <select id="table" v-model="selectedTable">
            <option disabled value="">请选择桌台号</option>
            <option v-for="table in tableNumbers" :key="table" :value="table">{{ table }}</option>
            </select>
        </div>
        
        <div class="time-group">
            <p class="group-title">选择时间段</p>
            <div class="time-grid">
            <div 
                v-for="slot in timeSlots" 
                :key="slot" 
                @click="selectTimeSlot(slot)"
                :class="['time-slot', { selected: selectedTimeSlot === slot }]"
            >
                {{ slot }}
            </div>
            </div>
        </div>
        
        <button 
            class="reserve-btn" 
            :disabled="!canSubmit"
            @click="submitReservation"
        >
            预定
        </button>
        
        <!-- 预定成功提示（带动画） -->
        <transition name="fade-slide">
            <div v-if="message" class="message">
            {{ message }}
            </div>
        </transition>
        </div>
    </div>

    <!-- 图片跑马灯 -->
    <div class="marquee image-marquee">
      <div class="marquee-content">
        <img v-for="(img, index) in companionImages" :key="index" :src="img" alt="精美照片" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      selectedStore: '',
      stores: ['台球王店', '极致台球', '尊贵会所'],
      selectedTable: '',
      tableNumbers: ['桌台1', '桌台2', '桌台3', '桌台4','桌台5','桌台6','桌台7','桌台8','桌台9','桌台10'],
      selectedHall: '',
      halls: ['大厅A', '大厅B', '大厅C'],
      selectedTimeSlot: '',
      timeSlots: [
        '10:00 - 11:00',
        '11:00 - 12:00',
        '12:00 - 13:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00'
      ],
      message: '',
      companionImages: [
        require('@/assets/woman/1.jpg'),
        require('@/assets/woman/2.jpg'),
        require('@/assets/woman/3.jpg'),
        require('@/assets/woman/4.jpg'),
        require('@/assets/woman/5.jpg'),
        require('@/assets/woman/6.jpg'),
        require('@/assets/woman/7.jpg'),
        require('@/assets/woman/8.jpg'),
        require('@/assets/woman/9.jpg'),
        require('@/assets/woman/10.jpg'),
      ],
    };
  },
  computed: {
    ...mapState('userModule',{userInfo:(state) => state.userInfo}),
    canSubmit() {
      const body = {
        phone: this.userInfo.phone,
        name: this.userInfo.userName,
        shop_name: this.selectedStore,
        hall_name: this.selectedHall,
        table_number: this.selectedTable,
        start_end_time: this.selectedTimeSlot
      }
      if( body.phone != "" && body.name != "" && body.shop_name != "" && body.hall_name != "" && body.table_number != "" && body.start_end_time != ""){
        return body;
      }
      return "";
    }
  },
  methods: {
    selectTimeSlot(slot) {
      this.selectedTimeSlot = slot;
    },
    async submitReservation() {
      if (!this.canSubmit) {
        alert('请完整选择所有预定信息！');
        return;
      }
      const body = this.canSubmit
      const params = new URLSearchParams();
      params.append("name", body.name);
      params.append("phone", body.phone);
      params.append("shop_name", body.shop_name);
      params.append("hall_name", body.hall_name);
      params.append("table_number", body.table_number);
      params.append("start_end_time", body.start_end_time);
      console.log(params)
      //补全代码  访问接口http://localhost:9099/api/auth/addReservation
      const respone = await axios.post(
        'http://localhost:9099/api/auth/addReservation?',
        params
      )
      if (respone.data.code == 200){
        this.message = `预定成功！您在【${this.selectedStore}】的【${this.selectedHall}】, ${this.selectedTable}已预定时间段【${this.selectedTimeSlot}】`;
      }else{
        this.message = `预定失败！您在【${this.selectedStore}】的【${this.selectedHall}】, ${this.selectedTable}已预定时间段【${this.selectedTimeSlot}】`;
      }
      
      // 3秒后自动清除提示信息
      setTimeout(() => {
        this.message = '';
      }, 3000);
      this.resetForm();
    },
    resetForm() {
      this.selectedStore = '';
      this.selectedTable = '';
      this.selectedHall = '';
      this.selectedTimeSlot = '';
    }
  }
};
</script>

<style scoped>
.middle-content {
  margin: 20px;
}

.main-content{
    margin: 0 auto;
    width:1200px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding:40px 20px;
    min-height: 100vh;
    max-height: 100vh;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    border-radius: 12px;
}

/* 跑马灯公共样式 */
.marquee {
  overflow: hidden;
  white-space: nowrap;
  background: #f9f9f9;
  border: 1px solid #ddd;
  margin: 20px 0;
  padding: 10px 0;
  border-radius: 8px;
}
.marquee .marquee-content {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* 文本跑马灯样式 */
.text-marquee .marquee-content span {
  margin-right: 50px;
  font-size: 1rem;
  color: #333;
}

/* 图片跑马灯样式 */
.image-marquee .marquee-content img {
  margin-right: 40px;
  vertical-align: middle;
  border-radius: 4px;
  height:150px;
}

/* 预定卡片样式 */
.reservation-card {
  background: rgba(255,255,255,0.98);
  border-radius: 12px;
  padding: 30px;
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
.reservation-card:hover{
    transform: translateY(-4px);
}
.card-title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 1rem;
}
.form-group select {
  width: 100%;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;
}
.form-group select:focus {
  border-color: #667eea;
}
.time-group {
  margin: 20px 0;
}
.group-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.time-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}
.time-slot {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f7f7f7;
}
.time-slot:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
.time-slot.selected {
  background: #667eea;
  border-color: #667eea;
  color: #fff;
}
.reserve-btn {
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}
.reserve-btn:hover {
  transform: scale(1.02);
}
.reserve-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.message {
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #4caf50;
  background: #e8f5e9;
  border-radius: 6px;
  text-align: center;
  color: #2e7d32;
}

/* 消失提示的渐隐上滑动画 */
.fade-slide-enter-active {
  animation: fadeSlideIn 0.5s forwards;
}
.fade-slide-leave-active {
  animation: fadeSlideOut 0.5s forwards;
}
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeSlideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
