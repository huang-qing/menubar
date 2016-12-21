(function ($) {
    'use strict';
    // 创建工具栏项
    function createItem (item, type, index) {
        var text = item.text,
            style = item.style,
            arrows = item.children && item.children.length > 0,
            iconUrl = item.icon.url || '',
            iconClass = !iconUrl ? item.icon.class || '' : '',
            template;

        template = ['<a href="#" class="menubar-item ',
            'menubar-item-', style, (item.last ? ' menubar-item-' + style + '-last ' : ''),
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
    };
    // 创建面板菜单项
    function createPanelItem (item, index) {
        var type = 'menubar-item-in-panel';

        return createItem(item, type, index);
    };
    // 创建弹出菜单项
    function createPopupItem (item, index) {
        var type = 'menubar-item-in-popup';
        return createItem(item, type, index);
    };
    // 创建面板分组标题
    function createPanelTitle (item) {
        var text = item.text,
            template = '<p class="menubar-panel-title">' + text + '</p>';

        return template;
    };
    // 创建面板分组菜单项
    function createPanelContentItem (item, settings) {
        var itemsInPanel = settings.itemsInPanel,
            itemTemplate;

        itemTemplate = '<li>' + createPanelItem(item, itemsInPanel.length) + '</li>';
        itemsInPanel.push(item);

        return itemTemplate;
    };
    // 创建面板分组菜单
    function createPanelContent (items, settings) {
        var template = ['<div class="menubar-panel-content" >'];

        if (items && items instanceof Array && items.length > 0) {
            for (var i = 0, len = items.length; i < len; i++) {
                var item = $.extend(true, {}, defaultItem, items[i]),
                    nextItem,
                    itemTemplate = ['<ul class="menubar-panel-content-group" >'];

                item.last = i === len - 1;
                items[i] = item;

                if (item.style === 'big') {
                    item.style = 'panel-' + item.style || '';
                    // 大图标：放置一个

                    itemTemplate.push(createPanelContentItem(item, settings));
                } else {
                    // 小图标：放置两个
                    item.style = 'panel-' + item.style || '';
                    itemTemplate.push(createPanelContentItem(item, settings));

                    nextItem = i + 1 < len ? $.extend(true, {}, defaultItem, items[i + 1]) : null;
                    if (nextItem && nextItem.style === 'small') {
                        ++i;
                        nextItem.style = 'panel-' + nextItem.style || '';
                        nextItem.last = i === len - 1;
                        items[i] = nextItem;
                        itemTemplate.push(createPanelContentItem(nextItem, settings));
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
    };
    // 创建菜单面板
    function createMenuPanel (items, settings) {
        var template = [];
        if (items && items instanceof Array && items.length > 0) {
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i],
                    children = item.children;

                template.push('<div class="menubar-panel-group ', (i + 1 !== len ? 'menubar-panel-line' : ''), '" >');
                template.push(createPanelTitle(item));
                template.push(createPanelContent(children, settings));
                template.push('</div>');
            }
        }

        return template.join('');
    };
    // 创建菜单工具栏
    function createMenu (elem, items, settings) {
        var html = createMenuPanel(items, settings) + '<div></div>';
        elem.addClass('menubar menubar-panel').attr('data-menuId', settings.id).append(html);
    };
    // 创建弹出菜单
    function createPopupMenu (items, id) {
        var template = ['<ul class="menubar menubar-popup" data-menuId="', id, '">'];

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

    // 点击事件相关方法
    function itemHandler (menuElem, item, onclickInMenu, settings) {
        var onclick = item.onclick || onclickInMenu;

        if (typeof onclick === 'function') {
            onclick.call(menuElem[0], item.text, item.value, item.other);
        } else {
            console.error('onclick event callback not a function!');
        }
    };
    // 显示弹出菜单
    function displayPopup (target, itemElem, item, isPanelItem, settings, container) {
        var popup,
            offset,
            position = {},
            relativeElem,
            itemIndex = parseInt(itemElem.attr('data-index')),
            itemsInPopup = settings.itemsInPopup;

        // 创建(获取)popup弹出菜单
        target.removeClass('menubar-item-arrows-hide').addClass('menubar-item-arrows-popup');
        popup = itemElem.find('>.menubar-popup');
        if (popup.length === 0) {
            popup = $((createPopupMenu(item.children, settings.id)));
            itemsInPopup.push({
                popup: popup,
                parentItem: item,
                parentIndex: itemIndex,
                parentArrows: target
            });
            popup.attr('data-parentIndex', itemIndex).appendTo(container);
        }
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
                item = getSelectItem(settings, itemElem);

            displayPopup(target, itemElem, item, false, settings, elem);
        }, function () {
            var target = $(this).find('>.menubar-item-arrows'),
                itemIndex = parseInt(target.attr('data-index'));
            destroyPopup(settings, itemIndex);
        });
    };
    // 销毁弹出菜单
    function destroyPopup (settings, currentActiveItemIndex) {
        var popup,
            popupList = settings.itemsInPopup;

        if (popupList && popupList.length > 0) {
            for (var len = popupList.length - 1, i = len; i >= 0; i--) {
                var popupSettings = popupList[i],
                    arrows = popupSettings.parentArrows,
                    popupIndex = popupSettings.parentIndex;

                popup = popupSettings.popup;
                arrows.removeClass('menubar-item-arrows-popup').addClass('menubar-item-arrows-hide');
                popup.hide().unbind().remove();
                popupList.pop();

                if (popupIndex === currentActiveItemIndex) {
                    break;
                }
            }
        }
    };
    // 销毁全部的弹出菜单
    function destroyAllPopup (settingsStore) {
        for (var i in settingsStore) {
            // 点击其他位置
            destroyPopup(settingsStore[i]);
        }
    };
    // 获取选中项数据
    function getSelectItem (settings, itemElem) {
        var list,
            regPanelItem = /menubar-item-panel/,
            itemClassName = itemElem.attr('class'),
            parentIndex,
            itemIndex = parseInt(itemElem.attr('data-index')),
            item,
            itemsInPanel = settings.itemsInPanel,
            itemsInPopup = settings.itemsInPopup;

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
    // 创建menubar编号
    function createMenubarId () {
        return 'menubar-' + (new Date()).getTime();
    };

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
        settingsStore = {};

    // 绑定点击事件：全局绑定一次
    $(document).bind('click', function (event) {
        var target = $(event.target),
            targetClassName = target.attr('class'),
            regItem = /menubar-item-content|menubar-item-icon|menubar-item-text|menubar-item /,
            regArrows = /menubar-item-arrows/,
            regPopup = /menubar-item-arrows-popup/,
            regItemInPanel = /menubar-item-panel/,
            regItemArrows = /arrows/,
            itemElem,
            itemClassName,
            isPopup,
            isPanelItem,
            item,
            menuId,
            currentSettings,
            onclickInMenu,
            menubarElem;

        // 菜单项点击
        if (regItem.test(targetClassName) || regArrows.test(targetClassName)) {
            itemElem = target.closest('.menubar-item');
            itemClassName = itemElem.attr('class');
            menubarElem = itemElem.closest('.menubar');
            menuId = menubarElem.attr('data-menuId');
            currentSettings = settingsStore[menuId];
            onclickInMenu = currentSettings._settings.onclick;
            isPanelItem = regItemInPanel.test(itemClassName);

            // 点击菜单项内容，执行函数
            item = getSelectItem(currentSettings, itemElem);
            // 点击菜单项内容，执行函数
            if (regItem.test(targetClassName)) {
                // 弹出菜单项,存在下级菜单，不执行
                if (!isPanelItem) {
                    if (regItemArrows.test(itemClassName)) {
                        return false;
                    }
                }

                itemHandler(currentSettings.menubarElem, item, onclickInMenu, currentSettings);
                destroyAllPopup(settingsStore);
                return false;
            } else if (regArrows.test(targetClassName)) {
                // 点击面板菜单下级菜单按钮
                isPopup = regPopup.test(targetClassName);
                if (!isPopup && isPanelItem) {
                    var container = $('body'),
                        containerTag = container[0].tagName.toLowerCase();
                    // 清除全部弹出菜单
                    if (containerTag === 'body') {
                        destroyAllPopup(settingsStore);
                    }
                    displayPopup(target, itemElem, item, true, currentSettings, container);
                }

                return false;
            }
        } else {
            destroyAllPopup(settingsStore);
        }
    });

    // 创建菜单
    jQuery.fn.menubar = function (options) {
        return this.each(function () {
            // 合并参数
            var _settings = $.extend({}, defaults, options),
                // 菜单数据
                items = _settings.items,
                // 当前元素
                elem = $(this),
                id = createMenubarId(),
                newSettings;

            // 数据持久化
            newSettings = {
                id: id,
                menubarElem: elem,
                _settings: _settings,
                itemsInPopup: [],
                itemsInPanel: []
            };
            settingsStore[id] = newSettings;

            // init
            createMenu(elem, items, newSettings);
        });
    };
}(jQuery));
