<template>
    <div>
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">
                        <h2 class="heading-section">Авторизация</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-7 col-lg-5">
                        <div class="login-wrap">
                            <form autocomplete="off" @submit.prevent="login()" method="post" class="login-form">
                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" id="email" class="form-control" placeholder="user@example.com"
                                    v-model="form.email"
                                    :class="{invalid: ($v.form.email.$dirty && !$v.form.email.required) || ($v.form.email.$dirty && !$v.form.email.email)}">
                                    <small
                                    class="helper-text invalid"
                                     v-if="$v.form.email.$dirty && !$v.form.email.required"
                                    >Поле Email не должно быть пустым</small>
                                    <small
                                    class="helper-text invalid"
                                    v-else-if="$v.form.email.$dirty && !$v.form.email.email"
                                    >Введите корретный Email</small>
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" class="form-control"
                                    v-model="form.password"
                                    :class="{invalid: ($v.form.password.$dirty && !$v.form.password.required) || ($v.form.password.$dirty && !$v.form.password.email)}">
                                    <small
                                    class="helper-text invalid"
                                    v-if="$v.form.password.$dirty && !$v.form.password.required"
                                    >Введите пароль</small>
                                    <small
                                      class="helper-text invalid"
                                      v-else-if="$v.form.password.$dirty && !$v.form.password.minLength"
                                    >Пароль должен быть {{$v.form.password.$params.minLength.min}} символов. Сейчас он {{form.password.length}}</small>
                                </div>
                                <div class="form-group mt-4">
                                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import {mapGetters, mapActions} from 'vuex'

export default{

    data:function(){
        return{
            form:{
                email:'',
                password:'',
            },
            errors:[],
        }
    },
    validations: {
        form:{
            email: {email, required},
            password: {required, minLength: minLength(6)}
        }

    },
    methods:{
        login(){
            if (this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', this.form)
                .then(response =>{
                    localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                    this.$router.push({name:'cabinet'});
                })
                .catch(error =>{
                    console.log(error.response);
                })
            })
        }
    }
}
</script>
