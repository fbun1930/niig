<template>
    <div class="container">
        <div class="content-sidebar">
            <article class="post post-2644 page type-page status-publish hentry" itemscope="" itemtype="#">
                <meta itemscope="" itemprop="mainEntityOfPage" itemtype="#" itemid="#">
                <h1 itemprop="headline">Сертификаты, лицензия, аккредитация</h1>
                <font-awesome-icon :icon="['fa', 'file-pdf']" size="lg" :style="{ color: 'red' }"/>
                <a href="resources/assets/Certificate/cert_mo.pdf" target="_blank">Лицензия на осуществление медицинской деятельности</a>
                <br>
                <font-awesome-icon :icon="['fa', 'file-pdf']" size="lg" :style="{ color: 'red' }"/>
                <a> Лицензия на осуществление образовательной деятельности</a>
                <br>
                <font-awesome-icon :icon="['fa', 'file-pdf']" size="lg" :style="{ color: 'red' }"/>
                <a> Подтверждение соответствия института требованиям по разработке нормативных и методических
                    рекомендаций</a>
                <div class="department-buttons">
                    <div class="top">
                    </div>
                </div>
                <div id="app">

                </div>
            </article>


            <aside class="sidebar sidebar-primary" aria-label="Основной сайдбар" itemscope="itemscope">
                <div class="widget widget_nav_menu">
                    <div class="widgettitle h2">Пациентам</div>
                    <ul class="menu">
                        <li id="menu-item-151"
                            class="menu-item menu-item-type-post_type menu-item-object-post menu-item-151"><a href="">Как
                            попасть на консультацию</a></li>
                        <li id="menu-item-7461"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7461"><a href="">Госпитализация</a>
                        </li>
                        <li id="menu-item-6919"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6919"><a href="">Платные
                            медицинские услуги</a></li>
                        <li id="menu-item-2079"
                            class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2079"><a href="">Периодические
                            медицинские осмотры</a></li>
                    </ul>
                </div>
                <div class="widget info">
                    <img src="" alt="">
                    <div class="tel">
                        <a href="tel:83833444444"><span>+7(383)</span>344-44-44</a>
                        <small>Регистратура Центра Профпатологии</small>
                    </div>

                </div>
                <!--<div class="widget_text widget widget_custom_html">
                    <div class="textwidget custom-html-widget">
                        <div class="wiget-vopros">
                            <img src="" alt="">
                            <p>Наши администраторы ответят на любой интересующий вопрос по услуге</p>
                            <a class="myLinkQuestion" href="#">Задать вопрос</a>
                        </div>
                    </div>
                </div>-->
                <div class="widget news-posts">
                    <div class="widgettitle h2">Новости</div>
                    <div class="item">
                        <div class="item-date">
                            06.06.2022
                        </div>
                    </div>

                </div>
            </aside>
        </div>


    </div>
</template>

<script>
    import about from '../../assets/About.jpg';

    export default {
        mounted()
        {
            console.log('new mounted.')
        },
        data: function () {
            return {
                about: about,
            }
        },

    }
</script>
