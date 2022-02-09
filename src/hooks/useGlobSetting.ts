import type { GlobConfig } from '/#/config';

const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_GLOB_APP_SHORT_NAME, VITE_GLOB_UPLOAD_URL } =
  import.meta.env;

export const useGlobSetting = (): Readonly<GlobConfig> => {
  // 全局配置
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE as string,
    shortName: VITE_GLOB_APP_SHORT_NAME as string,

    apiUrl: VITE_GLOB_API_URL as string,
    uploadUrl: VITE_GLOB_UPLOAD_URL as string | undefined,
  };

  return glob as Readonly<GlobConfig>;
};
