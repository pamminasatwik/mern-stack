const dl=document.querySelectorAll(".drop-list select"),
fromC=document.querySelector(".from select"),
toC=document.querySelector(".to select"),
getButton=document.querySelector("form button"); 


for (let i=0;i<dl.length;i++){
    for( cc in country_list){
        let selected;
        //selecting usd as default from currency and  npr as to currency 
          if(i==0){
              selected = cc == "INR" ? "selected" : "";
          }
        else if(i==1){
            selected = cc=="USD"?"selected":"";
        }
        // console.log(cc);
        // creting ot passing currency by text and value
let ot= `<option value ="${cc}" ${selected}>${cc}</option>`;
// inserting ot in select tag
dl[i].insertAdjacentHTML("beforeend",ot);
        
    }
    dl[i].addEventListener("change",e=>{
             loadFlag(e.target);
    });
}

function loadFlag(eleme){
     for(i in country_list){
        if(i==eleme.value){
             // if code of cuntry lst is equal to option value 
             let imageTag=eleme.parentElement.querySelector("img");
         imageTag.src  = `https://flagcdn.com/48x36/${country_list[i].toLowerCase()}.png`;
            
        }
     }
}
https://flagcdn.com/48x36/${country_list[code].to

window.addEventListener("load", () => {
    getExchangerate();
  });
    getButton.addEventListener("click", e => {
      // Your event listener function here
      e.preventDefault();
      getExchangerate();
    });

    const ei=document.querySelector(".drop-list .icon");
ei.addEventListener("click",()=>{
        let cli =fromC.value;
        fromC.value=toC.value;
          toC.value=cli;                               // For swapping purpose india to us or us to india      
        loadFlag(fromC);
        loadFlag(toC);
        getExchangerate();
});




  function getExchangerate(){
      const Amount = document.querySelector(".Amount input");
      eRt=document.querySelector(".exchange-rate");
      // if user doesnt enter any valuw we put 1 as default 
      let av=Amount.value;
      if(av =="" || av =="0"){
        Amount.value="1";
        av=1;
      }
       eRt.innerText="And the Exchange rate is ...";




let url=`https://v6.exchangerate-api.com/v6/bff51a434b734e7aed4005b8/latest/${fromC.value}`;
    // fetch(url).then(response=>console.log( response.json()));
// fetching api resposne and returning it with parsing into js obj and recieving the object      
     fetch(url).then(response=>response.json()).then(result =>{
            let exchangerate=result.conversion_rates[toC.value]
            //    console.log(exchangerate);
            let totaler=(av * exchangerate).toFixed(2);
            // console.log(totaler);

      eRt.innerText=`${av}${fromC.value}=${totaler}${toC.value}`  ;   

      }).catch(()=>{
        eRt.innerText="ERROR !!";
      })


  }
  
