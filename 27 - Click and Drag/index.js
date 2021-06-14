// STEP1: 選擇元素
const slider = document.querySelector('.items')

// STEP2: 監控滑鼠事件，mousedwon. mouseup, mousemove, mouseleave
// STEP3: 加上 isDown 來判斷滑鼠是不是點擊下去的狀況
// STEP4: 加上 active class

// STEP5: 加上拖拉效果

let isDown = false
let startX
let scrollLeft

slider.addEventListener('mouseleave', function(e) {
    isDown = false
    slider.classList.remove('active')
})

// callback function
slider.addEventListener('mousedown', function(e) {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft  
})

slider.addEventListener('mouseup', function(e) {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', function(e) {
    if (isDown === false) { return }
    let x = e.pageX - slider.offsetLeft
    let walk = x - startX
    console.log('walk', walk)
    slider.scrollLeft = scrollLeft - walk
})

