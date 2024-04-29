<template>
  <el-tabs value="name1">
    <el-tab-pane label="平台菜单" name="name1">
      <managerMenu></managerMenu>

    </el-tab-pane>
    <el-tab-pane label="店铺菜单" name="name2">
      <storeMenu></storeMenu>

    </el-tab-pane>
  </el-tabs>
</template>
<script>

import managerMenu from "./menu";
import storeMenu from "./storeMenu";

export default {
  components: {
    managerMenu, storeMenu
  },

}
</script>
