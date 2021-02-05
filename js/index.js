var url = "php/query.php";

var listaClientes = new Vue({
    el: "#listaClientes",
    data:{
        clientes: [],
        nombre: '',
        apellidoPat: '',
        apellidoMat: '',
        mail: '',
        telefono: '',
        tarjeta: '',
        clientesPagina: 10,
        paginas: '',
        paginaActual: 1,
        desde: '',
        hasta: '',
        mostrarAnterior: '',
        mostrarSiguiente: '',
        limPaginas: ''
    },
    methods:{
        //BOTONES        
        btnAgregar:async function(){                    
            const {value: formValues} = await Swal.fire({
            title: 'NUEVO',
            html:
                '<div class="row">'+
                    '<label class="col-sm-5 col-form-label">Nombre</label>'+
                    '<div class="col-sm-7">'+
                        '<input id="nombre" type="text" class="form-control">'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
                    '<label class="col-sm-5 col-form-label">Apellido Paterno</label>'+
                    '<div class="col-sm-7">'+
                        '<input id="apellidoP" type="text" class="form-control">'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
                    '<label class="col-sm-5 col-form-label">Apellido Materno</label>'+
                    '<div class="col-sm-7">'+
                        '<input id="apellidoM" type="text" class="form-control">'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
                    '<label class="col-sm-5 col-form-label">E-mail</label>'+
                    '<div class="col-sm-7">'+
                        '<input id="mail" type="e-mail" class="form-control">'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
                    '<label class="col-sm-5 col-form-label">Telefono</label>'+
                    '<div class="col-sm-7">'+
                        '<input id="movil" type="text" class="form-control">'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
                    '<label class="col-sm-5 col-form-label">No Tarjeta de Credito</label>'+
                    '<div class="col-sm-7">'+
                        '<input id="tarjeta" type="number" min="16" class="form-control">'+
                    '</div>'+
                '</div>',            
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',          
            confirmButtonColor:'#1cc88a',          
            cancelButtonColor:'#3085d6',  
            preConfirm: () => {            
                return [
                    this.nombre = document.getElementById('nombre').value,
                    this.apellidoPat = document.getElementById('apellidoP').value,
                    this.apellidoMat = document.getElementById('apellidoM').value,
                    this.mail = document.getElementById('mail').value,
                    this.telefono = document.getElementById('movil').value,
                    this.tarjeta = document.getElementById('tarjeta').value                  
                ]
              }
            })        
            if(this.nombre == "" || this.apellidoPat == "" || this.apellidoPat == "" || this.apellidoMat == "" || this.mail == "" || this.telefono == "" || this.tarjeta == ""){
                    Swal.fire({
                      type: 'info',
                      title: 'Datos incompletos',                                    
                    }) 
            }       
            else{          
              this.agregaCliente();          
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: '¡Cliente Agregado!'
                })                
            }
        },           
        btnEditar:async function(id, nombre, apellidoPat, apellidoMat, mail, telefono, tarjeta){                            
            await Swal.fire({
            title: 'EDITAR',
            html:
                '<div class="form-group">'+
                    '<div class="row">'+
                        '<label class="col-sm-5 col-form-label">Nombre</label>'+
                        '<div class="col-sm-7">'+
                            '<input id="nombre" value="'+nombre+'" type="text" class="form-control">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<label class="col-sm-5 col-form-label">Apellido Paterno</label>'+
                        '<div class="col-sm-7">'+
                            '<input id="apellidoP" value="'+apellidoPat+'" type="text" class="form-control">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<label class="col-sm-5 col-form-label">Apellido Materno</label>'+
                        '<div class="col-sm-7">'+
                            '<input id="apellidoM" value="'+apellidoMat+'" type="text" class="form-control">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<label class="col-sm-5 col-form-label">E-mail</label>'+
                        '<div class="col-sm-7">'+
                            '<input id="mail" value="'+mail+'" type="text" class="form-control">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<label class="col-sm-5 col-form-label">Telefono</label>'+
                        '<div class="col-sm-7">'+
                            '<input id="telefono" value="'+telefono+'" type="text" class="form-control">'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<label class="col-sm-5 col-form-label">No Tarjeta de Credito</label>'+
                        '<div class="col-sm-7">'+
                            '<input id="tarjeta" value="'+tarjeta+'" type="number" min="16" class="form-control">'+
                        '</div>'+
                    '</div>'+
                '</div>', 
            focusConfirm: false,
            showCancelButton: true,                         
            }).then((result) => {

              if (result.value) {                                             
                nombre = document.getElementById('nombre').value,    
                apellidoPat = document.getElementById('apellidoP').value,
                apellidoMat = document.getElementById('apellidoM').value,     
                mail = document.getElementById('mail').value,
                telefono = document.getElementById('telefono').value,     
                tarjeta = document.getElementById('tarjeta').value,                  
                
                this.editarCliente(id, nombre, apellidoPat, apellidoMat, mail, telefono, tarjeta);
                Swal.fire(
                  '¡Actualizado!',
                  'El cliente ha sido actualizado.',
                  'success'
                )                  
              }

            });
        },      
        btnBorrar:function(id, nombre, apellidoPat, apellidoMat){ 

            Swal.fire({
                title: '¿Está seguro de borrar el cliente: '+nombre+" "+apellidoPat+" "+apellidoMat+" ?",         
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor:'#d33',
                cancelButtonColor:'#3085d6',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if (result.value) {            
                    this.borrarCliente(id);              
                    Swal.fire(
                        '¡Eliminado!',
                        'El cliente ha sido borrado.',
                        'success'
                    )
              }
            })                
        }, 
        //PROCEDIMIENTOS para el CRUD     
        listarClientes:function(){

            axios.post(url, { opcion: 4 }).then(response =>{
               this.clientes = response.data;
               this.paginas = Math.ceil(response.data.length/this.clientesPagina);    
            });
            
        },   
        //Procedimiento CREAR.
        agregaCliente:function(){

            axios.post(url, {opcion: 1, nombre: this.nombre, apellidoP: this.apellidoPat, apellidoM: this.apellidoMat, correo: this.mail, movil: this.telefono, nTarjeta: this.tarjeta }).then(response =>{
                this.listarClientes();
            });        
            this.nombre = "",
            this.apellidoMat = "",
            this.apellidoPat = "",
            this.mail = "",
            this.telefono = "",
            this.tarjeta = ""
        },               
        //Procedimiento EDITAR.
        editarCliente:function(id, nombre, apellidoPat, apellidoMat, mail, telefono, tarjeta){

           axios.post(url, {opcion: 2, id:id, nombre: nombre, apellidoP: apellidoPat, apellidoM: apellidoMat, correo: mail, movil: telefono, nTarjeta: tarjeta }).then(response =>{           
               this.listarClientes();           
            });

        },    
        //Procedimiento BORRAR.
        borrarCliente:function(id){

            axios.post(url, {opcion:3, id:id}).then(response =>{           
                this.listarClientes();
            });

        },
        //Paginación
        paginar: function(pagina){
            this.paginaActual = pagina;
            this.desde = ((this.paginaActual - 1) * this.clientesPagina);
            this.hasta = this.paginaActual * this.clientesPagina;
            this.limPaginas = this.paginaActual + 10;
            if(this.paginaActual == 1){
                this.mostrarAnterior = "page-item disabled";
            } else {
                this.mostrarAnterior = "page-item";
            }

            if(this.paginaActual == this.paginas){
                this.mostrarSiguiente = "page-item disabled";
            } else {
                this.mostrarSiguiente = "page-item";
            }
        },
        anterior: function(){
            this.paginaActual = this.paginaActual - 1;
            this.paginar(this.paginaActual);
        },
        siguiente: function(){
            this.paginaActual = this.paginaActual + 1;
            this.paginar(this.paginaActual);
        }  
    },
    created: function(){            
        this.listarClientes();
        //funcion para que se carguen los primeros datos de la paginación
        this.paginar(1);           
    }
}); 