<template>
  <div>
    <div style="display:flex;">
      <el-input
        v-model="currentValue"
        @on-change="handleChange"
        v-show="showInput"
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
      >
          <el-popover slot="append" transfer trigger="hover" title="图片预览" placement="right">
            <el-icon type="md-eye" class="see-icon" />
            <div slot="content">
              <img :src="currentValue" alt="该资源不存在" style="max-width: 300px;margin: 0 auto;display: block;" />
              <a @click="viewImage=true" style="margin-top:5px;text-align:right;display:block">查看大图</a>
            </div>
          </el-popover>
      </el-input>
      <el-button @click="handleCLickImg('storeLogo')">选择图片</el-button>
      <!--<Upload-->
        <!--:action="uploadFileUrl"-->
        <!--:headers="accessToken"-->
        <!--:on-success="handleSuccess"-->
        <!--:on-error="handleError"-->
        <!--:format="['jpg','jpeg','png','gif','bmp']"-->
        <!--accept=".jpg, .jpeg, .png, .gif, .bmp"-->
        <!--:max-size="1024"-->
        <!--:on-format-error="handleFormatError"-->
        <!--:on-exceeded-size="handleMaxSize"-->
        <!--:before-upload="beforeUpload"-->
        <!--:show-upload-list="false"-->
        <!--ref="up"-->
        <!--class="upload"-->
      <!--&gt;-->
        <!--<el-button :loading="loading" :size="size" :disabled="disabled">上传图片</el-button>-->
      <!--</Upload>-->
    </div>

    <el-dialog title="图片预览" v-model="viewImage" :styles="{top: '30px'}" draggable>
      <img :src="currentValue" alt="该资源不存在" style="max-width: 300px;margin: 0 auto;display: block;" />
      <div slot="footer">
        <el-button @click="viewImage=false">关闭</el-button>
      </div>
    </el-dialog>

    <el-dialog width="1200px" v-model="picModalFlag">
<!--      <ossManage @callback="callbackSelected" ref="ossManage" isComponent="true" />-->
    </el-dialog>
  </div>
</template>

<script>
import { uploadFile } from "../../../constant/constant.js";
export default {
  name: "uploadPicInput",
  props: {
    value: String,
    size: {
      default: 'default',
      type: String
    },
    placeholder: {
      type: String,
      default: "图片链接"
    },
    showInput: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: Number,
    icon: {
      type: String,
      default: "ios-cloud-upload-outline"
    }
  },
  data() {
    return {
      accessToken: {}, // 验证token
      currentValue: this.value, // 当前值
      loading: false, // 加载状态
      viewImage: false, // 预览图片modal
      uploadFileUrl: uploadFile, // 上传地址
      picModalFlag: false, // 图片选择器
      selectedFormBtnName: "", // 点击图片绑定form
      picIndex: "", // 存储身份证图片下标，方便赋值
    };
  },
  methods: {
    // 选择图片modal
    handleCLickImg(val, index) {
      this.$refs.ossManage.selectImage = true;
      this.picModalFlag = true;
      this.selectedFormBtnName = val;
      this.picIndex = index;
    },
    // 图片回显
    callbackSelected(val) {
      console.log('图片回显', val);
      this.picModalFlag = false;
      this.currentValue = val.url;
      this.picIndex = "";
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
    },
    // 初始化
    init() {
      this.accessToken = {
        accessToken: this.getStore("accessToken")
      };
    },
    // 格式校验
    handleFormatError(file) {
      this.loading = false;
      this.$notify.warning({
        title: "不支持的文件格式",
        desc:
          "所选文件‘ " +
          file.name +
          " ’格式不正确, 请选择 .jpg .jpeg .png .gif .bmp格式文件"
      });
    },
    // 大小校验
    handleMaxSize(file) {
      this.loading = false;
      this.$notify.warning({
        title: "文件大小过大",
        desc: "所选文件大小过大, 不得超过1M."
      });
    },
    // 上传前
    beforeUpload() {
      this.loading = true;
      return true;
    },
    // 上传成功
    handleSuccess(res, file) {
      this.loading = false;
      if (res.success) {
        this.currentValue = res.result;
        this.$emit("input", this.currentValue);
        this.$emit("on-change", this.currentValue);
      } else {
        // this.$Message.error(res.message);
      }
    },
    // 上传失败
    handleError(error, file, fileList) {
      this.loading = false;
      this.$message.error(error.toString());
    },
    // 上传成功回显
    handleChange(v) {
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
      this.$attrs.rollback && this.$attrs.rollback()
    },
    // 初始值
    setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }
      this.currentValue = value;
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.see-icon {
  font-size: 16px;
  cursor: pointer;
}

.upload {
  display: inline-block;
  margin-left: 10px;
}
</style>

