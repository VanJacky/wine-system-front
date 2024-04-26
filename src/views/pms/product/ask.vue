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
              <el-input style="width: 203px" v-model="searchForm.memberId" placeholder="用户编号"></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-select v-model="searchForm.status" clearable style="width: 200px">
                <el-option value="OPEN">开启中</el-option>
                <el-option value="CLOSE">已关闭</el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="data"
                style="width: 100%"
                v-loading="loading"
                border>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="用户编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.memberId}}</template>
        </el-table-column>
        <el-table-column label="收货地址" align="center">
          <template slot-scope="scope">
            <el-tag>{{ (scope.row.consigneeAddressPath + scope.row.consigneeAddressIdPath) || '暂未填写' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="求购酒水" align="center">
          <template v-if="scope.row.purchaseOrderItems.length" slot-scope="scope">
            {{ scope.row.purchaseOrderItems[0].goodsName }}
          </template>
        </el-table-column>
        <el-table-column label="求购数量" align="center">
          <template v-if="scope.row.purchaseOrderItems.length" slot-scope="scope">
            {{ scope.row.purchaseOrderItems[0].num }}
          </template>
        </el-table-column>
        <el-table-column label="发布时间" width="100" align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
        <el-table-column label="截止时间" width="100" align="center">
          <template slot-scope="scope">{{scope.row.deadline}}</template>
        </el-table-column>
        <el-table-column label="报价记录" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.quotedVOList.length }}条记录
            <el-button
              size="mini"
              type="primary"
              @click="detail(scope.row)">查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              :type="scope.row.status === 'OPEN' ? 'danger' : 'primary'"
              @click="delBrand(scope.row)">{{ scope.row.status === 'OPEN' ? '禁用' : '开启' }}
            </el-button>
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
  <el-dialog :title="modalTitle" :visible.sync="modalVisible" :mask-closable="false" :width="500">
    <el-form ref="form" :model="form" :label-width="100" :rules="formValidate">
      <el-form-item label="品牌名称" prop="name">
        <el-input v-model="form.name" clearable style="width: 100%"/>
      </el-form-item>
      <el-form-item label="品牌图标" prop="logo">
        <single-upload v-model="form.logo" style="width: 100%"></single-upload>
<!--        <upload-pic-input v-model="form.logo" style="width: 100%"></upload-pic-input>-->
      </el-form-item>
      <el-form-item label="排序" prop="logo">
        <el-input v-model="form.sort" style="width: 250px"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="text" @click="modalVisible = false">取消</el-button>
      <el-button type="primary" :loading="submitLoading" @click="handleSubmit">提交</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import {fetchList, updateShowStatus, updateFactoryStatus, deleteBrand, updateBrand} from '@/api/brand'
  import {getManagerGoodsBrandGetByPage} from "@/apis/controller/GuanLiDuan,PinPaiJieKou/getManagerGoodsBrandGetByPage";
  import SingleUpload from "@/components/Upload/singleUpload.vue";
  import UploadPicInput from "@/components/Upload/upload-pic-input.vue";
