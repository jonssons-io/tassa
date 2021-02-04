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
    <button>Spara ändringar</button>
  </b-container>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      genders: [], // Must be an array reference!
      genderoptions: [
        { text: "Män", value: "male" },
        { text: "Kvinnor", value: "women" },
        { text: "Annat", value: "other" }
      ],
      doggender: [],
      doggenderoptions: [
        { text: "Tikar", value: "Bitch" },
        { text: "Hanar", value: " Hane" }
      ],
      size: [],
      sizeoptions: [
        { text: "Små hundar", value: "small dogs" },
        { text: "Medelstora hundar", value: "middle dogs" },
        { text: "Stora hundar", value: "Big dogs" }
      ]
    };
  }
};

import "./../../assets/css/editProfile.css";
</script>

<style scoped lang="sass">
</style>