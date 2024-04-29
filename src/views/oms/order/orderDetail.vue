<template>
  <div class="search">
    <div>
      <el-card style="height: 60px">
        <div style="">
          <el-button size="mini" v-if="allowOperation.editPrice" @click="modifyPrice">调整价格</el-button>
          <el-button size="mini" v-if="allowOperation.editConsignee" @click="editAddress" type="primary" ghost>修改收货地址</el-button>
          <el-button size="mini" v-if="allowOperation.cancel" @click="orderCancel" type="danger" ghost>订单取消</el-button>
          <el-button size="mini" v-if="orderInfo.order.orderStatus === 'UNPAID'" @click="confirmPrice" type="primary">收款</el-button>
          <el-button size="mini" @click="orderLog" ghost>订单日志</el-button>
          <el-button size="mini" @click="printOrder" type="primary" ghost style="float:right;"
                  v-if="$route.query.orderType != 'VIRTUAL'">打印发货单</el-button>
        </div>
      </el-card>
      <el-card style="font-size: 15px" class="mt_10 clearfix">
        <div style="width: 30%; float: left; margin-left: 20px">
          <div class="div-item">
            <div class="div-item-left">订单号：</div>
            <div class="div-item-right">{{ orderInfo.order.sn }}</div>
          </div>
          <div class="div-item">
            <div class="div-item-left">订单来源：</div>
            <div class="div-item-right">
              {{ orderInfo.order.clientType | clientTypeWay }}
            </div>
          </div>

          <div class="div-item">
            <div class="div-item-left">订单状态：</div>
            <div class="div-item-right">
              {{ orderInfo.orderStatusValue }}
            </div>
          </div>

          <div class="div-item">
            <div class="div-item-left">下单时间：</div>
            <div class="div-item-right">
              {{ orderInfo.order.createTime }}
            </div>
          </div>
        </div>
        <div style="width: 30%; float: left; margin-left: 20px">
          <div class="div-item" v-if="orderInfo.order.needReceipt == false">
            <div class="div-item-left">发票信息：</div>
            <div class="div-item-right">暂无发票信息</div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">发票抬头：</div>
            <div class="div-item-right">
              {{
                orderInfo.receipt && orderInfo.receipt.receiptTitle ? orderInfo.receipt.receiptTitle : "暂无"
              }}
            </div>
          </div>

          <div class="div-item"
               v-if="orderInfo.order.needReceipt == true && orderInfo.receipt && orderInfo.receipt.taxpayerId">
            <div class="div-item-left">发票税号：</div>
            <div class="div-item-right">
              {{ orderInfo.receipt && orderInfo.receipt.taxpayerId ? orderInfo.receipt.taxpayerId : "暂无" }}
            </div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">发票内容：</div>
            <div class="div-item-right">
              {{
                orderInfo.receipt && orderInfo.receipt.receiptContent
                  ? orderInfo.receipt.receiptContent
                  : "暂无"
              }}
            </div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">发票金额：</div>
            <div class="div-item-right">
              <div style="color: red" v-if="orderInfo.receipt && orderInfo.receipt.receiptPrice">{{ orderInfo.receipt.receiptPrice + '￥'}}</div>
              <span v-else>暂无</span>
            </div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">是否开票：</div>
            <div class="div-item-right">
              {{ orderInfo.receipt ? (orderInfo.receipt.receiptStatus == 0 ? "未开" : "已开") : "空" }}
            </div>
          </div>
        </div>
        <div style="width: 36%; float: left">
          <div class="div-item">
            <div class="div-item-left">收货信息：</div>
            <div class="div-item-right">
              {{ orderInfo.order.consigneeName }}
              {{ orderInfo.order.consigneeMobile }}
              {{ orderInfo.order.consigneeAddressPath }}
              {{ orderInfo.order.consigneeDetail }}
            </div>
          </div>
          <div class="div-item">
            <div class="div-item-left">支付方式：</div>
            <div class="div-item-right">
              {{ orderInfo.paymentMethodValue }}
            </div>
          </div>

          <div class="div-item">
            <div class="div-item-left">买家留言：</div>
            <div class="div-item-right">{{ orderInfo.order.remark }}</div>
          </div>

          <!-- <div class="div-item" v-if="orderInfo.order.needReceipt == false">
            <div class="div-item-left">发票信息：</div>
            <div class="div-item-right">暂无发票信息</div>
          </div> -->

          <!-- <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">发票抬头：</div>
            <div class="div-item-right">
              {{
                orderInfo.receipt && orderInfo.receipt.receiptTitle ? orderInfo.receipt.receiptTitle : "暂无"
              }}
            </div>
          </div>

          <div class="div-item"
            v-if="orderInfo.order.needReceipt == true && orderInfo.receipt && orderInfo.receipt.taxpayerId">
            <div class="div-item-left">发票税号：</div>
            <div class="div-item-right">
              {{ orderInfo.receipt && orderInfo.receipt.taxpayerId ? orderInfo.receipt.taxpayerId : "暂无" }}
            </div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">发票内容：</div>
            <div class="div-item-right">
              {{
                orderInfo.receipt && orderInfo.receipt.receiptContent
                ? orderInfo.receipt.receiptContent
                : "暂无"
              }}
            </div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">发票金额：</div>
            <div class="div-item-right">
              {{
                orderInfo.receipt && orderInfo.receipt.receiptPrice
                ? orderInfo.receipt.receiptPrice
                : "暂无" | unitPrice("￥")
              }}
            </div>
          </div>

          <div class="div-item" v-if="orderInfo.order.needReceipt == true">
            <div class="div-item-left">是否开票：</div>
            <div class="div-item-right">
              {{ orderInfo.receipt ? (orderInfo.receipt.receiptStatus == 0 ? "未开" : "已开") : "空" }}
            </div>
          </div> -->

          <div class="div-item" v-if="$route.query.orderType != 'VIRTUAL'">
            <div class="div-item-left">配送方式：</div>
            <div class="div-item-right">
              {{ orderInfo.deliveryMethodValue }}
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="mt_10">
        <el-table :loading="loading" border :data="data" ref="table" sortable="custom">
          <el-table-column
            label="商品"
            min-width="100"
          >
            <template slot-scope="{ row }">
              <div style="margin-top: 5px; height: 80px; display: flex">
                <div style="">
                  <img :src="row.image" style="height: 60px; margin-top: 1px; width: 60px" />
                </div>

                <div style="margin-left: 13px">
                  <div class="div-zoom">
                    <a @click="linkTo(row.goodsId, row.skuId)">{{ row.goodsName }}</a>
                  </div>
                  <span v-for="(item, key) in JSON.parse(row.specs)" :key="key">
                  <span v-show="key != 'images'" style="font-size: 12px; color: #999999">
                    {{ key }} : {{ item }}
                  </span>
                </span>
                  <el-popover trigger="hover" style="display: block" title="扫码在手机中查看" transfer>
                    <div slot="content">
