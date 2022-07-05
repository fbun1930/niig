<template>
    <header class="site-header">
        <div class="header-top container">
            <ul class="menu top-menu"><li class=""><a href="#" aria-current="page">Главная</a></li>
                <li class="menu-item-has-children"><a href="#">Об Институте</a>
                    <ul class="sub-menu">
                        <li class=""><router-link to="/about">Об Институте</router-link></li>
                        <li class=""><router-link to="/certificate">Сертификаты, лицензия, аккредитация</router-link></li>
                        <li class=""><router-link to="/direction">Руководство</router-link></li>
                        <li class=""><router-link to="/heads-of-departments">Руководители отделов</router-link></li>
                        <li class=""><router-link to="/history">Историческая справка</router-link></li>
                        <li class=""><router-link to="/news">Новости</router-link></li>
                        <li class=""><a href="#">Документы</a></li>
                        <li class=""><a href="#">Противодействие коррупции</a></li>
                        <li class=""><a href="#">Контактная информация</a></li>
                        <li class=""><a href="#">Международное сотрудничество</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">Наука</a>
                    <ul class="sub-menu">
                        <li class=""><a href="#">Учёный совет</a></li>
                        <li class=""><a href="#">Объединенный совет молодых ученых и специалистов</a></li>
                        <li class=""><a href="#">Организационно-методический отдел</a></li>
                        <li class=""><a href="#">Результаты интеллектуальной деятельности</a></li>
                        <li class=""><a href="#">Этический комитет</a></li>
                        <li class=""><a href="#">Они защитились в нашем Институте</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">Образование</a>
                    <ul class="sub-menu">
                        <li class=""><a href="#">Основные сведения</a></li>
                        <li class=""><a href="#">Структура и органы управления образовательной организацией</a></li>
                        <li class=""><a href="#">Документы</a></li>
                        <li class=""><a href="#">Образование</a></li>
                        <li class=""><a href="#">Образовательные стандарты</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">Оценка риска</a>
                    <ul class="sub-menu">
                        <li class=""><a href="#">Об оценке риска</a></li>
                        <li class=""><a href="#">Оценка риска для здоровья населения при разработке проекта СЗЗ</a></li>
                        <li class=""><a href="#">Материалы, предоставляемые заказчиком</a></li>
                    </ul>
                </li>
                <li class=""><a href="#">НП "Демография"</a></li>
                <li class=""><a href="#">Центр профпатологии</a></li>
                <!--<li class=""><a href="#">Админка</a>
                    <ul class="sub-menu">
                        <li class=""><router-link to="/addnews">Добавление новотей</router-link></li>
                    </ul>
                </li>-->

                <!--<li id="menu-item-202" class="menu-item-202"><a href="#">Контакты</a></li>-->
            </ul>
            <div class="lang">
                <a class="rus active" href="#">RUS</a>
                <a class="en" href="#">EN</a>
            </div>

            <a class="eye-link button button-yellow" id="eye-link">
                Версия для слабовидящих
            </a>
        </div>

        <div class="header-center container">
            <div class="logo">
                <img width="138" height="144" :src="image"/>
                <!--<img width="138" height="144" v-bind:src="/resources/assets/logo.png">-->

                <h1>
                    <small class="blue">Федеральное бюджетное учреждение науки</small>
                    <span>Новосибирский научно-исследовательский институт гигиены<br /></span>
                    <small class="green">Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека</small>
                </h1>
            </div>

            <div class="tel">
                <a href="tel:83833433401"><span>+7 (383)</span> 343-34-01</a>
                <small>Приемная<br>директора Института<br>
                    пн. - пт. 9:00 - 17:40;<br>сб., вс. выходной</small>
            </div>
            <div class="tel">
                <a href="tel:83833433401"><span>+7 (383)</span> 343-34-01</a>
                <small>Регистратура<br>центра Профпатологии<br>
                    пн. - пт. 9:00 - 15:00; <br>сб., вс. выходной</small>
            </div>

            <!--<div class="contacts contacts-info">
                <div class="
"></div>
                <a href="obratnaya-svyaz/index.html" class="button">Обратная связь</a>
            </div>
