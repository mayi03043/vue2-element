<template>
  <div class="admin-aside" :data="data" >
      <div class="logo">
          <h1>Logo</h1>
      </div>
    <el-menu
      :collapse-transition	="false"
      :collapse = "col"
      default-active="5"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      >
      <el-submenu :index="arr.id.toString()" v-for="arr in data">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{arr.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.id.toString()" v-for="item in arr.children" @click="menuClick(item.path)">{{item.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      
      
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminAside",
  props:{
      data:Array,
      col:Boolean,
  },
  methods:{
      menuClick(path){
          this.$router.push('/admin'+path);
      },
      
  }
};
</script>

<style scoped>
.admin-aside{
    height: 100%;
    
    background-color: #545c64;
    
}
.admin-aside>.logo{
    background-color: #545c64;
    height: 60px;
}
.admin-aside>.logo>h1{
    margin: 0;
}

.admin-aside>.el-menu{
    border: none;
}
</style>
