//take input from form in index.html 

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

    console.log("user name is : " + `${userName.value}`
    + "title is : " + `${title.value}`
    +" content is : " + `${content.value.trim()}`); 

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    userName.textContext  = userName;
    display();
    window.location.href = "./blog.html";
});

function display(){
    const userInput = JSON.parse(localStorage.getItem('userInfo'));
    if (userInput !== null) {
        document.querySelector('#usenameInput').textContent =
          userInfo.userName + ` ${userInput.title}`;
      }
}