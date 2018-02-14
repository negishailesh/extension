yatra = function(apis){
	let yatraVariables = getWindowsVariablesss(["checkoutOptions"]);
	couponArray = [];
	let url = "https://secure.yatra.com/air-pay-book-service/dom2/promocode/validateNew";
	data = {
               	superPnr: yatraVariables.checkoutOptions.jsonData.superPnr,
                flightType: 'O',
                pricingId: yatraVariables.checkoutOptions.jsonData.pricingId,
                totalAmount: yatraVariables.checkoutOptions.jsonData.data.fareDetails.tf || yatraVariables.checkoutOptions.jsonData.oldPrice,
                promoContext: 'REVIEW',
                promoCode: ''
            }
            for (let code of apis.yatra) {
                            console.log(code)
                            data.promoCode = code
                            $.ajax({
                                type: "POST",
                                url: url,
                                // contentType: "application/x-www-form-urlencoded;charset=UTF-8",
                                data: data,
                                async: false,
                                dataType: 'JSON',
                                success: success
                            });
                            function success(res) {
                                let response = JSON.parse(res);  
                                if (response) {
                                    if (response.cash) {
                                        couponArray.push({ couponCode: data.promoCode, discount: parseInt(response.cash.discountAmount) })
                                    } else {
                                    }
                                }
                            }        
                        }
                        if (couponArray.length == 0){
                            alert("No coupon for you.")
                            return false
                        }
                        let max = findMax(couponArray);
                        addContainer(max);

}