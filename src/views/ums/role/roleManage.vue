<template>
  <div class="search">
    <el-card>
      <el-card class="operate-container" shadow="never">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
        <div style="float: right; display: flex; gap: 20px;">
          <el-button size="mini" @click="delAll">批量删除</el-button>
          <el-button size="mini" @click="addRole">添加角色</el-button>
        </div>
      </el-card>
      <el-table ref="roleTable"
             :data="data"
             style="width: 100%"
                @selection-change="changeSelect"
             v-loading="loading"
             border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="角色名称" min-width="150" prop="name"></el-table-column>
        <el-table-column label="备注" min-width="150" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.description}}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="170" sortable prop="createTime"></el-table-column>
        <el-table-column label="更新时间" width="170" sortable prop="updateTime"></el-table-column>
        <el-table-column label="最后操作人" width="150" prop="createBy"></el-table-column>
        <el-table-column label="操作" width="300" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="editPerm(scope.row)">菜单权限
            </el-button>
            <el-button
              size="small"
              @click="edit(scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="remove(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="end" class="mt_10">
        <div class="pagination-container">
          <el-pagination
            background
            @size-change="changePageSize"
            @current-change="changePage"
            layout="total, sizes,prev, pager, next,jumper"
            :page-size="pageSize"
            :page-sizes="[5,10,15]"
            :current-page.sync="pageNumber"
            :total="total">
          </el-pagination>
        </div>
      </el-row>
    </el-card>

    <!-- 编辑 -->
    <el-dialog append-to-body :title="modalTitle" :visible.sync="roleModalVisible" :mask-closable="false" width="500">
      <el-form ref="roleForm" :model="roleForm" label-width="80" :rules="roleFormValidate">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="roleForm.name" />
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="roleForm.description" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="text" @click="roleModalVisible = false">取消</el-button>
        <el-button type="primary" :loading="submitLoading" @click="submitRole">提交
        </el-button>
      </div>
    </el-dialog>
    <!-- 菜单权限 -->
    <el-dialog :title="modalTitle" :visible.sync="permModalVisible" :mask-closable="false" width="500" :styles="{ top: '30px' }" class="permModal">
      <div style="position: relative">
        <el-tree ref="tree" :data="permData" show-checkbox :render-content="renderContent">
        </el-tree>
        <el-spinner size="large" fix v-if="treeLoading"></el-spinner>
      </div>
      <div slot="footer">
        <el-button type="text" @click="permModalVisible = false">取消</el-button>
<!--        <el-select v-model="openLevel" @change="changeOpen" style="width: 110px; text-align: left; margin-right: 10px">
          <el-option value="0">展开所有</el-option>
          <el-option value="1">收合所有</el-option>
          <el-option value="2">仅展开一级</el-option>
          <el-option value="3">仅展开两级</el-option>
        </el-select>-->
        <el-button type="primary" :loading="submitPermLoading" @click="submitPermEdit()">编辑
        </el-button>
      </div>
    </el-dialog>


    <!-- 保存权限弹出选择权限 -->
    <el-dialog  width="1000" :visible.sync="selectIsSuperModel" title="选择菜单权限" :loading="superModelLoading" >
      <div class="btns" style="margin-bottom: 20px">
        <el-button type="primary" @click="setRole()" class="btn-item">一键选中·数据权限</el-button>
        <el-button class="btn-item" @click="setRole('onlyView')">一键选中·查看权限</el-button>
      </div>
      <div class="role-list">
        <div class="role-item" v-for="(item, index) in saveRoleWay" :key="index">
          <div class="title">{{ item.title }}</div>
          <div class="content">
            <el-radio-group type="button" button-style="solid" v-model="item.isSuper">
              <el-radio-button :label="1">
                <span>操作数据权限</span>
              </el-radio-button>
              <el-radio-button :label="0">
                <span>查看权限</span>
              </el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-button type="text" @click="selectIsSuperModel = false">取消</el-button>
        <el-button type="primary" :loading="submitPermLoading" @click="saveRole()">确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import util from "@/utils/util.js";
import {getManagerPermissionRole} from "@/apis/controller/GuanLiDuan,JiaoSeGuanLiJieKou/getManagerPermissionRole";
import {getManagerPermissionMenu} from "@/apis/controller/GuanLiDuan,CaiDanGuanLiJieKou/getManagerPermissionMenu";
import {
  getManagerPermissionMenuTree
} from "@/apis/controller/GuanLiDuan,CaiDanGuanLiJieKou/getManagerPermissionMenuTree";
import {postManagerPermissionRole} from "@/apis/controller/GuanLiDuan,JiaoSeGuanLiJieKou/postManagerPermissionRole";
import {
  putManagerPermissionRoleByRoleId
} from "@/apis/controller/GuanLiDuan,JiaoSeGuanLiJieKou/putManagerPermissionRoleByRoleId";
import {
  deleteManagerPermissionRoleByIds
} from "@/apis/controller/GuanLiDuan,JiaoSeGuanLiJieKou/deleteManagerPermissionRoleByIds";
import {
  getManagerPermissionRoleMenuByRoleId
} from "@/apis/controller/GuanLiDuan,JiaoSeCaiDanJieKou/getManagerPermissionRoleMenuByRoleId";
import {
  putManagerPermissionMenuById
} from "@/apis/controller/GuanLiDuan,CaiDanGuanLiJieKou/putManagerPermissionMenuById";
export default {
  name: "role-manage",
  data() {
    return {
      superModelLoading: false, //保存权限弹出选择权限保存
      selectIsSuperModel: false, //保存权限弹出选择权限
      rolePermsWay: [], //查询角色权限集合
      openLevel: "0", // 展开的级别
      loading: true, // 加载状态
      treeLoading: true, // 树加载
      depTreeLoading: true, // 部门树加载
      submitPermLoading: false, // 权限提交加载
      submitDepLoading: false, // 部门提交加载
      sortColumn: "", // 排序
      sortType: "desc", // 排序类型
      modalType: 0, // 0 添加 1 编辑
      roleModalVisible: false, // 角色modal
      permModalVisible: false, // 菜单权限modal
      depModalVisible: false, // 部门modal
      modalTitle: "", // modal标题
      roleForm: {
        // 角色表单
        name: "",
        description: "",
      },
      roleFormValidate: {
        // 验证规则
        name: [
          { required: true, message: "角色名称不能为空", trigger: "blur" },
        ],
      },
      submitLoading: false, // 提交loading
      selectList: [], // 已选列表
      selectCount: 0, // 已选总数
      data: [], // 角色数据
      pageNumber: 1, // 页数
      pageSize: 10, // 每页数量
      total: 0, // 总数
      permData: [], // 菜单权限数据
      editRolePermId: "", // 编辑权限id
      selectAllFlag: false, // 全选标识
      depData: [], // 部门数据
      dataType: 0, // 数据类型
      editDepartments: [], // 编辑部门

      saveRoleWay: [], //用户保存用户点击的菜单
    };
  },
  methods: {
    // 初始化数据
    init() {
      this.getRoleList();
      // 获取所有菜单权限树
      this.getPermList();
    },
    renderContent(createElement, { root, node, data }) {
      let icon = "";
      if (data.level == 0) {
        icon = "ios-navigate";
      } else if (data.level == 1) {
        icon = "md-list-box";
      } else if (data.level == 2) {
        icon = "md-list";
      } else if (data.level == 3) {
        icon = "md-radio-button-on";
      } else {
        icon = "md-radio-button-off";
      }
      return createElement(
        "span",
        {
          style: {
            display: "inline-block",
            cursor: "pointer",
          },
        },
        [
          createElement("span", [
            createElement("el-icon", {
              props: {
                type: icon,
                size: "16",
              },
              style: {
                "marginRight": "8px",
                "marginBottom": "3px",
              },
            }),
            createElement("span", data.title),
            createElement(
              "el-tag",
              {
                props: {
                  type:
                    data.isSuper == 1
                      ? "danger"
                      : data.isSuper == 0
                        ? "info"
                        : "default",
                },
                size: "mini",
                style: {
                  'height': '20px',
                  'line-height': '20px',
                  "marginLeft": "10px",
                  display:
                    data.isSuper == 1 || data.isSuper == 0
                      ? "inline-block"
                      : "none",
                },
              },
              data.isSuper == 1
                ? "操作权限"
                : data.isSuper == 0
                  ? "查看权限"
                  : ""
            ),
          ]),
        ]
      );
    },

    // 分页 修改页码
    changePage(v) {
      this.pageNumber = v;
      this.getRoleList();
      this.clearSelectAll();
    },
    // 分页 修改页数
    changePageSize(v) {
      this.pageNumber = 1;
      this.pageSize = v;
      this.getRoleList();
    },
    // 变更排序方式
    changeSort(e) {
      this.sortColumn = e.key;
      this.sortType = e.order;
      if (e.order == "normal") {
        this.sortType = "";
      }
      this.getRoleList();
    },

    /**
     * 设置权限
     */
    setRole(val) {
      let enable;
      val == "onlyView" ? (enable = 0) : (enable = 1);
      this.saveRoleWay.map((item) => {
        item.isSuper = enable;
      });
    },

    /**
     * 查询所有角色
     */
    getRoleList() {
      this.loading = true;
      let search = {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: this.sortColumn,
        order: this.sort,
      };
      const params = {
        pageVo: search,
        role: search,
      }
      getManagerPermissionRole(params).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.data = res.data.result.records;
          this.total = res.data.result.total;
        }
      });
    },

    /**
     * 查询菜单
     */
    getPermList() {
      this.treeLoading = true;
      getManagerPermissionMenuTree().then((res) => {
        if (res.data.success) {
          this.deleteDisableNode(res.data.result);
          this.permData = res.data.result;
          this.treeLoading = false;
        }
        this.treeLoading = false;
      });
    },
    // 递归标记禁用节点
    deleteDisableNode(permData) {
      let that = this;
      permData.forEach(function (e) {
        if (e.status == -1) {
          e.title = "[已禁用] " + e.title;
          e.disabled = true;
        }
        if (e.children && e.children.length > 0) {
          that.deleteDisableNode(e.children);
        }
      });
    },
    // 提交
    submitRole() {
      this.$refs.roleForm.validate((valid) => {
        if (valid) {
          if (this.modalType == 0) {
            // 添加
            this.submitLoading = true;

            postManagerPermissionRole({role: this.roleForm}).then((res) => {
              this.submitLoading = false;
              if (res.data.success) {
                this.$message.success("操作成功");
                this.getRoleList();
                this.roleModalVisible = false;
              }
            });
          } else {
            this.submitLoading = true;
            this.roleForm.roleId = this.roleForm.id;

            putManagerPermissionRoleByRoleId({...this.roleForm, role: this.roleForm}).then((res) => {
              this.submitLoading = false;
              if (res.data.success) {
                this.$message.success("操作成功");
                this.getRoleList();
                this.roleModalVisible = false;
              }
            });
          }
        }
      });
    },

    /**
     * 点击添加按钮
     */
    addRole() {
      this.roleModalVisible = true;
      this.modalType = 0;
      this.modalTitle = "添加角色";
      this.$nextTick(()=>{
        this.roleForm ={
          name: '',
          description: ''
        }
        this.$refs.roleForm.resetFields();
      })
      delete this.roleForm.id;
    },
    // 编辑
    edit(v) {
      this.roleModalVisible = true;
      this.modalType = 1;
      this.modalTitle = "编辑角色";
        // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      let roleInfo = JSON.parse(str);
      this.roleForm = roleInfo;
    },
    // 删除
    remove(v) {
      this.$confirm("您确认要删除角色 " + v.name + " ?", '确认删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          deleteManagerPermissionRoleByIds({ids: v.id}).then((res) => {
            if (res.data.success) {
              this.$message.success("删除成功");
              this.getRoleList();
            }
          });
      });
    },
    // 清除选中
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    // 选中回调
    changeSelect(e) {
      this.selectList = e;
      this.selectCount = e.length;
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
          deleteManagerPermissionRoleByIds({ids}).then((res) => {
            if (res.data.success) {
              this.$message.success("删除成功");
              this.clearSelectAll();
              this.getRoleList();
            }
          });
      });
    },

    // 菜单权限
    async editPerm(v) {

      /**
       * 点击菜单权限每次将赋值的isSuper数据给清空掉
       */
      this.permData.map((item) => {
        item.children.length != 0
          ? item.children.map((child) => {
              child.children.length != 0
                ? child.children.map((kid) => {
                    delete kid.isSuper;
                  })
                : "";
              delete child.isSuper;
            })
          : "";
        delete item.isSuper;
      });

      if (this.treeLoading) {
        this.$message.warning("菜单权限数据加载中，请稍后点击查看");
        return;
      }
      this.editRolePermId = v.id;
      this.modalTitle = "分配 " + v.name + " 的菜单权限";
      // 匹配勾选
      let rolePerms;
      // 当前角色的菜单权限
      let res = await getManagerPermissionRoleMenuByRoleId({roleId:v.id});
      if (res.data.result) {
        rolePerms = res.data.result;
        this.rolePermsWay = res.data.result;
      }
      // 递归判断子节点是否可以选中
      this.checkPermTree(this.permData, rolePerms);
      this.permModalVisible = true;
    },
    // 递归判断子节点
    checkPermTree(permData, rolePerms) {
      let that = this;

      permData.forEach((p) => {
        if (that.hasPerm(p, rolePerms) && p.status != -1) {
          if (p.children && p.children.length === 0) {
            this.$set(p, "checked", true);
          }
        } else {
          this.$set(p, "checked", false);
        }
        if (p.children && p.children.length > 0) {
          that.checkPermTree(p.children, rolePerms);
        }
      });
    },
    // 判断角色拥有的权限节点勾选
    hasPerm(p, rolePerms) {
      if (!rolePerms) return false;
      let flag = false;
      for (let i = 0; i < rolePerms.length; i++) {
        if (p.id == rolePerms[i].menuId) {
          this.$set(p, "isSuper", rolePerms[i].isSuper);
          flag = true;
          break;
        }
      }
      if (flag) {
        return true;
      }
      return false;
    },
    // 递归全选节点
    selectedTreeAll(permData, select) {
      let that = this;
      permData.forEach(function (e) {
        e.checked = select;
        if (e.children && e.children.length > 0) {
          that.selectedTreeAll(e.children, select);
        }
      });
    },
    /**分配菜单权限 */
    submitPermEdit() {
      this.saveRoleWay = [];
      this.selectIsSuperModel = true; //打开选择权限
      let selectedNodes = this.$refs.tree.getCheckedNodes();
      let way = [];
      selectedNodes.forEach((e) => {
       console.log(e)
        let perm = {
          title: e.title,
          isSuper: e.isSuper ? e.isSuper = 1 : e.isSuper = 0 || 0,
          menuId: e.id,
          roleId: this.editRolePermId,
        };
        way.push(perm);
        this.$set(this,'saveRoleWay',way)

      });
      console.log(this.saveRoleWay)
    },

    /**保存权限 */
    saveRole() {
      this.superModelLoading = true;
      putManagerPermissionMenuById({id: this.editRolePermId, menu: this.saveRoleWay}).then((res) => {
        this.superModelLoading = false;
        if (res.data.success) {
          this.$message.success("操作成功");
          // 标记重新获取菜单数据
          this.$store.commit("setAdded", false);
          util.initRouter(this);
          this.getRoleList();
          this.selectIsSuperModel = false;
        }
      });
    },
    // 加载数据
    loadData(item, callback) {
      loadDepartment(item.id, { openDataFilter: false }).then((res) => {
        if (res.data.success) {
          res.data.result.forEach(function (e) {
            e.checked = false;
            if (e.isParent) {
              e.loading = false;
              e.children = [];
            }
            if (e.status == -1) {
              e.title = "[已禁用] " + e.title;
              e.disabled = true;
            }
          });
          callback(res.data.result);
        }
      });
    },
    // 判断展开子节点
    expandCheckDep(v) {
      this.checkDepTree(v.children, this.editDepartments);
    },
    // 判断子节点
    checkDepTree(depData, roleDepIds) {
      let that = this;
      depData.forEach(function (p) {
        if (that.hasDepPerm(p, roleDepIds)) {
          p.checked = true;
        } else {
          p.checked = false;
        }
      });
    },
    // 树结构展开层级
    changeOpen(v) {
      console.log(v)
      console.log(this.permData)
      if (v == "0") {
        this.permData.forEach((e) => {
          e.expand = true;
          if (e.children && e.children.length > 0) {
            e.children.forEach((c) => {
              c.expand = true;
              if (c.children && c.children.length > 0) {
                c.children.forEach(function (b) {
                  b.expand = true;
                });
              }
            });
          }
        });
      } else if (v == "1") {
        this.permData.forEach((e) => {
          e.expand = false;
          if (e.children && e.children.length > 0) {
            e.children.forEach((c) => {
              c.expand = false;
              if (c.children && c.children.length > 0) {
                c.children.forEach(function (b) {
                  b.expand = false;
                });
              }
            });
          }
        });
      } else if (v == "2") {
        this.permData.forEach((e) => {
          e.expand = true;
          if (e.children && e.children.length > 0) {
            e.children.forEach((c) => {
              c.expand = false;
              if (c.children && c.children.length > 0) {
                c.children.forEach(function (b) {
                  b.expand = false;
                });
              }
            });
          }
        });
      } else if (v == "3") {
        this.permData.forEach((e) => {
          e.expand = true;
          if (e.children && e.children.length > 0) {
            e.children.forEach((c) => {
              c.expand = true;
              if (c.children && c.children.length > 0) {
                c.children.forEach(function (b) {
                  b.expand = false;
                });
              }
            });
          }
        });
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
.role-list {
  height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}
.role-item {
  width: 50%;
  display: flex;
  padding: 20px 0;
  align-items: center;
  > .title {
    flex: 4;
    text-align: right;
  }
  > .content {
    flex: 10;
  }
}
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-item {
  margin-right: 20px;
}
.permModal {
  .ivu-modal-body {
    max-height: 560px;
    overflow: auto;
  }
}

.depModal {
  .ivu-modal-body {
    max-height: 500px;
    overflow: auto;
  }
}
.tips {
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}
.title {
  font-weight: bold;
  margin-right: 20px;
}
</style>
