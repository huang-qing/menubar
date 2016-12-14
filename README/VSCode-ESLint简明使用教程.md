# Visual Studio Code ESLint 插件

## 安装ESLint vscode 插件

ESLint dbaeumer.vscode-eslint

## 安装ESLint

```sql
cnpm install -g eslint
cnpm install eslint-plugin-react --save-dev
cnpm install eslint-plugin-promise --save-dev
```

## settings.json 文件示例

F1调出控制台:

``` sql
>Open User Settings
```

配置VSCODE全局 settings.json:

``` json 
{
    // ESLint
    "eslint.autoFixOnSave": true,
    "eslint.options": {
        "rules": {
            "semi": 0
        }
    }
}
```

## .eslintrc.json 文件示例

~~~JSON
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
    }
}
~~~

## package.json 文件示例

~~~JSON
{
    "env": {
        "browser": true
    },
    "rules": {
        // Override our default settings just for this directory
        "eqeqeq": "warn",
        "strict": "off"
    }
}
~~~
