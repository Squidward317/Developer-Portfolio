export const skillGroups = [
  { title: '语言与应用', items: ['C++20', 'Python', 'SQL', 'Java 基础', 'C# 基础'] },
  { title: 'Windows 图形', items: ['MFC', 'GDI', 'HDC', '双缓冲', 'BitBlt', 'SGAPI'] },
  { title: '工程实践', items: ['需求分析', '详细设计', '模块开发', '测试与缺陷分析', '遗留功能迁移'] },
  { title: '工具与协作', items: ['Visual Studio', 'Git / SVN', 'Drawio', 'JMeter', 'AI 协同研发'] },
];

export const projects = [
  { slug: 'menu-code-generator', title: '菜单代码生成工具', description: '使用 Python 解析日方 menutree 文件并生成菜单代码，将原本一周以上的脚本、人工制表和硬编码工作压缩到几分钟。', category: '研发效率工具', stack: ['Python', '文件解析', '代码生成'], featured: true, github: 'https://github.com/Squidward317', demo: '#', context: '项目开发中需要根据日方 menutree 文件维护菜单结构，原流程依赖特定表格脚本、人工制表和硬编码。', contribution: '独立设计并开发解析与代码生成流程，整理输入规则和输出模板，提供给开发和测试人员使用。', highlights: ['将原本一周以上的工作压缩到几分钟。', '降低测试人员和开发人员的使用门槛。'] },
  { slug: 'multi-model-device-ui', title: '多机种专业设备界面', description: '在 Windows / MFC 专业设备软件中参与共通基类与机种别继承扩展，控制旧功能复用和新功能叠加的影响范围。', category: 'C++ 应用软件', stack: ['C++20', 'MFC', 'GDI', 'SGAPI'], featured: true, github: 'https://github.com/Squidward317', demo: '#', context: '专业设备软件需要在多个机种之间复用共通功能，同时隔离机种差异，避免直接迁移带来耦合。', contribution: '负责业务模块开发，参与共通基类与机种别继承扩展，判断业务差异、继承关系和代码影响范围。', highlights: ['支撑多机种统合开发。', '通过模块化复用控制共通功能的变更影响。'] },
  { slug: 'edge-platform-lab', title: '边缘与云平台学习实验室', description: '计划中的公开项目：用 C++ 设备模拟器串联 HTTP、消息队列、数据库、Docker、Kubernetes 和可观测性。', category: '边缘 / IoT', stack: ['C++20', 'HTTP', 'Docker', 'Kubernetes'], featured: false, github: 'https://github.com/Squidward317', demo: '#', context: '计划通过一个可公开的设备遥测项目补齐 HTTP、REST、数据库、消息队列、容器编排和可观测性。', contribution: '项目尚未开始，后续将使用 C++ 编写设备模拟器，并逐步实现 API、异步处理和 Kubernetes 部署。', highlights: ['作为从 C++ 应用开发迁移到边缘 / IoT 和云平台的实践项目。'] },
];

export const experiences = [
  { period: '2025.09 — 2026.09', title: '软件开发工程师', organization: '古野 Furuno · 大连', description: '参与声纳等专业设备图形化操作界面开发，负责窗口、弹窗、接口和模块数据接收，参与需求、设计、编码、测试及日方指摘对应。' },
  { period: '2025.01 — 2025.04', title: 'Kanzi 智能座舱开发实习', organization: '中科创达 ThunderSoft · 大连', description: '参与日本车厂车载项目，完成 pop / banner 画面制作，熟悉 merge project 交付、Git 操作和差分测试文档。' },
  { period: '2024.07 — 2025.01', title: '软件开发与 RPA 实习', organization: '和众信拓 / 中国农业银行 · 大连', description: '参与 SQL、C# 测试画面、JMeter 压力测试和 RPA 流程开发，独立完成 3 个 RPA 流程并协助完成 6 个流程优化。' },
];

export const education = [{ period: '2021.09 — 2025.07', title: '软件工程 + 日语 · 本科', organization: '大连外国语大学', description: '英语 CET-6；日语 JLPT N2，可阅读日文技术资料、编写日文邮件并独立对应日方指摘。' }];
