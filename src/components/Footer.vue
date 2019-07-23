<template>
  <div class="itemstatus">
    <button class="btnState" @click="sendStatus('All')">All</button>&nbsp;&nbsp;
    <button class="btnState" @click="sendStatus('Active')">Active</button>&nbsp;&nbsp;
    <button class="btnState" @click="sendStatus('Complete')">Complete</button>
  </div>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
    
    };
  },

  methods: {
    sendStatus(flag) {
        this.$store.commit("sendStatus",flag);
    }

  }
};
</script>

