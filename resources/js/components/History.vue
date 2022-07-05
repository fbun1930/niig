<template>
    <div class="container">
        <h1 itemprop="headline">Историческая справка</h1>
        <main class="content-wrap">

            <h1>
                История Центра </h1>

            <div class="history-content">

                <div class="history-slider slick-slider"
                     data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true}'>

                    <div class="history-slider__item">
                        <div class="history-slider__img">
                            <img width="668" height="417" :src="h1"
                                 class="attachment-full size-full wp-post-image" alt="" loading="lazy"
                            /></div>
                        <div class="history-slider__content">
                            <div class="history-slider__block">
                                <div class="history-slider__title"><a href="#">История
                                    Института</a></div>
                                <a class="button-arrow" href="#"></a>
                            </div>
                            <div class="history-slider__description">
                                В связи с широкой индустриализацией сибирского региона и необходимостью решения острых
                                вопросов по охране здоровья населения Постановлением Западно-Сибирского Крайисполкома №
                                14-262 от 17.12.1929 г. организован Западно-Сибирский краевой институт по изучению
                                профзаболеваний(Начало деятельности – 1 января 1930 г.). Обслуживал – Западно-Сибирский
                                край (территории нынешних Новосибирской, Омской, Томской, Кемеровской областей и
                                Алтайского края). Был подчинён – Краевому отделу здравоохранения...
                            </div>
                            <div class="history-slider__corner">
                                <img :src="history" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="history-sidebar">

                    <div class="history-turner">
                        <div class="history-turner__img"><a href="#"><img
                            width="417" height="604" :src="h2"
                            class="attachment-full size-full wp-post-image" alt="" loading="lazy"/></a></div>
                        <div class="history-turner__img"><a href="#"><img
                            width="417" height="604" :src="h3"
                            class="attachment-full size-full wp-post-image" alt="" loading="lazy"/></a></div>
                        <div class="history-turner__img"><a href="#"><img
                            width="417" height="604" :src="h4"
                            class="attachment-full size-full wp-post-image" alt="" loading="lazy"/></a></div>
                        <div class="history-turner__name"><a href="#">Фотоальбом Института</a></div>
                        <div class="history-turner__date">1932-2000 г.</div>
                        <p></p>
                        <a class="button-arrow" href="#">Подробнее</a>
                    </div>

