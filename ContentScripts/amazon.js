amazon = function(apis){
	var couponArray = [];
                       
                     let url = "https://www.amazon.in/gp/buy/payselect/handlers/submit.html/ref=ox_pay_page_submit_new_payment",
                            data = {
                            hasWorkingJavascript: 1,
                            forceResponsive: '',
                            isDebug: '',
                            handler: 'add-giftcard-promotion',
                            claimcode: 'dsadsa',
                            ajaxResponse: 1,
                            returnjson: 1
                        }
            
                        for (let code of apis.amazon) {
                            data.claimcode = code;
                            $.ajax({
                                type: "POST",
                                url: url,
                                data: data,
                                async: false,
                                success: success
                            });
                            function success(res) {
                                console.log(code)       
                            }
                        }	
	


}