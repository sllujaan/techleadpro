



var elem_version = document.querySelector("#version")
var elem_download = document.querySelector("#download")



const url = new URL(window.location.href)

const version = url.searchParams.get('version')

if(version) {
    // do stuff
    console.log(elem_version)
    elem_version.innerHTML = `Version:       &nbsp;	&nbsp;	&nbsp;	&nbsp;${version}`
    elem_download.innerHTML = `Download: text-editor-${version}`
    elem_download.setAttribute('href', `https://github.com/sllujaan/text-editor/releases/download/${version}/setup.msi`)
}

