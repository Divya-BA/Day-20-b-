var container=document.createElement("container");
document.body.append(container);

var h1=document.createElement("h1");
h1.innerHTML="Different types of Breeds";
h1.setAttribute("class","head");
container.append(h1);

var res=fetch("https://dog.ceo/api/breed/hound/images");
res.then((data)=>data.json()).then((data1)=>//console.log(data1));
{
    for(var i=0;i<data1.message.length;i++)
    {
        var div1=document.createElement("div1");
        div1.innerHTML=`<div class="card" style="width: 18rem">
        <img src="${data1.message[i]}"  class="card-img-top" alt="...">
        
      </div>`;
        container.append(div1);

    }
})
