function findAllUnorderedListElements() {
    const myNodelist = document.querySelectorAll(".social-media-links");
    return myNodelist;
}

function addWavyUnderline(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textDecorationStyle = "wavy";
    }
}

function addWavyUnderline(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.textDecoration = "wavy underline";
    }
}

function findAllUnorderedListElements() {
    const Unordered = document.querySelectorAll("#social ul > li");
    return Unordered;
    function prepareProjects(firstProject, secondProject, thirdProject) {
        let arr = [firstProject, secondProject, thirdProject];
        let output = "";
    }
}

for(let i= 0; i < arr.length; i++){
    let str = "";
    if(arr[i].length > 20){
    str += "<p>"+ arr[i] +"</p>";
    }else{
    str += "<span>"+ arr[i] +"</span>";
    }
    str += "<br>";
    output += str;
    }
    return output;
