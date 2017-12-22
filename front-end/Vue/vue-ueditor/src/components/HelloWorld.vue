<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div id="ueditor"></div>
        <div class="btn-group">
            <button @click="bold($event)">加粗</button>
        </div>

    </div>
</template>

<script>

    //     import 'static/UE/ueditor.config.js'
    //     import 'static/UE/ueditor.all.min.js'
    //     import 'static/UE/lang/zh-cn/zh-cn.js'
    //     import 'static/UE/ueditor.parse.min.js'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            bold(event){
                event.stopPropagation()
                let $boldBtn = $("#edui8_body")
                $boldBtn.click()
                setTimeout(function () {
                    if($("#edui8_state").hasClass("edui-state-checked")){
                        console.log("checked")
                        $(event.currentTarget).focus()
                    }
                },200)


            },
            initEditor(){
                let $boldBtn = $("#edui8_state")
                if($boldBtn.hasClass("edui-state-checked")){

                }
            }
        },
        mounted() {
            const _this = this;
            this.editor = UE.getEditor("ueditor"); // 初始化UE
            this.editor.addListener("ready", function () {
                _this.editor.setContent("test"); // 确保UE加载完成后，放入内容。
            });

        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #ueditor {
        width: 800px;
        margin: 0 auto;
    }

    .btn-group {
        width: 800px;
        margin: 10px auto;
    }

    button {
        width: 80px;
        height: 30px;
        margin: 10px;
    }
</style>
