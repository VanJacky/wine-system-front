<template>
  <div class="layout">
    <el-form ref="formValidate" label-width="160" label-position="right" :model="formValidate" :rules="ruleValidate">
      <el-form-item label="appId" prop="appId">
        <el-input maxlength="300" class="w200" v-model="formValidate.appId" />
      </el-form-item>
      <el-form-item label="certPath" prop="certPath">
        <el-input maxlength="300"  v-model="formValidate.certPath" />
      </el-form-item>
      <el-form-item label="alipayPublicCertPath" prop="alipayPublicCertPath">
        <el-input maxlength="300" v-model="formValidate.alipayPublicCertPath" />
      </el-form-item>
      <el-form-item label="privateKey" class="label-item" prop="privateKey">
        <el-input maxlength="300" v-model="formValidate.privateKey" />
      </el-form-item>
      <el-form-item label="rootCertPath" prop="rootCertPath">
        <el-input maxlength="300" v-model="formValidate.rootCertPath" />
      </el-form-item>

      <div class="label-btns">
        <el-button type="primary" @click="submit('formValidate')">保存</el-button>

      </div>
    </el-form>
  </div>
</template>
<script>
import { handleSubmit } from "../setting/validate";
import {putManagerSettingPutByKey} from "@/apis/controller";
export default {
  data() {
    return {
      ruleValidate: {}, // 验证规则
      formValidate: { // 表单数据
        accessKeyId: "",
        accessKeySecret: "",
        bucketName: "",
        picLocation: "",
        endPoint: "",
      },
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
      this.res = JSON.parse(this.res);

      this.$set(this, "formValidate", { ...this.res });
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
