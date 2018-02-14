bigbasket = function(apis){
	

	var couponArray = [];
	var redeem_url = "https://www.bigbasket.com/order/apply-evoucher/";
	var csrft = $("input[name=csrfmiddlewaretoken]").val();
	var remove_url = "https://www.bigbasket.com/co/remove-evoucher/";

	if (document.getElementsByClassName("btn btn-default e-voucher-btn")[0].value == "Remove")
	{
		release_function();
	}

	release_function = function(){
			$.ajax({
	        	type: "POST",
	       		headers: headers,
	        	url: remove_url,
	        	async: false,
	        	success: success,
	        	beforeSend: beforeSend
	    	});
	    	function success(A,B,C) {
				console.log("success");
			}
			function beforeSend(C, A) {
                    C.setRequestHeader("X-CSRFToken", csrft)
                  }
			
		}


	for (let code of apis.bigbasket){
		
		
		var data = "voucher_code="+code+"&paymentmethod=cod";
		var headers = {"Content-Type" : "application/json;charset=UTF-8"};


		$.ajax({
	        type: "POST",
	       	headers: headers,
	        url: redeem_url,
            data: data+code,
	        async: false,
	        success: success,
	        beforeSend: beforeSend
	    });
	    function success(A,B,C) {
	    	console.log(A);
			
	    	if (isNaN(parseFloat(A.result))){
	    		}
	    	else{
	    		couponArray.push({ couponCode: code, discount: parseFloat(A.result)});
	    		release_function();
	    	}                 
	    }
	    function beforeSend(C, A) {
                    C.setRequestHeader("X-CSRFToken", csrft)
                  }
	}  


	if (couponArray.length == 0){
		alert("No coupons for you")
		return false
	}

console.log(couponArray);
let max = findMax(couponArray);

alert("Best Coupon code for you. \n\n"+max.couponCode);
applycoup(max.couponCode);

function applycoup(coupon){

if ($(".input-group-btn input[value=Remove]").is(":visible")) {
              $(".input-group-btn input[value=Remove]").trigger("click");};

setTimeout(function() {
$('div.ge-top p').eq(0).hide(); $(".payment-e-voucher-section .e-voucher-btn").trigger("click"); setTimeout(function() {
          sembu("$('.payment-e-voucher-section #input-voucher').val(" + JSON.stringify(coupon) + ").trigger('change').trigger('blur').trigger('blur').trigger('mouseout')");
          $(".payment-e-voucher-section .e-voucher-btn").trigger("click");

        }, 2000)}, 2000)

}

	
}