<!--                      <vue-qr :text="wapLinkTo(row.goodsId, row.skuId)" :margin="0" colorDark="#000" colorLight="#fff"
                              :size="150"></vue-qr>-->
                    </div>
                    <img src="@/assets/images/qrcode.svg" class="hover-pointer" width="20" height="20" alt="" />
                  </el-popover>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="单价"
            min-width="100"
          >
            <template slot-scope="scope">
              <div style="color: red">{{ scope.row.unitPrice+'￥' }}</div>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            min-width="50"
          >
            <template slot-scope="scope">
              {{ scope.row.num}}
            </template>
          </el-table-column>
          <el-table-column
            label="退款数量"
            min-width="50"
          >
            <template slot-scope="scope">
              {{ scope.row.returnGoodsNumber}}
            </template>
          </el-table-column>
          <el-table-column
            label="小计"
            min-width="100"
          >
            <template slot-scope="scope">
              <div style="color: red">{{ scope.row.flowPrice+'￥' }}</div>
            </template>
          </el-table-column>
        </el-table>
        <div class="goods-total">
          <ul>
            <li>
              <span class="label">商品总额：</span>
              <span class="txt">{{
                  orderInfo.order.priceDetailDTO.goodsPrice | unitPrice("￥")
                }}</span>
            </li>
            <li v-if="
              orderInfo.order.priceDetailDTO.discountPrice &&
              orderInfo.order.priceDetailDTO.discountPrice > 0
            ">
              <span class="label">优惠金额：</span>
              <span class="txt">
                {{ orderInfo.order.priceDetailDTO.discountPrice | unitPrice("￥") }}
              </span>
            </li>

            <li v-if="
              orderInfo.order.priceDetailDTO.couponPrice &&
              orderInfo.order.priceDetailDTO.couponPrice > 0
            ">
              <span class="label">优惠券金额：</span>
              <span class="txt">
                <div style="color: red" >{{ orderInfo.order.priceDetailDTO.couponPrice + '￥'}}</div>
              </span>
            </li>
            <li
              v-if="orderInfo.order.priceDetailDTO.discountPriceDetail != undefined && orderInfo.order.priceDetailDTO.discountPriceDetail && orderInfo.order.priceDetailDTO.discountPriceDetail != null && orderInfo.order.priceDetailDTO.discountPriceDetail != ''">
              <div class="label">
                <el-popover trigger="hover" placement="left" width="200">
                  <el-icon v-if="typeList.length > 0" type="ios-alert-outline" size="17" @click="getOrderPrice"
                        color="#cc0000" />
                  <template #content>
                    <div class="api" style="text-align:left;">
                      <table>
                        <thead>
                        <tr>
                          <th>优惠详情：</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in typeList" :key="index">
                          <td>{{ item.promotionName }}：</td>
                          <td>¥{{ item.discountPrice }}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </template>
                </el-popover>
                <span>优惠详情：</span>
              </div>
            </li>

            <li>
              <span class="label">运费：</span>
              <span class="txt">{{
                  orderInfo.order.freightPrice | unitPrice("￥")
                }}</span>
            </li>
            <li v-if="orderInfo.order.priceDetailDTO.updatePrice">
              <span class="label">修改金额：</span>
              <span class="txt theme_color">¥{{ orderInfo.order.priceDetailDTO.updatePrice | unitPrice }}</span>
            </li>
            <li v-if="orderInfo.order.priceDetailDTO.payPoint != 0">
              <span class="label">使用积分：</span>
              <span class="txt flowPrice">{{
                  orderInfo.order.priceDetailDTO.payPoint
                }}</span>
            </li>
            <li>
              <span class="label">应付金额：</span>
              <span class="txt flowPrice">¥{{ orderInfo.order.priceDetailDTO.flowPrice | unitPrice }}</span>
            </li>
          </ul>
        </div>
      </el-card>
    </div>

    <el-dialog :visible.sync="modal" width="530">
      <p slot="header">
        <el-icon type="edit"></el-icon>
        <span>修改金额</span>
      </p>
      <div>
        <el-form ref="modifyPriceForm" :model="modifyPriceForm" label-position="left" label-width="70"
              :rules="modifyPriceValidate" @submit.native.prevent>
          <el-form-item label="订单金额" prop="price">
            <el-input-number style="width: 100px" v-model="modifyPriceForm.price" :min="0" :max="999999"></el-input-number>
            <span class="ml_10">元</span>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" style="text-align: right">
        <el-button @click="modal = false">关闭</el-button>
        <el-button type="primary" @click="modifyPriceSubmit">调整</el-button>
      </div>
    </el-dialog>
    <!-- 订单取消模态框 -->
    <el-dialog :visible.sync="orderCancelModal" width="530">
      <p slot="header">
        <el-icon type="edit"></el-icon>
        <span>订单取消</span>
      </p>
      <div>
        <el-form ref="orderCancelForm" :model="orderCancelForm" label-position="left" label-width="100"
              :rules="orderCancelValidate">
          <el-form-item label="取消原因" prop="reason">
            <el-input v-model="orderCancelForm.reason" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }"
                   placeholder="请输入取消原因"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" style="text-align: right">
        <el-button @click="orderCancelModal = false">关闭</el-button>
        <el-button type="primary" @click="orderCancelSubmit">确认</el-button>
      </div>
    </el-dialog>
    <!--收件地址弹出框-->
    <el-dialog :visible.sync="addressModal" width="530">
      <p slot="header">
        <el-icon type="edit"></el-icon>
        <span>修改收件信息</span>
      </p>
      <div>
        <el-form ref="addressForm" :model="addressForm" label-position="left" label-width="100" :rules="addressRule">
          <el-form-item label="收件人" prop="consigneeName">
            <el-input v-model="addressForm.consigneeName" size="large" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="consigneeMobile">
            <el-input v-model="addressForm.consigneeMobile" size="large" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="地址信息" prop="consigneeAddressPath">
            {{ addr }}
            <el-button @click="$refs.map.open()">选择</el-button>
          </el-form-item>
          <el-form-item label="详细地址" prop="consigneeDetail">
            <el-input v-model="addressForm.consigneeDetail" size="large" ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" style="text-align: right">
        <el-button @click="addressModal = false">关闭</el-button>
        <el-button type="primary" @click="editAddressSubmit">修改</el-button>
      </div>
    </el-dialog>
    <!-- 订单日志 -->
    <el-dialog :visible.sync="orderLogModal" width="60">
      <p slot="header">
        <span>订单日志</span>
      </p>
      <div class="order-log-div">
        <el-table :loading="loading" border :data="orderInfo.orderLogs" ref="table">

          <el-table-column label="操作者" min-width="100">
            <template slot-scope="scope">
              {{ scope.row.operatorName}}
            </template>
          </el-table-column>
          <el-table-column label="操作类型" min-width="100">
            <template slot-scope="scope">
              {{ scope.row.operatorType}}
            </template>
          </el-table-column>
          <el-table-column label="时间" min-width="100">
            <template slot-scope="scope">
              {{ scope.row.createTime}}
            </template>
          </el-table-column>
          <el-table-column label="日志" min-width="200">
            <template slot-scope="scope">
              {{ scope.row.message}}
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div slot="footer" style="text-align: right">
        <el-button @click="handelCancel">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="printModal" width="530" @on-cancel="printCancel">
      <p slot="header" style="line-height:26px;height:26px;">
        <span style="float: left;">打印发货单</span>
        <el-button size="mini" style="margin-right:35px;float: right;padding-bottom: 2px;"
                @click="printHiddenInfo"><template v-if="printHiddenFlag">显示</template><template
          v-else>隐藏</template>敏感信息</el-button>
      </p>
      <div style="max-height:500px;overflow-y:auto;overflow-x:hidden;">
        <div id="printInfo">
          <el-row v-if="orderInfo.order.remark !== ''">
            <el-col span="24">
              <p class="lineH30 f14">备注：{{ orderInfo.order.remark }}</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="12">
              <p class="lineH30 f14">收件人：{{ orderInfo.order.consigneeName }}</p>
            </el-col>
            <el-col span="12" v-if="orderInfo.order.consigneeMobile">
              <p class="lineH30 f14" v-if="printHiddenFlag">手机号：{{
                  orderInfo.order.consigneeMobile.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2") }}</p>
              <p class="lineH30 f14" v-else>手机号：{{ orderInfo.order.consigneeMobile }}</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="24">
              <p class="lineH30 f14">收货地址：{{ orderInfo.order.consigneeAddressPath }}{{ orderInfo.order.consigneeDetail }}
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="24">
              <p class="printgoodtitle">商品信息</p>
              <div class="printgoodinfo">
                <div v-for="(item, index) in orderInfo.orderItems" :key="index" class="printgooditem">
                  <div class="printgoodname">
                    <p>{{ item.goodsName }}</p>
                    <div class="printgoodguid">
                    <span v-for="(itemchild, keychild) in JSON.parse(item.specs)" :key="keychild">
                      <span class="printgoodguiditem" v-if="keychild != 'images'">
                        {{ keychild }} : {{ itemchild }}
                      </span>
                    </span>
                    </div>
                  </div>
                  <span class="printgoodnumber">数量：{{ item.num }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div slot="footer" style="text-align: right">
        <el-button @click="printModal = false">关闭</el-button>
        <el-button type="primary" v-print="printInfoObj">打印发货单</el-button>
      </div>
    </el-dialog>


    <multipleMap ref="map" @callback="selectedRegion" />
  </div>
</template>

<script>
import * as RegExp from "@/utils/RegExp.js";

import multipleMap from "@/components/map/multiple-map";
// import vueQr from "vue-qr";
import {
  postManagerOrderOrderByOrderSnPay
} from "@/apis/controller/GuanLiDuan,DingDanAPI/postManagerOrderOrderByOrderSnPay";
import {getManagerOrderOrderByOrderSn} from "@/apis/controller";
import {
  putManagerOrderOrderUpdateByOrderSnPrice
} from "@/apis/controller/GuanLiDuan,DingDanAPI/putManagerOrderOrderUpdateByOrderSnPrice";
import {
  postManagerOrderOrderByOrderSnCancel
} from "@/apis/controller/GuanLiDuan,DingDanAPI/postManagerOrderOrderByOrderSnCancel";
import {
  postManagerOrderOrderUpdateByOrderSnConsignee
} from "@/apis/controller/GuanLiDuan,DingDanAPI/postManagerOrderOrderUpdateByOrderSnConsignee";
import {unitPrice} from "../../../utils/filters";
export default {
  name: "orderDetail",
  components: {
    multipleMap,
  },
  data () {
    return {
      typeList: [],
      showPrices: false,
      printHiddenFlag: false,//隐藏信息
      printInfoObj: {
        id: "printInfo",//要打印的id名 无#号
        popTitle: '&nbsp;',//页眉标题 默认浏览器标题 空字符串时显示undefined 使用html语言
        extraHead: '',//头部文字 默认空
      },
      loading: false, //加载表格

      addr: "", //地区


      orderLogInfo: [], //订单日志数据
      orderLogModal: false, //弹出调整价格框
      checkedLogistics: [], //选中的物流公司集合
      allowOperation: {}, //订单可才做选项
      sn: "", //订单编号
      orderInfo: {
        order: {
          priceDetailDTO: {},
        },
      },
      modal: false, //弹出调整价格框
      searchForm: {
        pageNumber: 1, // 当前页数
        pageSize: 100, // 页面大小
        orderSn: "", //订单sn
      },
      //调整价格表单
      modifyPriceForm: {
        price: 0,
      },
      //订单取消表单
      orderCancelForm: {
        reason: "",
      },
      //弹出订单取消框
      orderCancelModal: false,
      //订单发货
      orderDeliveryForm: {
        logisticsNo: "", //发货单号
        logisticsId: "", //物流公司
      },
      //验证要调整的订单金额
      modifyPriceValidate: {
        reason: [
          { required: true, message: "请输入大于0小于99999的合法金额" },
          {
            pattern: /^[1-9]\d{0,3}(\.\d{1,2})?$/,
            message: "请输入大于0小于9999的合法金额",
            trigger: "change",
          },
        ],
      },

      //验证取消订单原因
      orderCancelValidate: {
        reason: [{ required: true, message: "取消原因不能为空", trigger: "blur" }],
      },
      addressModal: false, //弹出修改收件信息框
      printModal: false,
      //收件地址表单
      addressForm: {
        consigneeName: "",
        consigneeMobile: "",
        consigneeDetail: "",
        consigneeAddressPath: "",
        consigneeAddressIdPath: "",
      },
      orderDeliverFormValidate: {
        logisticsNo: [{ required: true, message: "发货单号不能为空", trigger: "change" }],
        logisticsId: [{ required: true, message: "请选择物流公司", trigger: "blur" }],
      },
      addressRule: {
        consigneeName: [
          { required: true, message: "收货人姓名不能为空", trigger: "blur" },
        ],
        consigneeMobile: [
          { required: true, message: "联系方式不能为空", trigger: "blur" },
          {
            pattern: RegExp.mobile,
            trigger: "blur",
            message: "请输入正确的手机号",
          },
        ],
        consigneeDetail: [
          { required: true, message: "详细地址不能为空", trigger: "blur" },
        ],
      },

      columns: [
        {
          title: "商品",
          key: "goodsName",
          minWidth: 200,
          slot: "goodsSlot",
        },
        {
          title: "优惠",
          key: "num",
          minWidth: 100,
          render: (h, params) => {
            let resultText = "";
            if (params.row.promotionType) {
              let type = params.row.promotionType.split(",");
              if (type.indexOf("PINTUAN") != -1) {
                resultText += "拼团 ";
              }
              if (type.indexOf("SECKILL") != -1) {
                resultText += "秒杀 ";
              }
              if (type.indexOf("COUPON") != -1) {
                resultText += "优惠券 ";
              }
              if (type.indexOf("FULL_DISCOUNT") != -1) {
                resultText += "满减 ";
              }
              if (type.indexOf("POINTS_GOODS") != -1) {
                resultText += "积分商品 ";
              }
            }
            if (resultText === "") {
              resultText = "暂无未参与任何促销";
            }
            return h("div", resultText);
          },
        },
        {
          title: "单价",
          key: "goodsPrice",
          minWidth: 100,
          render: (h, params) => {
            if (!params.row.goodsPrice) {
              return h("div", this.$options.filters.unitPrice(0, "￥"));
            }
            return h("div", this.$options.filters.unitPrice(params.row.unitPrice, "￥"));
          },
        },

        {
          title: "数量",
          key: "num",
          minWidth: 80,
        },
        {
          title: "退款数量",
          key: "returnGoodsNumber",
          minWidth: 80,
        },
        {
          title: "小计",
          key: "subTotal",
          minWidth: 100,
          render: (h, params) => {
            return h("div", this.$options.filters.unitPrice(params.row.flowPrice, "￥"));
          },
        },
      ],
      data: [], // 表单数据
      orderLogColumns: [
        {
          title: "操作者",
          key: "operatorName",
          minWidth: 120,
        },
        {
          title: "操作类型",
          key: "operatorType",
          minWidth: 100,
        },
        {
          title: "时间",
          key: "createTime",
          width: 180,
        },
        {
          title: "日志",
          key: "message",
          tooltip: true,
          minWidth: 200,
        },
      ],
    };
  },
  watch: {
    $route (to, from) {
      this.$router.go(0);
    },
  },
  methods: {
    unitPrice,
    gotoHomes () {
      return false
    },

    //确认收款
    confirmPrice () {
      this.$confirm('您确定要收款吗？线下收款涉及库存变更，需异步进行，等待约一分钟刷新列表查看', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        postManagerOrderOrderByOrderSnPay({orderSn: this.sn}).then((res) => {
          if (res.data.success) {
            this.$message.success("收款成功");
            this.getDataList();
          } else {
            // this.$message.error(res.data.message);
          }
        });
      });
    },
    getOrderPrice () {
      if (this.showPrices) {
        this.showPrices = false
      } else if (!this.showPrices) {
        this.showPrices = true
      }
    },
    getContentPrice () {
      for (let i = 0; i < this.typeList.length; i++) {
        for (let j = i + 1; j < this.typeList.length; j++) {
          if (this.typeList[i].promotionId === this.typeList[j].promotionId) {
            this.typeList[i].discountPrice = this.typeList[i].discountPrice + this.typeList[j].discountPrice
            this.typeList.splice(j, 1)
          }
        }
      }
      console.log(this.typeList)
      if (this.typeList.length >= 3) {
        console.log(123123)
        this.getContentPrice()
      }
    },
    // 获取订单详情
    getDataList () {
      this.loading = true;
      getManagerOrderOrderByOrderSn({orderSn: this.sn}).then((res) => {
        this.loading = false;
        if (res.data.success) {
          this.orderInfo = res.data.result;
          this.allowOperation = res.data.result.allowOperationVO;
          this.data = res.data.result.orderItems;
          this.typeList = JSON.parse(JSON.stringify(res.data.result.order.priceDetailDTO.discountPriceDetail));
          this.getContentPrice()
          this.getOrderPrice()
        }
      });
    },
    modifyPrice () {
      //默认要修改的金额为订单总金额
      this.modifyPriceForm.price = this.orderInfo.order.flowPrice;
      this.modal = true;
    },
    //修改订单金额提交
    modifyPriceSubmit () {
      this.$refs.modifyPriceForm.validate((valid) => {
        if (valid) {
          putManagerOrderOrderUpdateByOrderSnPrice({orderSn: this.sn, ...this.modifyPriceForm}).then((res) => {
            if (res.data.success) {
              this.$message.success("修改订单金额成功");
              this.modal = false;
              this.getDataList();
            }
          });
        }
      });
    },
    // 选中的地址
    selectedRegion (val) {
      if(val.type === 'select'){
        const paths = val.data.map(item => item.name).join(',')
        const ids = val.data.map(item => item.id).join(',')
        this.$set(this,'addr',paths)
        this.$set(this,'regionId',ids)
      }
      else{
        this.$set(this,'addr',val.data.addr)
        this.$set(this,'regionId',val.data.addrId)
      }

    },
    //订单取消
    orderCancel () {
      this.orderCancelModal = true;
    },
    //订单取消提交
    orderCancelSubmit () {
      this.$refs.orderCancelForm.validate((valid) => {
        if (valid) {
          postManagerOrderOrderByOrderSnCancel({orderSn: this.sn, ...this.orderCancelForm}).then((res) => {
            if (res.data.success) {
              this.$message.success("取消成功");
              this.getDataList();
            }
            this.orderCancelModal = false;
          });
        }
      });
    },
    //订单日志
    orderLog () {
      this.orderLogModal = true;
    },
    //订单日志取消
    handelCancel () {
      this.orderLogModal = false;
    },
    //打印发货单
    printOrder () {
      this.printModal = true;
    },
    printHiddenInfo () {
      this.printHiddenFlag = !this.printHiddenFlag;
    },
    printCancel () {
      // this.printHiddenFlag = false;
    },
    //弹出修改收货地址框
    editAddress () {
      this.addressModal = true;
      this.addr = this.orderInfo.order.consigneeAddressPath;
      this.regionId = this.orderInfo.order.consigneeAddressIdPath;
      this.addressForm.consigneeName = this.orderInfo.order.consigneeName;
      this.addressForm.consigneeMobile = this.orderInfo.order.consigneeMobile;
      this.addressForm.consigneeDetail = this.orderInfo.order.consigneeDetail;
      this.addressForm.consigneeAddressPath = this.orderInfo.order.consigneeAddressPath;
      this.addressForm.consigneeAddressIdPath = this.orderInfo.order.consigneeAddressIdPath;
    },
    //修改收货地址
    editAddressSubmit () {
      if (this.regionId == "") {
        this.$message.error("请选择地址");
        return;
      }
      this.addressForm.consigneeAddressPath = this.addr;
      this.addressForm.consigneeAddressIdPath = this.regionId;
      this.$refs.addressForm.validate((valid) => {
        if (valid) {
          postManagerOrderOrderUpdateByOrderSnConsignee({orderSn: this.sn} , this.$util.urlFormat(this.addressForm), this.$util.headers()).then((res) => {
            if (res.data.success) {
              this.$message.success("收货地址修改成功");
              this.addressModal = false;
              this.getDataList();
            }
          });
        }
      });
    },
  },
  mounted () {
    this.sn = this.$route.query.sn;
    this.getDataList();
  },
};
</script>
<style lang="scss">
.lineH30 {
  line-height: 30px;
}

.order-log-div {
  line-height: 30px;
  overflow-y: scroll;
}

.flex-el-card {
  display: flex;
  height: 600px;
}

.el-card-item {
  margin: 5px 0;
}

.flex-el-card-left {
  flex: 4;
  //background: #f8f8f8;
}

.flex-el-card-right {
  flex: 6;
}

.search {
  .operation {
    margin-bottom: 2vh;
  }

  .select-clear {
    margin-left: 10px;
  }

  .div-item {
    line-height: 35px;
    display: flex;

    >.div-item-left {
      width: 80px;
    }

    >.div-item-right {
      flex: 1;
      word-break: break-all;
    }
  }

  .div-status-right {
    margin-top: 20px;
    margin-left: 30px;
    font-size: 20px;
  }

  .page {
    margin-top: 2vh;
  }

  el-button {
    margin-left: 5px;
  }

  .goods-total {
    padding: 20px;
    height: 220px;
    width: 100%;

    ul {
      margin-right: 10px;
      display: block;
      float: right;
      list-style-type: none;

      li {
        text-align: -webkit-match-parent;
      }
    }

    .label {
      float: left;
      width: 500px;
      font-size: 14px;
      text-align: right;
    }

    .txt {
      float: left;
      font-size: 14px;
      width: 130px;
      text-align: right;
      font-family: verdana;
    }

    .flowPrice {
      color: #cc0000;
      font-size: 22px;
    }
  }
}

.f14 {
  font-size: 14px;
  color: #333;
}

.printgoodtitle {
  font-size: 14px;
  line-height: 1.5;
  margin-top: 15px;
  color: #333;
}

.printgoodinfo {
  // font-size: 14px;
  // background: #f2f2f2;
  // border-bottom:2px solid #333 ;
  padding: 10px;
  overflow: hidden;
  color: #333;

  .printgooditem {
    border-bottom: 1px solid #e8eaec;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    line-height: 30px;
    margin-bottom: 10px;
    padding-bottom: 10px;

    .printgoodname {
      flex: 1;
      overflow: hidden;

      .printgoodguid {
        font-size: 12px;
        color: #999999;
        line-height: 1.5;

        .printgoodguiditem {
          margin-right: 10px;
        }
      }
    }

    .printgoodprice {
      width: 135px;
      margin-left: 15px;
    }

    .printgoodnumber {
      width: 85px;
      margin-left: 15px;
    }
  }
}

@media print {
  @page {
    size: auto;
    margin: 3mm;
  }

  html,
  body {
    height: inherit;
  }
}
</style>
