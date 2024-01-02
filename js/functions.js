// LINKS
var links = {
    "homepage": "index.html",
    "projects": "#projects-display",
    "resume": "resume.html",
    "contact": "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dujanah.hasan@gmail.com",
    "math": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "github": "https://github.com/dujanah",
    "email": "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dujanah.hasan@gmail.com",
    "elpha": "https://elpha.com/members/dujanah",
    "postapp": "https://github.com/shatat-ah/B07-Group-19",
    "placeholder": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

var pageTitles = ["PROJECTS", "RESUME", "CONTACT", "MENTAL MATH"];

let names = {
    "projects.html": pageTitles[0],
    "resume.html": pageTitles[1],
    "contact.html": pageTitles[2],
    "math.html": pageTitles[3]
};

function fileName(){
    return window.location.pathname.split("/").pop();
}

// Determine if device is a mobile device
function mobileDevice(){
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    if(isMobile.any()) {
        return true;
    }
    
    return false;
}

function setTitles(){
    // set default title to home
    var page = "HOME";
    
    if ((fileName()) in names){
        page = names[fileName()];
    }
    
    $("head").append("<title>" + page + " | Dujanah Zayn" + "</title>");
}

function addPageHeading(){
    $("<h1>" + names[fileName()] + "</h1>").insertAfter(".home-button");
}

/////////////////////////////////
function addIndexDesktopMenu() {
    /*MENU:
        <div class="menu">
            <h3 class="projects link">PROJECTS</h3>
            <h3 class="resume link">RESUME</h3>
            <h3 class="contact link">CONTACT</h3>
        </div>
    */
    
    $("nav").append('<div class="menu"> <h3 class="' + pageTitles[2].toLowerCase() + ' link">' + pageTitles[2] + '</h3></div>');
}

function setLinks(){
    var link = false;
    
    $(".link").click(function(){
        for (selector in links){
            if ($(this).hasClass(selector)){
                window.open(links[selector], "_self");
                link = true;
            }
        }
    });
    
    if (!(link)){
        window.open("#", "_self");
    }
}

function setMobileStyles(){
    // mobile navigation bar for other
    $("nav").css({
        'padding-left': '8%',
        'padding-right': '8%',
        'padding-top': '8%',
    });
    
    $(".home-button").css({
        'width': '8%'
    });
}
