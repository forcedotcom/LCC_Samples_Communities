<template>
  <el-table
    :data="tableData"
    empty-text="No Data Yet"
    stripe >
    <el-table-column
      prop="Id"
      label="Id"
      width="180" />
    <el-table-column
      prop="Name"
      label="Name"
      width="180" />
    <el-table-column
      prop="Type"
      label="Type"
      width="180" />
    <el-table-column
      prop="NumberOfEmployees"
      label="Number Of Employees"
      width="180" />
  </el-table>
</template>

<script>
  export default {
    name: 'ElementTable',
    props: ['tableData']
  }
</script>