-->
        </div>
        <div class="container">
            <nav class="header-menu mobile-menu">
                <input id="mobile-menu-toggle" type="checkbox">
                <label class="mobile-menu-button" for="mobile-menu-toggle">
                    <span></span>
                </label>
                <div class="primary-menu">
                    <span class="cross"></span>
                    <ul class="menu"><li id="menu-item-2895" class="menu-item-has-children menu-item-2895"><a href="patsientam/konsultacii/index.html">Консультации</a>
                        <!--<ul class="sub-menu">
                            <li id="menu-item-11951" class="menu-item-11951"><a href="patsientam/konsultacii/index.html">Запись на консультацию</a></li>
                            <li id="menu-item-2896" class="menu-item-2896"><a href="otdeleniya/konsultativno-diagnosticheskoe-otdelenie/index.html">Консультативно-диагностическое отделение в г. Пушкин</a></li>
                            <li id="menu-item-2838" class="menu-item-2838"><a target="_blank" rel="noopener" href="http://kdcturner.ru/">Консультативно-диагностический Центр на Лахтинской ул. 12</a></li>
                            <li id="menu-item-1910" class="menu-item-object-post menu-item-1910"><a href="patsientam/telemeditsina/index.html">Телемедицина</a></li>
                            <li id="menu-item-8806" class="menu-item-8806"><a href="zaochnaya-konsultatsiya/index.html">Заочная консультация</a></li>
                            <li id="menu-item-2525" class="menu-item-2525"><a href="patsientam/inostrannym-grazhdanam/index.html">Иностранным гражданам</a></li>
                        </ul>-->
                    </li>
                        <li id="menu-item-6186" class="menu-item-has-children menu-item-6186"><a href="diagnostika/index.html">Анализы</a>
                            <!--<ul class="sub-menu">
                                <li id="menu-item-6274" class="menu-item-6274"><a href="kliniko-diagnosticheskaya-laboratoriya/index.html">Клинико-диагностическая лаборатория</a></li>
                                <li id="menu-item-4925" class="menu-item-4925"><a href="otdeleniya/otdelenie-luchevoy-diagnostiki/index.html">Лучевая диагностика</a></li>
                                <li id="menu-item-6278" class="menu-item-6278"><a href="otdeleniya/otdelenie-luchevoy-diagnostiki/densitometriya/index.html">Денситометрия</a></li>
                                <li id="menu-item-6280" class="menu-item-6280"><a href="otdeleniya/otdelenie-luchevoy-diagnostiki/kt-diagnostika/index.html">Компьютерная томография (КТ)</a></li>
                                <li id="menu-item-6276" class="menu-item-6276"><a href="otdeleniya/otdelenie-luchevoy-diagnostiki/mrt-diagnostika/index.html">Магнитно-резонансная томография (МРТ)</a></li>
                                <li id="menu-item-6275" class="menu-item-6275"><a href="otdeleniya/otdelenie-luchevoy-diagnostiki/rentgen-diagnostika/index.html">Рентген-диагностика</a></li>
                                <li id="menu-item-6277" class="menu-item-6277"><a href="otdeleniya/otdelenie-luchevoy-diagnostiki/kabinet-ultrazvukovoy-diagnostiki/index.html">УЗИ</a></li>
                                <li id="menu-item-6281" class="menu-item-6281"><a href="diagnostika/elektroneyromiografiya-enmg/index.html">Электронейромиография (ЭНМГ)</a></li>
                                <li id="menu-item-7723" class="menu-item-7723"><a href="nauchno-laboratornyy-otdel/geneticheskaya-laboratoriya/index.html">Молекулярно-генетическая лаборатория</a></li>
                                <li id="menu-item-7722" class="menu-item-7722"><a href="laboratoriya-fiziologicheskih-i-biomehanicheskih-issledovaniy/index.html">Лаборатория физиологических и биомеханических исследований</a></li>
                            </ul>-->
                        </li>
                        <li id="menu-item-7448" class="menu-item-7448"><a href="gospitalizacia-turnera/index.html">Акции</a></li>
                        <li id="menu-item-2529" class="menu-item-object-post menu-item-2529"><a href="patsientam/vysokotehnologichnaya-meditsinskaya-pomosch-v-fgbu-nmits-detskoy-travmatologii-i-ortopedii-im-g-i-turnera/index.html">Госпитализация</a></li>
                        <li id="menu-item-2562" class="menu-item-has-children menu-item-2562"><a href="reabilitatsiya/index.html">Периодические медицинские осмотры</a>
                            <!--<ul class="sub-menu">
                                <li id="menu-item-6865" class="menu-item-6865"><a href="otdeleniya/otdelenie-dvigatelnoy-reabilitatsii-lokomat-armeo/index.html">Отделение двигательной реабилитации</a></li>
                                <li id="menu-item-6866" class="menu-item-6866"><a href="otdeleniya/ortopedo-travmatologicheskoe-reabilitatsionnoe-otdelenie-11-otdelenie/index.html">Травматолого-ортопедическое реабилитационное отделение</a></li>
                                <li id="menu-item-6867" class="menu-item-6867"><a href="http://kdcturner.ru/vosstanovitelnoe-lechenie-i-reabilitatsiya/">Восстановительное лечение и реабилитация</a></li>
                            </ul>-->
                        </li>
                    </ul>            </div>
                <div class="search">
                    <form method="get" class="search-form" action="#">
                        <input type="search" placeholder="Поиск информации на сайте" name="s" value="">
                        <button class="icon-search"></button>
                    </form>
                </div>

            </nav>
        </div>
    </header>

</template>

<script>
    import image from '../../../assets/Logo.png'
    export default {
        name: "Default",
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<style scoped>
</style>
<style>
</style>
