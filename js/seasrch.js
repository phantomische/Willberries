const search = function() {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    
    input.onclick = function(event) {
        console.log(event.target.value);
    }
}

search()