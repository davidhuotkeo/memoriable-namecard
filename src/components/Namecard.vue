<template>
    <div id="namecard">
        <transition name="fade" v-if="bigScreenSize">
            <div class="first-page" v-if="onFirstPage">
                <img src="@/assets/logo-full.svg" alt="full logo" />
                <click-icon v-on:clickSwitch="flip"></click-icon>
            </div>
            <div class="second-page" v-else>
                <div class="information">
                    <img src="@/assets/logo.svg" alt="logo" />
                    <p class="name">{{ namecard.name }}</p>
                    <p class="position">{{ namecard.position }}</p>
                    <div class="line"></div>
                    <div
                        class="detail"
                        v-for="(contacts, name) in namecard.contact"
                        :key="name"
                    >
                        <p>{{ name.charAt(0).toUpperCase() }}</p>
                        <div>
                            <p v-for="(contact, i) in contacts" :key="i">
                                <a :href="namecard.link[name][i]">{{
                                    contact
                                }}</a>
                            </p>
                        </div>
                    </div>
                    <p class="tip">** Tap on the info to contact</p>
                </div>
                <click-icon
                    class="flip-icon"
                    v-on:clickSwitch="flip"
                ></click-icon>
            </div>
        </transition>
        <div class="responsive" v-else>
            <img src="@/assets/own-logo-white.svg" alt="own-branding-logo">
            <p>TOO BIG</p>
            <p>The screen size is too big,</p>
            <p>You better use your phone or tablet</p>
            <p>To view it with better experience</p>
        </div>
    </div>
</template>

<script>
import ClickIcon from "./ClickIcon";

export default {
    data() {
        return {
            namecard: {
                name: "DEVIT HUOTKEO",
                position: "UI/UX DESIGNER + DEVELOPER",
                contact: {
                    telephone: ["092 651 335", "087 575 857"],
                    email: ["david.huotkeo@gmail.com"],
                    website: ["davidhuotkeo.com"],
                    github: ["github.com/davidhuotkeo"],
                    behance: ["behance.net/devithuotkeo"],
                },
                link: {
                    telephone: ["tel:+85592651335", "tel:+85587575857"],
                    email: ["mailto:david.huotkeo@gmail.com"],
                    website: ["http://davidhuotkeo.com"],
                    github: ["https://github.com/davidhuotkeo"],
                    behance: ["https://behance.net/devithuotkeo"],
                },
            },
            onFirstPage: false,
            bigScreenSize: false
        };
    },
    mounted() {
        if (window.innerWidth < 425) {
            this.bigScreenSize = true
        }
    },
    methods: {
        flip() {
            this.onFirstPage = !this.onFirstPage;
        },
    },
    components: {
        "click-icon": ClickIcon,
    },
};
</script>

<style lang="sass" scoped>
@import "@/style/variable.sass"

$line-height: 45px

#namecard
    height: 100vh

    a
        color: $white
        text-decoration: none

    .first-page

        img, *:last-child
            position: absolute
            transform: translate(-50%, 0)

        img
            top: 50%
            left: 50%

        *:last-child
            bottom: 0px
            left: 50%

    .second-page
        height: 100vh
        display: flex
        align-items: center

        .information
            transform: translateY(-50px)
            margin-left: $margin

            img
                margin-bottom: $line-height

            p
                margin: 0

            p.name
                font-size: $title
                font-weight: bold

            .line
                margin: $line-height 0
                width: 55px
                height: 1px
                background-color: $white

            .detail
                display: grid
                grid-template-columns: 40px auto

                p
                    margin: 0 0 12px 0

            .tip
                opacity: $opacity
                font-size: 0.8rem

        .flip-icon
            position: absolute
            bottom: 0
            left: 50%
            transform: translate(-50%, 0)

    .responsive
        width: 100vw
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: center

        img
            margin-bottom: $line-height

        p
            margin: 0
            text-align: center

        *:nth-child(2)
            font-size: $title
            font-weight: bold   

// Animation
.fade-enter-active, .fade-leave-active
    transition: opacity .5s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    opacity: 0

</style>