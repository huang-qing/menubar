# 菜单工具栏 jquery.menubar

仿word菜单工具栏风格的菜单控件，支持分组、支持多级下级菜单、支持自动调整菜单布局、支持全局事件绑定及菜单项事件绑定。

+ 分组：通过菜单项`items`数组数据的层级结构对工具栏菜单进行分组。

+ 多级菜单：顶层显示为分组标题，二级为面板菜单，之后的层级为弹出菜单。

+ 自动调整菜单布局：标准情况下菜单显示为普通的面板菜单，面板菜单中显示每个分组中全部的菜单项；
在宽度不够无法全部展示面板菜单项时，会将面板菜单分组自动调整为分组缩略图模式。

+ 事件绑定：通过全局`onclick`事件绑定默认的菜单点击事件；并且可以通过每个菜单项的`onclick`事件覆盖默认的全局事件。

## 展示示例


#### 标准的菜单工具栏

![menubar normal1](https://github.com/huang-qing/menubar/raw/master/README/2017-01-18_102704_normal1.png)

![menubar normal2](https://github.com/huang-qing/menubar/raw/master/README/2017-01-18_102739_normal2.png)

#### 缩略图式的菜单工具栏

![menubar thumbnail](https://github.com/huang-qing/menubar/raw/master/README/2017-01-18_102842_thumbnail.png)

![menubar thumbnail-panel](https://github.com/huang-qing/menubar/raw/master/README/2017-01-18_102953_thumbnail_panel.png)

#### 菜单工具栏下级弹出菜单

![menubar subMenu](https://github.com/huang-qing/menubar/raw/master/README/2017-01-18_103037_subMenu.png)


## 使用

在`dist`文件夹下，首先将`jquery`类库引入项目，然后引入`jquery.menubar`文件夹至项目中。

~~~html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>jquery.menubar demo</title>
</head>
<link rel="stylesheet" href="sass/index.css">
<link rel="stylesheet" href="jquery.menubar/sass/jquery.menubar.css">
<body>
    <div id="menubar" class="container"></div>
    <script src="js/jquery.js"></script>
    <script src="jquery.menubar/js/jquery.menubar.js"></script>
</body>

</html>

~~~

## 参数示例

~~~javascript
var settings = {
    onclick: function (text, value, menuId) {
        console.log('menubar click test');
    },
    autoLayout : true
	// defaultItem类型
    items: [{
        text: '编辑1',
        value: '',
        icon: {
                url: {
                    'default': {
                        small: '../image/bom16.png',
                        big: '../image/bom16.png'
                    },
                    hover: {
                        small: '../image/bom24.png',
                        big: '../image/bom24.png'
                    }
                },
                //或者
                sprite: {
                    'default': {
                        small: 'sprite-16-bom-default',
                        big: 'sprite-24-bom-default'
                    },
                    hover: {
                        small: 'sprite-16-bom-hover',
                        big: 'sprite-24-bom-hover'
                    }
                }
        },
        // panel-big small popup-small
        style: 'small',
        onclick : function( text , value ){}
        // defaultItem类型
        children: []
    }]
};
~~~

## Settings

### `onclick`

配置菜单默认的点击事件

### `autoLayout`

配置菜单是否自适应布局，默认为`true`。在浏览器窗口大小改变时，自动对工具栏菜单进行重新布局。

### `items`

配置每个菜单的具体的信息，是一个数组对象。

### `items`下的每个`item`

`text`:菜单项的显示值。

`value`:菜单项的编码值。

`icon`:菜单项的显示图标，是一个对象。其中`url`为图片的路径；`sprite`为雪碧圖的className，一般为雪碧图使用。`url`的优先级较高。

`style`:菜单的显示样式。`small`,`big`两个选项，默认为`small`。

`onclick`:菜单项的`onclick`事件，可以覆盖默认的全局事件。

`children`:配置此菜单项的下级对象，格式与`items`一致。


## javascript 调用 API

### 创建 jquery.menubar

~~~javascript

var settings={...};

$('#menubar').menubar(settings);
~~~

### 销毁 jquery.menubar

~~~javascript
$('#menubar').menubar('destroy');
~~~

### 重新布局 jquery.menubar

~~~javascript
$('#menubar').menubar('layout');
~~~

###开发

创建build
~~~
gulp build
~~~

开发环境
~~~
gulp develop
~~~



