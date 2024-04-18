import request from "@/utils/require";
/**
 * /manager/common/file/rename
 */
export function postManagerCommonFileRename(params, config) {
    const paramsInput = {
        id: params.id,
        newName: params.newName,
    };
    return request.post(`/manager/common/file/rename`, null, {
        params: paramsInput,
        ...config,
    });
}
