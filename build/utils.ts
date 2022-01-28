import { resolve } from "path";
import { vendorLibs } from "./constant";

// 读取所有环境变量配置文件到 process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName =
      realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }

    if (envName === "VITE_PROXY" && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch {
        realName = "";
      }
    }

    ret[envName] = realName;

    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }

  return ret;
}

// 读取路径
export function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export function configManualChunk(id: string) {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(
        `[\\/]node_modules[\\/]_?(${item.match.join("|")})(.*)`,
        "ig"
      );
      return reg.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
}
