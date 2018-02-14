// $("body").on("click", "button.Apply-Best-Coupon", function() {
//         console.log("Click Click")
        
//         chrome.tabs.query({
//             currentWindow: !0,
//             active: !0
//         }, function(e) {
//             var t = e[0];
//             chrome.tabs.sendMessage(t.id, {
//                 source: 'Popup',
//                 purpose: 'Apply-Best-Coupon',
//                 data: {
//                     ping: !0
//                 }
//             });
//         });
//     });


(function(angular) {
     'use strict';   
     // module setup-------------
     var extensionApp = angular.module('everydime', ['ui.bootstrap']);
     
     // API Url-------------
     extensionApp.constant('config', {   
          apiUrl: "http://13.126.104.228:8088",
          enableDebug: true
     });
     
     // HTML to text convert filter---------
     extensionApp.filter('html', ['$sce', function($sce) {
          return function(input){
               return $sce.trustAsHtml(input);
          }
     }]);
     
     // API default Header--------------------
     extensionApp.config(['$httpProvider', function ($httpProvider) {
          $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
     }]);
     
     // Directive for validate email address--------------------
     extensionApp.directive('validateEmail', function() {
          var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return {
               require: 'ngModel',
               restrict: '',
               link: function(scope, elm, attrs, ctrl) {
                    if (ctrl && ctrl.$validators.email) {
                         ctrl.$validators.email = function(modelValue) {
                              return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                         };
                    }
               }
          };
     });
     
     extensionApp.controller('commonController', ['$http', '$timeout', 'config', function($http, $timeout, config){

          var vm = this;
          vm.currency = '&#x20B9;'; 
          vm.__session = localStorage.getItem("__session");
          vm.__uid = localStorage.getItem("__uid");
          
          // Onclick of extenstion show and update coupon page accroding to merchant name------------------------
          vm.initDefaultCoupons = function(){
            vm.coupons_load = false;
            chrome.tabs.getSelected(null,function(tab) {
              var current_tab_url = tab.url;
              var merchant_url = new URL(current_tab_url).hostname;
              var url_array = merchant_url.split('.');
              var url_array_length = url_array.length;
              if(url_array[url_array_length - 2] == undefined){
                 var merchant_name = 'default';
            }
            else
            {
                var merchant_name = url_array[url_array_length - 2];
           }

           vm.merchant_name_check = merchant_name.toUpperCase();;

           $http({
               url: config.apiUrl+'/api/coupons/',
               method: "POST",
               data: $.param({"user_id": vm.__uid, "session_key": vm.__session, "merchant": merchant_name})
          })
           .then(function(response) {
              vm.coupons = response.data.offers;
              vm.coupons_load = true;
         }, 
         function(error) { 

         });

      });

       };
       vm.initDefaultCoupons();
       
       // Onclick copy coupon code------------------------
       vm.copyCoupon = function(coupon){
          var copyElement = document.createElement("textarea");
          copyElement.style.position = 'fixed';
          copyElement.style.opacity = '0';
          copyElement.textContent = coupon.code;
          var body = document.getElementsByTagName('body')[0];
          body.appendChild(copyElement);
          copyElement.select();
          document.execCommand('copy');
          body.removeChild(copyElement);
          vm.copy_text = "Copied";
          vm.offer_code_check = coupon.code;
          $timeout(function(){
             vm.copy_text = "";
          }, 2000)
     };
     
     // Merchant list API for search------------------------
     vm.merchantList = function(){
         $http({
          url: config.apiUrl+'/api/search_list/',
          method: "POST",
          data: $.param({"user_id": vm.__uid, "session_key": vm.__session})
     })
         .then(function(response) {
              vm.merchant_list = response.data.list_of_merchant;
              vm.startsWith = function(state, viewValue) {
                return state.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
           } 
      }, 
      function(error) { 

      });
    };
    
    // Coupon page update when use select a merchant name from search list------------------------
    vm.onSelectMerchant = function(merchant){
     vm.coupons_load = false;
     $http({
          url: config.apiUrl+'/api/coupons/',
          method: "POST",
          data: $.param({"user_id": vm.__uid, "session_key": vm.__session, "merchant": merchant})
     })
     .then(function(response) {
         vm.coupons = response.data.offers;
         vm.coupons_load = true;
    }, 
    function(error) { 

    });
}

// Login code------------------------
vm.loginSubmit = function(request_login){
     $http({
          url: config.apiUrl+'/login/',
          method: "POST",
          data: $.param(request_login)
     })
     .then(function(response) {
         if(response.data.status == 200){
              localStorage.setItem("__session", response.data.session_key);
              localStorage.setItem("__uid", response.data.user_id);
              localStorage.setItem("__emailid", response.data.email);
              vm.__session = localStorage.getItem("__session");
              vm.__uid = localStorage.getItem("__uid");
         }
         else{
            vm.errorMsg = response.data.info;
         }
    }, 
    function(error) { 

    });

};

// Logout code------------------------
vm.logoutSubmit = function(){
     $http({
          url: config.apiUrl+'/logout/',
          method: "POST",
          data: $.param({"user_id": vm.__uid, "session_key": vm.__session})
     })
     .then(function(response) {
         localStorage.removeItem("__session");
         localStorage.removeItem("__uid");
         localStorage.removeItem("__emailid");
         vm.__session = undefined;
         vm.__uid = undefined;
    }, 
    function(error) { 

    });
};

// Update redirect localstorage when user login-------------------------
vm.initLoginSuccess = function(){
     vm.email = localStorage.getItem("__emailid");
     $http({
          url: config.apiUrl+'/api/track/',
          method: "POST",
          data: $.param({"user_id": vm.__uid, "session_key": vm.__session})
     })
     .then(function(response) {
         localStorage.setItem("redirects", JSON.stringify(response.data.data));
    }, 
    function(error) { 

    });
};


// wallet and transaction api call-------------------------
vm.profile = function(){
     $http({
          url: config.apiUrl+'/api/wallet/',
          method: "POST",
          data: $.param({"user_id": vm.__uid, "session_key": vm.__session})
     })
     .then(function(response) {
          vm.wallet = response.data.wallet;
     }, 
     function(error) { 

     });

     $http({
          url: config.apiUrl+'/api/transaction/',
          method: "POST",
          data: $.param({"user_id": vm.__uid, "session_key": vm.__session})
     })
     .then(function(response) {
          vm.transactions = response.data.transactions;
     }, 
     function(error) { 

     });



};
vm.click = function() {
        console.log("Click Click")
        
        chrome.tabs.query({
            currentWindow: !0,
            active: !0
        }, function(e) {
            var t = e[0];
            chrome.tabs.sendMessage(t.id, {
                source: 'Popup',
                purpose: 'Apply-Best-Coupon',
                data: {
                    ping: !0
                }
            });
        });
    }


}]);

})(window.angular);



