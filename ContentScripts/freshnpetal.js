freshnpetal = function(apis){
	

	var couponArray = [];

	for (let code of apis.freshnpetal){
		
		
		var data = "productPromoCodeId="+code;
		var headers = {"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"};
		var redeem_url = "https://www.fnp.com/control/applyCouponCode?productPromoCodeId="+code;
		var remove_url = "https://www.fnp.com/control/removePromotion?promoCode="+code;
		
		release_function = function(code){
			$.ajax({
	        	type: "POST",
	       		headers: headers,
	        	url: remove_url,
            	data: "promoCode="+code,
	        	async: false,
	        	success: success
	    	});
	    	function success(res) {
				console.log(res);
			}
			
		}


		$.ajax({
	        type: "POST",
	       	headers: headers,
	        url: redeem_url,
            data: data,
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	var response = JSON.parse(res);
	    	if (response.isSuccess == true){
	    		couponArray.push(code);
	    		release_function(code);

	    	}                 
	    }
	}  


if (couponArray.length == 0){
	alert("NO Coupon For you.")
	return false
}

alert("you can user below mentioned couponCode\n\n"+couponArray);


// // let max = findMax(couponArray);
// // console.log(max);
// //finally applying best coupons
// alert("Applying best Coupon  "+max.couponCode)
// document.getElementById("voucherCodeId").value = max.couponCode;
// document.getElementsByClassName("apply-btn")[0].click();


	
}