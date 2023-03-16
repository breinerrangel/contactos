// let buscar=document.getElementById("buscar")
// let aceptar=document.getElementById("aceptar")
// let nombre=document.getElementById("user")
// let opi=document.getElementById("propiedades")
// let display=document.getElementById("display")

// let perfil=document.getElementById("perfil")
// let url=""




const contactos=[
        {
            nombre: "Ronald",
            apellido: "Rojas",
            numero: "313265498",
            gustos: ['pizza', 'programación', 'enseñar'],
            foto:'https://avatars.githubusercontent.com/u/101873980?v=4'
          
        },
        {
            nombre: 'Harry',
            apellido: 'Potter',
            numero: '0994372684',
            gustos: ['Hogwarts', 'magia'],
            foto:'https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg'
        },
    
        {
            nombre: 'Sherlock',
            apellido: 'Hol     perfil.innerHTML=`<img src="${url}" alt="">`45643',
            gustos: ['clases interesantes', 'violin'],
            foto:'https://upload.wikimedia.org/wikipedia/commons/c/cd/Benedict_Cumberbatch_filming_Sherlock_cropped.jpg'
        },
        {
            nombre: 'Goku',
            apellido: '',
            numero: '123412523',
            gustos: ['Artes Marciales', 'Milk', 'Luchar'],
            foto:'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2017/05/09/442004.jpg'
        },
        {
            nombre: 'Barry',
            apellido: 'Allen',
            numero: '2356346346',
            gustos: ['Correr superrapido', '	Iris West', 'Misterios'],
            foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI-7418hvt_a4KfCyp63st97XKifHututvg&usqp=CAU'
        },
        {
            nombre: 'Tony',
            apellido: 'Star',
            numero: '24634745',
            gustos: ['Mujeres', 'Tecnología', 'Dinero'],
            foto:'https://assets.puzzlefactory.pl/puzzle/387/881/original.jpg'
        },
        {
            nombre: 'Peter',
            apellido: 'Parker',
            numero: '24634745',
            gustos: ['Ayudar a tia May', 'Ser un buen vecino'],
            foto:'https://img.europapress.es/fotoweb/fotonoticia_20161211123933_420.jpg'
        },
    
    ]



    
// buscar.addEventListener("click",function(){
//     if(contactos.find(contactos=>contactos.nombre==nombre.value) ){
//        poci=contactos.findIndex(contactos=>contactos.nombre==nombre.value)
//        url=contactos[poci].foto   
//        perfil.innerHTML=`<img src="${url}" alt="">`




//        if(opi.value=="apellido"){
     
//         display.innerHTML=`apellido:${contactos[poci].apellido}`
        

       
//         }
//         else if(opi.value=="numero"){
//             display.innerHTML=`numero:${contactos[poci].numero}`
//         }
//         else if(opi.value=="gustos"){
//             display.innerHTML=`gustos:${contactos[poci].gustos[0]} <br> ${contactos[poci].gustos[1]} <br> ${contactos[poci].gustos[2]}  `
//         }
        
       
        
        
//     }
    
    
// })



export default contactos
