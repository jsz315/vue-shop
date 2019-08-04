<template>

    <div>
        <h1>member</h1>
        <ul>
            <li v-for="n in 90">{{n}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("mounted member")
    },
    activated() {
        console.log("activated member")
    },
    deactivated() {
        console.log("deactivated member")
    },
    beforeRouteEnter (to, from, next) {
        console.log("beforeRouteEnter member")
        next();
    },
}
</script>