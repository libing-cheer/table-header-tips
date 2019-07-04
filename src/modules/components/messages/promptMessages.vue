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