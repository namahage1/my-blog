
//take input from form in index.html 
document.getElementById("submitForm").addEventListener("submit",function(event){event.preventDefault();
    let userName = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    console.log("user name is : " + `${userName}`
    + "title is : " + `${title}`
    +" content is : " + `${content}`);  
});