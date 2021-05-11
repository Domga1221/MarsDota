<template>
    <div id="heroes">
        <!-- FilterBar -->
        <div class="filterbar py-2">
            <h1>All Heroes</h1>
            <div class="container">
                <div class="row"> <!-- https://bootstrap-vue.org/docs/components/input-group -->
                    <b-input-group prepend="Search Hero" class="mt-3 pb-3">
                        <b-form-input v-model="search"></b-form-input>
                    </b-input-group>
                </div>
            </div>
        </div>

        <!-- Hero Card Group -->
        <div v-if="!loaded" class="d-flex justify-content-center mb-5 py-5">
            <b-spinner variant="light" label="Loading..."></b-spinner>
        </div>

        <b-card-group v-if="loaded" class="mx-5 mt-4 pb-4 align-items-stretch justify-content-center">
            <div v-for="hero in filteredHeroes" v-bind:key="hero.id">
                    <heroCard v-bind:hero="hero"></heroCard>
            </div>
        </b-card-group>
    </div>
</template>

<script>
import heroCard from './heroCard.vue'
import hoodwinkLore from '../mixins/data'

export default {
    components: {
        heroCard
    },

    data(){
        return{
            heroes: [],
            search: '',
            title: 'this is specific title',
            loaded: false
        }
    },

    async created(){
        var data = await this.$http.get('https://api.opendota.com/api/heroStats');
        var tempArray = [];
        for(let key in data.body){
            data.body[key].id = key;
            tempArray.push(data.body[key]);
        }
        //console.log(tempArray);

        const data2 = await this.$http.get('https://api.opendota.com/api/constants/hero_lore');
            
        var filteredStr
        for(let key in tempArray){
            filteredStr = tempArray[key].name.replace("npc_dota_hero_", "");
            if(filteredStr !== 'dawnbreaker'){ // Hoodwink existiert nicht in der Datenbank, Danke Valve
                tempArray[key].lore = data2.body[filteredStr].substring(0, 91) + '...';
                console.log(tempArray[key].lore)
            } else{ // lokal Laden weil Hoodwink nicht in der Datenbank
                tempArray[key].lore = hoodwinkLore.substring(0,91) + '...';
            }
        }


        tempArray.sort((a,b)=> a.localized_name.localeCompare(b.localized_name));
        this.heroes = tempArray;

        this.loaded = true;
    },

    computed: {
        filteredHeroes: function(){
            return this.heroes.filter((hero) => {
                return hero.localized_name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
}
</script>

<style scoped>
#heroes{
    background-color:#333;
}

.filterbar h1{
    text-align: center;
}

.filterbar{
    border-top: solid;
    border-bottom: solid;
    background-color: #666;
}

</style>