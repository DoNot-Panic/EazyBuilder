
# 第三方插件

EazyBuilder整合了jenkins，sonarqube等插件，本目录包含了制作插件镜像的Dockerfile。使用Dockerfile重新创建镜像，不是必要操作。可以直接在EazyBuilder配置文件中，配置已有的插件访问地址。

# 目录说明

## arm64支持
- 平台可以兼容arm64，每个插件目录中，都包含了arm64目录，需要注意，arm64还在试验中，相关功能未经过充分测试；

## x86支持
- 平台默认使用x86架构的镜像。

## 注意
- 文件中包含的访问地址，密码等敏感信息，已经做了特殊处理，在重新制作镜像前，首先应该将访问地址，密码设置为真实有效的信息。