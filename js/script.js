const btns = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const close = document.querySelector('[data-close]')

btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show')
    }
});
close.onclick = () => {
    modal.classList.remove('show')
}



const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
let total = document.querySelector('#total')
let slideIndex = 1




function slidesShow(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => {
        slide.classList.add('hide');
    });

    slides[slideIndex - 1].classList.remove('hide');

    if (slideIndex > 10) {
        current.innerHTML = slideIndex;
    } else {
        current.innerHTML = `0${slideIndex}`;
    }

    
}

slidesShow()

next.onclick = () => {
    slideIndex++
    // current.innerHTML = '0' + slideIndex
    slidesShow(slideIndex)

}

prev.onclick = () => {
    slideIndex--
    // current.innerHTML = slideIndex
    slidesShow(slideIndex)



}





const tabs = document.querySelectorAll('.tabcontent')
const tabs_btn = document.querySelectorAll('.tabheader__item')



function tabShow(idx) {
    tabs.forEach((tab) => tab.classList.add('hide', 'fade'))
    tabs[idx].classList.remove('hide')
}

tabShow(0)

tabs_btn.forEach((btn, idx) => {
    btn.onclick = () => {
        tabShow(idx)
        document.querySelector('.tabheader__item_active').classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
    }

})



let deadline = '2024-06-16 00:00'
let deadlineNewYear = '2024-12-31 23:59'

const canvas = document.querySelector('#confetti')



const jsConfetti = new JSConfetti()


function getRemainigTime(endTime) {
    const t = Date.parse(endTime) - Date.now(),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }


}




function setTimer(endTime, selector) {
    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        interval = setInterval(updateTimer, 1000)


    function updateTimer() {
        const t = getRemainigTime(endTime)

        if (t.t <= 0) {
            clearInterval(interval)
            days.innerHTML = '0'
            hours.innerHTML = '0'
            minutes.innerHTML = '0'
            seconds.innerHTML = '0'
            jsConfetti.addConfetti().then(() => jsConfetti.addConfetti())
            return
        }

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds



    }


}


setTimer(deadline, '.timer.one')
setTimer(deadlineNewYear, '.timer.two')





const gender_btns = document.querySelectorAll('#gender .calculating__choose-item')
const calculating__choose  = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const res_view = document.querySelector('#res_view')
const inputs = document.querySelectorAll('input')



const user_data = {
    gender: 'woman',
    act: 'small',
    
}


gender_btns.forEach(btn => {
    btn.onclick = () => {
        user_data.gender = btn.getAttribute('data-gender')
        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        // console.log(user_data);
    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
        }
})


calculating__choose.forEach(act => {
    act.onclick = () => {
        calculating__choose.forEach(el => el.classList.remove('calculating__choose-item_active'))
        act.classList.add('calculating__choose-item_active')
        const active = +act.getAttribute('data-act')
        let result = 0

        if (user_data.gender === 'woman' ) {
            result = 655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)
        } else {
            result = 66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_data.age)
        }
        

        res_view.innerHTML = Math.round(result * active)
    }
})





const header_linkOne = document.querySelector('#header_linkOne')
const header_linkTwo = document.querySelector('#header_linkTwo')



function scrollToBottom() {
    window.scrollTo(0,3400)
}

function scrollToBottom_Two(params) {
    window.scrollTo(0,1000)
}


header_linkTwo.onclick = () => {
    scrollToBottom_Two()
}
header_linkOne.onclick = () => {
    scrollToBottom()
}








