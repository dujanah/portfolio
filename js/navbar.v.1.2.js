$(function(){
    // add nav to all
    
    // add home button
    if (fileName() == "projects.html" || fileName() == "resume.html" || fileName() == "contact.html"){   
        $("main").prepend("<nav></nav>");
        $("nav").prepend('<img src="images/home.png" class="homepage link home-button">');
        addPageHeading();
        $("nav").append('<div class="menu-button"></div>');
    }
    
    // add menu button if mobile device or not homepage
    else if (mobileDevice()) {
        $("nav").append('<div class="menu-button"></div>');
    }
    
    /////////
    if (mobileDevice()){
        setMobileStyles();
    }
    
    //////////////////////////////
    setTitles();
    addFooter();
    setLinks();
});