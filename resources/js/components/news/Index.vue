<template>
    <div>
        <div class="container">
            <button type="button" class="btn-create btn btn-outline-primary btn-unbordered" @click="openModal('newsCreate')">Добавить новость</button>
            <!-- Modal News create -->
            <b-modal id="newsCreate" title="Добавление элемента" hide-footer size="lg">
                <create
                    @close-modal="closeModal('newsCreate')"
                />
            </b-modal>
            <table class="table table-bordered table-hover mt-4">
                <tr>
                    <th>ID</th>
                    <th>Категория</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th>Дата создания</th>
                </tr>
                <tr v-for="(news_one, index) in news" :key="index">
                    <td>{{news_one.id}}</td>
                    <td>{{news_one.category_news_id}}</td>
                    <td>{{news_one.title}}</td>
                    <td>{{news_one.text}}</td>
                    <td>{{ news_one.status | status }}</td>
                    <td>{{ news_one.created_at}}</td>

                    <td nowrap>
                        <button type="button" class="btn-create btn btn-outline-primary btn-unbordered"  @click="removeNew(news_one.id)">Удалить</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Create from "./Create";

    export default {
        name: "Index",
        components:{Create},
        data: function(){
            return {
                news:[],
            }
        },
        methods:{
            async getNewsList(){
                const news = await axios.get('api/news/index');
                this.news = news.data;
            },
            async removeNew(id){
                await axios.delete('api/news/delete-new/'+id);
                this.getNewsList();
            },
            closeModal(id, type){
                if(id == 'newsCreate'){
                    this.$bvModal.hide('newsCreate')
                }
                    this.getNewsList();
            },
            openModal(id, dictionary){
                if(id == 'newsCreate') {
                    this.$bvModal.show(id)
                }
            },
        },
        filters: {
            status: function (status) {
                if(status == 1){
                    return "Активная";
                }else{
                    return "Архивная";
                }
            }
        },
        created(){
            this.getNewsList();
        }
    }
</script>

<style scoped>

</style>
