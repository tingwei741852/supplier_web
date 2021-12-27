<template>
  <el-table-column
  :prop="col.prop"
  :label="col.label"
  :fixed="col.fixed"
  :key="col.key"
  >
    <template>
      <TreeTableColumn v-for="(item, index) in col.children"
                 :key="index"
                 :col="item"></TreeTableColumn>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TreeTableColumn',
  props: {
    col: {
      type: Object
    }
  }
}
</script>
