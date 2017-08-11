<template>
    <div class="hello">
        <h1 class="demo">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'hello'
            }
        },
        created(){
            console.log("created")
        }
    }
</script>
<style scoped>

</style>