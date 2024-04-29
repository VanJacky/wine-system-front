<template>
  <div style="margin-top: 50px">
    <el-form :model="value" :rules="rules" ref="productInfoForm" label-width="120px" class="form-inner-container" size="mini">
<!--      <el-form-item label="商品分类：" prop="productCategoryId">
        <el-cascader
          v-model="selectProductCateValue"
          :options="productCateOptions">
        </el-cascader>
      </el-form-item>-->
      <el-form-item label="商品名称：" prop="goodsName">
        <el-input v-model="value.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品种类：" prop="categoryId">
        <el-select
          v-model="value.categoryId"
          @change="handleCategoryChange"
          placeholder="请选择种类">
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="isSpirits" label="白酒香型：" prop="fragranceId">
        <el-select
          v-model="value.fragranceId"
          placeholder="请选择香型">
          <el-option
            v-for="item in fragranceList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品品牌：" prop="brandId">
        <el-select
          v-model="value.brandId"
          @change="handleBrandChange"
          placeholder="请选择品牌">
          <el-option
            v-for="item in brandList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产地：" prop="producerId">
        <el-select
          v-model="value.producerId"
          @change="handleBrandChange"
          placeholder="请选择产地">
          <el-option
            v-for="item in producerList"
            :key="item.id"
            :label="item.province+item.city"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片：">
        <single-upload v-model="value.original"></single-upload>
      </el-form-item>
      <el-form-item label="商品相册：">
        <multi-upload v-model="value.goodsGalleryFiles"></multi-upload>
      </el-form-item>
      <el-form-item label="箱规：" prop="goodsUnit">
        <el-input-number v-model="value.goodsUnit" :min="1" :max="100" label="瓶/箱"></el-input-number>
        <span style="margin-left: 20px">瓶/箱</span>
      </el-form-item>
      <el-form-item label="抽成：" prop="splitRatio">
        <el-input-number v-model="value.splitRatio" :min="0.1" :precision="2"  :step="0.1"  :max="100" label="百分比"></el-input-number>
        <span style="margin-left: 20px">百分比</span>
      </el-form-item>

      <el-collapse style="margin-bottom: 20px" v-model="activeNames">
        <el-collapse-item v-for="(item, index) in value.goodsParamsDTOList" :key="index" :title="item.groupName" name="1">
          <el-form-item v-if="item2" v-for="(item2, index2) in item.goodsParamsItemDTOList" :key="index2" :label="item2.paramName" prop="grade">
            <el-input v-model="item2.paramValue"></el-input>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
