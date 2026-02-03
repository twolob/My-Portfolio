const main_cursor = document.querySelector('#cursor');
const main_div = document.querySelector('.hero-section')

main_div.addEventListener('pointermove', (event)=>{
    const {clientX, clientY} = event;
    main_cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
});


let typing = new Typed(".typing-words",{
    strings: ["Web UI/UX Design", "Mobile App UI/UX Design", "Dashboard | Saas Design", "AI-Driven Solution"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
})