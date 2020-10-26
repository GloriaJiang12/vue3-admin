<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">增{{ state.count }}</button>
  </div>
</template>
<script>
import { useCount } from "./../hooks/useCount";
export default {
  setup() {
    let { state, increment } = useCount();

    return {
      state,
      increment
    };
  }
};
</script>
