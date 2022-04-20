<template>
  <div class="TreeTable">
    <el-table :data="data" style="width: 100%" element-loading-text="計算中..."  v-loading="loading" v-if="show" @selection-change="handleSelectionChange">
       <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="操作"
          width="55">
          <template slot-scope="scope">
           <el-tooltip class="item" effect="dark" content="編輯" placement="right"><i class="el-icon-edit" @click="editfunction(scope.$index)"></i></el-tooltip>
           <el-tooltip class="item" effect="dark" content="刪除" placement="right"><i class="el-icon-delete" @click="deletefunction(scope.$index)"></i></el-tooltip>
        </template>
        </el-table-column>
      <TreeTableColumn v-for="(item,index) in col" :key="index" :col="item"></TreeTableColumn>
    </el-table>
  </div>
</template>

<script>
import TreeTableColumn from './TreeTableColumn'
export default {
  components: {
    TreeTableColumn
  },
  props: {
    col: {
      type: Array
    },
    data: {
      type: Array
    },
    loading: {
      type: Boolean
    },
    indexMethod: {
      type: Number
    },
    editfunction: {
      type: Function
    },
    deletefunction: {
      type: Function
    },
    show: {
      type: Boolean
    },
    handleSelectionChange: {
      type: Function
    }
  }
}
</script>
<style  lang="scss">
  i {
    cursor: pointer;
  }
  i:hover {
    color: rgb(127, 16, 132);

  }
</style>
