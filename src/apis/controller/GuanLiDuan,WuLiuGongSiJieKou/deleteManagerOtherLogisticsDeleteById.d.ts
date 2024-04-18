import { type AxiosRequestConfig } from "axios";
/**
 * 删除物流公司
 * /manager/other/logistics/delete/{id}
 */
export declare function deleteManagerOtherLogisticsDeleteById(params: DeleteManagerOtherLogisticsDeleteByIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerOtherLogisticsDeleteByIdParams {
    id: string;
}
