
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
                element.classList.add('oculto')
            })
            targets.forEach(element => {
                element.classList.add('activo')
                element.classList.remove('oculto')
            });
        })
    });

}
export default button_interaction;