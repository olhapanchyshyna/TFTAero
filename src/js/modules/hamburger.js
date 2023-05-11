function hamburger(openSelector,closeSelector,menuSelector,menuInformatiomSelector){

    window.addEventListener('resize', () => {
        showMenu();
    });
    showMenu();


    function showMenu(){
        if (window.innerWidth <= 1060){
            const   openBtn = document.querySelector(openSelector),
                    closeBtn = document.querySelector(closeSelector),
                    menu = document.querySelector(menuSelector),
                    menuInformatiom = document.querySelector(menuInformatiomSelector);

            close();

            function open(){
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                menuInformatiom.style.display = 'flex';
                openBtn.style.display = 'none';
                closeBtn.style.display = 'flex';
                

            }
            function close(){
                menu.style.display = 'none'
                menuInformatiom.style.display = 'none';
                closeBtn.style.display = 'none';
                openBtn.style.display = 'flex';
                
            }
        
            openBtn.addEventListener('click', () =>{
                open();

                menu.classList.add('animate__fadeIn');
                menu.classList.remove('animate__fadeOut');

                menuInformatiom.classList.add('animate__fadeIn');
                menuInformatiom.classList.remove('animate__fadeOut');

                closeBtn.classList.add('animate__fadeIn');
                closeBtn.classList.remove('animate__fadeOut');

                openBtn.classList.remove('animate__fadeIn');
                openBtn.classList.add('animate__fadeOut');
        
            })
            
            closeBtn.addEventListener('click', () => {
        
                menu.classList.remove('animate__fadeIn');
                menu.classList.add('animate__fadeOut');

                menuInformatiom.classList.remove('animate__fadeIn');
                menuInformatiom.classList.add('animate__fadeOut');

                closeBtn.classList.remove('animate__fadeIn');
                closeBtn.classList.add('animate__fadeOut');

                openBtn.classList.add('animate__fadeIn');
                openBtn.classList.remove('animate__fadeOut');
            
                setTimeout(() => {
                    close();
                },1000)
            })
        }
        if (window.innerWidth >= 1241){
            const   openBtn = document.querySelector(openSelector),
                closeBtn = document.querySelector(closeSelector),
                menu = document.querySelector(menuSelector),
                menuInformatiom = document.querySelector(menuInformatiomSelector);


            menu.style.display = 'flex';
            menu.style.flexDirection = 'row';
            menuInformatiom.style.display = 'flex';
            openBtn.style.display = 'none';
            closeBtn.style.display = 'none';
        }
        
    }
        



}
export default hamburger;