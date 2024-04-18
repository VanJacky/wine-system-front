export interface SearchVo {
    selecte?: SearchVoSelecte;
    startDate?: string;
    endDate?: string;
    convertStartDate?: string;
    convertEndDate?: string;
}
export interface SearchVoSelecte {
    [key: string]: any;
}
