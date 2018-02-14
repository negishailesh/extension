var endp = "https://checkout.firstcry.com/CartService/CheckoutService.svc/json/GetCart";



var coupl = [];
var couplen = 0;
var counter = 0;
var coupo={};
initial_price = 0;
var newprice = [];
var jam;


var bm = 0;

function applycoup(coupon){

if ($("div#divAppliedCouponsDetails div.cprit span").is(":visible")) {
          $("div#divAppliedCouponsDetails div.cprit span").simulate("click");};
           setTimeout(function() {
 $("div.have-a-coupon.text-uppercase, div.have-a-coupon").simulate("click");
      setTimeout(function() {
                                        $("input#CouponCode").val(coupon).trigger("change").simulate("keyup");
                                        $("div#popupCoupon input[value=\"APPLY\"]").simulate("click");
                                        setTimeout(function() {


                                            
                                            $("#popCouponDetails .mhed .fc_ckot_sp").simulate("click")
                                        }, 4000)
                                    }, 2000)}, 2000)

}


function checkcoups() {
	console.log(1);

  var mon = $("span#NetPayment").text();
  var ini=$("#SubTotal").text();
  var is_t=boomboom(ini);
  is_t=coolguy(is_t);
  var mon = boomboom(mon);
 mon=coolguy(mon);

  initial_price = mon;
  jam=is_t-mon;
  var pe = 0;
  var ne = "";
  $("#productlist > .cl_1").each(function(q, c) {
    if (pe >= 1) {
      PRoc = $(this).attr("class");
      PRoc = PRoc.split(" ");
      PRoc = PRoc[0].split("col");
      ne += "*NO^" + PRoc[1] + "^1^0"
    } else {
      PRoc = $(this).attr("class");
      PRoc = PRoc.split(" ");
      PRoc = PRoc[0].split("col");
      ne += "NO^" + PRoc[1] + "^1^0"
    };
    pe++
  });
  var mod = "";
  var ck = "; " + document.cookie;
  console.log(ck);
  var mC = ck.split("; FC_AUTH=");
  if (mC.length == 2) {
    mod = mC.pop().split(";").shift()
  };
  var rnd = $(".numbr_phone").text();
  var rpd = $("#ShipPinCode").val();
  var rsd = $("#ShipState").val();


  $.each(coupl, function(key, value) {
    $(document).queue("autoapply", function(couponplay) {

      if (sorry == 1) {
        counter++;
        $('.gapply').html('Applying <span>' + (counter) + '</span>/<span>' + couplen + '</span> Coupons...');
        $('#modalBtn i').text(value);
        var ddata = {
          pro: ne,
          shipPin: rpd,
          SiteType: 0,
          LC: 0,
          CR: 0,
          Coupons: value,
          FC_AUTH: mod,
          ShipMobile: rnd,
          ShipPhone: "",
          PayBack: "",
          State: rsd,
          PaymentType: "card",
          LPO: false,
          LSD: false,
          CCA: "",
          LT: "L",
          UA: navigator.userAgent + " Desktop"
        };
        console.log(ddata);
        $.ajax({
          url: endp,
          type: "POST",
          dataType: "json",
          data: JSON.stringify(ddata),
          contentType: "application/json; charset=UTF-8",
          success: function(A, B, C) {


            if (A.GetCartResult.pOrderSummary.Coupons[0].IsApplied == true) {
               console.log(value);
               console.log('savings');
               if (A.GetCartResult.pOrderSummary.PurchaseOrderItemList[0].AppliedOfferList !== null){
                console.log(A.GetCartResult.pOrderSummary.PurchaseOrderItemList[0].AppliedOfferList[0].SavingValue);
                newprice[counter - 1] = parseInt(A.GetCartResult.pOrderSummary.PurchaseOrderItemList[0].AppliedOfferList[0].SavingValue);
               }
                if (counter == couplen) {
                applyfinal();
              };
              couponplay();
              
            } else {
            newprice[counter - 1]=0;
             console.log("i am here ")
              if (counter == couplen) {
                applyfinal()
              };
              couponplay()
            }
          },
          failure: function(A) {
          newprice[counter - 1]=0;
          if (counter == couplen) {
                applyfinal()
              };
            couponplay()
          },
          error: function(A) {
                    newprice[counter - 1]=0;
          if (counter == couplen) {
                applyfinal()
              };

            couponplay()
          }
        })
      };
    })
  });
  $(document).dequeue("autoapply");

  function applyfinal() {
    console.log(newprice);
    best_coupon = "";
    max = -1;
    index = 500;
    for (m = 0; m < newprice.length; m++) {
      if (max < newprice[m]) {
        max = newprice[m];
        index = m;
      }
    }
    best_coupon = coupl[index];

    if (max <= 0) {
      alert("No coupon for you");
    } else {
      var sav=max;
      
      console.log(best_coupon);
console.log(newprice);
console.log(coupo);
console.log(coupl);
console.log(initial_price);
console.log(sav);
            
// nayapopup(coupo,coupl,newprice,best_coupon,initial_price, sav);
//      resultf(best_coupon,initial_price,sav);
//                   $('div.ge-top p')[0].remove();
      //$("div.have-a-coupon.text-uppercase, div.have-a-coupon").simulate("click");
      setTimeout(function() {
                                        $("input#CouponCode").val(best_coupon);//.trigger("change").simulate("keyup");
                                        $("div#popupCoupon input[value=\"APPLY\"]").click();
                                        setTimeout(function() {

                                                  // $('.gapply').text("Apply this coupon to save Rs."+sp+"");
                                            
                                            $("#popCouponDetails .mhed .fc_ckot_sp").click();
                                        }, 4000)
                                    }, 2000)
    }

  }
}

