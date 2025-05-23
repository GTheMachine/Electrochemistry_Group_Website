// Name of the element holding this navigation bar
let navigationBar = "navigationBar";

// List of all pages on navigation bar
let mainNav_Links = 
    ["index.html", 
     "mainPages/research.html",
     "mainPages/publications.html",
     "mainPages/news.html",
     "mainPages/pavi.html",
     "mainPages/gradStudents.html"
];
// List of all text displayed in navigation bar
// Text aligns with links on href_Links
let mainNav_DisplayText = 
    ["Home",
     "Research",
     "Publications",
     "News",
     "Dr. Pavi",
     "Students"
];

function updateNavBar(){
    let navElement = document.getElementById(navigationBar);
    let navHTML = "<nav>";
    let hrefLinks = mainNav_Links;
    let displayText = mainNav_DisplayText;
    
    // Get current page path to highlight active link
    let currentPath = window.location.pathname;
    
    for(var i = 0; i < hrefLinks.length; i++){
        // Check if this link matches current page
        let isActive = currentPath.endsWith(hrefLinks[i]);
        let activeClass = isActive ? " class='active'" : "";
        
        navHTML = navHTML + "<a href='../" + hrefLinks[i] + "'" + activeClass + ">" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}

function updateNavBarHome(){
    let navElement = document.getElementById(navigationBar);
    let navHTML = "<nav>";
    let hrefLinks = mainNav_Links;
    let displayText = mainNav_DisplayText;
    
    // Get current page path to highlight active link
    let currentPath = window.location.pathname;
    
    for(var i = 0; i < hrefLinks.length; i++){
        // Check if this link matches current page (for home page)
        let isActive = (i === 0 && (currentPath.endsWith('/') || currentPath.endsWith('index.html'))) 
                      || currentPath.endsWith(hrefLinks[i]);
        let activeClass = isActive ? " class='active'" : "";
        
        navHTML = navHTML + "<a href='" + hrefLinks[i] + "'" + activeClass + ">" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}