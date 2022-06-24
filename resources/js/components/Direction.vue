<template>
    <div class="container">
        <div class="content-sidebar">
            <article>
                <h1 itemprop="headline">
                    Руководство    </h1>
                <div class="item-content" itemprop="articleBody">
                    <table style="border-collapse: collapse;">
                        <tbody>
                        <tr>
                            <td style="background-color: #ffffff;">
                                <img :src="directions"/>
                            </td>
                            <td style="background-color: #ffffff;">
                                <p class="text-black text-not-bold">Директор ФБУН «Новосибирский НИИ гигиены» Роспотребнадзора д.м.н., профессор</p>
                                <p class="text-black text-not-bold"><strong>Приемная директора: +7 (383) 343-34-01</strong></p>
                                <p class="text-black text-not-bold"><strong>Электронная почта секретаря: ngi@niig.su</strong></p>
                                <p class="text-black text-not-bold">Приемные часы: среда 14:00-16:00</p></td>
                        </tr>

                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                </div>

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
    import directions from '../../assets/Directions.jpg'

    export default {
        mounted()
        {
            console.log('new mounted.')
        },
        data: function () {
            return {
                directions: directions,
            }
        },

    }
</script>
