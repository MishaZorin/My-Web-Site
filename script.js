let modal = document.getElementById('modal')
let modal_about = document.getElementById('modal_about')
let about = document.getElementById('about')
let projects = document.getElementById('projects')
let contacts = document.getElementById('contacts')
let modal_contacts = document.getElementById('modal_contacts')

function show_modal(m){
    let modal_show = document.getElementsByClassName("modal_show")[0]
    modal_show?.classList.remove("modal_show")
    m.classList.add("modal_show")
}


projects.onclick = function () {
    show_modal(modal)
}
about.onclick = function(){
    show_modal(modal_about)
    
}
contacts.onclick = function(){
    show_modal(modal_contacts)
    
}
