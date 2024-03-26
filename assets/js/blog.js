/* get items from localstrage which were set in form.js and send to blog.html
*/
const userInput = JSON.parse(localStorage.getItem('userInfo'));

if (userInput !== null) {
    const arrayOfmyUserName = document.getElementsByClassName('myUserName');
    for(i = 0; i <arrayOfmyUserName.length;i++ ){
        arrayOfmyUserName[i].textContent =userInput.userName;
    }
    document.querySelector('#newTitle').textContent = userInput.title;
    document.querySelector('#newContent').textContent = userInput.content;  
}