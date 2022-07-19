<template>
    <form>
        <div class="text-dark pt-3">
            <label for="titleNews" class="form-label"> Titulo de la noticia </label>
            <input type="text" class="form-control" id="titleNews">
        </div>
        <div class="text-dark mb-4 pt-3">
            <label for="categories" class="form-label"> Categorias </label>
            <select class="form-select" aria-label="Default select example">
                <option selected> Selecione la categoria</option>                        
                <option value="1"> Ciencia y tecnologia </option>
                <option value="2"> Deporte </option>
                <option value="3"> Entretenimiento </option>
                <option value="4"> Salud </option>
            </select>
        </div>
        <div class="text-dark mb-4 pt-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="text-dark mb-4 pt-3">
            <label for="formFile" class="form-label">Imagen de la noticia</label>
            <input class="form-control" type="file" id="formFile" placeholder="Arrastre Archivo">
        </div>
        <div class="pt-5 pb-5 ">
            <button type="submit" class="btn btn-secondary btn-block m-3" style="float: right;"> Cancelar </button>              
            <button type="submit" class="btn btn-primary btn-block m-3" style="float: right;" data-bs-dismiss="modal"> Publicar </button>                         
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>