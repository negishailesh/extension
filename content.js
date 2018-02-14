        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }


        apply_coupon = function () {
            let apis,
                couponArray = [];
                //console.log(location.href);
                checkPromocode();}

            // $.ajax({
            //     type: "GET",
            //     url: "https://api.myjson.com/bins/1bm057",
            //     success: function success(res) {
            //         apis = res;
            //         checkPromocode();
            //     }
            // });


            checkPromocode = function () {
                           
                        if (location.href === "https://www.myntra.com/checkout/cart") {
                            apis = {'myntra':['head', 'MYNTRANEW1000','SPACES10Ns', 'MYNTRANEWW500', 'HELLO', 'MYNTRANEW300', 'SPACES10X']}
                            myntra(apis);
                        } 

                        else if (location.href.search("cleartrip") > 0){
                            apis = {"cleartrip": ["CT700SBI", "CTMASTERPASS", "CTHSBCFRIDAY", "DEALCD", "CTSCBDEAL", "CTMOBYES", "CTAPPAXIS"]};
                            cleartrip(apis);
                        }

                        
                        else if (location.href === 'https://www.jabong.com/cart/') {
                            apis = {'jabong': ['HELLO', 'RUSH10', 'INT15', 'VISA25', 'INT100']}
                            jabong(apis);
                        }

                        else if (location.href === 'https://www.zivame.com/checkout') {
                            apis = {'zivame': ["GRAB10","GRAB300ZIV","DEC700","DEC450"]}
                            zivame(apis);
                        }

                        else if (location.href === 'https://www.swiggy.com/checkout') {
                            apis = {'swiggy': ["GRAB10","GRAB300ZIV","DEC700","DEC450"]}
                            swiggy(apis);
                        }

                        else if (location.href.search("bigbasket.com/co/checkout") > 0){
                            apis = {"bigbasket": ["BBKOTAK200","BBFIRST200","BBSWIG20","BBVISA200","BSAVED5","BBMC20","BBJIOMONEY","BBHDNB200"]};
                            bigbasket(apis);
                        }

                        else if (location.href === 'https://www.ajio.com/cart'){
                            apis = {'ajio': ["ABB300","AUDIO200","ICE","BAG500","AJIO300","DESI5K","DESI2K","AHIKE20","AW500","STOCKUP3","STOCKUP2","STOCKUP1","AGRAB300","BEST31","GLOBAL2K","AJIO1500","BOSE300"]}
                            ajio(apis);
                        }
                        
                        else if (location.href === 'https://www.reliancetrends.com/cart'){
                            apis = {'reliance': ["AW500"]}
                            reliance(ap);
                        }
                        
                        else if (location.href === 'https://checkout.firstcry.com/'){
                            apis = {'firstcry': [ "FC30CFF","JMD","DIAP10CB", "WHAT"]};
                            firstcry(apis);                    
                        }
                        
                        else if (location.href === 'https://www.koovs.com/checkout/cart'){
                            apis = {'koovs': [ "VIP60","DIAP10CB", "WHAT"]};  
                            koovs(apis);
                        }
                        
                        else if (location.href === 'https://www.clovia.com/view-cart/'){
                            apis = {'clovia': [ "CLOVIAVC100","CD100", "ONLINE5","WHAT","VCOM150OFF"]}; 
                            clovia(apis);
                        }
                        
                        else if (location.href === "https://www.lifestylestores.com/in/en/cart"){
                            apis = {'lifestyle': [ "CELEBRATIONS","EOSS15","FRESH15","WHAT"]}; 
                            lifestyle(apis);
                        }
                        
                        else if (location.href === "http://www.printvenue.com/checkout/cart"){
                            apis = {'printvenue': [ "PRINT30","PRINT40","PVSBI","ADMPRV","ALLEVENTS","PRE30","CART30","MOBILE100","DEAL1000","SAVE30","BIG200","EXPRTNE","FLAT15","FLAT800","PRINT60","PRINT20","REACT50","PVICICI30","Cashback200","PRINT50","FIRST50","SHIP"]}; 
                            printvenue(apis);
                        }
                        
                        else if (location.href.search("healthkart.com/cart/") > 0){
                            apis = {'healthkart': [ "CELEBRATIONS","ISOLATE50","WHAT","SITE200"]}; 
                            healthkart(apis);
                        }
                        
                        else if (location.href === "https://www.shoppersstop.com/login/checkout"){
                            apis = {'shopper': ["YES12","IND12","MC500","ICICI5","MC12","HDFC5","FEST2","PNB15","SBI15","AXIS10","ICICID","UBI15"]}; 
                            shopper(apis);
                        }
                        
                        else if (location.href === 'https://www.tatacliq.com/checkout/single'){
                            apis = {'tatacliq': ["SBISTYLE","DIAP10CB", "WHAT"]};
                            tatacliq(apis);
                        }
                        else if (location.href === 'https://paytmmall.com/cart'){
                            apis = {'paytm': ["FASH20","FASH25","FASH35","STYLE10","Shop50","MOVIEMALL400"]};
                            paytm(apis);
                        }
                        else if (location.host === 'secure.yatra.com') {
                            apisa = {'yatra': ["SBISTYLE","DIAP10CB", "WHAT"]};
                            yatra(apis);   
                        }
                        
                        else  if (location.href === "https://www.amazon.in/gp/buy/payselect/handlers/display.html?hasWorkingJavascript=1") {
                            apis = {'amazon': ["SBISTYLE","DIAP10CB", "WHAT"]}   
                            amazon(apis);
                        }
                        
                        else if (location.href.search("makemytrip") > 0){
                            apis = {"makemytrip": ["MMTGO", "HELLO","ABB300","AUDIO200","ICE","BAG500","AJIO300","DESI5K","DESI2K","AHIKE20","AW500","STOCKUP3","STOCKUP2","STOCKUP1","AGRAB300","BEST31","GLOBAL2K","AJIO1500","TYRETURN50","BOSE300"]};
                            //apis = {"makemytrip": ["MMTGO","TYRETURN50","IHDEAL","BESTBUY4"]};
                            makemytrip(apis);
                        }

                        else  if (location.href === "https://www.pepperfry.com/checkout/cart") {
                            apis = {'pepperfry': ["PFCPDN20P","PFOFFER3K","ICICIPF","ICICIED2","BSPKKIDS","PEPCPDN100A"]}   
                            pepperfry(apis);
                        }

                        else  if (location.href === "https://www.shein.in/index.php?model=order&action=place_order") {
                            apis = {'shein': ["NYY200","MCC200","YEP40","SHEI200","YEP15","YEP5","CMS200","NYY350","NYY620"]}   
                            shein(apis);
                        }

                        else  if (location.href === "https://www.fnp.com/control/order-summary") {
                            apis = {'freshnpetal': ["GRAB15PC","INDUS15FNP","FNP18KTK","RUPAY20","FNPCD100CK","FNPVCOMM200","FCD10AG","FNPVCOMM100","FNPGRAB15","FCD12RO","FCD150FDC","FCD10BG","FCD50LB","FCD15S","FCD500S","FNP20IC","FNP18HD","HSBCMALL15","FNPAMEX15","FNPRBL15","FA350BC","FCD12BSF","FCD10FB","FCD125BC","FCD100DC","GRAB200PDC"]}   
                            freshnpetal(apis);
                        }
                        

                        else if (location.href === window.localStorage.getItem("__jpuri").trim()) {
                            apis = {'zomato': ["VISA","KOTAK20","AXIS","MASTERCARD","GET150","EATIN"]}
                            zomato(apis);
                        }
                        

    }

    //apply_coupon();
    chrome.runtime.onMessage.addListener(function(e, t, n) {
            console.log(e);
            console.log(t);
            console.log(n);
            apply_coupon();
            });






    $(window).bind("load", function() {
            applier = function(){
                var button = document.getElementById("autoapply");
                if (button != null) {
                    button.addEventListener("click", function() {
                        apply_coupon();
                    }, false);
                }
            }
            
            let image = getResource("applycode.png");
            let button = "<a id='autoapply' href='javascript:void();'><img style='margin-left:40px;' src='" + image + "'></a>";

            if (location.href === "https://www.myntra.com/checkout/cart") {
                    $(".coupon-section").after(button); 
                        applier();     
                    }

            else if (location.href.search("cleartrip") > 0){
                    $('.couponHolder').before(button);  
                        applier();   
                    }

                        
            else if (location.href === 'https://www.jabong.com/cart/') {
                    document.getElementsByClassName("cart-summery clearfix row")[0].innerHTML = button + "<br><br>" + document.getElementsByClassName("cart-summery clearfix row")[0].innerHTML;
                    //$('.have-a-coupon text-uppercase').before(button);
                        applier();
                    }

            else if (location.href === 'https://www.zivame.com/checkout') {
                    document.getElementsByClassName("row mr-auto top-border-sp pd-lr20 fs-12")[0].innerHTML += button;
                        applier();       
                    }

            else if (location.href === 'https://www.swiggy.com/checkout') {
                    document.getElementsByClassName("menu-cart-body")[0].innerHTML += button; 
                        applier();     
                    }

            else if (location.href.search("bigbasket.com/co/checkout") > 0){
                    document.getElementsByClassName("col-md-6 col-sm-5 col-xs-12")[0].innerHTML += button;     
                        applier(); 
                    }

            else if (location.href === 'https://www.ajio.com/cart'){
                    $('.fnl-cart-ordsmry').after(button);      
                        applier();
                    }
                        
            else if (location.href === 'https://www.reliancetrends.com/cart'){
                    $('.fnl-cart-ordsmry').after(button);      
                        applier();
                    }
                        
            else if (location.href === 'https://checkout.firstcry.com/'){
                    $('#popupCoupon').after(button);                         
                        applier();
                    }
                        
            else if (location.href === 'https://www.koovs.com/checkout/cart'){
                    $('.bag-coupon').after(button);                         
                        applier();    
                    }
                        
            else if (location.href === 'https://www.clovia.com/view-cart/'){
                     $('.cupn').after(button);                         
                        applier();       
                    }
                        
            else if (location.href === "https://www.lifestylestores.com/in/en/cart"){
                    $('.message gift-holder shopping-actions-gift').after(button);                         
                        applier();
                    }
                        
            else if (location.href === "http://www.printvenue.com/checkout/cart"){
                    console.log("asdjashda");
                    $('.add-cart-code').after(button);                         
                        applier();
                    }
                        
            else if (location.href.search("healthkart.com/cart/") > 0){
                    $('.coupn-container').after(button);                         
                        applier();   
                     }
                        
            else if (location.href === "https://www.shoppersstop.com/login/checkout"){
                    $('#-user-coupons-id').after("<br>" + button);                         
                        applier();         
                    }
                        
            else if (location.href === 'https://www.tatacliq.com/checkout/single'){
                    document.getElementsByClassName("coupon block")[0].innerHTML += "<br>"+button;                        
                        applier();   
               
                    }

            else if (location.href === 'https://paytmmall.com/cart'){
                    $('._3k3f').after(button);                         
                        applier();
                           
                    }
            else if (location.host === 'secure.yatra.com') {
                    $('.box-content aside-box-content hide-under-overlay').after(button);                         
                        applier();   
         
                    }
                        
            else  if (location.href === "https://www.amazon.in/gp/buy/payselect/handlers/display.html?hasWorkingJavascript=1") {
                            
                    }
                        
            else if (location.href.search("makemytrip") > 0){
                    
                    if (location.href.search("bus.makemytrip.com") > 0){
                        document.getElementsByClassName("section_box append_bottom16 clearfix")[0].innerHTML += button;
                        }
                    else if (location.href.match("mmthtl/site/hotels")){
                        document.getElementsByClassName("htR-payment-sctn text-center")[0].innerHTML += "<br>"+button; 
                        }
                    else if (location.host === 'flights.makemytrip.com') {
                        document.getElementsByClassName("section_box apply_discount  append_bottom10 clearfix")[0].innerHTML += "<br>"+button;
                        }   
                        applier(); 
                           
                    }

            else  if (location.href === "https://www.pepperfry.com/checkout/cart") {
                    $('.ck-cpn-input-wrap').after("<br>"+button);
                        applier(); 

                    }

            else  if (location.href === "https://www.shein.in/index.php?model=order&action=place_order") {
                    document.getElementsByClassName("cart-order-summary-item cart-checkout-coupon")[0].innerHTML += "<br>"+button;
                        applier();
                            
                    }

            else  if (location.href === "https://www.fnp.com/control/order-summary") {
                    $('.medium-6 large-6 columns coupan').after(button);
                        applier();
                            
                    }

            else if (location.host === "www.zomato.com") {
                    $("#promo_code").eq(0).before(button);
                         applier(); 
  
                    }




    });


       
            


