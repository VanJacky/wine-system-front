<template>
  <div class="layout">

    <el-form ref="formValidate" label-width="150" label-position="right" :model="formValidate">
      <el-form-item label="提现审核是否开启">
        <el-switch v-model="formValidate.apply" style="margin-top:7px;"><span slot="open">开</span>
          <span slot="close">关</span>
        </el-switch>
      </el-form-item>

      <el-form-item  label="最低提现金额" prop="minPrice">
        ￥<el-input class="label-appkey" v-model="formValidate.minPrice" />
      </el-form-item>

      <el-form-item label="提现方式" prop="type">
        <el-radio-group v-model="formValidate.type">
          <el-radio label="WECHAT">微信</el-radio>
          <el-radio label="ALI">支付宝</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="微信提现应用ID" prop="wechatAppId">
        <el-input class="label-appkey" v-model="formValidate.wechatAppId" />
      </el-form-item>

      <div class="label-btns">
        <el-button type="primary" @click="submit('formValidate')">保存</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import { handleSubmit } from "./validate";
import {putManagerSettingPutByKey} from "@/apis/controller/GuanLiDuan,XiTongSheZhiJieKou/putManagerSettingPutByKey";
export default {
  data() {
    return {
      result:"",
      formValidate: { // 表单数据
        apply: true,
        minPrice: "",
        type: "",
        wechatAppId: "",
      },

      switchTitle: "提现审核是否开启", // 切换title
    };
  },
  created() {
    this.init();
  },
  props: ["res", "type"],
  methods: {
    // 保存
    submit(name) {
      let that = this;
       if( handleSubmit(that, name )){
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
      this.$set(this, "formValidate", { ...this.result });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
::v-deep .ivu-form-item-content{
  align-items: center;
  padding-bottom: 5px;
}
</style>
