document.addEventListener('DOMContentLoaded',()=>{



    const images = [
        { url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', caption: 'Nature' },
        { url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', caption: 'City' },
        { url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', caption: 'Animals' },
        { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', caption: 'Technology' },
        { url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', caption: 'Food' }
    ];




    const slider = document.querySelector('.slider');
    const loadingWindowsContainer = document.querySelector('.loading-windows');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');


    let currentSlide = 0;
    let autoSlideInterval;
    let loadingIntervals = [];




    const initSlider = () =>{


        slider.innerHTML = '';
        loadingWindowsContainer.innerHTML = '';

        clearInterval(autoSlideInterval);


        loadingIntervals.forEach(interval => clearInterval(interval));

        loadingIntervals = [];



        images.forEach((image,index) =>{
            const slide = document.createElement('div');
            slide.className = 'slide';


            const img = document.createElement('img');
            img.src = image.url;
            img.alt = image.caption;

            const caption = document.createElement('div');
            caption.className = 'caption';
            caption.textContent = image.caption;

            


            slide.appendChild(img);
            slide.appendChild(caption)
            slider.appendChild(slide);




            const loadingWindow = document.createElement('div');



            loadingWindow.className = 'loading-window';



            const loadingProgress = document.createElement('div');
            loadingProgress.className = 'loading-progress';


            loadingWindow.appendChild(loadingProgress);

            loadingWindowsContainer.appendChild(loadingWindow);

        });

        startAutoSlide();
    }

    const startAutoSlide = () =>{
        goToSlide(currentSlide);
        autoSlideInterval = setInterval(()=>{
            nextSlide();
        },5000)

    }

    const goToSlide = (slideIndex)=>{
        loadingIntervals.forEach(interval=>clearInterval(interval));

        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;


        const loadingWindows = document.querySelectorAll('.loading-progress');
        loadingWindows.forEach(window => {
            window.style.width = '0%';
            window.style.animation = 'none';
        });

        if(loadingWindows[currentSlide]){
            loadingWindows[currentSlide].style.animation = 'Load  5s forwards';

            const interval = setInterval(()=>{

            },100)

            loadingIntervals.push(interval);
        }

    }


    const nextSlide = ()=>{
        currentSlide = (currentSlide +1) % images.length;
        goToSlide(currentSlide);
    }

    const prevSlide = ()=>{
        currentSlide = (currentSlide -1 + images.length) % images.length;
        goToSlide(currentSlide);
    }


    nextBtn.addEventListener('click',()=>{
        nextSlide();
        resetAutoSlide();
    })

    prevBtn.addEventListener('click',()=>{
        prevSlide();
        resetAutoSlide();
    });


    const resetAutoSlide = ()=>{
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    initSlider();
})