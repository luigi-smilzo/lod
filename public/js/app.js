const infoBox = document.querySelector('.Container');
const cta = document.querySelector('.Cta');

gsap.from( infoBox, {
    x: 400,
    duration: .5,
    ease: 'linear',
    opacity: 0
})

cta.onclick = () => {
    gsap.to( window, {
        duration: .5,
        scrollTo: { y:'#Latest', offsetY: -10},
        ease: 'power1'
    })
}