import * as regular from "@/utils/regular";
import {postManagerGoodsBrand} from "@/apis/controller/GuanLiDuan,PinPaiJieKou/postManagerGoodsBrand";
import {putManagerGoodsBrandById} from "@/apis/controller/GuanLiDuan,PinPaiJieKou/putManagerGoodsBrandById";
import {
  deleteManagerGoodsBrandDelByIdsByIds
} from "@/apis/controller/GuanLiDuan,PinPaiJieKou/deleteManagerGoodsBrandDelByIdsByIds";
import {
  putManagerGoodsBrandDisableByBrandId
} from "@/apis/controller/GuanLiDuan,PinPaiJieKou/putManagerGoodsBrandDisableByBrandId";
import {getManagerPurchasePurchase} from "@/apis/controller/manager/purchase/getManagerPurchasePurchase";
import {getManagerGoodsCategoryAllChildren} from "@/apis/controller";
import {putManagerPurchasePurchaseById} from "@/apis/controller/manager/purchase/putManagerPurchasePurchaseById";

  export default {
    name: 'ask',
    components: {UploadPicInput, SingleUpload},
    data() {
      return {
        loading: true, // 表单加载状态
        modalType: 0, // 添加或编辑标识
        modalVisible: false, // 添加或编辑显示
        modalTitle: "", // 添加或编辑标题
        searchForm: {
          // 搜索框初始化对象
          name: '',
          pageNumber: 1, // 当前页数
          pageSize: 10, // 页面大小
          sort: "", // 默认排序字段
          order: "desc", // 默认排序方式
          memberId: '',
          categoryId: '',
          status: '',
        },
        form: {
          // 添加或编辑表单对象初始化数据
          name: "",
          logo: "",
          sort: 0,
          deleteFlag: "",
        },
        // 表单验证规则
        formValidate: {
        },
        submitLoading: false, // 添加或编辑提交状态
        data: [], // 表单数据
        categoryList: [],
        total: 0, // 表单数据总数
      };
    },
    methods: {
      // 禁用开启
      async delBrand(v) {
        let res = await putManagerPurchasePurchaseById({id: v.id});
        if (res.data.success) {
          this.$message.success("操作成功!");
          this.getDataList();
        }
      },
      // 初始化数据
      init() {
        this.getDataList();
      },
      getCategoryList() {
        getManagerGoodsCategoryAllChildren().then(res => {
          this.categoryList = res.data.result;
        });
      },
      // 分页 改变页码
      changePage(v) {
        this.searchForm.pageNumber = v;
        this.getDataList();
      },
      // 分页 改变页数
      changePageSize(v) {
        this.searchForm.pageSize = v;
        this.getDataList();
      },
      // 搜索
      handleSearch() {
        this.searchForm.pageNumber = 1;
        this.searchForm.pageSize = 10;
        this.getDataList();
      },
      // 获取数据
      getDataList() {
        this.loading = true;
        for (const searchFormKey in this.searchForm) {
          if (!this.searchForm[searchFormKey]) delete this.searchForm[searchFormKey];
        }
        getManagerPurchasePurchase({purchaseOrderSearchParams: this.searchForm}).then((res) => {
          this.loading = false;
          if (res.data.success) {
            this.data = res.data.result.records;
            this.total = res.data.result.total;
          }
        });
      },
      // 提交表单
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.submitLoading = true;
            if (this.modalType === 0) {
              // 添加 避免编辑后传入id等数据 记得删除
              delete this.form.id;
              postManagerGoodsBrand(this.$util.urlFormat(this.form),this.$util.headers()).then((res) => {
                this.submitLoading = false;
                if (res.data.success) {
                  this.$message.success("操作成功");
                  this.getDataList();
                  this.modalVisible = false;
                }
              });
            } else {
              // 编辑
              putManagerGoodsBrandById(this.form,this.$util.urlFormat(this.form),this.$util.headers()).then((res) => {
                this.submitLoading = false;
                if (res.data.success) {
                  this.$message.success("操作成功");
                  this.getDataList();
                  this.modalVisible = false;
                }
              });
            }
          }
        });
      },
      // 添加
      add() {
        this.modalType = 0;
        this.modalTitle = "添加";
        this.$refs.form.resetFields();
        delete this.form.id;
        this.modalVisible = true;
      },
      // 查看报价列表
      detail(v) {
        this.$router.push({ path: '/pms/answer', query: { id: v.id } });
      },
      // 刷新
      refresh() {
        this.loading = true;
        setTimeout(() => {
          this.getDataList();
          this.loading = false;
          this.$message.success("刷新成功");
        }, 500);
      },
      // 编辑
      edit(v) {
        this.modalType = 1;
        this.modalTitle = "编辑";
        // 转换null为""
        for (let attr in v) {
          if (v[attr] === null) {
            v[attr] = "";
          }
        }
        let str = JSON.stringify(v);
        let data = JSON.parse(str);
        this.form = data;
        this.modalVisible = true;
        this.$refs.form.resetFields();
      },
      // 启用品牌
      enable(v) {
        this.$confirm("您确认要启用品牌 " + v.name + " ?", '确认启用', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          putManagerGoodsBrandDisableByBrandId({brandId: v.id, disable: true}).then((res) => {
            if (res.data.success) {
              this.$message.success("操作成功");
              this.getDataList();
            }
          });
        })
      },
      // 禁用
      disable(v) {
        this.$confirm("您确认要禁用品牌 " + v.name + " ?", '确认禁用', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          putManagerGoodsBrandDisableByBrandId({brandId: v.id, disable: true}).then((res) => {
            if (res.data.success) {
              this.$message.success("操作成功");
              this.getDataList();
            }
          });
        })
      },
    },
    mounted() {
      this.init();
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


