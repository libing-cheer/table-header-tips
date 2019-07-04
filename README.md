# table-header-tips

应用 element 中的 table 组件，自定义表头 Tooltip 文字提示。

## 安装依赖 
``` bash
yarn install
```

## 运行命令 ✅
``` bash
yarn run serve
```

## 编译打包命令 📦
``` bash
yarn run build
```


### 效果图

![效果图](https://raw.githubusercontent.com/libing-cheer/table-header-tips/master/src/assets/tooltip.png)

### 引用 element-ui
``` bash
npm install element-ui
```
在 main.js 中引入
``` javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

### 增加全局组件 promptMessages 并在全局引用

在 src -> modules -> components -> messages 中增加 promptMessages 组件及 index.js文件

promptMessages 组件
``` html
<template>
  <div class="tooltip">
    <el-tooltip effect="dark" placement="right"> 
      <div slot="content">
        <!-- 插槽，可提供多行的提示信息 -->
        <!-- 全局组件，这里是配置图标icon和提示信息的地方 -->
        <!-- 在其他组件中引用方式详见 table-header-tips.vue 组件中的 renderHeaderMethods 方法 -->
        <p v-for="(item, index) in messages" :key="index">{{item}}</p>
      </div>
      <i class="el-icon-info" style="color:#409eff;margin-left:5px;"></i>
    </el-tooltip>
  </div>
</template>
<script>
export default {
    name: 'promptMessages',
    data() {
      return {};
    },
    props: {
      messages: {
        type: Array,
        default() {
          return [];
        }
      }
    }
}
</script>
```

index.js 文件

``` javascript 
import promptMessages from './promptMessages.vue';

/* istanbul ignore next */
promptMessages.install = function (Vue) {
  Vue.component(promptMessages.name, promptMessages);
};

export default promptMessages;
```

在 utils 文件夹📁下，新增 components.js 用于 引入全局组件
components.js 文件

``` javascript 
/**
 * Created by Administrator on 2017/12/30 0030.
 * 所有自定义全局组件在此引入
 */
import Vue from 'vue';
import promptMessages from '@/modules/components/messages';
Vue.use(promptMessages); // 表头提示自定义提示信息组件
```
最后在 main.js 中引入 components.js 文件即可全局使用 promptMessages 组件。
``` bash 
import '@/utils/components.js'; // 自定义组件 js
```

### table-header-tips 组件 自定义表头方法 renderHeaderMethods

应用了 element table 组件的 render-header（列标题 Label 区域渲染使用的 Function）。

``` html
<template>
  <div class="table-header-tips"> 
    <el-table 
          :data="tableData" style="width: 100%" 
          stripe
          border>
      <el-table-column 
              prop="date" 
              label="日期" 
              width="180"
              :show-overflow-tooltip="true"
              align="center"
              >
      </el-table-column>
      <el-table-column 
              prop="name" 
              label="姓名" 
              width="180"
              :show-overflow-tooltip="true"
              align="center">
      </el-table-column>
      <el-table-column 
              prop="address" 
              label="地址"
              :show-overflow-tooltip="true"
              :render-header="renderHeaderMethods">
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  name: "tableHeaderTips",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "SlideShare Inc., 490 2nd St, Suite 300, San Francisco, CA 94107"
        },
        {
          date: "2016-05-04",
          name: "李小虎",
          address: "Room 201,No.34,Lane 125,XiKang Road(South),HongKou District"
        },
        {
          date: "2016-05-01",
          name: "赵小虎",
          address: "Room 702, 7th Building, Hengda Garden, East District, Zhongshan"
        },
        {
          date: "2016-05-03",
          name: "黑小虎",
          address: "Room 403,No.37,ShiFan Residential Quarter,BaoShan District"
        }
      ]
    };
  },
  methods: {
    // 自定义表格
    // 例如：给表头 地址 加一个 icon，鼠标移入icon展示提示信息
    renderHeaderMethods(h, {column}) {
      return h(
        'div', {
          style: 'display:flex;margin:auto;'
        },
        [
          h('span', column.label),
          h('promptMessages', { // 引用 promptMessages 全局组件
            props: {
                // messages 里面配置的信息即为 Tooltip 提示信息
              messages: [
                '地址提示信息，以下地址有中国🇨🇳和澳洲🇦🇺请仔细查看。'
              ]
            }
          })
        ]
      )
    }
  }
};
</script>
<style>
.table-header-tips {
  width: 1000px;
  margin: 50px auto;
}
</style>
```

