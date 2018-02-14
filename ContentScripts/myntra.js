myntra = function(apis){
    
couponArray = [];
let url = "https://www.myntra.com/checkout/cart",
    myntraToken = document.getElementsByName('_token')[0].value
let data = {
    coupon: "MYNTRANEW600",
    operation: "APPLY_COUPON",
    token: myntraToken
}

for (let code of apis.myntra) {        
    console.log(code);
    data.coupon = code;        
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: false,
        success: success
    });
    function success(res) {
        if (res) {
            if (res.status == 'error') {
                console.log(res.status)
            } else {        
                console.log("Eureka");
                let response = res.match(/<div class="sub-label c-green">You saved Rs. \d[0-9,.]{1,9} <\/div>/g)[0].match(/[0-9,.]{1,9}/g)[1].replace(',','');
                couponArray.push({ couponCode: data.coupon, discount: parseFloat(response) })
            }
        }               
    }
}

try{
    var alredy_discount_list = document.getElementsByClassName('coupon')[0].getElementsByClassName('greenrupees c-green')[0].innerHTML.split(' ');
    var alredy_discount = alredy_discount_list[alredy_discount_list.length-1].replace(',','')
}
catch(err){
    var alredy_discount = 0
}


if (couponArray.length === 0){
    console.log('Donot have a couponcode for you')
}


else{
    // addContainer(max);
    let max = findMax(couponArray);
    console.log(max);

    if (parseFloat(alredy_discount) >= parseFloat(max.discount)){
    console.log('You already have better coupon applied')
    return false;
    }

    
    try {
        document.getElementsByClassName('blue apply-coupon apply m-hide')[0].click();
    }
    catch(err) {
        document.getElementsByClassName('edit-coupon hint--bottom')[0].click();
    }

    checkContainer(f = function(){
        alert("applying the best coupon")
    document.getElementsByClassName('enter-coupon m-textbox')[0].value = max.couponCode;
    document.getElementsByClassName('btn primary-btn btn-apply m-button c-white clickable')[0].click();
    },'enter-coupon');
    }
}
