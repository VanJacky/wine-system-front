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
            <el-input style="width: 203px" v-model="searchForm.memberName" placeholder="会员名称"></el-input>
          </el-form-item>
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="searchForm.storeName" placeholder="店铺名称"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <div class="table-container">
      <el-table :data="data" style="width: 100%">
        <el-table-column
          prop="storeName"
          label="店铺名称"
          min-width="120"
          align="left"
        ></el-table-column>
        <el-table-column
          prop="memberName"
          label="会员名称"
          min-width="120"
          align="left"
        ></el-table-column>
        <el-table-column
          label="店铺地址"
          width="300"
          sortable="false"
        >
          <template slot-scope="scope">
            <el-tag>{{ scope.row.storeAddressPath || '暂未填写' }}</el-tag>
          </template>
        </el-table-column>
<!--        <el-table-column
          label="是否自营"
          width="120"
          align="left"
        >
          <template slot-scope="scope">
            <el-tag :color="scope.row.selfOperated ? 'default' : 'success'">
              {{ scope.row.selfOperated ? '自营' : '非自营' }}
            </el-tag>
          </template>
        </el-table-column>-->

        <!-- 创建时间 -->
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="170"
          align="left"
          sortable="false"
        >
          <template slot-scope="scope">
            {{ scope.row.createTime || '暂无' }}
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column
          label="操作"
          width="170"
          align="center"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.storeDisable === 'APPLYING'"
              size="mini"
              style="margin-right: 5px;"
              @click="edit(scope.row)"
            >查看</el-button>
            <!-- 可以继续添加其他操作按钮或元素 -->
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
  import {getManagerStoreStore} from "@/apis/controller";

  export default {
    name: "shop",
    components: {SingleUpload},
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
        data: [], // 表单数据
        total: 0 // 表单数据总数
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
        this.getDataList();
      },
      // 起止时间从新赋值
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
        this.searchForm.storeDisable='APPLYING'
        getManagerStoreStore({entity: this.searchForm}).then((res) => {
          this.loading = false;
          if (res.data.success) {
            this.data = res.data.result.records;
            this.total = res.data.result.total;
          }
        });
        this.total = this.data.length;
        this.loading = false;
      },
      // 查看店铺
      edit(v) {
        this.$router.push({ path: '/seller/shopOperation', query: { shopId: v.id } });
      },

    },
    mounted() {
      this.init();
    },
  };
</script>
