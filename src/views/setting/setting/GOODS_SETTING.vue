<template>
  <div class="layout">
    <el-form ref="formValidate" label-width="150" label-position="right" :model="formValidate" :rules="ruleValidate">
      <el-form-item label="商品审核" prop="goodsCheck">
        <el-radio-group type="button" button-style="solid" v-model="formValidate.goodsCheck">
          <el-radio label="true">开启</el-radio>
          <el-radio label="false">关闭</el-radio>

        </el-radio-group>
         <span class="desc">商品审核关闭后，商家添加商品则无需审核直接上架</span>
      </el-form-item>
      <div class="label-item">
        <el-form-item class="label-item" label="缩略图宽" prop="abbreviationPictureWidth">
          <el-input type="number" v-model="formValidate.abbreviationPictureWidth">
          <span slot="prepend">宽</span>
          <span slot="append">px</span>
          </el-input>

        </el-form-item>
        <el-form-item class="label-item" label="缩略图高" prop="abbreviationPictureHeight">
          <el-input type="number" v-model="formValidate.abbreviationPictureHeight">
          <span slot="prepend">高</span>
          <span slot="append">px</span>
          </el-input>
        </el-form-item>
      </div>
      <div class="label-item">
        <el-form-item label="小图宽" prop="smallPictureWidth">
          <el-input type="number" v-model="formValidate.smallPictureWidth">
          <span slot="prepend">宽</span>
          <span slot="append">px</span>
          </el-input>

        </el-form-item>
        <el-form-item label="小图高" class="label-item" prop="smallPictureHeight">
          <el-input type="number" v-model="formValidate.smallPictureHeight">
          <span slot="prepend">高</span>
          <span slot="append">px</span>
          </el-input>
        </el-form-item>
      </div>
      <div class="label-item">
        <el-form-item class="label-item" label="原图宽高" prop="originalPictureWidth">
          <el-input type="number" v-model="formValidate.originalPictureWidth">
          <span slot="prepend">宽</span>
          <span slot="append">px</span>
          </el-input>

        </el-form-item>
        <el-form-item class="label-item" label="原图宽高" prop="originalPictureHeight">
          <el-input type="number" v-model="formValidate.originalPictureHeight">
          <span slot="prepend">高</span>
          <span slot="append">px</span>
          </el-input>
        </el-form-item>
      </div>
      <div class="label-btns">
        <el-button type="primary" @click="submit('formValidate')">保存</el-button>
        <el-button type="primary" style="margin-left: 100px" @click="createIndex()">重新生成所有商品索引</el-button>
        <div class="progress-item" v-if="showProgress">
          <i-progress :percent="progressVal"></i-progress>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import { handleSubmit } from "./validate";
export default {
  props: ["res", "type"],
  data() {
    return {
      formValidate: {
        // 表单数据
        goodsCheck: 1,
        smallPictureHeight: "0",
        smallPictureWidth: "0",
        abbreviationPictureWidth: "0",
        abbreviationPictureHeight: "0",
        originalPictureWidth: "0",
        originalPictureHeight: "0",
      },
      progressVal: 0,
      showProgress: false,
      intervalProgress: null,
      ruleValidate: {}, // 验证规则
      result:""
    };
  },
  created() {
    this.init();
  },
  methods: {
    //保存
    submit(name) {
      let that = this;
      if (handleSubmit(that, name)) {
        this.setupSetting();
      }
    },
    //重新生成所有商品索引
    createIndex() {
      createIndex().then((res) => {
        if (res.data.success) {
          this.$message.success("开始生成!");
          this.showProgress = true;
          setTimeout(() => {
            this.intervalProgress = setInterval(() => {
              getProgress().then((resp) => {
                let progressResult = resp.result;
                if (progressResult != null && progressResult.flag === 0) {
                  clearInterval(this.intervalProgress);
                  this.showProgress = false;
                  this.$message.success("生成成功!");
                } else {
                  this.progressVal = Math.floor(
                    (progressResult.processed / progressResult.total) * 100
                  );
                }
              });
            }, 1000);
          }, 10000);
        } else if (res.code === 100000) {
          this.showProgress = true;
          this.intervalProgress = setInterval(() => {
            getProgress().then((resp) => {
              let progressResult = resp.result;
              if (progressResult != null && progressResult.flag === 0) {
                clearInterval(this.intervalProgress);
                this.showProgress = false;
                this.$message.success("生成成功!");
              } else {
                this.progressVal = Math.floor(
                  (progressResult.processed / progressResult.total) * 100
                );
              }
            });
          }, 1000);
        }
      });
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

      Object.keys(this.result).map((item) => {
        this.result[item] += "";
      });
      this.$set(this, "formValidate", { ...this.result });
      Object.keys(this.formValidate).forEach((item) => {
        this.ruleValidate[item] = [
          {
            required: true,
            message: "请填写必填项",
            trigger: "blur",
          },
          {
            validator: (rule, value, callback) => {
              if (value < 0) {
                callback(new Error("不能输入负数！"));
              } else {
                callback();
              }
            },
            trigger: "change",
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
  width: 100px !important;
}
</style>
