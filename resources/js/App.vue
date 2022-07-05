<template>
    <div>
        <component :is="layout"></component>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        computed: {
            layout()
            {
                const layoutName = this.$route.meta.layout || 'Default';
                return () => import('./components/layouts/' + layoutName + '.vue')
            }
        }
    }
</script>

<style scoped>
</style>

<style>
    @import 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,500;0,600;1,300&amp;family=Montserrat:wght@600;700&amp;display=swap';

    #
    Normalize
# General
	#

    #
    Headings
	#

    #
    Links
	#

    #
    Buttons
	#

    #
    Form
	#

    #
    Placeholder
# Post types
# Header
	#

    #
    Header Top
	#

    #
    Header Center
	#

    #
    Header Menu
    #

    #
    Header search
    #

    #
    Mobile menu
# Homepage
    #

    #
    Top image block
    #

    #
    Contacts block
    #

    #
    Patients block
    #

    #
    News block
    #

    #
    About block
    #

    #
    Links block
    #

    #
    Custom slider block
    #

    #
    Partners
    #

    #
    Info-links
    #

    #
    Bottom menu
# Single
    #

    #
    Breadcrumbs
    #

    #
    Lists
    #

    #
    Blockquote
    #

    #
    Images
    #

    #
    Gallery
    #

    #
    Table
    #

    #
    Share
# Sidebar
# Archive
    #

    #
    Employees archive
# News page
# Doctors page
# Department page
    #

    #
    Buttons
    #

    #
    Map
    #

    #
    Employees
