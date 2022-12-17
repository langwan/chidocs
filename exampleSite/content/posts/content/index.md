---
title: "主题文档 - 内容"
date: 2022-12-16T21:23:40+08:00
lastmod: 2022-12-16T21:23:46+08:00
weight: 3
---

## 内容组织

```{title="文件目录"}
.
└── content
    └── posts
        └── my-first-post
            └── my-first-post.md
```

{{< admonition tip >}}
所有的文章都放在 content/posts 目录下，基础语法可以参考[Hugo Content Management](https://gohugo.io/content-management/)
{{< /admonition >}}

## 扩展 Shortcodes

## 语法高亮

### 代码

```go {title="main.go"}
package main

import "fmt"

func main() {
	fmt.Println("Hello Go")
}
```

### 脚本

```shell {title="安装脚本"}
go install github.com/gohugoio/hugo@latest
```

### 输出

```output {title="输出"}
total 72
drwxr-xr-x   3 langwan  staff     96 12 16 07:06 assets
-rw-r--r--   1 langwan  staff    356 12 17 08:45 config.yaml
drwxr-xr-x   3 langwan  staff     96 12 16 05:50 content
drwxr-xr-x  13 langwan  staff    416 12 17 00:58 public
drwxr-xr-x   3 langwan  staff     96 12 16 05:50 resources
-rw-r--r--@  1 langwan  staff   5178 12 17 07:16 syntax.css
```

### github 代码

```go {github="https://github.com/langwan/chigo/blob/main/Hello/main.go"}

```

## 横幅

{{< admonition >}}
每天多喝一升水
{{< / admonition >}}

{{< admonition abstract >}}
每天多喝一升水
{{< / admonition >}}

{{< admonition  info >}}
每天多喝一升水
{{< / admonition >}}

{{< admonition tip >}}
每天多喝一升水
{{< / admonition >}}

## Bilibili

{{< bilibili BV1EG411M7jP >}}
