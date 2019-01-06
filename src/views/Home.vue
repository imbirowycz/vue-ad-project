<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in promoAds"
              :key="item.id"
              :src="item.imageSrc"
            >
              <div style="position: absolute; bottom: 50px; left: 50%;display: inline-block; padding: 20px;background: rgba(0,0,0, .5);border-radius: 10px 10px 0 0; transform: translateX(-50%); ">
                <v-btn class="error" :to="'/ad/'+item.id">{{item.title}} </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="item of ads"
          :key="item.id"
        >
          <v-card>
            <v-img
              :src="item.imageSrc"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
                <div>{{item.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/'+item.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
  //https://cdn.vuetifyjs.com/images/carousel/bird.jpg
  //https://cdn.vuetifyjs.com/images/carousel/planet.jpg
  //https://cdn.vuetifyjs.com/images/carousel/sky.jpg
  //https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg
    export default {
        name: "Home",
      computed: {
        ads () {
          return this.$store.getters.ads
        },
        promoAds () {
            return this.$store.getters.promoAds
        }
      }
    }
</script>

<style scoped>

</style>
