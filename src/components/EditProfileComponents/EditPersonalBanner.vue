<template>
  <b-container>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <h3>Personligt</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <label class="editPersonal_changeLabel">Telefonnummer</label>
      </b-col>
      <b-col cols="6" sm="2" md="2" lg="2">
        <input
          class="editPersonal_changeInput"
          placeholder="070-123 45 67"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <label text-align="left" class="editPersonal_changeLabel">E-postadress</label>
      </b-col>
      <b-col cols="6" sm="2" md="2" lg="2">
        <input
          class="editPersonal_changeInput"
          placeholder="namn@mail.se"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <label class="editPersonal_changeLabel">Geografiskt område</label>
      </b-col>
      <b-col cols="6" sm="2" md="2" lg="2">
        <input
          class="editPersonal_changeInput"
          placeholder="Östra Svealand"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <label class="editPersonal_changeLabel">Ändra efternamn</label>
      </b-col>
      <b-col cols="6" sm="2" md="2" lg="2">
        <input class="editPersonal_changeInput" placeholder="Namn Efternamn"
      /></b-col>
    </b-row>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <label class="editPersonal_changeLabel">Byt profilbild</label>
      </b-col>
      <b-col cols="6" sm="2" md="2" lg="2">
        <button class="editPersonal_changeButton" placeholder="Ladda upp bild"
      /></b-col>
    </b-row>
    <b-row>
      <b-col cols="6" sm="2" md="2" lg="2">
        <label class="editPersonal_changeLabel">Radera ditt konto</label>
      </b-col>
      <b-col cols="6" sm="2" md="2" lg="2">
        <button class="editPersonal_changeButton" placeholder="Radera" />
      </b-col>
    </b-row>
    <b-nav-item v-if="loggedInStatus" @click.stop="toggleProfileTab">
      Profil
      <font-awesome-icon
        icon="chevron-down"
        v-if="!expandMenu"
      ></font-awesome-icon>
      <font-awesome-icon icon="times" v-if="expandMenu"></font-awesome-icon>
      <b-nav-item
        v-if="expandMenu"
        class="nav--subitem"
        :to="`profil/${loggedInUser}`"
      >
        Visa Profil
      </b-nav-item>
      <b-nav-item v-if="expandMenu" class="nav--subitem">
        Lägg till hund
      </b-nav-item>
      <b-nav-item v-if="expandMenu" class="nav--subitem">
        Ändra preferenser
      </b-nav-item>
      <b-nav-item v-if="expandMenu" class="nav--subitem">
        Editera beskrivning och familj
      </b-nav-item>
      <b-nav-item v-if="expandMenu" class="nav--subitem">
        Personliga inställningar
      </b-nav-item>
    </b-nav-item>
  </b-container>
</template>

<script>
export default {
  name: "EditPersonal"
};
import "./../../assets/css/editPersonal.css";
</script>

<style lang="less" scoped>
</style>