# Footer
    #

    #
    Footer contacts
    #

    #
    Footer info
    -------------------------------------------------------------- *

    /

    /*--------------------------------------------------------------
# Normalize
--------------------------------------------------------------*/

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        border: 0;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #dfe6e9;
    }

    a {
        background-color: transparent;
    }

    a:focus {
        outline: unset;
    }

    b, strong {
        font-weight: 600;
    }

    code, kbd, samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    small {
        font-size: 0.875em;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        border-style: none;
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button, input {
        overflow: visible;
    }

    button, select {
        text-transform: none;
    }

    button, [type="button"], [type="reset"], [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"], [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    .screen-reader-text, .screen-reader-text span, .screen-reader-shortcut {
        position: absolute !important;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        width: 1px;
        border: 0;
        overflow: hidden;
        color: #333;
        background: #fff;
    }

    /*--------------------------------------------------------------
# General
--------------------------------------------------------------*/

    body {
        position: relative;
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 300;
        font-size: 16px;
        color: #000;
        line-height: 1.875;
        background: #fff;
        overflow-x: hidden;
    }

    .content-wrap, .wrap {
        margin: 0 auto;
        max-width: 1300px;
        overflow: hidden;
    }

    .__content {
        margin: 0 auto;
        max-width: 1300px;
        overflow: hidden;
        padding-top: 130px
    }

    .blue {
        color: #003c93;
    }

    .green {
        color: #13877E;
    }

    p {
        margin-top: 0;
        margin-bottom: 20px;
    }

    p:last-of-type, p:empty {
        margin: 0;
    }

    @media screen and (max-width: 1300px) {
        .content-wrap, .home .wrap:not(.full-width) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    /* ## Headings */

    h1, h2, h3, h4, h4, h5, h6 {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        line-height: 1.9;
        color: #000;
    }

    .h1, .h2, .h3, .h4, .h4, .h5, .h6 {
        display: block;
        font-family: "Montserrat", sans-serif;
        line-height: 1.9;
        color: #000;
        font-weight: 700;
    }

    h1 {
        margin-bottom: 25px;
        font-size: 1.875em;
        line-height: 1.9;
    }

    h2, .h2 {
        font-size: 1.5em;
    }

    h3, .h3 {
        font-size: 1.375em;
    }

    h4, .h4 {
        font-size: 1.25em;
    }

    h5, .h5 {
        font-size: 1.125em;
    }

    /* ## Links */

    a, button, input:focus, input[type="button"], input[type="reset"], input[type="submit"], textarea:focus, .button {
        transition: 0.3s;
    }

    a {
        color: #003C93;
        text-decoration: none;
    }

    .post a:not([class]):hover {
        text-decoration: none;
    }

    /* ## Buttons */


    .btn-mrt-kt {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 50px;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        color: white;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        margin-top: 20px;
    }

    .btn-mrt-kt a {
        background-color: #FF6600;
        color: white;
        text-decoration: none;
        border-left: 2px solid #049c73cf;
        padding: 10px 20px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
    }

    .btn-mrt-kt a:hover {
        opacity: 0.8;
    }

    .btn-mrt-kt a:last-child {
        padding: 10px 30px 10px 22px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    .btn-mrt-kt p {
        background-color: #FF6600;
        color: white;
        padding: 10px 10px 10px 30px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    @media (max-width: 1220px) {
        .news-slider__item .content__item .left__block {
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }

        .news-slider .button {
            margin: 0 15px 0 0 !important;
        }

        .btn-mrt-kt {
            margin: 0;
        }
    }

    @media (max-width: 1000px) {
        .btn-mrt-kt {
            margin: 15px 0;
        }
    }

    @media (max-width: 600px) {
        .btn-mrt-kt a,
        .btn-mrt-kt p {
            font-size: 13px;
        }
    }

    @media (max-width: 450px) {
        .btn-mrt-kt p {
            padding: 10px;
        }

        .btn-mrt-kt a:last-child {
            padding: 10px 20px 10px 10px;
        }

        .btn-mrt-kt a {
            padding: 10px;
        }
    }

    @media (max-width: 426px) {
        .btn-mrt-kt {
            max-width: 242px;
        }

        .news-slider .button {
            max-width: 242px;
            margin: 0 !important;
        }

        .news-slider .left {
            -webkit-box-pack: start !important;
            -ms-flex-pack: start !important;
            justify-content: start !important;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
    }

    .button, button, input[type="button"], input[type="reset"], input[type="submit"] {
        padding: 17px 31px;
        color: #fff;
        text-align: center;
        font-weight: 300;
        line-height: 1;
        background-color: #FF6600;
        border: 0;
        border-radius: 15px;
        cursor: pointer;
    }

    button:focus, input[type="button"]:focus, input[type="reset"]:focus, input[type="submit"]:focus {
        outline: unset;
    }

    .button:before, .button:after {
        transition: 0.3s;
    }

    .button-yellow {
        color: #000;
        background-color: #FFFFCC;
    }

    .button-arrow, .more, .sidebar-primary .widget_nav_menu a {
        display: flex;
        align-items: center;
        padding: 0 20px;
        margin-left: -20px;
        border-radius: 5px;
        transition: 0.3s linear;
    }

    .button-arrow:after, .sidebar-primary .widget_nav_menu a:after {
        content: "";
        width: 33px;
        height: 9px;
        margin-left: 20px;
        /*background-image: url(img/arrow.svg);*/
        background-repeat: no-repeat;
        background-position: center;
    }

    .button-arrow:hover, .more:hover, .sidebar-primary .widget_nav_menu a:hover {
        background-color: #0e9eda;
        text-decoration: none;
        color: #fff;
        margin-left: 0;
    }

    .button-arrow:hover:after, .sidebar-primary .widget_nav_menu a:hover:after {
        /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAJBAMAAABONVgHAAAAIVBMVEVHcEz///////////////////////////////////////+PBM77AAAACnRSTlMAHiE4Pj9AU1TruBIqiAAAADBJREFUeNpjYEABAgxogGkKughDpgO6CNt0BoZVaMAATQ3LDHRdkQHodk3FsAvoHgCO5w6pGgpnDgAAAABJRU5ErkJggg==);
    */
    }

    .button-big {
        min-width: 240px;
        font-size: 1.125em;
        border-radius: 50px;
    }

    a.button.button-big {
        text-decoration: none;
    }

    .button:not(.button-arrow):hover, button:hover, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover {
        opacity: 0.8;
    }

    /* ## Form */

    input, textarea, select {
        display: block;
        margin: 0;
        padding: 15px 20px;
        width: 100%;
        color: #303549;
        line-height: 1.3;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
    }

    select:hover {
        cursor: pointer;
    }

    input:focus, textarea:focus, select:focus {
        border: 1px solid #e6eaee;
        outline: none;
    }

    input[type="checkbox"], input[type="image"], input[type="radio"] {
        width: auto;
    }

    label {
        display: block;
    }

    select {
        padding-right: 50px;
        color: #808080;
        /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAANUlEQVQImYXMuw0AIAwD0Qv7ZVoGPBqK8BGksWw9JYDO52LmC2aUcoMJ0NRl2AEAKgUeH1UGNA0P+kwys8wAAAAASUVORK5CYII=);
        */
        background-position: right 20px center;
        background-repeat: no-repeat;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none !important;
    }

    select::-ms-expand {
        display: none;
    }

    /* ## Placeholder */

    ::placeholder {
        font-size: 0.875em;
        color: #303549;
        text-overflow: ellipsis;
        opacity: 0.5;
        transition: opacity 0.3s ease;
    }

    input:focus::placeholder, textarea:focus::placeholder {
        opacity: 0;
    }

    /*--------------------------------------------------------------
# Post types
--------------------------------------------------------------*/

    .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .item .h4 {
        margin-bottom: 15px;
        font-family: inherit;
        font-weight: inherit;
    }

    .item a.h4:hover {
        color: #ffffff;
    }

    .item .h5 {
        margin-bottom: 10px;
        font-weight: 600;
    }

    .item-date {
        margin-bottom: 15px;
        color: #FF6600;
    }

    .item-desc {
        font-size: 0.875em;
        line-height: 1.6;
    }

    .item-desc p:last-of-type {
        margin-bottom: 0;
    }

    .more {
        margin-top: 10px;
    }

    .more:hover {
        color: #fff;
        background: #0e9eda;
    }

    /*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

    .site-header {
        margin: 0 auto;
        /*max-width: 1300px;*/
    }

    @media screen and (max-width: 1300px) {
        .site-header {
            /*padding-left: 20px;
            padding-right: 20px;*/
        }
    }

    /* ## Header Top */

    .header-top {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 0.875em;
        background-color: #c3f9de;
    }

       .header-top:after {
           content: "";
           position: absolute;
           top: 0;
           left: calc(-50vw + 50%);
           z-index: -1;
           display: block;
           height: 100%;
           width: 100vw;
           background-color: #c3f9de;
       }

    .eye-link {
        padding: 8px 15px;
    }

    .lang {
        margin-right: 50px;
    }

    .lang a {
        color: #8d8d8d;
    }

    .lang a.active {
        color: #ffffff;
    }

    .rus:after {
        content: "/";
        margin-left: 5px;
        color: #8d8d8d;
    }

    .menu {
        margin: 0;
        padding: 0;
        line-height: 1;
        list-style: none;
    }

    @media screen and (min-width: 1141px) {
        .menu {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            margin-right: auto;
        }

        .menu li {
            position: relative;
        }

        .menu li ul {
            position: absolute;
            left: 0;
            z-index: 3;
            display: none;
            flex-direction: column;
            margin: 0;
            padding: 0;
            width: 320px;
            height: auto;
            border-radius: 0 0 10px 10px;
            list-style: none;
            overflow: hidden;
        }

        .top-menu > li {
            margin-right: 40px;
        }

        .top-menu li a {
            display: block;
            padding: 18px 0;
            color: #000000;
        }

        .top-menu > li:hover > .sub-menu {
            display: flex;
        }

        .top-menu li ul {
            background-color: #c3f9de;
        }

        .top-menu li ul li:not(:last-of-type) {
            border-bottom: 1px solid #cbdce5;
        }

        .top-menu li ul a {
            display: block;
            padding: 12px 30px;
        }

        .top-menu li ul a:hover {
            background-color: #e6edf0;
        }
    }

    @media screen and (max-width: 1140px) {
        .header-top {
            justify-content: center;
            padding: 10px 0;
        }

        .top-menu li ul {
            display: none;
        }
    }

    /* ## Header Center */

    .header-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .header-center > div:not(:last-of-type), .header-center > a {
        margin-right: 1px;
    }

    .logo {
        display: flex;
        align-items: center;
        color: initial;
    }

    .logo img {
        margin-right: 30px;
    }

    .logo h1, .logo > div {
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 18px;
        font-weight: 300;
        line-height: 30px;
    }

    .header-center .tel {
        display: flex;
        flex-direction: column;
        flex-basis: 215px;
        /*min-width: 215px;*/
        text-align: center;
    }

    .tel a {
        font-family: "Montserrat", sans-serif;
        font-size: 1.5em;
        font-weight: 700;
        color: initial;
        white-space: nowrap;
    }

    .tel a span {
        /*margin-right: 10px;*/
        color: #FF6600;
    }

    .tel small {
        line-height: 1.4;
        opacity: 0.6;
    }

    .contacts {
        display: flex;
        flex-direction: column;
    }

    .contacts-info .adress {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 0.875em;
        color: #231f20;
    }

    .contacts-info .adress:before {
        content: "";
        flex-shrink: 0;
        margin-right: 20px;
        width: 20px;
        height: 24px;
        background-image: url(../assets/Icons/Map-Pin-5.png);
        /*background-repeat: no-repeat;
        background-position: -126px -10px;*/
    }

    .contacts.contacts-info-new .adress:before {
        content: " ";
        position: absolute;
        width: 20px;
        left: 0;
        height: 20px;
        background-image: url(../assets/Icons/Map-Pin-5.png);
        /*background-repeat: no-repeat;
        background-position: -126px -10px;*/
    }

    .contacts .button {
        align-self: center;
        margin-top: 15px;
        padding: 15px 55px;
    }

    @media screen and (max-width: 1140px) {
        .header-center {
            justify-content: space-evenly;
        }

        .header-center .contacts {
            display: none;
        }

        .header-center .tel {
            flex-basis: unset;
        }
    }

    @media screen and (max-width: 1140px) and (min-width: 981px) {
        .header-center .contacts {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        .header-center .contacts > div {
            margin-right: 20px;
        }

        .header-center .contacts .adress {
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 980px) {
        .header-center {
            flex-direction: column;
        }

        .header-center .tel {
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        .header-center > div:not(:last-of-type), .header-center > a {
            margin-right: 0;
        }

        .logo h1, .logo > div {
            font-size: 16px;
            line-height: 25px;
        }

        .logo img {
            margin-right: 20px;
            max-width: 70px;
        }

        .logo small {
            font-size: 11px;
            line-height: 1.3;
        }
    }

    /* ## Header Menu */

    .header-menu {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 5px;
        background-color: #7fe7b3;
    }

    .header-menu:after {
        content: "";
        position: absolute;
        top: 0;
        left: calc(-50vw + 50%);
        z-index: -1;
        display: block;
        height: 100%;
        width: 100vw;
        background-color: #7fe7b3;
    }

    .top-menu li .sub-menu li .sub-menu {
        display: block;
        position: relative;
    }

    .top-menu li .sub-menu li .sub-menu li a {
        padding-left: 50px;
    }

    @media screen and (min-width: 1141px) {
        .primary-menu {
            display: flex;
            width: 100%;
        }

        .primary-menu > ul > li {
            margin-right: 50px;
        }

        .primary-menu > ul > li > a {
            display: block;
            padding-top: 18px;
            padding-bottom: 18px;
            font-size: 1.125em;
            color: #000000;
            border-bottom-width: 5px;
            border-bottom-style: solid;
            border-bottom-color: transparent;
        }

        .primary-menu > ul > li a:hover {
            border-bottom-color: #FF6600;
        }

        .primary-menu li:hover > .sub-menu {
            display: flex;
        }

        .primary-menu li ul {
            background-color: #7fe7b3;
        }

        .primary-menu li ul li:not(:last-of-type) {
            border-bottom: 1px solid #d1e2ea;
        }

        .primary-menu li ul a {
            display: block;
            padding: 15px 30px;
            color: #ffffff;
        }

        .primary-menu li ul a:hover {
            background-color: #d2eff7;
        }

        .primary-menu li ul ul {
            top: 0;
            left: 252px;
            border-radius: 10px;
        }
    }

    /* ## Header search */

    .header-menu .search {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        width: 300px;
    }

    .header-menu .search:before {
        content: "";
        margin-right: 30px;
        width: 2px;
        height: 35px;
        background-color: #cbdce5;
    }

    .header-menu .search-form {
        display: flex;
        width: 100%;
    }

    .header-menu .search input[type="search"] {
        padding: 0;
        border: none;
        background: transparent;
    }

    .header-menu .search input[type="search"]:focus {
        border: none;
    }

    .header-menu .icon-search {
        flex-shrink: 0;
        padding: 0;
        width: 45px;
        height: 45px;
        background-color: #fff;
        /*background-image: url(img/search.png);*/
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
    }

    /* .top-menu li .sub-menu li .sub-menu li a {
    padding-left: 60px;
} */
    @media screen and (max-width: 400px) {
        .header-menu .search {
            width: 100%;
        }

        .header-menu .search:before {
            content: none;
        }
    }

    /* ## Mobile menu */

    #mobile-menu-toggle, .cross {
        display: none;
    }

    @media screen and (max-width: 1140px) {
        .top-menu {
            display: none;
        }

        .mobile-menu {
            padding: 10px 0;
        }

        .mobile-menu-button {
            position: relative;
            z-index: 10;
            display: flex;
            align-items: center;
            margin: auto;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }

        .mobile-menu-button span, .mobile-menu-button span:before, .mobile-menu-button span:after {
            position: absolute;
            width: 35px;
            height: 6px;
            background-color: #4091dd;
            border-radius: 3px;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        .mobile-menu-button span:before {
            content: "";
            top: -10px;
        }

        .mobile-menu-button span:after {
            content: "";
            top: 10px;
        }

        .cross {
            position: absolute;
            left: 15px;
            top: 15px;
            display: block;
            width: 32px;
            height: 32px;
            opacity: 0.5;
            cursor: pointer;
        }

        .cross:hover {
            opacity: 0.9;
        }

        .cross:before, .cross:after {
            position: absolute;
            left: 15px;
            content: " ";
            height: 33px;
            width: 2px;
            background-color: #e2e2e2;
        }

        .cross:before {
            transform: rotate(45deg);
        }

        .cross:after {
            transform: rotate(-45deg);
        }

        .primary-menu {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 999;
            display: flex;
            flex-direction: column;
            width: 320px;
            font-size: 1em;
            color: #e2e2e2;
            background-color: #303549;
            box-shadow: 0px 0px 29px 0px rgba(104, 136, 209, 0.16);
            transition: -webkit-transform 0.35s ease-out;
            transition: transform 0.35s ease-out;
            transition: transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
            transform: translate3d(-100%, 0, 0);
            overflow-y: scroll;
        }

        .primary-menu:before {
            content: "Меню";
            padding: 15px;
            color: #e2e2e2;
            text-align: center;
            font-weight: 600;
            text-transform: uppercase;
        }

        .primary-menu ul {
            display: block;
            margin: 0;
            padding-left: 0;
            line-height: 1;
            list-style: none;
        }

        .primary-menu li {
            text-transform: uppercase;
            border-top: 1px solid #626a88;
        }

        .primary-menu li a {
            display: flex;
            color: #e2e2e2;
            padding: 20px 0 20px 15px;
        }

        .primary-menu .sub-menu li {
            text-transform: none;
        }

        .primary-menu .sub-menu li a {
            padding-left: 40px;
        }

        .primary-menu .tel {
            padding: 20px 15px;
            color: #e2e2e2;
        }

        .primary-menu .tel small {
            opacity: 1;
        }

        .primary-menu .tel a {
            color: #e2e2e2;
        }

        .primary-menu .contacts-info {
            padding: 20px 15px;
            margin-top: 0;
        }

        .primary-menu .contacts-info .adress {
            color: #e2e2e2;
        }

        .primary-menu .contacts-info .adress:before {
            content: none;
        }

        .primary-menu .contacts .button {
            margin-top: 15px;
        }

        #mobile-menu-toggle:checked ~ .primary-menu {
            transform: translate3d(0, 0, 0);
        }

        body.mobile-menu-active {
            overflow: hidden;
        }

        .menu-overlay {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 99;
            background: #000;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.35s ease-in;
        }

        .menu-overlay.active {
            visibility: visible;
            opacity: 0.5;
        }

        .top-menu li .sub-menu li .sub-menu li a {
            padding-left: 60px;
        }

        li#menu-item-2779 .sub-menu {
            display: block !important;
        }
    }

    @media screen and (max-width: 500px) {
        .primary-menu {
            width: 100%;
        }
    }

    @media screen and (max-width: 400px) {
        .mobile-menu {
            flex-direction: column;
        }

        .mobile-menu-button {
            width: 100%;
        }

        .mobile-menu-button span, .mobile-menu-button span:before, .mobile-menu-button span:after {
            left: calc(50% - 17px);
        }
    }

    /*--------------------------------------------------------------
# Homepage
--------------------------------------------------------------*/

    .main-block {
        margin-bottom: 60px;
    }

    .main-block h2 {
        margin-bottom: 60px;
        font-size: 42px;
        line-height: 1;
    }

    @media screen and (max-width: 600px) {
        .main-block h2 {
            text-align: center;
        }
    }

    /* ## Top image block */
    .slider__home {
        max-width: 1600px;
        position: relative;
    }

    .wrap__slider {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 70px;
        max-height: 700px;
        max-width: 1600px;
        overflow: hidden;
        width: 100vw;
        max-width: 100%;
    }

    .news-slider {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 70px;
        max-height: 700px;
        max-width: 1600px;
        overflow: hidden;
    }

    .news-slider .wrap__slider .slick-track {
        padding: 0;
    }

    .slide-home .wrap__slider .slick-dots {
        position: absolute;
        bottom: 85px;
        margin: auto;
        width: 100%;
    }


    .news-slider .left {
        max-width: 550px;
        padding: 2%;
        display: none;
    }

    .news-slider .right {
        max-width: 350px;
        display: none;
    }

    .news-slider h2 {
        font-size: 2.5rem;
        color: #fff;
    }

    .news-slider .button {
        margin-top: 70px;
    }

    .news-slider .wrap__slider .slider-items {
        padding: 25px 30px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
    }

    .news-slider .wrap__slider .slider-nav {
        display: flex;
        margin-top: 15px;
    }

    .news-slider .wrap__slider .slick-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        width: 60px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
    }

    .news-slider .wrap__slider .slider-nav-prev {
        margin-right: 5px;
    }

    .news-slider .wrap__slider .slick-arrow:before {
        content: "";
        width: 9px;
        height: 16px;
        /*background-image: url(img/images.png);*/
        background-repeat: no-repeat;
    }

    .news-slider .wrap__slider .slider-nav-prev:before {
        background-position: -166px -82px;
    }

    .news-slider .wrap__slider .slider-nav-next:before {
        background-position: -166px -46px;
    }

    .slick-arrow:hover {
        background-color: #fff;
    }

    .news-slider__item {
        position: relative;
    }

    .news-slider__item .IIV::-webkit-media-controls-play-button,
    .news-slider__item .IIV::-webkit-media-controls-start-playback-button {
        opacity: 0;
        pointer-events: none;
        width: 5px;
    }

    .news-slider__item .content__item {
        position: absolute;
        margin: auto;
        max-width: 1300px;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        padding: 30px;
        display: flex;
        transform: translate(-50%, -50%);
    }

    .news-slider-before.mobile {
        display: none;
    }

    .news-slider__item .news-slider__img {
        border-radius: 0;
    }

    .news-slider__item video {
        filter: brightness(0.8);
    }

    .news-slider__item .content__item .left__block {
        width: 60%;
        height: 100%;
        display: flex;
        align-items: start;
        flex-direction: column;
        padding-top: 5%;
    }

    .news-slider__item .content__item .right__block {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 10%;
        padding-top: 5%;
        position: relative;
    }

    .news-slider__item .content__item .right__block .slider-items {
        width: 100%;
    }

    .news-slider__item .content__item .right__block .video {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin: 30px 0;
        height: fit-content;
    }

    .news-slider__item .content__item .right__block .video div:first-child {
        margin-right: 15px;
    }

    .news-slider__item .content__item .right__block .video a {
        color: white;
        font-weight: 700;
        font-size: 19px;
        margin: 0;
        line-height: 1.5;
    }


    /*блок для мобил*/
    .news-slider-before.mobile {
        display: none;
        width: 100%;
        height: 100%;
        min-height: 500px;
        padding: 30px;
    }

    .news-slider-before.mobile .content__item .left__block {
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 30px;
    }

    .news-slider-before.mobile .content__item .left__block h2 {
        margin-bottom: 20px;
    }

    .news-slider-before.mobile .content__item .left__block a {
        width: fit-content;
    }

    .news-slider-before.mobile .content__item .right__block {
        display: flex !important;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
    }

    .news-slider-before.mobile .content__item .right__block .slider-items {
        width: 100%;
    }

    .news-slider-before.mobile .content__item .right__block .slider-nav {
        display: flex;
        margin-top: 15px;
    }

    .news-slider-before.mobile .content__item .right__block .slick-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        width: 60px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
        box-shadow: 0px 5px 20px 0px #1219261a;
    }

    .news-slider-before.mobile .content__item .right__block .slider-nav-next:before {
        background-position: -166px -46px;
    }

    .news-slider-before.mobile .content__item .right__block .slider-nav-prev:before {
        background-position: -166px -82px;
    }

    .news-slider-before.mobile .content__item .right__block .slick-arrow:before {
        content: "";
        width: 9px;
        height: 16px;
        /*background-image: url(img/images.png);*/
        background-repeat: no-repeat;
    }

    .news-slider-before.mobile .content__item .right__block .slider-nav-prev {
        margin-right: 5px;
    }

    .news-slider-before.mobile .content__item .right__block .video div:first-child {
        display: flex;
        align-items: center;
        filter: drop-shadow(0px 3px 10px #1219261a);
        margin-right: 10px;
    }


    .news-slider-before.mobile .content__item .right__block .video {
        display: flex;
        align-items: center;
        margin: 0 15px 15px 0;
        width: 300px;
    }


    @media (max-width: 689px) {
        .news-slider-before.mobile .content__item .right__block {
            justify-content: center;
        }

        .news-slider-before.mobile .content__item .left__block {
            justify-content: space-around;
            text-align: center;
            align-items: center;
        }
    }


    @media screen and (max-width: 1300px) {
        .news-slider {
            justify-content: space-around;
        }

        .news-slider .left {
            padding-left: 20px;
        }

        .news-slider .right {
            padding-right: 20px;
        }
    }

    @media (max-width: 1220px) {
        .news-slider__item .content__item {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            padding: 30px;
            transform: unset;
        }

        .news-slider__item .content__item .left__block {
            width: 100%;
        }

        .news-slider__item .content__item .right__block {
            width: 100%;
            flex-direction: row;
            padding-left: unset;
            padding-top: unset;
            justify-content: space-between;
            flex-wrap: wrap;
            align-content: start;
        }

        .news-slider__item .content__item .right__block .video {
            position: absolute;
            top: -122px;
            right: 10px;
        }
    }

    @media (max-width: 1050px) {
        .news-slider__item .content__item .right__block {
            justify-content: start;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 1000px) {
        .news-slider {
            padding: 0;
        }

        .news-slider__item video {
            width: 100%;
        }

        .news-slider-before.mobile .content__item .right__block {
            flex-direction: column;
        }

        .news-slider-before.mobile .content__item .right__block .video {
            margin: 30px 0 0 0;
        }
    }

    @media (max-width: 1000px) {
        .news-slider__item .content__item {
            display: none;
        }

        .news-slider-before.mobile {
            display: block;
        }
    }

    @media screen and (max-width: 768px) {
        .news-slider .right {
            display: none;
        }

        .news-slider__item .content__item .left__block {
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .right__block {
            display: none !important;
        }
    }

    @media screen and (max-width: 600px) {
        .news-slider {
            background: rgba(0, 0, 0, 0.42);
        }

        .news-slider__item {
            display: flex;
        }

        .news-slider .left {
            padding-right: 20px;
            max-width: 100%;
            text-align: center;
        }

        .news-slider h2 {
            font-size: 2em;
        }

        .wrap__slider {
            padding: 0;
        }
    }

    @media screen and (max-width: 426px) {
        .news-slider .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 500px;
        }

        .news-slider .right {
            display: none;
        }

        .news-slider .button {
            margin-top: 0;
        }

        .news-slider:after {
            content: "";
            position: absolute;
            top: 0;
            left: calc(-50vw + 50%);
            z-index: -1;
            display: block;
            height: 100%;
            width: 100vw;
            /*background-image: url(img/new-hospital.jpg);*/
            background-position: top, center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .news-slider-before.mobile {
            display: none;
        }

        .news-slider .slick-list {
            display: none;
        }

        .wrap__slider {
            display: none !important;
        }
    }

    /* ## Contacts block */

    .contacts-adress {
        position: relative;
        top: -70px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) minmax(300px, 370px);
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        align-items: center;
        background-color: #fff;
        box-shadow: 0 0 24px rgba(155, 197, 213, 0.36);
        border-radius: 10px;
    }

    .contact-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 35px;
        height: 100%;
        text-align: center;
    }

    .contact-item.tel:not(:nth-child(n + 3)):after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 63px);
        height: 125px;
        border-right: 2px solid #dedede;
    }

    .contact-item.tel:nth-child(4):before {
        content: "";
        position: absolute;
        left: 0;
        top: calc(50% - 63px);
        height: 125px;
        border-right: 2px solid #dedede;
    }

    .contact-item.tel div {
        opacity: 0.6;
        line-height: 1.5;
    }

    .contact-item.adress {
        border-radius: 10px;
        background-color: #7fe7b3;
    }

    .contact-item.adress div {
        margin-bottom: 10px;
    }

    .contact-item.adress a {
        font-size: 0.875em;
    }

    @media screen and (max-width: 1140px) {
        .contact-item.adress {
            min-width: auto;
        }
    }

    @media screen and (max-width: 600px) {
        .contacts-adress {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        }

        .contact-item {
            padding: 35px 30px;
        }

        .contact-item.tel:not(:nth-child(3)):after {
            content: none;
        }
    }

    /* ## Patients block */

    .patients-info {
        margin-top: -10px;
    }

    .patients-info-wrap {
        display: grid;
        gap: 40px 33px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }

    .patient-info-item {
        display: flex;
        flex-direction: column;
        padding: 25px 30px;
        background-color: #fff;
        box-shadow: 0 0 24px rgba(155, 197, 213, 0.36);
        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
        border-color: #fff;
        transition: 0.3s;
    }

    .patient-info-item:hover {
        border-color: #FF6600;
    }

    .patient-info-item .h2 {
        position: relative;
        margin-bottom: 25px;
        padding-bottom: 25px;
        font-weight: 700;
        color: initial;
        word-wrap: break-word;
        border-bottom: 1px solid #dfe6e9;
    }

    .patient-info-item .h2:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        display: block;
        width: 45px;
        height: 5px;
        background-color: #FF6600;
    }

    .patient-info-item .item-desc {
        line-height: 1.8;
    }

    .patient-info-item a {
        color: #ffffff;
    }

    .patient-info-item a:hover {
        text-decoration: underline;
    }

    /* ## News block */

    .news {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 70px;
    }

    .news .left {
        flex-shrink: 0;
        flex-basis: 745px;
        margin-right: 86px;
    }

    .news .left .news-items {
        height: 100%;
    }

    .news .left .item {
        padding: 25px 35px;
        height: 100%;
        background-color: #fff;
        box-shadow: 0 0 24px rgba(155, 197, 213, 0.36);
        border-radius: 20px;
        overflow: hidden;
        width: 784px;
    }

    .news .left .item-image {
        position: relative;
        left: -35px;
        top: -25px;
        width: calc(100% + 70px);
        max-height: 323px;
        overflow: hidden;
    }

    .news .left .item img {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }

    .news .right {
        flex-basis: 430px;
    }

    .news .right .item:not(:last-of-type) {
        border-bottom: 1px solid #989898;
        padding-bottom: 35px;
        margin-bottom: 35px;
    }

    .news .item-date {
        margin-bottom: 15px;
    }

    @media screen and (max-width: 1300px) {
        .news .left {
            margin-right: 50px;
        }
    }

    @media screen and (max-width: 1140px) {
        .news {
            flex-direction: column;
        }

        .news .left {
            flex-basis: auto;
            margin-right: 0;
        }

        .news .right {
            flex-basis: auto;
            margin-bottom: 50px;
        }
    }

    /* ## About block */

    .about {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding-bottom: 25px;
        height: 665px;
    }

    .about:after {
        content: "";
        position: absolute;
        top: 0;
        left: calc(-50vw + 50%);
        z-index: -1;
        display: block;
        height: 100%;
        width: 100vw;
        /*background-image: url(img/hospital-2.jpg);*/
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .about h2 {
        margin-bottom: 60px;
        font-size: 42px;
        line-height: 1;
    }

    .about .top {
        padding: 50px 55px;
        max-width: 520px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 10px;
    }

    .about .bottom {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 25px;
        align-items: center;
        max-width: 910px;
    }

    .about .about-item {
        padding: 25px 30px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 10px;
    }

    .item-number {
        margin-bottom: 10px;
        font-family: "Montserrat", sans-serif;
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
    }

    @media screen and (max-width: 980px) {
        .about .top, .about .bottom {
            width: 100%;
            max-width: 100%;
        }
    }

    @media screen and (max-width: 800px) {
        .about {
            padding: 20px 0;
            height: auto;
            font-size: 0.875em;
            line-height: 1.5;
        }

        .about .top {
            padding: 15px;
            margin-bottom: 15px;
        }

        .about h2 {
            margin-bottom: 15px;
            font-size: 30px;
        }

        .about .bottom {
            grid-template-columns: auto;
            gap: 15px;
        }

        .about .about-item {
            padding: 15px;
        }

        .item-number {
            font-size: 30px;
        }
    }

    /* ## Links block */

    .links {
        position: relative;
        top: -25px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) minmax(300px, 370px);
        align-items: center;
        margin-bottom: 35px;
        background-color: #fff;
        box-shadow: 0 0 24px rgba(155, 197, 213, 0.36);
        border-radius: 10px;
    }

    .links-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 42px 25px 42px 27px;
        height: 100%;
        text-align: center;
        transition: 0.2s;
    }

    .links-item:not(:nth-child(4)):after {
        content: "";
        position: absolute;
        right: -2px;
        top: calc(50% - 42px);
        height: 90px;
        border-right: 2px solid #dedede;
    }

    .links-item:hover {
        border-radius: 10px;
        background-color: #7fe7b3;
    }

    .links-item:hover:before, .links-item:hover:after {
        content: none;
    }

    @media screen and (max-width: 600px) {
        .links {
            top: 0;
            grid-template-columns: auto;
            margin-top: 35px;
        }

        .links-item:not(:nth-child(4)):after {
            content: none;
        }
    }

    /* ## Custom slider block */

    .slider-custom {
        position: relative;
    }

    .slider-custom-items {
        margin: 0 auto;
        max-width: 970px;
        z-index: 10;
    }

    .slider-custom-items .item {
        flex-direction: row;
        align-items: center;
        padding: 35px 50px;
        background-color: #f4f4f4;
        border-radius: 10px;
    }

    .slider-custom-items .item-image {
        position: relative;
        flex-basis: 310px;
        min-height: 310px;
        flex-shrink: 0;
        margin-right: 65px;
        padding-bottom: 10px;
    }

    .slider-custom-items .item-image:after {
        content: "";
        position: absolute;
        left: 10px;
        top: 10px;
        z-index: 0;
        width: 100%;
        max-width: 310px;
        height: 310px;
        background-color: #e8e8e8;
        border-radius: 10px;
    }

    .slider-custom-items .item-image picture {
        position: relative;
        z-index: 9;
        display: flex;
        width: 310px;
        height: 310px;
    }

    .slider-custom-items .item-image img {
        border-radius: 10px;
        object-fit: cover;
    }

    .slider-custom-items .image-info {
        margin-top: 30px;
    }

    .slider-custom-items .h3 {
        margin-bottom: 35px;
        font-size: 1.4375em;
    }

    .slider-custom-items .h3:hover {
        color: #ffffff;
    }

    .slider-custom-items .item-desc {
        font-size: 1em;
        line-height: inherit;
    }

    .slider-custom .slider-nav {
        position: absolute;
        top: calc(50% - 27px);
        z-index: 1;
        width: 100%;
    }

    .slider-custom .slick-arrow {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        width: 55px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 24px rgba(155, 197, 213, 0.36);
        transition: 0.3s;
        cursor: pointer;
    }

    .slider-custom .slick-arrow:hover {
        box-shadow: unset;
    }

    .slider-custom .slider-nav-prev {
        left: 0;
    }

    .slider-custom .slider-nav-next {
        right: 0;
    }

    .slider-custom .slick-arrow:before {
        content: "";
        width: 17px;
        height: 30px;
        /*background-image: url(img/images.png);*/
        background-repeat: no-repeat;
    }

    .slider-custom .slider-nav-prev:before {
        background-position: -47px -71px;
    }

    .slider-custom .slider-nav-next:before {
        background-position: -10px -71px;
    }

    @media screen and (max-width: 1140px) {
        .slider-custom-items {
            max-width: 100%;
        }

        .slider-custom .slider-nav {
            display: none;
        }
    }

    @media screen and (max-width: 800px) {
        .slider-custom-items .item {
            flex-direction: column;
            padding: 35px 20px;
        }

        .slider-custom-items .item-image {
            margin-right: 0;
            margin-bottom: 20px;
            min-height: auto;
        }

        .slider-custom-items .h3 {
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 400px) {
        .slider-custom-items .item-image picture {
            width: 280px;
        }
    }

    /* ## Partners */

    .partners {
        margin-bottom: 40px;
        overflow: hidden;
    }

    .partners-items-wrap {
        position: relative;
    }

    .partners-items .slick-track {
        display: flex;
        align-items: center;
    }

    .partner {
        display: block;
    }

    .partner img {
        max-width: 250px;
        transition: 0.3s;
    }


    .slick-dots {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 0;
        padding: 0;
        list-style: none;
    }

    .slick-dots li::marker {
        content: none;
    }

    .slick-dots button {
        display: block;
        margin: 0 3px;
        padding: 0;
        width: 12px;
        height: 12px;
        background-color: #e8e8e8;
        border-radius: 100%;
        text-indent: -9999px;
    }

    .slick-dots button:focus {
        outline: none;
    }

    .slick-dots li.slick-active button, .slick-dots li:hover button {
        background-color: #FF6600;
    }

    /* ## Info-links */

    .info-links {
        margin-top: 40px;
        margin-bottom: 70px;
        overflow: hidden;
    }

    .links-items .slick-track {
        display: flex;
        align-items: center;
    }

    .link {
        display: block;
    }

    .link img {
        max-width: 350px;
    }

    /* ## Bottom menu */

    .bottom-menu {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .bottom-menu .widget_nav_menu {
        flex-basis: 240px;
        margin-left: -20px;
        margin-right: -20px;
    }

    .bottom-menu .widget_nav_menu .widgettitle {
        padding-left: 20px;
        padding-right: 20px;
    }

    .bottom-menu .widget_nav_menu .menu {
        flex-direction: column;
    }

    .bottom-menu .widget_nav_menu li a {
        display: inline-block;
        padding: 0 20px;
        line-height: 35px;
        color: #ffffff;
        background-color: #fff;
        border-radius: 5px;
    }

    .bottom-menu .widget_nav_menu li a:hover {
        color: #0e9eda;
        background-color: #7fe7b3;
    }

    .bottom-menu .widget_nav_menu li ul {
        display: none;
    }

    @media screen and (max-width: 1300px) {
        .bottom-menu .widget_nav_menu {
            margin-left: 0;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 1140px) {
        .bottom-menu .widget_nav_menu {
            min-width: auto;
        }
    }

    @media screen and (max-width: 800px) {
        .bottom-menu {
            justify-content: space-evenly;
        }

        .bottom-menu .widget_nav_menu {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 30px;
        }
    }

    /*--------------------------------------------------------------
# Single
--------------------------------------------------------------*/

    .content-sidebar {
        display: grid;
        grid-template-columns: minmax(600px, 800px) minmax(300px, 425px);
        gap: 75px;
        margin-bottom: 60px;
    }

    .post {
        margin-bottom: 45px;
    }

    .item-content {
        margin-bottom: 35px;
    }

    .post .item-image {
        max-width: 295px;
        float: left;
        margin: 10px 20px 30px 0;
    }

    .post a {
        text-decoration: underline;
    }

    .post h2, .post h3, .post h4, .post h5 {
        margin: 40px 0;
    }

    .post footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 15px;
        width: 100%;
        font-size: 0.875em;
        color: #929393;
        border-top: 1px solid #dfe6e9;
    }

    @media screen and (max-width: 980px) {
        .content-sidebar {
            display: block;
        }
    }

    @media screen and (max-width: 600px) {
        .post footer {
            flex-direction: column;
        }

        .share {
            margin-top: 15px;
        }
    }

    /* ## Breadcrumbs */

    .breadcrumbs {
        display: flex;
        flex-wrap: wrap;
        margin: 40px 0 30px;
        padding: 0;
        font-size: 1.125em;
        color: #868383;
        list-style: none;
    }

    .breadcrumbs li {
        display: inline;
    }

    .breadcrumbs li:not(:last-of-type):after {
        content: "/";
        margin: 0 10px;
    }

    .breadcrumbs a {
        color: #000;
    }

    @media screen and (max-width: 1300px) {
        .breadcrumbs {
            display: inline-block;
        }
    }

    /* ## Lists */

    .post ul, .post ol {
        margin: 20px 0;
        padding: 0;
        position: relative;
        list-style-type: none;
    }

    .post li ul, .post li ol {
        margin-top: 16px;
        margin-left: -10px;
    }

    .post li {
        position: relative;
        margin-bottom: 15px;
        padding-left: 40px;
    }

    .post ul li:before {
        content: "";
        position: absolute;
        left: 0;
        top: 13px;
        width: 25px;
        height: 3px;
        background-color: #FF6600;
    }

    .post ol {
        counter-reset: listCounter;
    }

    .post ol li::before {
        counter-increment: listCounter;
        content: counter(listCounter);
        position: absolute;
        left: 0;
        top: 1px;
        width: 28px;
        height: 28px;
        color: #0e9eda;
        line-height: 28px;
        text-align: center;
        border: 1px solid #0e9eda;
        border-radius: 50%;
    }

    /* ## Blockquote */

    blockquote {
        position: relative;
        margin: 30px 0;
        padding: 25px 50px;
        width: 100%;
        background-color: #f4f4f4;
        border-radius: 10px;
        overflow: hidden;
    }

    blockquote:after {
        content: "";
        position: absolute;
        right: 30px;
        bottom: 10px;
        z-index: 0;
        width: 52px;
        height: 41px;
        /*background-image: url(img/images.png);*/
        background-position: -10px -10px;
    }

    /* ## Images */

    .post img {
    }

    .wp-caption {
        max-width: 100%;
    }

    .post figure figcaption {
        font-size: 0.875em;
        line-height: 1.3;
        text-align: center;
        opacity: 0.7;
    }

    .aligncenter {
        display: block;
        margin: 40px auto;
    }

    .alignright {
        float: right;
        margin: 0 0 40px 40px;
    }

    .alignleft {
        float: left;
        margin: 0 40px 40px 0;
    }

    .post iframe {
        margin: 30px 0;
    }

    .image-info {
        margin-top: 15px;
        font-size: 1em;
        line-height: 1;
        text-align: center;
    }

    .image-info b {
        display: block;
        margin-bottom: 20px;
        font-size: 1.25em;
    }

    @media screen and (max-width: 800px) {
        .alignright, .alignleft {
            float: none;
            display: table;
            margin: 40px auto;
        }
    }

    @media screen and (max-width: 600px) {
        .post .item-image {
            max-width: 100%;
            float: none;
            margin: 0 auto 20px;
            text-align: center;
        }
    }

    /* ## Standard gallery */

    .gallery {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .gallery-item {
        display: flex;
        margin: 0;
        margin-bottom: 5px;
        text-align: center;
        flex-wrap: wrap;
        justify-content: center;
        min-width: 200px;
        width: 200px;
    }

    /* .gallery {
    display: grid;
    grid-template: 1fr / repeat(auto-fit,minmax(200px,1fr));
    grid-gap: 10px;
}
.gallery-item {
    width: 200px;
    display: grid;
    grid-template: 1.9fr .1fr / 1fr;
    justify-items: center;
    margin: 0;
} */
    .gallery-icon img {
        height: inherit;
    }

    .gallery-columns-1 .gallery-item {
        flex-basis: calc(100% - 5px);
    }

    .gallery-columns-2 .gallery-item {
        flex-basis: calc(50% - 5px);
    }

    .gallery-columns-3 .gallery-item {
        flex-basis: calc(33.3333333333% - 5px);
    }

    .gallery-columns-4 .gallery-item {
        flex-basis: calc(25% - 5px);
    }

    .gallery-columns-5 .gallery-item {
        flex-basis: calc(20% - 5px);
    }

    .gallery-columns-6 .gallery-item {
        flex-basis: calc(16.6666666667% - 5px);
    }

    .gallery-columns-7 .gallery-item {
        flex-basis: calc(14.2857142857% - 5px);
    }

    .gallery-columns-8 .gallery-item {
        flex-basis: calc(12.5% - 5px);
    }

    .gallery-columns-9 .gallery-item {
        flex-basis: calc(11.1111111111% - 5px);
    }

    .gallery-item a {
        display: block;
    }

    .gallery-icon img {
        margin: 0 auto;
        display: block;
    }

    /* ## Gallery */

    .gallery-block {
        margin-bottom: 35px;
    }

    .gallery-block .top {
    }

    .gallery-block .bottom {
        display: flex;
        margin-top: 12px;
        margin-left: -6px;
        margin-right: -6px;
    }

    .gallery-block .bottom a {
        margin-left: 6px;
        margin-right: 6px;
    }

    .gallery-block a:hover {
        opacity: 0.7;
    }

    .gallery-block img {
        display: block;
    }

    .gallery-block .more-images {
        position: relative;
    }

    .gallery-block .more-images span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 30px;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }

    .gallery-block .bottom .hidden {
        display: none;
    }

    /* ## Table */

    table {
        margin: 30px 0;
        width: 100%;
        max-width: 100%;
        text-align: center;
        border-collapse: collapse;
        border-spacing: 0;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }

    tbody tr:nth-child(odd):not(:first-of-type) td {
        background: #c3f9de;
    }

    tbody tr:first-of-type {
        color: #fff;
        background: #FF6600;
        font-weight: 700;
    }

    table > tbody > tr:first-child > td:first-child, table > tbody > tr:first-child > th:first-child {
        border-radius: 10px 0 0 0;
    }

    table > tr:first-child > td:first-child, table > tr:first-child > th:first-child {
        border-radius: 10px 0 0 0;
    }

    table > tbody > tr:first-child > td:last-child, table > tbody > tr:first-child > th:last-child {
        border-radius: 0 10px 0 0;
    }

    table > tr:first-child > td:last-child, table > tr:first-child > th:last-child {
        border-radius: 0 10px 0 0;
    }

    table > tbody > tr:last-child > td:last-child, table > tbody > tr:last-child > th:last-child {
        border-radius: 0 0 10px 0;
    }

    table > tr:last-child > td:last-child, table > tr:last-child > th:last-child {
        border-radius: 0 0 10px 0;
    }

    table > tbody > tr:last-child > td:first-child, table > tbody > tr:last-child > th:first-child {
        border-radius: 0 0 0 10px;
    }

    table > tr:last-child > td:first-child, table > tr:last-child > th:first-child {
        border-radius: 0 0 0 10px;
    }

    td, th {
        padding: 14px 5px;
        font-size: 0.9375;
        border: 1px solid #fff;
    }

    table td ul {
        margin-bottom: 15px;
    }

    td p:last-child {
        margin-bottom: 0;
    }

    /* ## Share */

    .share {
        display: flex;
        align-items: center;
    }

    .share > span {
        margin-right: 15px;
    }

    .likely {
        display: flex;
    }

    .likely > div {
        margin-right: 10px;
    }

    .likely__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .likely__icon:hover {
        opacity: 0.8;
    }

    .likely__icon_vkontakte {
        background-color: #3d81c0;
    }

    .likely__icon_facebook {
        background-color: #5d77cb;
    }

    .likely__icon_telegram {
        background-color: #4b99d7;
    }

    .likely__icon_odnoklassniki {
        background-color: #ee7b2a;
    }

    .likely__icon_whatsapp {
        background-color: #7cc947;
    }

    .likely__icon svg {
        width: 18px;
        height: 18px;
        fill: #fff;
    }

    /*--------------------------------------------------------------
# Sidebar
--------------------------------------------------------------*/

    .sidebar {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        align-self: start;
    }

    .sidebar .widget {
        margin-bottom: 55px;
    }

    .widgettitle {
        margin-bottom: 36px;
    }

    .widget.news-posts {
        margin-bottom: 50px;
    }

    .widget.news-posts .h2 {
        font-size: 1.375em;
    }

    .widget.news-posts .item .item-date {
        color: #FF6600;
    }

    .widget.news-posts .item .h4 {
        font-weight: 500;
        font-size: 18px;
    }

    .widget.news-posts .item .h4:hover {
        color: #ffffff;
    }

    .widget.news-posts .item:not(:last-of-type) {
        border-bottom: 1px solid #989898;
        padding-bottom: 35px;
        margin-bottom: 45px;
    }

    .widget.news-posts .item-date {
        color: #929393;
    }

    .widget.info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;
        background: #f4f4f4;
        border-radius: 10px;
    }

    .widget.info .tel {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        max-width: 240px;
        text-align: center;
    }

    .widget.info img {
        width: 150px;
    }

    .sidebar-primary .widget_nav_menu ul {
        flex-direction: column;
    }

    .sidebar-primary .widget_nav_menu ul li a {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 1.0625em;
    }

    @media screen and (max-width: 980px) {
        .sidebar {
            display: none;
        }

        .page-template-education-page .sidebar,
        .page-template-science-page .sidebar,
        .page-template-direction-page .sidebar,
        .page-template-patients-page .sidebar,
        .single-post .sidebar {
            display: block;
        }

        .page-template-education-page .sidebar-primary .info,
        .page-template-education-page .sidebar-primary .news-posts,
        .page-template-science-page .sidebar-primary .info,
        .page-template-science-page .sidebar-primary .news-posts,
        .page-template-direction-page .sidebar-primary .info,
        .page-template-direction-page .sidebar-primary .news-posts,
        .page-template-patients-page .sidebar-primary .info,
        .page-template-patients-page .sidebar-primary .news-posts,
        .single-post .sidebar-primary .info,
        .single-post .sidebar-primary .news-posts {
            display: none;
        }
    }

    /*--------------------------------------------------------------
# Archive
--------------------------------------------------------------*/

    .archive-list-wrap {
        margin-bottom: 55px;
    }

    .archive-heading h1 {
        margin-bottom: 45px;
    }

    .archive-list {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
        gap: 27px 34px;
        margin-bottom: 45px;
    }

    .archive-list .item {
        display: flex;
        flex-direction: column;
        padding: 25px 30px;
        background-color: #fff;
        box-shadow: 0 0 24px rgba(155, 197, 213, 0.36);
        border-radius: 10px;
    }

    .archive-list .item .h4 {
        font-weight: 700;
    }

    .archive-list .item-image {
        position: relative;
        left: -30px;
        top: -25px;
        display: block;
        width: calc(100% + 60px);
    }

    .archive-list .item img {
        display: block;
        width: 100%;
    }

    .archive-list .item .item-date {
        margin-bottom: 20px;
    }

    .archive-list:not(.employees-list) .item .item-desc {
        margin-bottom: 25px;
        font-size: 1em;
        line-height: inherit;
    }

    .archive-list .item .button-arrow {
        margin-top: auto;
    }

    .archive-list-wrap .button-big {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    @media screen and (max-width: 400px) {
        .archive-list {
            grid-template-columns: auto;
        }

        .archive-list .item {
            padding: 20px;
        }

        .archive-list .item-image {
            left: -20px;
            top: -20px;
            width: calc(100% + 40px);
        }
    }

    /* ## Employees archive */

    .department-employees {
        margin-bottom: 90px;
    }

    .archive-list.employees-list {
        grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
        gap: 40px 45px;
    }

    .archive-list.employees-list .item-image {
        left: -32px;
        top: -27px;
        width: calc(100% + 64px);
        max-height: 280px;
        overflow: hidden;
    }

    .employees-list .item {
        border-width: 2px;
        border-style: solid;
        border-color: #fff;
    }

    .employees-list .item.leadership {
        border-color: #003c93;
    }

    .employees-list .item .h4 {
        margin-top: -10px;
        margin-bottom: 15px;
        font-size: 1.1875em;
        font-weight: 500;
        line-height: 1.65;
    }

    .employees-list .item .h4:hover {
        color: #ffffff;
    }

    .employees-list .item .item-desc {
        font-size: 0.9375em;
    }

    .employees-list .item img {
        border-radius: 10px 10px 0 0;
    }

    .load-more-target {
        min-height: 300px;
    }

    #loading {
        position: absolute;
        z-index: 99;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        display: none;
        width: 80px;
        height: 80px;
    }

    #loading:after {
        content: "";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #FF6600;
        border-color: #FF6600 transparent #FF6600 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width: 400px) {
        .archive-list.employees-list .item-image {
            left: -20px;
            top: -20px;
            width: calc(100% + 40px);
        }
    }

    /*--------------------------------------------------------------
# News page
--------------------------------------------------------------*/
    .main-top .page-toc {
        overflow: hidden;
    }

    .page-template .main-top h1 {
        margin-bottom: 30px;
    }

    .tab-filter, .page-toc {
        position: relative;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 80px;
        padding-bottom: 15px;
        font-size: 1.125em;
        font-weight: 500;
    }

    .tab-filter:after, .page-toc:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: calc(-50vw + 50%);
        z-index: -1;
        display: block;
        height: 2px;
        width: 100vw;
        background-color: #cadee2;
    }

    .page-toc .lwptoc, .page-toc .lwptoc:first-child {
        margin: 0;
    }

    .page-toc .lwptoc_itemWrap {
        display: flex;
    }

    .page-toc .lwptoc_i {
        padding: 0;
    }

    .page-toc .lwptoc-baseItems .lwptoc_items {
        font-size: 100%;
    }

    .tab-filter .filter-item, .page-toc .toc-item, .lwptoc_itemWrap a {
        position: relative;
        color: #696969;
        cursor: pointer;
        white-space: nowrap;
    }

    .tab-filter .filter-item:not(:last-of-type), .page-toc .toc-item:not(:last-of-type), .lwptoc_itemWrap a {
        display: flex;
        align-items: center;
        margin-right: 55px;
    }

    .tab-filter .filter-item:after, .page-toc .toc-item:after, .lwptoc_itemWrap a:after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #FF6600;
        opacity: 0;
        transition: 0.3s;
    }

    .tab-filter .filter-item.active, .tab-filter .filter-item:hover, .page-toc .toc-item.active, .page-toc .toc-item:hover, .lwptoc_itemWrap a:hover {
        color: #000;
    }

    .tab-filter .filter-item.active:after, .tab-filter .filter-item:hover:after, .page-toc .toc-item.active:after, .page-toc .toc-item:hover:after, .lwptoc_itemWrap a:hover:after {
        opacity: 1;
    }

    @media screen and (max-width: 600px) {
        .tab-filter, .page-toc {
            overflow-x: auto;
        }
    }

    @media screen and (max-width: 400px) {
        .tab-filter .filter-item:not(:last-of-type), .page-toc .toc-item:not(:last-of-type) {
            margin-right: 40px;
        }

        .tab-filter, .page-toc {
            font-size: 1em;
            line-height: 1.4;
        }
    }

    /*--------------------------------------------------------------
# Doctors page
--------------------------------------------------------------*/

    .filter {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }

    .sub-therm {
        display: flex;
        flex: 2;
    }

    .sub-therm div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin-right: 15px;
        padding: 7px 10px;
        text-align: center;
        background-color: #dfdfdf;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: #dfdfdf;
        opacity: 0.6;
        transition: 0.3s;
        cursor: pointer;
    }

    .sub-therm div.active, .sub-therm div:hover {
        background-color: #fff;
        border-color: #bcbbbb;
        opacity: 1;
    }

    .department-list {
        flex: 1;
    }

    @media screen and (max-width: 800px) {
        .filter {
            overflow: hidden;
        }

        .sub-therm {
            flex: auto;
            width: 100%;
        }

        .sub-therm div:last-of-type {
            margin-right: 0;
        }

        .department-list {
            margin-top: 15px;
        }
    }

    /*--------------------------------------------------------------
# Department page
--------------------------------------------------------------*/

    .page-template-department .page-toc {
        margin-bottom: 50px;
    }

    .page-template-department .post > h2 {
        margin-top: 0;
        font-size: 30px;
    }

    /* ## Buttons */

    .department-buttons {
        margin-top: 45px;
        margin-bottom: 55px;
    }

    .department-buttons .top {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .department-buttons .button {
        margin-right: 15px;
        margin-bottom: 15px;
    }

    .department-buttons .info-content {
        display: none;
    }

    .info-content.active {
        display: block;
    }

    /* ## Map */

    .department-map {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
    }

    .department-map:after {
        content: "";
        position: absolute;
        top: 0;
        left: calc(-50vw + 50%);
        z-index: -1;
        display: block;
        height: 100%;
        width: 100vw;
        background-color: #f9f9f9;
    }

    .department-map > div {
        flex-grow: 1;
    }

    .department-map .left {
        max-width: 690px;
        margin-right: 60px;
    }

    .department-map .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-top: 30px;
    }

    .department-map h2 {
        margin-bottom: 35px;
        font-size: 30px;
    }

    .department-map .contacts-info {
        font-size: 1em;
    }

    .department-map .contacts-info .mail, .department-map .adress {
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        font-size: 1em;
    }

    .department-map .tel {
        display: flex;
        margin-bottom: 20px;
    }

    .department-map .tel a {
        font-family: inherit;
        font-size: 1em;
        font-weight: 300;
    }

    .department-map .tel span {
        display: block;
        font-size: 0.875em;
        opacity: 0.6;
    }

    .department-map .tel:before {
        content: "";
        flex-shrink: 0;
        margin-right: 20px;
        margin-top: 5px;
        width: 24px;
        height: 24px;
        /*background-image: url(img/images.png);*/
        background-repeat: no-repeat;
        background-position: -82px -10px;
    }

    .department-map .button-arrow {
        font-size: 1.125em;
    }

    @media screen and (max-width: 980px) {
        .department-map {
            flex-direction: column-reverse;
            align-items: center;
            padding: 30px 0;
        }

        .department-map .right {
            padding-left: 0;
            margin-bottom: 30px;
        }

        .department-map .left {
            max-width: 100%;
            width: 100%;
        }
    }

    /* ## Employees */

    .department-employees h2 {
        margin-bottom: 50px;
        font-size: 30px;
    }

    .sidebar-department.employees-list {
        align-content: start;
        justify-items: center;
        position: sticky;
        top: 0;
        align-self: start;
    }

    .sidebar-department .item {
        max-width: 290px;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 1024px) {
        .sidebar-department.employees-list {
            align-content: center;
            justify-items: center;
        }
    }

    /*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/

    .site-footer {
        position: relative;
        margin: 0 auto;
        padding-top: 80px;
        padding-bottom: 60px;
        max-width: 1300px;
        background-color: #7fe7b3;
    }

    .site-footer:after {
        content: "";
        position: absolute;
        top: 0;
        left: calc(-50vw + 50%);
        z-index: -1;
        display: block;
        height: 100%;
        width: 100vw;
        background-color: #7fe7b3;
    }

    .site-footer hr {
        border-top-color: #d1e2ea;
    }

    @media screen and (max-width: 1300px) {
        .site-footer {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media screen and (max-width: 1140px) {
        .site-footer {
            padding-top: 50px;
        }
    }

    /* ## Footer contacts */

    .footer-contacts {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 25px;
    }

    .footer-contacts > div {
        display: flex;
        flex-direction: column;
        flex-basis: 300px;
    }

    .footer-contacts .tel a {
        display: flex;
        margin-bottom: 20px;
        line-height: 1;
    }

    .footer-contacts .tel a:before {
        content: "";
        margin-right: 30px;
        width: 24px;
        height: 24px;
        /*background-image: url(img/images.png);*/
        background-repeat: no-repeat;
        background-position: -82px -10px;
    }

    .footer-contacts .tel div {
        padding-left: 54px;
        font-size: 0.875em;
        line-height: 1.4;
        opacity: 0.6;
    }

    .footer-contacts .appointment {
        align-items: flex-end;
    }

    .footer-contacts .button-big {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 65px;
    }

    @media screen and (max-width: 1140px) {
        .footer-contacts {
            justify-content: space-evenly;
        }

        .footer-contacts > div {
            margin-top: 30px;
        }

        .footer-contacts .appointment {
            align-items: center;
        }
    }

    /* ## Footer info */

    .footer-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 25px;
    }

    .footer-info-item:not(:last-of-type) {
        margin-right: 30px;
    }

    .footer-info-item .logo > div {
        font-size: 16px;
    }

    .footer-info-item .logo small {
        font-size: 12px;
    }

    .footer-info-item .contacts-info .adress {
        margin-bottom: 17px;
    }

    .footer-info a:hover {
        text-decoration: underline;
    }

    .contacts-info .mail {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 0.875em;
        color: #ffffff;
    }

    .contacts.contacts-info-new .mail {
        grid-area: mail;
        height: fit-content;
        align-self: center;
        position: relative;
        padding-left: 25px;
    }

    .contacts-info .mail:before {
        content: "";
        flex-shrink: 0;
        margin-right: 20px;
        width: 21px;
        height: 16px;
        /*background-image: url(img/images.png);*/
        background-repeat: no-repeat;
        background-position: -10px -121px;
    }

    .contacts-info-new .mail:before {
        content: "";
        flex-shrink: 0;
        position: absolute;
        margin-right: 20px;
        width: 21px;
        height: 16px;
        /* background-image: url(img/images.png);*/
        background-repeat: no-repeat;
        background-position: -10px -121px;
        left: 0;
        top: 6px;
    }

    .footer-menu {
        flex-direction: column;
        min-width: 200px;
        line-height: 2;
    }

    .footer-menu a {
        font-size: 0.875em;
        color: #ffffff;
    }

    .footer-menu ul {
        display: none;
    }

    .footer-social {
        display: flex;
        align-items: center;
        margin-top: 15px;
        padding-left: 45px;
    }

    .block__social {
        padding-left: 0;
        margin-bottom: 25px;
    }

    .footer-social a {
        width: 17px;
        height: 17px;
        margin-right: 10px;
        opacity: 0.5;
    }

    .footer-social a:hover {
        opacity: 0.8;
    }

    .footer-social a:before {
        content: "";
        background-repeat: no-repeat;
    }

    .footer-social .vk {
        width: 16px;
        height: 10px;
        /*background-image: url(img/vk.png);*/
    }

    .footer-social .fb {
        width: 9px;
        height: 16px;
        /*background-image: url(img/fb.png);*/
    }

    .footer-social .tg {
        width: 17px;
        height: 14px;
        /*background-image: url(img/tg.png);*/
    }

    .footer-social .insta {
        width: 16px;
        height: 16px;
        /*background-image: url(img/insta.png);*/
    }

    .footer-social .you {
        width: 16px;
        height: 14px;
        /*background-image: url(img/you.png);*/
    }


    .content__block-news {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background: #f9fbfb;
        padding: 30px;
        margin-bottom: 50px;
        border-radius: 8px;
    }

    .content__block-news .btn {
        width: 30%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .content__block-news .btn a {
        background-color: #FF6600;
        border-color: #FF6600;
        color: #fff;
        border-radius: 24px;
        font-size: 14px;
        justify-self: start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        justify-items: center;
        font-weight: 400;
        padding: 10px 20px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
    }

    .content__block-news .btn a:hover {
        background: #ffffff4d;
        border: 1px solid #FF6600;
        color: #FF6600;
    }

    .content__block-news .text {
        width: 70%;
    }

    .content__block-news .text p {
        font-size: 14px;
    }

    .block__social {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 15px;
        padding-left: 45px;
    }

    .block__social {
        padding-left: 0;
        margin: 20px 0;
    }

    .block__social a {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        opacity: 0.5;
        background: #ffffff;
        border: 1px solid #a9a9a9;
        border-radius: 53px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .block__social.footer a {
        border: 1px solid #deeff5;
    }

    .block__social a:hover {
        opacity: 0.8;
    }

    .block__social a img {
        width: auto;
        height: 50%;
        border: none;
        border-radius: 0;
    }

    .block__social a.gazeta {
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        background: none;
        border: none;
        border-radius: 0;
        color: black;
        font-weight: bold;
    }

    @media screen and (max-width: 1140px) {
        .footer-info {
            -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
            margin-top: 0;
        }

        .footer-info-item .logo > div {
            font-size: 14px;
        }

        .footer-info-item {
            margin-top: 30px;
        }

        .footer-menu {
            min-width: auto;
        }
    }

    @media (max-width: 1100px) {
        .content__block-news {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .content__block-news .text {
            width: 100%;
        }

        .content__block-news .btn {
            width: 100%;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: start;
        }
    }

    @media screen and (max-width: 800px) {
        .footer-info-item:first-of-type {
            margin: 20px auto 0;
        }
    }

    @media (max-width: 600px) {
        .content__block-news {
            padding: 15px;
        }

        .content__block-news .btn {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .block__social a {
            margin-right: 5px;
        }

        .block__social a:last-child {
            margin-right: 0;
        }

        .block__social a.gazeta {
            width: 100%;
            margin-top: 20px;
        }

        .block__social {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .button-big {
            font-size: 0.8em;
        }

        .footer-info-item:not(:last-of-type) {
            margin-right: 0;
        }
    }

    @media (max-width: 350px) {
        .content__block-news .btn a {
            font-size: 12px;
        }
    }

    /*======================= CUSTOM STYLES =======================*/
    /* ======== Страница обратная связь ========*/
    article.post-4900 .item-content blockquote {
        border-radius: 3px;
        border: 1px solid #ecf2f4;
        background-color: unset;
    }

    /* ======== Страница сотрудники ========*/
    .btn_block {
        text-align: center;
    }

    a.btn_sotrudniki__download {
        padding: 17px 31px;
        color: #fff;
        text-align: center;
        font-weight: 300;
        line-height: 1;
        background-color: #FF6600;
        border: 0;
        cursor: pointer;
        border-radius: 30px;
        font-size: 1.125em;
    }

    .btn_block a {
        text-decoration: none;
    }

    .btn_block a:hover {
        opacity: .8;
    }

    .btn_block button {
        margin-bottom: 30px !important;
    }

    /* ===================== главная все новости ================*/
    .link-for-news {
        text-align: left;
    }

    @media screen and (max-width: 1140px) {
        .top-menu li .sub-menu {
            display: none;
        }
    }

    /* ======= Фикс бага с открытием меню на адаптиве ===========*/
    @media screen and (max-width: 1140px) {
        .focusss .sub-menu {
            display: block !important;
        }

        .primary-menu li {
            outline: none !important;
        }

        .top-menu .menu-item-has-children {
            position: relative;
        }

        .top-menu .menu-item-has-children:not(.focusss):before {
            content: '';
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
            /*background: url(img/treug.svg);*/
            width: 15px;
            height: 15px;
            transform: rotate(180deg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }

        .top-menu .menu-item-has-children.focusss:before {
            content: '';
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
            /*background: url(img/treug.svg);*/
            width: 15px;
            height: 15px;
            transform: rotate(180deg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }

        .top-menu .menu-item-has-children:not(.focusss):after {
            content: '';
            position: absolute;
            width: 57px;
            height: 57px;
            right: 0;
            top: 0;
            border-left: 1px solid #5f6785;
        }

        .top-menu .menu-item-has-children.focusss:after {
            content: '';
            position: absolute;
            width: 57px;
            height: 57px;
            right: 0;
            top: 0;
            border-left: 1px solid #5f6785;
        }

        .top-menu .menu-item-has-children .sub-menu li:before {
            content: none;
        }

        .top-menu .menu-item-has-children .sub-menu li:after {
            content: none;
        }

        .top-menu .sub-menu {
            background: #1d1f2c;
        }

        ul.menu .sub-menu {
            background: #1d1f2c;
        }
    }

    /* ========= Страница Журнал здоровья =============*/
    #breadcrumbs {
        display: flex;
        flex-wrap: wrap;
        margin: 40px 0 30px;
        padding: 0;
        font-size: 1.125em;
        color: #868383;
        list-style: none;
    }

    /* =========== Виджеты ==================*/
    .sidebar-primary .widget {
        margin-bottom: 60px;
    }

    .direction-widget {
        margin-bottom: 20px;
    }

    .widget.info_direction {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;
        background: #f4f4f4;
        border-radius: 10px;
    }

    .widget.info_direction .tel {
        text-align: center;
    }

    .widget.info_direction img {
        width: 150px;
    }

    .widget.info_direction .tel a:last-child {
        font-size: 1.2rem;
    }

    .widget.info_direction .tel small {
        width: 100%;
        display: block;
        text-align: center;
    }

    /* =============== Блок для карточек подразделений =========*/
    .block__service {
        position: relative;
        border: 1px solid #ecf2f4;
        border-radius: 3px;
        transition: .3s;
        display: grid;
        grid-template: 1fr / .7fr 1.3fr;
        grid-template-areas: 'img text';
    }


    .block__service:hover {
        border-color: transparent;
        -webkit-box-shadow: 0px 5px 20px 0px #1219261a;
        box-shadow: 0px 5px 20px 0px #1219261a;
    }

    .block__service:hover > a:last-child {
        background: #FF6600;
        color: white;
    }

    .block__service .block__img {
        grid-area: img;
        display: grid;
        align-self: center;
        padding: 5%;
    }

    .block__service .block__img img {
        width: 100%;
    }

    .block__service .block__text {
        grid-area: text;
        padding: 5% 15% 5% 0;
        font-size: 0.9333em;
    }

    .block__service .title {
        grid-area: title;
        transition: .3s;
        font-size: 1.2em;
        text-decoration: none;
    }

    .block__service .title:hover {
        color: #FF6600;
    }

    .block__service .otdel-contact {
        grid-area: contacts;
    }

    .block__service a:nth-child(3) {
        transition: .3s;
        position: absolute;
        right: 5%;
        top: 10%;
        color: #FF6600;
        border: 1px solid #FF660063;
        border-radius: 50%;
        text-decoration: none;
        width: 40px;
        height: 40px;
        display: grid;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    @media (max-width: 650px) {
        .block__service {
            grid-template: 250px 1fr / 1fr;
            grid-template-areas: 'img' 'text';
        }

        .block__service .block__img img {
            width: auto;
            height: 200px;
        }

        .block__service .block__img {
            justify-content: center;
        }

        .block__service .block__text {
            padding: 0 20px 20px 20px;
        }

        .block__service a:nth-child(3) {
            right: 5%;
            top: 5%;
        }
    }

    @media (max-width: 410px) {
        .block__service .otdel-contact strong {
            display: block;
        }
    }

    @media (max-width: 350px) {
        .block__service a:nth-child(3) {
            right: 3%;
            top: 2%;
        }
    }

    /* ============================================================================== */
    /* ==================================================  Макет отделений  ========= */
    /* ============================================================================== */
    .banner {
        max-width: 1600px;
        height: 500px;
        margin: auto;
        padding-left: 7%;
        background-position: center !important;
        background-repeat: no-repeat !important;
    }

    .banner__action {
        background-color: rgba(255, 255, 255, 0.68);
        max-width: 600px;
        height: 100%;
        padding: 4%;
        display: grid;
        grid-template: .2fr 1fr .3fr / 1fr 1fr;
        grid-template-areas: 'title title' 'text text' 'btn-order btn-questions';
    }

    .banner__action h1:nth-child(1) {
        grid-area: title;
        font-size: 1.6em;
    }

    .banner__action p:nth-child(2) {
        grid-area: text;
        margin-bottom: 20px;
    }

    .banner__action a {
        background-color: #FF6600;
        border-color: #FF6600;
        color: #fff;
        border-radius: 24px;
        font-size: 14px;
        height: 46px;
        width: 162px;
        justify-self: start;
        display: grid;
        align-items: center;
        justify-items: center;
        font-weight: 400;
    }

    .banner__action a:nth-child(3) {
        grid-area: btn-order;
    }

    .banner__action a:nth-child(4) {
        grid-area: btn-questions;
        background: #ffffff4d;
        color: #FF6600 !important;
        border: 1px solid #FF6600;
    }

    .banner__action a:nth-child(4):hover {
        background: #FF6600;
        color: white !important;
    }

    .banner__action a:nth-child(3):hover {
        background: #ffffff4d;
        border: 1px solid #FF6600;
        color: #FF6600;
    }

    .content-sidebar.department {
        display: grid;
        grid-template-columns: minmax(300px, 300px) minmax(600px, 920px);
        gap: 75px;
    }

    /* ======================================= */
    /* ===============  ТАБЫ  ================ */
    /* ======================================= */
    .myvertical-tabs li:nth-child(1) {
        width: 119px;
    }

    .myvertical-tabs li:nth-child(2) {
        width: 210px;
    }

    .myvertical-tabs li:nth-child(3) {
        width: 105px;
    }

    .myvertical-tabs a.reviews__link {
        width: 105px;
        transition: .4s;
        text-align: center;
        color: #777;
        cursor: pointer;
        background: #f7f9fa;
        border: 1px solid #e3e3e3;
        position: relative;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .myvertical-tabs a.reviews__link:hover {
        color: #FF6600;
        box-shadow: 0px 5px 20px 0px rgb(18 25 38 / 10%);
        background: white;
    }

    .myvertical-tabs li:nth-child(3) a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrap-myvertical-tabs h3 {
        margin-bottom: 30px;
    }

    .myvertical-tabs {
        list-style: none;
        background: #FFF;
        padding: 0;
        margin: 0;
        display: inline-flex;
    }

    .myvertical-tabs li {
        color: #777;
        cursor: pointer;
        background: #f7f9fa;
        border: 1px solid #e3e3e3;
        position: relative;
        height: 54px;
    }

    .myvertical-tabs li {
        margin-right: 10px;
        font-weight: bold;
        transition: .4s;
        text-align: center;
        display: grid;
        align-items: center;
    }

    .myvertical-tabs li:hover:not(.chosen) {
        color: #FF6600;
        box-shadow: 0px 5px 20px 0px rgb(18 25 38 / 10%);
        background: white;
        font-weight: bold;
    }

    .myvertical-tabs li:hover {
        color: #434343;
        background: #efefef;
        border: 1px solid #e3e3e3;
    }

    .myvertical-tabs li.chosen {
        background: white;
        border-top: 3px solid #FF6600;
        color: #000;
        font-weight: bold;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 3px;
    }

    .myvertical-tabs-content {
        display: none;
        padding: 10px 15px;
        margin-left: -1px;
    }

    .myvertical-tabs-content.active {
        display: block;
    }

    .block_review .forma__review {
        padding: 5%;
    }

    .block_review .wrap-vopros {
        display: none;
    }

    .forma__review {
        margin-top: 40px;
        padding: 3% 3% 3% 10%;
        margin-bottom: 50px;
        border-radius: 3px;
        border: 1px solid #ecf2f4;
    }

    .forma__review p {
        font-size: 25px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    /* ======================================= */
    /* ========  Клинические случаи  ========= */
    /* ======================================= */

    .clinic {
        border: 1px solid #e3e3e3;
        max-width: 920px;
        overflow: hidden;
        padding: 15px;
        margin-bottom: 15px;
        transition: .3s;
    }

    .clinic:hover {
        box-shadow: 0px 5px 20px 0px #1219261a;
    }

    .clinic .story p a {
        position: relative;
        padding-left: 40px;
        transition: .3s;
    }

    .clinic:hover .story p a {
        color: #FF6600;
        text-decoration: underline;
    }

    .clinic .story p a:before {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        top: -5px;
        /*background: url(img/link.svg);*/
        left: 0;
        background-size: cover;
        transform: rotate(-50deg);
    }


    /* ======================================= */
    /* =====  Карточки докторов в слайдере === */
    /* ======================================= */

    .department-map-new {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
        background: #f7f9fa;
        padding: 3% 0;
        border-radius: 3px;
    }

    .slider_doctor {
        margin-bottom: 80px;
    }

    .depertment.leadership {
        width: 250px !important;
        background: white;
        border: 1px solid #f7f9fa;
    }

    .depertment.leadership .item-image img {
        border-radius: 100%;
        height: auto;
        width: 150px;
    }

    .depertment.leadership {
        width: 250px !important;
        background: white;
        border: 1px solid #ecf2f4;
        display: grid;
        height: 425px;
        padding: 3%;
        text-align: center;
        justify-items: center;
        transition: .4s;
        border-radius: 3px;
        margin-left: 15px;
    }

    .depertment.leadership .h4 {
        font-size: 1.2em;
    }

    .depertment.leadership:hover {
        border-color: transparent;
        box-shadow: 0px 5px 20px 0px rgb(18 25 38 / 10%);
    }

    .slick-track {
        padding: 2% 0;
    }

    .myvertical-tabs-content {
        margin-bottom: 40px;
    }

    /* ======================================= */
    /* ===========      Сайдбар    =========== */
    /* ======================================= */
    .sidebar-depatment-menu ul li {
        padding: 22px 10px;
        width: 100%;
        background: white;
        border: 1px solid #f7f9fa;
    }

    .sidebar-depatment-menu ul li:hover {
        background: #f7f9fa;
    }

    .sidebar-depatment-menu ul li a {
        color: black;
    }


    /* ======================================= */
    /* ===========       Slider    =========== */
    /* ======================================= */
    .slider_doctor, .departmetn-employees-list {
        max-width: 930px;
    }

    .departmetn-employees-list button.prev.slick-arrow, button.prev.slick-arrow {
        background: white;
        color: black;
        position: absolute;
        top: 40%;
        left: -15px;
        z-index: 11;
        border: 1px solid #ecf2f4;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        padding: 0;
        font-weight: bold;
    }

    .departmetn-employees-list button.next.slick-arrow, button.next.slick-arrow {
        background: white;
        color: black;
        position: absolute;
        top: 40%;
        right: 0;
        z-index: 11;
        border: 1px solid #ecf2f4;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        padding: 0;
        font-weight: bold;
    }

    .departmetn-employees-list button:hover {
        background: #FF6600 !important;
        color: white !important;
    }

    /* ======================================= */
    /* ===========       ВИДЖЕТ    =========== */
    /* ======================================= */
    .sidebar-depatment-menu .widget {
        margin-bottom: 20px;
    }

    .wiget-vopros {
        padding-top: 30px;
        background: #f9fbfb;
        padding: 10% 9%;
        font-size: 13px;
        text-align: center;
        display: grid;
        justify-items: center;
        grid-gap: 15px;
    }

    .wiget-vopros a {
        background: #FF6600;
        padding: 3% 10%;
        color: white;
        border-radius: 20px;
        font-weight: 400;
        text-decoration: none;
    }

    @media (max-width: 980px) {
        .page-toc {
            margin-bottom: 40px;
        }

        .block_review .wrap-vopros {
            display: flex;
            margin-bottom: 25px;
            justify-content: center;
        }

        .block_review .wiget-vopros {
            padding-top: 30px;
            background: #f9fbfb;
            padding: 25px 15px;
            font-size: 13px;
            text-align: center;
            display: grid;
            justify-items: center;
            grid-gap: 15px;
        }

        .block_review .wiget-vopros a {
            text-decoration: none;
        }
    }

    /* ======================================= */
    /* ===========       POPUP     =========== */
    /* ======================================= */
    .modal-open {
        overflow: hidden;
    }

    #question {
        width: 30%;
        min-width: 480px;
        max-width: 500px;
        height: fit-content;
        border-radius: 4px;
        background: #f9fbfb;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        opacity: 0;
        z-index: 38;
        text-align: center;
    }

    #question .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 15px 15px 15px;

    }

    #question a:nth-child(4) {
        border: 1px solid #f0f0f0;
        padding: 10px 15px;
        background: #FF6600;
        border-radius: 13px;
        margin-bottom: 50px;
        color: #ffffff;
        font-weight: bold;
        width: fit-content;
    }

    #question a:nth-child(4):hover {
        opacity: 0.8;
        transition: .3s;
    }

    #visit {
        min-width: 310px;
        max-width: 500px;
        border-radius: 4px;
        min-height: 600px;
        max-height: 950px;
        background: #f9fbfb;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: none;
        opacity: 0;
        z-index: 38;
        text-align: center;
        padding: 2%;
        overflow-y: auto;
    }

    #question #question__close, #visit #visit__close {
        width: 50px;
        height: 50px;
        position: absolute;
        font-size: 40px;
        line-height: initial;
        top: 0px;
        right: 0px;
        cursor: pointer;
        background: #FF6600;
        display: grid;
        align-items: center;
        justify-items: center;
        color: white;
        border-radius: 0 3px 0 3px;
        transition: .3s;
    }

    #question #question__close:hover, #visit #visit__close:hover, #sucess-modal #sucess-modal__close:hover {
        opacity: .8;
    }

    #questionOverlay, #visitOverlay {
        z-index: 37;
        position: fixed;
        background: rgba(0, 0, 0, .7);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        display: none;
        overflow: hidden;
    }

    /*========== форма ЗАДАТЬ ВОПРОС*/
    #question::-webkit-scrollbar {
        width: 10px;
        height: 3px;
    }

    #question::-webkit-scrollbar-button {
        height: 0px;
    }

    #question::-webkit-scrollbar-track {
        background-color: #999;
    }

    #question::-webkit-scrollbar-track-piece {
        background-color: #3b4043;
    }

    #question::-webkit-scrollbar-thumb {
        height: 50px;
        background-color: #059971;
        border-radius: 3px;
    }

    #question::-webkit-scrollbar-corner {
        background-color: #999;
    }

    #question::-webkit-resizer {
        background-color: #666;
    }

    #question p:nth-child(2) {
        font-size: 30px;
        font-weight: 400;
    }

    #question p br {
        display: none;
    }

    #question input:not[type=checkbox] {
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
        border-bottom: 1px solid #cacaca;
    }

    #question label {
        text-align: left;
    }

    form#zadat-vopros input:not([type=checkbox]) {
        margin-bottom: 20px;
    }

    #question p:nth-child(3) {
        margin-bottom: 10px;
    }

    .checkni span span span label {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .checkni {
        text-align: left;
        margin: 10px 0;
        display: flex;
        align-items: center;
    }

    .checkni span {
        margin: 0;
    }

    .checkni p {
        font-size: 12px !important;
        font-weight: 400;
    }

    .checkni span span span label input {
        margin-right: 10px;
    }

    .wpcf7 form .wpcf7-response-output {
        margin: 0;
    }

    form#zadat-vopros span.ajax-loader {
        display: none !important;
    }

    /*========== форма Запись онлайн*/

    #visit::-webkit-scrollbar {
        width: 10px;
        height: 3px;
    }

    #visit::-webkit-scrollbar-button {
        height: 0px;
    }

    #visit::-webkit-scrollbar-track {
        background-color: #999;
    }

    #visit::-webkit-scrollbar-track-piece {
        background-color: #3b4043;
    }

    #visit::-webkit-scrollbar-thumb {
        height: 50px;
        background-color: #059971;
        border-radius: 3px;
    }

    #visit::-webkit-scrollbar-corner {
        background-color: #999;
    }

    #visit::-webkit-resizer {
        background-color: #666;
    }

    #visit {
        height: 90%;
        flex-direction: column;
    }

    form#sendform input:not(input[type=checkbox]), form#sendform select, form#sendform button {
        height: 50px;
    }

    #visit .title {
        font-size: 30px;
        font-weight: 400;
        padding-top: 3%;
        margin-bottom: 10px;
    }

    form#online-zapis input:not([type=checkbox]), form#online-zapis select {
        margin-bottom: 10px;
    }

    .birthday {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        justify-content: space-between;
    }

    .birthday div {
        width: calc(100% / 3);
    }

    .birthday p:first-child {
        width: 100%;
    }

    .birthday p {
        text-align: left;
        margin-bottom: 5px;
    }

    .checkni span {
        font-size: calc(10px + 5 * (100vw / 1920));
        margin-right: 3px;
        display: flex;
        position: relative;
    }

    .checkni span.wpcf7-not-valid-tip {
        position: absolute;
        top: 8px;
        width: 300px !important;
    }

    /*========== Модальное окно "Успешно отправлено" */
    #sucess-modal, #sucess-modal-review {
        display: none;
    }

    #sucess-modal .wrap, #sucess-modal-review .wrap {
        position: relative;
        height: 50px;
        width: 100%;
    }

    #sucess-modal, #sucess-modal-review {
        flex-direction: column;
        align-items: center;
        position: fixed;
        background: #fff;
        min-width: 310px;
        max-width: 470px;
        height: 440px;
        min-height: 440px;
        max-height: 500px;
        border-radius: 3px;
        box-shadow: 0 0 10px #a0a0a0;
        text-align: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 48;
        font-size: 15px;
    }

    #sucess-modal-review {
        height: 350px;
        min-height: 350px;
    }

    #sucess-modal-review .body-modal p:first-child {
        font-weight: 700;
        font-size: 18px;
    }

    #sucess-modal img, #sucess-modal-review img {
        width: 70px;
    }

    #sucess-modal .body-modal, #sucess-modal-review .body-modal {
        padding: 3%;
    }

    #sucess-modal__close {
        width: 50px;
        height: 50px;
        position: absolute;
        font-size: 40px;
        line-height: initial;
        top: 0;
        right: 0;
        cursor: pointer;
        background: #FF6600;
        display: grid;
        align-items: center;
        justify-items: center;
        color: #fff;
        border-radius: 0 3px 0 3px;
    }

    /* ======================================= */
    /* ===========   ВОПРОС ОТВЕТ  =========== */
    /* ======================================= */
    .accordeon {
        padding-top: 40px;
    }

    .faq {
        transition: .2s;
        margin-bottom: 20px;
        border-radius: 3px;
    }

    .faq:hover {
        box-shadow: 0px 5px 20px 0px rgb(18 25 38 / 10%);
    }

    .faq .question {
        display: grid;
        align-items: center;
        grid-template: 1fr / 1fr 1fr;
        transition: .3s;
    }

    .faq .question {
        border: 1px solid #ecf2f4;
        padding: 1% 2%;
        color: black;
        font-weight: bold;
        margin: 0;
    }

    .faq .answer {
        border: 1px solid #ecf2f4;
        padding: 1% 6% 1% 2%;
        color: black;
        margin: 0;
    }

    .faq .question.active {
        color: #FF6600;
        border-left: 3px solid #FF6600;
    }

    .faq .question.active span {
        transform: rotate(180deg);
    }

    .faq .question.active > .review {
        box-shadow: 0px 5px 20px 0px rgb(18 25 38 / 10%);
    }

    .faq .question span {
        font-size: 20px;
        width: 40px;
        height: 40px;
        background: #FF6600;
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 100%;
        color: white;
        justify-self: end;
        align-content: center;
        justify-self: end;
        transform: rotate(0deg);
        justify-content: center;
        text-align: center;
        transition: .3s;
    }

    .faq .question span:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 6px;
        margin: -2px 0 0 -5px;
        /*background: url(../../uploads/2021/05/arrows.svg) 0 0 no-repeat;*/
    }

    /* ======================================= */
    /* ===============   ОТЗЫВЫ  ============= */
    /* ======================================= */
    .review__list {
        padding-top: 40px;
    }

    .review__item {
        border-radius: 3px;
        border: 1px solid #ecf2f4;
        padding: 3% 3% 3% 10%;
        transition: .3s;
        position: relative;
    }

    .forma__review {
        transition: .3s;
        border-radius: 3px;
    }

    .forma__review:hover {
        box-shadow: 0 5px 20px 0 rgb(18 25 38 / 10%);
    }

    #add_review {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .review__item:hover {
        box-shadow: 0px 5px 20px 0px rgb(18 25 38 / 10%);
    }

    .review__item .review__text:last-child {
        padding-right: 60px;
    }

    .rewiew__political p {
        font-size: 13px;
        margin: 0;
    }

    .rewiew__political {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .rewiew__political input {
        width: 20px;
        height: 20px;
        min-width: 20px;
        min-height: 20px;
        margin: 0 10px 0 0 !important;
        border-radius: 0;
        -webkit-appearance: checkbox !important;
    }

    #add_review input[name="name"], #add_review input[name="tel"] {
        width: 48%;
    }

    #add_review input::placeholder, #add_review textarea::placeholder {
        font-size: 13px;
    }

    form#add_review input::placeholder, form#add_review textarea::placeholder {
        color: black;
    }

    /*Ответочка*/

    .review__list .answer {
        border-radius: 3px;
        border: 1px solid #ecf2f4;
        padding: 3%;
        margin-left: 100px;
        display: flex;
        transition: .3s;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        overflow: hidden;
    }

    .review__list .answer:hover {
        box-shadow: 0px 5px 20px 0px #1219261a;
    }

    .review__list .answer .wrap {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin-bottom: 20px;
    }

    .review__list .answer .wrap img {
        margin-right: 25px;
    }

    .review__list .review__item {
        margin-bottom: 25px;
    }

    @media (max-width: 768px) {
        .review__list .answer {
            margin-left: 15px;
        }
    }

    @media (max-width: 375px) {
        .review__list .answer .wrap img {
            margin-right: 20px;
            width: 70px;
        }

        .review__list .answer .wrap p {
            line-height: 1.4;
            font-size: 15px;
        }
    }

    /*=====================================*/
    /* ======== Убираем стили для айфона ==========*/
    /*=====================================*/
    #add_review input, #add_review textarea, #add_review select {
        -webkit-appearance: none;
    }

    #add_review input, #add_review input:before, #add_review input:after {
        -webkit-user-select: initial;
        -khtml-user-select: initial;
        -moz-user-select: initial;
        -ms-user-select: initial;
        user-select: initial;
    }


    .review__date {
        color: #979797;
        font-size: 13px;
    }

    .review__name {
        margin-bottom: 20px;
        font-size: 18px;
    }

    .review__title {
        font-size: 22px;
    }

    .review__item:after {
        content: '';
        position: absolute;
        right: 30px;
        bottom: 10px;
        z-index: 8;
        width: 52px;
        height: 41px;
        /*background-image: url(img/images.png);*/
        background-position: -10px -10px;
    }

    input.rating__star {
        border: none;
    }

    .rating__group {
        position: relative;
        width: calc(22px * 5);
        height: 22px;
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' %3E%3Cpath style='fill:%23DADADA' d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/%3E%3C/svg%3E");
        */
        background-size: 22px auto;
        background-repeat: repeat-x;
        background-color: transparent;
    }

    .rating__star {
        appearance: none;
        position: absolute;
        top: 0;
        left: 0;
        height: 22px;
        margin: 0;
        font-size: inherit;
        background-size: 22px auto;
        background-repeat: repeat-x;
        background-color: transparent;
        cursor: pointer;
        opacity: 1;
    }

    .rating__star:focus {
        outline: none;
    }

    .rating__star:checked {
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' %3E%3Cpath style='fill:%2310C8D2' d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/%3E%3C/svg%3E");
        */
        width: 22px;
        height: 22px;
        background-size: 22px;
    }

    .rating__star:hover {
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' %3E%3Cpath style='fill:%2310C8D2' d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/%3E%3C/svg%3E");
        */
        width: 22px;
        height: 22px;
        background-size: 22px;
    }

    .rating__star:hover ~ .rating__star {
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath style='fill:%23DADADA;' d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'%3E%3C/path%3E%3C/svg%3E");
    */
    }

    .rating__star:nth-child(1) {
        width: 22px;
        z-index: 5;
    }

    .rating__star:nth-child(2) {
        width: calc(22px * 2);
        z-index: 4;
    }

    .rating__star:nth-child(3) {
        width: calc(22px * 3);
        z-index: 3;
    }

    .rating__star:nth-child(4) {
        width: calc(22px * 4);
        z-index: 2;
    }

    .rating__star:nth-child(5) {
        width: calc(22px * 5);
        z-index: 1;
    }

    form#add_review .name, form#add_review textarea, form#add_review input, form#add_review div {
        margin-bottom: 30px;
    }

    form#add_review textarea, form#add_review .name {
        max-width: 100%;
        min-width: 310px;
        width: 100% !important;
    }

    form#add_review button {
        border-radius: 30px;
        font-weight: 400;
    }

    /* ======================================= */
    /* ====== Блок с контактами  ============= */
    /* ======================================= */
    .contacts.contacts-info-new .adress, .contacts.contacts-info-new .mail {
        font-size: calc(11px + 4 * (100vw / 1920));
    }

    .contacts.contacts-info-new {
        display: grid;
        grid-template: .6fr 1fr / 1fr 1fr;
        grid-template-areas: 'tel adress' 'tel mail';
        grid-column-gap: 60px;
    }

    .contacts.contacts-info-new .tel div span {
        font-size: calc(12px + 4 * (100vw / 1920));
    }

    .contacts.contacts-info-new .tel {
        grid-area: tel;
    }

    .contacts.contacts-info-new .adress {
        grid-area: adress;
        height: fit-content;
        align-self: end;
        margin: 0;
        position: relative;
        padding-left: 25px;
    }

    .contacts.contacts-info-new .mail {
        grid-area: mail;
        height: fit-content;
        align-self: center;
    }

    /* ======================================= */
    /* =========   Страница спасибо  ========= */
    /* ======================================= */
    main.content-spasibo .content-sidebar {
        display: grid;
        grid-template: 1fr / 1fr;
        justify-content: center;
    }

    main.content-spasibo {
        padding: 0 2%;
    }

    /*=====================================*/
    /* ======= Оптимизация хэдера =========*/
    /*=====================================*/
    .header-center .logo h1, .header-center .logo > div {
        font-size: calc(14px + 5 * (100vw / 1920));
    }

    .header-center .tel a {
        font-size: calc(14px + 4 * (100vw / 1920));
    }

    .header-center .contacts-info .adress:before {
        margin-right: 5px;
    }

    .header-center .contacts-info .adress {
        font-size: calc(10px + 4 * (100vw / 1920));
    }

    .header-center .tel small {
        font-size: calc(11px + 4 * (100vw / 1920));
    }

    @media (max-width: 1240px) {
        .header-center > div:not(:last-of-type), .header-center > a {
            margin-right: 10px;
        }

    }

    /* ======================================= */
    /* ===============   media  ============= */
    /* ======================================= */
    @media (min-width: 1920px) {
        .header-center .tel a {
            font-size: calc(12px + 4 * (100vw / 1920));
        }

        .header-center .logo h1 small {
            font-size: 15px;
        }

        .header-center .logo h1, .header-center .logo > div {
            font-size: 17px;
        }

        .header-center .contacts-info .adress {
            font-size: 15px;
        }

        .header-center .tel small {
            font-size: 15px;
        }
    }

    @media (max-width: 1180px) {
        .myvertical-tabs {
            padding: 0 4%;
        }

        .content-sidebar.department {
            display: grid;
            grid-template: 1fr auto / minmax(900px, 1180px);
            grid-template-areas: 'content' 'sidebar';
        }

        .content-department {
            grid-area: content;
        }

        .sidebar-department {
            grid-area: sidebar;
        }

        .slider_doctor, .departmetn-employees-list {
            max-width: 90vw;
            margin: auto;
            margin-bottom: 40px;
        }

        .sidebar-department.employees-list {
            position: unset;
        }

        #question {
            width: 60%;
        }

        .departmetn-employees-list button.prev.slick-arrow, button.prev.slick-arrow {
            left: 0;
        }
    }

    @media (max-width: 990px) {
        .department-map-new {
            padding: 3%;
        }

        .contacts.contacts-info-new {
            display: grid;
            grid-template: 1fr .4fr .4fr / 1fr;
            grid-template-areas: 'tel' 'adress' 'mail';
        }
    }

    @media (max-width: 900px) {
        .banner {
            height: unset;
        }

        .content-sidebar.department {
            grid-template: 1fr auto / minmax(780px, 900px);
            grid-template-areas: 'content' 'sidebar';
        }

        .slider_doctor, .departmetn-employees-list {
            max-width: 850px;
        }
    }

    @media (max-width: 780px) {
        .content-sidebar.department {
            grid-template: 1fr auto / minmax(550px, 780px);
            grid-template-areas: 'content' 'sidebar';
            gap: none;
        }

        .slider_doctor, .departmetn-employees-list {
            max-width: 90vw;
        }

        .banner {
            padding-left: 0;
        }

        #question {
            width: 80%;
        }

        .faq .question span {
            width: 30px;
            height: 30px;
        }

        .faq .question {
            padding: 3%;
        }

        .banner__action {
            margin: auto;
        }

        #add_review input[name="name"], #add_review input[name="tel"] {
            width: 100%;
        }

        .review__item .review__text:last-child {
            padding-right: unset;
        }
    }

    @media (max-width: 600px) {
        .banner__action {
            max-width: 100vw;
        }

        #department-map {
            padding: 3%;
        }

        #question {
            overflow-y: scroll;
            height: inherit;
        }
    }

    @media (max-width: 550px) {
        .content-sidebar.department {
            grid-template: 1fr auto / 100%;
            grid-template-areas: 'content' 'sidebar';
        }

        .myvertical-tabs {
            display: block;
            text-align: center;
        }

        .myvertical-tabs li {
            width: 100% !important;
            margin-bottom: 10px;
        }

        .myvertical-tabs a.reviews__link {
            width: 100%;
        }

        #question {
            width: 100%;
            min-width: unset;
            max-width: unset;
        }
    }

    @media (max-width: 450px) {
        .banner__action h1:nth-child(1) {
            font-size: 1.4em;
        }

        .content-department {
            grid-area: content;
        }

        #question p:nth-child(2) {
            font-size: 25px;
        }

        #visit .title {
            font-size: 23px;
        }

        .check p {
            font-size: 12px !important;
        }

        #sucess-modal img {
            width: 115px;
        }

        #sucess-modal {
            margin: auto 10px auto 10px;
        }

        #visit {
            height: 100%;
            overflow: auto;
            padding-top: 10%;
            flex-direction: column;
            padding-bottom: 3%;
            max-height: 900px;
        }

        form#sendform {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'name patronymic' 'lastname tel' 'email email' 'date date' 'diagnoz diagnoz' 'formvisit formvisit' 'formadress formadress' 'comment comment' 'pers pers' 'btn btn';
            grid-template-rows: 50px 50px 50px 150px 50px 50px 50px 150px 50px 50px;
            grid-gap: 10px;
            margin-bottom: 10%;
        }

        form#sendform input[name="name"] {
            grid-area: name;
        }

        form#sendform input[name="patronymic"] {
            grid-area: patronymic;
        }

        form#sendform input[name="lastname"] {
            grid-area: lastname;
        }

        form#sendform input[name="tel"] {
            grid-area: tel;
        }

        form#sendform input[name="email"] {
            grid-area: email;
        }

        form#sendform input[name="diagnoz"] {
            grid-area: diagnoz;
        }

        form#sendform select[name="formvisit"] {
            grid-area: formvisit;
        }

        form#sendform select[name="formadress"] {
            grid-area: formadress;
        }

        form#sendform textarea {
            grid-area: comment;
        }

        form#sendform div {
            grid-area: pers;
        }

        form#sendform button {
            grid-area: btn;
        }

        .review__item {
            padding: 5% 3% 20% 5%;
        }

        form#add_review textarea, form#add_review .name {
            min-width: unset;
        }
    }

    @media (max-width: 400px) {
        #sucess-modal {
            height: unset;
        }
    }

    @media (max-width: 375px) {
        .banner__action {
            grid-template: .2fr 1fr .2fr .3fr/ 1fr;
            grid-template-areas: 'title' 'text' 'btn-order' 'btn-questions';
            gap: 20px;
        }

        #question {
            height: 100%;
            overflow: scroll;
        }

        #visit #visit__close {
            top: 5%;
        }

        #question #question__close {
            top: 0;
        }

        #visit {
            padding-top: 20%;
        }
    }

    @media (max-width: 350px) {
        #question p:nth-child(2) {
            font-size: 23px;
        }

        #visit p:nth-child(2):not(.check p) {
            padding-top: 10%;
            margin-bottom: 20px;
        }
    }

    /*=====================================*/
    /* ======== Меню в 2 колонки ==========*/
    /*=====================================*/
    @media screen and (min-width: 1141px) {
        .header-top .top-menu li ul a {
            height: fit-content;
        }

        .header-top .menu li ul.sub-menu li {
            display: grid;
            align-items: center;
        }

        .top-menu li ul li:hover {
            background-color: #e6edf0;
        }

        .header-top .menu li:nth-child(3) ul {
            width: 450px;
        }

        .header-top .top-menu li:nth-child(3):not(.sub-menu li) {
            position: relative;
            height: 60px;
            page-break-inside: avoid;
            break-inside: avoid;
        }

        .header-top .top-menu > li:nth-child(3):hover > .sub-menu {
            display: flex !important;
            column-count: 2;
        }

        .header-top .menu li:nth-child(3) ul.sub-menu {
            width: max-content;
            max-width: 600px;
            list-style: none;
            flex-direction: row;
            flex-wrap: wrap;
            min-width: 350px;
        }

        .header-top .menu li:nth-child(3) ul.sub-menu li {
            width: 50%;
        }

        .header-top .menu li:nth-child(3) ul.sub-menu li:last-child {
            height: 60px;
        }

        .header-top .top-menu li:nth-child(3) ul li:not(:last-of-type) {
            height: 60px;
        }

        .header-top .menu ul.sub-menu li:last-child {
            height: 100%;
        }
    }


    /*=====================================*/
    /* == Слайдер на главной странице =====*/
    /*=====================================*/
    .news-slider {
        width: 100vw;
        background-position: top, center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        max-width: 100%;
    }

    .slide-home .slick-track {
        padding: 0;
    }

    .slide-home .slick-dots {
        position: absolute;
        bottom: 85px;
        margin: auto;
        width: 100%;
    }

    @media (max-width: 1000px) {
        .news-slider {
            padding: 0;
        }
    }

    /*=====================================*/
    /* ========== Раздел новости ==========*/
    /*=====================================*/

    .news .left .item {
        height: 537px;
    }

    .news .left .news-items .item:first-child {
        margin-bottom: 60px;
    }

    .news .left .news-items {
        align-content: space-between;
    }

    .left .news-items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .news .right .item .h4 {
        font-weight: 500;
        font-size: 18px;
    }

    .item-for-news {
        background-color: #fff;
        -webkit-box-shadow: 0 0 24px #9bc5d55c;
        box-shadow: 0 0 24px #9bc5d55c;
        border-radius: 20px;
        overflow: hidden;
        min-height: 312px;
        max-height: 350px;
        width: 358px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        margin-bottom: 40px;
    }

    .item-for-news img, .item-for-news .video {
        width: 100%;
        border-radius: 20px;
        max-height: 190px;
        min-height: 190px;
        height: 190px;
        padding: 0;
    }

    .item-for-news img, .item-for-news .video iframe {
        width: 358px;
        height: 190px;
    }

    .item-for-news div {
        padding: 5%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .item-for-news .video img {
        min-width: 100%;
    }

    .item-for-news div p {
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        height: -webkit-fit-content;
        height: -moz-fit-content;
        height: fit-content;
        display: -webkit-box;
        margin-bottom: 10px;
    }

    .item-for-news div a {
        width: -webkit-fit-content;
        width: fit-content;
        width: -moz-fit-content;
        height: 28px;
    }

    .button-arrow, .more, .sidebar-primary .widget_nav_menu a {
        font-size: 15px;
    }

    section.news.main-block .right .news-items {
        margin-bottom: 50px;
    }

    a.button-news {
        text-decoration: none !important;
        border: 0 !important;
        padding: 13px 0;
        text-align: center;
        color: white;
        border-radius: 25px;
        background: #00CA8A;
        width: 200px;
        font-size: 16px;
        margin-bottom: 15px;
    }

    .link-for-news {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    section.news.main-block .right h3 {
        margin-bottom: 45px;
    }

    .item-banner {
        width: 784px;
        box-shadow: 0 0 24px rgb(155 197 213 / 36%);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 60px;
    }

    .item-banner img {
        border-radius: 0;
    }

    @media (min-width: 1141px) {
        .right .news-adaptive {
            display: none;
        }
    }

    @media (max-width: 1140px) {
        .news-adaptive {
            max-width: 100%;
            width: 500px;
        }

        .left .news-items .item {
            display: none;
        }

        .news .left .news-items {
            max-width: 800px;
            margin: auto;
            padding: 0 2%;
            width: 100%;
        }

        .news .left .item {
            height: fit-content;
            margin-bottom: 67px;
        }

        .link-for-news {
            justify-content: space-evenly;
        }
    }

    @media (max-width: 800px) {
        .news .left .news-items {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media (max-width: 800px) {
        .item-for-news img {
            height: 170px;
            border-radius: 20px;
        }
    }

    @media (max-width: 768px) {
        .item-for-news {
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
        }

        .item-for-news div p {
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
            -webkit-line-clamp: unset;
            -webkit-box-orient: unset;
            overflow: hidden;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            display: -webkit-box;
        }
    }

    @media (max-width: 450px) {
        .item-for-news img, .item-for-news .video iframe {
            width: 100%;
            height: 190px;
        }

        .item-banner {
            margin-bottom: 40px;
        }
    }

    /* Исправление бага с таблицей */
    .item-content .top-bug tbody tr:nth-child(2) td:nth-child(1) {
        display: flex;
        flex-direction: column;
        width: 100% !important;
    }

    /*Пустой поиск на страницах */
    .empty__result {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .empty__result a {
        border-radius: 24px;
        font-size: 14px;
        height: 46px;
        width: 162px;
        justify-self: start;
        display: grid;
        align-items: center;
        justify-items: center;
        font-weight: 400;
        background: #ffffff4d;
        color: #FF6600 !important;
        border: 1px solid #FF6600;
    }

    .empty__result a:hover {
        background: #FF6600;
        color: white !important;
    }

    .empty__result p {
        margin-bottom: 20px;
    }

    /*Адаптивное видео с ютуба в iframe */

    .youtube__video {
        overflow: hidden;
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        width: 100%;
        margin-bottom: 50px;
    }

    .youtube__video iframe {
        position: absolute;
        width: 100%;
        height: 92%;
        left: 0;
        top: 0;
    }

    /*=====================================*/
    /* ========== Блок ВАЖНОЕ ==========*/
    /*=====================================*/
    .important__block {
        /*background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' width='1440' height='500' preserveAspectRatio='none' viewBox='0 0 1440 500'%3e%3cg mask='url(&quot;%23SvgjsMask1003&quot;)' fill='none'%3e%3crect width='1440' height='500' x='0' y='0' fill='rgba(244, 244, 244, 1)'%3e%3c/rect%3e%3cpath d='M2 500L502 0L746.5 0L246.5 500z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M343.8 500L843.8 0L935.3 0L435.3 500z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M670.6 500L1170.6 0L1607.1 0L1107.1 500z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M1425 500L925 0L682 0L1182 500z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M1119.2 500L619.2 0L497.70000000000005 0L997.7 500z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M764.4 500L264.4 0L-109.10000000000002 0L390.9 500z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M971.6960296887601 500L1440 31.696029688760007L1440 500z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M0 500L468.30397031124 500L 0 31.696029688760007z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='500' fill='%23ffffff'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1004'%3e%3cstop stop-color='rgba(0, 200, 146, 0.36)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(0, 200, 146, 0.36)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1005'%3e%3cstop stop-color='rgba(0, 200, 146, 0.36)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(0, 200, 146, 0.36)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 15px;
        border-left: 4px solid #b62120;
        font-weight: 400;
        color: #2b2e2b;
        margin-bottom: 50px;
    }


    /*=====================================*/
    /* ========== Форма заочной консультации ==========*/
    /*=====================================*/

    .zaoch__consult {
        border: 1px solid #9b9b9b;
        padding: 30px;
        border-radius: 10px;
        transition: .3s;
    }

    .zaoch__consult:hover {
        box-shadow: 0 5px 20px 0 #1219261a;
    }

    .zaoch__consult p {
        margin: 0;
        font-size: 14px;
    }

    .zaoch__consult input {
        border: 1px solid #9b9b9b;
        margin-bottom: 15px;
    }

    .zaoch__consult textarea {
        border: 1px solid #9b9b9b;
        margin-bottom: 30px;
        max-width: 730px;
    }

    .zaoch__consult .checkni input {
        margin-bottom: 0;
    }

    .zaoch__consult .codedropz-upload-inner {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .zaoch__consult .zaoch__date {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-bottom: 15px;
    }

    .zaoch__consult .zaoch__date span {
        width: 30%;
    }

    .codedropz-upload-inner span:nth-child(2) {
        order: 3;
    }

    .codedropz-upload-inner .codedropz-btn-wrap a.cd-upload-btn {
        font-weight: bold;
    }

    .wpcf7-not-valid-tip {
        font-size: 12px;
        width: 100% !important;
    }

    .zaoch__consult p:nth-child(10), .zaoch__consult p:nth-child(13), .zaoch__consult p:nth-child(15), .zaoch__consult p:nth-child(17), .zaoch__consult p:nth-child(20), .zaoch__consult p:nth-child(23), .zaoch__consult p:nth-child(26) {
        margin-bottom: 40px;
    }

    .checkbox-propusk .wpcf7-list-item-label {
        display: none;
    }

    figure#attachment_12260 {
        width: 100% !important;
    }

    /* ============ Виджет начало ============ */
    #js-show-iframe-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-width: 293px;
        max-width: 100%;
        background: linear-gradient(138.4deg, #38bafe 26.49%, #2d73bc 79.45%);
        color: #fff;
        cursor: pointer
    }

    #js-show-iframe-wrapper .pos-banner-fluid * {
        box-sizing: border-box
    }

    #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2 {
        display: block;
        width: 240px;
        min-height: 56px;
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;
        background: #0d4cd3;
        color: #fff;
        border: none;
        border-radius: 8px;
        outline: 0
    }

    #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover {
        background: #1d5deb
    }

    #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus {
        background: #2a63ad
    }

    #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active {
        background: #2a63ad
    }

    @-webkit-keyframes fadeInFromNone {
        0% {
            display: none;
            opacity: 0
        }
        1% {
            display: block;
            opacity: 0
        }
        100% {
            display: block;
            opacity: 1
        }
    }

    @keyframes fadeInFromNone {
        0% {
            display: none;
            opacity: 0
        }
        1% {
            display: block;
            opacity: 0
        }
        100% {
            display: block;
            opacity: 1
        }
    }

    @font-face {
        font-family: LatoWebLight;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: LatoWeb;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: LatoWebBold;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: RobotoWebLight;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: RobotoWebRegular;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: RobotoWebBold;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: ScadaWebRegular;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: ScadaWebBold;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff2) format("woff2"), url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.ttf) format("truetype");
        */
        font-style: normal;
        font-weight: 400
    }

    @font-face {
        font-family: Geometria;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot);
        src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot?#iefix) format("embedded-opentype"), url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.ttf) format("truetype");
        */
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: Geometria-ExtraBold;
        /*src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot);
        src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot?#iefix) format("embedded-opentype"), url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.woff) format("woff"), url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.ttf) format("truetype");
        */
        font-weight: 800;
        font-style: normal
    }

    #js-show-iframe-wrapper {
        background: var(--pos-banner-fluid-17__background)
    }

    #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2 {
        width: 100%;
        min-height: 52px;
        background: #fff;
        color: #0d4cd3;
        font-size: 16px;
        font-family: LatoWeb, sans-serif;
        font-weight: 400;
        padding: 0;
        line-height: 1.2;
        border: 2px solid #0d4cd3
    }

    #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active, #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus, #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover {
        background: #e4ecfd
    }

    #js-show-iframe-wrapper .bf-17 {
        position: relative;
        display: grid;
        grid-template-columns: var(--pos-banner-fluid-17__grid-template-columns);
        grid-template-rows: var(--pos-banner-fluid-17__grid-template-rows);
        width: 100%;
        max-width: var(--pos-banner-fluid-17__max-width);
        box-sizing: border-box;
        grid-auto-flow: row dense
    }

    #js-show-iframe-wrapper .bf-17__decor {
        background: var(--pos-banner-fluid-17__bg-url) var(--pos-banner-fluid-17__bg-url-position) no-repeat;
        background-size: var(--pos-banner-fluid-17__bg-size);
        background-color: #f8efec;
        position: relative
    }

    #js-show-iframe-wrapper .bf-17__content {
        display: flex;
        flex-direction: column;
        padding: var(--pos-banner-fluid-17__content-padding);
        grid-row: var(--pos-banner-fluid-17__content-grid-row);
        justify-content: center
    }

    #js-show-iframe-wrapper .bf-17__text {
        margin: var(--pos-banner-fluid-17__text-margin);
        font-size: var(--pos-banner-fluid-17__text-font-size);
        line-height: 1.2;
        font-family: LatoWeb, sans-serif;
        font-weight: 700;
        color: #0b1f33
    }

    #js-show-iframe-wrapper .bf-17__bottom-wrap {
        display: flex;
        flex-direction: row;
        align-items: center
    }

    #js-show-iframe-wrapper .bf-17__logo-wrap {
        position: absolute;
        top: var(--pos-banner-fluid-17__logo-wrap-top);
        right: var(--pos-banner-fluid-17__logo-wrap-right)
    }

    #js-show-iframe-wrapper .bf-17__logo {
        width: var(--pos-banner-fluid-17__logo-width);
        margin-left: 1px
    }

    #js-show-iframe-wrapper .bf-17__slogan {
        font-family: LatoWeb, sans-serif;
        font-weight: 700;
        font-size: var(--pos-banner-fluid-17__slogan-font-size);
        line-height: 1.2;
        color: #005ca9
    }

    #js-show-iframe-wrapper .bf-17__btn-wrap {
        width: 100%;
        max-width: var(--pos-banner-fluid-17__button-wrap-max-width)
    }

    img.bf-17__logo {
        border-radius: 0;
    }

    div#js-show-iframe-wrapper {
        margin-bottom: 50px;
    }

    /* ============ Виджет конец ============ */

    /* дополнительно */
    .text-not-bold {
        text-align: left;
        font-weight: 300;
    }
</style>
