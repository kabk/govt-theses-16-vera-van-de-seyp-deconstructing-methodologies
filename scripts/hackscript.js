 //  COLOR PICKER
function pickColor() {
	 $('.colorSelector').ColorPicker({
	 	color: '#0000ff',
	 	onShow: function (colpkr) {
	 		$(colpkr).fadeIn(500);
	 		return false;
	 	},
	 	onHide: function (colpkr) {
	 		$(colpkr).fadeOut(500);
	 		return false;
	 	},
	 	onChange: function (hsb, hex, rgb) {
	 		$('.colorSelector').css('backgroundColor', '#' + hex);
	 	}
	 });
 }

 //  HACK METADATA

  var ip;
  var lttd;
  var lngtd;
  var cntr;

  $.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) { 
    lttd = data.latitude;
    lngtd = data.longitude;
    cntr = data.address.country; 
    continent = data.address.continent_code;
    city = data.address.city;
    
    if( lttd  > 0 ) {
        var latName = "N";
    } else {
        var latName = "S";
    }

    if( lngtd > 0 ) {
        var longName = "E";
    } else {
        var longName = "W";
    }

    $('.ip').text("Your IP adress is " +ip);
    $('.coordinates').text( "Your coordinates are " +  lttd + ", " + lngtd + " " + latName + longName );
    $('.location').text("Your current location is "  + cntr + ", " + continent);
  });

  function showVisitTime() {
    var counter = 0;
    setInterval(function () {
      ++counter;
      $('.visit-time').text( "You've been here for " +  counter + " seconds" );
    }, 1000);
  }


function showBrowserSystem() {
    var n;
    var ua = navigator.userAgent;
    var un = navigator.appCodeName;
    var cookies = navigator.cookieEnabled;
    var language = navigator.language;
    var version = navigator.appVersion.substr(0, 4); 
    var OS = navigator.appVersion.match( /(\()(.*?)(?=\))/g )[0].replace('(', '');
    var split = OS.indexOf(';');
    var computer = OS.substr( 0, split );
    var os = OS.substring(split + 1);

    if( computer.substring(0,1) == 'a' || computer.substring(0,1) == 'i' || computer.substring(0,1) == 'o' ) {
        n = 'n';
        console.log( "YEP");
    } else {
        n = '';
    }

    $('.computer').text( "Your device is a" + n + " " + computer);
    $('.os').text("The specific version you use is " + os );
}


function showTime() {
    setInterval( function() { 
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var date = 
            (day<10 ? '0' : '') + day + '-' +
            (month<10 ? '0' : '') + month + '-' +
            d.getFullYear() ;
            
        var time = new Date($.now());

        var currentdate = new Date(); 

        var hours = currentdate.getHours();
        if( hours<10 ){ hours = '0' + hours};
        var minutes = currentdate.getMinutes();
        if( minutes<10 ){ minutes = '0' + minutes};
        var seconds  = currentdate.getSeconds();
        if ( seconds<10 ){ seconds = '0' + seconds};

        var datetime =    hours + ":"  
                        + minutes + ":" 
                        + seconds;

        $(".date").text( "Today is " + date );
        $(".time").text( "It is " +  datetime );
    }, 1000);
}




function invertPage() {
	var clickPoint = $('.align-right');
	var white = true;
	clickPoint.on('click', function() {
		if( white ) {
			$('body').css({
				"background-color" : "black",
			});
			$('*').css({
				"color" : "white",
			});

			white = false;
		} else {
			$('body').css({
				"background-color" : "white",
			});
			$('*').css({
				"color" : "black",
			});
			white = true;
		}
	});
}

function textEdit() {
        if (window.getSelection) {
            console.log( window.getSelection() );
        }
        else if (document.getSelection) {
            console.log( document.getSelection() );
        }
        else {
            var selection = document.selection && document.selection.createRange();
            if (selection.text) {
                console.log( selection.text );
            }
            return false;
        }
        return false;
    };


