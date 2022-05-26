<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Главная страница</div>

                    <div class="card-body">
                        Контент главной страницы
                        <New/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import New from "./New";
    export default {
        components: {New},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
