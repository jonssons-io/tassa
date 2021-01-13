<template>

   <b-container class="bv-example-row aboutus--container">
        <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="12">
        <h1 class="aboutUs_Header" >Vår idé</h1>
    </b-col>
    <b-col></b-col>
  </b-row>
  <b-row class="text-center">
    <b-col cols="12">
          <p class="aboutUs_p" >Idén med Tassa kommer från ett problem som lyftes av en bekant till oss, som uttryckte oro och otrygghet inför sena kvällspromenader med hund när det nu är mörkt ute större delen av dygnet.</p>
      <p class="aboutUs_p">Lösningen blev då en portal där hundägare kan mötas och knyta kontakter.</p>
      <p class="aboutUs_p" >Tassa skapades som ett projekt i vårt examensarbete under början av 2021.</p>
    </b-col>
  </b-row>
      <b-row>
    <b-col cols="6" >
        <div class="pictureG float-right">
                        <div class="test float-left">
                            
                              <div class="textBox_container-left float-left">
                    <div class="textBox_items">
                        <h5 class="textBox_header">Gabrielle Jonsson</h5>
                         <h6 class="textBox_title">Frontend utvecklare </h6>
                    </div>
                </div>
                        </div>
                     </div>
    </b-col>
    <b-col cols="6">
         <div class="pictureM float-left">
                        <div class="test float-left">
                            
                             <div class="textBox_container-right float-left">
                    <div class="textBox_items">
                        <h5 class="textBox_header">Mikaela Fryklund</h5>
                         <h6 class="textBox_title">Frontend utvecklare </h6>
                    </div>
                </div>
                        </div> 
                    </div>
    </b-col>
  </b-row>
        <div class="social-media-icons">
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="12">
                <h2 class="aboutus_h2">Kontakta oss</h2>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row class="text-center">
                 <b-col col-sm="3"></b-col>
                <b-col col-sm="3" class="float-right icons">
                 <font-awesome-icon  class="fa-xs fa-sm fa-lg" :icon="{
                    prefix: 'fab',
                    iconName: 'facebook-square',
                    }"/>
                </b-col>
                <b-col col-sm="3" col-md="6" col-lg="6" class="float-left">
                    <p class="contactUs">TassaApp</p>
                    </b-col>
                     <b-col col-sm="3"></b-col>
            </b-row>
              <b-row class="text-center">
                  <b-col col-sm="3"></b-col>
                <b-col cols="3" class="float-right icons">
                    <div style="font-size: 14px;">
                 <font-awesome-icon class="fa-xs fa-sm fa-lg"  
                    :icon="{
                    prefix: 'fab',
                    iconName: 'instagram',
                    }"/>
                    </div>
                </b-col>
                <b-col col-sm="3" class="float-left">
                    <p class="contactUs">TassaApp</p>
                </b-col>
                 <b-col col-sm="3"></b-col>
            </b-row>
                <b-row class="text-center last">
                  <b-col col-sm="3"></b-col>
                <b-col cols="3" class="float-right icons">
                    <div style="font-size: 14px;">
                 <font-awesome-icon class="fa-xs fa-sm fa-lg"  
                    :icon="{
                    prefix: 'fab',
                    iconName: 'twitter',
                    }"/>
                    </div>
                </b-col>
                <b-col col-sm="3" class="float-left">
                    <p class="contactUs">TassaApp</p>
                </b-col>
                 <b-col col-sm="3"></b-col>
            </b-row>
        </div>
</b-container> 
      
</template>

<script>
export default {
    name: "AboutUsBanner"
}
</script>

<style scoped lang="sass">


</style>