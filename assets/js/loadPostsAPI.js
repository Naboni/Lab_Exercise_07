// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    // load_fromPlaceHolder();
    loadDataNew();
    
    const posts = document.querySelector('body')
    const filter = document.querySelector("body > div.ui.top.attached.tabular.menu > div > div > div > input[type=text]")
    
    // const item = document.querySelectorAll("#thePosts > div > div.content")
    
    filter.addEventListener('keyup', (e) => {
        const searchInput = e.target.value.toLowerCase();
        const postHeaders = posts.getElementsByClassName('header')
        Array.from(postHeaders).forEach((postHeader) => {
            const postHeaderText = postHeader.textContent;
            if (postHeaderText.toLowerCase().indexOf(searchInput) != -1) {
                x = postHeader.parentElement.parentElement
                console.log(x)
                x.style.display = 'block'
                      
            } else{
                x = postHeader.parentElement
                x.style.display = ''  
            }
        })
    })
});


//load post from fake api function 
function load_fromPlaceHolder() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let output = ''

            data.forEach(post => {

                output = `
                <div class="item">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60">
                    </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle">${post.title}</a>
                        <div class="meta">
                            <span id="bDate">${new Date().getDate()} </span>
                            <span>By: <a href="#" id="bAuthor"> ${post.id}</a></span>
                        </div>
                        <div class="description">
                            <p id="bDesc">${post.body}</p>
                        </div>
                        <div class="extra"> 
                            <a class="ui floated basic violet button" href="#">Read More...</a> 
                        </div>
                    </div>
                </div>
            `
                postDiv3.innerHTML = output;

            })

        })

}
//async await
async function load_fromPlaceHolder_new() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return data

}

async function loadDataNew() {

    load_fromPlaceHolder_new()
        .then((data) => {
            let output =''

            let loading = `
            <div class="ui segment" style="padding:60px">
                <div class="ui active loader"></div>
                <p></p>
           </div>
            `
            postDiv3.innerHTML = loading;
            
            setTimeout(() => {
                data.forEach(post => {
                    output += `
                    <div class="item">
                        <div class="image">
                            <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60">
                        </div>
                        <div class="content">
                            <a class="header" href="#" id="bTitle">${post.title}</a>
                            <div class="meta">
                                <span id="bDate">${new Date().getDate()} </span>
                                <span>By: <a href="#" id="bAuthor"> ${post.id}</a></span>
                            </div>
                            <div class="description">
                                <p id="bDesc">${post.body}</p>
                            </div>
                            <div class="extra"> 
                                <a class="ui floated basic violet button" href="#">Read More...</a> 
                            </div>
                        </div>
                    </div>
                `
            }, 3000)

                postDiv3.innerHTML = output;
            })

        })

}