





var container_content = document.querySelector(".container-content")


var content_obj = {
    title: "aaaaaa",
    titleLink: "link....",
    description: "ou description....sss",
    technology: ["c++" , "java", "javascript", "node js"],
    gitLink: `https://github.com/sllujaan`
}


var contents = [
    {
        title: "aaaaaa",
        titleLink: "link....",
        description: "ou description....sss",
        technology: ["c++" , "java", "javascript", "node js"],
        gitLink: `https://github.com/sllujaan`
    },
    {
        title: "aaaaaa",
        titleLink: "link....",
        description: "ou description....sss",
        technology: ["c++" , "java", "javascript", "node js"],
        gitLink: `https://github.com/sllujaan`
    },
    {
        title: "Typing-Test App",
        titleLink: "https://typingz.herokuapp.com",
        description: "This app allows you to test you typing speed.",
        technology: ["Javascript" , "CSS", "HTML"],
        gitLink: `https://github.com/sllujaan/typing-test-javascript`
    },
    {
        title: "To-Do App",
        titleLink: "https://todozapp.herokuapp.com",
        description: "ou description....sss",
        technology: ["c++" , "java", "javascript", "node js"],
        gitLink: `https://github.com/sllujaan`
    }
]




































/**
 * 
 * @param {Object} content_object - data for the content
 * @param {title} title - title for the content
 */

function getContentContainer({title, titleLink, description, technology, gitLink}) {

    
    var stringConstructor = "test".constructor;
    var arrayConstructor = [].constructor;
    var objectConstructor = ({}).constructor;
    

    if(!title || !titleLink || !description || !technology || !gitLink) throw new Error("all parameters are required.")


    if(!Array.isArray(technology) || !technology.length > 0) throw new Error("technology must be a none array.")



    //if(content_obj !== objectConstructor) throw new Error("parameter must be a json object")

    var div_container = document.createElement("div")
    div_container.classList.add("container")

    div_container.innerHTML = `<div class="child">
                                    <a href="${titleLink}">${title}</a>
                                </div>
                                <div class="child description">${description}</div>
                                <div class="child tech"></div>

                                <div class="child social-links">
                                    <div class="git"><a class="gitLink" href="" target="_blank"><i class="fa fa-github" style="font-size:36px"></i></a></div>
                                </div>`



    var tech = div_container.getElementsByClassName("tech")[0]
    var git = div_container.getElementsByClassName("gitLink")[0]
    

    technology.forEach(techItem => {
        console.log(techItem)
        var div_techItem = document.createElement("div")
        div_techItem.classList.add("tech-item")
        div_techItem.innerText = techItem
        tech.append(div_techItem)                               
    });

    git.setAttribute("href", gitLink)

    return div_container
}



function generateContents(contents) {
    if(!contents) throw new Error("contents Array is required")
    if(!Array.isArray(contents) || !contents.length > 0) throw new Error("content must be a none array.")

    contents.forEach(content_obj => {
        container_content.append(getContentContainer(content_obj))
    })

}



try{
    //console.log(getContentContainer(content_obj))
    //container_content.append(getContentContainer(content_obj))
    generateContents(contents)
}
catch(err) {
    console.error(err)
    container_content.innerHTML = `<div class="error">Content Generation Error.</div>`
}


//container_content.append(getContentContainer(content_obj))