 
 
 
 
 function createCard(date,title,content) {

    let container = document.createElement('article')
    container.classList.add('card')
    container.innerHTML =
        `
        <div class="card-container">

                        
                        <header>
                            <div class="top-area">
                            <p>${date}</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#574ae8" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            </div>

                            <div class="title-area">
                                <h1>${title}</h1>
                            </div>
                            
                        </header>

                        <main>
                            <p>
                            ${content}
                            </p>
                        </main>

                       

        </div>
        
        
        
        
        `
    

    document.querySelector('#cards-area').append(container)




}


let n = 0

while( n <  5) {
    createCard('01/09/2021',`ola mundo ${n}`,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat justo, varius at dolor nec, euismod lobortis erat. Proin vel lobortis sem, a feugiat sapien. Quisque a sem vitae ex bibendum iaculis nec quis leo. Sed eget iaculis sem. Suspendisse scelerisque risus velit, id porttitor ante ornare sit amet.')
    n++
}




