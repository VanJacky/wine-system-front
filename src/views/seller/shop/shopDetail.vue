<template>
  <div>
    <el-card style="padding: 10px 12px 0px">
      <div class="head-title">基本信息</div>
      <div class="detail-body">
        <div class="ant-col-md-6" style="width: 25%">
          <div class="info">
            <div class="head-info">
              <Avatar size="large" :src="storeInfo.storeLogo" />
              <div>
                <div
                  class="name"
                  v-if="storeInfo.storeName && storeInfo.storeName.length > 15"
                >
                  {{ storeInfo.storeName.slice(0, 15) }}...
                </div>
                <div class="name" v-else>
                  {{ storeInfo.storeName }}
                </div>
              </div>
            </div>
            <div class="bottom-info">
              <p v-if="storeInfo.createTime">
                {{ storeInfo.createTime }}&nbsp;开店
              </p>
              <!-- <p v-if="storeInfo.selfOperated == 1">
                <Tag color="success">自营</Tag>
              </p>
              <p v-else>
                <Tag color="error">非自营</Tag>
              </p>
              <p> -->
                <!-- <el-switch
                  size="large"
                  v-model="storeInfo.storeDisable"
                  :true-value="true"
                  :false-value="false"
                  @on-change="shopStatusChange"
                >
                  <span slot="open">启用</span>
                  <span slot="close">禁用</span>
                </el-switch> -->
              </p>
            </div>
            <div style="margin-top: 20px">
              <p class="item">
                <span class="label">公司名称：</span>
                <span class="info">{{ storeInfo.subject_info.business_license_info.merchant_name }}</span>
              </p>
              <!-- <p class="item">
                <span class="label">公司电话：</span>
                <span class="info">{{ storeInfo.contact_info.mobile_phone }}</span>
              </p> -->
              <p class="item">
                <span class="label">电子邮箱：</span>
                <span class="info">{{ storeInfo.contact_info.contact_email }}</span>
              </p>
              <!-- <p class="item">
                <span class="label">员工总数：</span>
                <span class="info">{{ storeInfo.employeeNum }}人</span>
              </p> -->
              <!-- <p class="item">
                <span class="label">注册资金：</span>
                <span class="info">{{ storeInfo.registeredCapital }}万</span>
              </p> -->
              <!-- <p class="item">
                <span class="label">电子邮箱：</span>
                <span class="info">{{ storeInfo.companyEmail }}</span>
              </p> -->
              <p class="item">
                <span class="label">联系人姓名：</span>
                <span class="info">{{ storeInfo.contact_info.contact_name }}</span>
              </p>
              <p class="item">
                <span class="label">联系人电话：</span>
                <span class="info">{{ storeInfo.contact_info.mobile_phone }}</span>
              </p>
              <p class="item">
                <span class="label">公司地址：</span>
                <span class="info">
                  {{
                    storeInfo.subject_info.business_license_info.license_address
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="ant-col-md-6">
          <p class="item">
            <span class="label">商家账号：</span>
            <span class="info">{{ storeInfo.subject_info.business_license_info.merchant_name }}</span>
          </p>
          <!-- <p class="item">
            <span class="label">库存预警数：</span>
            <span class="info">{{
              storeInfo.stockWarning ? storeInfo.stockWarning : "0"
            }}</span>
          </p> -->
          <!-- <p class="item">
            <span class="label">店铺所在地：</span>
            <span class="info">
              <span>
                {{
                  storeInfo.storeAddressPath !== null &&
                  storeInfo.storeAddressPath !== "" &&
                  storeInfo.storeAddressPath !== "null" &&
                  storeInfo.storeAddressPath !== undefined
                    ? storeInfo.storeAddressPath
                    : ""
                }}
              </span>
              <span>
                {{
                  storeInfo.storeAddressDetail !== null &&
                  storeInfo.storeAddressDetail !== "" &&
                  storeInfo.storeAddressDetail !== "null" &&
                  storeInfo.storeAddressDetail !== undefined
                    ? storeInfo.storeAddressDetail
                    : ""
                }}
              </span>
              {{
                (storeInfo.storeAddressPath !== null &&
                  storeInfo.storeAddressPath !== "" &&
                  storeInfo.storeAddressPath !== "null" &&
                  storeInfo.storeAddressPath !== undefined) ||
                (storeInfo.storeAddressDetail !== null &&
                  storeInfo.storeAddressDetail !== "" &&
                  storeInfo.storeAddressDetail !== "null" &&
                  storeInfo.storeAddressDetail !== undefined)
                  ? ""
                  : "暂未完善"
              }}
            </span>
          </p> -->
          <!-- <p class="item">
            <span class="label">退货地址：</span>
            <span class="info">
              {{
                storeInfo.salesConsigneeName !== "null"
                  ? storeInfo.salesConsigneeName
                  : "" || storeInfo.salesConsigneeMobile !== "null"
                  ? storeInfo.salesConsigneeMobile
                  : "" || storeInfo.salesConsigneeAddressPath !== "null"
                  ? storeInfo.salesConsigneeAddressPath
                  : "" || storeInfo.salesConsigneeDetail !== "null"
                  ? storeInfo.salesConsigneeDetail
                  : ""
                  ? storeInfo.salesConsigneeName +
                    storeInfo.salesConsigneeMobile +
                    " " +
                    storeInfo.salesConsigneeAddressPath +
                    storeInfo.salesConsigneeDetail
                  : "暂未完善"
              }}
            </span>
          </p> -->
          <!-- <p class="item">
            <span class="label">店铺定位：</span>
            <span class="info">{{
              storeInfo.storeCenter ? "已定位" : "未定位"
            }}</span>
          </p> -->
          <!-- <p class="item">
            <span class="label">经营范围：</span>
            <span class="info">
              <CheckboxGroup v-model="checkAllGroup">
                <Checkbox
                  disabled
                  v-for="(item, i) in categories"
                  :key="i + 1"
                  :label="item.id"
                  >{{ item.name }}
                </Checkbox>
              </CheckboxGroup>
            </span>
          </p> -->
          <p class="item">
            <span class="label">店铺简介：</span>
            <span class="info">
              {{ storeInfo.storeDesc ? storeInfo.storeDesc : "暂未完善" }}
            </span>
          </p>
        </div>
        <div class="ant-col-md-6">
          <p class="item">
            <span class="label">法人姓名：</span>
            <span class="info">{{ storeInfo.subject_info.business_license_info.legal_person }}</span>
          </p>
          <p class="item">
            <span class="label">法人身份证：</span>
            <span class="info">{{ storeInfo.subject_info.identity_info.id_card_info.id_card_number }}</span>
          </p>
          <p class="item">
            <span class="label">身份证照片：</span>
            <span class="info">
              <img
                style="height: 100px; width: 100px"
                class="mr_10"
                v-for="item in storeInfo.legalPhoto"
                :src="item"
                :key="item"
              />
            </span>
          </p>
          <p class="item">
            <span class="label">营业执照号：</span>
            <span class="info">{{ storeInfo.subject_info.business_license_info.license_number }}</span>
          </p>
          <!-- <p class="item">
            <span class="label">法定经营范围：</span>
            <span class="info">{{ storeInfo.scope }}</span>
          </p> -->
          <p class="item">
            <span class="label">营业执照电子版：</span>
            <span class="info">
              <img
                style="height: 100px; width: 100px"
                :src="storeInfo.licencePhoto"
              />
            </span>
          </p>
          <p class="item">
            <span class="label">银行名称：</span>
            <span class="info">
              {{
                storeInfo.bank_account_info.account_bank
              }}
            </span>
          </p>
          <p class="item">
            <span class="label">银行账号：</span>
            <span class="info">
              {{
                storeInfo.bank_account_info.account_name
              }}
            </span>
          </p>
          <p class="item">
            <span class="label">银行账号：</span>
            <span class="info">
              {{
                storeInfo.bank_account_info.account_number
              }}
            </span>
          </p>
          <p class="item">
            <span class="label">银行开户支行名称：</span>
            <span class="info">
              {{
                storeInfo.bank_account_info.bank_name
              }}
            </span>
          </p>
          <p class="item">
            <span class="label">银行支行联行号：</span>
            <span class="info">
              {{
                storeInfo.settlementBankJointName == "null" ||
                !storeInfo.settlementBankJointName
                  ? ""
                  : storeInfo.settlementBankJointName
              }}</span
            >
          </p>
          <!-- <p class="item">
            <span class="label">结算周期：</span>
            <span class="info" v-if="storeInfo.settlementCycle">
              <template v-for="item in storeInfo.settlementCycle.split(',')">
                <Tag
                  :key="item"
                  v-if="item !== ''"
                  :name="item"
                  style="marrgin-left: 10px"
                  >{{ item }}
                </Tag>
              </template>
            </span>
          </p> -->
        </div>
      </div>
    </el-card>

    
  </div>
</template>

<script>
// import ossManage from "@/views/sys/oss-manage/ossManage";
// import * as RegExp from "@/libs/RegExp.js";
// import { getCategoryTree } from "@/api/goods";
// import * as API_Store from "@/api/shops.js";
// import * as API_Order from "@/api/order.js";
import {getManagerStoreStoreGetDetailByStoreId} from "@/apis/controller";

export default {
  name: "member",
  // components: {
  //   ossManage,
  // },
  data() {
    return {
      id: "", //店铺id
      categories: [], //店铺静音范围
      loading: true, // 表单加载状态
      storeInfo: {}, //店铺信息
      checkAllGroup: [], //选中的经营分类
      selectDate: null, // 申请时间

       
      orderData: [], //订单数据
      orderTotal: 0, //订单总条数
      //TA的订单form
      orderSearchForm: {
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        payStatus: "",
        orderSn: "",
        orderType: "",
      },
       
      refundGoodsOrderData: [], //售后单数据
      refundGoodsOrderTotal: 0, //售后单总条数
      //TA的退货单form
      refundGoodsOrderSearchForm: {
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
      },
      //TA的退款单form
      refundOrderSearchForm: {
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
      },
      refundOrderData: [], //售后单数据
      refundOrderTotal: 0, //售后单总条数
    };
  },
  methods: {
    init() {
      //查店铺基本信息
      this.getStoreInfo();
      // //查询店铺分类
      // this.getCategories();
      // //查询订单信息
      // this.getOrderData();
    },
    //会员信息tab改变事件
    storeInfoChange(v) {
      if (v == "order") {
        this.getOrderData();
      }
      if (v == "refundGoods") {
        this.getRefundGoodsOrderData();
      }
      if (v == "refund") {
        this.getRefundOrder();
      }
    },
    //查询会员信息
    getStoreInfo() {
      getManagerStoreStoreGetDetailByStoreId({storeId: this.id}).then((res) => {
        const obj = JSON.parse(res.data.result.storeJson);
        console.log("ooo",obj)
        this.$set(this, "storeInfo", obj);
        //因switch开关需要用到true或者false 所以进行一次格式化
        this.storeInfo.storeDisable =
          this.storeInfo.storeDisable === "OPEN" ? true : false;
        if (this.storeInfo.goodsManagementCategory != null) {
          this.checkAllGroup =
            this.storeInfo.goodsManagementCategory.split(",");
        }
        this.storeInfo.legalPhoto = this.storeInfo.legalPhoto.split(",");
      });
    },
    //店铺状态改变事件
    shopStatusChange(v) {
      if (v) {
        API_Store.enableBrand(this.id).then((res) => {});
      } else {
        API_Store.disableShop(this.id).then((res) => {});
      }
    },
    //查询TA的订单
    getOrderData() {
      this.loading = true;
      this.orderSearchForm.storeId = this.id;
      API_Order.getOrderList(this.orderSearchForm).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.orderData = res.data.result.records;
          this.orderTotal = res.data.result.total;
        }
      });
      this.loading = false;
    },
    //查询TA的售后单
    getRefundOrder() {
      this.loading = true;
      this.refundOrderSearchForm.storeId = this.id;
      this.refundOrderSearchForm.serviceType = "RETURN_MONEY";
      API_Order.getAfterSaleOrderPage(this.refundOrderSearchForm).then(
        (res) => {
          this.loading = false;
          if (res.data.success) {
            this.refundOrderData = res.data.result.records;
            this.refundOrderTotal = res.data.result.total;
          }
        }
      );
      this.loading = false;
    },
    //查询TA的售后单
    getRefundGoodsOrderData() {
      this.loading = true;
      this.refundGoodsOrderSearchForm.storeId = this.id;
      this.refundGoodsOrderSearchForm.serviceType = "RETURN_GOODS";
      API_Order.getAfterSaleOrderPage(this.refundGoodsOrderSearchForm).then(
        (res) => {
          this.loading = false;
          if (res.data.success) {
            this.refundGoodsOrderData = res.data.result.records;
            this.refundGoodsOrderTotal = res.data.result.total;
          }
        }
      );
      this.loading = false;
    },
    //查询分类
    getCategories() {
      getCategoryTree().then((res) => {
        if (res.data.success) {
          this.categories = res.data.result;
        }
      });
    },
    //售后单页数变化
    refundGoodsOrderChangePage(v) {
      this.refundGoodsOrderSearchForm.pageNumber = v;
      this.getRefundGoodsOrderData();
    },
    //售后单页数变化
    refundGoodsOrderChangePageSize(v) {
      this.refundGoodsOrderSearchForm.pageSize = v;
      this.refundGoodsOrderSearchForm.pageNumber = 1;
      this.getRefundGoodsOrderData();
    },
    //退款单页数变化
    refundOrderChangePage(v) {
      this.refundOrderSearchForm.pageNumber = v;
      this.getRefundOrder();
    },
    //售后单页数变化
    refundOrderChangePageSize(v) {
      this.refundOrderSearchForm.pageSize = v;
      this.refundOrderSearchForm.pageNumber = 1;
      this.getRefundOrder();
    },
    //订单记录页数变化
    orderChangePage(v) {
      this.orderSearchForm.pageNumber = v;
      this.getOrderData();
    },
    //订单记录页数变化
    orderChangePageSize(v) {
      this.orderSearchForm.pageSize = v;
      this.orderSearchForm.pageNumber = 1;
      this.getOrderData();
    },
    // 起止时间格式化
    selectDateRange(v) {
      if (v) {
        this.orderSearchForm.startDate = v[0];
        this.orderSearchForm.endDate = v[1];
      }
    },
    // 起止时间格式化
    selectRefundGoodsDateRange(v) {
      if (v) {
        this.refundGoodsOrderSearchForm.startDate = v[0];
        this.refundGoodsOrderSearchForm.endDate = v[1];
      }
    },
    // 起止时间格式化
    selectRefundDateRange(v) {
      if (v) {
        this.refundOrderSearchForm.startDate = v[0];
        this.refundOrderSearchForm.endDate = v[1];
      }
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.init();
  },
};
</script>
<style lang="scss" scoped>
@import "shopDetail.scss";
</style>
