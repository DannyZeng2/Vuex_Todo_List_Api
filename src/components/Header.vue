<template>
  <div>
    <div>
      <input id="additem" v-model="todoItem" type="text" />&nbsp;
      <button id="addBtn" @click="add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      todoItem: ""
    };
  },
  methods: {
    add(todoItem) {
      if (this.todoItem === "") {
        return;
      }

      
      this.$store.dispatch("addTodoItem", this.todoItem);
      this.todoItem = "";
    }
  }
};
</script>

<style scoped>
@import "../css/style.css";
</style>