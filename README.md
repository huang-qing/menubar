# 菜单工具栏（word风格工具栏）

## VSCode Git

### 使用命令行工具添加远程仓库:

```git cmd
git remote add origin https://github.com/huang-qing/menubar.git
```

在git/config配置文件中,会添加以下配置信息：
```
[remote "orgin"]
	url = https://github.com/huang-qing/menubar.git
	fetch = +refs/heads/*:refs/remotes/orgin/*
```

### 使用命令行工具添加master分支描述或在git工具栏中点击Publish

```git cmd
git push -u orgin master
```

在git/config配置文件中,会添加以下配置信息：
```
[branch "master"]
	remote = orgin
	merge = refs/heads/master
```
----



## TASk

