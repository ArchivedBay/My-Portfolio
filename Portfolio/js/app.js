function attachListeners(){
    let top = document.querySelector('#toTop i'),
        links = document.getElementById('links'),
        nav = document.getElementById('nav'),
        d = document.documentElement,
        menu = document.getElementById('menu');


    window.onscroll = function(){ // As the user scrolls this will keep track of the current position. 
        let scrollVal = parseInt(d.scrollTop); //just incase a browser doesn't return this as an int.

        //237 is a bit before it becomes too hard to read so it allows some transition room.
        if(scrollVal >= 237){ 
            nav.classList.add('navHighlight');  //change the bg of the nav to black and the links to white.
            top.classList.add('showToTop');     // The 'to top' arrow.
        }else{                                   
            nav.classList.remove('navHighlight');
            top.classList.remove('showToTop');
        }
    }

    top.addEventListener('click', function(){ //if a user clicks on the 'to top' arrow, take them to the top of the page.
      d.scrollTop = 0;
    });
    
    menu.addEventListener('click', function(){ //if a user clicks on the dropdown menu in mobile mode, show the links.
        links.classList.toggle('showing');
    });
}
attachListeners(); //call the main function to start up the listeners.
