<template>
    <div id="icon" @click="changePage" ref="icon">
        <div class="out">
            <div class="in"></div>
        </div>
        <p>TAP ME</p>
    </div>
</template>

<script>
export default {
    methods: {
        changePage() {
            this.$emit("clickSwitch");
            this.$refs.icon.classList.add("click");
            setTimeout(() => {
                this.$refs.icon.classList.remove("click");
            }, 50);
        },
    },
};
</script>

<style lang="sass" scoped>
@import "@/style/variable.sass"

.click
    transform: scale(1.05) translate(-50%, -50%) !important

#icon
    display: grid
    justify-content: center
    justify-items: center
    height: 100px
    transition: all 50ms ease-in-out

    p
        font-size: 1rem
        opacity: $opacity

.in, .out
    border-radius: 15px
    animation: scale 2s infinite
    transition: all 1s ease-in-out

.out
    width: 30px
    height: 30px
    background-color: $nbc-light
    position: relative
    display: flex
    justify-content: center
    align-items: center

    .in
        width: 12px
        height: 12px
        background-color: $nbc-lightest

@keyframes scale
    0%
        transform: scale(1)

    50%
        transform: scale(1.3)

    100%
        transform: scale(1)
</style>