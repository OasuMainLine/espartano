<template>
<div class="row">
    <div class="col">
    
    <section class="mb-4">
    <h2 class="h1-responsive font-weight-bold text-center mb-4 mt-5">Contáctanos</h2>
    <p class="text-center w-responsive mx-auto mb-5">¿Tienes alguna duda o sugerencia? ¡No dudes en escribirnos!</p>
    <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control mt-2">
                            <label for="name" class="">Nombre</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control mt-2">
                            <label for="email" class="">Correo</label>
                        </div>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control mt-4">
                            <label for="subject" class="">Teléfono</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control mt-4">
                            <label for="subject" class="">Tema</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="5" class="form-control md-textarea mt-4"></textarea>
                            <label for="message">Mensaje a enviar</label>
                        </div>
                    </div>
                </div>
            </form>
            <div class="text-center text-md-left d-inline-flex justify-content-start">
                <a class="btn btn-primary px-5 mt-4" onclick="document.getElementById('contact-form').submit();">Enviar</a>
            </div>
            <div class="status"></div>
        </div>
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Esparza, Marañonal, Costa Rica</p>
                </li>
                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+506 8640 7121</p>
                </li>
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>el_espartano_2022@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>

    </section>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>