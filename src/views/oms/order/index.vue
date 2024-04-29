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
            <el-input style="width: 203px" v-model="searchForm.orderSn" placeholder="请输入订单号"></el-input>
          </el-form-item>
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="searchForm.buyerName" placeholder="会员名称"></el-input>
          </el-form-item>
          <el-form-item label="输入搜索：">
            <el-select
              v-model="searchForm.orderPromotionType"
              placeholder="请选择"
              clearable
              style="width: 160px"
            >
              <el-option label="普通订单" value="NORMAL">普通订单</el-option>
              <el-option label="保证金订单" value="GUARANTEES">保证金订单</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="下单时间">
            <el-date-picker
              v-model="selectDate"
              type="datetimerange"
              format="yyyy-MM-dd"
              clearable
              @on-change="selectDateRange"
              placeholder="选择起始时间"
              style="width: 160px"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <div>
          <download-excel
            class="export-excel-wrapper"
            :data="data"
            :fields="fields"
            :fetch="exportOrder"
            name="商品订单.xls"
          >
            <el-button type="primary" size="mini" class="export"> 导出订单 </el-button>
          </download-excel>
        </div>
        <div class="order-tab">
          <div v-for="(item,index) in orderStatus" :key="index" :class="{'current': currentStatus === item.value}" @click="orderStatusClick(item)">
            {{item.title}}
          </div>
        </div>
        <div class="table-container">
          <el-table :data="data" style="width: 100%">
            <el-table-column
              prop="sn"
              label="订单号"
              min-width="240"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="sn"
              label="订单号"
              min-width="240"
              show-overflow-tooltip
            ></el-table-column>
            <!-- 买家名称 -->
            <el-table-column
              prop="memberName"
              label="商家名称"
              min-width="130"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                {{ scope.row.storeName }}
              </template>
            </el-table-column>
            <el-table-column
              prop="flowPrice"
              label="订单金额"
              min-width="100"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <div style="color: red">{{ scope.row.flowPrice+'￥' }}</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="产生时间"
              width="170"
            >
              <template slot-scope="scope">
                {{ scope.row.createTime }}
              </template>
            </el-table-column>

            <el-table-column
              prop="orderStatus"
              label="订单状态"
              min-width="100"
            >
              <template slot-scope="scope">
                <el-tag
                  v-if="scope.row.orderStatus === 'UNPAID'"
                  type="danger"
                >未付款</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'PAID'"
                  type="warning"
                >已付款</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'UNDELIVERED'"
                  type="warning"
                >待发货</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'STAY_PICKED_UP'"
                >待自提</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'DELIVERED'"
                >已发货</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'COMPLETED'"
                  type="success"
                >已完成</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'TAKE'"
                  type="warning"
                >待核验</el-tag>
                <el-tag
                  v-else-if="scope.row.orderStatus === 'CANCELLED'"
                  type="info"
                >已关闭</el-tag>
                <div v-else>{{ scope.row.orderStatus }}</div>
              </template>
            </el-table-column>

            <el-table-column
              label="操作"
              width="100"
              align="center"
              fixed="right"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  style="margin-right: 5px;"
                  @click="detail(scope.row)"
                >查看</el-button>
                <!-- 可以继续添加其他操作按钮或元素 -->
              </template>
            </el-table-column>
            <!--            <el-table-column
                          prop="clientType"
                          label="订单来源"
                          width="120"
                        >
                          <template slot-scope="scope">
                            <div v-if="scope.row.clientType === 'H5'">移动端</div>
                            <div v-else-if="scope.row.clientType === 'PC'">PC端</div>
                            <div v-else-if="scope.row.clientType === 'WECHAT_MP'">小程序端</div>
                            <div v-else-if="scope.row.clientType === 'APP'">移动应用端</div>
                            <div v-else>{{ scope.row.clientType }}</div>
                          </template>
                        </el-table-column>
                        &lt;!&ndash; 订单类型 &ndash;&gt;
                        <el-table-column
                          prop="orderPromotionType"
                          label="订单类型"
                          width="120"
                        >
                          <template slot-scope="scope">
                            <el-tag v-if="scope.row.orderPromotionType === 'NORMAL'" color="blue">普通订单</el-tag>
                            <el-tag v-else-if="scope.row.orderPromotionType === 'PINTUAN'" color="volcano">拼团订单</el-tag>
                            <el-tag v-else-if="scope.row.orderPromotionType === 'GIFT'" color="green">赠品订单</el-tag>
                            <el-tag v-else-if="scope.row.orderPromotionType === 'POINTS'" color="geekblue">积分订单</el-tag>
                            <el-tag v-else-if="scope.row.orderPromotionType === 'KANJIA'" color="pink">砍价订单</el-tag>
                            <div v-else>{{ scope.row.orderPromotionType }}</div>
                          </template>
                        </el-table-column>-->
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
    </el-card>
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel";
import {getManagerOrderOrder} from "@/apis/controller/GuanLiDuan,DingDanAPI/getManagerOrderOrder";
import {
  getManagerOrderOrderQueryExportOrder
} from "@/apis/controller/GuanLiDuan,DingDanAPI/getManagerOrderOrderQueryExportOrder";

