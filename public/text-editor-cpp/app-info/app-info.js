



var elem_version = document.querySelector("#version")
var elem_download = document.querySelector("#download")
var shot1 = document.querySelector(".shot-1")


const app_versions = [
    'v1.0.0'
]
const LATEST_VERSION = app_versions[0]




const url = new URL(window.location.href)
var version = url.searchParams.get('version')

if(!version) version = LATEST_VERSION


var valid_version = app_versions.find(ver => {return ver === version})
if(!valid_version) {
    alert("Invalid version was selected! The app has selected the latest version for you.")
    version = LATEST_VERSION

}

// do stuff
elem_version.innerHTML = `Version:       &nbsp;	&nbsp;	&nbsp;	&nbsp;${version}`
elem_download.innerHTML = `Download: text-editor-${version}`
elem_download.setAttribute('href', `https://github.com/sllujaan/text-editor/releases/download/${version}/setup.msi`)
shot1.querySelector('img').setAttribute('src', `./assets/${version}.gif`)



document.addEventListener('click', e => {
    if(e.target === elem_download) {
        if(elem_download.getAttribute('href') === '#') alert(`invalid url Parameter! ${version}`)
    }
})




