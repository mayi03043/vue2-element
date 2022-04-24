<template>
  <div class="login">
    <el-card class="box-card">
      <div class="avatar-box">
        <el-avatar
          :size="100"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </div>
      <el-form ref="form" :rules="rules" :model="form" label-width="0px">
        <el-form-item prop="email">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入邮箱"
            clearable
            v-model="form.email"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            clearable
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="loginClick">登 入</el-button>
          <el-button @click="resetClick">重 置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getTokenRequest } from "@/request/loginRequest";

export default {
  // 组件名
  name: "LoginView",

  //组件数据
  data() {
    return {
      // 表单数据
      form: {
        email: "",
        password: "",
      },

      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  //组件方法
  methods: {

    loginClick() {

      // 打开加载器
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      getTokenRequest(this.form)
        .then((res) => {

            // 消息提示
          this.$message({
            message: '恭喜，登入成功',
            type: "success",
          });

          // 保存token
          this.$store.commit('setToken',res);
          
          // 跳转到后台
          this.$router.push('/admin');
          
          // 关闭加载器
          loading.close();

          
        })
        .catch((err) => {
          this.$message.error(err);

          // 关闭加载器
          loading.close();
        });
    },

    // 重置表单
    resetClick(){
      this.$refs.form.resetFields();
    }


  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/img/loginBG.jpg");
}

.box-card {
  height: 400px;
  width: 350px;
}

.avatar-box {
  padding: 35px;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
