<template>
  <div class="my-header-content">
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <h6>
      {{list.names}}
      <input type="text" v-model="list.names" @keyup.enter="addList" />
    </h6>
  </div>
  <ul>
    <li v-for="item in list.dataList" :key="item.id">
      <i :class="item.active?'my-actived':'my-disable'" />
      <span v-if="!item.active">
        <del>{{item.name}}-{{item.id}}</del>
      </span>
      <span v-else>{{item.name}}-{{item.id}}</span>
      <button v-if="!item.active" @click="handleChangeActive(item.id)">激活</button>
      <button v-else @click="handleChangeActive(item.id)">失活</button>
    </li>
  </ul>
  <div class="my-footer-list">
    <h6>合计： {{total}}条</h6>
  </div>
</template>

<script>
import { ref } from "vue";
import useAddList from "./useAddList.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const count = ref(1);
    const { list, addList, total, handleChangeActive } = useAddList();
    return { list, addList, total, count, handleChangeActive };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>
