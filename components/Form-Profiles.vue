<template>
    <div class="row">
        <div class="col">
            <form>
                <div class="mb-3 pt-5">
                    <fieldset disabled>
                        <label for="disabledTextInput" class="form-label">Nombre de la Cuenta</label>
                        <input type="text" class="form-control" id="disabledTextInput"  placeholder="Ejemplo: Mauricio Rojas">
                    </fieldset>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"  placeholder=". . . . . . . . . ">
                </div>
                <button type="submit" class="btn btn-primary">Recuperar Contraseña</button>
            </form>
        </div>
        <div class="col d-flex align-items-start justify-content-center">
            <img class="w-65 mt-5 border" src="../assets/imgs/1468621304_870578_1468621692_noticia_normal.jpg">
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