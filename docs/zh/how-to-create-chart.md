
# 如何使用Echarts创建chart

1. 在你想使用的module中导入模块
    
    ```
    import { NgxEchartsModule } from 'ngx-echarts
    ```

1. 在html加入带echarts属性的

    ```
    <div 
      echarts 
      [options]="chartOption" 
      class="demo-chart" 
      [loading]="true" 
      [merge]="updateOptions"
    >
    </div>
    ```
    

1. options：是默认的配置，这个配置就是一个echarts的标准配置。

1. merge：如果chart数据是一直更新的，需要使用该属性，更新该属性，就能更新chart。




