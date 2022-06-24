export default{
    state: {
        category_news_id: 1,
        title: 'Заголовок',
        action: 'URL',
        text: 'Информация',
        status: 0,
        sort: 1
    },
    getters: {
        category_news_id: state => state.category_news_id,
        title: state => state.title,
        action: state => state.action,
        text: state => state.text,
        status: state => state.status,
        sort: state => state.sort,

    },
    mutations: {
        updateCategoriesNews(state, category_news_id){
            state.category_news_id = category_news_id
        },
    },
    actions: {
        async getCategoriesNews(){
            const categories_news = await axios.get('api/news/categories-news');
            /*commit('updateCategoriesNews', )*/
        }
    },
}
