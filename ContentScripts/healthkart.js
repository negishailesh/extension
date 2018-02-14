healthkart = function(apis){
	

	var couponArray = [];
	var redeem_url = "https://www.healthkart.com/api/cart/applyCoupon/";

	for (let code of apis.healthkart){
		

		$.ajax({
	        type: "GET",
	        url: redeem_url+code,
	        async: false,
	        success: success      
	    });
	    function success(res) {
	    	if (res.results.cart.cartPricing != null){
	    		console.log(res);
	    		couponArray.push({ couponCode: code, discount: parseFloat(res.results.cart.cartPricing.promoDisc)});
	    	}
	    	//check whether applied 
	    	//if applied then remove the coupon
	    	
	    	
	                       
	    }
	}  

if (couponArray.length == 0){
	alert("no coupon available at this time");
	return false;
}

console.log(couponArray);
let max = findMax(couponArray);
console.log(max);

//finally applying best coupons
alert("applying the best coupon")

document.getElementsByClassName("js-coupon-code")[0].value = max.couponCode;
document.getElementsByClassName("disp-inln apply-coupon btn btn-gray fnt-caps col-xs-12")[0].click();

	
}