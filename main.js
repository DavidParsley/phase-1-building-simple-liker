// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hide = document.querySelector("#modal")
hide.classList.add("hidden")

function likeClick(e){
  e.addEventListener("click", ()=>{
    const like = e.querySelector(".like-glyph")
    if(like.textContent === EMPTY_HEART){
      mimicServerCall()
       .then((res)=>{
        like.textContent = FULL_HEART
        like.classList.add("activated-heart")
        console.log(res);
        
       })
       .catch((error)=>{
        const errorMessage = document.getElementById("modal-message")
        errorMessage.textContent = error
        hide.classList.remove("hidden")

        setTimeout(()=>{
          hide.classList.add("hidden")
        }, 3000)
       })

      } else{
        like.textContent = EMPTY_HEART
        like.classList.remove("activated-heart")
        console.log(res);
      }
  })
}

const allButtons = document.querySelectorAll(".like")
allButtons.forEach(button =>{
  likeClick(button)
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
