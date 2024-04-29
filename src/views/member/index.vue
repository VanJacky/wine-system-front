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
            <el-input style="width: 203px" v-model="searchForm.username" placeholder="用户名称"></el-input>
          </el-form-item>
           <el-form-item label="输入搜索：">
            <el-input style="width: 203px" v-model="searchForm.mobile" placeholder="用户联系方式"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        class="btn-add"
        @click="addMember()"
        size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table :data="data" style="width: 100%" v-loading="loading" border>
      <el-table-column label="用户名称">
        <template slot-scope="scope">
          <span v-tooltip="scope.row.username">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户昵称">
        <template slot-scope="scope">
          <span v-tooltip="scope.row.nickName">{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
        <el-table-column label="用户头像" width="160" align="center">
          <template slot-scope="scope">
            <img style="height:80px" :src="scope.row.face">
          </template>
        </el-table-column>
      <el-table-column label="联系方式" width="130">
        <template slot-scope="scope">
          <div>
            <span v-if="scope.row.mobile">{{ scope.row.mobile }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="注册时间" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
<!--      <el-table-column label="积分数量" align="left" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.point || '0' }}</span>
        </template>
      </el-table-column>-->
      <el-table-column label="操作" align="center" width="200" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" :type="scope.row.___selected ? 'primary' : 'default'" @click="callback(scope.row, scope.$index)" v-if="selectedMember" :style="`margin-right: 5px; display:  ${selectedMember ? '' : 'none'}`"> {{ scope.row.___selected ? '已选择' : '选择' }}</el-button>
<!--          <el-button size="mini"  @click="detail(scope.row)" :style="`margin-right: 5px; display:  ${selectedMember ? 'none' : ''}`">查看</el-button>-->
          <el-button size="mini"  ghost @click="editPerm(scope.row)" :style="`margin-right: 5px; display:  ${selectedMember ? 'none' : ''}`">编辑</el-button>
          <el-button size="mini" type="danger" @click="disabled(scope.row)" :style="`margin-right: 5px; display:  ${selectedMember ? 'none' : ''}`">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>

    </div>
    <!--    <div class="batch-operate-container">
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

    <el-dialog :visible.sync="addFlag" title="添加用户">
      <el-form ref="addMemberForm" :model="addMemberForm" :rules="addRule" label-width="100">
        <el-form-item label="手机号码" prop="mobile" style="width: 90%;">
          <el-input v-model="addMemberForm.mobile" maxlength="11" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="用户名称" prop="username" style="width: 90%">
          <el-input v-model="addMemberForm.username" maxlength="15" placeholder="请输入用户名称" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password" style="width: 90%">
          <el-input type="password" password v-model="addMemberForm.password" maxlength="20" placeholder="请输入用户密码" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addFlag = false">取消</el-button>
        <el-button type="primary" @click="addMemberSubmit">确定</el-button>
      </div>
    </el-dialog>
    <!-- 修改模态框 -->
    <el-dialog :visible.sync="descFlag" :title="descTitle" width="500">
      <el-form ref="form" :model="form" :rules="ruleValidate" label-width="80">

        <el-input v-model="form.id" v-show="false"/>

        <el-form-item label="头像">
          <single-upload v-model="form.face"></single-upload>
<!--          <img :src="form.face || defaultPic" class="face" />
          <el-button type="text" class="upload" @click="() => {
                this.picModelFlag = true;
              }">修改</el-button>-->
          <el-input type="file" style="display: none" id="file" />
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.username" style="width: 200px" disabled />
        </el-form-item>
        <el-form-item label="用户昵称" prop="name">
          <el-input v-model="form.nickName" style="width: 200px" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group type="button" button-style="solid" v-model="form.sex">
            <el-radio :label="1">
              <span>男</span>
            </el-radio>
            <el-radio :label="0">
              <span>女</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="修改密码" prop="password">
          <el-input type="password" style="width: 220px" password v-model="form.newPassword" />
        </el-form-item>
<!--        <el-form-item label="生日" prop="birthday">
          <el-date-picker type="date" format="yyyy-MM-dd" v-model="form.birthday" style="width: 220px"></el-date-picker>
        </el-form-item>-->
<!--        <el-form-item label="所在地" prop="mail">
          {{ form.region || '暂无地址' }}
          <el-button style="margin-left: 10px;" @click="$refs.map.open()">选择</el-button>
        </el-form-item>-->
      </el-form>
      <div slot="footer">
        <el-button @click="descFlag = false">取消</el-button>
        <el-button type="primary" @click="handleSubmitModal">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog width="1200px" v-model="picModelFlag">
    </el-dialog>
  </div>

</template>

<script>
import * as RegExp from "@/utils/RegExp.js";
import SingleUpload from "@/components/Upload/singleUpload.vue";
import {getManagerPassportMember} from "@/apis/controller/GuanLiDuan,HuiYuanJieKou/getManagerPassportMember";
import {postManagerPassportMember} from "@/apis/controller/GuanLiDuan,HuiYuanJieKou/postManagerPassportMember";
import {putManagerPassportMember} from "@/apis/controller/GuanLiDuan,HuiYuanJieKou/putManagerPassportMember";
import {
  putManagerPassportMemberUpdateMemberStatus
} from "@/apis/controller/GuanLiDuan,HuiYuanJieKou/putManagerPassportMemberUpdateMemberStatus";
import {getManagerPassportMemberById} from "@/apis/controller/GuanLiDuan,HuiYuanJieKou/getManagerPassportMemberById";
import md5 from "@/utils/md5";

