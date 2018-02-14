makemytrip = function(apis){
	
	function findTextAndReturnRemainder(target, variable){
    var chopFront = target.substring(target.search(variable)+variable.length,target.length);
    var result = chopFront.substring(0,chopFront.search(";"));
    return result;
	}

	var text = $($('script')).text();
	
	var trackingId = findTextAndReturnRemainder(text,'var trackingId=').replace("'" , "").replace("'" , "");
	
	var couponArray = [];


	if (location.href.search("bus.makemytrip.com") > 0){
		for (let code of apis.makemytrip){
			var email = document.getElementById("user_emailId").value;
			var url = "https://bus.makemytrip.com/bus/traveller/coupon/validate";
			var data = {"type":"validateCouponRequest","transactionAmountPreTax":"","transactionAmount":"",
				"travellerCount":"","couponCode":code,"email":email,"isLoggedIn":"",
				"busDetails":{"travelDepartueCity":"","travelDestinationCity":"","groupId":"","departureDate":""},
				"book_mode":"D","tracking_params":{"trackingId":trackingId,"userEmailId":email}}
			var csrf_token = $('meta[name="_csrf"]').attr('content');
			console.log(csrf_token)

		$.ajax({
		    type: "POST",
		    headers: {'X-CSRF-TOKEN': csrf_token,
		    			"X-Application-Context":"application:9003",
		    			"Content-Type": "application/json",
						},
		    url: url,
		    async: false,
		    contentType: "application/json",
            data: JSON.stringify(data),
            dataType: 'json',
		    success: success
		});
		    function success(res) {
		        if (res) {
		            if (res.couponStatus == 'success') {
		            	response = res.hybridDiscount[0].discount
		                couponArray.push({ couponCode: code, discount: parseFloat(response)})
		            }                
		    	}
			}
		}
	}
	
			
	else if (location.href.match("mmthtl/site/hotels")){
		var check_in_date = document.getElementsByClassName("htR-htlInfo-chkInOut__date chkInDate lato-semibold")[0].innerHTML;
		var check_out_date = document.getElementsByClassName("htR-htlInfo-chkInOut__date chkOutDate lato-semibold")[0].innerHTML;
		var city_code = document.getElementById("rmp_citycode").innerHTML;
		var transaction_id = "1da934ca-1588-4814-a91a-09bb51738283";
		var hotel_id = document.getElementById("rmp_hotelid").innerHTML;
		var reference_key = "c433a9e5-942e-410e-9940-f6b3f2cf6a56";
		var paymode = "PAS";


		var url = "https://dtr-hoteldom.makemytrip.com/mmthtl/site/hotels/review/validatecoupon";
		var data = "emailId=&checkIn=19%20Dec'%2017&checkOut=21%20Dec'%2017&cityCode=GOI&countryCode=IN&roomStay=2e0e&couponCode=BESTBUY4&firstTimeUser=false&mobileCountryCode=null&mobileNumber=null&transactionKey=1da934ca-1588-4814-a91a-09bb51738283&hotelId=200701091654253400&responseReferenceKey=c433a9e5-942e-410e-9940-f6b3f2cf6a56&payMode=PAS&preTaxTrxnAmnt=15024&trxnAmnt=15864";
		$.ajax({
	        type: "POST",
	        headers: {"Content-Type": "application/x-www-form-urlencoded"},
	        url: url,
	        contentType: "application/x-www-form-urlencoded",
            data: data,
	        async: false,
	        success: success
	    });
	    function success(res) {
	    	console.log(res);
	                       
	    }
	}

	else if (location.host === 'flights.makemytrip.com') {
                     
                        let mmtVariables = getWindowsVariablesss(["reviewDetails"]);
                            
            
                        let url = "https://flights.makemytrip.com/makemytrip/domFlightCoupon",
                            data = {
                            airlineCodes: mmtVariables.reviewDetails.fi.substring(0, 2) + ';',
                            bookingAmount: mmtVariables.reviewDetails.af,
                            code: "",
                            deptDate: mmtVariables.reviewDetails.searchRequest.deptDate,
                            emailID: "",
                            fromCity: mmtVariables.reviewDetails.searchRequest.fromCity,
                            loggedInStatus: false,
                            noOfAdults: mmtVariables.reviewDetails.searchRequest.noOfAdlts,
                            noOfChildren: mmtVariables.reviewDetails.searchRequest.noOfChd,
                            noOfInfants: mmtVariables.reviewDetails.searchRequest.noOfInfnt,
                            preTaxAmount: mmtVariables.reviewDetails.bf,
                            productCode: "FLT",
                            searchKey: mmtVariables.reviewDetails.searchKey,
                            toCity: mmtVariables.reviewDetails.searchRequest.toCity,
                            tripType: mmtVariables.reviewDetails.searchRequest.tripType
            
                        }
            
            
                        for (let code of apis.makemytrip) {
                            data.code = code
                            console.log(data.code)
                            $.ajax({
                                type: "POST",
                                url: url,
                                async: false,
                                contentType: "application/json;charset=UTF-8",
                                data: JSON.stringify(data),
                                dataType: 'JSON',
                                success: success
                            });
                            function success(res) {
                                console.log(res)
                            }
                        }
            
                    } 

	

if (couponArray.length == 0){
	alert("NO coupon for you");
	return false
}
console.log(couponArray);
let max = findMax(couponArray);
alert("Best coupon for you "+couponArray.couponCode)

}