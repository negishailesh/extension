jabong = function(apis){
    grabmodal();
    console.log(">>>>>>>>>>MODAL WORKING FINE<<<<<<<");
	console.log('Inside Jabong');

couponArray = [];
let url = "https://www.jabong.com/cart/applycoupon/",
    Token = document.getElementsByName('_csrf')[0].value;

let data = {
    couponcode: "MYNTRANEW600",
    _csrf: Token
}

for (let code of apis.jabong) {        
    console.log(code);
    data.couponcode = code;        
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: false,
        success: success
    });
    function success(res) {
        if (res) {
            if (res.error == true) {
                console.log(res.status)
                } 
                else {        
                var myRegexp = 'Coupon\sMoney</span><span class="right green-txt">- <span class="standard-price"> \d[0-9.]{1,9}'
                let response = res.match(/Coupon Money<\/span><span class="right green-txt">- <span class="standard-price"> \d[0-9.]{1,9}<\/span>/)[0].match(/[0-9.]{1,9}/g)[0];
                couponArray.push({ couponCode: data.couponcode, discount: parseFloat(response) })
            }
        }               
    }
}

try{
    var alredy_discount = document.getElementsByClassName('summary-amount')[0].getElementsByClassName('right green-txt')[1].getElementsByClassName('standard-price')[0].innerHTML.trim()
}
catch(err){
    var alredy_discount = 0
}

console.log(couponArray)


if (couponArray.length === 0){
	console.log('Donot have a couponcode for you')
}

else{
	let max = findMax(couponArray);
    console.log(max)

	if (parseFloat(alredy_discount) >= parseFloat(max.discount)){
    console.log('You already have better coupon applied')
    return false;
    }

    else{
    	try {
		document.getElementsByClassName('remove-coupon text-center text-uppercase')[0].click();
		}
		catch(err) {
			console.log("err 01")
		}
    }


	checkContainer(f1 = function(){document.getElementsByClassName('have-a-coupon text-uppercase')[0].click();}, 'have-a-coupon');

	checkContainer(f = function(){
        alert("applying the best coupon")
		document.getElementsByName('applyCoupon')[0].value = max.couponCode;
		document.getElementsByClassName('input-group-addon jbApplyCoupon')[0].click();
	}, 'jbApplyCoupon');

	}
}
