// Name of the element holding this navigation bar
let studentNavBar = "studentNavBar";

// List of all pages on navigation bar
let studentNav_Links = 
    ["mainPages/gradStudents.html",
     "mainPages/undergraduates.html",
     "mainPages/alumni.html"
];
// List of all text displayed in navigation bar
// Text alligns with links on href_Links
let studentNav_DisplayText = 
    ["Graduates",
     "Undergraduates",
     "Alumni"
];

function updateStudentNavBar(){
    let navElement = document.getElementById(studentNavBar);
    let navHTML = "<nav>";
    let hrefLinks = studentNav_Links;
    let displayText = studentNav_DisplayText;
    
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

function updateStudentNavBarHome(){
    let navElement = document.getElementById(studentNavBar);
    let navHTML = "<nav>";
    let hrefLinks = studentNav_Links;
    let displayText = studentNav_DisplayText;
    
    // Get current page path to highlight active link
    let currentPath = window.location.pathname;
    
    for(var i = 0; i < hrefLinks.length; i++){
        // Check if this link matches current page
        let isActive = currentPath.endsWith(hrefLinks[i]);
        let activeClass = isActive ? " class='active'" : "";
        
        navHTML = navHTML + "<a href='" + hrefLinks[i] + "'" + activeClass + ">" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}