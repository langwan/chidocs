---
title: "主题文档 - 配置"
date: 2022-12-17T01:10:25+08:00
lastmod: 2022-12-17T01:10:40+08:00
weight: 2
---

```yaml
# 主题名称
theme: chidocs
# 网站标题
title: 痴货发明家
params:
  # 当前页面时间时间日期格式
  dateFormat: 2006-01-02
  home:
    profile:
      # 主页显示的网站副标题
      subtitle: 平凡而朴素的程序员
  nav:
    # header 展示的 github 网站地址
    bilibili: https://space.bilibili.com/401571418
    github: https://github.com/langwan
markup:
  highlight:
    noClasses: false
## 默认的语言
defaultContentLanguage: zh-cn
```

{{< admonition >}}
其它参数请参考 [Hugo 全局配置](https://gohugo.io/overview/configuration/)
{{< /admonition >}}

## 参数

title
: 站点名称

theme
: 主题名称 chidocs

params.dateFormat
: 站点的日期格式

params.home.profile.subtitle
: 首页的副标题

params.nav.github
: github 主页地址

params.nav.bilibili
: bilibili 主页地址

markup.highlight.noClasses
: 必须为 false，true 会使用 hugo 自动的语法高亮样式，我们不需要这样。
