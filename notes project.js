const input=document.getElementById("input");
const listcont=document.getElementById("listcont");
function addtask(){
    if(input.value ===''){
        alert("You must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    store();
}
listcont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        store();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        store();
    }
},false);
function store(){
    localStorage.setItem("daa",listcont.innerHTML);
}
function display(){
    listcont.innerHTML=localStorage.getItem("daa");
}
display();