import { type AxiosRequestConfig } from "axios";
import { type Logistics } from "../../interface";
/**
 * 添加物流公司
 * /manager/other/logistics/save
 */
export declare function postManagerOtherLogisticsSave(input?: Logistics, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
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
