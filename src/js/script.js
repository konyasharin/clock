$(document).ready(function(){
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false
    });
    
    document.querySelector('.prev').addEventListener('click', function(){
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function(){
        slider.goTo('next');
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };
    toggleSlide('.catalog-item__link')
    toggleSlide('.catalog-item__back')


    const btns = document.querySelectorAll('.button'),
          overflow = document.querySelector('.overflow'),
          modalConsultation = document.querySelector('.modal__consultation'),
          modalBuy = document.querySelector('.modal__buy'),
          modalClose = document.querySelectorAll('.modal__close'),
          forms = document.querySelectorAll('form'),
          modalThanks = document.querySelector('.modal__thanks');

    btns.forEach(btn => {
        if(btn.textContent.toUpperCase() === 'ЗАКАЗАТЬ ЗВОНОК' || (btn.textContent.toUpperCase() === 'ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ' && !btn.classList.contains('button_submit'))){
            btn.addEventListener('click', () => {
                modalConsultation.style.display = 'block';
                overflow.style.display = 'block';
            })
        }else if(btn.textContent.toUpperCase() == 'КУПИТЬ'){
            btn.addEventListener('click', () => {
                modalBuy.style.display = 'block';
                overflow.style.display = 'block';
            })
        }
    })

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            modalBuy.style.display = 'none';
            modalConsultation.style.display = 'none';
            modalThanks.style.display = 'block'
            overflow.style.display = 'block';
            form.reset();
        })
    })
    modalClose.forEach(close => {
        close.addEventListener('click', () => {
            modalConsultation.style.display = 'none';
            overflow.style.display = 'none';
            modalBuy.style.display = 'none';
            modalThanks.style.display = 'none'
        })
    })
});