
<template>
    <nav class="nav-1 navbar navbar-expand-lg navbar-light " >
        <div class="m-4 container-fluid">
            <RouterLink to="/" class="title-f navbar-brand text-white" href="#">EL ESPARTANO</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-white nav-f" aria-current="page" href="#">Contacto</a>
                    </li>
                </ul>
                <RouterLink to="/perfil">Perfil</RouterLink>
                <form class="d-flex" v-if="$route.path != '/perfil'">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </form>
                <ul class="navbar-nav mb-lg-0 pt-3">
                    <li class=" nav-item">
                        <a class="nav-link text-white nav-f pe-auto " aria-current="page" data-bs-target="#modalInicioSesion" data-bs-toggle="modal">Iniciar Sesión</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white btn-card-f pe-auto" aria-current="page" data-bs-target="#modalCheckIn" data-bs-toggle="modal">Registrase</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        components:{RouterLink}
    }
</script>

<style lang="scss" scoped>
     @import "../assets/style/style.scss";
</style>