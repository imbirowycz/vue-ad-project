<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field
            name="title"
            label="Ad new title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Ad description"
            type="text"
            :rules="[v => !!v || 'Title is required']"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn
              class="warning"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg" alt="img" height="100px">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              color="primary"
              label="Ad to promo?"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >Create ad</v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "NewAd",
      data () {
          return {
            title: '',
            description: '',
            promo: false,
            valid: false


          }
      },
      methods: {
        createAd () {
          if(this.$refs.form.validate()) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo,
              imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: '123456'
            }

            this.$store.dispatch('createAd', ad)
          }


        }
      }
    }
</script>

<style scoped>

</style>
