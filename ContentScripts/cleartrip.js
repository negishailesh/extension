cleartrip = function(apis){
	

	var couponArray = [];
	
	var headers = {"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
					"X-Requested-With" : "XMLHttpRequest"
					};
	
	for (let code of apis.cleartrip){
		
		var redeem_url = location.href.replace("info","apply-coupon");

		var data = "coupon="+code+"&isCheckSavings=true";
		$.ajax({
	        type: "POST",
	       	headers: headers,
	        url: redeem_url,
            data: data,
	        async: false,
	        complete: function(A, B, C) {
	        	var response = JSON.parse(A.responseText);
	        	if (response.details[0].coupon_type == "conditional_cashback" || response.details[0].coupon_type == "conditional_wallet")
	        	{
		    		var dis = parseFloat(response.amount);
		    		couponArray.push({ couponCode: code, discount: dis});
		    	}
	    	}
	    });
	 }   	    
	  

if (couponArray.length == 0){
	alert("NO Coupon For you.")
	return false
}




let max = findMax(couponArray);

alert("APPLYTING BEST COUPON "+max.couponCode);
document.getElementById("coupon").value = max.couponCode;
document.getElementsByClassName("button action span span6 applyCodeButton")[0].click();

	

}



// var endp = "";



// function sembu(don) {
//   var fA = document.createElement("script");
//   fA.textContent = decodeURI(don);
//   (document.head || document.documentElement).appendChild(fA);
//   fA.parentNode.removeChild(fA)
// }

// function applycoup(coupon){

// $("#coupon").val(coupon).trigger("change").trigger("keypress");
//       $("#check_saving").simulate("click");

// }

// var coupl = [];
// var couplen = 0;
// var counter = 0;
// var initial_price = 0;
// var coupo={};
// var newprice = [];

// var bm = 0;


// function checkcoups() {

//   var mon = $(".totalFareBlock  #totalFare #counter").text();
//   var mon = boomboom(mon);

//   initial_price = coolguy(mon);


//   $.each(coupl, function(key, value) {
//     $(document).queue("autoapply", function(couponplay) {

//       if (sorry == 1) {
//         counter++;
//         // $('.gapply').html('Applying <span>' + (counter) + '</span>/<span>' + couplen + '</span> Coupons...'); //ui
//         // $('#modalBtn i').text(value); //ui
//         // $('#modalBtn i').css("background-image", "none"); //ui
//         // $('#modalBtn i').css('width', 'auto'); //ui
//         var ddata = {
//           coupon: value,
//           isCheckSavings: true
//         };
//         $.ajax({
//           url: endp,
//           type: "POST",
//           dataType: "json",
//           data: ddata,
//           contentType: "application/x-www-form-urlencoded",
//           complete: function(A, B, C) {

//             var hi = A.responseJSON;
//             console.log(counter)
//             console.log(couplen)
//             console.log("^^^^^^^^")
//             if (hi.details[0].coupon_type != "error") {


//               newprice[counter - 1] = parseInt(hi.amount);


//               if (counter == couplen) {
//                 applyfinal()
//               };

//               couponplay()
//             } else {
//               if (counter == couplen) {
//                 applyfinal()
//               };
//               couponplay()
//             }
//           }
//         })
//       };
//     })
//   });
//   $(document).dequeue("autoapply");


//   function applyfinal() {
//   	console.log("Inside Apply Final")
//     console.log(newprice);
//     best_coupon = "";
//     max = -1;
//     index = 500;
//     for (m = 0; m < newprice.length; m++) {
//       if (max < newprice[m]) {
//         max = newprice[m];
//         index = m;
//       }
//     }
//     best_coupon = coupl[index];

//     if (max <= 0) {
//       baddayboy();
//     } else {
//       var sav = max;
//       console.log(best_coupon);
// 	console.log(newprice);
// 	// console.log(coupo);
// 	console.log(coupl);
// 	console.log(initial_price);
// 	console.log(sav);
            
// // nayapopup(coupo,coupl,newprice,best_coupon,initial_price, sav);
// //      resultf(best_coupon, initial_price, sav); //ui
// //      $('div.ge-top p')[0].remove(); //ui
//       // $(".gb-a-apply").css("background-image", "none");
//       // $(".gb-a-apply").css('width', 'auto');

//       // $('.gapply').text("Applied Successfully");

//       $("#coupon").val(best_coupon).trigger("change").trigger("keypress");
//       $("#check_saving").simulate("click");
      
//     }

//   }
// }


// cleartrip = function(apis) {
// 	counter = 0
//   var URL = window.location.href;

//   if (URL.search("cleartrip.com/hotels/itinerary")) {

//     // var image = getResource("applycoupon.png");

//     // $('#coupon').before("<a id='autoapply' href='javascript:void();'><img style='margin-left:65px;' src='" + image + "'></a>");


//     // var button = document.getElementById("autoapply");
//     // if (button != null) {
//       // button.addEventListener("click", function() {


//         // grabmodal(); //ui
//         // $('#modalBtn i').css("background-image", "none");
//         // $('#modalBtn i').css('width', 'auto');

//         sembu("localStorage[\"itineraryId\"] = itineraryId;");
//         var bB = localStorage["itineraryId"];
//         endp = "https://www.cleartrip.com/hotels/itinerary/" + bB + "/apply-coupon";
//         console.log(endp);

//         // coupo = JSON.parse(localStorage.getItem("cobject"));
//         //             coupl=Object.keys(coupo);
                    
//         coupl = apis.cleartrip
//         couplen = coupl.length;

//                     for (i = 0; i < couplen; i++) {
//                         newprice[i] = 0;
//                     }
//         setTimeout(function() {
//           checkcoups()
//         }, 3000)


//       // }, false);

//     // }
//   } else {
//     setTimeout(function() {
//       GrabonCoupon();
//     }, 1000);
//   }
// }
