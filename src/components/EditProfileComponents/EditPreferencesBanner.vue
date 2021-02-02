<template class="profile_banner">
  <b-container class="bv-example-row editProfile_header--background">
    <h4 class="editProfile_change-HeaderSecond">Matchning</h4>
    <b-form-group> 
      <h6 class="editProfile_changePresentation-Header">Jag vill promenera med </h6>    
      <b-form-checkbox-group class="editProfile_changePresentation-text"
        v-model="genders"
        :options="genderoptions"
        name="genderselector"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group>
      <h6 class="editProfile_changePresentation-Header"> Mina hundar kommer överens med</h6>
      <b-form-checkbox-group class="editProfile_changePresentation-text"
        v-model="doggender"
        :options="doggenderoptions"
        name="doggenderSelector"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group>
      <h6 class="editProfile_changePresentation-Header"> Storleksmässigt fungerar mina hundar bra med</h6>
      <b-form-checkbox-group class="editProfile_changePresentation-text"
        v-model="size"
        :options="sizeoptions"
        name="sizeSelector"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group class="information_container">
      <h6 class="editProfile_changePresentation-Header">Allmän information </h6>
      <b-form-checkbox-group class="editProfile_changePresentation-text"
        v-model="information"
        :options="informationoptions"
        name="informationSelector"
      ></b-form-checkbox-group>
    </b-form-group>
  </b-container>
</template>

<script>
export default {
	name: "EditProfile"
};

import "./../../assets/css/editProfile.css";
</script>

<style scoped lang="sass"></style>
