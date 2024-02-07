const picture1 = document.querySelectorAll('.pic11');
window.addEventListener('load', pics1);

function pics1(){
    const triggerBottom = window.innerHeight / 3 * 2;

    picture1.forEach(pictu => {
        const pictuTop = pictu.getBoundingClientRect().top;

        if(pictuTop < triggerBottom){
            pictu.classList.add('picture1');
        }
        else{
            pictu.classList.remove('picture1');
        }
    })
}


const paper = document.querySelectorAll('.about-paper')
window.addEventListener('scroll', papel)

function papel(){
    const triggerBottom = window.innerHeight / 3 * 2;

    paper.forEach(papers => {
        const papersTop = papers.getBoundingClientRect().top;

        if(papersTop < triggerBottom){
            papers.classList.add('papel')
        }
        else{
            papers.classList.remove('papel')
        }
    })

}

const image1 = document.querySelectorAll('.image-cover')
window.addEventListener('scroll', imahe)

function imahe(){
    const triggerBottom = window.innerHeight / 3 * 2;

    image1.forEach(imahe => {
        const imaheTop = imahe.getBoundingClientRect().top;

        if(imaheTop < triggerBottom){
            imahe.classList.add('imahe1')
        }
        else{
            imahe.classList.remove('imahe1')
        }
    })
}
