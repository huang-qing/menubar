# Raphael（拉斐尔）

## 画箭头 

`Element.attr(…)`方法的`arrow-end`参数：

~~~
arrow-end string  
arrowhead on the end of the path. The format for string is <type>[-<width>[-<length>]].   
Possible types: classic, block, open, oval, diamond, none, width: wide, narrow, midium, length: long, short, midium.
~~~


~~~javascript
$(function () {

    // 在坐标（10,50）创建宽320，高200的画布  
    var paper = Raphael(0, 0, 3200, 2000);

    var line1 = paper.path("M100,200 L 200,400").attr({
        stroke: "red",
        "stroke-width": "2px",
        "arrow-end": "classic-wide-long"
    });

    var line2 = paper.path("M500,200 L 600,400").attr({
        stroke: "green",
        "stroke-width": "2px",
        "arrow-end": "classic-wide-long"

    });
    //
    if (Raphael.svg) {
        line1.node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-" + "red" + ")";
        line2.node.attributes["marker-end"].value = "url(#raphael-marker-endclassic-" + "green" + ")";
    }

});
~~~

箭头兼容性问题：

上面的代码创建了两个带箭头的path。在IE浏览器下，没有任何问题；在谷歌浏览器下，绿色的箭头是迟于红色箭头实例的，箭头会被后者的颜色所覆盖。

Raphael为箭头的`marker-end`属性设置了一个引用地址`url(#raphael-marker-endclassic55)`，这个是`classic-wide-long`属性自己生成的，而这个`raphael-marker-endclassic55`就存在于svg画布中。

解决方案：
+ Raphael 2.2.0 已修复这个问题
+ 之前的版本调整 addArrow 方法


