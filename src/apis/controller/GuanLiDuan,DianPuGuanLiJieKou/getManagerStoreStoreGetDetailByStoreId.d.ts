import { type AxiosRequestConfig } from "axios";
/**
 * /manager/store/store/get/detail/{storeId}
 */
export declare function getManagerStoreStoreGetDetailByStoreId(params: GetManagerStoreStoreGetDetailByStoreIdParams, config?: AxiosRequestConfig): import("axios").AxiosPromise<{
    success: boolean;
    message: string;
    code: number;
    timestamp: number;
    result: {
        storeId: string;
        storeJson: string;
        storeName: string;
        companyName: string;
        companyAddress: string;
        companyAddressIdPath: string;
        companyAddressPath: string;
        companyPhone: string;
        companyEmail: string;
        employeeNum: number;
        registeredCapital: number;
        linkName: string;
        linkPhone: string;
        licenseNum: string;
        scope: string;
        licencePhoto: string;
        legalName: string;
        legalId: string;
        legalPhoto: string;
        settlementBankAccountName: string;
        settlementBankAccountNum: string;
        settlementBankBranchName: string;
        settlementBankJointName: string;
        goodsManagementCategory: string;
        settlementCycle: string;
        stockWarning: number;
        ddCode: string;
        salesConsigneeName: string;
        salesConsigneeMobile: string;
        salesConsigneeAddressId: string;
        salesConsigneeAddressPath: string;
        salesConsigneeDetail: string;
        storeDisable: string;
        selfOperated: boolean;
        storeCenter: string;
        storeLogo: string;
        storeDesc: string;
        storeAddressPath: string;
        storeAddressIdPath: string;
        storeAddressDetail: string;
        yzfSign: string;
        yzfMpSign: string;
        memberName: string;
    };
}>;
export interface GetManagerStoreStoreGetDetailByStoreIdParams {
    storeId: string;
}