<!--                    <div class="history-bucklet"-->
<!--                         style="background: linear-gradient(96.91deg, #FFFFFF 41.96%, rgba(255, 255, 255, 0) 75.38%), url(#);">-->
<!--                        <div class="history-bucklet__title">Историческая презентация Центра</div>-->
<!--                        <a href="#" class="button">Скачать буклет</a>-->
<!--                    </div>-->
                </div>
            </div>


            <div class="history-directors">
                <h1>Очерки о становлении и развитии санитарной службы в Новосибирской области</h1>
                <div class="history-row load-more-target-directors">

                    <div class="history-directors__item">
                        <div class="history-directors__img">
                            <a href="#"><img width="290" height="280" :src="directions"
                                             class="attachment-thumbnail size-thumbnail wp-post-image" alt=""/></a>
                        </div>
                        <div class="history-directors__name"><a href="#">Очерк №1 Становление
                            санитарно-эпидемиологической службы в Сибири - Новосибирская область (очерки о годах
                            Советской власти - довоенный и военный периоды)</a></div>
                        <div class="history-directors__description">
                            Город Новосибирск (ранее Новониколаевск) с исторической точки зрения - город молодой.
                            Своим рождением обязан строительству Транссибирской
                            железнодорожной магистрали и строительству железнодорожного моста через
                            р. Обь. «Удачное местоположение города оказалось привлекательным местом
                            для переселенцев и способствовало
                            ...
                        </div>
                        <a class="button-arrow" href="#">Подробнее</a>
                    </div>
                    <div class="history-directors__item">
                        <div class="history-directors__img">
                            <a href="#"><img width="290" height="280" :src="directions"
                                             class="attachment-thumbnail size-thumbnail wp-post-image" alt=""/></a>
                        </div>
                        <div class="history-directors__name"><a href="#">Очерк №2 Санитарно-эпидемиологическая
                            служба Новосибирской области - от послевоенных лет до нашего времени</a></div>
                        <div class="history-directors__description">
                            После победы в тяжелейшей войне с фашизмом, Советский Союз был
                            втянут в новую фазу противостояния с коллективным Западом. Сразу после
                            Потсдамской конференции, в июле 1945 г. Соединенными Штатами Америки
                            была принята Доктрина опережающего ядерного удара по Советскому Союзу.
                            Первый план под кодовым названием «Пинчер», утвержденный в декабре 1945
                            г.,
                            ...
                        </div>
                        <a class="button-arrow" href="#">Подробнее</a>
                    </div>
                    <div class="history-directors__item">
                        <div class="history-directors__img">
                            <a href="#"><img width="290" height="280" :src="directions"
                                             class="attachment-thumbnail size-thumbnail wp-post-image" alt=""/></a>
                        </div>
                        <div class="history-directors__name"><a href="#">Очерк №3 Современные вызовы работы - работа в
                            период пандемии COVID-19 (Новосибирская область)</a></div>
                        <div class="history-directors__description">
                            Роспотребнадзор в период борьбы с пандемией был и остается на передовых
                            рубежах борьбы за жизнь и здоровье Россиян, и Новосибирская область, не
                            является исключением. Становление службы длиной в 100 лет позволило
                            обеспечить ей жесткую вертикаль управления, научную обоснованность действий,
                            высокую мобильность, единство в решении задач и реагировании на вызовы.
                            ...
                        </div>
                        <a class="button-arrow" href="#">Подробнее</a>
                    </div>
                    <div class="history-directors__item">
                        <div class="history-directors__img">
                            <a href="#"><img width="290" height="280" :src="directions"
                                             class="attachment-thumbnail size-thumbnail wp-post-image" alt=""/></a>
                        </div>
                        <div class="history-directors__name"><a href="#">Очерк №4 Новосибирский научно-исследовательский
                            институт гигиены на острие
                            социально-значимых гигиенических задач с учетом вызовов времени
                            (от истории к современности)</a></div>
                        <div>
                            <div class="history-directors__description">
                                В эпоху индустриализации 30 декабря 1929 года постановлением
                                Запсибкрайисполкома № 14-262 в целях сохранения здоровья, работающих
                                Сибири, в г. Новосибирске был образован «Краевой институт по изучению
                                профзаболеваний». Директором была назначена профессор Елизавета
                                Константиновна Голубева (1889—1936). Она возглавляла институт с 1932 года
                                ...
                            </div>
                            <a class="button-arrow" href="#">Подробнее</a>
                        </div>

                    </div>
                    <div class="history-directors__item">
                        <div class="history-directors__img">
                            <a href="#"><img width="290" height="280" :src="directions"
                                             class="attachment-thumbnail size-thumbnail wp-post-image" alt=""/></a>
                        </div>
                        <div class="history-directors__name"><a href="#">Очерк №5 ..</a></div>
                        <div>
                            <div class="history-directors__description">
                                ...
                            </div>
                            <a class="button-arrow" href="#">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
    import about from '../../assets/About.jpg'
    import directions from '../../assets/Directions.jpg'
    import history from '../../assets/Icons/History.png'
    import h1 from '../../assets/h1.png'
    import h2 from '../../assets/h2.png'
    import h3 from '../../assets/h3.png'
    import h4 from '../../assets/h4.png'

    export default {
        mounted()
        {
            console.log('new mounted.')
        },
        data: function () {
            return {
                about: about,
                directions: directions,
                history: history,
                h1: h1,
                h2: h2,
                h3: h3,
                h4: h4,
            }
        }
    }
</script>

