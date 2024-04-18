import { type AxiosRequestConfig } from "axios";
import { type AdminUserDto, type SearchVo, type PageVo } from "../../interface";
/**
 * 多条件分页获取用户列表
 * /manager/passport/user
 */
export declare function getManagerPassportUser(params: GetManagerPassportUserParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        total: number;
        size: number;
        records: {
            username: string;
            password: string;
            nickName: string;
            mobile: string;
            email: string;
            avatar: string;
            isSuper: boolean;
            status: boolean;
            description: string;
            departmentId: string;
            roleIds: string;
            departmentTitle: string;
            roles: {
                name: string;
                defaultRole: boolean;
                description: string;
            }[];
            menus: {
                title: string;
                name: string;
                path: string;
                level: number;
                frontRoute: string;
                parentId: string;
                sortOrder: number;
                permission: string;
            }[];
        }[];
        current: number;
        pages: number;
    };
}>;
export interface GetManagerPassportUserParams {
    user: AdminUserDto;
    searchVo: SearchVo;
    pageVo: PageVo;
}
