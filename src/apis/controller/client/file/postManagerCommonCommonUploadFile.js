import request from "@/utils/require";
/**
 * 文件上传
 * /manager/common/common/upload/file
 */
export function postManagerCommonCommonUploadFile(params, config) {
    const paramsInput = {
        file: params.file,
        base64: params.base64,
    };
    return request.post(`/manager/common/common/upload/file`, null, {
        params: paramsInput,
        ...config,
    });
}
