<template>
  <div class="container">
    <div class="row">

      <FormProfiles></FormProfiles>
      
      <div class="col">
        <div class="pt-5">
          <h5 class="nab-f-2 navbar text-dark"> Crear una Noticia </h5>
        </div>
      </div>

      <FormCreateNew></FormCreateNew>

      <div class="col">
        <div class="pt-5">
          <h5 class="nab-f-2 navbar text-dark"> Listado de noticias </h5>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import FormCreateNew from '../components/FormCreate-New.vue';
import FormProfiles from '../components/Form-Profiles.vue';
  export default {
    components: { FormCreateNew, FormProfiles }
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>
