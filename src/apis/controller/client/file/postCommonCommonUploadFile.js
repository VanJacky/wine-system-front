import request from "@/utils/require";
/**
 * 文件上传
 * /common/common/upload/file
 */
export function postCommonCommonUploadFile(params, config) {
    const paramsInput = {
        file: params.file,
        base64: params.base64,
    };
    return request.post(`/common/common/upload/file`, null, {
        params: paramsInput,
        ...config,
    });
}
