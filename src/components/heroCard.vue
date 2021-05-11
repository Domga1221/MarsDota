<template>
<!-- abgeändert nach: https://bootstrap-vue.org/docs/components/card -->
    <div>
        <div> <!-- no-body entfernt das standard padding und margin von der card, subkomponenten kontrollieren jetzt margin und padding-->
        <b-card no-body 
            v-bind:img-src="`http://cdn.dota2.com${hero.img}`"
            v-bind:bg-variant="background"
            img-alt="Image"
            img-top     
            text-variant="white"
            style="max-width: 20.1rem; flex: 1;"
            class="my-4 mx-3 py-3 px-3"
        >
            <b-card-title v-bind:title="this.hero.localized_name" class="my-3" style="text-align: center;"></b-card-title>
            <b-card-text class="my-0">
            {{hero.lore}}
            </b-card-text>

            <router-link v-bind:to="'/hero/' + hero.id">   
                <b-button class="mt-3" variant="dark">Hero Details</b-button>
            </router-link>
        </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: "this is custom title",
        }
    },

    props: {
        hero: {

        }
    },

    computed: {
        background: function(){
            if(this.hero.primary_attr === "agi"){
                return "success"
            }
            if(this.hero.primary_attr === "str"){
                return "danger"
            }
            if(this.hero.primary_attr === "int"){
                return "info"
            }
            return "warning"
        }
    }
}
</script>

<style scoped>
    
</style>