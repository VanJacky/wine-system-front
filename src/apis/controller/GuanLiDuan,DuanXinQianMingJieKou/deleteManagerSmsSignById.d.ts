import { type AxiosRequestConfig } from "axios";
/**
 * 删除短信签名
 * /manager/sms/sign/{id}
 */
export declare function deleteManagerSmsSignById(params: DeleteManagerSmsSignByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerSmsSignByIdParams {
    /** 短信签名id */
    id: string;
}
