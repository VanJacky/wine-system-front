<template>
  <div class="layout">
    <el-form ref="formValidate" label-width="150" label-position="right" :model="formValidate" :rules="ruleValidate">

      <el-form-item label="站点名称" prop="siteName">
        <el-input style="width:200px;" v-model="formValidate.siteName" />
        <span class="desc">配置买家端站点名称</span>
      </el-form-item>
      <el-form-item label="icp" prop="icp">

        <el-input v-model="formValidate.icp" />

      </el-form-item>

      <el-form-item label="后台Logo" prop="domainLogo">
        <div class="label-item-upload">

          <img v-if="formValidate.domainLogo" class="img" :src="formValidate.domainLogo" />
          <img v-else class="img" src="@/assets/images/emptyImg.png" alt="">
          <el-button @click="onClickImg('domainLogo')">选择图片</el-button>
           <span class="desc">后台管理左上角logo展示 	17∶6</span>
        </div>
      </el-form-item>
      <el-form-item label="后台Icon" prop="domainIcon">
        <div class="label-item-upload">

          <img v-if="formValidate.domainIcon" class="img" :src="formValidate.domainIcon" />
          <img v-else class="img" src="@/assets/images/emptyImg.png" alt="">
          <el-button @click="onClickImg('domainIcon')">选择图片</el-button>
            <span class="desc">后台管理网站icon展示 	1∶1</span>
        </div>
      </el-form-item>
      <el-form-item label="买家端Logo" prop="buyerSideLogo">
        <div class="label-item-upload">
          <img v-if="formValidate.buyerSideLogo" class="img" :src="formValidate.buyerSideLogo" />
          <img v-else class="img" src="@/assets/images/emptyImg.png" alt="">
          <el-button @click="onClickImg('buyerSideLogo')">选择图片</el-button>
           <span class="desc">买家端logo展示 	17∶6</span>
        </div>
      </el-form-item>
      <el-form-item label="买家端Icon" prop="buyerSideIcon">
        <div class="label-item-upload">
          <img v-if="formValidate.buyerSideIcon" class="img" :src="formValidate.buyerSideIcon" />
          <img v-else class="img" src="@/assets/images/emptyImg.png" alt="">
          <el-button @click="onClickImg('buyerSideIcon')">选择图片</el-button>
            <span class="desc">买家端网站icon展示 	1∶1</span>
        </div>
      </el-form-item>
      <el-form-item label="商家端Logo" prop="storeSideLogo">
        <div class="label-item-upload">
          <img v-if="formValidate.storeSideLogo" class="img" :src="formValidate.storeSideLogo" />
          <img v-else class="img" src="@/assets/images/emptyImg.png" alt="">
          <el-button @click="onClickImg('storeSideLogo')">选择图片</el-button>
          <span class="desc">商家端logo展示 	17∶6</span>
        </div>
      </el-form-item>
      <el-form-item label="商家端Icon" prop="storeSideIcon">
        <div class="label-item-upload">
          <img v-if="formValidate.storeSideIcon" class="img" :src="formValidate.storeSideIcon" />
          <img v-else class="img" src="@/assets/images/emptyImg.png" alt="">
          <el-button @click="onClickImg('storeSideIcon')">选择图片</el-button>
           <span class="desc">商家端icon展示 	1∶1</span>
        </div>
      </el-form-item>

      <el-form-item label="站点地址" prop="staticPageAddress">
        <el-input  style="width:200px;" v-model="formValidate.staticPageAddress" />

      </el-form-item>
      <el-form-item label="wap站点地址" prop="staticPageWapAddress">
        <el-input v-model="formValidate.staticPageWapAddress" />
      </el-form-item>
      <div class="label-btns">
        <el-button type="primary" @click="submit('formValidate')">保存</el-button>

      </div>
    </el-form>
    <el-dialog width="1200px" v-model="picModelFlag">
<!--      <ossManage @callback="callbackSelected" :isComponent="true" ref="ossManage" />-->
    </el-dialog>

  </div>
</template>
<script>
import { handleSubmit } from "./validate";
export default {
  title: "基础设置",
  props: {
    res:{
      type:null,
      default:""
    },
    type:''
  },
  data() {
    return {
      handleSubmit, // 验证规则

      picModelFlag: false, // 预览图片显隐
      formValidate: { // 表单数据
        buyerSideLogo: "",
        domainLogo: "",
        icp: "",
        storeSideLogo: "",
        siteName: "",
        staticPageAddress: "",
        staticPageWapAddress: "",
      },
      selected: "", // 已选数据
      ruleValidate: {}, // 验证规则
      result:""
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 点击图片
    onClickImg(item) {
      this.selected = item;
      // this.$refs.ossManage.selectImage = true;
      this.picModelFlag = true;
    },
    submit(name) {
      let that = this;
      if (handleSubmit(that, name)) {
        this.setupSetting();
      }
    },
    // 选择回显
    callbackSelected(val) {
      this.picModelFlag = false;
      this.formValidate[this.selected] = val.url;
    },
    // 保存设置
    setupSetting() {
      putManagerSettingPutByKey({key: this.type}, this.$util.urlFormat(this.formValidate), this.$util.headers()).then((res) => {
        if (res.data.success) {
          this.$message.success("保存成功!");
          localStorage.setItem("icon", this.formValidate.domainLogo);
          window.document.title = this.formValidate.siteName + " - 运营后台";
          this.setStore("title", this.formValidate.siteName);
        } else {
          this.$message.error("保存失败!");
        }
      });
    },
    /**添加必填项 */
    init() {
      this.result = JSON.parse(this.res);
      this.$set(this, "formValidate", { ...this.result });
      Object.keys(this.result).forEach((item) => {
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
<style scoped lang="scss">
@import "./style.scss";
.label-item {
  display: flex;
  > .ivu-input {
    width: 200px;
    margin: 0 10px;
  }
}
.label-item-upload {
  display: flex;
  align-items: flex-end;
  img {
    margin-right: 10px;
    width: 100px;
    height: 100px;
  }
}
</style>
