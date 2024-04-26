<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
        <div>
          <i class="el-icon-search"></i>
          <span>筛选搜索</span>
          <el-button
            style="float: right"
            @click="handleSearch()"
            type="primary"
            size="small">
            查询结果
          </el-button>
        </div>
        <div style="margin-top: 15px">
          <el-form :inline="true" :model="searchForm" size="small" label-width="140px">
            <el-form-item label="输入搜索：">
              <el-input style="width: 203px" v-model="searchForm.goodsName" placeholder="品牌名称/关键字"></el-input>
            </el-form-item>
          </el-form>
        </div>
    </el-card>
    <div class="table-container">
      <el-table :data="data" style="width: 100%" v-loading="loading" border>
        <el-table-column label="商品名称" minWidth="180">
          <template slot-scope="scope">
            <span v-if="scope.row.goodsName" v-tooltip="scope.row.goodsName">{{scope.row.goodsName}}</span>
            <span v-else>-</span>
          </template>
        </el-table-column>
        <el-table-column label="商品图片" width="120" align="center">
          <template slot-scope="scope"><img style="height: 80px" :src="scope.row.original"></template>
        </el-table-column>
        <el-table-column label="商品编号" minWidth="100">
          <template slot-scope="scope">
            <span v-tooltip="scope.row.id">{{scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" minWidth="130">
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
        <el-table-column label="店铺名称" minWidth="100">
          <template slot-scope="scope">
            <span v-tooltip="scope.row.storeName">{{scope.row.storeName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" fixed="right" width="300">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="examine(scope.row, 1)">通过</el-button>
            <el-button type="danger" size="mini" @click="examine(scope.row, 2)">拒绝</el-button>
            <el-button size="mini" @click="showDetail(scope.row)">查看</el-button>
            <el-button size="mini" @click="handleUpdateProduct(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
<!--    <div class="batch-operate-container">
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
    </div>-->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="changePageSize"
        @current-change="changePage"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="searchForm.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="searchForm.pageNumber"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>

import router from "@/router";
import {
  putManagerGoodsGoodsByGoodsIdsAuth
} from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/putManagerGoodsGoodsByGoodsIdsAuth";
import {
  getManagerGoodsGoodsAuthList
} from "@/apis/controller/GuanLiDuan,ShangPinGuanLiJieKou/getManagerGoodsGoodsAuthList";

export default {
  name: "audit",
  components: {},
  data() {
    return {
      id: "", //要操作的id
      loading: true, // 表单加载状态
      searchForm: {
        // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "create_time", // 默认排序字段
        order: "desc", // 默认排序方式
      },
      goodsAuditForm: {
        // 商品编辑表单
        auth_flag: 1,
      },
      data: [], // 表单数据
      total: 0, // 表单数据总数
    };
  },
  methods: {
    init() {
      // 初始化数据
      this.getDataList();
    },
    changePage(v) {
      // 改变页码
      this.searchForm.pageNumber = v;
      this.getDataList();
    },
    changePageSize(v) {
      // 改变每页数量
      this.searchForm.pageSize = v;
      this.getDataList();
    },
    handleSearch() {
      // 搜索
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getDataList();
    },
    getDataList() {
      // 获取列表数据
      this.loading = true;
      // 带多条件搜索参数获取表单数据
      this.searchForm.authFlag = 0;
      getManagerGoodsGoodsAuthList({goodsSearchParams: this.searchForm}).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.data = res.data.result.records;
          this.total = res.data.result.total;
        }
      });
    },
    examine(v, authFlag) {
      // 审核商品
      let examine = "通过";
      this.goodsAuditForm.authFlag = "PASS";
      this.goodsAuditForm.goodsIds = v.id;
      if (authFlag != 1) {
        examine = "拒绝";
        this.goodsAuditForm.authFlag = "REFUSE";
      }
      this.$confirm("您确认要审核" + examine + " " + v.goodsName + " ?", '确认审核', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        putManagerGoodsGoodsByGoodsIdsAuth(this.goodsAuditForm).then((res) => {
          if (res.data.success) {
            this.$message.success("审核成功");
            this.getDataList();
          }
        });
      })
    },
    //查看商品详情
    showDetail(v) {
      let id = v.id;
      router.push({
        name: "goodsDetail",
        query: { id: id },
      })
    },
    handleUpdateProduct(index,row){
      this.$router.push({path:'/pms/updateProduct',query:{id: row.id}});
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


