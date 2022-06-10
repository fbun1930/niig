<template>
    <div class="container">
        <div class="content-sidebar">
            <article class="post post-2644 page type-page status-publish hentry" itemscope="" itemtype="#">
                <meta itemscope="" itemprop="mainEntityOfPage" itemtype="#" itemid="#">

                <h1 itemprop="headline">Об Институте</h1>

                <p>Мы рады приветствовать Вас на сайте Федерального бюджетного учреждения науки "Новосибирский
                    научно-исследовательский институт гигиены" Федеральной службы по надзору в сфере защиты прав
                    потребителей и
                    благополучия человека.
                    <br><br>
                    В нашем институте выполняются прикладные научные исследования и работы по комплексному изучению
                    влияния
                    факторов среды обитания на здоровье населения с разработкой мер по минимизации рисков отрицательного
                    воздействия на здоровье взрослого и детского населения гигиенических условий труда, проживания,
                    обучения.
                    <br><br>
                    В составе института функционируют научные отделы гигиены окружающей среды и здоровья населения,
                    медицины
                    труда, токсикологии, центр профпатологии и клиника профессиональных заболеваний со стационарным и
                    научно-консультативным поликлиническим отделением.
                    <br><br>
                    Исследования и работы проводятся как в рамках Государственного задания, так и по договорам с
                    юридическими и
                    физическими лицами.</p>
                <div class="item-content" itemprop="articleBody">

                    <img :src="about"/>

                    <p style="text-align: right;">
                    </p></div>


                <div class="department-buttons">
                    <div class="top">
                    </div>
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
    import about from '../../assets/About.jpg'
    export default {
        mounted()
        {
            console.log('new mounted.')
        },
        data: function () {
            return {
                about: about
            }
        }
    }
</script>
