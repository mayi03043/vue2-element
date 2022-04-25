<template>
  <div class="admin-header" :data="data">
    <div class="fold" @click="foldClick"><i class="el-icon-s-fold"></i></div>
    
   <el-dropdown @command="commandClick">
  <el-button>
    {{data.name}}<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>注销</el-dropdown-item>
  
  </el-dropdown-menu>
</el-dropdown>
    
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
  props:{
    data:Object,
  },
  methods:{

    // 发送注销请求
    commandClick(){
      this.$emit('logoutQuest');
    },

    // 发送折叠请求
    foldClick(){
      this.$emit('foldQuest');
    }


  },
};
</script>

<style scoped>
.admin-header{
  height: 100%;
  padding: 0px 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.fold{
  font-size: 30px;
}

.fold:hover{
  color: #ffd04b;
}

 .el-dropdown-link {
    cursor: pointer;
    
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
