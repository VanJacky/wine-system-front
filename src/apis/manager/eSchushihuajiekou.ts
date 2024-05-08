// @ts-ignore
/* eslint-disable */
import request from '../../utils/require';
import { COMMON_BASE_URL } from '../../../constant/constant';

/** 此处后端没有提供注释 GET /manager/other/elasticsearch */
export async function init(options?: { [key: string]: any }) {
  return request<string>(`${COMMON_BASE_URL}/manager/other/elasticsearch`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /manager/other/elasticsearch/progress */
export async function getProgress(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`${COMMON_BASE_URL}/manager/other/elasticsearch/progress`, {
    method: 'GET',
    ...(options || {}),
  });
}
