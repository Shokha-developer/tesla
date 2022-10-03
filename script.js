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
let door = document.querySelector(".door")
let salonImg = document.querySelector(".tesla_img")
let wheels = document.querySelector(".wheels")
let h1 = document.querySelector(".main h1")
let dNone = document.querySelector(".dNone")
let colorbtns = document.querySelectorAll(".color")
let clear = document.querySelector(".clear")
let tesla_js = document.querySelector(".tesla_js")

let colors = {
    black: "./assets/images/image 10.png",
    white: "./assets/images/image 9w.png",
    capuccino: "./assets/images/image 8c.png",
}





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

    door.onclick = () => {

        open()
    }





}

reload()
function open() {
    salonImg.classList.add("active")
    wheels.innerHTML = ""
    h1.innerHTML = "Intire View"
    dNone.style.display = "block"
    clear.style.display = "none"

    let ul = document.createElement("ul")
    let li = document.createElement("li")
    let spanH = document.createElement("span")
    let label = document.createElement("label")
    let inp = document.createElement("input")
    let spanSl = document.createElement("span")

    label.classList.add("switch")
    inp.classList.add("checkbox")
    spanSl.classList.add("slider", "round")


    label.append(inp, spanSl)
    li.append(spanH, label)
    ul.append(dNone, li)
    tesla_js.append(ul)


    ul.classList.add("add")
    spanH.innerHTML = "Вид автомобиля"

    console.log(clear);

    colorbtns.forEach(btn => {

        btn.onclick = () => {
            let key = btn.getAttribute("data-color")
            salonImg.style.backgroundImage = `url("${colors[key]}")`

        }
    });

}
