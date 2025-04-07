let listClass = [
    {
      current: 'img-1',
      next: 'img-3',
      bg: '#fbdad5'
    },
    {
      current: 'img-2',
      next: 'img-1',
      bg: '#dfdfdf'
    },
    {
      current: 'img-3',
      next: 'img-2',
      bg: '#94bfc2'
    }
  ]
  

  const handelChangeSlide = () => {
    let images = document.querySelectorAll('.img-slider')
    for (let img of images) {
        for (let j in listClass) {
        if (img.classList.contains(listClass[j].current)) {
          img.classList.replace(listClass[j].current, listClass[j].next)
          document.getElementById('circle').style.background = listClass[j].bg
          break
        }
      }
    }
  }
  setInterval(() => {
    handelChangeSlide()
  }, 2000)


let text =
  'نظارت بر سلامت: ردیاب تناسب اندام Imzuc می تواند به طور خودکار ضربان قلب شما را در زمان واقعی نظارت کند و به صورت دستی اشباع اکسیژن خون را اندازه گیری کند. ردیاب فعالیت همچنین وضعیت خواب شما را ردیابی می کند و کیفیت خواب را تجزیه و تحلیل می کند تا عادت خواب بهتری داشته باشد. در طول ورزش، ردیاب تناسب اندام به طور خودکار مراحل روزانه، مسافت، کالری سوزانده شده، دقیقه های فعال را ثبت می کند'
let paragraph = document.getElementById('paragraph')
let i = 0
const typeEffect = () => {
  if (i < text.length) {
    paragraph.textContent += text[i]
    i++ ;
    setTimeout(typeEffect, 10)
  }
}

window.onload = typeEffect ;