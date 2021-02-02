<template>
  <b-container>
      <h4 class="editPersonal_changeLabel">Personligt</h4>
    <b-row cols="2" sm="2" md="2" lg="2" class="my-4" v-for="type in phone" :key="type">
        <lable class="editLable" :for="`type-${type}`" >{{ type }}</lable>
        <b-form-input placeholder="070-1234567" :id="`type-${type}`" :type="type" class="editPersonal_changeInput"></b-form-input>
    </b-row>
    <b-row cols="2" sm="2" md="2" lg="2" class="my-4" v-for="type in mail" :key="type">
        <label class="editLable" :for="`type-${type}`">{{ type }}</label>
        <b-form-input placeholder="Namn@mail.com" :id="`type-${type}`" :type="type" class="editPersonal_changeInput"></b-form-input>
    </b-row>
      <b-row cols="2" sm="2" md="2" lg="2" class="my-4" v-for="type in area" :key="type">
        <label class="editLable" :for="`type-${type}`">{{ type }}</label>
        <b-form-input placeholder="Östra svealand" :id="`type-${type}`" :type="type" class="editPersonal_changeInput"></b-form-input>
    </b-row>
     <b-row cols="2" sm="2" md="2" lg="2" class="my-4 "  v-for="type in name" :key="type">
        <label :for="`type-${type}`">{{ type }}</label>
        <b-form-input placeholder="Namn Efternamn" :id="`type-${type}`" :type="type" class="editPersonal_changeInput"></b-form-input>
    </b-row>
    <b-row cols="2" sm="2" md="2" lg="2" class="my-4" v-for="type in picture" :key="type">
         <label :for="`type-${type}`">{{ type }}</label>
         <button
         color="success"
         class="btn btn-success">{{'Ladda upp bild'}}</button>
    </b-row>
  <b-row cols="2" sm="2" md="2" lg="2" class="my-4" v-for="type in erease" :key="type">
         <label :for="`type-${type}`">{{ type }}</label>
         <button
         color="success"
         class="btn btn-danger">{{'Radera'}}</button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "EditPersonal",
  data() {
      return {
          phone:[
        'Telefonnummer'
          ],
          mail:[
        'E-postadress'
          ],
          area:[
        'Geografiskt område'
          ],
        name: [
            'Ändra namn'
        ],
        picture: [
            'Byt profilbild'
        ],
        erease: [
            'Radera ditt konto'
        ]
      }
    }
};
import "./../../assets/css/editPersonal.css";
</script>

<style lang="less" scoped>
</style>