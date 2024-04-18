import { type AxiosRequestConfig } from "axios";
/**
 * 文件上传
 * /common/common/upload/file
 */
export declare function postCommonCommonUploadFile(params: PostCommonCommonUploadFileParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<any>;
export interface PostCommonCommonUploadFileParams {
    file: File;
    base64: string;
}