export default {
  name: "member",
  components: {
    SingleUpload,
  },
  data() {
    return {
      defaultPic: "",
      descTitle: "", // modal标题
      descFlag: false, //编辑查看框
      loading: true, // 表单加载状态
      addFlag: false, // modal显隐控制

      addMemberForm: {
        // 添加用户表单
        mobile: "",
        username: "",
        password: "",
      },
      searchForm: {
        // 请求参数
        pageNumber: 1,
        pageSize: 10,
        order: "desc",
        username: "",
        mobile: "",
        disabled: "OPEN",
      },
      picModelFlag: false, // 选择图片
      form: {}, // 表单数据
      addRule: {
        // 验证规则
        mobile: [
          { required: true, message: "请输入手机号码" },
          {
            pattern: RegExp.mobile,
            message: "请输入正确的手机号",
          },
        ],
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }],
      },
      ruleValidate: {}, //修改验证

      data: [], // 表单数据
      total: 0, // 表单数据总数
      selectMember: [], //保存选中的用户
    };
  },
  props: {
    // 是否为选中模式
    selectedMember: {
      type: Boolean,
      default: false,
    },
    // 已选择用户数据
    selectedList: {
      type: null,
      default: () => {
        return [];
      },
    },
  },
  watch: {
    selectedList: {
      handler(val) {
        this.$set(this, "selectMember", JSON.parse(JSON.stringify(val)));
        this.init(this.data);
        // 将父级数据与当前组件数据进行匹配
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    // 回调给父级
    callback(val, index) {
      this.selectMember.forEach(item=>{item.___selected = false})
      this.$set(val, "___selected", !val.___selected);
      console.log(val.___selected);
      console.log(this.selectMember);
      let findUser = this.selectMember.find((item) => {
        return item.id == val.id;
      });
      // 如果没有则添加
      if (!findUser) {
        this.selectMember.push(val);
      } else {
        // 有重复数据就删除
        this.selectMember.map((item, index) => {
          if (item.id == findUser.id) {
            this.selectMember.splice(index, 1);
          }
        });
      }

      this.$emit("callback", val);
    },
    // 初始化信息
    init(data) {
      data.forEach((item) => {
        if (this.selectMember.length != 0) {
          this.selectMember.forEach((member) => {
            if (member.id == item.id) {
              this.$set(item, "___selected", true);
            }
          });
        } else {
          this.$set(item, "___selected", false);
        }
      });
      this.data = data;
    },
    // 分页 改变页码
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getData();
    },
    // 分页 改变页数
    changePageSize(v) {
      this.searchForm.pageSize = v;
      this.searchForm.pageNumber = 1;
      this.getData();
    },
    // 搜索
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getData();
    },
    //查看详情修改
    editPerm(val) {
      this.descTitle = `查看用户 ${val.username}`;
      this.descFlag = true;

      this.getMemberInfo(val.id);
    },
    addMember() {
      this.addFlag = true;
      this.$refs.addMemberForm.resetFields();
    },
    /**
     * 查询查看用户详情
     */
    getMemberInfo(id) {
      getManagerPassportMemberById({id}).then((res) => {
        if (res.data.result) {
          this.$set(this, "form", res.data.result);
        }
      });
    },

    //查询用户列表
    getData() {
      getManagerPassportMember({memberSearchVO: this.searchForm, page: this.searchForm}).then((res) => {
        if (res.data.result.records) {
          this.loading = false;
          this.init(res.data.result.records);
          this.total = res.data.result.total;
        }
      });
    },
    // 选中的图片
    callbackSelected(val) {
      this.picModelFlag = false;
      this.form.face = val.url;
    },
    //添加用户提交
    addMemberSubmit() {
      this.addMemberForm.password = md5.md5(this.addMemberForm.password);
      this.$refs.addMemberForm.validate((valid) => {
        if (valid) {
          postManagerPassportMember(this.$util.urlFormat(this.addMemberForm), this.$util.headers()).then((res) => {
            if (res.data.result) {
              this.$refs.addMemberForm.resetFields();
              this.getData();
              this.$message.success("添加成功！");
              this.addFlag = false;
            }
          });
        }
      });
    },

    // 选中的地址
    selectedRegion(val) {
      if(val.type === 'select'){
        const paths = val.data.map(item => item.name).join(',')
        const ids = val.data.map(item => item.id).join(',')

        this.$set(this.form,'region',paths)
        this.$set(this.form,'regionId',ids)

      }
      else{
        this.$set(this.form,'region',val.data.addr)
        this.$set(this.form,'regionId',val.data.addrId)
      }
    },
    //查看用户
    detail(row) {
      this.$router.push({ name: "memberDetail", query: { id: row.id } })
    },

    //禁用用户
    disabled(v) {
      let params = {
        memberIds: [v.id],
        disabled: false,
      };
      this.$confirm("确认禁用此用户？","提示", {
        confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        putManagerPassportMemberUpdateMemberStatus(params).then((res) => {
          if (res.data.success) {
            this.$message.success("禁用成功");
            this.getData();
          } else {
            // this.$message.error(res.data.message);
          }
        });
      })
    },

    // 提交修改数据
    handleSubmitModal() {
      // mobile不给改
      const { nickName, sex, username, face, newPassword,id,regionId,region } = this.form;
      let time = new Date(this.form.birthday);
      let birthday = this.form.birthday=== undefined?'':
        time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
      let submit = {
        regionId,
        region,
        nickName,
        username,
        sex,
        birthday,
        face,
        id
      };

      if (newPassword) {
        submit.password = md5.md5(newPassword);
      }
      putManagerPassportMember(this.$util.urlFormat(submit), this.$util.headers()).then((res) => {
        if (res.data.result) {
          this.$message.success("修改成功！");
          this.descFlag = false
          this.getData();
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
::v-deep .ivu-table-wrapper {
  width: 100%;
}
::v-deep .ivu-card {
  width: 100%;
}
.face {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
