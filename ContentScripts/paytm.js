paytm = function(apis){
	

	var couponArray = [];


	
	for (let code of apis.paytm){
		
		
		
		var data = {"action":"applypromo","globalcode":code};
		var headers = {"Content-Type" : "application/json",
						"x-csrf-token" : getCookie("XSRF-TOKEN"),
						"x-xsrf-token" : getCookie("XSRF-TOKEN")
						};
		var cart_id = JSON.parse(window.localStorage.cartId).trim();
		var json = JSON.parse(window.localStorage.sessionValue);
		var token = json.user.sso_token_enc.trim();
		var redeem_url = "https://paytmmall.com/proxy/cart-direct?channel=web&child_site_id=6&site_id=2&version=2";
		
		
		release_function = function(code){
			var datum = {"action": "cancelpromo", "removed_item": ["135313774pid"]};
			$.ajax({
	        	type: "POST",
	       		headers: headers,
	        	url: redeem_url+"&cartid="+cart_id+"&token="+token+"&v2=true",
            	data: JSON.stringify(datum),
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
	        url: redeem_url+"&cartid="+cart_id+"&token="+token+"&v2=true",
            data: JSON.stringify(data),
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	console.log(res);
	    	var response = res;
	    	if (response.status.result == "success"){
	    		couponArray.push({ couponCode: code, discount: parseFloat(response.cart.paytm_cashback)});
	    		release_function(code);

	    	}                 
	    }
	}  


if (couponArray.length == 0){
	alert("NO Coupon For you.")
	return false
}

//alert("you can user below mentioned couponCode\n\n"+couponArray);


let max = findMax(couponArray);

alert("BEST COUPON "+max.couponCode);
// //finally applying best coupons
// alert("Applying best Coupon  "+max.couponCode)
// document.getElementById("voucherCodeId").value = max.couponCode;
// document.getElementsByClassName("apply-btn")[0].click();


	
}