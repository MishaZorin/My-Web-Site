let modal = document.getElementById('modal')
let modal_about = document.getElementById('modal_about')
let about = document.getElementById('about')
let projects = document.getElementById('projects')
let contacts = document.getElementById('contacts')
let skills = document.getElementById('skills')
let modal_skills = document.getElementById('modal_skills')
let modal_contacts = document.getElementById('modal_contacts')
let see = document.getElementById("see")

projects.onclick = function () {
    modal.style.display = 'block'
    // home_modal.style.display = 'none'
    modal_about.style.display = 'none'
    modal_contacts.style.display = 'none'
    modal_skills.style.display = 'none'
    // show_modal(modal)
}
see.onclick = function () {
    modal.style.display = 'block'
    
    // show_modal(modal)
}
about.onclick = function(){
    // home_modal.style.display = 'none'

    modal_about.style.display = 'block'
    modal.style.display = 'none'
    modal_contacts.style.display = 'none'
    modal_skills.style.display = 'none'
    // show_modal(modal_about)
    
}
contacts.onclick = function(){
    // home_modal.style.display = 'none'
    modal_contacts.style.display = 'block'
    modal.style.display = 'none'
    modal_about.style.display = 'none'
    modal_skills.style.display = 'none'
    // show_modal(modal_contacts)
    
}
skills.onclick = function(){
    // home_modal.style.display = 'none'
    modal_skills.style.display = 'block'
    modal_contacts.style.display = 'none'
    modal.style.display = 'none'
    modal_about.style.display = 'none'
    // show_modal(modal_skills)
}