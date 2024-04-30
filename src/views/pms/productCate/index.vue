<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button
        class="btn-add"
        @click="addChildren()"
        size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="productCateTable"
                style="width: 100%"
                :data="list"
                row-key="id"
                v-loading="listLoading"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                border>
        <el-table-column label="编号" sortable width="100" prop="date" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="分类名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
<!--        <el-table-column label="级别" width="100" align="center">-->
<!--          <template slot-scope="scope">{{scope.row.level | levelFilter}}</template>-->
<!--        </el-table-column>-->
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sortOrder }}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="100" align="center">
          <template slot-scope="scope">{{scope.row.createTime }}</template>
        </el-table-column>
<!--        <el-table-column label="设置" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              :disabled="scope.row.level | disableNextLevel"
              @click="handleShowNextLevel(scope.$index, scope.row)">查看下级
            </el-button>
            <el-button
              size="mini"
              @click="handleTransferProduct(scope.$index, scope.row)">转移商品
            </el-button>
          </template>
        </el-table-column>-->
        <el-table-column label="操作" width="320" align="center">
          <template slot-scope="scope">
<!--            <el-button-->
<!--              v-if="scope.row.level === 1"-->
<!--              type="primary"-->
<!--              size="mini"-->
<!--              @click="addChildren(scope.row)">添加子分类-->
<!--            </el-button>-->
            <el-button
              size="mini"
              @click="edit( scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="isEdit ? '修改分类' : '添加分类'"
      :visible.sync="dialogVisible" width="50%">
      <el-form :model="dialogItem"
               ref="form" label-width="150px">
        <el-form-item v-if="dialogItem.parentTitle" label="上级分类：">
          {{ dialogItem.parentTitle }}
        </el-form-item>
        <el-form-item label="分类名称：">
          <el-input v-model="dialogItem.name" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="排序值：">
          <el-input v-model="dialogItem.sortOrder" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="级别：">
          {{ dialogItem.level }}
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {fetchList,deleteProductCate,updateShowStatus,updateNavStatus} from '@/api/productCate'
  import {getManagerGoodsCategoryAllChildren} from "@/apis/controller";
  import {postManagerGoodsCategory} from "@/apis/controller/GuanLiDuan,ShangPinFenLeiJieKou/postManagerGoodsCategory";
  import {putManagerGoodsCategory} from "@/apis/controller/GuanLiDuan,ShangPinFenLeiJieKou/putManagerGoodsCategory";
  import {
    deleteManagerGoodsCategoryById
  } from "@/apis/controller/GuanLiDuan,ShangPinFenLeiJieKou/deleteManagerGoodsCategoryById";
  const defaultItem = {
    id: '',
    sortOrder: 0,
    name: '',
    level: 1,
    parentTitle : '',
    parentId : 0,
    commissionRate : 1
  };
  export default {
    name: "productCateList",
    data() {
      return {
        list: [],
        total: null,
        listLoading: true,
        listQuery: {
          pageNum: 1,
          pageSize: 5
        },
        isEdit: false,
        dialogVisible: false,
        dialogItem: Object.assign({},defaultItem),
        parentId: 0
      }
    },
    created() {
      // this.resetParentId();
      this.getList();
    },
    watch: {
      $route(route) {
        this.resetParentId();
        this.getList();
      }
    },
    methods: {
      handleConfirm(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.submitLoading = true;
            if (this.isEdit) {
              // 编辑
              putManagerGoodsCategory(this.$util.urlFormat(this.dialogItem), this.$util.headers()).then((res) => {
                if (res.data.success) {
                  this.$message.success("修改成功");
                  this.getList();
                  this.dialogVisible = false;
                  this.$refs.form.resetFields();
                }
              });
            } else {
              // 添加 避免编辑后传入id等数据 记得删除
              delete this.dialogItem.id;
              postManagerGoodsCategory(this.$util.urlFormat(this.dialogItem)).then((res) => {
                this.submitLoading = false;
                if (res.data.success) {
                  this.$message.success("添加成功");
                  this.getList();
                  this.dialogVisible = false;
                  this.$refs.form.resetFields();
                }
              });
            }
          }
        });
      },
      resetParentId(){
        this.listQuery.pageNum = 1;
        if (this.$route.query.parentId != null) {
          this.parentId = this.$route.query.parentId;
        } else {
          this.parentId = 0;
        }
      },
      handleAddProductCate() {
        this.$router.push('/pms/addProductCate');
      },
      getList() {
        this.listLoading = true;
        getManagerGoodsCategoryAllChildren().then(response => {
          this.listLoading = false;
          this.list = response.data.result
          this.total = response.data.total;
        });
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        this.getList();
      },
      handleNavStatusChange(index, row) {
        let data = new URLSearchParams();
        let ids=[];
        ids.push(row.id)
        data.append('ids',ids);
        data.append('navStatus',row.navStatus);
        updateNavStatus(data).then(response=>{
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      handleShowStatusChange(index, row) {
        let data = new URLSearchParams();
        let ids=[];
        ids.push(row.id)
        data.append('ids',ids);
        data.append('showStatus',row.showStatus);
        updateShowStatus(data).then(response=>{
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      handleShowNextLevel(index, row) {
        this.$router.push({path: '/pms/productCate', query: {parentId: row.id}})
      },
      handleTransferProduct(index, row) {
        console.log('handleAddProductCate');
      },
      addChildren(v) {
        this.isEdit = false;
        if (v){
          this.parentTitle = v.name;
          this.dialogItem.commissionRate = v.commissionRate;
          this.dialogItem.parentTitle = v.parentTitle;
          this.dialogItem.parentId = v.id;
          this.dialogItem.level = eval(v.level + "+1");
        }
        delete this.dialogItem.id;
        this.dialogVisible = true;
      },
      edit(v) {
        this.isEdit = true;
        this.dialogItem.id = v.id;
        this.dialogItem.name = v.name;
        this.dialogItem.level = v.level;
        this.dialogItem.parentId = v.parentId;
        this.dialogItem.parentTitle = v.parentTitle;
        this.dialogItem.sortOrder = v.sortOrder;
        this.dialogItem.deleteFlag = v.deleteFlag;
        this.dialogItem.image = v.image;
        this.dialogVisible = true;
      },
      handleDelete(index, row) {
        this.$confirm('是否要删除该种类', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteManagerGoodsCategoryById({ id:row.id }).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        });
      }
    },
    filters: {
      levelFilter(value) {
        if (value === 1) {
          return '一级';
        } else if (value === 2) {
          return '二级';
        }
      },
      disableNextLevel(value) {
        if (value === 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