function placeReferences() {
	$('.broad a').each( function() {
		var broadText = $(this).attr('href');
		var offsetText  = $(this).offset().top;
		var reference = $('.reference .' + broadText);
		var referenceText =  '<tag class="blue">' + broadText + '.</tag>' + $('.' + broadText).text();
		$('.' + broadText).html( referenceText );

		var text = $(this).text();
		$(this).html( text + '<tag class="blue">' + broadText +'</tag>' )

		$('.' + broadText ).css({
			"top" : offsetText -95 + "px",
		})
	});
}

function placeImages() {
	$('.broad c').each( function() {
		
		var imageReference = $(this).attr('href');
		var referenceOffset  = $(this).offset().top;
		var image = $('.image-block .' + imageReference);

		$( '.' + imageReference ).css({
			"top" : referenceOffset + 5 + "px",
		});
	});
}


function headerInteraction() {
	$('.red').click( function() {
		console.log( 'hi there ');
		alert('Are you sure you want to close this window?');
	});
	$('.yellow').click( function() {
		console.log( 'hi there ');

		alert('Are you sure you want to close this window?');
	});
	$('.green').on('mouseup', function() {
		var thisBlock = $(this).closest('.block');
		if( thisBlock.hasClass('isbig')) {
			thisBlock.addClass('issmall');
		} else {
			$(thisBlock).addClass('isbig');

		}
		console.log(thisBlock);
		// $('.block').removeClass('isbig');
		$('.isbig').animate({
			"width" : "100%",
			"height" : "100%",
			"left" : "0",
			"top" : "0"

		});

		$('.issmall').animate({
			"width" : "600px",
			"height" : "520px"
		});
	});
	
	
}

function showLandingPage() {
	$(document).keypress( function(e) {	
		if( e.keyCode == 13) {
			$('.landing-page').animate({
				'opacity' : "0"
			}, 1000);

			$('.landing-page').promise().done(function() {  
				$('.landing-page').css({
					"display" : "none",
				});
				
			});
		} 
	});
}


function setImageHeight() {
	$('.image-block ').each( function() {
		var imageHeight = $(this).children('img').height();
		$(this).css({
			'height' : imageHeight + 25 + 'px',
			'opacity' : '1'

		})
	});
}

function setPassword() {
	$('.password').on( 'keyup', function() {
		var string = $(this).text(); 
		var lastChar = string.substr(string.length - 1);

		var password = $('.your-password').text() + lastChar;
		$(".your-password").text("Your password is " + password);
		
		var newString = "*";

		for( var i = 1; i < string.length; i++  ) {
			newString = newString + "*";
		} 
		$(this).text(  newString );

		if( string.length > 6 ) {
			alert( "Password is too long! Start again.");
			$(this).text(  '' );
		}

	})
}

function shuffleZIndex() {
	var boxes = $(".block");
	// Set up click handlers for each box
	boxes.click( function() {
	 
		$('.block').removeClass('high');
		$(this).addClass('high');
 	}); 

 	$( '.high').css({
 		"z-index" : "500",
 	});

 	$('.block:not(.high)').css({
 		"z-index" : '10',
 	});
}



$(window).load( function() {
	setImageHeight();
});

$(document).ready( function() {
 	
 	showLandingPage()

	invertPage();
	placeReferences();
	placeImages();
	headerInteraction(); 

	showTime();
	showVisitTime();
	showBrowserSystem();
	setPassword();

	$('.block').on( 'click', function() {
		shuffleZIndex();

	});

	$(function() {
	   $( ".draggable" ).draggable({ scroll: false, handle: ".header"  });
	});

	aloha.dom.query('.editable', document).forEach( aloha );

	for (var command in aloha.ui.commands) {
	    $('.action-' + command).on('click',
	        aloha.ui.command(aloha.ui.commands[command])
	    );
	}
	$('.colorSelector').on( 'click', function() {
		pickColor();

	})

});







// $('.text-field').bind( 'mouseup', function() {

// 	textEdit();

// })
