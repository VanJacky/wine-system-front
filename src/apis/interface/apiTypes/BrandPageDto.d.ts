export interface BrandPageDto {
    page_number?: number;
    page_size?: number;
    sort?: string;
    order?: string;
    not_convert?: boolean;
    /** 品牌名称 */
    name?: string;
}
