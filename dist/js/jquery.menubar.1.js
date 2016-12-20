(function ($) {
    'use strict';
    jQuery.fn.menubar = function (options) {
        // 默认参数
        var defaults = {
                onclick: function (text, value, menuId) {
                    console.log('menubar click:' + ' text:' + text + ' value:' + value + ' menuId:' + menuId);
                },
                // [defaultItem]
                items: []
            },
            // 默认菜单项参数
            defaultItem = {
                text: '',
                value: '',
                icon: {
                    url: '',
                    class: ''
                },
                other: {},
                // big small small
                style: 'small',
                // defaultItem类型
                children: [],
                onclick: function (menu, text, value) {
                    console.log('menubar item click:' + 'text:' + text + 'value:' + value);
                }
            },
            // 合并参数
            settings = $.extend({}, defaults, options),
            // 通用onclick事件
            onclickInMenu = settings.onclick,
            // onclickInMenuItem,
            // 菜单数据
            items = settings.items,
            // 面板菜单数据
            itemsInPanel = [],
            // popup菜单数据
            itemsInPopup = [],
            // 创建工具栏项
            createItem = function (item, type, index) {
                var text = item.text,
                    style = item.style,
                    arrows = item.children && item.children.length > 0,
                    iconUrl = item.icon.url || '',
                    iconClass = !iconUrl ? item.icon.class || '' : '',
                    // itemIndex = data.length,
                    template;

                // data.push(item);

                template = ['<a href="#" class="menubar-item ',
                    'menubar-item-', style,
                    (arrows ? ' arrows ' : ''), '" data-index="', index, '">',
                    '  <span class="menubar-item-content" >',
                    '       ', (iconUrl ? '<img class="menubar-item-icon" src="' + iconUrl + '"/>' : ''),
                    '       ', (iconClass ? '<span class="menubar-item-icon ' + iconClass + '"/>' : ''),
                    '       <span class="menubar-item-text" >' + text + '</span>',
                    '   </span>',
                    '   ', (arrows ? '<span class="menubar-item-arrows ' + type + '" data-index="' + index + '" />' : ''),
                    '</a>'
                ];

                return template.join('');
            },
            createPanelItem = function (item, index) {
                var type = 'menubar-item-in-panel';

                return createItem(item, type, index);
            },
            createPopupItem = function (item, index) {
                var type = 'menubar-item-in-popup';
                return createItem(item, type, index);
            },
            // 创建面板分组标题
            createPanelTitle = function (item) {
                var text = item.text,
                    template = '<p class="menubar-panel-title">' + text + '</p>';

                return template;
            },
            // 创建面板分组菜单项
            createPanelContentItem = function (item) {
                var itemTemplate = '<li>' + createPanelItem(item, itemsInPanel.length) + '</li>';
                itemsInPanel.push(item);

                return itemTemplate;
            },
            // 创建面板分组菜单
            createPanelContent = function (items) {
                var template = ['<div class="menubar-panel-content" >'];

                if (items && items instanceof Array && items.length > 0) {
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = $.extend(true, {}, defaultItem, items[i]),
                            nextItem,
                            itemTemplate = ['<ul class="menubar-panel-content-group" >'];

                        items[i] = item;

                        if (item.style === 'big') {
                            item.style = 'panel-' + item.style || '';
                            // 大图标：放置一个
                            itemTemplate.push(createPanelContentItem(item, 'menubar-item-in-panel'));
                        } else {
                            // 小图标：放置两个
                            item.style = 'panel-' + item.style || '';
                            itemTemplate.push(createPanelContentItem(item));

                            nextItem = i + 1 < len ? $.extend(true, {}, defaultItem, items[i + 1]) : null;
                            if (nextItem && nextItem.style === 'small') {
                                nextItem.style = 'panel-' + nextItem.style || '';
                                itemTemplate.push(createPanelContentItem(nextItem));
                                ++i;
                                items[i] = nextItem;
                            } else {
                                itemTemplate.push('<li class="menubar-item-small-empty"></li>');
                            }
                        }

                        itemTemplate.push('</ul>');
                        template.push(itemTemplate.join(''));
                    }
                }

                template.push('</div>');

                return template.join('');
            },
            // 创建菜单面板
            createMenuPanel = function (items) {
                var template = [];
                if (items && items instanceof Array && items.length > 0) {
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i],
                            children = item.children;

                        template.push('<div class="menubar-panel-group ', (i + 1 !== len ? 'menubar-panel-line' : ''), '" >');
                        template.push(createPanelTitle(item));
                        template.push(createPanelContent(children));
                        template.push('</div>');
                    }
                }

                return template.join('');
            },
            // 创建菜单工具栏
            createMenu = function (elem, items) {
                var html = createMenuPanel(items) + '<div></div>';
                elem.addClass('menubar').append(html);
            },
            // 创建弹出菜单
            createPopupItems = function (items) {
                var template = ['<ul class="menubar-popup" >'];

                if (items && items instanceof Array && items.length > 0) {
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = $.extend(true, {}, defaultItem, items[i]),
                            itemTemplate;

                        item.style = 'popup-small';
                        itemTemplate = '<li>' + createPopupItem(item, i) + '</li>';
                        template.push(itemTemplate);
                    }
                }

                template.push('</ul>');

                return template.join('');
            };

        return this.each(function () {
            var elem = $(this),
                bindItemClickHandler = function (elem, item, onclickInMenu, itemsInPopup) {
                    var onclick = item.onclick || onclickInMenu;
                    if (typeof onclick === 'function') {
                        onclick.call(elem[0], item.text, item.value, item.other);
                    } else {
                        console.error('onclick event callback not a function!');
                    }
                    destroyPopup(itemsInPopup);
                },
                displayPopup = function (target, itemElem, item, isPanelItem, itemsInPopup, container) {
                    var popup,
                        offset,
                        position = {},
                        relativeElem,
                        containerTag = container[0].tagName.toLowerCase(),
                        itemIndex = parseInt(itemElem.attr('data-index'));

                    if (containerTag === 'body') {
                        destroyPopup(itemsInPopup);
                    }

                    // 创建popup弹出菜单
                    target.removeClass('hide').addClass('popup');
                    popup = itemElem.find('>.menubar-popup');
                    if (popup.length === 0) {
                        popup = $((createPopupItems(item.children)));
                    }

                    itemsInPopup.push({
                        popup: popup,
                        parentItem: item,
                        parentIndex: itemIndex,
                        parentArrows: target
                    });
                    popup.attr('data-parentIndex', itemIndex).appendTo(container);

                    if (isPanelItem) {
                        // 计算弹出位置
                        relativeElem = target.parent();
                        offset = relativeElem.offset();
                        // 在面板菜单中弹出的位置：下方
                        position = {
                            top: offset.top + relativeElem.height(),
                            left: offset.left
                        };
                    } else {
                        // 在popup弹出菜单弹出的位置：右方
                        position = {
                            top: '-12px',
                            left: '100%'
                        };
                    }

                    popup.css(position).show();

                    // 绑定弹出菜单over、out事件，显示、隐藏下级菜单
                    popup.find('.menubar-item.menubar-item-popup-small.arrows').hover(function () {
                        var elem = $(this),
                            target = elem.find('>.menubar-item-arrows'),
                            itemElem = target.closest('.menubar-item'),
                            item = getSelectItem(itemsInPanel, itemsInPopup, itemElem);

                        displayPopup(target, itemElem, item, false, itemsInPopup, elem);
                    }, function () {
                        var target = $(this).find('>.menubar-item-arrows'),
                            itemIndex = parseInt(target.attr('data-index'));
                        destroyPopup(itemsInPopup, itemIndex);
                    });
                },
                destroyPopup = function (popupList, currentActiveItemIndex) {
                    var popup;

                    if (popupList && popupList.length > 0) {
                        for (var len = popupList.length - 1, i = len; i >= 0; i--) {
                            var popupData = popupList[i],
                                arrows = popupData.parentArrows,
                                popupIndex = popupData.parentIndex;

                            popup = popupData.popup;
                            arrows.removeClass('popup').addClass('hide');
                            popup.hide().unbind().remove();
                            popupList.pop();

                            if (popupIndex === currentActiveItemIndex) {
                                break;
                            }
                        }
                    }
                },
                getSelectItem = function (itemsInPanel, itemsInPopup, itemElem) {
                    var list,
                        regPanelItem = /menubar-item-panel/,
                        itemClassName = itemElem.attr('class'),
                        parentIndex,
                        itemIndex = parseInt(itemElem.attr('data-index')),
                        item;

                    if (regPanelItem.test(itemClassName)) {
                        list = itemsInPanel;
                    } else {
                        // 查找弹出菜单对应的数据
                        parentIndex = parseInt(itemElem.closest('.menubar-popup').attr('data-parentindex'));

                        for (var i = 0, len = itemsInPopup.length; i < len; i++) {
                            item = itemsInPopup[i];
                            if (parentIndex === item.parentIndex) {
                                list = itemsInPopup[i].parentItem.children;
                                break;
                            }
                        }
                    }

                    return list[itemIndex];
                };

            // init
            createMenu(elem, items);

            // 菜单项点击事件
            $(document).bind('click', function (event) {
                var target = $(event.target),
                    className = target.attr('class'),
                    regItem = /menubar-item-content|menubar-item-icon|menubar-item-text/,
                    regArrows = /menubar-item-arrows/,
                    regPopup = /popup/,
                    regItemInPanel = /menubar-item-in-panel/,
                    isPopup,
                    isPanelItem,
                    item,
                    itemElem = target.closest('.menubar-item');

                if (regItem.test(className)) {
                    // 点击菜单项内容，执行函数
                    item = getSelectItem(itemsInPanel, itemsInPopup, itemElem);
                    bindItemClickHandler(elem, item, onclickInMenu, itemsInPopup);

                    return false;
                } else if (regArrows.test(className)) {
                    // 点击面板菜单下级菜单
                    isPopup = regPopup.test(className);
                    isPanelItem = regItemInPanel.test(className);
                    item = getSelectItem(itemsInPanel, itemsInPopup, itemElem);

                    if (!isPopup && isPanelItem) {
                        displayPopup(target, itemElem, item, true, itemsInPopup, $('body'));
                    } else {
                        destroyPopup(itemsInPopup);
                    }

                    return false;
                } else {
                    // 点击dom其他位置
                    destroyPopup(itemsInPopup);
                }
            });

            // // 监听DOM，销毁弹出菜单
            // $(document).bind('click', function (event) {
            //     // 点击dom其他位置
            //     destroyPopup(itemsInPopup);
            // });
        });
    };

    // 绑定事件：全局绑定一次
}(jQuery));
