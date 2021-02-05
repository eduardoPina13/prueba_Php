<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>INGENIA AGENCY</title>
            <!-- Bootstrap CSS -->    
            <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
            <!-- FontAwesom CSS -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">        
            <!--Sweet Alert 2 -->
            <link rel="stylesheet" href="css/sweetalert2/sweetalert2.min.css">        
            <!--CSS custom -->  
            <link rel="stylesheet" href="css/index.css">  
        </head>
        <body>
            <header>
                <h2 class="text-center text-dark"><span class="badge badge-warning">CRUD(Agregar, Editar, Eliminar) sobre Clientes</span></h2>
            </header> 
            <div id="listaClientes">               
                <div class="container">                
                    <div class="row"> 
                        <div class="col-11"></div>      
                        <div class="col-1">        
                            <button @click="btnAgregar" class="btn btn-dark" title="Nuevo Cliente"><i class="fas fa-plus-circle fa-2x"></i></button>
                        </div>   
                    </div>                
                    <div class="row mt-5">
                        <div class="col-lg-12">                    
                            <table class="table table-striped">
                                <thead>
                                    <tr class="bg-secondary text-dark">                               
                                        <th>Nombre</th>
                                        <th>Correo electronico</th>
                                        <th>Télefono</th>    
                                        <th>Numero de tarjeta de crédito</th>
                                        <th>Acciones</th>
                                    </tr>    
                                </thead>
                                <tbody>
                                    <tr v-for="(list,indice) of clientes" v-show="indice >= desde && indice < hasta">                             
                                        <td>{{ list.nombre }} {{ list.apellidoPat }} {{ list.apellidoMat }}</td>
                                        <td>{{ list.mail }}</td>                               
                                        <td>{{ list.telefono }}</td>
                                        <td>{{ list.tarjeta }}</td>
                                        <td>
                                        <div class="btn-group" role="group">
                                            <button class="btn btn-info" title="Editar" @click="btnEditar(list.id, list.nombre, list.apellidoPat, list.apellidoMat, list.mail, list.telefono, list.tarjeta)"><i class="fas fa-pencil-alt"></i></button>    
                                            <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(list.id, list.nombre, list.apellidoPat, list.apellidoMat)"><i class="fas fa-trash-alt"></i></button>      
						        		</div>
                                        </td>
                                    </tr>    
                                </tbody>
                            </table>
                            <ul class="pagination justify-content-center">
                                <li v-bind:class="mostrarAnterior">
                                    <a  @click="anterior" class="page-link nab"><i class="fas fa-chevron-left"></i></a>
                                </li>
                                <li class="page-item" v-for="pagina in paginas" v-show="pagina >= paginaActual && pagina <= limPaginas"><a @click="paginar(pagina)" class="page-link nab">{{ pagina }}</a></li>
                                <li v-bind:class="mostrarSiguiente">
                                    <a class="page-link nab" @click="siguiente"><i class="fas fa-chevron-right"></i></a>
                                </li>
                            </ul>                    
                        </div>
                    </div>
                </div>        
            </div>         
            <!-- jQuery, Popper.js, Bootstrap JS -->
            <script src="js/jquery/jquery-3.3.1.min.js"></script>
            <script src="js/popper/popper.min.js"></script>
            <script src="js/bootstrap/bootstrap.min.js"></script>         
            <!--Vue.JS -->    
            <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
            <!--Axios -->      
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
            <!--Sweet Alert 2 -->        
            <script src="js/sweetalert2/sweetalert2.all.min.js"></script>      
            <!--Código custom -->          
            <script src="js/index.js"></script> 
        </body>
    </html>