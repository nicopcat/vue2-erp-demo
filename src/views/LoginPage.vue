<template>
  <div class="login_page">
    <h2>Vue-管理系统</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          @keyup.enter.native="login('ruleForm')"
        ></el-input>
      </el-form-item>
      <div class="btn" v-if="!signingUp">
        <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        <el-button @click="signup">没有账号？注册</el-button>
      </div>

      <div class="btn" v-else>
        <el-button type="primary" @click="doneSignup('ruleForm')"
          >确定注册</el-button
        >
        <p v-show="logging">正在登陆 。。。</p>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      signingUp: false,
      logging: false,
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "用户名长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "密码长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      // let { name, password } = this.ruleForm;
      // this.$http({
      //   methods: "post",
      //   url: "user_login",
      //   data: { username: name, password: password },
      // })
      //   .then((res) => {
      //     console.log(res);
      //     let { code } = res.data;
      //     if (code === 200) {
      //       // sessionStorage: 浏览器关掉时数据被清除
      //       sessionStorage.setItem("username", name);
      //       // 登陆成功后回到Home
      //       this.$router.push("/home");
      //     }
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   });

      // sessionStorage: 浏览器关掉时数据被清除
      if (
        this.ruleForm.name === "admin" &&
        this.ruleForm.password === "123456"
      ) {
        console.log("ok");
        alert("登陆成功！");
        sessionStorage.setItem("status", "loggedIn");
        this.$router.push("/home");
      } else {
        alert("密码不正确");
        this.ruleForm = {
          name: this.ruleForm.name,
          password: "",
        };
      }
    },

    signup() {
      this.signingUp = true;
    },
    doneSignup(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          localStorage.setItem(this.ruleForm.name, this.ruleForm.password);

          sessionStorage.setItem("status", "loggedIn");
          alert("注册成功");
          this.logging = true;
          setTimeout(() => {
            this.$router.push("/home");
          }, 1000);
        } else {
          alert("输入正确的用户名及密码!");
        }
      });
    },
  },
};
</script>

<style scoped>
.login_page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
  height: 40vh;
  width: 620px;
  background-color: rgb(255, 255, 255);
  border: 3px solid rgb(177, 177, 177);
  border-radius: 8px;
  box-shadow: 3px 3px 6px rgba(147, 147, 147, 0.076);
}
.login_page h2 {
  margin: 1rem;
}

form.el-form.demo-ruleForm .btn > button {
  margin: 0 2rem !important;
}

form.el-form.demo-ruleForm > button {
  margin: auto;
}
</style>