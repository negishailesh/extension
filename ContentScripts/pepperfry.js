pepperfry = function(apis){


	var couponArray = [];
	
		


	for (let code of apis.pepperfry){
		
		
		var data = "coupon_code="+code+"&apply=apply"
		var headers = {"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"};
		var redeem_url = "https://www.pepperfry.com/checkout/validate_coupon/0/"+code+"/1";

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
	    	if (response.data.success == true){
	    		couponArray.push({ couponCode: code, discount: parseFloat(response.data.coupon_discount_amount)});
	    		

	    	}                 
	    }
	}  

if (couponArray.length == 0)
{
	alert("No Coupons for you")
	return false;
}

console.log(couponArray);
let max = findMax(couponArray);
console.log(max);

//finally applying best coupons
alert("Applying best Coupon  "+max.couponCode)
document.getElementById("coupon_code").value = max.couponCode;
document.getElementById("cpn_check_btn").click();


	
}