<!--      <el-form-item label="商品上架：">
        <el-switch
          v-model="value.marketEnable"
          active-value="UPPER"
          inactive-value="DOWN">
        </el-switch>
      </el-form-item>-->
      <el-form-item label="商品推荐：">
        <el-switch
          v-model="value.recommend"
          :active-value="true"
          :inactive-value="false">
        </el-switch>
      </el-form-item>
      <el-form-item label="商品介绍：">
        <el-input
          :autoSize="true"
          v-model="value.intro"
          type="textarea"
          placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handleNext('productInfoForm')">提交{{ isEdit ? '修改' : '新增'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {fetchListWithChildren} from '@/api/productCate'
  import {fetchList as fetchBrandList} from '@/api/brand'
  import {getProduct} from '@/api/product';
  import {
    getManagerGoodsCategoryGetBrandsListByCategoryId
  } from "@/apis/controller/GuanLiDuan,ShangPinFenLeiJieKou/getManagerGoodsCategoryGetBrandsListByCategoryId";
  import {
    getManagerGoodsCategoryAllChildren
  } from "@/apis/controller/GuanLiDuan,ShangPinFenLeiJieKou/getManagerGoodsCategoryAllChildren";
  import {
    postManagerGoodsGoodsUnit
  } from "@/apis/controller/GuanLiDuan,ShangPinJiLiangDanWeiJieKou/postManagerGoodsGoodsUnit";
  import {
    getManagerGoodsCategoryParametersByCategoryId
  } from "@/apis/controller/GuanLiDuan,FenLeiBangDingCanShuZuJieKou/getManagerGoodsCategoryParametersByCategoryId";
  import {getManagerGoodsProducingareaPage} from "@/apis/controller";
  import MultiUpload from "@/components/Upload/multiUpload.vue";
  import SingleUpload from "@/components/Upload/singleUpload.vue";

  export default {
    name: "ProductInfoDetail",
    components: {SingleUpload, MultiUpload},
    props: {
      value: Object,
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        hasEditCreated:false,
        // 折叠面板默认展开
        activeNames:'1',
        //选中商品分类的值
        selectProductCateValue: [],
        productCateOptions: [],
        categoryList: [],
        fragranceList: [],
        levelList: [{name: "优级", id: 1},{name: "一级", id: 2},{name: "二级", id: 3},{name: "其他", id: 4},],
        producerList: [],
        brandList: [],
        isSpirits: false,
        params: [],
        rules: {
          name: [
            {required: true, message: '请输入商品名称', trigger: 'blur'},
            {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
          ],
          subTitle: [{required: true, message: '请输入商品副标题', trigger: 'blur'}],
          productCategoryId: [{required: true, message: '请选择商品分类', trigger: 'blur'}],
          brandId: [{required: true, message: '请选择商品品牌', trigger: 'blur'}],
          description: [{required: true, message: '请输入商品介绍', trigger: 'blur'}],
          requiredProp: [{required: true, message: '该项为必填项', trigger: 'blur'}]
        },
        //商品的主图和画册图片
        selectProductPics:{
          get:function () {
            let pics=[];
            if(this.value.pic===undefined||this.value.pic==null||this.value.pic===''){
              return pics;
            }
            pics.push(this.value.pic);
            if(this.value.albumPics===undefined||this.value.albumPics==null||this.value.albumPics===''){
              return pics;
            }
            let albumPics = this.value.albumPics.split(',');
            for(let i=0;i<albumPics.length;i++){
              pics.push(albumPics[i]);
            }
            return pics;
          },
          set:function (newValue) {
            if (newValue == null || newValue.length === 0) {
              this.value.pic = null;
              this.value.albumPics = null;
            } else {
              this.value.pic = newValue[0];
              this.value.albumPics = '';
              if (newValue.length > 1) {
                for (let i = 1; i < newValue.length; i++) {
                  this.value.albumPics += newValue[i];
                  if (i !== newValue.length - 1) {
                    this.value.albumPics += ',';
                  }
                }
              }
            }
          }
        }
      };
    },
    created() {
      this.getProducerList();
      this.getCategoryList();
      if (this.value.categoryPath.split(',')[0]){
        this.getBrandList(this.value.categoryPath.split(',')[0])
        if (!this.value.goodsParamsDTOList.length) this.getParams(this.value.categoryPath.split(',')[0])
      }
    },
    computed:{
      //商品的编号
      productId(){
        return this.value.id;
      }
    },
    watch: {
      productId:function(newValue){
        if(!this.isEdit)return;
        if(this.hasEditCreated)return;
        if(newValue===undefined||newValue==null||newValue===0)return;
        this.handleEditCreated();
      },
      selectProductCateValue: function (newValue) {
        if (newValue != null && newValue.length === 2) {
          this.value.productCategoryId = newValue[1];
          this.value.productCategoryName= this.getCateNameById(this.value.productCategoryId);
        } else {
          this.value.productCategoryId = null;
          this.value.productCategoryName=null;
        }
      }
    },
    methods: {
      //处理编辑逻辑
      handleEditCreated(){
        if(this.value.productCategoryId!=null){
          this.selectProductCateValue.push(this.value.cateParentId);
          this.selectProductCateValue.push(this.value.productCategoryId);
        }
        this.hasEditCreated=true;
      },
      getParams(id){
        getManagerGoodsCategoryParametersByCategoryId({categoryId: id}).then((res)=>{
          this.params = res.data.result
          this.value.goodsParamsDTOList = this.params.map(item => {
            return {
              ...item,
              goodsParamsItemDTOList: item.params.map(item2 =>{
                return {
                  ...item2,
                  paramValue: item2.options
                }
              }),
            }
          })
        })
      },
      getProducerList() {
        getManagerGoodsProducingareaPage({page: { pageNumber: 1, pageSize: 100}}).then(response => {
          this.producerList = response.data.result.records
        });
      },
      getCategoryList() {
        getManagerGoodsCategoryAllChildren().then(response => {
          this.categoryList = response.data.result;
        });
      },
      getBrandList(id) {
        getManagerGoodsCategoryGetBrandsListByCategoryId({categoryId: id}).then(response => {
          this.brandList = response.data.result;
        });
      },
      getCateNameById(id){
        let name=null;
        for(let i=0;i<this.productCateOptions.length;i++){
          for(let j=0;j<this.productCateOptions[i].children.length;j++){
            if(this.productCateOptions[i].children[j].value===id){
              name=this.productCateOptions[i].children[j].label;
              return name;
            }
          }
        }
        return name;
      },
      handleNext(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('this.isEdit',this.isEdit)
            this.$emit('nextStep', this.isEdit);
          } else {
            this.$message({
              message: '验证失败',
              type: 'error',
              duration:1000
            });
            return false;
          }
        });
      },
      handleBrandChange(val) {
        let brandName = '';
        for (let i = 0; i < this.brandOptions.length; i++) {
          if (this.brandOptions[i].value === val) {
            brandName = this.brandOptions[i].label;
            break;
          }
        }
        this.value.brandName = brandName;
      },
      handleCategoryChange(val) {
        this.getBrandList(val)
        this.categoryList.map((item, index) =>{
          if (val === item.id){
            this.isSpirits = (item.name === '白酒');
            this.fragranceList = item.children || []
          }
        })
        this.value.categoryPath = this.value.categoryId + ',' + (this.isSpirits ? this.value.fragranceId : '');
        this.getParams(this.value.categoryId)
      }
    }
  }
</script>

<style scoped>

</style>
