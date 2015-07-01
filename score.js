document.querySelector("#submit").addEventListener("click",function(event) {
    var score = 0;
    document.getElementById("sub_score").value = score(score);
    event.preventDefault();
})

function checkbox(classname) {
    var options = document.getElementsByClassName(classname);
    var answer = "";

    for (var i = 0; i < options.length; i++) {
        if(options[i].checked === true){
            i === 0 ? answer+="A" : 0;
            i === 1 ? answer+="B" : 0;
            i === 2 ? answer+="C" : 0;
            i === 3 ? answer+="D" : 0;
        }
    }
    return answer;
}

function radio(name) {
    var options = document.getElementsByName(name);

    for (var i = 0; i < options.length; i++) {
        if(options[i].checked === true){
            return true;
        }
    if(options[i].checked === false){
            return false;
        }
    }
}

function score(score) {


    document.getElementById("umlzhongwen").value === "统一建模语言" ? score += 1 : 0;
    document.getElementById("objtezheng").value === "封装性，继承性，多态性" ? score += 1 : 0;
    document.getElementById("danxuan1").value === "B" ? score += 2 : 0;
    document.getElementById("danxuan2").value === "A" ? score += 2 : 0;
    checkbox("check_box1") === "ABD" ? score += 2 : 0;
    checkbox("check_box2") === "ABC" ? score += 2 : 0;
    radio("yongli") === false ? score += 2 : 0;
    radio("zhuangtai") === true ? score += 2 : 0;
    document.getElementsByName("textArea")[0].value === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式，可以是物理实体；可以是某种图形，或者是一种数学表达式。" ? score += 5 : 0;
    return score;
}
