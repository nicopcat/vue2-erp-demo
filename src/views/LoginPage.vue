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
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-button type="primary" @click="login('ruleForm')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      let { name, password } = this.ruleForm;
      this.$http({
        methods: "post",
        url: "user_login",
        data: { username: name, password: password },
      })
        .then((res) => {
          console.log(res);
          let { code } = res.data;
          if (code === 200) {
            // sessionStorage: 浏览器关掉时数据被清除
            sessionStorage.setItem("username", name);
            // 登陆成功后回到Home
            this.$router.push("/home");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
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
  width: 520px;
  background-color: rgb(255, 255, 255);
  border: 1px solid royalblue;
  border-radius: 8px;
}
.login_page h2 {
  margin: 1rem;
}

form.el-form.demo-ruleForm > button {
  margin: auto;
}
</style>