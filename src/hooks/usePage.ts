import type { RouteLocationRaw, Router } from 'vue-router';

import { isString } from '/@/utils/is';
import { useRouter } from 'vue-router';
import { REDIRECT_NAME } from '/@/router/routers/basic';

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: string };

function handleError(e: Error) {
  console.error(e);
}

// page switch
export function useGo(_router?: Router) {
  let router;
  if (!_router) {
    router = useRouter();
  }
  const { push, replace } = _router || router;
  function go(opt: RouteLocationRawEx | string, isReplace = false) {
    if (!opt) {
      return;
    }
    if (isString(opt)) {
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
    } else {
      const o = opt as RouteLocationRaw;
      isReplace ? replace(o).catch(handleError) : push(o).catch(handleError);
    }
  }
  return go;
}

/**
 * 返回上一页
 * @param _router
 */
export const useGoBack = (router?: Router) => {
  !router && (router = useRouter());

  const go = useGo();
  const { back, currentRoute } = router;
  const goBack = (path?: string) => {
    if (currentRoute.value.meta.isOpenWindow) {
      window.close();
      return;
    }

    if (path && isString(path)) {
      go(path);
      return;
    }

    if (window.history.length >= 1) {
      back();
      return;
    }
  };

  return goBack;
};

/**
 * @description: 刷新当前页面
 */
export const useRedo = (_router?: Router) => {
  const { push, currentRoute } = _router || useRouter();
  const { query, params = {}, name, fullPath } = unref(currentRoute.value);
  function redo(): Promise<boolean> {
    return new Promise((resolve) => {
      if (name === REDIRECT_NAME) {
        resolve(false);
        return;
      }
      if (name && Object.keys(params).length > 0) {
        params['_redirect_type'] = 'name';
        params['path'] = String(name);
      } else {
        params['_redirect_type'] = 'path';
        params['path'] = fullPath;
      }
      push({ name: REDIRECT_NAME, params, query }).then(() => resolve(true));
    });
  }
  return redo;
};
