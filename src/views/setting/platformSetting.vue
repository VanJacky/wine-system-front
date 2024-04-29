<template>
  <div>
    <el-card>
      <el-tabs v-model="tabName" :animated="false" style="overflow: visible">
        <el-tab-pane label="基础设置" name="base">
          <div style="display:flex;position:relative">
            <el-form
              ref="baseForm"
              :model="base"
              label-width="140"
              label-position="right"
              :rules="baseValidate"
              v-loading="loading"
            >
              <el-form-item label="网站名称" prop="siteName">
                <el-input type="text" v-model="base.siteName" placeholder="请输入网站名称" style="width: 350px"/>
              </el-form-item>
              <el-form-item label="ICP证书号" prop="icp">
                <el-input type="text" v-model="base.icp" placeholder="请输入ICP证书号"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="Logo" prop="logo">
                <single-upload v-model="base.logo" style="width: 350px"></single-upload>
              </el-form-item>
              <el-form-item label="商家中心Logo" prop="sellerLogo">
                <single-upload v-model="base.sellerLogo" style="width: 350px"></single-upload>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100px;margin-right:5px" :loading="saveLoading"
                        @click="saveBase">保存
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
<!--        <el-tab-pane label="积分设置" name="point">
          <div style="display:flex;position:relative">
            <el-form
                    ref="pointForm"
                    :model="point"
                    label-width="140"
                    label-position="right"
                    :rules="pointValidate"
                    v-loading="loading"
            >
              <el-form-item label="注册" prop="register">
                <el-input type="text" v-model="point.register" placeholder="请输入注册赠送积分"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="登陆" prop="login">
                <el-input type="text" v-model="point.login" placeholder="请输入登陆赠送积分"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="消费一元" prop="money">
                <el-input type="text" v-model="point.money" placeholder="请输入积分"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100px;margin-right:5px" :loading="saveLoading"
                        @click="savePoint">保存
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>-->
        <el-tab-pane label="订单设置" name="order">
          <div style="display:flex;position:relative">
            <el-form
                    ref="orderForm"
                    :model="order"
                    label-width="140"
                    label-position="right"
                    :rules="orderValidate"
                    v-loading="loading"
            >
              <el-form-item label="自动取消 分钟" prop="autoCancel">
                <el-input type="text" v-model="order.autoCancel" placeholder="请输入自动取消分钟"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="自动收货 天" prop="autoReceive">
                <el-input type="text" v-model="order.autoReceive" placeholder="请输入自动收货天数"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="自动收货 天" prop="autoComplete">
                <el-input type="text" v-model="order.autoComplete" placeholder="请输入自动完成天数"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100px;margin-right:5px" :loading="saveLoading"
                        @click="saveOrder">保存
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品设置" name="goods">
          <div style="display:flex;position:relative">
            <el-form
                    ref="goodsForm"
                    :model="goods"
                    label-width="140"
                    label-position="right"
                    :rules="goodsValidate"
                    v-loading="loading"
            >
              <el-form-item label="是否开启商品审核" prop="goodsCheck">
                <el-radio-group type="button" button-style="solid" v-model="goods.goodsCheck">
                  <el-radio label="OPEN">开启</el-radio>
                  <el-radio label="CLOSE">关闭</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="商品页面小图宽度" prop="smallPictureWidth">
                <el-input type="text" v-model="goods.smallPictureWidth" placeholder="商品页面小图宽度"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="商品页面小图高度" prop="smallPictureHeight">
                <el-input type="text" v-model="goods.smallPictureHeight" placeholder="商品页面小图高度"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="缩略图宽度" prop="abbreviationPictureWidth">
                <el-input type="text" v-model="goods.abbreviationPictureWidth" placeholder="缩略图宽度"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="缩略图高度" prop="abbreviationPictureHeight">
                <el-input type="text" v-model="goods.abbreviationPictureHeight" placeholder="缩略图高度"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="原图宽" prop="originalPictureWidth">
                <el-input type="text" v-model="goods.originalPictureWidth" placeholder="原图宽"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item label="原图高" prop="originalPictureHeight">
                <el-input type="text" v-model="goods.originalPictureHeight" placeholder="原图高"
                       style="width: 350px"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100px;margin-right:5px" :loading="saveLoading"
                        @click="saveGoods">保存
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
<!--        <el-tab-pane label="信任登陆" name="trust">
          <div>
            <el-row style="background:#eee;padding:10px;" :gutter="16">
              <el-col span="12">
                <el-card>
                  <p slot="title">微信信任登陆</p>
                  <el-form
                          ref="wechatForm"
                          :model="wechat"
                          label-width="140"
                          label-position="right"
                          v-loading="loading"
                  >
                    <el-form-item label="appId" prop="appId">
                      <el-input type="text" v-model="wechat.appId" placeholder="appId"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="appSecret" prop="appSecret">
                      <el-input type="text" v-model="wechat.appSecret" placeholder="appSecret"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackUrl" prop="callbackUrl">
                      <el-input type="text" v-model="wechat.callbackUrl" placeholder="callbackUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackLoginUrl" prop="callbackLoginUrl">
                      <el-input type="text" v-model="wechat.callbackLoginUrl"
                             placeholder="callbackLoginUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackBindUrl" prop="callbackBindUrl">
                      <el-input type="text" v-model="wechat.callbackBindUrl"
                             placeholder="callbackBindUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 100px;margin-right:5px"
                              :loading="saveLoading"
                              @click="saveWechat">保存
                      </el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
              <el-col span="12">
                <el-card>
                  <p slot="title">QQ信任登陆</p>
                  <el-form
                          ref="qqForm"
                          :model="qq"
                          label-width="140"
                          label-position="right"
                          v-loading="loading"
                  >
                    <el-form-item label="appId" prop="appId">
                      <el-input type="text" v-model="qq.appId" placeholder="appId"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="appKey" prop="appKey">
                      <el-input type="text" v-model="qq.appKey" placeholder="appKey"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackUrl" prop="callbackUrl">
                      <el-input type="text" v-model="qq.callbackUrl" placeholder="callbackUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackLoginUrl" prop="callbackLoginUrl">
                      <el-input type="text" v-model="qq.callbackLoginUrl"
                             placeholder="callbackLoginUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackBindUrl" prop="callbackBindUrl">
                      <el-input type="text" v-model="qq.callbackBindUrl"
                             placeholder="callbackBindUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 100px;margin-right:5px"
                              :loading="saveLoading"
                              @click="saveQQ">保存
                      </el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
            </el-row>
            <el-row style="background:#eee;padding:10px;"
                    v-loading="loading"
                    :gutter="16">
              <el-col span="12">
                <el-card>
                  <p slot="title">微博信任登陆</p>
                  <el-form
                          ref="weiboForm"
                          :model="weibo"
                          label-width="140"
                          label-position="right"
                          v-loading="loading"
                  >
                    <el-form-item label="appKey" prop="appKey">
                      <el-input type="text" v-model="weibo.appKey" placeholder="appKey"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="appSecret" prop="appSecret">
                      <el-input type="text" v-model="weibo.appSecret" placeholder="appSecret"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackUrl" prop="callbackUrl">
                      <el-input type="text" v-model="weibo.callbackUrl" placeholder="callbackUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackLoginUrl" prop="callbackLoginUrl">
                      <el-input type="text" v-model="weibo.callbackLoginUrl"
                             placeholder="callbackLoginUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackBindUrl" prop="callbackBindUrl">
                      <el-input type="text" v-model="weibo.callbackBindUrl"
                             placeholder="callbackBindUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 100px;margin-right:5px"
                              :loading="saveLoading"
                              @click="saveWeibo">保存
                      </el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
              <el-col span="12">
                <el-card>
                  <p slot="title">支付宝信任登陆</p>
                  <el-form
                          ref="alipayForm"
                          :model="alipay"
                          label-width="140"
                          label-position="right"
                          v-loading="loading"
                  >
                    <el-form-item label="appId" prop="appId">
                      <el-input type="text" v-model="alipay.appId" placeholder="appId"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="appSecret" prop="appSecret">
                      <el-input type="text" v-model="alipay.appSecret" placeholder="appSecret"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackUrl" prop="callbackUrl">
                      <el-input type="text" v-model="alipay.callbackUrl" placeholder="callbackUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackLoginUrl" prop="callbackLoginUrl">
                      <el-input type="text" v-model="alipay.callbackLoginUrl"
                             placeholder="callbackLoginUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item label="callbackBindUrl" prop="callbackBindUrl">
                      <el-input type="text" v-model="alipay.callbackBindUrl"
                             placeholder="callbackBindUrl"
                             style="width: 350px"/>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" style="width: 100px;margin-right:5px"
                              :loading="saveLoading"
                              @click="saveAlipay">保存
                      </el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>-->
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

  import {regular} from '@/utils'
  import SingleUpload from "@/components/Upload/singleUpload.vue";

  export default {
    name: "setting-manage",
    components: {
      SingleUpload,
    },
    data() {
      return {
        tabName: "base", // tab栏名字
        loading: false, // 表单加载状态
        saveLoading: false, // 保存加载状态
        base: { // 基本设置
          siteName: "",
          icp: "",
          logo: "",
          sellerLogo: "",
        },
        point: { // 积分设置
          register: "",
          login: "",
          money: ""
        },
        order: { // 订单设置
          autoCancel: "",
          autoReceive: "",
          autoComplete: ""
        },
        goods: { // 商品设置
          goodsCheck: "OPEN",
          smallPictureWidth: "",
          smallPictureHeight: "",
          abbreviationPictureWidth: "",
          abbreviationPictureHeight: "",
          originalPictureWidth: "",
          originalPictureHeight: ""
        },
        wechat: { // 微信设置
          appId: "",
          appSecret: "",
          callbackUrl: "",
          callbackLoginUrl: "",
          callbackBindUrl: ""
        },
        qq: { // qq设置
          appId: "",
          appKey: "",
          callbackUrl: "",
          callbackLoginUrl: "",
          callbackBindUrl: ""
        },
        weibo: { // 微博
          appKey: "",
          appSecret: "",
          callbackUrl: "",
          callbackLoginUrl: "",
          callbackBindUrl: ""
        },
        alipay: { // 阿里
          appId: "",
          appSecret: "",
          callbackUrl: "",
          callbackLoginUrl: "",
          callbackBindUrl: ""
        },
        baseValidate: {
          // 表单验证规则
          siteName: [{required: true, message: "不能为空", trigger: "blur"}],
          icp: [{required: true, message: "不能为空", trigger: "blur"}],
          logo: [{required: true, message: "不能为空", trigger: "blur"}],
          sellerLogo: [{required: true, message: "不能为空", trigger: "blur"}]
        },
        pointValidate: {
          // 表单验证规则
          register: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          login: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          money: [
            {
              required: true,
              validator: (rule, value, callback) => {
                if (!regular.integer.test(value)) {
                  callback(new Error('请输入正整数，且不为零！'))
                } else {
                  callback()
                }
              },
              trigger: 'blur'
            }]
        },
        orderValidate: {
          // 表单验证规则
          autoCancel: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          autoReceive: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          autoComplete: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }]
        },
        goodsValidate: {
          smallPictureWidth: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          smallPictureHeight: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          abbreviationPictureWidth: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          abbreviationPictureHeight: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          originalPictureWidth: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          originalPictureHeight: [{
            required: true,
            validator: (rule, value, callback) => {
              if (!regular.integer.test(value)) {
                callback(new Error('请输入正整数，且不为零！'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      init() {
        this.initBase();
        this.initPoint();
        this.initOrder();
        this.initGoods();
        this.initWechat();
        this.initQQ();
        this.initWeibo();
        this.initAlipay();
      },
      // 基础配置
      initBase() {
        this.loading = true;
        getParams('base').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.base = res.data.result
            }
          }
        });
      },
      // 积分设置
      initPoint() {
        this.loading = true;
        getParams('point').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.point = res.data.result
            }
          }
        });
      },
      // 订单设置
      initOrder() {
        this.loading = true;
        getParams('order').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.order = res.data.result
            }
          }
        });
      },
      // 商品设置
      initGoods() {
        this.loading = true;
        getParams('goods').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.goods = res.data.result
            }
          }
        });
      },
      //
      initWeibo() {
        this.loading = true;
        getParams('weibo').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.weibo = res.data.result
            }
          }
        });
      },
      // 微信设置
      initWechat() {
        this.loading = true;
        getParams('wechat').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.wechat = res.data.result
            }
          }
        });
      },
      initQQ() {
        this.loading = true;
        getParams('qq').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.qq = res.data.result
            }
          }
        });
      },
      // 阿里配置
      initAlipay() {
        this.loading = true;
        getParams('alipay').then(res => {
          if (res.data.success) {
            this.loading = false;
            if (res.data.result) {
              this.alipay = res.data.result
            }
          }
        });
      },
      // 保存基础配置
      saveBase() {
        this.$refs.baseForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.base.id = 'base'
            editParams(this.base, 'base').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存积分配置
      savePoint() {
        this.$refs.pointForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.point.id = 'point'
            editParams(this.point, 'point').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存订单配置
      saveOrder() {
        this.$refs.orderForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.order.id = 'order'
            editParams(this.order, 'order').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存商品设置
      saveGoods() {
        this.$refs.goodsForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.goods.id = 'goods'
            editParams(this.goods, 'goods').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存微信设置
      saveWechat() {
        this.$refs.wechatForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.wechat.id = 'wechat'
            editParams(this.wechat, 'wechat').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存qq设置
      saveQQ() {
        this.$refs.qqForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.qq.id = 'qq'
            editParams(this.qq, 'qq').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存微博设置
      saveWeibo() {
        this.$refs.wechatForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.weibo.id = 'weibo'
            editParams(this.weibo, 'weibo').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      },
      // 保存支付宝设置
      saveAlipay() {
        this.$refs.alipayForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            this.alipay.id = 'alipay'
            editParams(this.alipay, 'alipay').then(res => {
              this.saveLoading = false;
              if (res.data.success) {
                this.$message.success("保存成功");
              }
            });
          }
        });
      }
    },
    mounted() {
      let name = this.$route.query.name;
      if (name) {
        this.tabName = name;
      }
      this.init();
    }
  };

</script>
