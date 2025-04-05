const form=document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const results=document.querySelector("#results");

    

    if(height=='' || height<0 ||isNaN(height)){
        results.innerHTML='Please give a valid height';
    }
    else if(weight=='' || weight<0 ||isNaN(weight)){
        results.innerHTML='Please give a valid weight';
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        const category = (bmi) => {
            if (bmi < 18.6) return "Under-Weight";
            else if (bmi > 24.9) return "Over-Weight";
            else return "Normal-Range";
        };
        
        results.innerHTML=`Your BMI is ${bmi} & you fall in category of type ${category(bmi)}`;
        
    }
})