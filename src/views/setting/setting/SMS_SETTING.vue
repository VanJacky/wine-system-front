<template>
  <div class="layout">
    <el-form ref="formValidate" label-width="150" label-position="right" :model="formValidate" :rules="ruleValidate">
      <el-form-item label="平台" prop="endPoint">
        <el-radio-group v-model="formValidate.type" type="button">
          <el-radio label="ALI">阿里云</el-radio>
          <el-radio label="HUAWEI">华为云</el-radio>
          <el-radio label="TENCENT">腾讯云</el-radio>
        </el-radio-group>
      </el-form-item>

      <!--      阿里云-->
      <el-form-item v-if="formValidate.type==='ALI'" label="accessKeyId" prop="accessKeyId">
        <el-input v-model="formValidate.accessKeyId"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='ALI'" label="accessSecret" prop="accessSecret">
        <el-input v-model="formValidate.accessSecret"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='ALI'" label="短信签名" prop="signName">
        <el-input v-model="formValidate.signName"/>
      </el-form-item>

      <!--      华为云-->
      <el-form-item v-if="formValidate.type==='HUAWEI'" label="APP_Key" prop="huaweiAppKey">
        <el-input v-model="formValidate.huaweiAppKey"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='HUAWEI'" label="APP_Secret" prop="huaweiAppSecret">
        <el-input v-model="formValidate.huaweiAppSecret"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='HUAWEI'" label="短信签名通道号" prop="huaweiSender">
        <el-input v-model="formValidate.huaweiSender"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='HUAWEI'" label="短信签名" prop="huaweiSignature">
        <el-input v-model="formValidate.huaweiSignature"/>
      </el-form-item>

      <!--      腾讯云-->
      <el-form-item v-if="formValidate.type==='TENCENT'" label="用户的 SecretId" prop="tencentSecretId">
        <el-input v-model="formValidate.tencentSecretId"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='TENCENT'" label="用户的 SecretKey" prop="tencentSecretKey">
        <el-input v-model="formValidate.tencentSecretKey"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='TENCENT'" label="短信应用ID" prop="tencentSdkAppId">
        <el-input v-model="formValidate.tencentSdkAppId"/>
      </el-form-item>
      <el-form-item v-if="formValidate.type==='TENCENT'" label="短信签名" prop="tencentSignName">
        <el-input v-model="formValidate.tencentSignName"/>
      </el-form-item>

      <div class="label-btns">
        <el-button type="primary" @click="submit('formValidate')">保存</el-button>

      </div>
    </el-form>
  </div>
</template>
<script>
import {handleSubmit} from "./validate";

export default {
  data() {
    return {
      result: "",
      ruleValidate: {}, // 验证规则
      formValidate: { // 表单数据
        accessKeyId: "",
        regionId: "",
        picLocation: "",
        accessSecret: "",
        tencentSecretId: "",
        tencentSecretKey: "",
        tencentSdkAppId: "",
        tencentSignName: "",
        huaweiAppKey: "",
        huaweiAppSecret: "",
        huaweiSender: "",
        huaweiSignature: "",
      },
    };
  },
  props: ["res", "type"],
  created() {
    this.init();
  },
  methods: {
    // 保存
    submit(name) {
      let that = this;
      if (handleSubmit(that, name)) {
        this.setupSetting()
      }
    },
    // 保存设置
    setupSetting() {
      putManagerSettingPutByKey({key: this.type}, this.$util.urlFormat(this.formValidate), this.$util.headers()).then((res) => {
        if (res.data.success) {
          this.$message.success("保存成功!");
        } else {
          this.$message.error("保存失败!");
        }
      });
    },
    // 实例化数据
    init() {
      this.result = JSON.parse(this.res);

      this.$set(this, "formValidate", {...this.result});
      Object.keys(this.formValidate).forEach((item) => {
        this.ruleValidate[item] = [
          {
            required: true,
            message: "请填写必填项",
            trigger: "blur",
          },
        ];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";

.label-item {
  display: flex;
}

::v-deep .ivu-input {
  width: 300px !important;
  margin: 0 10px;
}

.ivu-input-wrapper {
  width: 300px;
  margin-right: 10px;
}
</style>
