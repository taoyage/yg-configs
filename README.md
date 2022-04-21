# yg-configs 🛠📦

![license](https://img.shields.io/github/license/taoyage/yg-configs)

CLI toolbox for common scripts for my front-end projects

</div>

---

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
    -   [config prettier](#config-prettier)
    -   [config eslint](#config-eslint)
    -   [config commitlint](#config-commitlint)
    -   [config lintstaged](#config-lintstaged)
    -   [config stylelint](#config-stylelint)
    -   [config postcss](#config-postcss)
-   [example](https://github.com/taoyage/yg-configs/tree/master/example)

## Installation

```javascript
$ npm install @taoyage/configs --save-dev
or
$ pnpm install @taoyage/configs -D
```

## Usage

This can be a very helpful way to make editor integration work for tools like ESLint，babel，prettier，commitlint which require project-based configuration to be present to work.

### config prettier

if we were to do this for prettier, you could create an .prettierrc.js with the contents of

```javascript
module.exports = require('@taoyage/configs/prettier');
```

### config eslint

if we were to do this for eslint of typescript react project, you could create an .eslintrc.js with the contents of

```javascript
module.exports = require('@taoyage/configs/eslint-ts');
```

create tsconfig.json with the contents of

```json
{
    "extends": "@taoyage/configs/shared-tsconfig",
    "compilerOptions": {},
    "exclude": [],
    "include": []
}
```

### config commitlint

if were to do this for commitlint, you could create an .commitlintrc.js with the contents of

```javascript
module.exports = require('@taoyage/configs/commitlint');
```

### config lintstaged

if were to do this for lintstaged, you could create an .lintstagedrc.js with the contents of

```javascript
module.exports = require('@taoyage/configs/lintstaged');
```

### config stylelint

if were to do this for stylelint, you could create an .stylelintrc.js with the contents of

```javascript
module.exports = require('@taoyage/configs/stylelint');
```

### config postcss

if were to do this for postcss, you could create an postcss.config.js with the contents of

```javascript
module.exports = require('@sk/configs/postcss');
```

### TODO

-   [x] eslint config
-   [x] tsconfig
-   [x] prettier
-   [x] commitlint config
-   [x] lintstage config
-   [x] stylelint config
-   [ ] swc config
-   [ ] babel config
