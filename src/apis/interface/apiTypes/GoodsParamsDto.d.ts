import { type GoodsParamsItemDto } from "../../interface";
export interface GoodsParamsDto {
    /** 分组id */
    groupId?: string;
    /** 分组名称 */
    groupName?: string;
    /** 分组内的商品参数列表 */
    goodsParamsItemDTOList?: GoodsParamsItemDto[];
}
