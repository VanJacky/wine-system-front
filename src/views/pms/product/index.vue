<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float: right"
          @click="handleSearchList()"
          type="primary"
          size="small">
          查询结果
        </el-button>
        <el-button
          style="float: right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="goodsSearchParams" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="goodsSearchParams.goodsName" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品编号：">
            <el-input style="width: 203px" v-model="goodsSearchParams.id" placeholder="商品编号"></el-input>
          </el-form-item>
          <el-form-item label="商品种类：" prop="categoryId">
            <el-select
              v-model="goodsSearchParams.categoryId"
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
          <el-form-item label="上架状态：">
            <el-select v-model="goodsSearchParams.marketEnable" placeholder="全部" clearable>
              <el-option
                v-for="item in publishStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="推荐状态：">
            <el-select v-model="goodsSearchParams.recommend" placeholder="全部" clearable>
              <el-option
                v-for="item in recommendOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：">
            <el-select v-model="goodsSearchParams.authFlag" placeholder="全部" clearable>
              <el-option
                v-for="item in verifyStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        class="btn-add"
        @click="handleAddProduct()"
        size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="productTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="商品图片" width="120" align="center">
          <template slot-scope="scope"><img style="height: 80px" :src="scope.row.original"></template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template slot-scope="scope">
            <p>{{scope.row.goodsName}}</p>
          </template>
        </el-table-column>
        <el-table-column label="标签" width="140" align="center">
          <template slot-scope="scope">
            <p>上架：
              <el-switch
                @change="handlePublishStatusChange(scope.$index, scope.row)"
                active-value="UPPER"
                inactive-value="DOWN"
                v-model="scope.row.marketEnable">
              </el-switch>
            </p>
<!--            <p>推荐：
              <el-switch
                @change="handleRecommendStatusChange(scope.$index, scope.row)"
                :active-value="true"
                :inactive-value="false"
                v-model="scope.row.recommend">
              </el-switch>
            </p>-->
          </template>
        </el-table-column>
<!--        <el-table-column label="排序" width="100" align="center">-->
<!--          <template slot-scope="scope">{{scope.row.sort}}</template>-->
<!--        </el-table-column>-->
        <el-table-column label="是否推荐" width="100" align="center">
          <template slot-scope="scope">{{scope.row.recommend ? '是' : '否'}}</template>
        </el-table-column>
        <el-table-column label="商家名称" width="100" align="center">
          <template slot-scope="scope">{{scope.row.storeName}}</template>
        </el-table-column>
        <el-table-column label="审核状态" width="100" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.authFlag === 'TOBEAUDITED'">
              <el-tag type="warning">待审核</el-tag>
            </div>
            <div v-else-if="scope.row.authFlag === 'PASS'">
              <el-tag type="success">审核通过</el-tag>
            </div>
            <div v-else-if="scope.row.authFlag === 'REFUSE'">
              <el-tag type="danger">审核拒绝</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="箱规" width="100" align="center">
          <template slot-scope="scope">{{scope.row.goodsUnit}}</template>
        </el-table-column>
        <el-table-column label="生产信息" width="200" align="center">
          <template v-if="scope.row.params[0]" slot-scope="scope">
              <div v-if="scope.row.params[0]" v-for="(item,index) in scope.row.params[0].goodsParamsItemDTOList">
                {{ item.paramName + ':' + item.paramValue}}
              </div>
          </template>
        </el-table-column>
        <el-table-column label="度数容量" width="100" align="center">
          <template v-if="scope.row.params[1]" slot-scope="scope">
              <div v-if="scope.row.params[1]" v-for="(item,index) in scope.row.params[1].goodsParamsItemDTOList">
                {{ item.paramName + ':' + item.paramValue}}
              </div>
          </template>
        </el-table-column>
        <el-table-column label="箱规" width="100" align="center">
          <template slot-scope="scope">{{scope.row.goodsUnit}}</template>
        </el-table-column>
        <el-table-column label="箱规" width="100" align="center">
          <template slot-scope="scope">{{scope.row.goodsUnit}}</template>
        </el-table-column>
