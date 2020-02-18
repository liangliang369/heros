<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <router-link to="/students" tag="li">学生档案</router-link>
            <router-link to="/heros" tag="li">英雄列表</router-link>
            <router-link to="/wuqi" tag="li">武器列表</router-link>
        </ul>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>
<style lang="scss">
@import './style/base.scss';
#app {
  width: 100%;
  height: 100%;
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    ul{
        li{
            height:28px;
            line-height: 28px;
            margin-top:10px;
            cursor: pointer;
        }
    }
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
   body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
