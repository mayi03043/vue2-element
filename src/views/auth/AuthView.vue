<template>
  <div class="auth">
    <div class="head"></div>
    <div class="main">
        <router-view></router-view>
    </div>
    
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
};
</script>

<style scoped>
.auth {
height: 100vh;
    width: 100vw;
  display: flex;
  flex-flow: column ;
  
}

.auth>.head{
    flex: 0;
}

.auth>.main{
    flex: 40;
}
.auth>.foot{
    flex: 0;
    background-color: black;
}

</style>
