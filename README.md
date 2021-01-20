# ts-setup-2021-library

Latest TypeScript setup for 2021 building libraries with TSC + Babel.

[1. About](#1-about)  
[2. Usage](#3-usage)  
[3. What I Did](#3-what-i-did)  
&nbsp; &nbsp; [3-1. All NPM Packages Installed](#3-1-all-npm-packages-installed)  
&nbsp; &nbsp; [3-2. Babel](#3-2-babel)  
&nbsp; &nbsp; [3-3. ESLint + Prettier](#3-3-eslint--prettier)  
&nbsp; &nbsp; [3-4. TypeScript](#3-4-typescript)  
&nbsp; &nbsp; [3-5. Jest](#3-5-jest)  
&nbsp; &nbsp; [3-6. Other Useful Packages](#3-6-other-useful-packages)  
[4. LICENSE](#4-license)

&nbsp;

## 1. About

A sample TypeScript project using the latest tools in 2001.

### # Why TSC + Babel?

TSC and Babel have good sides.
TSC is good for checking static types.
Babel is good for transpiling to many targets.
For this project, we use TSC only for type checking,
and use Babel for transpilation.

### # Why TypeScript?

I have a complicated feeling toward TS.
For all the effort spent, I feel the benefits are not much.
I guess this is about *ROI* ("Return of Investment").
For instance, say, I spend 6 days for development.
Out of these 6 days, I struggle for 5 days on types.
Even with `@types/xxx`, this happens.
Though, all I wanted was to spend 6 full days on actual implementation.
With TS, I struggle for nothing.
TS is just not productive, I think...

I know you would argue it is all for the future benefit of eliminating bugs.
Well, I sort of agree with you, but partially.
In a nutshell, I think TS is not very friendly...
In TS, I spend time on ridiculous stuff that are otherwise so obvious in other statically typed languages.
When developing in Rust, I get a whole lot more.
Maybe, type inference in TS isn't great enough.
If I were told to use TS, I would rather use other languages.

Personally, just by harnessing JS with static types would not do any good.
JS is better off without TS...

Yet, I still use TS when I write:

(1) Server-Side API  
(2) Library

in another word, I prefer TS when the app is exposed to the public,
and when it needs explicity for others to read.


#### References

Don't use Typescript for your next project, here's why  
https://www.codementor.io/@r0zar/don-t-use-typescript-for-your-next-project-here-s-why-1afd52afla

7 really good reasons not to use TypeScript  
https://everyday.codes/javascript/7-really-good-reasons-not-to-use-typescript/

Here is why you might NOT want to use TypeScript — Part 3  
https://medium.jonasbandi.net/here-is-why-you-might-not-want-to-use-typescript-50ab0d225bdd

The TypeScript Tax. A Cost vs Benefit Analysis | by Eric Elliott  
https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b

TypeScript is a waste of time. Change my mind.  
https://dev.to/bettercodingacademy/typescript-is-a-waste-of-time-change-my-mind-pi8

&nbsp;

## 2. Usage

Review all these config files.
Please, take any ideas which may benefit for your own projects.  
(some essential tips are explained in _["3. What I Did"](#3-what-i-did)_)

```
babel.config.js
.eslintignore
.eslintrc.js
.gitignore
jest.config.ts
.prettierignore
.prettierrc.js
tsconfig.json
```

As for NPM scripts, let us look at what we have:

```
"scripts": {
  "pretty": "$npm_execpath pretty-quick",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx --quiet",
  "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
  "watch": "tsc src/index.ts --watch --noEmit",
  "test": "jest",
  "build:types": "tsc --emitDeclarationOnly",
  "build:js": "babel src --out-dir dist --extensions \".ts,.tsx\" --source-maps",
  "build": "rm -fR ./dist & $npm_execpath run build:types && $npm_execpath run build:js"
},
```

### `yarn pretty`

Lets you format codes. `pretty-quick` is an awesome tool to run `prettier` only for staged files (files that have changed).

### `yarn lint` or `yarn lint:fix`

Lets you check/fix agains ESLint rules.
We use `eslint-config-prettier` for Prettier and ESLint rules to co-exist
(although it filters out ESLint rules that conflict with that of Prettier).

### `yarn watch`

Constantly watches for changes, and warns against type violations.
In this project, TSC is used only for static types checking.
For transpilation, Babel is used instead.

### `yarn test`

Runs tests using Jest.  
Issue: No idea why I need `ts-node` while it should not. Please, someone help me out!

### `yarn build:types`

Uses TSC to produce `*.d.ts` (emitted to `/dist`).

### `yarn build:js`

Uses Babel to transpile ES6 codes (emitted to `/dist`).

### `yarn build`

Removes `/dist`. Builds them all.

&nbsp;


## 3. What I Did

Everything is in config files, and they are all explanatory,
but I will leave notes for some essential tips.


### 3-1. All NPM Packages Installed

```
yarn add ramda

yarn add --dev core-js@3 @babel/core @babel/cli @babel/runtime-corejs3 @babel/preset-env typescript @babel/preset-typescript @typescript-eslint/eslint-plugin prettier prettier-eslint pretty-quick eslint eslint-config-prettier eslint-plugin-prettier jest babel-jest ts-node @types/jest eslint-plugin-jest
```

### 3-2. Babel

- core-js@3
- @babel/core
- @babel/cli
- @babel/runtime-corejs3
- @babel/preset-env

```
yarn add --dev core-js@3 @babel/core @babel/cli @babel/runtime-corejs3 @babel/preset-env
```

### 3-3. ESLint + Prettier

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
filters out all the ESLint rules which conflict with Prettier.  
Also, in order to orchestrate ESLint and Prettier well, we want
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).  
When using
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier),
we also want to extend `plugin:prettier/recommended` in `.eslintrc.js`  
(so that `eslint-plugin-prettier` works well with `eslint-config-prettier`).

- prettier
- prettier-eslint
- pretty-quick
- eslint
- eslint-config-prettier
- eslint-plugin-prettier

```
yarn add --dev prettier prettier-eslint pretty-quick eslint eslint-config-prettier eslint-plugin-prettier
```

In `.prettierignore`, make sure to define `*.(js|ts)` files you want Prettier to ignore.

For React, consider the following plugins [as explained here](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#plugins)
(although they are not install for this project).

- eslint-plugin-json
- eslint-plugin-import
- eslint-plugin-react

### 3-4. TypeScript

- typescript
- @babel/preset-typescript
- @typescript-eslint/eslint-plugin

```
yarn add --dev typescript @babel/preset-typescript @typescript-eslint/eslint-plugin
```

I generated `tsconfig.json` by running the following from the command line:  
(as [TypeScript-Babel-Starter](https://github.com/Microsoft/TypeScript-Babel-Starter) suggests)

```
./node_modules/typescript/bin/tsc --init \
  --declaration \
  --allowSyntheticDefaultImports \
  --target esnext \
  --outDir dist \
  --moduleResolution node \
  --allowJs --isolatedModules \
  --lib es2015,dom

```

If you are using `babel.config.js` instead of `.babelrc`, you need to exclude all the `*.js` files.
Otherwise, `tsc` would create `*.d.ts` for these files, which worth nothing.

`tsconfig.json`

```
{
  ...
  ...
  },
  "exclude": [
    ".eslintrc.js",
    ".prettierrc.js",
    "babel.config.js"
  ]
}
```

To lint TypeScript codes, we use `typescript-eslint`.  
For `typescript-eslint` to go well with Prettier,
steps are explained
[here](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier).

### 3-5. Jest

- jest
- babel-jest
- ts-node
- @types/jest
- eslint-plugin-jest

```
yarn add --dev jest babel-jest ts-node @types/jest eslint-plugin-jest
```

By running the following, `jest` lets you generate `jest.config.ts` for you:

```
$ npx jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls and instances between every test? … yes
```

#### # Issue: `ts-node`

When I run `jest`, I get warning that I don't have `ts-node`,
so I had to install `ts-node`.
Is not the Babel's job?
I have no clue why I need `ts-node`...
Please, someone explain to me why...

&nbsp;


### 3-6. Other Useful Packages

FP (functional programming) is all about
[compose](https://ramdajs.com/docs/#compose).

- ramda

```
yarn add ramda
```

&nbsp;


## 4. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))
