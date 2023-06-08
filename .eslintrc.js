module.exports = {
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": "false",
        "babelOptions": {
            "presets": [
                "module:@babel/preset-env",
                "module:@babel/preset-react"
            ]
        }
    },
    "rules": {
        "jsx-a11y/anchor-has-content": "off",
        "jsx-a11y/heading-has-content": "off",

        // Включены
        "max-len": ["warn", { "code": 180, "comments": 512 }],
        "func-names": ["warn", "as-needed"],
        "semi": ["warn", "always"],
        "semi-spacing": ["warn", {"before": false, "after": true}],
        "no-else-return": "warn",
        "no-prototype-builtins": "warn",
        "no-bitwise": "warn",
        "guard-for-in": "warn",
        "no-mixed-operators": "warn",
        "prefer-arrow-callback": "warn",
        "array-callback-return": "warn",
        "no-use-before-define": "warn",
        "one-var-declaration-per-line": "warn",
        "no-loop-func": "warn",
        "implicit-arrow-linebreak": ["warn", "beside"],
        "no-restricted-globals": ["warn", "event", "fdescribe"],
        "no-confusing-arrow": "warn",
        "react/no-deprecated": "warn",
        "no-nested-ternary": "warn",
        "react/function-component-definition": 0,
        "space-before-blocks": ["warn", { "functions": "always", "keywords": "always", "classes": "always" }],
        "max-classes-per-file": ["warn", 1],
        "class-methods-use-this": "warn",
        "nonblock-statement-body-position": ["warn", "beside"],
        "brace-style": "warn",
        "array-bracket-spacing": ["warn", "never"],
        "prefer-destructuring": ["warn", {"object": true, "array": false}],
        "no-multi-spaces": "warn",
        "block-spacing": "warn",
        "key-spacing": "warn",
        "comma-spacing": "warn",
        "padded-blocks": ["warn", "never"],
        "no-multiple-empty-lines": ["warn", {
            "max": 2,
            "maxBOF": 0,
            "maxEOF": 1
        }],
        "lines-between-class-members": ["warn", "always"],
        "react/jsx-fragments": ["warn", "syntax"],
        "eol-last": ["warn", "always"],
        "no-trailing-spaces": ["warn"],
        "space-before-function-paren": ["warn", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "no-lonely-if": "warn",
        "no-console": "warn",

        // Отключены
        "quotes": 0,
        "quote-props": 0,
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "no-plusplus": 0,
        "object-curly-newline": 0,
        "no-underscore-dangle": 0,
        "dot-notation": 0,
        "no-restricted-syntax": 0,
        "no-continue": 0,
        "operator-assignment": 0,
        "one-var": 0,
        "no-new": 0,
        "new-cap": 0,
        "no-alert": 0,
        "spaced-comment": [0, "always"],
        "prefer-template": [0],
        // Обязательные дефолтные пропсы нам не нужны, если параметр обязателен, это будет указано в типах.
        "react/require-default-props": 0,
        "import/named": 0,
        // Спорные
        "react/jsx-curly-newline": [0, "consistent"], // FIXME включить
        "jsx-quotes": [0], // FIXME включить
        "consistent-return": 0,
        "comma-dangle": [0, "never"], // FIXME включить
        "keyword-spacing": 0,
        "no-unused-expressions": 0,

        // TODO второй раунд добавления правил
        "react/sort-comp": [0], // FIXME включить
        "no-shadow": 0, // FIXME можно вклюить, но нужно править около 66 пунктов
        "operator-linebreak": [0, "after"], // FIXME включть
        "yoda": [0],
        "no-param-reassign": [0], // FIXME включить
        "no-await-in-loop": [0], // FIXME включить
        "import/no-cycle": "warn",
        "function-paren-newline": [0], // FIXME включить ?
        "indent": [0], // FIXME включить
        "prefer-const": [0],
        "object-curly-spacing": [0], // FIXME включить ?
        "prefer-promise-reject-warns": [0], // FIXME включить
        "space-infix-ops": [0], // ЗМ
        "object-property-newline": [0], // FIXME включить
        "curly": [0], // ЗМ
        "react/state-in-constructor": [0],
        "object-shorthand": [0], // FIXME включить
        "jsx-a11y/control-has-associated-label": [0],
        "react/jsx-props-no-spreading": [0, {
            "html": "enforce",
            "custom": "enforce",
            "explicitSpread": "ignore",
        }], // FIXME включить обязательно
        "no-unneeded-ternary": [0],
        "no-return-assign": [0], // FIXME включить
        "prefer-object-spread": [0], // FIXME включить

        // Не используем дефолтный экспорт, это приводит к путанице в именах компонентов.
        "import/prefer-default-export": "off",
        "react/destructuring-assignment": "off",

        // Данные с бека приходят не в camelcase, поэтому отключаем
        "camelcase": "off",

        // Не запрещаем писать в одну строку в jsx текст и переменные
        "react/jsx-one-expression-per-line": "off",

        // Не меняем state напрямую(только через setState)
        "react/no-direct-mutation-state": 2,
        // В setState используем prevState вместо this.state
        "react/no-access-state-in-setstate": 1,
        // Неиспользуемые поля в state
        "react/no-unused-state": 2,
        "react/prop-types": 0,
        // accessibility не поддерживается
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/label-has-for": "off",

        // не импортируем библиотеку целиком, только нужные функции/модули
        "no-restricted-imports": ["warn", {
            "paths": [{
                "name": "lodash",
                "importNames": ["_"],
            }],
        }],

        // количество условий в функции не должно быть больше 15 (ухудшает производительность и читаемость кода)
        "complexity": ["warn", 15],

        // обязательный default в конструкциях switch case
        "default-case": ["warn", { "commentPattern": "^skip\\sdefault" }],

        // безопасная проверка на null
        "no-eq-null": "warn",

        // не используем return await в функциях с async
        "no-return-await": "warn",

        // не присваиваем значения в переменную, уже равную этому значению
        "no-self-assign": "warn",

        // на случай сравнений вида x === x
        "no-self-compare": "warn",

        // убираем ненужные склеивания строк
        "no-useless-concat": "warn",

        // убираем лишний return
        "no-useless-return": "warn",

        // async функции должны содержать await
        "require-await": "warn",

        // убираем неиспользуемые переменные
        "no-unused-vars": "warn",

        // убираем дублирования в аргументах
        "no-dupe-args": "warn",

        // не оставляем пустые блоки кода и лишние скобки вокруг блоков кода
        "no-empty": "warn",
        "no-lone-blocks": "warn",

        // недостижимый код
        "no-unreachable": "warn"
    },
    "plugins": [
        "react",
    ],
    "extends": [
        "airbnb",
        "eslint:recommended",
        // "plugin:react-hooks/recommended",
    ],
    "env": {
        "browser": true,
        "jest": true,
    },
    "globals": {
        "page": true,
        "browser": true,
        "context": true,
    },
};
