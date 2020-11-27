<template>
    <div id="Comdtiy">
        <FootNav></FootNav>
          <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>

</template>
<script>
   import FootNav from "../components/FootNav";
export default {
     name: "Comdtiy",
        components: {
            FootNav
        }
}
</script>