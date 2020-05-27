# NgWyy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

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

# angular8学习笔记
## 学习章节
### 未看章节
1:  3-3、3-4

### 目前进度
3-7resolve守卫


##  @NgModule
/*@NgModule装饰器, @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用*/

@NgModule({

  declarations: [    /*声明当前项目运行的的组件*/

    AppComponent, NewsComponent, HomeComponent, HeaderComponent

  ],

  imports: [  /*引入当前模块运行依赖的其他模块*/

    BrowserModule

  ],

  providers: [],  /*注入项目所需要的服务*/

  bootstrap: [AppComponent]    /* 指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用  ，这里一般写的是根组件*/

})


