<template>
  <div class="layout">
    <el-form
      ref="formValidate"
      label-width="150"
      label-position="right"
      :model="formValidate"
      :rules="ruleValidate"
    >
      <el-form-item label="appId" prop="appId">
        <el-input maxlength="300" class="w200" v-model="formValidate.appId" />
        <p style="color: red">*APP应用 AppID 非必填</p>
      </el-form-item>
      <el-form-item label="mpAppId" prop="mpAppId">
        <el-input maxlength="300" class="w200" v-model="formValidate.mpAppId" />
        <p style="color: red">*小程序 AppID 非必填</p>
      </el-form-item>
      <el-form-item label="serviceAppId" prop="serviceAppId">
        <el-input class="w200" v-model="formValidate.serviceAppId" />
        <p style="color: red">*服务号 AppID 非必填</p>
      </el-form-item>
      <el-form-item label="mchId" prop="mchId">
        <el-input maxlength="300" class="w200" v-model="formValidate.mchId" />
      </el-form-item>
      <el-form-item label="apiKey3" prop="apiKey3">
        <el-input maxlength="300" v-model="formValidate.apiKey3" />
      </el-form-item>
      <el-form-item label="apiclient_cert_p12" class="label-item" prop="apiclient_cert_p12">
        <el-input maxlength="300" v-model="formValidate.apiclient_cert_p12" />
      </el-form-item>
      <el-form-item label="apiclient_cert_pem" prop="apiclient_cert_pem">
        <el-input maxlength="300" v-model="formValidate.apiclient_cert_pem" />
      </el-form-item>
      <el-form-item label="apiclient_key" prop="apiclient_key">
        <el-input maxlength="300" v-model="formValidate.apiclient_key" />
      </el-form-item>

      <el-form-item label="serialNumber" prop="serialNumber">
        <el-input maxlength="300" v-model="formValidate.serialNumber" />
      </el-form-item>
      <div class="label-btns">
        <el-button type="primary" @click="submit('formValidate')">保存</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import { handleSubmit } from "../setting/validate";
import {putManagerSettingPutByKey} from "@/apis/controller/GuanLiDuan,XiTongSheZhiJieKou/putManagerSettingPutByKey";

export default {
  data() {
    return {
      ruleValidate: {}, // 验证规则
      formValidate: {}, // 表单数据
    };
  },
  props: ["res", "type"],
  created() {
    this.init();
  },
  methods: {
    submit(name) {
      let that = this;
      if (handleSubmit(that, name)) {
        this.setupSetting();
      }
    },
    // 保存设置
    setupSetting() {
      putManagerSettingPutByKey({key: this.type}, this.$util.urlFormat(this.formValidate
      ), this.$util.headers()).then((res) => {
        if (res.data.success) {
          this.$message.success("保存成功!");
        } else {
          this.$message.error("保存失败!");
        }
      });
    },
    // 实例化数据
    init() {
      this.res = JSON.parse(this.res);

      this.$set(this, "formValidate", { ...this.res });
      Object.keys(this.formValidate).forEach((item) => {
        if (item.indexOf("pId") < 0) {
          this.ruleValidate[item] = [
            {
              required: true,
              message: "请填写必填项",
              trigger: "blur",
            },
          ];
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../setting/style.scss";

.label-item {
  display: flex;
}

.w200 {
  ::v-deep .ivu-input {
    width: 250px !important;
    margin: 0 10px;
  }
}

::v-deep .ivu-input {
  width: 450px !important;
  margin: 0 10px;
}

.ivu-input-wrapper {
  width: 450px;
  margin-right: 10px;
}
</style>
