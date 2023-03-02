<template>
  <div class="flex flex-col">
    <div class="w-full h-auto border-b px-2 py-1">
      <h1 class="text-xl font-bold">{{ title }}</h1>
    </div>

    <Draggable
      :list="items"
      :disabled="false"
      class="flex flex-col"
      ghost-class="ghost"
      :move="checkMove"
    >
      <template #item="{ element }">
        <Item :item="element" />
      </template>
    </Draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import Item from "./Item.vue";
export default {
  name: "Select",
  components: {
    Draggable,
    Item,
  },
  methods: {
    checkMove: function (e) {
      const { futureIndex: newIndex, index: oldIndex } = e.draggedContext;
      this.$emit("changedIndex", newIndex, oldIndex);
    },
  },
  watch: {
    selected(val) {
      this.$emit("onSelectItem", val);
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
  },
};
</script>

<style></style>
