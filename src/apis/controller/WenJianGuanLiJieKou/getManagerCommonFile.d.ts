import { type AxiosRequestConfig } from "axios";
import { type File, type SearchVo, type PageVo } from "../../interface";
/**
 * /manager/common/file
 */
export declare function getManagerCommonFile(params: GetManagerCommonFileParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        size: number;
        records: {
            name: string;
            fileKey: string;
            fileSize: number;
            fileType: string;
            url: string;
            ownerId: string;
            userEnums: string;
        }[];
        current: number;
        pages: number;
    };
}>;
export interface GetManagerCommonFileParams {
    file: File;
    searchVO: SearchVo;
    pageVo: PageVo;
}
