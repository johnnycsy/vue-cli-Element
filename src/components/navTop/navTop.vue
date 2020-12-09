<template>
  <div class="nav-top">
    <div class="padding">
      <el-row>
        <el-col :span="12">
          <i class="el-icon-edit"></i>
          <span class="padding-left">left value add</span>
        </el-col>
        <el-col :span="12" class="align-right">
          <span class="padding-right">right value add</span>
          <i class="el-icon-share"></i>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import navTop from '@/components/navTop/navTop'

export default navTop
</script>

<style scoped>
@import "navTop.css";
</style>
