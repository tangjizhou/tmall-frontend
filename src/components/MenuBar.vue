<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect"
               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link to="/login">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <router-link to="/useList">用户管理</router-link>
          </template>
          <el-menu-item index="2-1">用户查询</el-menu-item>
          <el-menu-item index="2-2">用户新增</el-menu-item>
          <el-menu-item index="2-3">用户删除</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">商品管理</el-menu-item>
        <el-menu-item index="5">商品分类</el-menu-item>
      </el-menu>
    </el-header>

    <el-container class="content-area">
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "HomeComponent",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>

  .el-menu--horizontal, .el-header {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .content-area {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
  }

</style>
