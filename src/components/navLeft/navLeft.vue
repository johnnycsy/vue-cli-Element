<template>
  <div class="navleft">

    <el-menu class="nav-left" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <div v-for="(item,index) in val.navList" :key="index">
        <el-menu-item :index="item.key" v-if="item.child==false" @click="navLink(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu :index="item.key" v-if="item.child">
          <span slot="title"><i :class="item.icon"/>{{item.name}}</span>
          <div v-for="(items,indexs) in item.child" :key="indexs" @click="navLink(items)">
            <el-menu-item :index="items.key">{{items.name}}</el-menu-item>
          </div>
        </el-submenu>
      </div>
    </el-menu>

  </div>
</template>

<script>
import page from '@/components/navLeft/page'

export default page
</script>

<style scoped>
@import "navLeft.css";
</style>
