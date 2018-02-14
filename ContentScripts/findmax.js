findMax = function(array) {
        return array.reduce((prev, current) =>
            (parseFloat(prev.discount) > parseFloat(current.discount)) ? prev : current);
    }


function checkContainer(your_function, classname) {
  
  if($('.' + classname).is(':visible')){ //if the container is visible son the page
    console.log('passed' + classname);  //Adds a grid to the html
    your_function();
  } else {
    setTimeout(function() {
    checkContainer(your_function, classname)
}, 50); //wait 50 ms, then try again
  }
}

checkContainerForID = function(your_function, id_name) {
  
  if($('#' + id_name).is(':visible')){ //if the container is visible son the page
    console.log('passed' + id_name);  //Adds a grid to the html
    your_function();
  } else {
    setTimeout(function() {
    checkContainerForID(your_function, id_name)
}, 50); //wait 50 ms, then try again
  }
}

checkContainerNotExistingForID = function(your_function, id_name) {
  
  if($('#' + id_name).is(':hidden')){ //if the container is visible son the page
    console.log('hidden passed' + id_name);  //Adds a grid to the html
    return your_function();
  } else {
    setTimeout(function() {
    checkContainerForID(your_function, id_name)
}, 50); //wait 50 ms, then try again
  }
}

function addContainer(array) {
            let div = document.createElement("div");
            div.id = 'coupon'
            div.style.color = 'white';
            div.style.fontSize = '25px';
            div.style.textAlign = 'center';
            div.style.background = 'darkcyan';
            div.style.height = '50px';
            div.style.paddingTop = '10px';
            div.style.position = 'sticky';
            div.style.width = '100%';
            div.style.top = '0';
            div.style.left = '0';
            div.style.zIndex = '999999999999999999';


            div.innerHTML = `Best coupon <span class='text-success'><strong><i> ${array.couponCode}</i></strong> </span> and Maximum Discount is 
                             <span class='text-success'><strong><i>${array.discount}</i></strong> </span> 
                            `;
            $('body').prepend(div);
        }



function getWindowsVariablesss(variables) {
            let ret = {};

            let scriptContent = "";
            for (let i = 0; i < variables.length; i++) {
                let currletiable = variables[i];
                scriptContent += "if (typeof " + currletiable + " !== 'undefined') $('body').attr('tmp_" + currletiable + "', JSON.stringify(" + currletiable + "));\n"
            }

            let script = document.createElement('script');
            script.id = 'tmpScript';
            script.appendChild(document.createTextNode(scriptContent));
            (document.body || document.head || document.documentElement).appendChild(script);

            for (let i = 0; i < variables.length; i++) {
                let currletiable = variables[i];
                ret[currletiable] = $.parseJSON($("body").attr("tmp_" + currletiable));
                $("body").removeAttr("tmp_" + currletiable);
            }

            $("#tmpScript").remove();

            return ret;
        }



function getCookie(c_name) {
        if(document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if(c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if(c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return "not found";
    
}

var boomboom = function(sam) {
      if (typeof sam != "undefined" && sam != "") {
        var dos = (sam.split("$").length - 1);
        if (dos > 1) {
          return sam = sam.split("$").slice(1)[0]
        } else {
          var sod = (sam.split("Rs.").length - 1);
          if (sod > 0) {
            return sam = sam.split("Rs.")[1]
          } else {
            return sam
          }
        }
      }
    };

 var floist=function(num){
 
 num = num.toString(); 
num = num.slice(0, (num.indexOf("."))+3); 
num=Number(num);
return num;
 
 }
 
 function perce(ap,bp){
 
 pers=((parseInt(ap)-parseInt(bp))/parseInt(ap))*100;
 
 return floist(pers);
 }


 function getResource(name){
  return chrome.extension.getURL(name);
}

 
 function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}
 function uniq(a) {
  return a.sort().filter(function(item, pos, ary) {
    return !pos || item != ary[pos - 1];
  })
}
  function sembu(don) {
            var bon = document.createElement("script");
            bon.textContent = decodeURI(don);
            (document.head || document.documentElement).appendChild(bon);
            bon.parentNode.removeChild(bon);
        }
 
 var coolguy=function(anil){
 
 if (typeof anil != "undefined") {
                anil = anil.replace(/[^0-9.]/g, "");
                anil = anil.trim()
              } else {
                anil = ""
              };
              return anil;
 }
var sorry = 1



function grabmodal(){

    var logo = getResource("On.png");
    var close = getResource("close.png");
    var charac = getResource("charac-r-s.png");
    var success = getResource("charac-success.png");
    var on1 = getResource("on1.png");
    var fclose = getResource("f-close.png");
    var empty = getResource("empty-box.png");


    $('body').append('<div class="md-modal md-effect-1 md-show grb-mdl" id="modal-1"><div class="md-content"><div class="gextension-content ge-going" id="modalBody"><a href="javascript:void(0);" id="close"><img src="'+close+'"></a><div class="ge-top"><p>Sit Back &amp; Enjoy! <br/>While We Apply The Best Coupon For You</p><p class="gapply">We Have some best coupons for you.</p></div><div class="gbtn" id="modalBtn"><div class="ring"></div><i class="gb-a-apply">Auto Apply Starting</i></div><div id="monprice" class="savedstats"></div><img src="'+charac+'" class="ge-s"><img src="'+success+'" class="ge-p"><div class="path"><img src="'+on1+'" class="img1"><img src="'+on1+'" class="img2"><img src="'+on1+'" class="img3"></div></div><div class="fail"><a href="javascript:void(0);" id="close2"><img src="'+fclose+'"></a><div class="fimg"><img src="'+empty+'"></div><div class="fcontent"><p>No Coupons Found!</p><span class="fbtn">Oppsie Daisy :(</span><div class="fextra"><p>We couldn\'t find the best coupons.</p><p>But worry not, we are adding verified coupons <br/>as we speak. We’ll be back strong :)</p></div><a href="javascript:void(0);" id="cwindow">Close Window</a></div></div></div></div><div class="md-overlay"></div>');

    var closethis = document.getElementById("close");
      closethis.addEventListener("click", function(){
       
        //     localStorage.setItem("hibro", "one");
        // localStorage['found']=0;
        //     var ghk=localStorage.getItem("hibro");
            
      $('#modal-1').remove(); 
      sorry=0;
      


        
        }, false);

}
