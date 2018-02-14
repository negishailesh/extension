koovs = function(apis){
	//for redeem
	var redeem_url = "https://www.shoppersstop.com/voucherCode/redeem?pageName=login&voucherCode=FEST2";
	var type = "GET";
	var data = "pageName=login&voucherCode=FEST2";

	//if 302 response code comes from above url it will perform redirection to check out url.
	//which will show the cart balance.

	//for checkout
	// var url = "https://www.shoppersstop.com/login/checkout";
	// var type = "GET";


	//for relase
	var release_url = "https://www.shoppersstop.com/voucherCode/release/FEST2?pageName=login";
	var data = "pageName=login";



}