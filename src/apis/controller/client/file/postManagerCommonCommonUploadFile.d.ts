import { type AxiosRequestConfig } from "axios";
/**
 * 文件上传
 * /manager/common/common/upload/file
 */
export declare function postManagerCommonCommonUploadFile(params: PostManagerCommonCommonUploadFileParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface PostManagerCommonCommonUploadFileParams {
    file: File;
    base64: string;
}
