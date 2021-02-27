//init Github - instantiate
const github = new Github
//init UI
const ui = new UI

// search input 
const searchUser =  document.getElementById('searchUser')

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value

    if(userText !== '') {
       //make http call
       github.getUser(userText)
       .then(data => { // consume the promise
           if(data.profile.message === 'Not Found') {
               //show alert message
                ui.showAlert('User not found', 'alert alert-danger')
           } else {
               //show profile 
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
           }
       }) 
    } else {
        //clear profile 
        ui.clearProfile()
    }
})