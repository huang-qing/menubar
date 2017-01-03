# 菜单工具栏（word风格工具栏）

word风格的菜单工具栏，支持多级菜单。

兼容IE8以上。

## 展示示例

![menu panel](https://github.com/huang-qing/menubar/raw/master/README/2017-01-03_115215_menuPanel.png)

![menu popup](https://github.com/huang-qing/menubar/raw/master/README/2017-01-03_115351_menuPopup.png)

## 参数

~~~javascript
var option = {
    onclick: function (text, value, menuId) {
        console.log('menubar click test');
    },
	// defaultItem类型
    items: [{
        text: '编辑1',
        value: '',
        icon: {
            url: '../image/bom16.png',
            class: '../'
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: []
    }]
};
~~~



