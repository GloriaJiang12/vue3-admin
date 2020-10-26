import { reactive } from "vue";
export function useCount() {
    const state = reactive({
        count: 1
    });
    function increment() {
        state.count++;
    }
    return {
        state,
        increment
    };
}
