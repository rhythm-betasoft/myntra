$(document).ready(function () {
    
    const input = $("#phone-input")[0];
    const iti = window.intlTelInput(input, {
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.js",
    });

    $("#btn1").click(function (event) {
        event.preventDefault();

        const isValidNumber = iti.isValidNumber();
        const fullPhoneNumber = iti.getNumber();

        let isValid = true;

        if (!isValidNumber) {
            isValid = false;
            $(".missing-phone").text("Please enter a valid mobile number.").css("color", "red");
        } else {
            $(".missing-phone").text("");
        }

        if (!$("#exampleCheck1").prop("checked")) {
            $("#tick").text("You must Accept all the terms").css("color", "red");
            isValid = false;
        } else {
            $("#tick").text("");
        }

        if (isValid) {
            $("#show").removeClass("d-none").hide().slideDown("slow").css("color", "pink");
            $(".aaaaa").text("Mobile Number: " + fullPhoneNumber);           
        }


    });
});
