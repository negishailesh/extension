zivame = function(apis){
	

	var couponArray = [];
	var redeem_url = "https://www.zivame.com/cart/coupon";
	var remove_url = "https://www.zivame.com/cart/removeCoupon";

	
	

	release_function = function(){
			$.ajax({
	        	type: "POST",
	       		headers: headers,
	        	url: remove_url,
	        	async: false,
	        	success: success
	        	
	    	});
	    	function success(A,B,C) {
				console.log("success");
			}
			
			
		}

	release_function();

	for (let code of apis.zivame){
		
		
		var data = "couponCode="+code;
		var headers = {"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"};
		var previous_total = parseFloat(document.getElementsByClassName("small-4 large-3 columns small-only-text-left ff-pb fs-14")[0].innerHTML.replace("₹ ",""));


		$.ajax({
	        type: "POST",
	       	headers: headers,
	        url: redeem_url,
            data: data,
	        async: false,
	        success: success
	       
	    });
	    function success(A,B,C) {
	    	console.log(A);
	    	if (A.isCoupon !== undefined){
	    		var new_total = parseFloat(document.getElementsByClassName("small-4 large-3 columns small-only-text-left ff-pb fs-14")[0].innerHTML.replace("₹ ",""));
				couponArray.push({ couponCode: code, discount: parseFloat(previous_total - new_total)});
	    		release_function();
	    	}
	    	                 
	    }
	   
	}  


if (couponArray.length == 0){
	alert("No coupons for you")
	return false
	}

console.log(couponArray);
let max = findMax(couponArray);

alert("Best Coupon code for you. \n\n"+max.couponCode);

document.getElementsByName("couponCode")[0].value = max.couponCode;
document.getElementsByClassName("br-1000 apply-coupon bgc-purple tt-up ff-rm fs-11 ls-2 pd-lr20 pd-tb5 lh-p mr-t5")[0].click();


}

	
