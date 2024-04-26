<template>
  <div style="margin-left: 20%">
    <el-form label-width="120px">
        <div class="base-info-item">
          <h4>基本信息</h4>
          <div class="form-item-view">
            <el-form-item label="商品分类">
              <span v-for="(item, index) in goods.categoryName" :key="index">
                {{ item }}
                <i v-if="index !== goods.categoryName.length - 1">&gt;</i>
              </span>
            </el-form-item>
            <el-form-item label="商品名称">
              {{ goods.goodsName }}
            </el-form-item>
            <el-form-item label="商品参数">
              <div v-if="goods.goodsParamsDTOList && goods.goodsParamsDTOList.length" v-for="(item,index) in goods.goodsParamsDTOList" :key="index">
                <div style="margin-bottom: 10px;  align-items: center;" >
                  {{ item.groupName }} :
                  <div>
                    <el-tag v-for="(child,i) in item.goodsParamsItemDTOList" :key="i">
                    {{ child.paramName }} - {{ child.paramValue }}
                    </el-tag>
                  </div>
                </div>
              </div>
            </el-form-item>
          </div>
          <div class="form-item-view">
            <el-form-item label="箱规"> {{ goods.goodsUnit }}</el-form-item>
<!--            <el-form-item label="销售模式">
              {{ goods.salesModel === "RETAIL" ? "零售型" : "批发型" }}
            </el-form-item
            <el-form-item label="销售规则" v-if="goods.salesModel !== 'RETAIL'">
              <el-table :data="wholesaleData" style="width: 100%" border>
                <el-table-column label="销售规则" width="300">
                  <template slot-scope="scope">
                    <div>
                      当商品购买数量 ≥ {{ scope.row.num }} 时，售价为 ￥{{ scope.row.price }} /{{ this.goods.goodsUnit }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>>-->
          </div>
          <div class="form-item-view">
            <el-form-item label="商品编号"> {{ goods.id }}</el-form-item>
            <el-form-item label="商品图片">
              <div
                class="demo-upload-list"
                v-for="(item, __index) in goods.goodsGalleryList"
                :key="__index"
              >
                <img :src="item"  alt="" />
                <div class="demo-upload-list-cover">
                  <el-icon
                    type="ios-eye-outline"
                    @click.native="handleViewGoodsPicture(item)"
                  ></el-icon>
                </div>
                <el-dialog title="View Image" :visible.sync="goodsPictureVisible">
                  <img
                    :src="previewGoodsPicture"
                    v-if="goodsPictureVisible"
                    style="width: 100%"
                  />
                </el-dialog>
              </div>
            </el-form-item>
            <el-form-item label="上传商家"> {{ goods.storeName }}</el-form-item>

<!--            <el-form-item label="商品视频">
              <video
                v-if="goods.goodsVideo"
                controls
                class="player"
                :src="goods.goodsVideo"
              />
            </el-form-item>-->
          </div>
<!--          <h4>商品详情描述</h4>
          <div class="form-item-view">
            <el-form-item label="商品描述">
              <div v-html="goods.intro"></div>
            </el-form-item>
            <el-form-item label="移动端描述">
              <div v-html="goods.mobileIntro"></div>
            </el-form-item>
          </div>-->
        </div>
    </el-form>
  </div>
</template>
<script>
import {getManagerGoodsGoodsGetById} from "@/apis/controller";

export default {
  name: "goodsDetail",
  data() {
    return {
      goods: {}, // 商品信息
      previewGoodsPicture: "", // 预览图片
      goodsPictureVisible: false, // 预览图片模态框
      wholesaleData: [],
      skuColumn: [
        // 规格表头
        {
          title: "规格",
          key: "specs",
        },
        {
          title: "编号",
          key: "sn",
        },
        {
          title: "重量(kg)",
          key: "weight",
        },
      ],
      skuData: [], // sku数据
    };
  },
  mounted() {
    this.initGoods(this.$route.query.id);
  },
  methods: {
    // 初始化数据，获取商品详情
    initGoods(id) {
      getManagerGoodsGoodsGetById({id}).then((res) => {
        this.goods = res.data.result;
/*        let that = this;
        res.data.result.skuList.forEach(function (sku, index, array) {
          that.skuData.push({
            specs: sku.goodsName,
            sn: sku.sn,
            weight: sku.weight,
            cost: sku.cost,
            price:sku.price,
            image: sku.goodsGalleryList,
            quantity:sku.quantity
          });
        });*/
        if (res.data.result.salesModel === "WHOLESALE" && res.data.result.wholesaleList) {
          res.data.result.wholesaleList.forEach((item, index) => {
            this.skuColumn.push({
              title: "购买量 ≥ " + item.num,
              slot: "wholePrice" + index,
            });
          });
        } else {
          this.skuColumn.push(
            // {
            //   title: "成本",
            //   key: "cost",
            //   render: (h, params) => {
            //     console.log(params)
            //     return h("priceColorScheme", {props:{value:params.row.cost,color:this.$mainColor}} );
            //   },
            // },
            {
              title: "价格",
              key: "price",
              render: (h, params) => {
                return h("priceColorScheme", {props:{value:params.row.price,color:this.$mainColor}} );
              },
            },{
              title: "库存",
              key: "quantity",
            }
          );
        }
        this.skuColumn.push({
          title: "图片",
          slot: "showImage",
        });
        this.wholesaleData = res.data.result.wholesaleList;
      });
    },
    // 预览商品图片
    handleViewGoodsPicture(url) {
      this.previewGoodsPicture = url;
      this.goodsPictureVisible = true;
    },
  },
};
</script>

<style lang="scss" soped>
/*平铺*/
div.base-info-item {
  h4 {
    margin-bottom: 10px;
    padding: 0 10px;
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    font-weight: bold;
    color: #333;
    font-size: 14px;
    line-height: 40px;
    text-align: left;
    width: 80%;
  }

  .form-item-view {
    padding-left: 80px;
    .demo-upload-list {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      margin-right: 4px;
    }
  }
}

.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
.ivu-table table {
  width: 100% !important;
}
</style>
