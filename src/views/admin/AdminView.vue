<template>
  <div class="admin">
    
    <el-container>
      <el-aside :width="col ? '65px' : '200px'">
          <AdminAside :data="menu" :col="col" ></AdminAside>
      </el-aside>
      <el-container>
        <el-header>
            <AdminHeader :data="me" @foldQuest="fold" @logoutQuest="logout"></AdminHeader>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <AdminFooter></AdminFooter>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AdminAside from '@/components/content/admin/AdminAside';
import AdminHeader from '@/components/content/admin/AdminHeader';
import AdminFooter from '@/components/content/admin/AdminFooter';

import {getMenuRequest} from '@/request/admin/menuRequest';
import {
  getMeRequest,
  setLogoutRequest,

} from '@/request/auth/loginRequest';



export default {
  name: "AdminView",
  components:{
      AdminAside,
      AdminHeader,
      AdminFooter,
      
  },

  /**
   *   数据存储
   */
  data(){
    return{
      // 菜单数据
      menu:[],
      // 个人信息数据
      me:{},
      // 菜单折叠状态
      col:false,
    }
  },

  /**
   *   方法
   */
  methods:{

    /**
     *   获取菜单
     */
    getMenu(){
      getMenuRequest().then(res=>{
        this.menu = res.data;
        

      }).catch(err=>{

      })
    },

    /**
     *  获取个人信息
     */
    getMe(){
      getMeRequest().then(res=>{
        
        this.me = res;

      }).catch(err=>{

      })

    },

    /**
     *  折叠导航
     */
    fold(){
      this.col = !this.col;
    },

    /**
     *  注销
     */
    logout(){
      setLogoutRequest().then(res=>{
        this.$router.push('/');

         // 消息提示
          this.$message({
            message: '恭喜，注销成功',
            type: "success",
          });
      });
    }

    

  },

  /**
   *   页面初始化
   */
  created(){
     
    this.getMenu();
    this.getMe();
    

  },
  mounted(){
   
  }

};
</script>

<style scoped>
.el-header{
  padding: 0;
}
.el-footer {
  background-color: #333;
  color: rgb(255, 255, 255);
  text-align: center;
  
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  
}

.admin > .el-container {
  height: 100vh;
}


</style>
