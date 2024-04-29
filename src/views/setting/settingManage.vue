
<template>
  <el-card v-if="show">
    <el-tabs v-model="selected" @tab-click="clickTab">
      <el-tab-pane :label="tabItem.name" :name="tabItem.type" v-for="(tabItem, tabIndex) in tabWay" :key="tabIndex">
        <component v-if="settingData" :res="settingData" :type="selected"
                   :is="templateSetting[tabItem.type]"></component>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import templateSetting from "./template";
import {getManagerSettingGetByKey} from "@/apis/controller";

export default {
  data() {
    return {
      templateSetting, // 设置模板
      selected: "", // 已选
      settingData: "", // 模板数据
      show: true, // 是否显示
      setting: [
        //基础配置
        {
          type: "BASE_SETTING",
          name: "基础配置",
        },
        //商品设置
        {
          type: "GOODS_SETTING",
          name: "商品设置",
        },
        //订单配置
        {
          type: "ORDER_SETTING",
          name: "订单配置",
        },
        //积分设置
        {type: "POINT_SETTING", name: "积分设置"},
        {
          type: "WITHDRAWAL_SETTING",
          name: "提现设置",
        },
        //  快递查询设置
        {
          type: "LOGISTICS_SETTING",
          name: "快递查询设置",
        },
        //静态资源配置
        {
          type: "OSS_SETTING",
          name: "静态资源配置",
        },
        //短信配置
        {
          type: "SMS_SETTING",
          name: "短信配置",
        },
        //阿里短信配置
        {
          type: "IM_SETTING",
          name: "客服设置",
        },
      ],
      authLogin: [
        // 微信设置
        {type: "WECHAT_CONNECT", name: "微信设置"},
        // QQ设置
        {type: "QQ_CONNECT", name: "QQ设置"},
        //微博联合登陆
        // {type: "WEIBO_CONNECT", name: "微博联合登陆"},
        // //支付宝配置
        // {type: "ALIPAY_CONNECT", name: "支付宝配置"},
      ],
      pay: [
        //支付宝支付设置
        {type: "PAYMENT_SUPPORT", name: "支付开启/关闭"},
        //支付宝支付设置
        {type: "ALIPAY_PAYMENT", name: "支付宝支付设置"},
        //微信支付设置
        {type: "WECHAT_PAYMENT", name: "微信支付设置"},
      ],
      tabWay: [], // tab数据
    };
  },

  watch: {
    $route(to, from) {
      this.selected = "";
      this.show = false;
      this.getSettingData(this.selected);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    this.clickTab();
  },
  methods: {
    // tab切换
    clickTab(v) {
      console.log(v)
      this.selected = v
      if (v){
        console.log(v._props)
        this.selected = v._props.name;
      }
      this.getSettingData(this.selected);
    },
    /**
     * 进入页面请求第一个配置
     */
    getSettingData(name) {
      this.settingData = "";
      Object.keys(this).forEach((item) => {
        if (this.$route.name == item) {
          this.tabWay = this[item];
        }
      });
      // 点击页面给每项第一个数据赋值
      if (!name) {
        name = this.tabWay[7].type;
        this.selected = name;
      }

      getManagerSettingGetByKey({key: name}).then((res) => {
        if (res.data.result) {
          this.settingData = JSON.stringify(res.data.result);
        }
      });
    },
  },
};
</script>
