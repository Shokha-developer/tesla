let form = document.forms.fr
let km = document.querySelector(".km")
let prc = document.querySelector(".prc")
let kmH = document.querySelector(".kmH")
let upKm = document.querySelector(".km_up")
let dwKm = document.querySelector(".km_down")
let tmp = document.querySelector(".tmp")
let upTmp = document.querySelector(".temp_up")
let dwTmp = document.querySelector(".temp_down")
let whUp = document.querySelector(".wh_up")
let whDw = document.querySelector(".wh_down")
let wh = document.querySelector(".wh")

let kmH1 = 60
let km1 = 750
let tmp1 = 20 



form.onsubmit = (e) => {
    e.preventDefault()
}

function reload() {

    upKm.onclick = () => {
        if (kmH1 >= 60 && kmH1 < 240) {
            kmH1 = kmH1 + 30
            kmH.innerHTML = `${kmH1} км/ч`
            km1 = km1 - 25
            km.innerHTML = `${km1} KM` 
        }
    }
    dwKm.onclick = () => {
        if (kmH1 > 60 && kmH1 <= 240) {
            kmH1 = kmH1 - 30
            kmH.innerHTML = `${kmH1} км/ч`
            km1 = km1 + 25
            km.innerHTML = `${km1} KM` 
        }
    }
    upTmp.onclick = () => {
        if (tmp1 >= 20 && tmp1 < 45) {
            tmp1 = tmp1 + 5
            km1 = km1 + 5
            tmp.innerHTML = `${tmp1} °`
            km.innerHTML = `${km1} KM` 
            
        }
    }
    dwTmp.onclick = () => {
        if (tmp1 > 20 && tmp1 <= 45) {
            tmp1 = tmp1 - 5
            km1 = km1 - 5
            tmp.innerHTML = `${tmp1} °`
            km.innerHTML = `${km1} KM` 
            
        }
    }
    whUp.onclick = () => {
       if (wh.innerHTML = 19) {
        wh.innerHTML++
        prc.innerHTML = "$94,990"
       }
    }
    whDw.onclick = () => {
        if (wh.innerHTML = 20) {
            wh.innerHTML--
            prc.innerHTML = "$89,990"
           }
    }



}

reload()



