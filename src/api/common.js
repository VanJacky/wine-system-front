import request from "@/utils/require";
import {COMMON_BASE_URL} from "../../constant/constant";
const commonUrl = COMMON_BASE_URL
export const getChildRegion = (id) => {
  return request.get(`${commonUrl}/common/common/region/item/${id}`);
};

// 点地图获取地址信息
export const getRegion = (params) => {
  return request.get(`${commonUrl}/common/common/region/region`, params);
};

// 获取拼图验证
export const getVerifyImg = (verificationEnums) => {
  return request.get(`${commonUrl}/common/common/slider/${verificationEnums}`);
};

// 拼图验证
export const postVerifyImg = (params) => {
  return request.put(`${commonUrl}/common/common/slider/${params.verificationEnums}`, params);
};


// 获取系统基础信息
export const getBaseSite = () => {
  return request.get(`${commonUrl}/common/common/site`);
};

// 上传文件
export const upLoadFile = (bold) =>{
  return request.post(commonUrl + "/common/common/upload/file",bold);
}
