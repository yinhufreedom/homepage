# Sophye Skills

Sophye Skills 是遵循 [QiiDB 数据规范](https://qiidb.github.io/meta/zh/guides/spec/)定义的 [Agent Skills](https://agentskills.io/specification) 变体，由于两者都主要使用了 Markdown 和 YAML 语法，可以很容易将 Sophye Skills 转换为 Agent Skills。

## 目录结构

符合 Sophye Skills 要求的技能包都存放在项目根目录的 `.sophye/skills` 文件夹下（不包括 `.meta`），每个技能包的目录结构为：

```text
skill-name/
  ├── basic.yml          # 必需
  └── readme.md           # 必需
```

其中，`basic.yml` 是 Agent Skills 的 `SKILL.md` 中前置的 frontmatter 部分，而 `readme.md` 则是 `SKILL.md` 的内容主体部分。

## 转换方式

如下所示：

```markdown
---
这里是 `basic.yml` 中的内容
---

这里是 `readme.md` 中的内容
```
