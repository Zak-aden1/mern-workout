const tab = document.querySelectorAll('.tab')

// selecting projects
tab.forEach((button) => {
    
    button.addEventListener('click', (event) => {

    // remove previous active class
        const prevActive = document.querySelector('.active')
        prevActive.classList.remove('active')

        // add active class to selected button
        button.classList.contains('active') ? button.classList.remove('active'): button.classList.add('active')


        // remove previous shown projects
        const prevShow = document.querySelectorAll('.show')
        prevShow.forEach((pro) => {
            pro.classList.remove('show')
            // pro.classList.add('hide')
        })

        // adding class to show selected project
        const selectedContent = event.currentTarget.dataset.content;
        const currentProjects = document.querySelectorAll(selectedContent);
        console.log('curr', currentProjects);

        currentProjects.forEach((pro) => {
          console.log('pro', pro);
            pro.classList.add('show')
            // pro.classList.remove('hide')
        })
    } )
})