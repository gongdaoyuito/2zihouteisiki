let s = 20

document.getElementById("keisann").onclick = function keisann(){
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("c")
    a = a.value
    b = b.value
    c = c.value
    let d = Number(b) * Number(b) - 4 * Number(a) * Number(c)
    if (d < 0) {
        document.getElementById("kotae").innerText = "実数解はありません。"
    }
    else{
        let s1 = -1 * (-Number(b) + Math.sqrt(d)) / (2 * Number(a))
        let s2 = -1 * (-Number(b) - Math.sqrt(d)) / (2 * Number(a))
        if (s1 == s2) {
            document.getElementById("kotae").innerText = String(s1) + "(重解)"
        }
        else{
            document.getElementById("kotae").innerText = String(s1) + "," + String(s2)
        }
        
    }
}
