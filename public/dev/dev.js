


var start_container = document.getElementsByClassName("start-container")[0]
var queryString = window.location.search
var urlParam = new URLSearchParams(queryString)
var name = urlParam.get('name')


if(name) showMessage(name)

function showMessage(name) {
    var message = name+` is in devolpment process try again after some time.`

    start_container.getElementsByClassName("message")[0].innerText = message
}