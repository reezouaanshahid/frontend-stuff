
let dataArray=[];
function cardAdd(){
    let name=document.getElementById('nameInput').value;
    let emailInput=document.getElementById('emailInput').value;
    let messageTextarea=document.getElementById('messageTextarea').value;

dataArray.push({
    name,
    email:emailInput,
    message:messageTextarea
})
let data=``
for (let i = 0; i < dataArray.length; i++) {
    const item = dataArray[i];
    data+=`<div class="card" style="width:400px; background: transparent;  color: #f0f0f0; margin-left:10px; margin-top: 20px; 
       border: 1px solid white";  >
    <img class="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" style="width:100%">
    
    <p>name: ${item.name}</p>
    <p>email: ${item.email}</p>
    <p>message: ${item.message}</p>
  
  </div>`
}
console.log(data);


   document.getElementById('card').innerHTML=data     
}