<template>
    <div class="pt-3 row row-cols-1 row-cols-md-3 g-4">
        <div>
            <button class="btn-outline-secondary card shadow category-card img-fin" data-bs-toggle="button" aria-pressed="off">
                <div class="card-body text-white">
                    <h5 class="card-title">Finanzas</h5>
                    <p class="card-text">
                        Noticias relacionadas a movimientos de moneda y la bolsa.
                    </p>
                </div>
            </button>
        </div>
        <div>
            <button class="btn-outline-secondary card shadow category-card img-pol" data-bs-toggle="button" aria-pressed="off">
                <div class="card-body text-white">
                    <h5 class="card-title">Política</h5>
                    <p class="card-text">
                        Noticias relacionadas al gobierno y movimientos políticos.
                    </p>
                </div>
            </button>
        </div>
        <div>
            <button class="btn-outline-secondary card shadow category-card img-via" data-bs-toggle="button" aria-pressed="off">
                <div class="card-body text-white">
                    <h5 class="card-title">Viajes</h5>
                    <p class="card-text">
                        Noticias relacionadas al turismo y el extranjero.
                    </p>
                </div>
            </button>
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