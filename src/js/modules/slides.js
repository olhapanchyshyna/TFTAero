// --------------Слайд Circle world--------------
function sliders(){
        

        function sliderCircle(){
            const   slidesCircle = document.querySelectorAll('.circle-word-slide'),
            nextCircle = document.querySelector('.offer__slider-next'),
            prevCircle = document.querySelector('.offer__slider-prev'),
            currentCircle = document.querySelectorAll('.current'),
            sliderWrapperCircle = document.querySelector('.circle-word-slide-container'),
            widthCircle = window.getComputedStyle(sliderWrapperCircle).width,
            slidesFiledCircle = document.querySelector('.offer__slider-inner');
            let     slideIndexCircle = 1,
                    offsetCircle = 0;    
            

            slidesFiledCircle.style.width = 100 * slidesCircle.length + '%';
            slidesFiledCircle.style.display = 'flex';
            slidesFiledCircle.style.transition = '0.5s all';
            sliderWrapperCircle.style.overflow = 'hidden';
            
            
            currentCircle.forEach(item => {
                item.classList.remove('active-current');
            });
            
            function showCurrentCircle(i = 0){
                currentCircle[i].classList.add('active-current');
            }
            showCurrentCircle();
            

            function changeCurrent(){
                currentCircle.forEach((num, a) => {
                    num.classList.remove('active-current');
                    if(slideIndexCircle - 1 === a){
                        showCurrentCircle(a);
                    }
                });
            }
            
            function shiftSlideCircle(){
                slidesFiledCircle.style.transform = `translateX(-${offsetCircle}px)`;
            }

            function addSlideCircle(){
                const parentCircle = document.querySelector('.offer__slider-inner');
                const cloneFirstSlideCircle = document.createElement('div');
                
                cloneFirstSlideCircle.classList.add('circle-word-slide');
                cloneFirstSlideCircle.innerHTML = `
                    <div class="circle-word-slide-title">
                        Круг в Киеве
                    </div>
                    <div class="circle-word-slide-img">
                        <img src="./img/slides/circle-word-slide-domodedovo.png" alt="">
                    </div>
                    <div class="circle-word-slide-text">Несколько кругов вокруг одного из крупнейших аэропортов региона — Дубаи, во время полета вы сможете увидеть с высоты птичьего полета легендарный высочайший в мире небоскреб...</div>
                    <div class="circle-word-slide-button">
                        <button>Читать далее</button>
                    </div>
                `;
                parentCircle.append(cloneFirstSlideCircle);
            }
            addSlideCircle();
            
            
            function listenerNextCircle(){
                if (offsetCircle == (+widthCircle.slice(0, widthCircle.length - 2)/2  * (slidesCircle.length - 1))) { //650    px
                    offsetCircle = 0;
                } else {
                    offsetCircle += (+widthCircle.slice(0, widthCircle.length - 2)/2); 
                }
                
                shiftSlideCircle();
                
                if (slideIndexCircle == slidesCircle.length) {
                    slideIndexCircle = 1;
                } else {
                    slideIndexCircle++;
                }
                
                changeCurrent();
            }
            
            nextCircle.addEventListener('click', listenerNextCircle);
            
            
            
            function listenerPrevCircle(){
                if (offsetCircle == 0) {
                    offsetCircle = (+widthCircle.slice(0, widthCircle.length - 2)/2  * (slidesCircle.length - 1));
                } else {
                    offsetCircle -= (+widthCircle.slice(0, widthCircle.length - 2)/2);
                }
                shiftSlideCircle();
            
                if (slideIndexCircle == 1) {

                    slideIndexCircle = slidesCircle.length;
                } else {
                    slideIndexCircle--;
                }
                
                changeCurrent();
            }
            
            prevCircle.addEventListener('click', listenerPrevCircle);
            
            
            if(document.documentElement.clientWidth <= 815){
            
                nextCircle.removeEventListener('click', listenerNextCircle);
                prevCircle.removeEventListener('click', listenerPrevCircle);
                
                nextCircle.addEventListener('click', () => { 
                    if (offsetCircle == (+widthCircle.slice(0, widthCircle.length - 2) * (slidesCircle.length - 1))) { //650    px
                        offsetCircle = 0;
                    } else {
                        offsetCircle += +widthCircle.slice(0, widthCircle.length - 2); 
                    }
                    
                    shiftSlideCircle();
                    
                    if (slideIndexCircle == slidesCircle.length) {
                        slideIndexCircle = 1;
                    } else {
                        slideIndexCircle++;
                    }
                    
                    changeCurrent();
                });
            
                prevCircle.addEventListener('click', () => {
                    if (offsetCircle == 0) {
                        offsetCircle = +widthCircle.slice(0, widthCircle.length - 2) * (slidesCircle.length - 1);
                    } else {
                        offsetCircle -= +widthCircle.slice(0, widthCircle.length - 2);
                    }
                    
                    shiftSlideCircle();
                    
                    if (slideIndexCircle == 1) {
                        slideIndexCircle = slidesCircle.length;
                    } else {
                        slideIndexCircle--;
                    }
                    
                    changeCurrent();
                });
            }
            
        }
      
          
        
        // --------------Слайд reviews--------------

        function sliderReviews(){
        
            const   slidesReviews = document.querySelectorAll('.reviews-slide'),
            nextReviews = document.querySelector('.offer__slider-next_reviews'),
            prevReviews = document.querySelector('.offer__slider-prev_reviews'),
            currentReviews = document.querySelectorAll('.reviews .current'),
            sliderWrapperReviews = document.querySelector('.reviews-slide-container'),
            widthReviews = window.getComputedStyle(sliderWrapperReviews).width,
            slidesFiledReviews = document.querySelector('.offer__slider-inner-reviews');
            
            let slideIndexReviews = 1,
            offsetReviews = 0;    
            
            slidesFiledReviews.style.width = 100 * slidesReviews.length + '%';
            slidesFiledReviews.style.display = 'flex';
            slidesFiledReviews.style.transition = '0.5s all';
            sliderWrapperReviews.style.overflow = 'hidden';
            
            window.addEventListener('resize', () => {
                widthReviews = window.getComputedStyle(sliderWrapperReviews).width
            })
            
            slidesReviews.forEach(item => {
                item.style.width = widthReviews;    
            });
            
            currentReviews.forEach(item => {
                item.classList.remove('active-current');
            });
            
            function changeCurrent(){
                currentReviews.forEach((num, a) => {
                    num.classList.remove('active-current');
                        if(slideIndexReviews - 1 === a){
                            showCurrentReviews(a);
                        }
                });
            }
            
            function showCurrentReviews(i = 0){
                currentReviews[i].classList.add('active-current');
            }
            showCurrentReviews();
            
            function shiftSlideReviews(){
                slidesFiledReviews.style.transform = `translateX(-${offsetReviews}px)`;
            }
            
            function addSlideReviews(src,text){
                const parentReviews = document.querySelector('.offer__slider-inner-reviews');
                const cloneFirstSlideReviews = document.createElement('div');
                
                cloneFirstSlideReviews.classList.add('reviews-slide');
                cloneFirstSlideReviews.innerHTML = `
                    <div class="reviews-slide-img">
                        <img src= ${src} alt="reviews">
                    </div>
                    <div class="reviews-slide-text">
                        ${text}
                    </div>
                `;
                parentReviews.append(cloneFirstSlideReviews);
                
            }
            addSlideReviews("./img/slides/reviews-slide-img-1.png",'Огромное спасибо компании ТФТаеро организаторам за предоставленную возможность воспользоваться сертификатом. Получили огромное удовольствие от полёта, сын в восторге! Спасибо пилоту Алексею за инструктаж. Рекомендую друзьям и вам! И да, берите сразу сеанс от 1 часа.');
            addSlideReviews("./img/slides/reviews-slide-img-2.png",'Большое спасибо инструктору Сергею. Подарила сыновьям 1час полета и не пожалела. Позитивные эмоции, яркие впечатления , доброжелательность и коммуникабельность персонала. Вообщем, сюрприз удался. Спасибо. Рекомендую родителям взрослых детей.');
            
            
            
            
            function listenerNextReviews(){
                if (offsetReviews == (+widthReviews.slice(0, widthReviews.length - 2)/3  * (slidesReviews.length - 1))) { //650    px
                    offsetReviews = 0;
                } else {
                    offsetReviews += (+widthReviews.slice(0, widthReviews.length - 2)/3); 
                }
            
                shiftSlideReviews();
            
                if (slideIndexReviews == slidesReviews.length) {
                    slideIndexReviews = 1;
                } else {
                    slideIndexReviews++;
                }
                changeCurrent();
                
            }
            
            nextReviews.addEventListener('click', listenerNextReviews);
            
            function listenerPrevReviews(){
                if (offsetReviews == 0) {
                    offsetReviews = +widthReviews.slice(0, widthReviews.length - 2)/3 * (slidesReviews.length - 1);
                } else {
                    offsetReviews -= (+widthReviews.slice(0, widthReviews.length - 2)/3);
                }
            
                shiftSlideReviews();
            
                if (slideIndexReviews == 1) {
                    slideIndexReviews = slidesReviews.length;
                } else {
                    slideIndexReviews--;
                }

                changeCurrent();
            }
                
            prevReviews.addEventListener('click', listenerPrevReviews);
            
            function nextReviews2(){
                if(offsetReviews == (+widthReviews.slice(0, widthReviews.length - 2)/2 * (slidesReviews.length - 1))) { //650    px
                    offsetReviews = 0;
                }else {
                    offsetReviews += (+widthReviews.slice(0, widthReviews.length - 2)/2); 
                }
            
                shiftSlideReviews();
            
                if (slideIndexReviews == slidesReviews.length) {
                    slideIndexReviews = 1;
                } else {
                    slideIndexReviews++;
                }

                changeCurrent();
                
            }

            function prevReviews2(){
                if (offsetReviews == 0) {
                    offsetReviews = +widthReviews.slice(0, widthReviews.length - 2)/2 * (slidesReviews.length - 1);
                } else {
                    offsetReviews -= (+widthReviews.slice(0, widthReviews.length - 2)/2);
                }
                
                shiftSlideReviews();
                
                if (slideIndexReviews == 1) {
                    slideIndexReviews = slidesReviews.length;
                } else {
                    slideIndexReviews--;
                }
                
                changeCurrent();
            }
                
            if(document.documentElement.clientWidth <= 1440){
                
                nextReviews.removeEventListener('click', listenerNextReviews);
                prevReviews.removeEventListener('click', listenerPrevReviews);
                
                nextReviews.addEventListener('click', nextReviews2);
                prevReviews.addEventListener('click', prevReviews2);
                
            }
            if(document.documentElement.clientWidth <= 815){
            
                nextReviews.removeEventListener('click', nextReviews2);
                prevReviews.removeEventListener('click', prevReviews2);
            
                nextReviews.addEventListener('click', () => { 
                    if(offsetReviews == (+widthReviews.slice(0, widthReviews.length - 2) * (slidesReviews.length - 1))) { //650    px
                        offsetReviews = 0;
                    }else {
                        console.log(widthReviews);
                        offsetReviews += +widthReviews.slice(0, widthReviews.length - 2) ; 
                    }
                    
                    shiftSlideReviews();
                    
                    if (slideIndexReviews == slidesReviews.length) {
                        slideIndexReviews = 1;
                    } else {
                        slideIndexReviews++;
                    }
                    
                    changeCurrent();
            
                });
                
                prevReviews.addEventListener('click', () => {
                    if (offsetReviews == 0) {
                        offsetReviews = +widthReviews.slice(0, widthReviews.length - 2) * (slidesReviews.length - 1);
                    } else {
                        
                        offsetReviews -= (+widthReviews.slice(0, widthReviews.length - 2));
                    }
                    
                    shiftSlideReviews();
                    
                    if (slideIndexReviews == 1) {
                        slideIndexReviews = slidesReviews.length;
                    } else {
                        slideIndexReviews--;
                    }
                
                    changeCurrent();
                });
            }
        
        }
    
    
    
    // --------------Слайд instructors--------------
    
    
    function sliderInstructors(){
        const  slidesInstructors = document.querySelectorAll('.instructors-list-item'),
        nextInstructors = document.querySelector('.offer__slider-next_instructors'),
        prevInstructors = document.querySelector('.offer__slider-prev_instructors'),
        currentInstructors = document.querySelectorAll('.instructors .current'),
        sliderWrapperInstructors = document.querySelector('.instructors-container'),
        widthInstructors = window.getComputedStyle(sliderWrapperInstructors).width,
        slidesFiledInstructors = document.querySelector('.offer__slider-inner-instructors');
        
        
        let     slideIndexInstructors = 1,
            offsetInstructors = 0;    
        
        
        slidesFiledInstructors.style.width = 100 * slidesInstructors.length + '%';
        slidesFiledInstructors.style.display = 'flex';
        slidesFiledInstructors.style.transition = '0.5s all';
        sliderWrapperInstructors.style.overflow = 'hidden';
        
        
        currentInstructors.forEach(item => {
            item.classList.remove('active-current');
        });
        
        function changeCurrent(){
            currentInstructors.forEach((num, a) => {
                num.classList.remove('active-current');
                if(slideIndexInstructors - 1 === a){
                    showCurrentInstructors(a);
                }
            });
        }
        
        function showCurrentInstructors(i = 0){
            currentInstructors[i].classList.add('active-current');
        }
        showCurrentInstructors();
        
        function addSlideInstructors(src){
            const parentInstructors = document.querySelector('.offer__slider-inner-instructors');
            const cloneFirstSlideInstructors = document.createElement('div');
            
            cloneFirstSlideInstructors.classList.add('instructors-list-item');
            cloneFirstSlideInstructors.innerHTML = `
                <div class="instructors-list-item-img">
                    <img src= ${src} alt="instructors">
                </div>
                <div class="instructors-list-item-text">
                    <div class="instructors-list-item-name">
                        Иванов Иван
                    </div>
                    <div class="instructors-list-item-rank">
                        Летная школа
                    </div>
                </div>
            `;
            parentInstructors.append(cloneFirstSlideInstructors);
        
        }
        function listenerNextInstructors(){
            if (offsetInstructors == (+widthInstructors.slice(0, widthInstructors.length - 2)/2  * (slidesInstructors.length - 1))) { //650    px
                offsetInstructors = 0;
            } else {
                offsetInstructors += (+widthInstructors.slice(0, widthInstructors.length - 2)/2); 
            }
            
            slidesFiledInstructors.style.transform = `translateX(-${offsetInstructors}px)`;
            
            if (slideIndexInstructors == slidesInstructors.length) {
                slideIndexInstructors = 1;
            } else {
                slideIndexInstructors++;
            }

            changeCurrent();
            
        }
        
        function listenerPrevInstructors(){
            if (offsetInstructors == 0) {
                offsetInstructors = +widthInstructors.slice(0, widthInstructors.length - 2)/2 * (slidesInstructors.length - 1);
            } else {
                offsetInstructors -= (+widthInstructors.slice(0, widthInstructors.length - 2)/2);
            }
            
            slidesFiledInstructors.style.transform = `translateX(-${offsetInstructors}px)`;
            
            if (slideIndexInstructors == 1) {
                slideIndexInstructors = slidesInstructors.length;
            } else {
                slideIndexInstructors--;
            }
        
            changeCurrent();
        }
        
        if(document.documentElement.clientWidth <= 1440){
            addSlideInstructors("./img/instructors/instructor-1.png");
            
            nextInstructors.addEventListener('click', listenerNextInstructors);
            prevInstructors.addEventListener('click', listenerPrevInstructors);
        }
        
        if(document.documentElement.clientWidth <= 815){

            nextInstructors.removeEventListener('click', listenerNextInstructors);
            prevInstructors.removeEventListener('click', listenerPrevInstructors);
            
            
            nextInstructors.addEventListener('click', () => { 
                if (offsetInstructors == (+widthInstructors.slice(0, widthInstructors.length - 2)  * (slidesInstructors.length - 1))) { //650    px
                    offsetInstructors = 0;
                } else {
                    offsetInstructors += (+widthInstructors.slice(0, widthInstructors.length - 2)); 
                }
                
                slidesFiledInstructors.style.transform = `translateX(-${offsetInstructors}px)`;
                
                if (slideIndexInstructors == slidesInstructors.length) {
                    slideIndexInstructors = 1;
                } else {
                    slideIndexInstructors++;
                }
                
                changeCurrent();
                
            });
            
            prevInstructors.addEventListener('click', () => {
                if (offsetInstructors == 0) {
                    offsetInstructors = +widthInstructors.slice(0, widthInstructors.length - 2) * (slidesInstructors.length - 1);
                } else {
                    offsetInstructors -= (+widthInstructors.slice(0, widthInstructors.length - 2));
                }
                
                slidesFiledInstructors.style.transform = `translateX(-${offsetInstructors}px)`;
                
                if (slideIndexInstructors == 1) {
                    slideIndexInstructors = slidesInstructors.length;
                } else {
                    slideIndexInstructors--;
                }
                
                changeCurrent();
            });
        }
        
    }
    
    
    
    
    // --------------Слайд diferense--------------
    
    
    function sliderDiferend(){
        const   slidesDiference = document.querySelectorAll('.diferent-list-item'),
        nextDiference = document.querySelector('.offer__slider_next_diference'),
        prevDiference = document.querySelector('.offer__slider_prev_diference'),
        sliderWrapperDiference = document.querySelector('.diference__wrapper_list'),
        widthDiference = window.getComputedStyle(sliderWrapperDiference).width,
        slidesFiledDiference = document.querySelector('.diferent-list');
        
        
        let     slideIndexDiference = 1,
        offsetDiference = 0;    
        
        if(document.documentElement.clientWidth <= 815){
        
            slidesFiledDiference.style.width = 100 * slidesDiference.length + '%';
            slidesFiledDiference.style.display = 'flex';
            slidesFiledDiference.style.transition = '0.5s all';
            sliderWrapperDiference.style.overflow = 'hidden';
            
            function listenerNextDiference(){
                if (offsetDiference == (+widthDiference.slice(0, widthDiference.length - 2)  * (slidesDiference.length - 1))) { //650    px
                    offsetDiference = 0;
                } else {
                    offsetDiference += (+widthDiference.slice(0, widthDiference.length - 2)); 
                }
                
                slidesFiledDiference.style.transform = `translateX(-${offsetDiference}px)`;
                
                if (slideIndexDiference == slidesDiference.length) {
                    slideIndexDiference = 1;
                } else {
                    slideIndexDiference++;
                }
            }
        
            nextDiference.addEventListener('click', listenerNextDiference);
        
        
        
            function listenerPrevDiference(){
                if (offsetDiference == 0) {
                    offsetDiference = +widthDiference.slice(0, widthDiference.length - 2) * (slidesDiference.length - 1);
                } else {
                    offsetDiference -= (+widthDiference.slice(0, widthDiference.length - 2));
                }
                
                slidesFiledDiference.style.transform = `translateX(-${offsetDiference}px)`;
                
                if (slideIndexDiference == 1) {
                    slideIndexDiference = slidesDiference.length;
                } else {
                    slideIndexDiference--;
                }
            }
            
            prevDiference.addEventListener('click', listenerPrevDiference);
        }
    
    }

    sliderCircle();
    sliderReviews(); 
    sliderInstructors();
    sliderDiferend();
}
export default sliders;
