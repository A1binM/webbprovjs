var last = ""

function bgcolor(){
    document.querySelector("body").style.backgroundColor = "blue"
}

function gt(){
    document.getElementById("demo").innerHTML = "Be the best version of you!"
}

function tim(){
    var dag = Date()
    document.getElementById("time").innerHTML = dag
}

function cgpic(){

    var t1 = document.getElementById("pic").src

    if(t1 == "http://127.0.0.1:5501/dice-1.png"){

        document.getElementById("pic").src = "dice-6.png"
        last = document.getElementById("pic").src
    }
    else if (t1 == "http://127.0.0.1:5501/dice-6.png")
        document.getElementById("pic").src = "dice-1.png"
        last = document.getElementById("pic").src
    
}

function hidepic(){


    document.getElementById("pic").style.display = "none"


}

function showpic(){
    document.getElementById("pic").style.display = last
}