firstcry = function(apis) {
  var URL = window.location.href;

  if (URL.search("jabong.com/cart")) {

   // var image = getResource("applycoupon.png");

    //$('#popupCoupon').after("<a id='autoapply' href='javascript:void();'><img style='margin-top:15px;margin-bottom:5px;margin-left:20px;' src='" + image + "'></a>");


    // var button = document.getElementById("autoapply");
    // if (button != null) {
      // button.addEventListener("click", function()
       // {

        // grabmodal();
        //console.log('manoj');
        if ($("div#divAppliedCouponsDetails div.cprit span").is(":visible")) {
        	
          $("div#divAppliedCouponsDetails div.cprit span").simulate("click");
          // coupo = JSON.parse(localStorage.getItem("cobject"));
          //           coupl=Object.keys(coupo);
          			coupl = apis.firstcry;
                    couplen = coupl.length;
                    

                    for (i = 0; i < couplen; i++) {
                        newprice[i] = 0;
                    }
          setTimeout(function() {
            checkcoups()
          }, 3000)
        } else {

          // coupo = JSON.parse(localStorage.getItem("cobject"));
          //           coupl=Object.keys(coupo);
          			coupl = apis.firstcry;
                    couplen = coupl.length;
                    

                    for (i = 0; i < couplen; i++) {
                        newprice[i] = 0;
                    }

          checkcoups()
        };

      // }, false);

    // }
  } else {
    setTimeout(function() {
      firstcry(apis);
    }, 1000);
  }
}
















// checkContainerForID = function(your_function, id_name) {
  
//   if($('#' + id_name).is(':visible')){ //if the container is visible son the page
//     console.log('passed' + id_name);  //Adds a grid to the html
//     your_function();
//   } else {
//     setTimeout(function() {
//     checkContainerForID(your_function, id_name)
// }, 50); //wait 50 ms, then try again
//   }
// }




// firstcry = function(apis){
//     console.log("inside firstcry");
// couponArray = [];
// var response;

// entercoupon = function(code){
//     document.getElementById("CouponCode").value = code; //FC30CFF
// }

// applycoupon = function(){
//     document.getElementById("popupCoupon").getElementsByClassName("ip_cp1")[0].click();

// }

// readDiscount = function(){
//     checkContainerForID(f = function(){
//                                         response = document.getElementById("divAppliedCouponsDetails").getElementsByClassName("svecn")[0].getElementsByTagName("span")[0].innerHTML.match(/[0-9,.]{1,9}/g)[1].replace("." , "");
//                                         if (response){
//                                             couponArray.push({ couponCode: code, discount: parseFloat(response)});
//                                             return true
//                                             }
//                                        }, 'divAppliedCouponsDetails');
// }

