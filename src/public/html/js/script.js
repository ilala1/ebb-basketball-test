window.onload = function () {
        var inputs = document.getElementsByClassName("validate");
        if(inputs){
            for(var i=0; i<inputs.length; i++){
                inputs[i].addEventListener("change",validateInput);
                inputs[i].addEventListener("keyup",validateInput);
            }
        }
        var form = document.getElementById("myform");
        if(form){
            form.addEventListener("submit",validateForm,false);
        }
    };

    function validateInput(){
        if (this.value === "") {
            this.style.cssText = "border-width:1px;border-color:red;border-style:solid;border-radius:3px;";
        } else {
            this.style.cssText = "border-width:1px;border-color:limegreen;border-style:solid;border-radius:3px;";
        }
    }

    function validateForm(e){
        var inputs = document.getElementsByClassName("validate");
        var hasEmpty = false;
        for(var i=0; i<inputs.length; i++){
            validateInput.call(inputs[i]);
            if(inputs[i].value==="") hasEmpty = true;
        }
        if(hasEmpty){
            alert("Don't forget to fill all the fields!!");
            e.preventDefault();
        } else {
            alert("Thank you for signing up!!");
        }
    }