export default {
  name: "order",
  components: {
    "download-excel": JsonExcel,
  },
  data() {
    return {
      // 表格的表头以及内容
      fields: {
        '订单编号': "sn",
        '下单时间': "createTime",
        '客户名称': "memberName",
        '支付方式': {
          field: "clientType",
          callback: (value) => {
            if (value == "H5") {
              return "移动端";
            } else if (value == "PC") {
              return "PC端";
            } else if (value == "WECHAT_MP") {
              return "小程序端";
            } else if (value == "APP") {
              return "移动应用端";
            } else {
              return value;
            }
          },
        },
        '商品数量': "groupNum",
        '付款状态': {
          field: "payStatus",
          callback: (value) => {
            return value == "UNPAID"
              ? "未付款"
              : value == "PAID"
                ? "已付款"
                : "";
          },
        },
        '店铺': "storeName",
      },
      loading: true, // 表单加载状态
      searchForm: {
        // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
        startDate: "", // 起始时间
        endDate: "", // 终止时间
        orderType: "",
        orderSn: "",
        buyerName: "",
        orderStatus: "",
        orderPromotionType:""
      },
      selectDate: null,
      data: [], // 表单数据
      total: 0, // 表单数据总数
      orderStatus: [
        {title: '全部', value: ''},
        {title: '未付款', value: 'UNPAID'},
        {title: '已付款', value: 'PAID'},
        {title: '待发货', value: 'UNDELIVERED'},
        {title: '已发货', value: 'DELIVERED'},
        {title: '待核验', value: 'TAKE'},
        {title: '待自提', value: 'STAY_PICKED_UP'},
        {title: '已完成', value: 'COMPLETED'},
        {title: '已关闭', value: 'CANCELLED'},

      ],
      currentStatus: ''
    };
  },
  methods: {
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
      getManagerOrderOrder({orderSearchParams: this.searchForm}).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.data = res.data.result.records;
          this.total = res.data.result.total;
        }
      });
    },
    // 跳转详情页面
    detail(v) {
      let sn = v.sn;
      this.$router.push({
        path: "/oms/orderDetail",
        query: { sn: sn },
      })
    },
    // 导出订单
    async exportOrder() {
      const params = JSON.parse(JSON.stringify(this.searchForm));
      params.pageNumber = 1;
      params.pageSize = 10000;
      const result = await getManagerOrderOrder({orderSearchParams: params});
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
    // 订单筛选
    orderStatusClick(item) {
      this.currentStatus = item.value;
      this.searchForm.orderStatus = item.value;
      this.getDataList();
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
.export {
  margin: 10px 20px 10px 0;
}
.export-excel-wrapper {
  display: inline;
}
.order-tab {
  width: 950px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 0 10px;
  margin-bottom: 10px;
  div {
    text-align: center;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  .current {
    background-color: #ffffff;
  }
}
</style>
