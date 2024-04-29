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
            <el-input style="width: 203px" v-model="searchForm.username" placeholder="管理员名"></el-input>
          </el-form-item>
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="searchForm.mobile" placeholder="联系方式"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <div style="float: right; display: flex; gap: 20px;">
        <el-button size="mini" @click="delAll">批量删除</el-button>
        <el-button size="mini" @click="resetPass">重置密码</el-button>
        <el-button size="mini" @click="add" >添加</el-button>
      </div>
    </el-card>
      <el-table ref="table"
             :data="data"
             style="width: 100%"
             v-loading="loading"
             border>
        <el-table-column type="selection" width="60" align="center" fixed="left"></el-table-column>
        <el-table-column label="管理员名" min-width="120" sortable prop="username" fixed="left"></el-table-column>
        <el-table-column label="头像" width="80" align="center">
          <template slot-scope="scope">
            <el-avatar :src="scope.row.avatar"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column label="手机" width="125" prop="mobile"></el-table-column>
        <el-table-column label="邮箱" min-width="180" sortable prop="email"></el-table-column>
        <el-table-column label="状态" width="110" align="center" prop="status">
          <template slot-scope="scope">
            <div v-if="scope.row.status" style="display: inline-block">
              <el-badge status="success" text="启用"></el-badge>
            </div>
            <div v-else style="display: inline-block">
              <el-badge status="error" text="禁用"></el-badge>
            </div>
          </template>
          <template slot="header" slot-scope="scope">
            <el-select v-model="statusFilter" placeholder="请选择">
              <el-option label="启用" :value="true"></el-option>
              <el-option label="禁用" :value="false"></el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column label="创建时间" width="180" sortable prop="createTime"></el-table-column>
        <el-table-column label="操作" width="200" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="small"
              @click="edit(scope.row)">编辑
            </el-button>
            <el-button
              v-if="scope.row.status"
              size="small"
              type="default"
              @click="disable(scope.row)">禁用
            </el-button>
            <el-button
              v-else
              size="small"
              type="success"
              @click="enable(scope.row)">启用
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="remove(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

<!--      <div class="batch-operate-container">
          <el-select
            size="mini"
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
            size="mini">
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

    <el-dialog
      :title="modalTitle"
      v-model="userModalVisible"
      :mask-closable="false"
      width="500"
      :styles="{top: '30px'}"
    >
      <el-form ref="form" :model="form" label-width="70" :rules="formValidate">
        <el-form-item label="管理员名" prop="username">
          <el-input v-model="form.username" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="昵称" prop="username">
          <el-input v-model="form.nickName" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="modalType==0" :error="errorPass">
          <el-input type="password" password v-model="form.password" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"/>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="form.mobile"/>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <single-upload v-model="form.avatar" ></single-upload>
        </el-form-item>
<!--        <el-form-item label="所属部门">
          <department-tree-choose @on-change="handleSelectDepTree" ref="depTree"></department-tree-choose>
        </el-form-item>-->
        <el-form-item label="角色" prop="roles">
          <el-select v-model="form.roles" multiple>
            <el-option v-for="item in roleList" :value="item.id" :key="item.id" :label="item.name">

            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="text" @click="userModalVisible = false">取消</el-button>
        <el-button type="primary" :loading="submitLoading" @click="submitUser">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {validateMobile} from "@/utils/validate";
import SingleUpload from "@/components/Upload/singleUpload.vue";
import {getManagerPassportUser} from "@/apis/controller/GuanLiYuan/getManagerPassportUser";
import {getManagerPermissionRole} from "@/apis/controller/GuanLiDuan,JiaoSeGuanLiJieKou/getManagerPermissionRole";
import {putManagerPassportUserEditPassword} from "@/apis/controller/GuanLiYuan/putManagerPassportUserEditPassword";
import {
  postManagerPassportUserResetPasswordByIds
} from "@/apis/controller/GuanLiYuan/postManagerPassportUserResetPasswordByIds";
import {postManagerPassportUser} from "@/apis/controller/GuanLiYuan/postManagerPassportUser";
import {putManagerPassportUserAdminEdit} from "@/apis/controller/GuanLiYuan/putManagerPassportUserAdminEdit";
import {putManagerPassportUserEnableByUserId} from "@/apis/controller/GuanLiYuan/putManagerPassportUserEnableByUserId";
import {deleteManagerPassportUserByIds} from "@/apis/controller/GuanLiYuan/deleteManagerPassportUserByIds";

