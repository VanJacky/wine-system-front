<template>
  <div class="app-container">
    <el-card>
      <el-button class="mb_10" v-if="shopForm.storeDisable === 'APPLYING'" type="primary" @click="auditHandler">审核</el-button>
        <el-form
          ref="shopForm"
          :model="shopForm"
          label-width="130px"
          label-position="right"
          :rules="shopValidate"
          @on-validate="formValidate"
        >
          <el-tabs v-model="tabName" style="overflow: visible">
          <el-tab-pane label="基本信息" class="tab" name="base">
            <el-divider orientation="left">基本信息</el-divider>
            <!-- 遮罩层  -->
            <div v-if="isRead" class="mask">只读不可修改</div>
            <div>
              <el-form-item label="会员名称" prop="memberName">
                <div class="item">
                  <el-input disabled v-model="shopForm.memberName" />
                  <el-button type="primary" @click="selectMember()" v-if="!$route.query.shopId"
                    >选择会员</el-button
                  >
                </div>
              </el-form-item>
              <el-form-item label="店铺名称" prop="storeName">
                <el-input v-model="shopForm.storeName" clearable style="width: 350px" />
              </el-form-item>

<!--
              <el-form-item label="是否自营" prop="selfOperated">
                <el-radio-group
                  type="button"
                  button-style="solid"
                  v-model="shopForm.selfOperated"
                >
                  <el-radio label="true">自营</el-radio>
                  <el-radio label="false">非自营</el-radio>
                </el-radio-group>
              </el-form-item>
