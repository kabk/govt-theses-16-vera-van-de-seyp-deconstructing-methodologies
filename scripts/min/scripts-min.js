function logThesis(){console.log($(".landing-page .name-print").text()),console.log("_________________________________________________________________________________________________________________________________________________________\n\n\n"),$("chapter").each(function(){console.log($(this).find("\n\n\n .name-print").text()),console.log($(this).find("text").text()),console.log("_________________________________________________________________________________________________________________________________________________________\n\n\n")})}function showPercentage(){for(var t=$(document).height(),e=100,n=0,o=t/e,i=0;e>i;i++)$(".percentage-line").append("<percent> <p>"+n+"% </p></percent>"),n++;$(".percentage-line").css({height:t}),$("percent").css({height:o})}function hideReferences(){$("#toggleReferences").click(function(){$("references").fadeToggle()})}function hideImages(){$("#toggleImages").click(function(){$("images").fadeToggle()})}function setHeightContent(){$(window).width()>1050?$("content").each(function(){var t=$(this).height();$(this).children().css({height:t})}):$(window).width()<1049&&$(window).width()>768?$("content").each(function(){var t=$(this).height();$(this).children().css({height:"100%"});var e=$(this).children("text").height();$(this).children("references").css({height:e})}):$("content").children().css({height:"auto"}),$("section.full-height").css($(window).width()>768?{height:$(window).height()}:{height:$(window).width()}),$(".landing-page").css({width:$(window).width(),height:$(window).height()})}function placeReferences(t){$("text#intro a").each(function(){var e=$(this).attr("href"),n=e.substring(1,e.length),o=$(this).position().top-15,i=$(".reference.intro"+e),_="<l>"+n+":  </l>"+$(e).html();0==t&&($(e).html(_),$(this).text(n)),$(e).css($(window).width()>768?{position:"relative",top:o+"px"}:{position:"relative",top:"0px"})}),$("text#ch-1 a").each(function(){var e=$(this).attr("href"),n=e.substring(1,e.length),o=$(this).position().top-15,i=$(".reference.ch-1 "+e),_="<l>"+n+":  </l>"+$(e).html();0==t&&($(e).html(_),$(this).text(n)),$(e).css($(window).width()>768?{position:"absolute",top:o+"px"}:{position:"relative",top:"0px"})}),$("text#ch-2 a").each(function(){var e=$(this).attr("href"),n=e.substring(1,e.length),o=$(this).position().top-15,i=$(".reference.ch-2 "+e),_="<l>"+n+":  </l>"+$(e).html();0==t&&($(e).html(_),$(this).text(n)),$(e).css($(window).width()>768?{position:"absolute",top:o+"px"}:{position:"relative",top:"0px"})}),$("text#ch-3 a").each(function(){var e=$(this).attr("href"),n=e.substring(1,e.length),o=$(this).position().top-15,i=$(".reference.ch-3"+e),_="<l>"+n+":  </l>"+$(e).html();0==t&&($(e).html(_),$(this).text(n)),$(e).css($(window).width()>768?{position:"absolute",top:o+"px"}:{position:"relative",top:"0px"})})}function scrollToReferences(t){$("text a").click(function(t){if(t.preventDefault(),$(window).width()<768){var e=$(this).attr("href"),n=$(e).offset().top-30;$(document).scrollTo(n,800)}else{var e=$(this).attr("href");$(e).fadeOut("fast",function(){$(e).fadeIn("fast",function(){})}),$(document).scrollTo(n,800)}})}function scrollToText(t){$(".reference").click(function(t){if(t.preventDefault(),$(window).width()<768){var e=$(this).attr("href"),n=$(e).offset().top-30;$(document).scrollTo(n,800)}else{var e=$(this).attr("href");$(e).fadeOut("fast",function(){$(e).fadeIn("fast",function(){})})}})}function viewCode(){var t=$("span.xml").text(),e=$(".code-view");e.html(t)}function randColor2(){var t=Math.floor(50*Math.random()),e=Math.floor(2*Math.random())+1;if(1==e)var n=255-2*t,o=255-2*t,i=255;else if(2==e)var n=0,o=0,i=255-t;else var n=255-t/5,o=255-t/5,i=255;return"rgb("+n+","+o+","+i+")"}function showContentMode(t){$("#showContent").click(function(){0==t?($("*").each(function(){var t=randColor2();$(this).css({"background-color":t})}),$(this).css({color:"blue"}),t=!0):($("*").each(function(){$(this).css({"background-color":"initial"})}),$("body").css({"background-color":"#FAFAFA"}),$("header").css({"background-color":"#FAFAFA"}),$(this).css({color:"#999"}),t=!1)})}function killContent(){$("#kill").click(function(){$("body").jGravity({target:"everything",weight:125,depth:4,drag:!0}),$("text").jGravit({target:"everything",weight:125,depth:4,drag:!0})})}function showTextOnly(){$("#showTextOnly").click(function(){var t=$("*").text();$("body").css({display:"none"}),$("html").text(t)})}function setImageDistance(){$(window).width()>768&&$("images").each(function(){var t=$(this).height(),e=$(this).children(".side-image-container").length,n=t/e,o=0,i=0;$(this).children(".side-image-container").each(function(){i+=$(this).height();var e=(t-i)/n;$(this).css({position:"relative","margin-top":e}),o++}),console.log(e)})}function placeImages(){$(".broad c").each(function(){var t=$(this).attr("href"),e=$(this).offset().top,n=$(".image-block ."+t);$("."+t).css({"margin-top":e+"px"})})}function scrollToChapter(){var t=$(window).scrollTop(),e=40,n=$("#Introduction").offset().top-e,o=$("#Chapter1").offset().top-e,i=$("#Chapter2").offset().top-e,_=$("#Chapter3").offset().top-e,s=$("#Conclusion").offset().top-e,c=$("#Colophon").offset().top-e,h=$("#Footer").offset().top-e,r="blue",l=$(".wrap").height(),a=$(".chapter-title"),f=$(".menu-link");t<$(window).height()||0==t?($("header").css({display:"none"}),$(".menu").css({display:"none"})):$("header").css({display:"block"}),t>=n&&o>t?(a.text("The extension of man"),$(".menu-link:nth-child(2)").css({color:r}),$(".menu-link:not(:nth-child(2))").css({color:"#999"})):t>=o&&i>t?(a.text("The conflicts of new media"),$(".menu-link:nth-child(3)").css({color:r}),$(".menu-link:not(:nth-child(3))").css({color:"#999"})):t>=i&&_>t?(a.text("A brave new world"),$(".menu-link:nth-child(4)").css({color:r}),$(".menu-link:not(:nth-child(4))").css({color:"#999"})):t>=_&&s>t?(a.text("Literacy"),$(".menu-link:nth-child(5)").css({color:r}),$(".menu-link:not(:nth-child(5))").css({color:"#999"})):t>=s&&c>t?(a.text("A New Kind of Print"),$(".menu-link:nth-child(6)").css({color:r}),$(".menu-link:not(:nth-child(6))").css({color:"#999"})):t>=c&&t<Footer&&(a.text("Colophon"),$(".menu-link:nth-child(7)").css({color:r}),$(".menu-link:not(:nth-child(7))").css({color:"#999"}))}function showMenu(t){$(".header-stuff:nth-of-type(1)").click(function(){$(".menu").toggle(),0==t?($(this).css({color:"blue"}),t=!0):($(this).css({color:"#999"}),t=!1)})}function scrollPage(t){$("a.menu-link").click(function(){t.preventDefault;var e=$(this).attr("href"),n=$(e).offset().top-50;$(document).scrollTo(n,800)})}function showVisitTime(){var t=0;setInterval(function(){++t,$(".visit-time").text("You've been here for "+t+" seconds")},1e3)}function showBrowserSystem(){var t,e=navigator.userAgent,n=navigator.appCodeName,o=navigator.cookieEnabled,i=navigator.language,_=navigator.appVersion.substr(0,4),s=navigator.appVersion.match(/(\()(.*?)(?=\))/g)[0].replace("(",""),c=s.indexOf(";"),h=s.substr(0,c),r=s.substring(c+1);"a"==h.substring(0,1)||"i"==h.substring(0,1)||"o"==h.substring(0,1)?(t="n",console.log("YEP")):t="",$(".computer").text("Your device is a"+t+" "+h),$(".os").text("The version you use is "+r),$(".cookies").text("Cookies are enabled:  "+o),$(".language").text("Browser language is "+i),$(".browserversion").text("Browser language is "+_)}function showTime(){setInterval(function(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),o=(10>n?"0":"")+n+"-"+(10>e?"0":"")+e+"-"+t.getFullYear(),i=new Date($.now()),_=new Date,s=_.getHours();10>s&&(s="0"+s);var c=_.getMinutes();10>c&&(c="0"+c);var h=_.getSeconds();10>h&&(h="0"+h);var r=s+":"+c+":"+h;$(".date").text("Today is "+o),$(".time").text("It is "+r)},1e3)}$(document).ready(function(){logThesis(),showContentMode(!1),setHeightContent(),placeReferences(!1),scrollToText(event),scrollToReferences(event),scrollPage(event),hideReferences(),hideImages(),showPercentage(),showMenu(!1),killContent(),showTextOnly(),viewCode(),scrollToChapter(),showTime(),showVisitTime(),showBrowserSystem(),$("img.side-image").lazyload(),$("header").click(function(){$("pre").css({width:$(window).width(),height:$(window).height(),"margin-left":"-50%"}),console.log($("body").text())}),$(".code-block").keyup(function(){viewCode()}),$("#Landing").focus()}),$(window).resize(function(){setHeightContent(),placeReferences(!0),showPercentage()}),$(document).on("scroll",function(){scrollToChapter()});