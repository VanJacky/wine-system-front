import { type AxiosRequestConfig } from "axios";
/**
 * /manager/store/store/audit/{id}/{passed}
 */
export declare function putManagerStoreStoreAuditByIdByPassed(params: PutManagerStoreStoreAuditByIdByPassedParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: any;
}>;
export interface PutManagerStoreStoreAuditByIdByPassedParams {
    /** 店铺id */
    id: string;
    /** 是否通过审核 0 通过 1 拒绝  2 处理中 编辑操作则不需传递 */
    passed: number;
}
