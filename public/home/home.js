





var container_content = document.querySelector(".container-content")

const GITHUB = `https://github.com/sllujaan/`



var contents = [
    {
        title: "Secured User Authentication System",
        titleLink: "https://authpro.herokuapp.com",
        description: "Every One can register thier selves and do the private tasks.",
        technology: ["Node js", "MYSQL", "Cloud Services", "Javascript" , "CSS", "HTML"],
        gitLink: `${GITHUB}login-signup`
    },
    {
        title: "Typing-Test App",
        titleLink: "https://typingz.herokuapp.com",
        description: "This app allows you to test you typing speed.",
        technology: ["Javascript" , "CSS", "HTML"],
        gitLink: `${GITHUB}typing-test-javascript`
    },
    {
        title: "To-Do App",
        titleLink: "https://todozapp.herokuapp.com",
        description: "App lets the user save daily tasks.",
        technology: ["Javascript" , "CSS", "HTML"],
        gitLink: `${GITHUB}To-Do-App-Javascript`
    },
    {
        title: "shopping-Cart App",
        titleLink: "https://shoppingpoint.herokuapp.com",
        description: "E-Comerce app lets you purchase items online from home.",
        technology: ["Javascript" , "CSS", "HTML"],
        gitLink: `${GITHUB}shoppingCart-javascript`
    },
    {
        title: "Covid-19 App",
        titleLink: "https://covid19z.herokuapp.com",
        description: "Coronavirus app informs about the virus that how it is spreading around the world.",
        technology: ["Javascript" , "CSS", "HTML"],
        gitLink: `${GITHUB}Coronavirus_COVID-19`
    },
    {
        title: "Muic-Player App",
        titleLink: "../dev/dev.html?name=Muic-Player App",
        description: "The app is under developement process......",
        technology: ["Node js", "Angular", "MYSQL", "Cloud Services", "Javascript" , "CSS", "HTML"],
        gitLink: `${GITHUB}`
    },
    {
        title: "Text Editor - Desktop Application",
        titleLink: "../text-editor-cpp/text-editor-cpp.html",
        description: "Text editor allows you to save your data in text files.",
        technology: ["C++", "Windows Programming"],
        gitLink: `${GITHUB}text-editor`
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
/*

var content_obj = {
    title: "aaaaaa",
    titleLink: "link....",
    description: "ou description....sss",
    technology: ["c++" , "java", "javascript", "node js"],
    gitLink: `https://github.com/sllujaan`
}
*/