-->

              <el-form-item label="店铺所在地" prop="storeAddressPath">
                <span>{{shopForm.storeAddressPath || '暂无地址'}}</span>
                <el-button style="margin-left: 10px;" type="primary" @click="handleClickAddress('storeAddressPath')">选择</el-button>
              </el-form-item>

              <el-form-item label="店铺详细地址" prop="storeAddressDetail">
                <el-input
                  v-model="shopForm.storeAddressDetail"
                  clearable
                  style="width: 350px"
                />
              </el-form-item>

              <!-- <el-form-item label="店铺定位" prop="shopCenter">
                 <el-button
                  v-if="!shopForm.storeCenter"
                  @click="$refs.liliMap.showMap = true"
                  >点击获取店铺定位</el-button
                >
                <el-button type="success" v-else @click="$refs.liliMap.showMap = true"
                  >已定位</el-button
                >
              </el-form-item> -->



              <el-form-item label="店铺logo" class="storeLogo">
                <el-avatar
                  style="height: 100px; width: 100px"
                  v-if="shopForm.storeLogo"
                  shape="square"
                  icon="ios-person"
                  :src="shopForm.storeLogo"
                />
                <div>
                  <el-button @click="showUpload.logo = true" type="primary"
                    >修改logo</el-button
                  >
                </div>
                <single-upload v-if="showUpload.logo" v-model="shopForm.storeLogo"></single-upload>
              </el-form-item>

              <el-form-item label="店铺简介" prop="storeDesc" style="width: 350px">
                <el-input
                  v-model="shopForm.storeDesc"
                  type="textarea"
                  :rows="4"
                  maxlength="200"
                  show-word-limit
                  clearable
                  style="width: 400px"
                />
              </el-form-item>
              <br />
              <el-divider orientation="left">退货收件地址</el-divider>
              <el-form-item label="收件人姓名">
                <el-input
                  v-model="shopForm.salesConsigneeName"
                  clearable
                  style="width: 350px"
                />
              </el-form-item>
              <el-form-item label="收件人手机">
                <el-input
                  v-model="shopForm.salesConsigneeMobile"
                  clearable
                  maxlength="11"
                  style="width: 350px"
                />
              </el-form-item>
              <el-form-item label="地址信息">
                {{ shopForm.salesConsigneeAddressPath || '暂无地址' }}
                <el-button style="margin-left: 10px;" @click="handleClickAddress('salesConsigneeAddressPath')">选择</el-button>
              </el-form-item>
              <el-form-item label="详细地址">
                <el-input
                  v-model="shopForm.salesConsigneeDetail"
                  clearable
                  style="width: 350px"
                />
              </el-form-item>
              <!-- <el-divider orientation="left">腾讯云智服</el-divider>
              <el-form-item label="唯一标识">
                <el-input v-model="shopForm.yzfSign" clearable style="width: 350px" />
              </el-form-item>
              <el-form-item label="小程序唯一标识">
                <el-input v-model="shopForm.yzfMpSign" clearable style="width: 350px" />
              </el-form-item>
              <el-spinner fix v-if="loading"></el-spinner> -->
            </div>
          </el-tab-pane>

          <!-- 入驻信息 -->
          <el-tab-pane label="入驻信息" class="tab" name="entry">
            <!-- 遮罩层  -->
            <div v-if="isRead" class="mask">只读不可修改</div>
            <el-divider orientation="left">公司信息</el-divider>
            <div>
              <el-form-item label="公司名称" prop="companyName">
                <el-input v-model="shopForm.companyName" clearable style="width: 350px" />
              </el-form-item>

              <el-form-item label="公司电话" prop="companyPhone">
                <el-input v-model="shopForm.companyPhone" clearable style="width: 350px" />
              </el-form-item>
              <el-form-item label="公司所在地" prop="companyAddressIdPath">
                <span>{{ shopForm.companyAddressPath }}</span>
                <el-button style="margin-left: 10px;" @click="handleClickAddress('companyAddressPath')">选择</el-button>
                <!-- <region
                  style="width: 350px"
                  @selected="selectedRegion"
                  :addressId="address"
                /> -->
              </el-form-item>
              <el-form-item label="公司详细地址" prop="companyAddress">
                <el-input v-model="shopForm.companyAddress" clearable style="width: 350px" />
              </el-form-item>
              <el-form-item label="员工总数" prop="employeeNum">
                <el-input-number
                  style="width: 150px"
                  :min="1"
                  :max="9999999"
                  v-model="shopForm.employeeNum"
                >
                </el-input-number>
              </el-form-item>
              <el-form-item label="注册资金" prop="registeredCapital">
                <el-input-number
                  style="width: 150px"
                  :min="1"
                  :max="9999999"
                  v-model="shopForm.registeredCapital"
                >
                </el-input-number>
                <span style="margin-left: 10px">万</span>
              </el-form-item>
              <el-form-item label="联系人姓名" prop="linkName">
                <el-input v-model="shopForm.linkName" clearable style="width: 200px" />
              </el-form-item>
              <el-form-item label="联系人手机" prop="linkPhone">
                <el-input
                  v-model="shopForm.linkPhone"
                  maxlength="11"
                  clearable
                  style="width: 200px"
                />
              </el-form-item>
              <el-form-item label="电子邮箱" prop="companyEmail">
                <el-input v-model="shopForm.companyEmail" clearable style="width: 200px" />
              </el-form-item>

              <el-divider orientation="left">营业执照信息</el-divider>

              <el-form-item label="营业执照号" prop="licenseNum">
                <el-input v-model="shopForm.licenseNum" clearable style="width: 200px" />
              </el-form-item>

              <el-form-item label="法定经营范围" prop="scope">
                <el-input v-model="shopForm.scope" clearable style="width: 200px" />
              </el-form-item>

              <el-form-item label="营业执照电子版" prop="licencePhoto">
                <el-avatar
                  style="height: 100px; width: 100px"
                  v-if="shopForm.licencePhoto"
                  shape="square"
                  icon="ios-person"
                  :src="shopForm.licencePhoto"
                />
                <div>
                  <el-button @click="showUpload.license = true" type="primary"
                  >修改图片</el-button
                  >
                </div>
                <single-upload v-if="showUpload.license" v-model="shopForm.licencePhoto"></single-upload>
              </el-form-item>
              <el-divider orientation="left">法人信息</el-divider>

              <el-form-item label="法人姓名" prop="legalName">
                <el-input v-model="shopForm.legalName" clearable style="width: 200px" />
              </el-form-item>
              <el-form-item label="法人证件号" prop="legalId">
                <el-input v-model="shopForm.legalId" clearable style="width: 200px" />
              </el-form-item>
              <el-form-item label="法人身份证照片" prop="legalPhoto">
                <el-avatar
                  class="legal-photo"
                  shape="square"
                  icon="md-add"
                  @click.native="showUpload.legalFront = true"
                  :src="shopForm.legalPhoto[0]"
                />
                <single-upload v-if="showUpload.legalFront" v-model="shopForm.legalPhoto[0]"></single-upload>
                <el-avatar
                  class="ml_10 legal-photo"
                  shape="square"
                  icon="md-add"
                  @click.native="showUpload.legalBack = true"
                  :src="shopForm.legalPhoto[1]"
                />
                <single-upload v-if="showUpload.legalBack" v-model="shopForm.legalPhoto[1]"></single-upload>
                <span>点击图片上传身份证正反面，要求身份证清晰，四角无缺漏</span>
              </el-form-item>

              <el-divider orientation="left">结算银行信息</el-divider>
              <el-form-item label="银行开户名" prop="settlementBankAccountName">
                <el-input
                  v-model="shopForm.settlementBankAccountName"
                  clearable
                  style="width: 200px"
                />
              </el-form-item>
              <el-form-item label="银行账号" prop="settlementBankAccountNum">
                <el-input
                  v-model="shopForm.settlementBankAccountNum"
                  clearable
                  style="width: 200px"
                />
              </el-form-item>
              <el-form-item label="银行支行名称" prop="settlementBankBranchName">
                <el-input
                  v-model="shopForm.settlementBankBranchName"
                  clearable
                  style="width: 200px"
                />
              </el-form-item>
              <el-form-item label="支行联行号" prop="settlementBankJointName">
                <el-input
                  v-model="shopForm.settlementBankJointName"
                  clearable
                  style="width: 200px"
                />
              </el-form-item>

              <el-spinner fix v-if="loading"></el-spinner>
            </div>
          </el-tab-pane>
          <el-tab-pane label="经营范围" class="tab" name="category">
            <!-- 遮罩层  -->
            <div v-if="isRead" class="mask">只读不可修改</div>
            <el-form-item label="经营类目" prop="goodsManagementCategory">
              <div>
                <el-checkbox
                  :indeterminate="indeterminate"
                  :value="checkAll"
                  @click.prevent.native="handleCheckAll"
                  >全选
                </el-checkbox>
              </div>
              <el-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <el-checkbox v-for="(item, i) in categories" :key="i + 1" :label="item.id"
                  >{{ item.name }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>

          <!-- <el-tab-pane label="配送信息" class="tab" name="send"> -->
            <!-- 遮罩层  -->
            <!-- <el-form-item label="达达编码" prop="ddCode">
              <el-input
                v-model="shopForm.ddCode"
                maxlength="20"
                clearable
                style="width: 200px"
              />
            </el-form-item> -->
          <!-- </el-tab-pane> -->

          <el-tab-pane label="结算信息" class="tab" name="settlement">
            <el-alert type="error"
              >已添加<span class="theme_color">{{ settlementCycle.length }}</span
              >个结算日，最多可添加5个结算日，当月不包含所设日期时，将会顺延到下一个结算日</el-alert
            >
            <el-form-item label="结算日期">
              <el-tag
                v-for="(item,index) in settlementCycle"
                :key="index"
                :name="item"
                closable
                style="marrgin-left: 10px"
                @on-close="removesettlementCycle"
                >{{ item }}
              </el-tag>
              <el-input-number
                size="mini"
                :max="31"
                :min="1"
                v-model="day"
                v-show="settlementShow"
              ></el-input-number>
              <el-button
                type=""
                @click="addsettlementCycle"
                size="mini"
                v-if="addSettlementBtn && settlementCycle.length < 5"
                style="margin-left: 8px"
                >添加结算日期
              </el-button>
              <el-button
                v-if="addSettlementConfirmBtn"
                type=""
                @click="addsettlementCycleConfirm"
                size="mini"
                style="margin-left: 8px"
                >确认
              </el-button>
            </el-form-item>
          </el-tab-pane>
      </el-tabs>
        </el-form>
      <div align="center">
        <el-button
          v-show="tabNameList.indexOf(tabName) > 0"
          class="mr_10"
          @click="prev"
          >上一步</el-button
        >
        <el-button type="primary" v-show="tabNameList.indexOf(tabName) < tabNameList.length - 1" @click="next"
          >下一步</el-button
        >
        <el-button
          type="primary"
          v-show="tabNameList.indexOf(tabName) === tabNameList.length - 1"
          @click="save"
          v-if="!isRead"
        >
          {{ shopId ? "修改" : "保存" }}
        </el-button>
      </div>
    </el-card>


    <el-dialog width="1200px" :visible.sync="picModalFlag">
<!--      <ossManage @callback="callbackSelected" :isComponent="true" ref="ossManage" />-->
    </el-dialog>

    <el-dialog width="1200px" :visible.sync="memberModalFlag">
      <memberLayout
        selected-member
        @callback="callbackMember"
        class="selectedMember"
        ref="memberLayout"
      />
    </el-dialog>

    <el-dialog :visible.sync="auditModel" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <el-icon type="ios-information-circle"></el-icon>
        <span>审核店铺</span>
      </p>
      <div style="text-align: center">
        <p>您确认要审核通过该店铺</p>
      </div>
      <div slot="footer">
        <el-button type="danger" :loading="auditModalLoading" @click="audit('REFUSED')"
          >驳回</el-button
        >
        <el-button type="primary" :loading="auditModalLoading" @click="audit('PASS')"
          >通过</el-button
        >
      </div>
    </el-dialog>
    <multipleMap ref="map" @callback="getAddress" />
  </div>
</template>

<script>
/*
import ossManage from "@/views/sys/oss-manage/ossManage";
import uploadPicInput from "@/components/lili/upload-pic-input";*/
import memberLayout from "@/views/member/index";
import multipleMap from "@/components/map/multiple-map";
import SingleUpload from "@/components/Upload/singleUpload.vue";
import {getManagerGoodsCategoryAllChildren} from "@/apis/controller";
import {
  putManagerStoreStoreAuditByIdByPassed
} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/putManagerStoreStoreAuditByIdByPassed";
import {
  getManagerStoreStoreGetDetailByStoreId
} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/getManagerStoreStoreGetDetailByStoreId";
import {postManagerStoreStoreAdd} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/postManagerStoreStoreAdd";
import {
  putManagerStoreStoreEditById
} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/putManagerStoreStoreEditById";

export default {
  name: "shopOperation",
  components: {
    SingleUpload,
    multipleMap,
    memberLayout
  },
  data() {
    return {
      shopId: this.$route.query.shopId, // 店铺id
      isRead: false, // 是否只读，只有在店铺通过审核才可修改
      selectedFormBtnName: "", // 点击图片绑定form
      loading: false,
      auditModel: false,
      auditModalLoading: false,
      picModalFlag: false, // 图片选择器
      address: "", // 地址
      returnAddress: "", // 退货地址
      memberModalFlag: false, // 商家账号
      settlementShow: false, // 是否展示结算日输入框
      addSettlementConfirmBtn: false, // 添加结算日确认按钮
      addSettlementBtn: true, // 添加结算日按钮
      showUpload: {logo: false,  license: false, legalFront: false, legalBack: false},
      day: 1, //结算日
      tabName: "base", // tab栏name值
      tabNameList: ["base", "entry", "category", "settlement"], // tab栏name值数组
      shopValidate: {
        // 表单验证规则
        memberName: [{ required: true, message: "会员不能为空" }],
        storeAddressPath: [{ required: true, message: "店铺地址不能为空" }],
        storeName: [{ required: true, message: "店铺名称不能为空" }],
        companyAddress: [{ required: true, message: "公司地址不能为空" }],
        storeAddressDetail: [{ required: true, message: "店铺详细地址不能为空" }],
        storeDesc: [{ required: true, message: "店铺简介不能为空" }],
        storeCenter: [{ required: true, message: "店铺未定位" }],
        companyName: [{ required: true, message: "公司名称不能为空" }],
        companyPhone: [{ required: true, message: "公司电话不能为空" }],
        employeeNum: [
          {
            required: true,
            type: "number",
            message: "员工总数不能为空",
            trigger: "blur",
          },
        ],
        companyAddressIdPath: [{ required: true, message: "请选择公司地址" }],
        registeredCapital: [
          {
            required: true,
            type: "number",
            message: "注册资金不能为空",
            trigger: "blur",
          },
        ],
        linkName: [{ required: true, message: "联系人姓名不能为空" }],
        linkPhone: [
          { required: true, message: "联系人手机号不能为空" },
          {
            type: "string",
            pattern: /^1[3|4|5|6|7|8][0-9]{9}$/,
            message: "手机号格式出错",
            trigger: "blur",
          },
        ],
        companyEmail: [
          { required: true, message: "邮箱不能为空" },
          { type: "email", message: "邮箱格式错误" },
        ],
        licenseNum: [{ required: true, message: "营业执照号不能为空" }],
        scope: [{ required: true, message: "法定经营范围不能为空" }],
        licencePhoto: [{ required: true, message: "营业执照电子版不能为空" }],
        legalName: [{ required: true, message: "法人姓名不能为空" }],
        legalId: [{ required: true, message: "法人证件号不能为空" }],
        settlementBankAccountName: [{ required: true, message: "银行开户名不能为空" }],
        settlementBankAccountNum: [{ required: true, message: "银行账号不能为空" }],
        settlementBankBranchName: [{ required: true, message: "银行支行名称不能为空" }],
        settlementBankJointName: [{ required: true, message: "支行联行号不能为空" }],

        salesConsigneeMobile: [
          {
            type: "string",
            pattern: /^1[3|4|5|6|7|8][0-9]{9}$/,
            message: "手机号格式出错",
            trigger: "blur",
          },
        ],
      },
      indeterminate: true, // 复选框全选样式
      checkAll: false, // 全选
      checkAllGroup: [], // 全选数组
      submitLoading: false, // 添加或编辑提交状态
      settlementCycle: [], // 结算周期
      shopForm: {
        // 店铺数据
        storeAddressPath:"",

        settlementCycle: "",
        selfOperated: "false",
        memberName: "",
        companyName: "",
        addressPath: "",
        addressIdPath: "",
        companyAddressPath: "",
        companyAddressIdPath: "",
        companyAddress: "",
        companyEmail: "",
        employeeNum: 1,
        registeredCapital: 1,
        linkName: "",
        linkPhone: "",
        licenseNum: "",
        scope: "",
        licencePhoto: "",
        legalName: "",
        legalId: "",
        legalPhoto: ["", ""],
        companyPhone: "",
        settlementBankAccountName: "",
        settlementBankAccountNum: "",
        settlementBankBranchName: "",
        settlementBankJointName: "",
        businesses: "",
        storeName: "",
        storeLogo: "",
        storeDesc: "",
        ddCode: "",
      },
      categories: [], // 分类

      infoResult: {}, // 店铺详情
      picIndex: "", // 存储身份证图片下标，方便赋值
      currentAddress:"", //当前选中的地址
    };
  },
  methods: {
    // 选择地址
    handleClickAddress(val){
      this.currentAddress = val;
      this.$refs.map.open();
    },
    // 选择会员的回调
    callbackMember(val) {
      if (val) {
        //选择会员后需要检验此会员是否开过店铺
        // 没有接口？
        getManagerStoreStoreGetDetailByStoreId(val.id).then((res) => {
          if (res.data.success) {
            if (res.data.result != null) {
              this.$message.error("当前会员已经拥有店铺");
            } else {
              this.shopForm.memberId = val.id;
              this.shopForm.memberName = val.username;
            }
            this.memberModalFlag = false;
          }
        });
      }
    },

    //选择会员
    selectMember() {
      // this.$refs["memberLayout"].selectedMember = true;
      this.memberModalFlag = true;
    },

    //修改地址
    regionClick() {
      this.showRegion = true;
      this.regionId = "";
    },
    //删除所选择的结算日
    removesettlementCycle(event, name) {
      this.settlementCycle = this.settlementCycle.filter((i) => i !== name);
    },
    //确认添加方法
    addsettlementCycle() {
      this.settlementShow = true;
      this.addSettlementConfirmBtn = true;
      this.addSettlementBtn = false;
    },
    //添加结算日
    addsettlementCycleConfirm() {
      if (!this.day) {
        this.$message.warning("请输入正确的结算周期，1-31的整数");
        return;
      }
      if (this.settlementCycle.includes(this.day)) {
        this.$message.warning("已有该结算周期，不能重复输入");
        return;
      }
      this.settlementCycle.push(this.day);
      this.addSettlementConfirmBtn = false;
      this.addSettlementBtn = true;
      this.settlementShow = false;
      this.day = 1;
    },
    // 选择公司地址
    selectedRegion(val) {
      this.$set(this.shopForm, "companyAddressIdPath", val[0].toString());
      this.$set(
        this.shopForm,
        "companyAddressPath",
        val[1].toString().replace(/\s/g, "")
      );
    },
    // 选择退货收件地址
    selectedConsigneeRegion(val) {
      this.$set(this.shopForm, "salesConsigneeAddressId", val[0].toString());
      this.$set(
        this.shopForm,
        "salesConsigneeAddressPath",
        val[1].toString().replace(/\s/g, "")
      );
    },
    // 选择图片modal
    handleCLickImg(val, index) {
      // this.$refs.ossManage.selectImage = true;
      this.picModalFlag = true;
      this.selectedFormBtnName = val;
      this.picIndex = index;
    },
    // 图片回显
    callbackSelected(val) {
      this.picModalFlag = false;
      if (this.picIndex === 0 || this.picIndex === 1) {
        this.shopForm[this.selectedFormBtnName][this.picIndex] = val.url;
      } else {
        this.shopForm[this.selectedFormBtnName] = val.url;
      }
      this.picIndex = "";
    },
    // 初始化数据
    init() {
      this.getCategories();
      if (this.shopId) {
        this.getShopDetail();
      }
    },
    next() {
      // 下一步
      let index = this.tabNameList.indexOf(this.tabName) + 1;
      this.tabName = this.tabNameList[index];
    },
    prev() {
      // 上一步
      let index = this.tabNameList.indexOf(this.tabName) - 1;
      this.tabName = this.tabNameList[index];
    },
    formValidate(prop, status, error) {},
    // 获取店铺详情
    getShopDetail() {
      getManagerStoreStoreGetDetailByStoreId({storeId: this.shopId}).then((res) => {
        if (res.data.success) {
          this.infoResult = res.data.result;
          this.shopForm = res.data.result;
          this.shopForm.selfOperated
            ? (this.shopForm.selfOperated = "true")
            : (this.shopForm.selfOperated = "false");

          this.checkAllGroup = this.shopForm.goodsManagementCategory.split(",");
          if (this.shopForm.settlementCycle) {
            this.settlementCycle = this.shopForm.settlementCycle.split(",");
          }
          this.shopForm.legalPhoto = this.shopForm.legalPhoto.split(",");

          this.address = this.shopForm.companyAddressIdPath;
          this.returnAddress = this.shopForm.salesConsigneeAddressId;
        }
      });
    },
    // 保存
    save() {
      this.$refs.shopForm.validate((valid) => {
        //校验结算日是否已经确认完成
        if (this.settlementShow) {
          this.$message.error("请确认当前所填结算日信息");
          return;
        }
        //校验经营类目
        if (this.checkAllGroup == "") {
          this.$message.error("请选择店铺经营类目");
          this.tabName = "cagetory";
          return;
        }
        if (valid) {
          const params = JSON.parse(JSON.stringify(this.shopForm));
          //处理经营类目，结算日
          params.goodsManagementCategory = this.checkAllGroup;
          params.settlementCycle = this.settlementCycle;
          if (this.shopId) {
            delete params.memberId;
            putManagerStoreStoreEditById({id: this.shopId}, this.$util.urlFormat(this.filterFun(params)), this.$util.headers()).then((res) => {
              if (res.data.success) {
                this.$message.success("编辑成功");
                this.$router.push({ name: "shopList" });
              }
            });
          } else {
            //添加店铺单独需要检验的参数
            if (params.memberName == "") {
              this.$message.error("请选择开店的会员");
              return;
            }
            postManagerStoreStoreAdd(this.$util.urlFormat(this.filterFun(params)), this.$util.headers()).then((res) => {
              if (res.data.success) {
                this.$message.success("添加成功");
                this.shopForm = {};
                this.$router.push({ name: "shopList" });
              }
            });
          }
        }
      });
    },
    // 筛选值为空的参数
    filterFun (params) {
      Object.entries(params).map(value => {
        if (!value[1] || value[1] === '' || value[1] === 'null') {
          delete params[value[0]];
        }
      });
      return params;
    },
    // 点击定位获取店铺地址
    getAddress(val) {
      if (val.type === 'select') {
        const paths = val.data.map(item => item.name).join(',')

        const ids = val.data.map(item => item.id).join(',')

        if(this.currentAddress === 'storeAddressPath'){
          this.$set(this.shopForm, "storeAddressPath", paths);
          this.$set(this.shopForm, "storeAddressIdPath", ids);

          this.shopForm.center = val.data[val.data.length - 1].center
        }else if(this.currentAddress === 'salesConsigneeAddressPath'){
          this.$set(this.shopForm, "salesConsigneeAddressPath", paths);
          this.$set(this.shopForm, "salesConsigneeAddressId", ids);
        }else if(this.currentAddress === 'companyAddressPath'){
          this.$set(this.shopForm, "companyAddressPath", paths);
          this.$set(this.shopForm, "companyAddressIdPath", ids);
        }


      }
      else{
        if(this.currentAddress === 'storeAddressPath'){
          this.shopForm.storeCenter = val.data.position.lng + "," + val.data.position.lat;
          this.$set(this.shopForm, "storeAddressPath", val.data.addr);
          this.$set(this.shopForm, "storeAddressIdPath", val.data.addrId);
        }else if(this.currentAddress === 'salesConsigneeAddressPath'){
          this.$set(this.shopForm, "salesConsigneeAddressPath", val.data.addr);
          this.$set(this.shopForm, "salesConsigneeAddressId", val.data.addrId);
        }else if(this.currentAddress === 'companyAddressPath'){
          this.$set(this.shopForm, "companyAddressPath", val.data.addr);
          this.$set(this.shopForm, "companyAddressIdPath", val.data.addrId);
        }
      }
    },
    // 全部选中
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        let checkAllDate = [];
        this.categories.forEach((i) => checkAllDate.push(i.id));
        this.checkAllGroup = checkAllDate;
      } else {
        this.checkAllGroup = [];
      }
    },
    // 经营类目的选择
    checkAllGroupChange(data) {
      if (data.length === this.categories.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    // 获取所有分类
    getCategories() {
      getManagerGoodsCategoryAllChildren().then((res) => {
        if (res.data.success) {
          this.categories = res.data.result;
        }
      });
    },
    auditHandler() {
      this.auditModel = true;
    },
    // 审核店铺
    audit(operation) {
      let id = this.$route.query.shopId;
      const params ={
        id,
        passed: 1
      }
      if (operation === "PASS") {
        params.passed = 0;
      }
      putManagerStoreStoreAuditByIdByPassed(params).then((res) => {
        if (res.data.success) {
          this.auditModel = false;
          this.$message.success("操作成功");
          this.$router.back();
        }
      });
    },
  },
  created() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
.selectedMember {
  width: 100%;
}

.mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(105, 105, 105, 0.1);
  z-index: 9;
}

::v-deep .ivu-tabs-bar {
  margin: 0;
}

.tab {
  padding: 16px;
  position: relative;
}

.categories-checkbox {
  display: flex;
  align-items: center;
}

.img {
  margin-right: 10px;
  width: 100px;
  height: 100px;
}

.item {
  width: 350px !important;
  display: flex;

  > * {
    margin: 0 4px;
  }
}
.legal-photo {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>
