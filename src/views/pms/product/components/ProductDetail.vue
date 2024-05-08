<template>
   
  <el-card class="form-container" shadow="never">
    <!--    <el-steps :active="active" finish-status="success" align-center>-->
    <!--      <el-step title="填写商品信息"></el-step>-->
    <!--      <el-step title="填写商品促销"></el-step>-->
    <!--      <el-step title="填写商品属性"></el-step>-->
    <!--      <el-step title="选择商品关联"></el-step>-->
    <!--    </el-steps>-->
    <h3 style="text-align: center">填写商品信息</h3>
    <product-info-detail
      v-show="showStatus[0]"
      v-model="productParam"
      :is-edit="isEdit"
      @nextStep="finishCommit"
    >
    </product-info-detail>
    <!--    <product-sale-detail
      v-show="showStatus[1]"
      v-model="productParam"
      :is-edit="isEdit"
      @nextStep="nextStep"
      @prevStep="prevStep">
    </product-sale-detail>
    <product-attr-detail
      v-show="showStatus[2]"
      v-model="productParam"
      :is-edit="isEdit"
      @nextStep="nextStep"
      @prevStep="prevStep">
    </product-attr-detail>
    <product-relation-detail
      v-show="showStatus[3]"
      v-model="productParam"
      :is-edit="isEdit"
      @prevStep="prevStep"
      @finishCommit="finishCommit">
    </product-relation-detail>-->
  </el-card>
</template>
<script>
import ProductInfoDetail from "./ProductInfoDetail";
import ProductSaleDetail from "./ProductSaleDetail";
import ProductAttrDetail from "./ProductAttrDetail";
import ProductRelationDetail from "./ProductRelationDetail";
import { createProduct, getProduct, updateProduct } from "@/api/product";
import { getManagerGoodsGoodsGetById } from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/getManagerGoodsGoodsGetById";
import { putManagerGoodsGoodsUpdateByGoodsId } from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/putManagerGoodsGoodsUpdateByGoodsId";
import { postManagerGoodsGoodsCreate } from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/postManagerGoodsGoodsCreate";

const defaultProductParam = {
  splitRatio: 0,
  salesModel: "RETAIL",
  goodsGalleryFiles: [],
  release: true,
  recommend: true,
  storeCategoryPath: "",
  brandId: "",
  goodsUnit: "",
  goodsType: "PHYSICAL_GOODS",
  categoryPath: "",
  sellingPoint: "",
  intro: "",
  mobileIntro: "",
  updateSku: true,
  regeneratorSkuFlag: false,
  templateId: "0",
  goodsParamsDTOList: [],
  categoryName: [],
  goodsVideo: "",
  id: "",
  createBy: "",
  createTime: "",
  updateBy: null,
  updateTime: null,
  deleteFlag: false,
  goodsName: "",
  price: 0,
  producerId: null,
  producerName: null,
  marketEnable: "UPPER",
  buyCount: 0,
  quantity: 0,
  grade: 0,
  thumbnail: "",
  small: "",
  original: "",
  commentNum: null,
  storeId: "",
  storeName: "",
  authFlag: "PASS",
  authMessage: null,
  underMessage: null,
  selfOperated: null,
  hasSkus: null,
  skuId: null,
  skuLists: null,
  params: "",
  goodsGalleryList: [],
  skuList: [
    {
      sku: "3",
      cost: 100,
      price: 100,
      quantity: 100,
      sn: "100",
      images: [],
      weight: 100,
      id: "1777442924431155202",
    },
  ],
  wholesaleList: null,
};
export default {
  name: "ProductDetail",
  components: {
    ProductInfoDetail,
    ProductSaleDetail,
    ProductAttrDetail,
    ProductRelationDetail,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: 0,
      productParam: Object.assign({}, defaultProductParam),
      showStatus: [true, false, false, false],
    };
  },
  created() {
    if (this.isEdit) {
      getManagerGoodsGoodsGetById({ id: this.$route.query.id }).then(
        (response) => {
          this.productParam = response.data.result;
          // console.log()
          this.productParam.skuList = [
            {
              sku: "100",
              cost: 100,
              price: 100,
              quantity: 100,
              sn: "1",
              images: [],
              weight: 100,
              id: "1777442924431155202",
            },
          ];
        }
      );
    } else {
      this.productParam.skuList = [
        {
          sku: "100",
          cost: 100,
          price: 100,
          quantity: 100,
          sn: "1",
          images: [],
          weight: 100,
          id: "1777442924431155202",
        },
      ];
    }
  },
  methods: {
    hideAll() {
      for (let i = 0; i < this.showStatus.length; i++) {
        this.showStatus[i] = false;
      }
    },
    prevStep() {
      if (this.active > 0 && this.active < this.showStatus.length) {
        this.active--;
        this.hideAll();
        this.showStatus[this.active] = true;
      }
    },
    nextStep() {
      if (this.active < this.showStatus.length - 1) {
        this.active++;
        this.hideAll();
        this.showStatus[this.active] = true;
      }
    },
    finishCommit(isEdit) {
      this.$confirm("是否要提交该产品", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        if (isEdit) {
          putManagerGoodsGoodsUpdateByGoodsId(
            { goodsId: this.$route.query.id },
            this.productParam
          ).then((response) => {
            this.$message({
              type: "success",
              message: "提交成功",
              duration: 1000,
            });
            this.$router.back();
          });
        } else {
          postManagerGoodsGoodsCreate(this.productParam).then((response) => {
            this.$message({
              type: "success",
              message: "提交成功",
              duration: 1000,
            });
            location.reload();
          });
        }
      });
    },
  },
};
</script>
<style>
.form-container {
  width: 960px;
}
.form-inner-container {
  width: 800px;
}
</style>
