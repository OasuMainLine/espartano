<template>
    <div id="modalCheckIn" class="modal fade"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content ">
                <div class="modal-header">
                    <h5 class="modal-title nab-f-2" id="exampleModalLabel">Registrate Gratis</h5>
                    <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="form">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label nav-f">Nombre completo</label>
                            <input type="email" name="name" class="form-control" id="name" >
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label nav-f">Correo Electronico</label>
                            <input type="text" name="email" class="form-control" id="email" placeholder="anthony@">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label nav-f">Contraseña</label>
                            <input type="password" name="password" class="form-control" id="password">
                        </div>
                        <!-- catagorias -->
                        <div class="md-3">
                            <label for="formGroupExampleInput" class="form-label card-t-f">Escoja las categorias que desea ver</label>
                                                    
                            <div class="form-check" v-for="(category) in categories" :key="category.id">
                                <input name="category-cb" class="form-check-input" type="checkbox" :value="category.id" id="flexCheckDefault">
                                <label class="form-check-label nav-f" for="flexCheckDefault">{{category.categories}}</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" name="submit" id="register-btn" class="btn btn-primary" @click="showCategories">Registrarse</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import {getCategories} from '../lib/db';
    let categories = ref([]);
    
    getCategories().then((data) => {
            categories.value = data;
    })


    function showCategories(){
        let checkboxes = document.querySelectorAll("[name=category-cb]:checked");
        let categories = [];
        checkboxes.forEach((cb) => {
            categories.push(cb.value);
        })
        console.log(categories)
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        console.log('loaded');

        let form = document.getElementById("form");
        form.addEventListener('submit', function(e){
            
            e.preventDefault();

            console.log('click btn');
            let formData = new FormData();
            formData.append('name', document.getElementById("name").value);
            formData.append('email', document.getElementById("email").value);
            formData.append('password', document.getElementById("password").value);
            
            fetch('https://noticiaslaravel.test/api/register',{
                method: 'post',
                body: formData
            })
            .then(response => response.json())
            .then(data=>{
                
                console.log(data);
                if(data.status == "registered"){
                    //hide modal
                }     
            });
        });
    });


</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
</style>