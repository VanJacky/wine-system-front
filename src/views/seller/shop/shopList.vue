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
          size="mini">
          查询结果
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="searchForm" size="mini" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="searchForm.storeName" placeholder="店铺名称"></el-input>
          </el-form-item>
          <el-form-item label="店铺状态">
            <el-select v-model="searchForm.storeDisable" clearable style="width: 200px">
              <el-option value="OPEN">开启中</el-option>
              <el-option value="CLOSED">已关闭</el-option>
              <!-- <Option value="APPLY">申请中</Option> -->
              <el-option value="APPLYING">审核中</el-option>
              <el-option value="REFUSED">审核拒绝</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间" prop="createTime">
            <el-time-picker v-model="selectDate" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" clearable @on-change="selectDateRange" placeholder="选择起始时间" style="width: 200px"></el-time-picker>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <div style="float: right; display: flex; gap: 20px;">
        <download-excel
          class="export-excel-wrapper"
          :data="data"
          :fields="fields"
          :fetch="exportOrder"
          name="商家名单.xls"
        >
          <el-button type="primary" size="mini" class="export"> 导出商家 </el-button>
        </download-excel>
        <el-button
          class="btn-add"
          @click="add()"
          size="mini">
          添加
        </el-button>
      </div>
    </el-card>
    <div class="table-container">
      <el-table :data="data" style="width: 100%" v-loading="loading" border>
        <el-table-column label="店铺名称" minWidth="120" align="left">
          <template slot-scope="scope">
            <span >{{ scope.row.storeName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="会员名称" minWidth="130">
          <template slot-scope="scope">
            <span >{{ scope.row.memberName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="店铺地址" width="300">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.storeAddressPath || '暂未填写' }}</el-tag>
          </template>
        </el-table-column>
<!--        <el-table-column label="是否自营" align="left" width="120">
          <template slot-scope="scope">
            <el-tag :type="scope.row.selfOperated ? '' : 'warning'">{{ scope.row.selfOperated ? '自营' : '非自营' }}</el-tag>
          </template>
        </el-table-column>-->
        <el-table-column label="店铺状态" align="left" width="130">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.storeDisable === 'OPEN'" type="success">开启中</el-tag>
            <el-tag v-if="scope.row.storeDisable === 'APPLY'">申请中</el-tag>
            <el-tag v-if="scope.row.storeDisable === 'APPLYING'" type="warning">审核中</el-tag>
            <el-tag v-if="scope.row.storeDisable === 'CLOSED'" type="danger">已关闭</el-tag>
            <el-tag v-if="scope.row.storeDisable === 'REFUSED'" type="danger">审核拒绝</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="left" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="300" fixed="right">
          <template slot-scope="scope">
            <el-button v-if="selectedShop" size="mini" type="primary" @click="callback(scope.row)" style="margin-right: 5px;">选择</el-button>
            <el-button size="mini" @click="detail(scope.row)" style="margin-right: 5px;">查看</el-button>
            <el-button size="mini" ghost @click="edit(scope.row)" style="margin-right: 5px;">修改</el-button>
            <el-button v-if="scope.row.storeDisable === 'OPEN'" size="mini" type="danger" @click="disable(scope.row)" style="margin-right: 5px;">关闭</el-button>
            <el-button v-else-if="scope.row.storeDisable === 'CLOSED'" size="mini" type="success" @click="enable(scope.row)" style="margin-right: 5px;">开启</el-button>
            <el-button v-else-if="scope.row.storeDisable === 'APPLYING'" size="mini"  @click="audit(scope.row)" style="margin-right: 5px;">审核</el-button>
            <el-button v-else size="mini" type="primary" @click="edit(scope.row)" style="margin-right: 5px;">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
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

import SingleUpload from "@/components/Upload/singleUpload.vue";
import {getManagerStoreStore} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/getManagerStoreStore";
import {getManagerOrderOrder, putManagerStoreStoreEnableById} from "@/apis/controller";
import {
  putManagerStoreStoreDisableById
} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/putManagerStoreStoreDisableById";
import {
  putManagerStoreStoreAuditByIdByPassed
} from "@/apis/controller/GuanLiDuan,DianPuGuanLiJieKou/putManagerStoreStoreAuditByIdByPassed";
import JsonExcel from "vue-json-excel";

export default {
  name: "shop",
  components: {
    "download-excel": JsonExcel,
  SingleUpload},
  data() {
    return {
      loading: true, // 表单加载状态
      searchForm: {
        // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
        startDate: "", // 起始时间
        endDate: "", // 终止时间
      },
      selectDate: null, // 创建时间
      fields: {
        '商家编号': "id",
        '店铺名称': "storeName",
        '会员名称': "memberName",
        '店铺地址': "storeAddressPath",
        '创建时间': "createTime",
        '店铺状态': {
          field: "storeDisable",
          callback: (value) => {
            if (value == "OPEN") {
              return "开启中";
            } else if (value == "APPLY") {
              return "申请中";
            } else if (value == "APPLYING") {
              return "审核中";
            } else if (value == "CLOSED") {
              return "已关闭";
            } else if (value == "REFUSED") {
              return "审核拒绝";
            } else {
              return value;
            }
          },
        },
      },

      data: [], // 表单数据
      total: 0, // 表单数据总数
      selectedShop: false, //用于是否选择店铺
    };
  },

  methods: {
    // 回调给父级
    callback(val) {
      this.$emit("callback", val);
    },
    // 初始化数据
    init() {
      this.getDataList();
    },
    // 分页 改变页码
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getDataList();
    },
    // 分页 改变页数
    changePageSize(v) {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = v;
      this.getDataList();
    },
    // 搜索
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getDataList();
    },
    // 起止时间分别赋值
    selectDateRange(v) {
      if (v) {
        this.searchForm.startDate = v[0];
        this.searchForm.endDate = v[1];
      }
    },
    // 获取列表数据
    getDataList() {
      this.loading = true;
      // 带多条件搜索参数获取表单数据 请自行修改接口
      getManagerStoreStore({entity: this.searchForm}).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.data = res.data.result.records;
          this.total = res.data.result.total;
        }
      });
    },
    // 添加店铺
    add() {
      this.$router.push({ path: '/seller/shopOperation'});
    },
    // 修改店铺
    edit(v) {
      this.$router.push({ path: '/seller/shopOperation', query: { shopId: v.id } });
    },
    // 关闭店铺
    disable(v) {
      this.$confirm("您确认要关闭店铺 " + v.storeName + " ?", "确认关闭", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        putManagerStoreStoreDisableById({id: v.id}).then((res) => {
          if (res.data.success) {
            this.$message.success("操作成功");
            this.getDataList();
          }
        });
      })
    },
    //查看店铺详细
    detail(row){
      this.$router.push({ name: "shop-detail", query: { id: row.id } });
    },
    // 审核店铺
    audit(v) {
      this.$confirm("您确认要审核通过店铺 " + v.storeName + " ?", "审核店铺", {
        confirmButtonText: '通过',
        cancelButtonText: '驳回',
        type: 'warning'
      }).then(() => {
        putManagerStoreStoreAuditByIdByPassed({id: v.id, passed: 0}).then((res) => {
          if (res.data.success) {
            this.$message.success("操作成功");
            this.getDataList();
          }
        });
      })
    },
    // 启用店铺
    enable(v) {

      this.$confirm("您确认要开启店铺 " + v.storeName + " ?", "确认开启", {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        putManagerStoreStoreEnableById({id: v.id}).then((res) => {
          if (res.data.success) {
            this.$message.success("操作成功");
            this.getDataList();
          }
        });
      })
    },
    // 导出商家
    async exportOrder() {
      const params = JSON.parse(JSON.stringify(this.searchForm));
      params.pageNumber = 1;
      params.pageSize = 10000;
      const result = await getManagerStoreStore({entity: params});
      if (result.data.success) {
        if (result.data.result.records.length === 0) {
          this.$message.warning("暂无待发货订单");
          return [];
        } else {
          return result.data.result.records;
        }
      } else {
        this.$message.warning("导出订单失败，请重试");
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