<style>
    .history-content {
        display: flex;
        margin: 0 -20px 74px;
    }

    @media (max-width: 1080px) {
        .history-content {
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 0 74px;
        }
    }

    .history-slider {
        max-width: calc(100% - 440px);
        width: 100%;
    }

    .history-slider .slick-slide {
        padding: 0 20px 16px;
    }

    .history-slider .slick-dots {
        margin-top: 0 !important;
    }

    @media (max-width: 1080px) {
        .history-slider {
            max-width: 100%;
        }
    }

    .history-slider__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    .history-slider__block .button-arrow {
        position: relative;
        z-index: 3;
        width: -webkit-fit-content;
        width: fit-content;
        width: -moz-fit-content;
        height: 28px;
    }

    .history-slider__img img {
        display: block;
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    .history-slider__corner {
        position: absolute;
        right: -33px;
        bottom: -22px;
        z-index: 2;
    }

    @media (max-width: 1080px) {
        .history-slider__corner {
            display: none;
        }
    }

    .history-slider__corner::before {
        content: '';
        width: 215px;
        height: 200px;
        position: absolute;
        right: 15px;
        bottom: 0;
        background: white;
        z-index: -1;
    }

    .history-slider__content {
        position: relative;
        padding: 21px 43px 56px 30px;
        background: white;
        box-shadow: 0px 5px 20px 5px rgba(71, 72, 74, 0.04);
        border-radius: 0 0 20px 20px;
    }

    .history-slider__title {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 32px;
        line-height: 135%;
    }

    .history-slider__title a {
        color: black;
    }

    .history-slider__title a:hover {
        color: #003b92;
    }

    .history-slider__description {
        position: relative;
        z-index: 3;
        font-size: 14px;
        line-height: 135%;
        max-width: 531px;
        color: #000000;
    }

    @media (max-width: 1200px) {
        .history-slider__description {
            max-width: 400px;
        }
    }

    @media (max-width: 1080px) {
        .history-slider__description {
            max-width: 531px;
        }
    }

    .history-slider__description > * {
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    }

    .history-sidebar {
        max-width: 400px;
        width: 100%;
        margin: 0 20px;
    }

    @media (max-width: 1080px) {
        .history-sidebar {
            margin-top: 40px;
        }
    }

    .history-turner {
        padding: 30px 30px 34px;
        background: #FFFFFF;
        box-shadow: 0px 5px 20px 5px rgba(71, 72, 74, 0.04);
        border-radius: 20px;
        line-height: 135%;
        margin-bottom: 40px;
    }

    .history-turner__img {
        margin-bottom: 20px;
    }

    .history-turner__img img {
        display: block;
        width: 100%;
    }

    .history-turner__name {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .history-turner__name a {
        color: inherit;
    }

    .history-turner__name a:hover {
        color: #003b92;
    }

    .history-turner__date {
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .history-turner p {
        font-size: 14px;
        margin-bottom: 0;
    }

    .history-turner .button-arrow {
        width: -webkit-fit-content;
        width: fit-content;
        width: -moz-fit-content;
        height: 28px;
        margin-top: 18px;
    }

    .history-bucklet {
        padding: 20px;
        box-shadow: 0px 5px 20px 5px rgba(71, 72, 74, 0.04);
        border-radius: 20px;
        background-position: top right;
    }

    .history-bucklet__title {
        max-width: 235px;
        margin-bottom: 20px;
    }

    .history-bucklet .button {
        display: inline-block;
        font-weight: 500;
        font-size: 16px;
        line-height: 35px;
        color: #FFFFFF;
        padding: 6px 50px 7px;
        background: #3AB28B;
        border-radius: 30px;
    }

    .history-row {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin: -40px -20px 0;
    }

    @media (max-width: 720px) {
        .history-row {
            margin: -20px 0 0;
        }
    }

    .history-row > div {
        max-width: calc(33% - 40px);
        width: 100%;
        margin: 40px 20px 0;
        background: #FFFFFF;
        box-shadow: 0px 5px 20px 5px rgba(71, 72, 74, 0.04);
        border-radius: 20px;
        transition: box-shadow .3s ease-out;
    }

    .history-row > div:hover {
        box-shadow: 0px 5px 45px 2px rgba(57, 57, 57, 0.27);
    }

    @media (max-width: 1080px) {
        .history-row > div {
            max-width: calc(50% - 40px);
        }
    }

    @media (max-width: 720px) {
        .history-row > div {
            max-width: 100%;
            margin: 20px 0 0;
        }
    }

    .history-dates {
        margin-bottom: 100px;
    }

    .history-dates .button-container {
        margin-top: 48px;
        text-align: center;
    }

    .history-dates h2 {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 40px;
        line-height: 135%;
        margin-bottom: 42px;
    }

    .history-dates__item {
        display: flex;
        flex-direction: column;
        flex-flow: column;
        -webkit-flex-flow: column;
    }

    .history-dates__content {
        display: flex;
        flex-direction: column;
        flex-flow: column;
        -webkit-flex-flow: column;
        padding: 20px 30px 32px;
        height: 100%;
    }

    .history-dates__img img {
        display: block;
        width: 100%;
        max-height: 245px;
    }

    .history-dates__cat {
        font-weight: 500;
        font-size: 16px;
        line-height: 125%;
        color: #3AB28B;
        margin-bottom: 20px;
    }

    .history-dates__title {
        font-weight: 500;
        font-size: 22px;
        line-height: 135%;
        margin-bottom: 32px;
    }

    .history-dates__title a {
        color: black;
    }

    .history-dates__title a:hover {
        color: #003b92;
    }

    .history-dates__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }

    .history-dates__footer .button-arrow {
        width: -webkit-fit-content;
        width: fit-content;
        width: -moz-fit-content;
        height: 28px;
        margin-left: auto;
    }

    .history-dates__date {
        color: #2C75C2;
        font-weight: 500;
        font-size: 18px;
        line-height: 125%;
        letter-spacing: 0.03em;
        text-transform: uppercase;
    }

    .history-directors {
        margin-bottom: 100px;
    }

    .history-directors .button-container {
        margin-top: 48px;
        text-align: center;
    }

    .history-directors h2 {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 40px;
        line-height: 135%;
        margin-bottom: 42px;
    }

    .history-directors__item {
        display: flex;
        flex-direction: column;
        flex-flow: column;
        -webkit-flex-flow: column;
        padding: 22px 20px 20px;
        line-height: 135%;
    }

    .history-directors__img {
        max-width: 333px;
        margin: 0 auto 28px;
    }

    .history-directors__img img {
        display: block;
        width: 100%;
        max-height: 335px;
    }

    .history-directors__name {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .history-directors__name a {
        color: black;
    }

    .history-directors__name a:hover {
        color: #003b92;
    }

    .history-directors__description {
        font-size: 14px;
        margin-bottom: 18px;
    }

    .history-directors .button-arrow {
        width: -webkit-fit-content;
        width: fit-content;
        width: -moz-fit-content;
        height: 28px;
        margin-top: auto;
    }

</style>
