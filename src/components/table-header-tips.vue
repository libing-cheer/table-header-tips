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
          h('promptMessages', {
            props: {
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
