<template>
    <footer class="text-center text-white" style="background-color: #801414">
        <ul class="nav justify-content-center pt-4">
            <li class="nav-item">
                <RouterLink class="card-d-f nav-link text-white" to="/about-us">Sobre Nosotros</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="card-d-f nav-link text-white" to="/contact">Contacto</RouterLink>
            </li>
            <li class="nav-item">
                 <RouterLink class="card-d-f nav-link text-white" to="/help">Ayuda</RouterLink>
            </li>
            <li class="nav-item">
                 <RouterLink class="card-d-f nav-link text-white" to="/developers">Desarrolladores</RouterLink>
            </li>
            <li class="nav-item">
                 <RouterLink class="card-d-f nav-link text-white" to="/termscondit">Términos y Condiciones</RouterLink>
            </li>
        </ul>

        <!-- Line -->
        <div class="container line-footer"></div>

        <div class="pt-4">
            <section class="  mb-2">
                <!-- Facebook -->
                <i class="me-4 ms-4 fab fa-facebook fa-xl"></i>
                <!-- Instagram -->
                <i class="ms-4 me-4 fab fa-instagram"></i>
                <!-- Github -->
                <i class="ms-4 me-4 fab fa-github"></i>
            </section>
        </div>
        <div class="text-center text-dark pt-3 pb-4"> 
            <a class="card-d-f nav-link text-white" href="#">© 2020 Copyright:</a>
        </div>
    </footer>
</template>

<script>
    export default{
        
    }
</script>

<style lang="scss" scoped>

    @import "../assets/style/style.scss";

</style>