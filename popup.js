var popoverlay=document.querySelector(".overlay")
var poppop=document.querySelector(".pop")
var popaddbut=document.getElementById("addbut")

popaddbut.addEventListener("click",function(){
   popoverlay.style.display="block"
   poppop.style.display="block"      
   })
var cancelpop=document.getElementById("cancelbook")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
   popoverlay.style.display="none"
   poppop.style.display="none"
})

var container=document.querySelector('.container')
var inadd=document.getElementById("addbook")
var inbooktitle=document.getElementById('booktitle')
var inbookauthor=document.getElementById('bookauthor')
var inshortdes=document.getElementById('shortdes')

inadd.addEventListener("click",function(event){
   event.preventDefault()
    popoverlay.style.display="none"
   poppop.style.display="none"


   var div=document.createElement("div")
   div.setAttribute("class","containerbook")
   div.innerHTML=`<h2>${inbooktitle.value}</h2>
                <h4>${inbookauthor.value}</h4>
                <p>${inshortdes.value}</p>
                <button>Delete</button>`
   container.append(div)
   
}
   
)

function del(event){
   event.target.parentElement.remove()
}

  

