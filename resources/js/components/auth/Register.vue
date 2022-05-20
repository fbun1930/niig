<template>
    <div>
        <form autocomplete="off" @submit.prevent="register" method="post">
            <div class="form-group" :class="{ 'has-error': error && errors.name }">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" v-model="form.name" required>
                <span class="help-block" v-if="errors.name">{{ errors.name }}</span>
            </div>
            <div class="form-group" :class="{ 'has-error': error && errors.email }">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="form.email" required>
                <span class="help-block" v-if="errors.email">{{ errors.email[0] }}</span>
            </div>
            <div class="form-group" :class="{ 'has-error': error && errors.password }">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="form.password" required>
                <span class="help-block" v-if="errors.password">{{ errors.password }}</span>
            </div>
            <div class="form-group" :class="{ 'has-error': error && errors.password_confirmation }">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="form.password_confirmation" required>
                <span class="help-block text-danger" v-if="errors.password">{{ errors.password_confirmation }}</span>
            </div>
            <button type="submit" class="btn btn-default" @click.prevent="saveForm()">Submit</button>
        </form>
        {{errors}}
    </div>
</template>

<script>

export default {
    data:function(){
        return{
            form:{
                name:'',
                email:'',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            console.log('send')
            axios.post('api/register', this.form)
            .then(prevent =>{
                console.log('saved')
                this.$router.push({ name: 'login' })
            })
            .catch(error => {
                
            })
        }
    }
}
</script>
<style scoped>
.has-error{
    border-color: red;
    
}
</style>
