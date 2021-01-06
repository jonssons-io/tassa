<template>

   <b-container class="bv-example-row aboutus--container">
        <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="8">
        <h1>Vår idé</h1>
    </b-col>
    <b-col></b-col>
  </b-row>
  <b-row class="text-center">
    <b-col>
    </b-col>
    <b-col cols="8">
          <p>Idén med Tassa kommer från ett problem som lyftes av en bekant till oss, som uttryckte oro och otrygghet inför sena kvällspromenader med hund när det nu är mörkt ute större delen av dygnet.</p>
      <p>Lösningen blev då en portal där hundägare kan mötas och knyta kontakter.</p>
      <p>Tassa skapades som ett projekt i vårt examensarbete under början av 2021.</p>
    </b-col>
    <b-col></b-col>
  </b-row>
            <b-row class="bv-example-row-flex-cols"> 
                <b-col sm="12" align-self="end">
                    <div class="pictureM">
                        <iframe class="mickis" alt="mickis" frameBorder="0"/>
                    </div>
                </b-col>
            </b-row>
             <b-row>
                <b-col sm="12" align-self="end" class="float-right">
                    <div class="pictureG">
                     <iframe class="gabbi" alt="gabbi" frameBorder="0"/>
                     </div>
                </b-col>
            </b-row>
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="6">
                <h2>Kontakta oss</h2>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="4">
                 <img class="facebook" alt="facebook"  />
                 <font-awesome-icon :icon="{
                    prefix: 'fab',
                    iconName: 'facebook-square',
                    }"/>
                </b-col>
                <b-col cols="4">
                    <p class="contactUs">TassaApp</p>
                    </b-col>
            </b-row>
              <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="4">
                 <img class="instagram" alt="instagram"  />
                 <font-awesome-icon :icon="{
                    prefix: 'fab',
                    iconName: 'instagram',
                    }"/>
                </b-col>
                <b-col cols="4">
                      <p class="contactUs">TassaApp</p>
                </b-col>
            </b-row>
             <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="4">
                 <img class="twitter" alt="twitter"  />
                 <font-awesome-icon :icon="{
                    prefix: 'fab',
                    iconName: 'twitter',
                    }"/>
                </b-col>
                <b-col cols="4">
                      <p class="contactUs">TassaApp</p>
                </b-col>
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