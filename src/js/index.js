// 测试：基本
var settings = {
    onclick: function (text, value, menuId) {
        console.log('menubar click test');
    },
    autoLayout: true,
    items: [{
        text: '编辑',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印1',
            value: '',
            icon: {
                sprite: {
                    'default': {
                        small: 'sprite-16-bom-default',
                        big: 'sprite-24-bom-default'
                    },
                    hover: {
                        // small: 'sprite-16-bom-hover',
                        // big: 'sprite-24-bom-hover'
                    }
                },
                url: {
                    'default': {
                        small: '../image/bom16.png',
                        big: '../image/bom16.png'
                    },
                    hover: {
                        // small: '../image/bom24.png',
                        // big: '../image/bom24.png'
                    }
                }
            },
            // panel-big small popup-small
            style: 'big',
            // defaultItem类型
            children: [{
                    text: '打印1-1',
                    value: '',
                    icon: {
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
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-2',
                    value: '',
                    icon: {
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
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-3',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-4',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-5',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }

            ],
            onclick: function (text, value, menuId) {
                console.log('menubar item 打印1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
            }
        }, {
            text: '打印2',
            value: '',
            icon: {
                sprite: {
                    'default': {
                        small: 'sprite-16-bom-default',
                        big: 'sprite-24-bom-default'
                    },
                    hover: {
                        small: 'sprite-16-bom-hover',
                        big: 'sprite-24-bom-hover'
                    }
                },
                url: {
                    'default': {
                        small: '../image/bom16.png',
                        big: '../image/bom16.png'
                    },
                    hover: {
                        small: '../image/bom24.png',
                        big: '../image/bom24.png'
                    }
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [{
                    text: '打印2-1',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-2',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-3',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-4',
                    value: '',
                    icon: {
                        url: '../image/bom16.png',
                        class: '../'
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [{
                            text: '打印2-4-1',
                            value: '',
                            icon: {
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
                            // defaultItem类型
                            children: [],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-2',
                            value: '',
                            icon: {
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
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-3',
                            value: '',
                            icon: {
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
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-4',
                            value: '',
                            icon: {
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
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-5',
                            value: '',
                            icon: {
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
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-5',
                    value: '',
                    icon: {
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
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }

            ],
            onclick: function (text, value, menuId) {
                console.log('menubar item 打印2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
            }
        }, {
            text: '打印',
            value: '',
            icon: {
                url: {
                    'default': {
                        small: '../image/bom16.png',
                        big: '../image/bom16.png'
                    },
                    hover: {
                        // small: '../image/bom24.png',
                        // big: '../image/bom24.png'
                    }
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                sprite: {
                    'default': {
                        small: 'sprite-16-bom-default',
                        big: 'sprite-24-bom-default'
                    },
                    hover: {
                        // small: 'sprite-16-bom-hover',
                        // big: 'sprite-24-bom-hover'
                    }
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
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
            }
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {
            url: '../image/bom16.png',
            class: '../'
        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {

        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {

        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印',
        value: '',
        icon: {

        },
        // panel-big small popup-small
        style: 'small',
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {

            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }]

};

// 测试：测试多个menubar
var sencondSettings = $.extend(true, {}, settings),
    firstChildren = sencondSettings.items[0].children[0];

firstChildren.text = '测试2';
firstChildren.value = 'test2';
firstChildren.onclick = function (text, value) {
    console.log('menubar ' + text + ' click test');
};

// 测试：面板菜单布局测试
var testPanelLayout = {
    onclick: function (text, value, menuId) {
        console.log('menubar click test');
    },
    autoLayout: false,
    items: [{
        text: '编辑1',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印1',
            value: '',
            icon: {
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
            style: 'big',
            // defaultItem类型
            children: [{
                    text: '打印1-1',
                    value: '',
                    icon: {
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
                    // defaultItem类型
                    children: [],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-2',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-3',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-4',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印1-5',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印1-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }

            ],
            onclick: function (text, value, menuId) {
                console.log('menubar item 打印1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
            }
        }, {
            text: '打印2',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [{
                    text: '打印2-1',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-2',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-3',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-4',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [{
                            text: '打印2-4-1',
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
                                }
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-1 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-2',
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
                                }
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-3',
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
                                }
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-3 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-4',
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
                                }
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }, {
                            text: '打印2-4-5',
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
                                }
                            },
                            // panel-big small popup-small
                            style: 'small',
                            // defaultItem类型
                            children: [

                            ],
                            onclick: function (text, value, menuId) {
                                console.log('menubar item 打印2-4-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                            }
                        }

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-4 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }, {
                    text: '打印2-5',
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
                        }
                    },
                    // panel-big small popup-small
                    style: 'small',
                    // defaultItem类型
                    children: [

                    ],
                    onclick: function (text, value, menuId) {
                        console.log('menubar item 打印2-5 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
                    }
                }

            ],
            onclick: function (text, value, menuId) {
                console.log('menubar item 打印2 test click:' + 'text:' + text + 'value:' + value + 'menuId:' + menuId);
            }
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
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
                }
            },
            // panel-big small popup-small
            style: 'small',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印2',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [],
        onclick: null
    }, {
        text: '打印3',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印3-1',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印4',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
                url: '../image/bom16.png',
                class: '../'
            },
            // panel-big small popup-small
            style: 'big',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印5',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印6',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
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
            style: 'big',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }, {
        text: '打印7',
        value: '',
        icon: {
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
        // defaultItem类型
        children: [{
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            style: 'big',
            // defaultItem类型
            children: [

            ],
            onclick: null
        }, {
            text: '打印',
            value: '',
            icon: {
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
            // defaultItem类型
            children: [

            ],
            onclick: null
        }],
        onclick: null
    }]

};

// var option = {
//     onclick: function (text, value, menuId) {
//         console.log('menubar click test');
//     },
//     items: [{
//         text: '编辑1',
//         value: '',
//         icon: {
//             url: '../image/bom16.png',
//             class: '../'
//         },
//         // panel-big small popup-small
//         style: 'small',
//         // defaultItem类型
//         children: []
//     }]
// };

$('#menubar').menubar(settings);
$('#menubar-second').menubar(sencondSettings);
$('#menubar-testPanelLayout').menubar(testPanelLayout);
