export interface Region {
    /** 父id */
    parentId: string;
    /** 区域编码 */
    adCode: string;
    /** 城市代码 */
    cityCode?: string;
    /** 区域中心点经纬度 */
    center: string;
    /** 行政区划级别country:国家province:省份（直辖市会在province和city显示）city:市（直辖市会在province和city显示）district:区县street:街道 */
    level: string;
    /** 名称 */
    name: string;
    /** 行政地区路径，类似：1，2，3 */
    path: string;
    /** 排序 */
    orderNum: number;
}
