import { type AxiosRequestConfig } from "axios";
/**
 * /manager/common/file/rename
 */
export declare function postManagerCommonFileRename(params: PostManagerCommonFileRenameParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        name: string;
        fileKey: string;
        fileSize: number;
        fileType: string;
        url: string;
        ownerId: string;
        userEnums: string;
    };
}>;
export interface PostManagerCommonFileRenameParams {
    id: string;
    newName: string;
}
