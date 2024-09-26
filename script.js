function inputValueChange()
{
    // alert("ok")
    document.getElementById("resultDiv").classList.replace("resultDiv-block","resultDiv-none")    
}

function checkResut(){
    //event.preventDefault()
    let mark=document.getElementById(`mark-input`).value
    let grade=''
    let result='Passed'
    if(mark>=90)
        grade="A+"
    else if(mark>=80)
        grade="A"
    else if(mark>=70)
        grade="B+"
    else if(mark>=60)
        grade="B"
    else if(mark>=50)
        grade="C+"
    else if(mark>=70)
        grade="B+"
    else if(mark>=60)
        grade="B"
    else if(mark>=50)
        grade="C+"
    else if(mark>=40)
        grade="C"
    else if(mark>=30)
        grade="D+"
    else if(mark>=20)
    {
        grade="D"
        result='Failed'
    }
    else if(mark<20)
    {
        grade="E"
        result='Failed'
    }
    if(result=="Passed")
    {
        document.getElementById("result").classList.remove("fail")
        document.getElementById("result").classList.add("pass")    
    }
    else
    {
        document.getElementById("result").classList.add("fail")    
        document.getElementById("result").classList.remove("pass")
    }
    document.getElementById("grade").innerText=`Grade: ${grade}`
    document.getElementById("result").innerText=`Result: ${result}`
    document.getElementById("resultDiv").classList.replace("resultDiv-none","resultDiv-block")    

    return false
}

// $("#mark-form").validate({
//     rules: {
//     markInput: {
//         required: true,
//         range: [0, 100]
//       }
//     },
//     messages:{

//     }
//   });

  $(document).ready(function(event) {
    //debugger
    $('#mark-form').validate({
        rules: {
            markInput: {
                required: true,
                range: [0, 100]
              }
            },
        
        submitHandler: function(form) {
            // If validation is successful, call your JavaScript function here
            checkResut();
        },
        invalidHandler: function(event, validator) {
            document.getElementById("resultDiv").classList.replace("resultDiv-block","resultDiv-none")
            
                        
        }
    })})