// removecoupon = function(){
//     try{
//         document.getElementById("divAppliedCouponsDetails").getElementsByClassName("cprit")[0].getElementsByTagName("span")[0].click(); }
//     catch(err){
//         closeDiscountPopup()
//     }   
// }

// closeDiscountPopup = function(){
//                 document.getElementById("popCouponDetails").getElementsByClassName("fc_ckot_sp")[0].click();    
// }



// var obj = function(){
//     entercoupon = function(code){
//         document.getElementById("CouponCode").value = code; //FC30CFF
//     }  
//     applycoupon = function(){
//     document.getElementById("popupCoupon").getElementsByClassName("ip_cp1")[0].click();

//     }
//     readDiscount = function(){
//     checkContainerForID(f = function(){
//                                         response = document.getElementById("divAppliedCouponsDetails").getElementsByClassName("svecn")[0].getElementsByTagName("span")[0].innerHTML.match(/[0-9,.]{1,9}/g)[1].replace("." , "");
//                                         if (response){
//                                             couponArray.push({ couponCode: code, discount: parseFloat(response)});
//                                             return true
//                                             }
//                                        }, 'divAppliedCouponsDetails');
//     }

// };





// // apis.firstcry.forEach(function(code)){
// //         res1 = WaitTillTrue(entercoupon(code))
// //         if res1{
// //             res2 = WaitTillTrue(readDiscount())
// //         }
// //     }


// // final_function = function(code){       
// //     console.log(code)
// //     checkContainerNotExistingForID(f = function(){ enterANDapply(code)}, 'divAppliedCouponsDetails');
// //     console.log('done '+ code)
// //     try{

// //     checkContainerForID(f = function(){
// //                                         readDiscount();
// //                                         couponArray.push({ couponCode: code, discount: parseFloat(response)});
// //                                        }, 'divAppliedCouponsDetails');
// //     }
   
// //     catch(err){
// //         console.log(err.message)
// //         response = false;
// //         checkContainerForID(closeDiscountPopup, 'divAppliedCouponsDetails');
// //         console.log("does't apply");
// //     }
// //     console.log('itteration complate');
    
// // }





// // for (let code of apis.firstcry){
// //     (function(cntr) {
// //         final_function(code);
// //     })();
// // }
// // var code = "FC30CFF"
// // entercoupon(code, function(){
// //             applycoupon(function(){
// //                 readDiscount(function(){
// //                     removecoupon(function(){
// //                         console.log(code)
// //                     });
// //                 });
// //             });
// //         });


// // for (var code of apis.firstcry){
// //     (function(num){
// //         entercoupon(num, function(){
// //             applycoupon(function(){
// //                 readDiscount(function(){
// //                     removecoupon(function(){
// //                         console.log(num)
// //                     });
// //                 });
// //             });
// //         });

// //     })(code);

// }



// // apis.firstcry.forEach(function(item, i){
// //         final_function(function(item));
// // });



// // console.log(couponArray)
// // console.log(couponArray.length)



// // if (couponArray.length == 0){
// //     console.log('Donot have a couponcode for you')
// // }


// // else{
// //     // addContainer(max);
// //     let max = findMax(couponArray);
// //     console.log(max);

// //     // if (parseFloat(alredy_discount) >= parseFloat(max.discount)){
// //     // console.log('You already have better coupon applied')
// //     // return false;
// //     // }

    
// //     try {
// //         document.getElementsByClassName('blue apply-coupon apply m-hide')[0].click();
// //     }
// //     catch(err) {
// //         document.getElementsByClassName('edit-coupon hint--bottom')[0].click();
// //     }

// //     checkContainer(f = function(){
// //     document.getElementsByClassName('enter-coupon m-textbox')[0].value = max.couponCode;
// //     document.getElementsByClassName('btn primary-btn btn-apply m-button c-white clickable')[0].click();
// //     },'enter-coupon');
// //     }
// // }
