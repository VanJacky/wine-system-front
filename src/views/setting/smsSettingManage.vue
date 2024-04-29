<template>
  <div  class="app-container">
  <el-card class="card">

    <div class="cardBox">
      <div class="methodItem">
        <img src="@/assets/images/aliyun.png" height="172" width="440"/>
        <h4>阿里云短信</h4></div>
      <div class="bar">
        <div class="status" style="color: rgb(53, 189, 129);">已启用</div>
        <div @click="modalVisible = true"><a class="links">编辑</a></div>
      </div>
    </div>
    <!-- 阿里云的短信参数 -->


  </el-card>
  <el-dialog
    :title="modalTitle"
    :visible.sync="modalVisible"
    width="500"
  >
    <el-form ref="form" :model="form" label-width="100" >
      <el-form-item label="accessKeyId" prop="addressName">
        <el-input v-model="form.accessKeyId" clearable style="width: 100%"/>
      </el-form-item>
      <el-form-item label="accessSecret" prop="accessSecret">
        <el-input v-model="form.accessSecret" clearable style="width: 100%"/>
      </el-form-item>
      <el-form-item label="signName" prop="signName">
        <el-input v-model="form.signName" clearable style="width: 100%"/>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="text" @click="modalVisible = false">取消</el-button>
      <el-button type="primary" :loading="submitLoading" @click="saveSetting"
      >提交
      </el-button
      >
    </div>
  </el-dialog>
  </div>
</template>
<script>
  import template from "./template";
  import {putManagerSettingPutByKey} from "@/apis/controller/GuanLiDuan,XiTongSheZhiJieKou/putManagerSettingPutByKey";
  import {getManagerSettingGetByKey} from "@/apis/controller/GuanLiDuan,XiTongSheZhiJieKou/getManagerSettingGetByKey";
  export default {
    name: "smsSettingManage",
    components: {
      template
    },

    data() {
      return {
        submitLoading: false, // 提交状态
        template, // 模板
        selected: "", // 已选数据
        settingData: "", // 设置数据
        modalTitle: '设置', // modal标题
        modalVisible: false, // modal显隐
        form: {}, // 表单数据
      }
    },
    methods: {
      // 初始化数据
      init() {
        this.settingInfo("SMS_SETTING")
      },
      // 保存设置
      saveSetting() {
        putManagerSettingPutByKey({key: "SMS_SETTING"}, this.$util.urlFormat(this.form), this.$util.headers()).then((res) => {
          if (res.data.success) {
            this.$message.success("保存成功!");
          } else {
            this.$message.error("保存失败!");
          }
          this.modalVisible = false
        });
      },
      // 查看
      settingInfo(v) {
        // alert()
        this.selected = v
        getManagerSettingGetByKey({key: v}).then((res) => {
          if (res.data.result) {
            console.log(res)
            this.modalVisible = true
            this.form = res
          }
        });
      }
    },
    mounted() {
      this.init();
    },
  };
</script>
<style lang="scss">
  .card {
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .cardBox {
    display: inline-block;
    border-radius: 2px;
    line-height: 1.5;
    margin-right: 20px;
    width: 300px;
    border: 1px solid #eee;
    padding: 10px;
  }

  .methodItem {
    width: 100%;
    border: 1px solid #f5f5f5;
    text-align: center;
    padding: 20px 0;
  }

  methodItem img {
    width: 220px;
    height: 86px;
  }

  methodItem h4 {
    font-size: 14px;
    color: #333;
    margin-top: 5px;
  }

  .methodItem img {
    width: 220px;
    height: 86px;
  }

  .bar {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 8px 0;
  }
</style>
