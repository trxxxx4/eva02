const turnOffRebuildSectonButton = document.querySelector('[data-turn="rebuild"]');
const turnOffNeonSectonButton = document.querySelector('[data-turn="neon"]');



const rebuildSection = document.querySelector('[data-section="rebuild"]');
const neonSection = document.querySelector('[data-section="neon"]');
const turnAway = (turningSect, turnedOffSect) =>{
    turningSect.removeAttribute('hidden__section');
    turnedOffSect.id = 'hidden__section';

}
turnOffRebuildSectonButton.addEventListener('click', function(){
    console.log('zxc');
    rebuildSection.id = 'hidden__section';
    neonSection.removeAttribute('id');
    neonSection.id ='img__on__left';
})


turnOffNeonSectonButton.addEventListener('click', function(){
    console.log('emp');
    neonSection.id = 'hidden__section';
    rebuildSection.removeAttribute('id');
    rebuildSection.id ='img__on__right';
})





console.log(turnOffRebuildSectonButton);
console.log(turnOffNeonSectonButton)

count = 0;
const toggleBtn = document.querySelector('.toggle__btn');
const toggleNav = document.querySelector('.toggle__nav');

const body = document.querySelector('main');
console.log(body);
const logo = document.querySelector('.logo__container');
const footer = document.querySelector('.footer__master__container');

toggleBtn.addEventListener('click', function(){
    count +=1;
    if (count%2 == 1){
        toggleNav.removeAttribute('id');
        toggleBtn.removeAttribute('id');

        toggleBtn.id ='toggle__rotated';
        toggleNav.id = 'toggle__nav__origin';
        body.id = 'set__blur';
        logo.id = 'set__blur';
        footer.id = 'set__blur';
        
    }
    if (count%2 == 0){
        toggleBtn.removeAttribute('id');
        toggleBtn.id ='toggle__origin';
        toggleNav.removeAttribute('id');
        toggleNav.id ='toggle__nav__closed';
        body.removeAttribute('id');
        logo.removeAttribute('id');
        footer.removeAttribute('id');
    }
})
console.log(toggleBtn)