<!--        <el-table-column label="SKU库存" width="100" align="center">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button type="primary" icon="el-icon-edit" @click="handleShowSkuEditDialog(scope.$index, scope.row)" circle></el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column label="审核状态" width="100" align="center">
          <template slot-scope="scope">
            <p>{{scope.row.verifyStatus | verifyStatusFilter}}</p>
            <p>
              <el-button
                type="text"
                @click="handleShowVerifyDetail(scope.$index, scope.row)">审核详情
              </el-button>
            </p>
          </template>
        </el-table-column>-->
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <p>
<!--              <el-button-->
<!--                size="mini"-->
<!--                @click="handleShowProduct(scope.$index, scope.row)">查看-->
<!--              </el-button>-->
              <el-button
                size="mini"
                @click="showDetail(scope.row)">查看
              </el-button>
              <el-button
                size="mini"
                @click="handleUpdateProduct(scope.$index, scope.row)">编辑
              </el-button>
            </p>
<!--            <p>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </p>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="batch-operate-container">
      <el-select
        size="small"
        v-model="operateType" placeholder="批量操作">
        <el-option
          v-for="item in operates"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button
        style="margin-left: 20px"
        class="search-button"
        @click="handleBatchOperate()"
        type="primary"
        size="small">
        确定
      </el-button>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="goodsSearchParams.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="goodsSearchParams.pageNumber"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog
      title="编辑货品信息"
      :visible.sync="editSkuInfo.dialogVisible"
      width="40%">
      <span>商品货号：</span>
      <span>{{editSkuInfo.productSn}}</span>
      <el-input placeholder="按sku编号搜索" v-model="editSkuInfo.keyword" size="small" style="width: 50%;margin-left: 20px">
        <el-button slot="append" icon="el-icon-search" @click="handleSearchEditSku"></el-button>
      </el-input>
