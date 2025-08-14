var typed=new Typed(".type",{
    strings:["","Web Developer","Web Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length;
allSection=document.querySelectorAll("section"),
totalSection=allSection.length;
for(let i=0;i<totalNavList;i++){
    const a =navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}

function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

const hireBtns = document.querySelectorAll(".hire-me, .hire");
hireBtns.forEach(btn=>{
    btn.addEventListener("click", function() {
    const target = document.querySelector("#contact");
    allSection.forEach(sec => sec.classList.remove("active"));
    target.classList.add("active");
    target.scrollIntoView({ behavior: "smooth" });
}); 
});
