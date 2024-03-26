//take input from form in index.html and store the variables in localstorage

const userName = document.getElementById("username");
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    let userInfo = null;

document.getElementById("submitForm").addEventListener("submit",function(event){
    
    event.preventDefault();

    userInfo={
        userName: userName.value,
        title: title.value,
        content: content.value.trim(),
    };
    
    if(userInfo.userName !== "" && userInfo.title  !== "" && userInfo.content !== ""){
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.href = "./blog.html";
    }else{
        //if no input value, then alert message is displayed
        alert("Input valid User Name, Title and Content");
    }
});
