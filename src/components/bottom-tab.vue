<template>
    <router-link tag="div" v-for="(tab,index) in tabs" :key="index" to="/{{tab.name}}">
        <span>
            <i></i>
        </span>
        <span>{{tab.name}}</span>
    </router-link>
</template>
<script>

</script>
<style>
    
</style>