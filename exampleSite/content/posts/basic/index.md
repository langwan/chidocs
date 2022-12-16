---
title: "主题文档 - 安装部署"
date: 2022-12-16T18:36:36+08:00
lastmod: 2022-12-16T18:40:58+08:00
weight: 1
---

hugo-theme-chi 是 hugo 的主题，所以我们必须先安装 hugo。

## 安装 hugo

### 使用 go install

```shell {title="安装脚本"}
CGO_ENABLED=1 go install --tags extended github.com/gohugoio/hugo@latest
```

{{< admonition >}}
只能安装 extended 版本，因为只有这个版本可以解析 sass，我们的样式表使用了 sass。
{{< /admonition >}}

### 不同系统

在不同操作系统上安装 hugo 可以参考官方文档页，实际上用 go install 安装是更舒服的选择。

[https://gohugo.io/installation/](https://gohugo.io/installation/)

{{< admonition >}}
使用 go install 之外的方法安装，不一定是最新的版本。
{{< /admonition >}}

## 创建站点

使用 hugo 自带的工具可以很方便的创建站点。

```shell {title="创建站点"}
hugo new site blog
```

创建站点之后初始化 git 代码系统。

## 安装主题

```shell
cd blog
git init
mkdir themes
git submodule add https://github.com/langwan/hugo-theme-chi.git themes/hugo-theme-chi
```

## 配置

```shell
cp themes/hugo-theme-chi/exmapleSite/config.yaml .
```

## 运行

```shell
hugo server -D
```

## 新增文档

```shell
hugo new posts/my-first-post.md
```

## 发布

```shell
hugo
```
