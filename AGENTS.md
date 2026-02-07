# 智能体的纪律

在项目根目录下的 `.sophye` 中存放着重要的上下文文件，必须第一时间依次读取匹配一下路径模式的内容：

- `.sophye/readme.md`
- `.sophye/*/readme.md`
- `.sophye/*/.meta/readme.md`

`.sophye/skills` 存放的是与 AI 工具、平台无关的智能体技能包，当需要用到当前 AI 工具本身所支持的技能时，需要严格按照 `.sophye/skills/.meta/readme.md` 中所描述的进行转换。
