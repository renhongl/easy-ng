

1. 在想使用的module或者shared module中导入对应的模块：

    ```
    import {MatButtonModule, MatCheckboxModule} from '@angular/material';

    @NgModule({
    ...
    imports: [MatButtonModule, MatCheckboxModule],
    ...
    })
    export class PizzaPartyAppModule { }
    ```

2. 修改material的主题颜色

* 在/src/style.scss文件里，修改style的路径
* 可以使用现成的一些样式文件：

    * `deeppurple-amber.css`
    * `indigo-pink.css`
    * `pink-bluegrey.css`
    * `purple-green.css`


3. 定义自己的颜色

    请访问该链接：[官网](https://material.angular.io/guide/theming#defining-a-custom-theme)