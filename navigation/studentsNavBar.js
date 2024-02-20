// Name of the element holding this navigation bar
let studentNavBar = "studentNavBar";

// List of all pages on navigation bar
let studentNav_Links = 
    ["mainPages/gradStudents.html",
     "mainPages/undergradStudents.html",
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
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='../" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}

function updateStudentNavBarHome(){
    let navElement = document.getElementById(studentNavBar);
    let navHTML = "<nav>";
    let hrefLinks = studentNav_Links;
    let displayText = studentNav_DisplayText;
    
    for(var i = 0; i < hrefLinks.length; i++){
        navHTML = navHTML + "<a href='" + hrefLinks[i] + "'>" + displayText[i] + "</a>";
    }
    navHTML = navHTML + "</nav>";
    navElement.innerHTML = navHTML;   
}