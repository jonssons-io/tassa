<template>

   <b-container class="bv-example-row aboutus--container">
        <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="12">
        <h1>Vår idé</h1>
    </b-col>
    <b-col></b-col>
  </b-row>
  <b-row class="text-center">
    <b-col>
    </b-col>
    <b-col cols="12">
          <p>Idén med Tassa kommer från ett problem som lyftes av en bekant till oss, som uttryckte oro och otrygghet inför sena kvällspromenader med hund när det nu är mörkt ute större delen av dygnet.</p>
      <p>Lösningen blev då en portal där hundägare kan mötas och knyta kontakter.</p>
      <p>Tassa skapades som ett projekt i vårt examensarbete under början av 2021.</p>
    </b-col>
    <b-col></b-col>
  </b-row>
            <b-row class="bv-example-row-flex-cols"> 
                <b-col col-sm="6" col-md="6" col-lg="6"></b-col>
                <b-col col-sm="6" col-md="6" col-lg="6" align-self="end">
                    <div class="pictureM float-left">
                        <div class="test float-left">
                            <iframe class="mickis" alt="mickis" frameBorder="0"/>
                        </div> 
                    </div>
                    
                </b-col>
            </b-row>
            <b-row class="bv-example-row-flex-cols">
            <b-col col-sm="6" col-md="6" col-lg="6"></b-col>
            <b-col col-sm="6" col-md="6" col-lg="6" align-self="start">
                <div class="textBox_container-right float-left">
                    <div class="textBox_items">
                        <h5 class="textBox_header">Mikaela Fryklund</h5>
                         <h6 class="textBox_title">Frontend utvecklare </h6>
                    </div>
                </div>
            </b-col>
            </b-row>     
               <b-row class="bv-example-row-flex-cols">
                <b-col col-sm="6" col-md="6" col-lg="6" align-self="end" class="float-end" >
                    <div class="pictureG float-right">
                        <div class="test float-left">
                            <iframe class="gabbi" alt="gabbi" frameBorder="0" />
                        </div>
                     </div>
                </b-col>
                <b-col col-sm="6" col-md="6" col-lg="6"></b-col>
            </b-row>
              <b-row class="bv-example-row-flex-cols">
            <b-col col-sm="6" col-md="6" col-lg="6" align-self="start" class="float-right">
                <div class="textBox_container-left float-left">
                    <div class="textBox_items">
                        <h5 class="textBox_header">Gabrielle Jonsson</h5>
                         <h6 class="textBox_title">Frontend utvecklare </h6>
                    </div>
                </div>
            </b-col>
             <b-col col-sm="6" col-md="6" col-lg="6"></b-col>
            </b-row> 
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
                <b-row class="text-center">
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
        
</b-container> 
      
</template>

<script>
export default {
    name: "AboutUsBanner"
}
</script>

<style scoped lang="sass">



h1
    font-size: clamp(34px, 9vw, 54px)
    color: white
    line-height: 11vw   
    margin-bottom: 0.8em
    margin-top: 2em
h2
    font-size: clamp(26px, 7vw, 48px)
    color: white
    margin-bottom: 0.8em
    margin-top: 2em
p
    color: white
    font-size: 1.1em
    font-weight: 400
    margin-bottom: 0.9em
    text-align: left
    padding-left: 7vw
    padding-right: 4vw



</style>