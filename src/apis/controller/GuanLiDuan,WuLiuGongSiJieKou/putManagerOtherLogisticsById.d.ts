import { type AxiosRequestConfig } from "axios";
import { type Logistics } from "../../interface";
/**
 * 编辑物流公司
 * /manager/other/logistics/{id}
 */
export declare function putManagerOtherLogisticsById(params: PutManagerOtherLogisticsByIdParams, input?: Logistics, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        code: string;
        standBy: string;
        formItems: string;
        disabled: string;
    };
}>;
export interface PutManagerOtherLogisticsByIdParams {
    id: string;
}
