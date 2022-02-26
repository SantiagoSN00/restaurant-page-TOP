import renderizar from "./platillos_renderer"
import platillos_loader from "./platillos_loader"


const button_interaction = () => {
    
    let tabs = document.querySelectorAll('[data-tab-horario]')
    let informacion = document.querySelectorAll('[data-tab-info]')
    
    tabs.forEach(element => {
        element.addEventListener('click',function(e){
            const targets = document.querySelectorAll(`[data-${e.target.textContent}]`)

            console.log(e.target)
            tabs.forEach(element => {
                element.classList.remove('activo')
            });
            informacion.forEach(element =>{
                element.classList.remove('activo')
                element.classList.add('oculto')
            })
            targets.forEach(element => {
                element.classList.add('activo')
                element.classList.remove('oculto')
            });
            //const contenedor = document.querySelector('')
            let platos = platillos_loader()
            console.log(platos)
            renderizar(platos)
            

        })
    });

}
export default button_interaction;