// import departmentChoose from "@/components/lili/department-choose";
// import departmentTreeChoose from "@/components/lili/department-tree-choose";

export default {
  name: "user-manage",
  components: {
    SingleUpload
  },
  data() {
    return {
      loading: true, // 加载状态
      selectCount: 0, // 已选数量
      selectList: [], // 已选数据列表
      searchForm: { // 请求参数
        username: "",
        departmentId: "",
        mobile: "",
        pageNumber: 1,
        pageSize: 10,
        sort: "createTime",
        order: "desc"
      },
      modalType: 0, // 新增编辑标识
      userModalVisible: false, // 管理员modal显隐
      modalTitle: "", // modal标题
      form: { // 表单
        username: "",
        mobile: "",
        email: "",
        sex: "",
        roles: [],
        departmentId: 0,
        departmentTitle: ""
      },
      roleList: [], // 角色列表
      errorPass: "", // 错误提示
      formValidate: { // 验证规则
        username: [
          {required: true, message: "管理员名不能为空", trigger: "blur"}
        ],
        password: [
          {required: true, message: "密码不能为空", trigger: "blur"}
        ],
        mobile: [
          {required: true, message: "手机号不能为空", trigger: "blur"},
          {validator: validateMobile, trigger: "blur"}
        ],
        email: [
          {required: true, message: "请输入邮箱地址"},
          {type: "email", message: "邮箱格式不正确"}
        ]
      },
      submitLoading: false, // 提交状态
      data: [], // 管理员数据
      total: 0, // 总数
    };
  },
  methods: {
    // 初始化数据
    init() {
      this.getUserList();
    },
    // 选择部门回调
    handleSelectDepTree(v) {
      if (v) {
        this.form.departmentId = v.departmentId;
        this.form.departmentTitle = v.departmentTitle;
      } else {
        this.form.departmentId = 0;
        this.form.departmentTitle = "";
      }
    },
    // 搜索项部门选择
    handleSelectDep(v) {
      this.searchForm.departmentId = v;
    },
    // 分页 修改页码
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getUserList();
      this.clearSelectAll();
    },
    // 分页 修改页数
    changePageSize(v) {
      this.searchForm.pageSize = v;
      this.searchForm.pageNumber = 1;
      this.getUserList();
    },
    getUserList() {
      // 多条件搜索管理员列表
      this.loading = true;
      const params = {
        user: this.searchForm,
        searchVo: this.searchForm,
        pageVo: this.searchForm,
      }
      getManagerPassportUser(params).then(res => {
        this.loading = false;
        if (res.data.success) {
          this.data = res.data.result.records;
          this.total = res.data.result.total;
        }
      });
    },
    // 搜索
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getUserList();
    },
    // 排序
    changeSort(e) {
      this.searchForm.sort = e.key;
      this.searchForm.order = e.order;
      if (e.order == "normal") {
        this.searchForm.order = "";
      }
      this.getUserList();
    },
    // 获取角色列表
    getRoleList() {
      let search = {
        pageSize: 100
      }
      const params = {
        role: search,
        pageVo: search,
      }
      getManagerPermissionRole(params).then(res => {
        if (res.data.success) {
          this.roleList = res.data.result.records;
        }
      });
    },
    // 重置密码
    resetPass() {
      if(this.selectCount==0) {this.$message.warning('请选中数据后重试!'); return}
      this.$confirm("您确认要重置所选的 " +
        this.selectCount +
        " 条管理员数据密码为【123456】?",'确认重置', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          let ids = "";
          this.selectList.forEach(function (e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          postManagerPassportUserResetPasswordByIds({ids}).then(res => {
            if (res.data.success) {
              this.$message.success("操作成功");
              this.clearSelectAll();
              this.getUserList();
            }
          });
        });
    },
    // 确认提交
    submitUser() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.modalType == 0) {
            // 添加管理员 避免编辑后传入id
            const params = JSON.parse(JSON.stringify(this.form))
            delete params.id;
            delete params.status;
            if (params.password == "" || params.password == undefined) {
              this.errorPass = "密码不能为空";
              return;
            }
            if (params.password.length < 6) {
              this.errorPass = "密码长度不得少于6位";
              return;
            }
            //todo
            params.password = this.md5(params.password)
            this.submitLoading = true;
            postManagerPassportUser({roles: params}).then(res => {
              this.submitLoading = false;
              if (res.data.success) {
                this.$message.success("操作成功");
                this.getUserList();
                this.userModalVisible = false;
              }
            });
          } else {
            // 编辑
            this.submitLoading = true;
            putManagerPassportUserAdminEdit({roles: this.form}).then(res => {
              this.submitLoading = false;
              if (res.data.success) {
                this.$message.success("操作成功");
                this.getUserList();
                this.userModalVisible = false;
              }
            });
          }
        }
      });
    },
    // 添加管理员
    add() {
      this.modalType = 0;
      this.modalTitle = "添加管理员";
      this.$refs.form.resetFields();
      this.form = { // 表单
        username: "",
        mobile: "",
        email: "",
        sex: "",
        roles: [],
        departmentId: 0,
        departmentTitle: ""
      },
      this.$refs.depTree.setData("", "");
      this.userModalVisible = true;
    },
    // 编辑管理员
    edit(v) {
      this.form = JSON.parse(JSON.stringify(v));
      this.modalType = 1;
      this.modalTitle = "编辑管理员";
      this.$refs.form.resetFields();
      // 转换null为""
      for (let attr in this.form) {
        if (this.form[attr] == null) {
          this.form[attr] = "";
        }
      }
      this.$refs.depTree.setData(this.form.departmentId, this.form.departmentTitle);
      let selectRolesId = [];
      if (this.form.roles) {
        this.form.roles.forEach(function (e) {
          selectRolesId.push(e.id);
        });
      }
      this.form.roles = selectRolesId;
      this.userModalVisible = true;
    },
    // 启用
    enable(v) {
      let params = {
        status: true
      }
      this.$confirm("您确认要启用管理员 " + v.username + " ?", '确认启用', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        putManagerPassportUserEnableByUserId({userId: v.id, ...params}).then(res => {
          if (res.data.success) {
            this.$message.success("操作成功");
            this.getUserList();
          }
        });
      });
    },
    // 禁用
    disable(v) {
      let params = {
        status: false
      }
      this.$confirm("您确认要禁用管理员 " + v.username + " ?", '确认禁用', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        putManagerPassportUserEnableByUserId({userId: v.id, ...params}).then(res => {
          if (res.data.success) {
            this.$message.success("操作成功");
            this.getUserList();
          }
        });
      });
    },
    // 删除管理员
    remove(v) {
      this.$confirm( "您确认要删除管理员 " + v.username + " ?", '确认删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteManagerPassportUserByIds({ids: v.id}).then(res => {
          if (res.data.success) {
            this.$message.success("删除成功");
            this.getUserList();
          }
        });
      });
    },
    // 选中状态
    showSelect(e) {
      this.exportData = e;
      this.selectList = e;
      this.selectCount = e.length;
    },
    // 清除选中状态
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    // 批量删除
    delAll() {
      if (this.selectCount <= 0) {
        this.$message.warning("您还未选择要删除的数据");
        return;
      }
      this.$confirm("您确认要删除所选的 " + this.selectCount + " 条数据?", '确认删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = "";
        this.selectList.forEach(function (e) {
          ids += e.id + ",";
        });
        ids = ids.substring(0, ids.length - 1);
        deleteManagerPassportUserByIds({ids}).then(res => {
          if (res.data.success) {
            this.$message.success("删除成功");
            this.clearSelectAll();
            this.getUserList();
          }
        });
      });
    }
  },
  mounted() {
    this.init();
    this.getRoleList();
  }
};
</script>
