<template>
  <div class="px-2 py-3 w-full flex flex-col gap-3">
    <SaveButton />
    <PrintButton />
  </div>
</template>

<script>
import SaveButton from "./SaveButton.vue";
import PrintButton from "./PrintButton.vue";
export default {
  name: "Actions",
  components: {
    SaveButton,
    PrintButton,
  },
};
</script>

<style></style>
