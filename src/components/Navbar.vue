<template>
<!-- abgeändert nach: https://bootstrap-vue.org/docs/components/navbar -->
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/" href="#" class="navbar-brand">
                <img src="http://cdn.dota2.com/apps/dota2/images/heroes/mars_full.png?" height="72" alt="CoolBrand">
            </router-link>
            

            <div class="d-flex mr-auto" style="font-size: 200%">
                <div class="navbar-nav">
                    <router-link to="/" style="text-decoration:none">
                        <a class="nav-item nav-link">MarsDota</a>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>