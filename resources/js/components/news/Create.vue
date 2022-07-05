<template>
    <div>
        <form @submit.prevent="saveNews()">
            <div class="modal-body">
                <div class="block">
                    <label for="name"><b class="text-danger">*</b><b>Наименование новости</b></label>
                    <input autocomplete="off" id="name" class="form-control" type="text" v-model="form.title">
                </div>

                <div class="block">
                    <label for="api_url"><b class="text-danger">*</b><b>Экшин новости:</b></label>
                    <input autocomplete="off" id="api_url" class="form-control" type="text" v-model="form.action">
                </div>
                <div class="block">
                    <label for="description"><b>Описание новости:</b></label>
                    <textarea autocomplete="off" name="description" v-model="form.text" id="description" class="form-control"/>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="$emit('close-modal')">Отмена</button>
                <button id="add" type="submit" class="btn btn-primary">ОК</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Create",
        data:function(){
            return {
                form:{
                    title:'',
                    text:'',
                    action:'',
                },
            }
        },
        methods: {
            async saveNews() {
                console.log(23232);
                const new_dictionary = await axios.post('api/news/store', {title: this.form.title, text: this.form.text, action: this.form.action})
                .then(response => {
                    this.$emit('close-modal', 'success');
                })
                    .catch(error => {
                        console.log(error);
                    })

            }
        },

    }
</script>

<style scoped>

</style>
