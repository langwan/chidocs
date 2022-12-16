---
title: "主题文档 - 内容"
date: 2022-12-16T21:23:40+08:00
lastmod: 2022-12-16T21:23:46+08:00
---

## 语法高亮

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello Go")
}
```

使用 go install

```shell {title="安装脚本"}
go install github.com/gohugoio/hugo@latest
```

在不同操作系统上安装 hugo 可以参考官方文档页

[https://gohugo.io/installation/](https://gohugo.io/installation/)

## 创建站点

用 hugo 创建站点

可以用 hugo 直接创造新的站点。

```shell {title="创建站点"}
hugo new site home
```

用 exampleSite 启动站点

## 安装主题

```shell {title="安装主题"}
git init
git submodule add https://github.com/dillonzq/LoveIt.git themes/LoveIt
```

## 配置

## 运行

## 发布

```output {title="运行环境"}
1 2 3
```
