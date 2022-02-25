import type { CacheTypeEnum } from '/@/enums/cacheEnum';

export interface GlobConfig {
  title: string; // 全称
  shortName: string; // 简称

  apiUrl: string; // 基本接口地址
  uploadUrl?: string; // 文件上传地址，可选
}

export interface ProjectConfig {
  cacheType: CacheTypeEnum; // 存储类型
}
