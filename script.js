let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('body');
let tabs = document.querySelectorAll('.btn-tab');
let contents = document.querySelectorAll('.content')


// hamburger menu //
hamburger.addEventListener('click', function(){
    body.classList.toggle('open')
})

// history tab //
tabs.forEach(tab=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(t=>{
                // remove active class from all tabs
            t.classList.remove('active')
        })
            var TargetContent = e.target.getAttribute("value") 
                // add active class to target tab 
            e.target.classList.add('active')

            contents.forEach(content => {
                    // remove active class from all contents
                content.classList.remove('active')
            })
                // add active class to target content 
            contents[TargetContent].classList.add('active')
    })
})
