import { type AxiosRequestConfig } from "axios";
/**
 * /manager/order/order/getTraces/{orderSn}
 */
export declare function postManagerOrderOrderGetTracesByOrderSn(params: PostManagerOrderOrderGetTracesByOrderSnParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PostManagerOrderOrderGetTracesByOrderSnParams {
    orderSn: string;
}
