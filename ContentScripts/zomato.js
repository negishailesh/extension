zomato = function(apis){
	

	var couponArray = [];
	var redeem_url = "https://www.zomato.com/php/o2_handler.php";
	var headers = {"content-type" : "application/x-www-form-urlencoded;charset=UTF-8"};
	var user_id = parseInt(JSON.parse(window.localStorage.getItem("zomatoOrder_Address")).user_id)
	var res_id = JSON.parse(window.localStorage.getItem("zomatoOrder_Address")).res_id;
	if (res_id === undefined){
		res_id = JSON.parse(window.localStorage.getItem("wb_res_id"));
	}
	var address_id = JSON.parse(window.localStorage.getItem("zomatoOrder_Address")).id;

	var csrf = window.localStorage.getItem("wb_csrft");

	for (let code of apis.zomato){
		
		var data = "user_id="+user_id+"&res_id="+res_id+"&address_id="+address_id+"&voucher_code="+code+"&payment_method_type=card&payment_method_id=0&case=calculatecart&csrfToken="+csrf;

		$.ajax({
	        type: "POST",
	        headers: headers,
	        url: redeem_url,
	        data: data,
	        async: false,
	        success: success      
	    });
	    function success(res) {
	    		console.log(res);
	    		if (res.is_voucher_valid == true){
	    			console.log("asdasd");
	    			var dis = res.order.items[2].item.totalCost;
	    			couponArray.push({ couponCode: code, discount: dis});
            	}
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

// document.getElementsByClassName("js-coupon-code")[0].value = max.couponCode;
// document.getElementsByClassName("disp-inln apply-coupon btn btn-gray fnt-caps col-xs-12")[0].click();

	
}