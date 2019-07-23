<template>
  <div
    v-if="status==='All'||status==='Active'&&item.active===false||status==='Complete'&&item.active===true"
    class="item"
  >
    <span>{{item.id}}.</span>
    <input type="checkbox" class="checkbox" v-model="item.active" />

    <label :class="{finishItem:item.active}" @dblclick="editItem(item.id)">
      <span v-if="!item.isEdit">{{item.name}}</span>
      <span v-else>
        <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)" />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  computed: {
    status() {
      return this.$store.getters.getStatus;
    }
  },
  methods: {
    editItem(id) {
      this.$store.commit("editItem", id);
    },

    finishEdit(id) {
      this.$store.commit("finishEdit", id);
    }
  }
};
</script>

