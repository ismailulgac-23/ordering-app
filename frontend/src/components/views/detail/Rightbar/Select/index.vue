<template>
  <div class="flex flex-col">
    <div class="w-full h-auto border-b px-2 py-1">
      <h1 class="text-xl font-bold">{{ title }}</h1>
    </div>
    <ul class="flex flex-col gap-3 px-2 py-3">
      <li
        @click="onSelectItem(item)"
        v-for="(item, i) in items"
        :key="i"
        class="select-none cursor-pointer flex items-center gap-2"
      >
        <RadioBox :selected="getIsSelected(item.value)" />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import RadioBox from "@/components/shared/RadioBox.vue";
export default {
  components: { RadioBox },
  name: "Select",
  data() {
    const selectedData = this.selected;
    return {
      selectedData,
    };
  },
  methods: {
    onSelectItem({ name, value }) {
      this.selectedData = value;
    },
    getIsSelected(value) {
      return this.selectedData === value;
    },
  },
  watch: {
    selectedData(val) {
      this.$emit("handleChange", val);
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
