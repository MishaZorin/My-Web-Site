let modal = document.getElementById('modal')
let modal_about = document.getElementById('modal_about')
let about = document.getElementById('about')
let projects = document.getElementById('projects')
projects.onclick = function () {
    modal.style.display = 'block'
}
about.onclick = function(){
    modal_about.style.display = 'block'
}