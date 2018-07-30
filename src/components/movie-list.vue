<template>
    <div>
        <ul>
            <!-- foreach movies -->
            <li v-for="item in items"></li>
            <!-- group by date -->
            <div v-if></div>
            <div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <p>{{title}}</p>
                    <star></star>
                    <div>导演:{{}}</div>
                    <div>主演:{{}}</div>
                    <div>{{}}人看过</div>
                </div>
            </div>
        </ul>
        <loadmore></loadmore>
    </div>
</template>
<script>

</script>
<style scoped>
    
</style>