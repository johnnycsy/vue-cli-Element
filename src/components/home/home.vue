<template>
  <div class="app-content bg-white">

    <!--icon-->
    <div class="margin-tb">
      <i class="el-icon-edit margin-right"></i>
      <i class="el-icon-share margin-right"></i>
      <i class="el-icon-delete margin-right"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <div class="margin-bottom padding box-shadow">
      <el-row class="padding-top">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row class="padding-top">
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>

      <el-row class="padding-top">
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>

      <el-row class="padding-top">
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>

    <div class="padding margin">
      <template>
        <el-input-number v-model="num" class="margin-right"></el-input-number>
        <el-input-number size="medium" v-model="num" class="margin-right"></el-input-number>
        <el-input-number size="small" v-model="num" class="margin-right"></el-input-number>
        <el-input-number size="mini" v-model="num" class="margin-right"></el-input-number>
      </template>
    </div>

    <div class="margin padding box-shadow">
      <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" class="margin-right"> {{tag.name}}</el-tag>
    </div>

    <div class="margin padding">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>

    <div class="margin padding box-shadow">
      <el-badge :value="12" class="item margin-right">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item margin-right">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item margin-right" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item margin-right" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12"/>
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3"/>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="margin padding">
      <template>
        <el-row class="demo-avatar demo-basic">
          <el-col :span="12">
            <div class="sub-title">circle</div>
            <div style="display: flex">
              <div class="block margin-right"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
              <div class="block margin-right" v-for="size in sizeList" :key="size">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="sub-title margin-right">square</div>
            <div style="display: flex">
              <div class="block margin-right"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
              <div class="block margin-right" v-for="size in sizeList" :key="size">
                <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
    </div>

    <div>
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </template>
    </div>
    <!--END -->
  </div>
</template>

<script>
import page from "@/components/home/page";

export default page
</script>

<style scoped>
@import "home.css";
</style>