<!--      <el-table style="width: 100%;margin-top: 20px"
                :data="editSkuInfo.stockList"
                border>
        <el-table-column
          label="SKU编号"
          align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.skuCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item,index) in editSkuInfo.productAttr"
          :label="item.name"
          :key="item.id"
          align="center">
          <template slot-scope="scope">
            {{getProductSkuSp(scope.row,index)}}
          </template>
        </el-table-column>
        <el-table-column
          label="销售价格"
          width="80"
          align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="商品库存"
          width="80"
          align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.stock"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="库存预警值"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.lowStock"></el-input>
          </template>
        </el-table-column>
      </el-table>-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editSkuInfo.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditSkuConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {
    fetchList,
    updateDeleteStatus,
    updateNewStatus,
    updateRecommendStatus,
    updatePublishStatus
  } from '@/api/product'
  import {fetchList as fetchSkuStockList,update as updateSkuStockList} from '@/api/skuStock'
  import {fetchList as fetchProductAttrList} from '@/api/productAttr'
  import {fetchList as fetchBrandList} from '@/api/brand'
  import {fetchListWithChildren} from '@/api/productCate'
  import {getManagerGoodsGoodsList} from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/getManagerGoodsGoodsList";
  import {
    putManagerGoodsGoodsUpdateByGoodsId
  } from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/putManagerGoodsGoodsUpdateByGoodsId";
  import {getManagerGoodsCategoryAllChildren, putManagerGoodsGoodsByGoodsIdUp} from "@/apis/controller";
  import {
    putManagerGoodsGoodsByGoodsIdUnder
  } from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/putManagerGoodsGoodsByGoodsIdUnder";
  import router from "@/router";

  const defaultgoodsSearchParams = {
    keyword: null,
    pageNumber: 1,
    pageSize: 5,
    marketEnable: null,
    verifyStatus: null,
    productSn: null,
    categoryId: null,
    brandId: null
  };
  export default {
    name: "productList",
    data() {
      return {
        editSkuInfo:{
          dialogVisible:false,
          productId:null,
          productSn:'',
          productAttributeCategoryId:null,
          stockList:[],
          productAttr:[],
          keyword:null
        },
        operates: [
          {
            label: "商品上架",
            value: "UPPER"
          },
          {
            label: "商品下架",
            value: "DOWN"
          }
        ],
        operateType: null,
        // goodsSearchParams: {goodsSearchParams:Object.assign({}, defaultgoodsSearchParams)},
        list: null,
        total: null,
        listLoading: true,
        selectProductCateValue: null,
        multipleSelection: [],
        productCateOptions: [],
        brandOptions: [],
        categoryList: [],
        goodsSearchParams: {
          pageNumber: 1, // 当前页数
          pageSize: 5, // 页面大小
          sort: "create_time", // 默认排序字段
          order: "desc", // 默认排序方式
        },
        publishStatusOptions: [{
          value: 'UPPER',
          label: '上架'
        }, {
          value: 'DOWN',
          label: '下架'
        }],
        recommendOptions: [{
          value: true,
          label: '推荐'
        }, {
          value: false,
          label: '未推荐'
        }],
        verifyStatusOptions: [{
          value: 'PASS',
          label: '通过'
        }, {
          value: 'TOBEAUDITED',
          label: '待审核'
        }, {
          value: 'REFUSE',
          label: '审核拒绝'
        }]
      }
    },
    created() {
      this.getList();
      // this.getBrandList();
      this.getProductCateList();
      this.getCategoryList()
    },
    watch: {
      selectProductCateValue: function (newValue) {
        if (newValue != null && newValue.length == 2) {
          this.goodsSearchParams.productCategoryId = newValue[1];
        } else {
          this.goodsSearchParams.productCategoryId = null;
        }

      }
    },
    filters: {
      verifyStatusFilter(value) {
        if (value === 1) {
          return '审核通过';
        } else {
          return '未审核';
        }
      }
    },
    methods: {
      getProductSkuSp(row, index) {
        let spData = JSON.parse(row.spData);
        if(spData!=null&&index<spData.length){
          return spData[index].value;
        }else{
          return null;
        }
      },
      getList() {
        this.listLoading = true;
        getManagerGoodsGoodsList({goodsSearchParams: this.goodsSearchParams}).then(response => {
          this.listLoading = false;
          this.list = response.data.result.records;
          this.list.map(item=>{
            item.params = JSON.parse(item.params)
          })
          this.total = response.data.result.total;
        });
      },
      getBrandList() {
        fetchBrandList({pageNumber: 1, pageSize: 100}).then(response => {
          this.brandOptions = [];
          let brandList = response.data.list;
          for (let i = 0; i < brandList.length; i++) {
            this.brandOptions.push({label: brandList[i].name, value: brandList[i].id});
          }
        });
      },
      getProductCateList() {
        return
        fetchListWithChildren().then(response => {
          let list = response.data;
          this.productCateOptions = [];
          for (let i = 0; i < list.length; i++) {
            let children = [];
            if (list[i].children != null && list[i].children.length > 0) {
              for (let j = 0; j < list[i].children.length; j++) {
                children.push({label: list[i].children[j].name, value: list[i].children[j].id});
              }
            }
            this.productCateOptions.push({label: list[i].name, value: list[i].id, children: children});
          }
        });
      },
      getCategoryList() {
        getManagerGoodsCategoryAllChildren().then(response => {
          this.categoryList = response.data.result;
        });
      },
      handleShowSkuEditDialog(index,row){
        this.editSkuInfo.dialogVisible=true;
        this.editSkuInfo.productId=row.id;
        this.editSkuInfo.productSn=row.productSn;
        this.editSkuInfo.productAttributeCategoryId = row.productAttributeCategoryId;
        this.editSkuInfo.keyword=null;
        fetchSkuStockList(row.id,{keyword:this.editSkuInfo.keyword}).then(response=>{
          this.editSkuInfo.stockList=response.data;
        });
        if(row.productAttributeCategoryId!=null){
          fetchProductAttrList(row.productAttributeCategoryId,{type:0}).then(response=>{
            this.editSkuInfo.productAttr=response.data.list;
          });
        }
      },
      handleSearchEditSku(){
        fetchSkuStockList(this.editSkuInfo.productId,{keyword:this.editSkuInfo.keyword}).then(response=>{
          this.editSkuInfo.stockList=response.data;
        });
      },
      handleEditSkuConfirm(){
        if(this.editSkuInfo.stockList==null||this.editSkuInfo.stockList.length<=0){
          this.$message({
            message: '暂无sku信息',
            type: 'warning',
            duration: 1000
          });
          return
        }
        this.$confirm('是否要进行修改', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          updateSkuStockList(this.editSkuInfo.productId,this.editSkuInfo.stockList).then(response=>{
            this.$message({
              message: '修改成功',
              type: 'success',
              duration: 1000
            });
            this.editSkuInfo.dialogVisible=false;
          });
        });
      },
      handleSearchList() {
        this.goodsSearchParams.pageNumber = 1;
        this.getList();
      },
      handleAddProduct() {
        this.$router.push({path:'/pms/addProduct'});
      },
      handleBatchOperate() {
        if(this.operateType==null){
          this.$message({
            message: '请选择操作类型',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        if(this.multipleSelection==null||this.multipleSelection.length<1){
          this.$message({
            message: '请选择要操作的商品',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        this.$confirm('是否要进行该批量操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let ids = [];
          for (let i = 0; i < this.multipleSelection.length; i++) {
            ids.push(this.multipleSelection[i].id);
          }
          switch (this.operateType) {
            case this.operates[0].value:
              await this.updatePublishStatus('UPPER', ids);
              break;
            case this.operates[1].value:
              await this.updatePublishStatus('DOWN', ids);
              break;
            case this.operates[2].value:
              this.updateRecommendStatus(true, ids);
              break;
            case this.operates[3].value:
              this.updateRecommendStatus(false, ids);
              break;
            case this.operates[4].value:
              this.updateDeleteStatus(1, ids);
              break;
            default:
              break;
          }
          this.getList();
        });
      },
      handleSizeChange(val) {
        this.goodsSearchParams.pageNumber = 1;
        this.goodsSearchParams.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.goodsSearchParams.pageNumber = val;
        this.getList();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handlePublishStatusChange(index, row) {
        let ids = [];
        ids.push(row.id);
        this.updatePublishStatus(row.marketEnable, ids);
      },
      handleNewStatusChange(index, row) {
        let ids = [];
        ids.push(row.id);
        this.updateNewStatus(row.newStatus, ids);
      },
      handleRecommendStatusChange(index, row) {
        let ids = [];
        ids.push(row.id);
        this.updateRecommendStatus(row.recommend, ids);
      },
      handleResetSearch() {
        this.selectProductCateValue = [];
        this.goodsSearchParams = Object.assign({}, defaultgoodsSearchParams);
      },
      handleDelete(index, row){
        this.$confirm('是否要进行删除操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let ids = [];
          ids.push(row.id);
          this.updateDeleteStatus(1,ids);
        });
      },
      handleUpdateProduct(index,row){
        this.$router.push({path:'/pms/updateProduct',query:{id: row.id}});
      },
      handleShowProduct(index,row){
        console.log("handleShowProduct",row);
      },
      handleShowVerifyDetail(index,row){
        console.log("handleShowVerifyDetail",row);
      },
      handleShowLog(index,row){
        console.log("handleShowLog",row);
      },
      async updatePublishStatus(marketEnable, ids) {
        const params ={
          goodsId: ids
        }
        if (marketEnable === 'UPPER'){
          const params ={
            goodsId: ids
          }
          await putManagerGoodsGoodsByGoodsIdUp(params).then(response => {
            this.$message({
              message: '上架成功',
              type: 'success',
              duration: 1000
            });
          });
        }else if (marketEnable === 'DOWN'){
          for (const item of ids) {
            const params ={
              goodsId: item,
              reason: '管理员下架'
            }
            await putManagerGoodsGoodsByGoodsIdUnder(params).then(response => {
              this.$message({
                message: '下架成功',
                type: 'success',
                duration: 1000
              });
            });
          }
        }
      },
      updateNewStatus(newStatus, ids) {
        let params = new URLSearchParams();
        params.append('ids', ids);
        params.append('newStatus', newStatus);
        updateNewStatus(params).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      updateRecommendStatus(recommend, goodsId) {
        const params = {goodsId: goodsId[0]}
        const input = {goodsId: goodsId[0], recommend}
        putManagerGoodsGoodsUpdateByGoodsId(params, input).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      showDetail(v) {
        let id = v.id;
        router.push({
          name: "goodsDetail",
          query: { id: id },
        })
      },
      updateDeleteStatus(deleteStatus, ids) {

        updateDeleteStatus(params).then(response => {
          this.$message({
            message: '删除成功',
            type: 'success',
            duration: 1000
          });
        });
        this.getList();
      },
      handleCategoryChange(val) {
        this.goodsSearchParams.categoryPath = this.goodsSearchParams.categoryId+',' + '';
      }
    }
  }
</script>
<style></style>


