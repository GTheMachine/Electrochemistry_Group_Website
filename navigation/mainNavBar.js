// Name of the element holding this navigation bar
let navigationBar = "navigationBar";

// List of all pages on navigation bar
let mainNav_Links = 
    ["index.html", 
     "mainPages/aboutPage.html",
     "index.html",
     "index.html"
];
// List of all text displayed in navigation bar
// Text alligns with links on href_Links
let mainNav_DisplayText = 
    ["Home Page",
     "About Us",
     "Research",
     "News"
];

function updateNavBar(){
    let navElement = document.getElementById(navigationBar);
    let navHTML = "<nav>";
    let hrefLinks = mainNav_Links;
    let displayText = mainNav_DisplayText;
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='../" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}

function updateNavBarHome(){
    let navElement = document.getElementById(navigationBar);
    let navHTML = "<nav>";
    let hrefLinks = mainNav_Links;
    let displayText = mainNav_DisplayText;
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}