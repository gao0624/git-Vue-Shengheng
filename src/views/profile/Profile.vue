<template>
  <div class="user-info-display">
    <div class="card">
      <header class="card-header">
        <div class="avatar">
          <span>{{ userInfo.userName ? userInfo.userName.charAt(0) : '访' }}</span>
        </div>
        <div class="user-details">
          <h2>{{ userInfo.userName || '访客' }}</h2>
          <p>{{ userInfo.phone || '暂无手机号' }}</p>
        </div>
      </header>
      <form @submit.prevent="saveChanges" class="card-form">
        <div v-for="(label, key) in fields" :key="key" class="form-group">
          <input
            :id="key"
            v-model="form[key]"
            type="text"
            required
            placeholder=" "
          />
          <label :for="key">{{ label }}</label>
        </div>
        <button type="submit" class="btn-submit">保存修改</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'UserInfoDisplay',
  data() {
    return {
      form: {
        s_id: '', s_name: '', password: '', s_class: '', s_year: '', s_major: '', s_phone_number: ''
      },
      fields: {
        s_id: '客户id', s_name: '姓名', password: '密码', s_class: '出生年月', s_year: '年龄', s_major: '性别', s_phone_number: '手机号'
      }
    };
  },
  computed: {
    ...mapState('userModule', { userInfo: state => state.userInfo })
  },
  watch: {
    userInfo: {
      immediate: true,
      handler(info) {
        this.form = {
          s_id: info.userId || '',
          s_name: info.userName || '',
          password: info.password || '',
          s_class: info.s_class || '',
          s_year: info.s_year || '',
          s_major: info.s_major || '',
          s_phone_number: info.phone || ''
        };
      }
    }
  },
  methods: {
    async saveChanges() {
      // 将表单数据封装为 JSON 格式
      const body = {
        userId: this.form.s_id,
        userName: this.form.s_name,
        password: this.form.password,
        s_class: this.form.s_class,
        s_year: this.form.s_year,
        s_major: this.form.s_major,
        phone: this.form.s_phone_number
      };

      const params = new URLSearchParams();
      params.append("userId", body.userId);
      params.append("userName", body.userName);
      params.append("password", body.password);
      params.append("s_class", body.s_class);
      params.append("s_year", body.s_year);
      params.append("s_major", body.s_major);
      params.append("phone", body.phone);

      const response = await axios.post('http://localhost:9099/api/auth/add_new_student?', params);
    }
  }
};
</script>

<style scoped>
/* 全局盒模型重置，防止外部影响 */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.user-info-display {
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f7f9fc;
}
.card {
  width: 360px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.card-header {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #4c84ff;
  color: #ffffff;
}
.avatar {
  width: 56px;
  height: 56px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}
.avatar span {
  font-size: 1.5rem;
  color: #4c84ff;
  font-weight: bold;
}
.user-details h2 {
  font-size: 1.25rem;
  line-height: 1;
}
.user-details p {
  margin-top: 4px;
  font-size: 0.9rem;
  opacity: 0.8;
}
.card-form {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.form-group {
  position: relative;
  margin-bottom: 1.25rem;
}
.form-group input {
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #d1d9e6;
  border-radius: 6px;
  background: #fdfdff;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.form-group input:focus {
  outline: none;
  border-color: #4c84ff;
}
.form-group label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: #fdfdff;
  padding: 0 4px;
  font-size: 0.85rem;
  color: #7a7f8a;
  pointer-events: none;
  transition: top 0.2s, font-size 0.2s;
}
.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label {
  top: -8px;
  font-size: 0.75rem;
  color: #4c84ff;
}
.btn-submit {
  padding: 12px;
  background: #4c84ff;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-submit:hover {
  background-color: #3a6ecc;
}
</style>
