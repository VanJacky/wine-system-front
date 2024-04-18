import { type AxiosRequestConfig } from "axios";
/**
 * 批量通过ids删除
 * /manager/passport/user/{ids}
 */
export declare function deleteManagerPassportUserByIds(params: DeleteManagerPassportUserByIdsParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface DeleteManagerPassportUserByIdsParams {
    ids: string[];
}
