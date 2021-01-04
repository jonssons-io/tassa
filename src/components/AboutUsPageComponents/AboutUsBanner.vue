<template>
  <div class="aboutus--container">
      <h1>Vår idé</h1>
      <p>Idén med Tassa kommer från ett problem som lyftes av en bekant till oss, som uttryckte oro och otrygghet inför sena kvällspromenader med hund när det nu är mörkt ute större delen av dygnet.</p>
      <p>Lösningen blev då en portal där hundägare kan mötas och knyta kontakter.</p>
      <p>Tassa skapades som ett projekt i vårt examensarbete under början av 2021.</p>
         <div class="picture-container">
             <div class="pictures">
                 <img class="mickis" alt="mickis"/>
                
                 <img class="gabbi" alt="gabbi"/>
             </div>
        </div>
        <div class="contactUs-container">
            <h2>Kontakta oss</h2>
            <div class="social-media">
                 <img src="tassa/src/assets/facebook.svg"/>
                 <p class="contactUs">/TassaApp</p>
                 <img src="tassa/src/assets/instagram.svg">
                 <p class="contactUs">/tassaapp</p>
                 <img src="tassa/src/assets/twitter.svg">
                 <p class="contactUs">TassaApp</p>
            </div>     
        </div>
  </div>
 


</template>

<script>
export default {
    name: "AboutUsBanner"
}
</script>

<style scoped lang="sass">



h1
    font-size: clamp(34px, 10vw, 54px)
    color: white
    line-height: 15vw   
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