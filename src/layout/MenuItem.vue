<template>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <template :key="index" v-for="(item, index) in routes">
            <a-menu-item v-if="!item.children" :key="item.meta.key">
                <span>{{ item.meta.title }}</span>
            </a-menu-item>
            <template v-else>
                <a-sub-menu :key="'sub' + ind" v-for="(itm,ind) in item.children">
                    <template v-slot:title>
                        <span>
                            <span>{{ item.meta.title }}</span>
                        </span>
                    </template>
                    <a-menu-item :key="itm.meta.key">{{itm.meta.title}}</a-menu-item>
                </a-sub-menu>
            </template>
        </template>       
      </a-menu>
</template>
<script>
import { routes } from '@/router/index.js'
import { reactive, ref } from 'vue'
export default {
    name: 'MenuItem',
    setup(props, context) {
        const state = reactive({
            age: 14
        })
        const selectedKeys = ref([1])
        console.log ('江婉君(fairy) -->', 'menuItem', routes, props);
        console.log ('江婉君(fairy) -->','context',context);
        return {
            selectedKeys,
            state,
            routes
        }
    }
}
</script>