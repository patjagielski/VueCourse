<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :goal="goal" ></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['ABC', 'DEF', 'GHI']
        }
    }
}
</script>