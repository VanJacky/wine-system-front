import { type AxiosRequestConfig } from "axios";
/**
 * /manager/order/order/{orderSn}/pay
 */
export declare function postManagerOrderOrderByOrderSnPay(params: PostManagerOrderOrderByOrderSnPayParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PostManagerOrderOrderByOrderSnPayParams {
    orderSn: string;
}
