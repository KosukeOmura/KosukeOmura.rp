//マウスオーバーイベント(Instagram部分)

// document.getElementById('DomcontentLoaded',function() {s
//     document.querySelectorAll('.instgram_box').addEventListener('mou', function(){
//         this.classList.toggle('active');
//         document.querySelectorAll('.instagram_filter').classList.toggle('active');
//     })
// })



ScrollReveal().reveal('.instagram_container', {
    delay: 100,
    duration: 2000,
    opacity:0,
    distance: '20em',
    origin: 'left',
    reset: false,
    mobile: true,
    desktop: true,
});
