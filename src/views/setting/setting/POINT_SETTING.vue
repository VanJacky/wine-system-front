<template>
  <div class="layout">
    <el-form ref="formValidate" label-width="150" label-position="right" :model="formValidate" :rules="ruleValidate">
      <el-form-item label="消费1元赠送积分" prop="consumer">
        <el-input type="number" v-model="formValidate.consumer">
          <span slot="append">积分</span>
        </el-input>

      </el-form-item>
      <!-- <el-form-item label="积分抵扣付款" prop="money">
        <el-input type="number" v-model="formValidate.money">
          <span slot="prepend">积分</span>
          <span slot="append"> = 1 人民币</span>
        </el-input>

      </el-form-item> -->

      <el-form-item label="注册账号" prop="register">
        <el-input type="number" v-model="formValidate.register">
          <span slot="append">积分</span>
        </el-input>
      </el-form-item>
      <!-- <el-form-item label="登录" class="label-item" prop="login">
        <el-input type="number" v-model="formValidate.login">

        <span slot="append">积分</span>
        </el-input>

      </el-form-item> -->

      <el-form-item label="每日签到积分" prop="signIn">
        <el-input type="number" v-model="formValidate.signIn">
          <span slot="append">积分</span>
        </el-input>

      </el-form-item>
      <el-form-item label="订单评价赠送积分" prop="comment">
        <el-input type="number" v-model="formValidate.comment">
          <span slot="append">积分</span>
        </el-input>

      </el-form-item>

      <el-form-item class="label-item" v-for="(point,index) in  formValidate.pointSettingItems" :key="index"
                :label="'签到设置'+(index+1)">
        <div class="label-item">

          <el-input-number :min="1" v-model="point.day"></el-input-number>

          <el-input-number :min="0" v-model="point.point"></el-input-number>

          <el-button ghost type="error" @click="delSign(point,index)">删除</el-button>
          <span class="ml_10">签到<span class="theme_color">{{ point.day }}</span>天，赠送<span
            class="theme_color">{{ point.point }}</span>积分</span>
        </div>

      </el-form-item>
      <el-form-item label="操作：">
        <el-button @click="addSign">新增签到</el-button>
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
      ruleValidate: {}, // 验证规则
      formValidate: {}, // 表单数据
      result: "",
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
    delSign(item, index) {
      this.formValidate.pointSettingItems.splice(index, 1);
    },
    addSign() {
      if (this.formValidate.pointSettingItems.length >= 4) {
        this.$message.error({
          content: "最多设置4项签到设置",
        });
        return false;
      }
      this.formValidate.pointSettingItems.push({
        point: "0",
        day: this.formValidate.pointSettingItems.length,
      });
    },
    // 实例化数据
    init() {
      this.result = JSON.parse(this.res);
      Object.keys(this.result).map((item) => {
        if (item == "pointSettingItems") {
          return false;
        }
        this.result[item] += "";
      });

      this.$set(this, "formValidate", {...this.result});

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

  > .ivu-input-number {
    width: 100px;
    margin-right: 5px;
  }

  > .ivu-input-number:nth-last-of-type(1) {
    width: 150px;
    margin-right: 5px;
  }

  > .ivu-input {
    width: 100px;
    margin: 0 10px;
  }
}

::v-deep .ivu-input {
  width: 70px !important;
}

.ivu-input-wrapper {
  width: 70px;
  margin-right: 10px;
}

.label-btns {
  ::v-deep .ivu-btn {
    margin-right: 10px;
  }
}
</style>
