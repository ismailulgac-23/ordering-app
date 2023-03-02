<template>
  <div
    class="px-2 py-3 hover:bg-gray-100 border-b select-none cursor-pointer flex items-center gap-2"
  >
    <radio-box @click.stop="onSelectRadioBox" :selected="item.selected" />
    {{ item.name }}
  </div>
</template>

<script>
import RadioBox from "../../../../shared/RadioBox.vue";
export default {
  components: { RadioBox },
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSelectRadioBox() {
      this.item.selected = !this.item.selected;
    },
  },
};
</script>

<style></style>
