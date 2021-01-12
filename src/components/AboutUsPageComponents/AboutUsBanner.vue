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
      <p>Lösningen blev då en portal där hundägare kan mötas och knyta kontakter.</p>
      <p>Tassa skapades som ett projekt i vårt examensarbete under början av 2021.</p>
    </b-col>
  </b-row>
      <b-row>
    <b-col>
        <div class="pictureG float-right">
                        <div class="test float-left">
                            <iframe class="gabbi" alt="gabbi" frameBorder="0" />
                              <div class="textBox_container-left float-left">
                    <div class="textBox_items">
                        <h5 class="textBox_header">Gabrielle Jonsson</h5>
                         <h6 class="textBox_title">Frontend utvecklare </h6>
                    </div>
                </div>
                        </div>
                     </div>
    </b-col>
    <b-col>
         <div class="pictureM float-left">
                        <div class="test float-left">
                            <iframe class="mickis" alt="mickis" frameBorder="0"/>
                             <div class="textBox_container-right float-left">
                    <div class="textBox_items">
                        <h5 class="textBox_header">Mikaela Fryklund</h5>
                         <h6 class="textBox_title">Frontend utvecklare </h6>
                    </div>
                </div>
                        </div> 
                    </div>
    </b-col>
    <div class="w-100"></div>
  </b-row>
        <div class="social-media-icons">
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="12">
                <h2>Kontakta oss</h2>
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




h1
    font-size: clamp(1.15rem, 4vw, 1.9rem)
    color: white
    margin-bottom: 0.8em
    margin-top: 3rem
h2
    font-size: clamp(0.9rem, 4vw, 1.9rem)
    color: white
    margin-bottom: 1em
    margin-top: 4.5rem
    
p
    color: white
    font-size: clamp(0.85rem, 3vw, 1.3rem)
    font-weight: 400
    margin-bottom: 1em
    text-align: left
    padding-left: 1em
    padding-right: 1em

.contactUs

    margin-bottom: 0.4rem
    font-size: clamp(0.8rem, 4vw, 1.3rem)

.social-media-icons
    margin-top: -2.3rem
    height: 25%
    line-height: 1.1rem

.last
    margin-bottom: 5rem    
</style>