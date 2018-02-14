shein = function(apis){
	

	var couponArray = [];


	
	for (let code of apis.shein){
		
		
		var headers = {"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8" };

		
		var redeem_url = "https://www.shein.in/index.php";
		var address_id = document.getElementsByClassName("address-item default-item j-address-item")[0].getAttribute("value").trim();
		var country_id = document.getElementsByClassName("address-item default-item j-address-item")[0].getAttribute("countryid").trim();
		var chkInsurance = document.getElementsByClassName("she-checked she-checkbox-checked")[0].getAttribute("value").trim();


	
		// release_function = function(code){
		// 	var datum = {"action": "cancelpromo", "removed_item": ["135313774pid"]};
		// 	$.ajax({
	 //        	type: "POST",
	 //       		headers: headers,
	 //        	url: redeem_url,
  	//         	data: "model=coupon_point&action=coupon&country_id=100&coupons=SHEI200&chkInsurance=0&use_wallet=0&us_totle_price=&address_id=",
	 //        	async: false,
	 //        	success: success
	 //    	});
	 //    	function success(res) {
		// 		console.log(res);
		// 	}
			
		// }



		$.ajax({
	        type: "POST",
	       	headers: headers,
	        url: redeem_url,
            data: "model=coupon_point&action=coupon&country_id="+country_id+"&coupons="+code+"&chkInsurance="+chkInsurance+"&use_wallet=0&us_totle_price=&address_id="+address_id,
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	var response = JSON.parse(res);
	    	if (response.result == "success"){
	    		var dis = parseFloat(response.info.content.couponDiscountMessage.replace("-₹","").trim());
	    		couponArray.push({ couponCode: code, discount: dis});
	    		//release_function(code);

	    	}                 
	    }
	}  


if (couponArray.length == 0){
	alert("NO Coupon For you.")
	return false
}

//alert("you can user below mentioned couponCode\n\n"+couponArray);


let max = findMax(couponArray);

alert("APPLYTING BEST COUPON "+max.couponCode);
document.getElementById("coupon").value = max.couponCode;
document.getElementsByClassName("rede-em she-btn-white she-btn-s")[0].click();


// //finally applying best coupons
// alert("Applying best Coupon  "+max.couponCode)
// document.getElementById("voucherCodeId").value = max.couponCode;
// document.getElementsByClassName("apply-btn")[0].click();


	
}