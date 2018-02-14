lifestyle = function(apis){

	var redeem_url = "https://www.lifestylestores.com/in/en/cart/applyVoucher";
	var release_url = "https://www.lifestylestores.com/in/en/cart/releaseVoucher";
	var couponArray = [];
	var headers = {"content-type":"application/x-www-form-urlencoded; charset=UTF-8"};

	release_function = function(code){
			$.ajax({
	        	type: "POST",
	       		headers: headers,
	        	url: release_url,
	        	data: "voucherCode="+code,
	        	async: false,
	        	success: success
	    	});
	    	function success(res) {
	    		console.log(res);

				}
			function error(){
				return false;
				}
		}


	for (let code of apis.lifestyle){
		var data = "voucherCode="+code;

		$.ajax({
	        type: "POST",
	        headers: headers,
	        url: redeem_url,
	        data: data,
	        async: false,
	        success: success      
	    });
	    function success(res) {
	    	var resp = JSON.parse(res);
	    	if (resp.result == true){
	    		couponArray.push(code);
	    		release_function(code);
	    	}
                  
	    }
	}  

if (couponArray.length == 0){
	alert("no coupon available at this time");
	return false;
}

alert("Below Coupon codes are applicable. \n\n"+couponArray)

	
}