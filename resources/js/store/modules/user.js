export default{
    state: {
        roles: '',
        header_links: '',
    },
    getters: {
        myRoles(state){
            return state.roles
        },
        myHeader_links(state){
            return state.header_links
        },
    },
    mutations: {
        updateMyRoles(state, roles){
            state.roles = roles
        },
        updateMyHeader_links(state, header_links){
            state.header_links = header_links
        },
    },
    actions: {
        async getMyRoles(ctx){
            const roles = await axios.get('api/register/roles')
            ctx.commit('updateMyRoles', roles.data)
        },
        async getMyHeaderLinks(ctx){
            const header_links = await axios.get('api/register/headerlinks')
            ctx.commit('updateMyHeader_links', header_links.data)
        }
    },
}
