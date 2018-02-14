koovs = function(apis){
	
	var couponArray = [];
	var redeem_url = "https://www.koovs.com/jarvis-order-service/v1/coupon";
	

	

	for (let code of apis.koovs){
		
		var data = {"promoCode": code};
		
		release_function = function(){
			$.ajax({
	        	type: "DELETE",
	       		headers: {  "Content-Type": "application/json",
	       					"Authorization":"Bearer SGI2eEljVTBSQWl1RDQyNEd6T2RIQnRJOHhQVmtxRVFCMHNvSHRHTg=="
	       				  },
	        	url: redeem_url,
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

		if($(".del-coupon").is(':visible'))
			{
				console.log("releasing applied coupon");
				release_function();
				console.log("DELETE");
			}


		$.ajax({
	        type: "POST",
	        headers: {"Content-Type": "application/json",
	        			"Authorization": "Bearer SGI2eEljVTBSQWl1RDQyNEd6T2RIQnRJOHhQVmtxRVFCMHNvSHRHTg=="
	    				},
	        url: redeem_url,
	        contentType: "application/json",
            data: JSON.stringify(data),
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	console.log(res);
	    	//check whether applied 
	    	//if applied then remove the coupon
	    	if (res.promoCodeData[0].applied == true){
	    		couponArray.push({ couponCode: code, discount: parseFloat(res.cart.promoCodeDiscount)});
	    		release_function();

	    		}                  
	    	}
	}  

if (couponArray.length == 0){
	alert("no coupon available at this time");
	return false;
}

console.log(couponArray);
let max = findMax(couponArray);


//finally applying best coupons
alert("applying the best coupon")
document.getElementsByClassName("coupon-box")[0].getElementsByTagName("input")[0].value = max.couponCode;

document.getElementsByClassName("coupon-box")[0].getElementsByClassName("btn-apply")[0].click();
alert("BEST Coupon APplied");

	
}