let keys = document.querySelectorAll("#keyboard>div")

for(let i=0; i<keys.length; i++){

    keys[i].addEventListener("click" , mycal)

}

// console.log(keys)

let bag = "";

function mycal(e){

    let targetnumber = e.target.innerText

    // console.log(bag)
    // console.log(eval(bag))

    if(targetnumber == "="){
        document.getElementById("display").innerText = eval(bag)

    }
    else if(targetnumber == "c"){
        document.getElementById("display").innerText = ""

    }
    else {
        bag = bag + targetnumber
        document.getElementById("display").innerText = bag

    }













}