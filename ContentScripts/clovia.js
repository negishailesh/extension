clovia = function(apis){
	

	var couponArray = [];
	var redeem_url = "https://www.clovia.com/process-coupon/";
	
	cart_drop_down = function(){
		$.ajax({
	        type: "GET",
	        url: "https://www.clovia.com/cart_dropdown_ajax/",
            data: data,
	        async: false,
	        success: success
	    });
	}

	

	for (let code of apis.clovia){
		
		var data = "?coupon="+code+"&show=yes";
		

		$.ajax({
	        type: "GET",
	        url: redeem_url+data,
	        async: false,
	        success: success      
	    });
	    function success(res) {
	    	if (res != "Please enter a valid coupon code."){
	    		var htmlObject = $(res);
	    		var response = htmlObject.find("#coupon_show").find("#discount").find("span").remove().html();
	    		couponArray.push({ couponCode: code, discount: parseFloat(response.trim())});
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
alert("Applying the best coupon.")
document.getElementById("id_coupon").value = max.couponCode;
document.getElementById("helperDiv").getElementsByClassName("cartrg")[0].getElementsByClassName("cupn")[0].getElementsByTagName("a")[0].click();

	
}