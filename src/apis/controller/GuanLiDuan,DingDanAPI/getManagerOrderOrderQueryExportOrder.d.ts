import { type AxiosRequestConfig } from "axios";
import { type OrderSearchParams } from "../../interface";
/**
 * /manager/order/order/queryExportOrder
 */
export declare function getManagerOrderOrderQueryExportOrder(params: GetManagerOrderOrderQueryExportOrderParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        sn: string;
        createTime: string;
        memberName: string;
        consigneeName: string;
        consigneeMobile: string;
        consigneeAddressPath: string;
        consigneeDetail: string;
        paymentMethod: string;
        logisticsName: string;
        freightPrice: number;
        goodsPrice: number;
        discountPrice: number;
        flowPrice: number;
        goodsName: string;
        num: number;
        remark: string;
        orderStatus: string;
        payStatus: string;
        deliverStatus: string;
        needReceipt: boolean;
        storeName: string;
    }[];
}>;
export interface GetManagerOrderOrderQueryExportOrderParams {
    orderSearchParams: OrderSearchParams;
}
