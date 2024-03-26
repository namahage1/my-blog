const userInput = JSON.parse(localStorage.getItem('userInfo'));

if (userInput !== null) {
    document.querySelector('#title1').textContent =userInput.userName;
    // userInput.userName;
        console.log(userInput.userName);
}