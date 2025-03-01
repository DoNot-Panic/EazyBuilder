
# 欢迎来到 EazyBuilder 项目!

EazyBuilder聚焦多团队多工程统一编译、构建、扫描、部署等持续集成自动化流水线需求，通过插件自动注入和装饰、流水线模板化，改善传统持续集成工具（例如直接使用Jenkins/Hudson）配置繁琐，专业性要求高（比如必须熟悉Jenkinsfile/pipeline/groovy语法等），环境依赖复杂（Shared library运行时需要依赖代码库），大批量工程配置难，管理难等问题。


# 特性与优势

## 特性
- **灵活易用**:仅需提供工程SVN/GIT 资源库信息，即可体验从打包构建、单元测试、覆盖率扫描、质量漏洞扫描、构件仓库推送、自动部署全过程标准化处理；
- **精准提醒**:流水线过程和扫描报告，代码提交与合并，支持邮件、钉钉等方式实时推送，支持精准订阅配置；
- **集成方式丰富**:支持Webhook、定时自动构建、事件或通过OpenAPI集成和触发持续集成流水线；
- **插件增强**:质量、漏洞扫描以及其他扩展的流水线步骤均基于自动化插件装饰和增强技术，对源码工程无额外的插件安装、配置文件或是目录结构要求，对构建产出物无影响；
- **可视化编排**:开关式的流水线可视化编排方式，内置构建、测试、部署等常见CI过程的大量处理模板，支持快速定制和扩展持续集成流水线；
- **弹性资源调度**:支持构建机负载均衡、K8S弹性调度，支持较大规模的并行构建处理和资源调度需求，充分利用硬件资源；
- **主流开发框架支持**:兼容主流Java，C#以及前端开发的工程代码编译构建和发布模式;支持Docker镜像仓库、Maven仓库和NPM仓库推送；
- **项目质量监控**:全方位掌握流水线运行过程中扫描的各类工程质量指标数据，可自定义质量门禁、红灯修复提醒，同时支持自定义统计分析维度，提供在线质量报表或邮件报表。

## 优势
- **配置简单**：操作步骤简单，无需熟悉流水线脚本语法，可视化编排，快速创建高效流水线。
- **非侵入式集成**：不依赖于三方工具，使用模块化设计，解决流水线共享复用问题。
- **企业级安全**：基于角色提供细粒度的访问控制、单点登录和审计功能，记录每个用户的操作内容，流水线变更历史，满足用户的安全需求。
- **流水线监控预警**：内置丰富预警手段，对流水线状况进行全方位监控，主动发送异常日志，通过数据驱动流水线持续改进。
- **事件驱动**：支持通配符，对不同的代码分支，配置不同的事件类型，触发不同的流水线。


# **入门**

- Eazybulider包含一个前端与一个后端应用，代码目录分别为：eazybuilder-web,eazybuilder-server

#### Docker安装

- Docker版本： 1.13.0+

- EazyBuilder镜像已经发布至[Docker Hub](https://hub.docker.com/ "Docker Hub");
  可以直接使用EazyBuilder官方镜像
  
- 自主构建镜像

  生成镜像：docker-compose build

- 启动应用

  docker-compose  up -d

  使用默认编排文件:[dockercompose/docker-compose.yml](./dockercompose/docker-compose.yml)

  

访问http://localhost/console/index.html 即可

- 构建机器

  EazyBuilder中流水线执行，依耐于jenkins，需要提前在jenkins中初始化构建环境，详情可以参照[jenkins dockerfile](./eazybuilder-server/thridparty/jenkins/src/main/docker/Dockerfile)



# **贡献**

欢迎贡献者加入 EazyBuilder 项目。请查看[CONTRIBUTING](./CONTRIBUTING.md)以了解如何为这个项目做出贡献。


## 范围


### 适用范围

EazyBuilder 旨在解决快速简便的创建CI流水线。因此，该项目将实施或已经实施：

* [构建资源管理]
* [可视化流水线编排]
* [流水线共享复用]
* [流水线监控预警]
* [事件驱动的流水线]
* [消息预警]
* [OpenAPI集成支持]

### 超出范围

EazyBuilder 将在云原生环境中与其他工具一起使用。因此，将不包含以下特定功能：

* [容器资源管理]
* [质量规约集成]
* [代码托管]
* [自动化测试]
* [需求管理]
* [制品管理]

# **联系我们**


-「欢迎大家关注eazybuilder，在使用中遇到问题，可以加群讨论」

- **欢迎加入交流群。您可以扫描下方微信二维码，邀请您入群。请注明加入easybuilder**

<img width="400" alt="image" src="https://user-images.githubusercontent.com/1069092/189043893-fe653257-3180-464b-85e1-c91876b29df4.jpg">


# **资源**

每个版本的最新文档可在以下位置找到：

- [EazyBuilder 1.0.0](./doc/referencebook/v1.0.0/referencebook_cn.md)


# **下载**

- [Github Release](https://github.com/iSoftStoneGroup/EazyBuilder/releases)


# **许可**

请参阅[许可证](./LICENSE)以获取更多信息。

## 准则

我们遵循[CNCF行为准则](./CODE_OF_CONDUCT.md).
