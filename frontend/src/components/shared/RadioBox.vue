<template>
  <div :class="getBoxClasses"></div>
</template>

<script>
export default {
  name: "RadioBox",
  props: {
    selected: {
      required: true,
    },
  },
  computed: {
    getBoxClasses() {
      return [
        "w-7 h-7 rounded-md border",
        {
          "border-gray-200": !this.selected,
          "border-black": this.selected,
          "bg-black": this.selected,
          "bg-transparent": !this.selected,
        },
      ];
    },
  },
};
</script>

<style></style>
