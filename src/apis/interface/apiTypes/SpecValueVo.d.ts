import { type SpecImages } from "../../interface";
export interface SpecValueVo {
    /** 规格项名字 */
    specName?: string;
    /** 规格值 */
    specValue?: string;
    /** 该规格是否有图片，1 有 0 没有 */
    specType?: number;
    /** 规格的图片 */
    specImage?: SpecImages[];
}
