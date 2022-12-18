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

在原有的语法的基础上增加了新的能力。

### 代码

```go {title="main.go"}
package main

import "fmt"

func main() {
	fmt.Println("Hello Go")
}
```

````markdown
```go {title="main.go"}
package main

import "fmt"

func main() {
	fmt.Println("Hello Go")
}
```
````

{{< admonition tip>}}
在原生的基础上增加了 title 属性，可以给每个高亮增加标题。
{{< / admonition >}}

### 脚本

```shell {title="安装脚本"}
CGO_ENABLED=1 go install --tags extended github.com/gohugoio/hugo@latest
```

````markdown
```shell {title="安装脚本"}
CGO_ENABLED=1 go install --tags extended github.com/gohugoio/hugo@latest
```
````

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

````markdown
```output {title="输出"}
total 72
drwxr-xr-x   3 langwan  staff     96 12 16 07:06 assets
-rw-r--r--   1 langwan  staff    356 12 17 08:45 config.yaml
drwxr-xr-x   3 langwan  staff     96 12 16 05:50 content
drwxr-xr-x  13 langwan  staff    416 12 17 00:58 public
drwxr-xr-x   3 langwan  staff     96 12 16 05:50 resources
-rw-r--r--@  1 langwan  staff   5178 12 17 07:16 syntax.css
```
````

### github 代码

```go {github="https://github.com/langwan/chigo/blob/main/Hello/main.go"}

```

````markdown
```go {github="https://github.com/langwan/chigo/blob/main/Hello/main.go"}

```
````

{{< admonition tip>}}
填写一个 github 属性就可以直接显示 github 上的代码，修改 github 上的代码会直接更新，无需修改文章。点中间的链接可以直接跳到 github 上的代码和仓库上。
{{< / admonition >}}

## 横幅

{{< admonition >}}
一个 **注意** 横幅
{{< / admonition >}}

{{< admonition abstract >}}
一个 **摘要** 横幅
{{< / admonition >}}

{{< admonition  info >}}
一个 **信息** 横幅
{{< / admonition >}}

{{< admonition tip >}}
一个 **技巧** 横幅
{{< / admonition >}}

{{< admonition success >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition question >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition warning >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition failure >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition danger >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition bug >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition example >}}
一个 **成功** 横幅
{{< / admonition >}}

{{< admonition quote >}}
一个 **成功** 横幅
{{< / admonition >}}

```markdown
{{</* admonition type=tip */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}

{{</* admonition abstract */>}}
一个 **摘要** 横幅
{{</* / admonition */>}}

{{</* admonition  info */>}}
一个 **信息** 横幅
{{</* / admonition */>}}

{{</* admonition tip */>}}
一个 **技巧** 横幅
{{</* / admonition */>}}

{{</* admonition success */>}}
一个 **技巧** 横幅
{{</* / admonition */>}}

{{</* admonition question */>}}
一个 **成功** 横幅
{{</* / admonition */>}}

{{</* admonition warning */>}}
一个 **成功** 横幅
{{</* / admonition */>}}

{{</* admonition failure */>}}
一个 **成功** 横幅
{{</* / admonition */>}}

{{</* admonition danger */>}}
一个 **成功** 横幅
{{</* / admonition */>}}

{{</* admonition bug */>}}
一个 **成功** 横幅
{{</* / admonition */>}}

{{</* admonition example */>}}
一个 **成功** 横幅
{{</* / admonition */>}}

{{</* admonition quote */>}}
一个 **成功** 横幅
{{</* / admonition */>}}
```

## Bilibili

{{< bilibili BV1EG411M7jP >}}

## figure

{{< figure src="./images/figure.jpg" title="雪国" >}}

```markdown
{{</* figure src="./images/figure.jpg" title="雪国" */>}}
```

```

```

```

```
