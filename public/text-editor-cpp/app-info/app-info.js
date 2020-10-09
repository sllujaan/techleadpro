


var elem_name = document.querySelector("#name")
var elem_version = document.querySelector("#version")
var elem_updated = document.querySelector("#updated")
var elem_description = document.querySelector("#description")

console.log(elem_name)

var elem_download = document.querySelector("#download")
var shot1 = document.querySelector(".shot-1")


const app_versions = [
    {name: "text-editor", version: 'v1.4.0', updated: '9/01/2020', description: 'Some new features has been added like search direction & window remembers its dimensions.', alt_version_url:"1.4.0"},
    {name: "text-editor", version: 'v1.2.4', updated: '7/16/2020', description: 'Major bugs fixes when reading writing files.', alt_version_url:"1.2.4"},
    {name: "text-editor", version: 'v1.1.0', updated: '7/10/2020', description: 'Bug Fixes', alt_version_url:""},
    {name: "text-editor", version: 'v1.0.0', updated: '7/9/2020', description: 'First Release', alt_version_url:""}
]
const LATEST_VERSION = app_versions[0]




const url = new URL(window.location.href)
var version = url.searchParams.get('version')

if(!version) version = LATEST_VERSION


var valid_version = app_versions.find(appObj => {return appObj.version === version})
if(!valid_version) {
    alert("Invalid version was selected! The app has selected the latest version for you.")
    version = LATEST_VERSION

}
else {
    version = valid_version
}

console.log(version)

// do stuff
elem_name.innerHTML = `Name:       &nbsp;	&nbsp;	&nbsp;	&nbsp;${version.name}`
elem_version.innerHTML = `Version:       &nbsp;	&nbsp;	&nbsp;	&nbsp;${version.version}`
elem_updated.innerHTML = `Updated:       &nbsp;	&nbsp;	&nbsp;	&nbsp;${version.updated}`
elem_description.innerHTML = `Description:       &nbsp;	&nbsp;	&nbsp;	&nbsp;${version.description}`


elem_download.innerHTML = `Download: text-editor-${version.version} x86/x64`
const VERSION_URL = (version.alt_version_url) ? (version.alt_version_url) : (version.version);
elem_download.setAttribute('href', `https://github.com/sllujaan/text-editor/releases/download/${VERSION_URL}/setup.msi`)
shot1.querySelector('img').setAttribute('src', `./assets/${version.version}.gif`)



document.addEventListener('click', e => {
    if(e.target === elem_download) {
        if(elem_download.getAttribute('href') === '#') alert(`invalid url Parameter! ${version.version}`)
    }
})




