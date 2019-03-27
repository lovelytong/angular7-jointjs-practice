# 说明

在Angular7中使用jointJS的Demo
按照以下步骤安装依赖：

```
npm install jquery --save npm install @types/jquery --save-dev
```
```
npm install backbone --save npm install @types/backbone --save-dev
```
```
npm install jointjs --save npm install @types/jointjs --save-dev
```
```
npm install lodash@3.10.1 --save npm install @types/lodash@3.10.1 --save-dev
```

在angular.json中加入以下代码,即可以在组件中使用jointJs，使用方法可参考src目录下的代码


```"architect": {
        "build": {
            ...
            "styles": [
              "src/styles.scss",
              "./node_modules/jointjs/css/layout.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "../node_modules/jointjs/dist/joint.js"
            ],
            ...
          }
```          

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
