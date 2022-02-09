NODE_ENV=development

VITE_PUBLIC_PATH = "/"

# 跨域代理，可以配置多个
# 请注意不要换行
VITE_PROXY = [["/basic-api","http://localhost:3000"],["/upload","http://localhost:3300/upload"]]

# 是否删除控制台
VITE_DROP_CONSOLE = false

# 基本接口地址
VITE_GLOB_API_URL= ""

# 文件上传地址，可选
VITE_GLOB_UPLOAD_URL= ""
