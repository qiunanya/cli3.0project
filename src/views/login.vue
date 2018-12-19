<template>
  <div class="container">
    <div class="login-box">
      <h2>PICC 融信远程平台</h2>
      <div v-if="!forget">
        <h3>登录</h3>
        <el-form
          :model="loginForm"
          :rules="loginFormRule"
          ref="login"
          label-width="0px"
          class="form-box"
        >
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码" :type="type"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('login')" class="login-botton">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--
        <div v-if="forget">
          <h3>忘记密码</h3>
          <el-form :model="forgetForm" label-width="0px" class="form-box">
            <el-form-item>
              <el-input v-model="forgetForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="forgetForm.password" placeholder="请输入电话" :type="type"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit" class="login-botton">重置密码</el-button>
            </el-form-item>
          </el-form>
        </div>
      -->

      <div class="login-footer">
        <a href="/firefox">推荐浏览器</a>
        <!-- <a @click="toggleForget">{{forget?'直接登录':'忘记密码？'}}</a> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        username: "张三",
        password: "111111"
      },
      loginFormRule: {
        username: [
          { required: true, message: "请输入登录码", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            message: "密码长度至少 6 位",
            trigger: "blur"
          }
        ]
      },
      forgetForm: {},
      type: "password",
      forget: false
    };
  },
  watch: {
    userInfo() {
      this.userInfo.staffid ? this.$router.replace("/") : "";
    }
  },
  computed: {
    ...mapState("user", {
      userInfo: state => state.userInfo
    })
  },
  methods: {
    submitForm(name) {
      this.$refs[name].validate(valid => {
        console.log("valid", valid);
        if (valid) {
          let { loginForm } = this;
          this.login(loginForm);
        }
      });
    },
    toggleForget() {
      this.forget = !this.forget;
    },
    ...mapActions("user", ["login"])
  }
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/login_bg.jpg");
  background-size: cover;
}

.login-box {
  width: 300px;
  height: 400px;
  box-shadow: 0 0 10px #555;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 0 20px;
}
.login-box h2,
.login-box h3 {
  text-align: center;
  color: #333;
}
.login-box h3 {
  margin-top: 30px;
  margin-bottom: 30px;
}
.login-botton {
  width: 100%;
}
.login-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login-footer a {
  color: #666;
  cursor: pointer;
}
</style>
