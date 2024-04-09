const form=document.querySelector("form");
const val=document.querySelector(".reset");
const search= document.querySelector(".submit");
const input= document.querySelector("#text1");
val.addEventListener("click",function clear(){
    console.log("clicked");    
    form.reset();
})
search.addEventListener("click",()=>{
    console.log("clicked search");
    console.log(input.value.toLowerCase());
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`)
    // .then(response=>console.log(response)) //SIMULTANEOUSLY WHOLE API CALL AND PERTICULAR JSON() CANT RUN
    .then(hello=>hello.json())
    .then(values=>{console.log(values);
        input.value=values.weight;
          
            })
    .catch(()=>{
                setTimeout(()=>{
                    form.reset();
                    window.alert("Is it a pikachu!! Are you kidding");},
                    1000
                )

});
})

        
window.addEventListener("keydown",(event)=>{
   

    if(event.defaultPrevented){
    return;}
switch (event.key){
    case "Enter":
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`)
    // .then(response=>console.log(response)) //SIMULTANEOUSLY WHOLE API CALL AND PERTICULAR JSON() CANT RUN
    .then(hello=>hello.json())
    .then(values=>input.value=values.weight)
    .catch(()=>{
        setTimeout(()=>{
            form.reset();
            window.alert("Is it a pikachu!! Are you kidding");},
            1000
        )

});  
    break;  
            }})
   

   
   



