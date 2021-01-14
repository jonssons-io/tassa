<template>
  <b-container class="bv-example-row aboutus--container">
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="12">
        <h1 class="aboutUs_Header">Vår idé</h1>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <p class="aboutUs_p">
          Idén med Tassa kommer från ett problem som lyftes av en bekant till
          oss, som uttryckte oro och otrygghet inför sena kvällspromenader med
          hund när det nu är mörkt ute större delen av dygnet.
        </p>
        <p class="aboutUs_p">
          Lösningen blev då en portal där hundägare kan mötas och knyta
          kontakter.
        </p>
        <p class="aboutUs_p">
          Tassa skapades som ett projekt i vårt examensarbete under början av
          2021.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <div class="pictureG float-right">
          <div class="test float-left">
            <iframe class="gabbi" alt="gabbi" frameBorder="0" />
            <div class="textBox_container-left float-left">
              <div class="textBox_items">
                <h5 class="textBox_header">Gabrielle Jonsson</h5>
                <h6 class="textBox_title">Frontend utvecklare</h6>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="6">
        <div class="pictureM float-left">
          <div class="test float-left">
            <iframe class="mickis" alt="mickis" frameBorder="0" />
            <div class="textBox_container-right float-left">
              <div class="textBox_items">
                <h5 class="textBox_header">Mikaela Fryklund</h5>
                <h6 class="textBox_title">Frontend utvecklare</h6>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="social-media-icons">
      <b-col cols="12">
        <h2 class="aboutus_h2">Kontakta oss</h2>
      </b-col>
      <b-col cols="12">
        <span
          ><a href="https://www.facebook.com/TassaApp" target="_blank">
            <font-awesome-icon
              class="fa-xs fa-sm fa-lg icon_color"
              :icon="{
                prefix: 'fab',
                iconName: 'facebook-square'
              }"
            />
            /TassaApp</a
          >
        </span>
      </b-col>
      <b-col cols="12">
        <span
          ><a href="https://www.facebook.com/TassaApp" target="_blank">
            <font-awesome-icon
              class="fa-xs fa-sm fa-lg icon_color"
              :icon="{
                prefix: 'fab',
                iconName: 'instagram'
              }"
            />
            /TassaApp</a
          >
        </span>
      </b-col>
      <b-col cols="12">
        <span
          ><a href="https://www.facebook.com/TassaApp" target="_blank">
            <font-awesome-icon
              class="fa-xs fa-sm fa-lg icon_color"
              :icon="{
                prefix: 'fab',
                iconName: 'twitter'
              }"
            />
            /TassaApp</a
          >
        </span>
      </b-col>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "AboutUsBanner"
};
</script>

<style scoped>
@import "./../../assets/css/aboutUsPage.css";
</style>