tatacliq = function(apis){
	

	var couponArray = [];
	var redeem_url = "https://www.tatacliq.com/checkout/multi/coupon/redeem";
	var release_url = "https://www.tatacliq.com/checkout/multi/coupon/release";

	

	for (let code of apis.tatacliq){
		
		var csrf_token = document.getElementsByName("CSRFToken")[0].value;
		
		var guid = document.getElementById("guid").value;
		
		var data = "couponCode="+code+"&guid="+guid+"&CSRFToken="+csrf_token;
		
		release_function = function(){
			$.ajax({
	        	type: "POST",
	       		headers: {"Content-Type": "application/x-www-form-urlencoded"},
	        	url: release_url,
	        	contentType: "application/x-www-form-urlencoded",
            	data: data,
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

		if ($('#couponApplied').is(':visible'))
			{
				console.log("releasing applied coupon");
				release_function();
			}


		$.ajax({
	        type: "POST",
	        headers: {"Content-Type": "application/x-www-form-urlencoded"},
	        url: redeem_url,
	        contentType: "application/x-www-form-urlencoded",
            data: data,
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	console.log(res);
	    	//check whether applied 
	    	//if applied then remove the coupon
	    	if (res.couponRedeemed == true){
	    		couponArray.push({ couponCode: code, discount: parseFloat(res.couponDiscount.value)});
	    		release_function();

	    	}
	    	
	                       
	    }
	}  

console.log(couponArray);
let max = findMax(couponArray);
console.log(max);

//finally applying best coupons
alert("applying the best coupon")
document.getElementById("couponFieldId").value = max.couponCode;
document.getElementById("couponSubmitButton").click();

	
}