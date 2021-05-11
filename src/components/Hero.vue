<template>
    <div>
        <div v-if="!loaded" class="d-flex justify-content-center mb-5 py-5">
            <b-spinner variant="" label="Loading..."></b-spinner>
        </div>

        <div v-if="loaded" id="hero">
            <b-card
                title="Hero Information"
                title-tag="h1"
                tag="article"
                style="max-width: 80rem;"
                class="mx-auto col-sm-8 my-5"
            >   
                <img class="full-img my-5 mx-auto" v-if="typeof hero.img==='string'" v-bind:src="`http://cdn.dota2.com${hero.img}`" alt="heroImg">
                <h2>
                    <img v-if="typeof hero.icon==='string'" class="mr-1" v-bind:src="`http://cdn.dota2.com${hero.icon}`">
                    {{hero.localized_name}}
                </h2>

                <!-- Lore --> 
                <h3>Lore</h3>
                <b-card-text style="">
                    {{heroLore}}
                </b-card-text>

                <!-- Stats -->
                <h3>Stats</h3>
                <!-- Attributes -->
                <div class="container d-flex flex-row justify-content-center">
                    <div class="mx-3 d-flex flex-column justify-content-center">
                        <div style="margin:0 auto">
                            <img class="left" id="attribute" v-bind:src="strIcon">
                        </div>
                        <p class="right">{{hero.base_str}} + {{hero.str_gain}} / Level</p>    
                    </div>

                    <div class="mx-3 d-flex flex-column justify-content-center">
                        <div style="margin:0 auto">
                            <img class="left" id="attribute" v-bind:src="agiIcon">
                        </div>
                        <p class="right">{{hero.base_agi}} + {{hero.agi_gain}} / Level</p>

                    </div>

                    <div class="mx-3 d-flex flex-column justify-content-center">
                        <div style="margin:0 auto">
                            <img class="left" id="attribute" v-bind:src="intIcon">
                        </div>
                        <p class="right">{{hero.base_int}} + {{hero.int_gain}} / Level</p>
                    </div>
                </div>

                <!-- Roles -->
                <h3>Roles</h3>
                <ul>
                    <li v-for="role in hero.roles" v-bind:key="role">{{role}}</li>
                </ul>
            </b-card>
        </div>
    </div>
</template>

<script>
import hoodwinkLore from '../mixins/data'

export default {
    data(){
        return{
            id: this.$route.params.id,
            hero: {},
            heroLore: '',
            strIcon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_str.png",
            agiIcon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_agi.png",
            intIcon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_int.png",
            primaryIcon: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_primary.png",
            loaded: false
        }
    },

    // async heißt funktion wartet beim await 
    async created(){
        const data = await this.$http.get('https://api.opendota.com/api/heroStats')
        this.hero = data.body[this.id];
        
        const data2 = await this.$http.get('https://api.opendota.com/api/constants/hero_lore');
            
        var filteredStr = this.hero.name.replace("npc_dota_hero_", "");
        if(filteredStr === 'hoodwink'){ // Hoodwink nicht in der DB, wo krieg ich das Icon her?
            this.heroLore = hoodwinkLore;
        }else{
            this.heroLore = data2.body[filteredStr];
        }

        this.loaded = true;
    }
}
</script>

<style scoped>
.full-img{
    display: block;
    border: solid;
}

h1{
    text-align: center;
}

h2{ 
    text-align: center;
}

.Stats img{
    width: 33;
    height: 33;
}

.container{
    font-weight: bold;
}

</style>