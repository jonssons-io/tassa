<template>
    <div class="testing--container">
       <b-container class="bv-example-row testing--container">
        <b-row class="text-center">
    <b-col cols="12">
        <h1>Vår idé</h1>
    </b-col>
  </b-row>
  <b-row class="text-center">
    <b-col cols="12">
          <p >Idén med Tassa kommer från ett problem som lyftes av en bekant till oss, som uttryckte oro och otrygghet inför sena kvällspromenader med hund när det nu är mörkt ute större delen av dygnet.</p>
      <p>Lösningen blev då en portal där hundägare kan mötas och knyta kontakter.</p>
      <p>Tassa skapades som ett projekt i vårt examensarbete under början av 2021.</p>
    </b-col>
  </b-row>
 <b-row>
    <b-col>Column</b-col>
    <b-col>Column</b-col>
    <div class="w-100"></div>
    <b-col>Column</b-col>
    <b-col>Column</b-col>
  </b-row>
<h2>Kontakta oss</h2>
      <b-row>
    <b-col></b-col>
    <b-col> <font-awesome-icon 
            :icon="{
                    prefix: 'fab',
                    iconName: 'facebook-square',
                    }"/></b-col>
    <b-col> <p>TassaApp</p></b-col>
    <b-col></b-col>
    <div class="w-100"></div>
    <b-col></b-col>
    <b-col  ><font-awesome-icon 
                    :icon="{
                    prefix: 'fab',
                    iconName: 'instagram',
                    }"/></b-col>
    <b-col><p class="contactUs">TassaApp</p></b-col>
    <b-col></b-col>
    <div class="w-100"></div>
    <b-col></b-col>
    <b-col  ><font-awesome-icon 
                    :icon="{
                    prefix: 'fab',
                    iconName: 'twitter',
                    }"/></b-col>
     <b-col><p>TassaApp</p></b-col>
    <b-col></b-col>               
  </b-row>

       </b-container>
    </div>
    
</template>
<script>
export default {
    name: "TestingBanner"
}
</script>
<style scoped>

</style>