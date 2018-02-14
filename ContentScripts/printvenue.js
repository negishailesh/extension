printvenue = function(apis){
	

	var couponArray = [];
	var redeem_url = "http://www.printvenue.com/checkout/cart/voucher/ajaxsubmit";
		


	for (let code of apis.printvenue){
		
		
		var data = "voucherCode=";
		var headers = {"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"};
		
		release_function = function(code){
			$.ajax({
	        	type: "POST",
	       		headers: headers,
	        	url: redeem_url,
            	data: data+code,
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
            data: data+code,
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	var response = JSON.parse(res);
	    	if (response.status != "error"){
	    		couponArray.push({ couponCode: code, discount: parseFloat(response.voucherDiscount)});
	    		release_function(code);

	    	}                 
	    }
	}  



console.log(couponArray);
let max = findMax(couponArray);
console.log(max);

//finally applying best coupons
alert("Applying best Coupon  "+max.couponCode)
document.getElementById("voucherCodeId").value = max.couponCode;
document.getElementsByClassName("apply-btn")[0].click();


	
}