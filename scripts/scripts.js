
            function logThesis() {


                console.log( $('.landing-page .name-print').text() );
                console.log("_________________________________________________________________________________________________________________________________________________________\n\n\n")

                $("chapter").each( function() {
                    // console.log("–––––––––––– " + $(this).find('chapternumber').text() + " ––––––––––––");

                    console.log($(this).find('\n\n\n' + ' .name-print').text());

                    console.log( $(this).find('text').text() );
                    console.log("_________________________________________________________________________________________________________________________________________________________\n\n\n")

                });

            }

            function showPercentage() {
                var height = $(document).height();
                var steps = 100;
                var nr = 0;
                var stepHeight = height/steps;

                for( var i = 0; i < steps; i++ ) {
                    $('.percentage-line').append('<percent> <p>' + nr +'% </p></percent>' )
                    nr++;
                }

                $('.percentage-line').css({
                    "height" : height
                });

                $('percent').css({
                    "height" : stepHeight,
                })
            }

            function hideReferences() {
                $("#toggleReferences").click( function() {
                    $('references').fadeToggle();
                })
            }

            function hideImages() {
                $("#toggleImages").click( function() {
                    $('images').fadeToggle();
                })
            }

            function setHeightContent() {
                if( $(window).width() >  1050 ) {
                    $('content').each( function() {
                        var totalHeight =  $(this).height();
                        $(this).children().css({ "height" : totalHeight  });
                    });
                } else if ( $(window).width() < 1049 && $(window).width() > 768  ){
                    $('content').each( function() {
                        var totalHeight =  $(this).height();
                        $(this).children().css({ "height" : '100%'});
                        var textHeight = $(this).children('text').height();
                        $(this).children('references').css({
                            "height" : textHeight,
                        });
                    });
                } else {
                    $('content').children().css({ "height" : 'auto' });
                }
                if( $(window).width() > 768 ){
                    $('section.full-height').css({
                        'height' : $(window).height(),
                    })
                } else  {
                    $('section.full-height').css({
                        'height' : $(window).width(),
                    })
                }

                $('.landing-page').css({
                    'width' : $(window).width(),
                    'height' : $(window).height()
                })

                $('.full-page-section').css({
                    'width' : $(window).width(),
                    'height' : $(window).height()
                })
            }

            function placeReferences(loaded) {
                $('text#intro a').each( function() {
                    var broadText = $(this).attr('href');
                    var number = broadText.substring(1, broadText.length);
                    var offsetText  = $(this).position().top - 15 ;
                    var reference = $('.reference.intro' + broadText);
                    var referenceText =  '<l>' + number + ':  </l>' + $(broadText).html();

                    if(  loaded == false ) {
                        $(broadText).html( referenceText );
                        $(this).text(number);
                    }

                    if( $(window).width() > 768 ) {
                        $( broadText ).css({
                            "position" : "relative",
                            "top" : offsetText + "px",
                        });
                    } else {
                        $(broadText ).css({
                            "position" : "relative",
                            "top" : "0px",
                        });
                    }
                });
            
                $('text#ch-1 a').each( function() {
                    var broadText = $(this).attr('href');
                    var number = broadText.substring(1, broadText.length);
                    var offsetText  = $(this).position().top - 15 ;
                    var reference = $('.reference.ch-1 ' + broadText);
                    var referenceText =  '<l>' + number + ':  </l>' + $(broadText).html();

                    if(  loaded == false ) {
                        $(broadText).html( referenceText );
                        $(this).text(number);
                    }

                    if( $(window).width() > 768 ) {
                        $( broadText ).css({
                            "position" : "absolute",
                            "top" : offsetText + "px",
                        });
                    } else {
                        $(broadText ).css({
                            "position" : "relative",
                            "top" : "0px",
                        });
                    }
                });
    

                $('text#ch-2 a').each( function() {
                    var broadText = $(this).attr('href');
                    var number = broadText.substring(1, broadText.length);
                    var offsetText  = $(this).position().top - 15 ;
                    var reference = $('.reference.ch-2 ' + broadText);
                    var referenceText =  '<l>' + number + ':  </l>' + $(broadText).html();

                    if(  loaded == false ) {
                        $(broadText).html( referenceText );
                        $(this).text(number);
                    }

                    if( $(window).width() > 768 ) {
                        $( broadText ).css({
                            "position" : "absolute",
                            "top" : offsetText + "px",
                        });
                    } else {
                        $(broadText ).css({
                            "position" : "relative",
                            "top" : "0px",
                        });
                    }
                });
                

                $('text#ch-3 a').each( function() {
                    var broadText = $(this).attr('href');
                    var number = broadText.substring(1, broadText.length);
                    var offsetText  = $(this).position().top - 15 ;
                    var reference = $('.reference.ch-3' + broadText);
                    var referenceText =  '<l>' + number + ':  </l>' + $(broadText).html();

                    if(  loaded == false ) {
                        $(broadText).html( referenceText );
                        $(this).text(number);
                    }

                    if( $(window).width() > 768 ) {
                        $( broadText ).css({
                            "position" : "absolute",
                            "top" : offsetText + "px",
                        });
                    } else {
                        $(broadText ).css({
                            "position" : "relative",
                            "top" : "0px",
                        });
                    }
                });
            }

            function scrollToReferences(event) {
                $('text a').click( function(event) {
                    event.preventDefault();
                    // scrollTo
                    if( $(window).width() < 768 ) {
                        var tag = $(this).attr('href');
                        var tagLoc = $(tag).offset().top - 30; 
                        $(document).scrollTo( tagLoc, 800 );
                    } else {
                        var tag = $(this).attr('href');

                        $(tag).fadeOut('fast', function() {
                              $(tag).fadeIn('fast', function() {
                              });
                        });
                        $(document).scrollTo( tagLoc, 800 );
                    }
                });
            }

            function scrollToText(event) {
                $('.reference').click( function(event) {
                    event.preventDefault();

                    if( $(window).width() < 768 ) {
                        var tag = $(this).attr('href');
                        var tagLoc = $(tag).offset().top - 30; 

                        $(document).scrollTo( tagLoc, 800 );
                    } else {
                        var tag = $(this).attr('href');

                        $(tag).fadeOut('fast', function() {
                              $(tag).fadeIn('fast', function() {
                              });
                        });
                    }
                })
            }

            function viewCode() {
                // $('.code-block').each( function() {
                    var html = $('span.xml').text();
                    var rlview = $(".code-view");
                    rlview.html(html);
                // })
               
            }
           
            function randColor2() {
                var random = Math.floor(Math.random()*50);
                var option = Math.floor(Math.random()*2) + 1;
                if ( option == 1 ) {
                   var r = 255 - random*2,
                       g = 255 - random*2,
                       b = 255 ;
                } else if ( option == 2 ) {
                    var r = 0 ,
                        g = 0, 
                        b = 255 - random;
                } else {
                    var r = 255 - random/5,
                        g = 255 - random/5,
                        b = 255 ;
                }
                
                return 'rgb(' + r + ',' + g + ',' + b + ')';
            }

            
            function showContentMode(ColorsOn) {
                $('#showContent').click( function() {
                    if ( ColorsOn == false ) {
                        $('*').each( function() {
                            var randomColor= randColor2();
                            $(this).css({
                                'background-color' : randomColor,
                            });
                        });
                        $(this).css({
                            'color' : 'blue'
                        })
                        ColorsOn = true;
                   } else {
                        $('*').each( function() { 
                            $(this).css({
                                'background-color' : 'initial',
                            });
                        });
                        $('body').css({
                            'background-color' : '#FAFAFA',
                        })
                        $('header').css({
                            'background-color' : '#FAFAFA',
                        });
                        $(this).css({
                            'color' : '#999'
                        })
                        ColorsOn = false;
                    };
                });
            }

            function killContent() {
                $('#kill').click( function() {
                      $('body').jGravity({
                        // target: 'everything',
                        weight: 10,
                        depth: 10,
                        drag: true
                      });

                      // $('chapter').jGravit({
                      //   target: 'everything',
                      //   weight: 125,
                      //   depth: 4,
                      //   drag: true
                      // })
                }) 
            }

            function showTextOnly() {
                $('#showTextOnly').click( function() {
                   var allText = $('*').text();
                   $("body").css({
                    "display": "none",
                   });
                   $("html").text(allText);
                });
            }

            function setImageDistance() {
                if( $(window).width() > 768 ) {
                    $('images').each( function() {
                        var height = $(this).height();
                        var numberOfImages = $(this).children('.side-image-container').length;
                        var distance = height / numberOfImages;
                        var nr = 0; 
                        var imagesheight = 0;

                        $(this).children('.side-image-container').each( function() {
                                imagesheight += $(this).height();
                                var Realdistance = (height - imagesheight) / distance;
                                $(this).css({
                                    "position" : "relative",
                                    "margin-top" : Realdistance,
                                 });
                                nr++;
                        });
                           
                        console.log( numberOfImages);
                    })
                }
            }

            function placeImages() {
                $('.broad c').each( function() {
                    
                    var imageReference = $(this).attr('href');
                    var referenceOffset  = $(this).offset().top;
                    var image = $('.image-block .' + imageReference);

                    $( '.' + imageReference ).css({
                        "margin-top" : referenceOffset + "px",
                    });
                });
            }

            function scrollToChapter() {

                var offset = $(window).scrollTop();
                var top = 50;
                // var Land = $("#LandingPage").offset().top - top;
                var Intro = $("#Introduction").offset().top - top;
                var Ch1 = $("#Chapter1").offset().top - top;
                var Ch2 = $("#Chapter2").offset().top - top;
                var Ch3 = $("#Chapter3").offset().top - top;
                var Concl = $("#Conclusion").offset().top - top;
                var Coloph = $("#Colophon").offset().top - top;
                var startFooter = $("#Footer").offset().top - top;
                var color = "blue";
                var totalHeight = $('.wrap').height();
                var title = $('.chapter-title');
                var menuLink = $('.menu-link');

                if( offset < $(window).height() || offset == 0 ) {
                    $("header").css({
                        'display': "none",
                    })
                    $(".menu").css({
                        'display': "none",
                    })
                } else {
                    $("header").css({
                        'display': "block"
                    })
                }

                if( offset >= Intro && offset < Ch1 ) {
                    // intro
                    title.text('The extension of man');
                     
                      $('.menu-link:nth-child(2)').css({
                         "color" : color,
                       });

                      $('.menu-link:not(:nth-child(2))').css({
                         "color" : '#999',
                      });

                } else if ( offset >= Ch1 && offset < Ch2 ) {
                    title.text('The conflicts of new media');
                        
                        $('.menu-link:nth-child(3)').css({
                           "color" : color,
                         });

                        $('.menu-link:not(:nth-child(3))').css({
                           "color" : '#999',
                        });

                } else if ( offset >= Ch2 && offset < Ch3 ) {
                    title.text('A brave new world');
                        $('.menu-link:nth-child(4)').css({
                           "color" : color,
                         });

                        $('.menu-link:not(:nth-child(4))').css({
                           "color" : '#999',
                        });

                } else if ( offset >= Ch3 && offset < Concl ) {
                    title.text('Literacy');
                        $('.menu-link:nth-child(5)').css({
                           "color" : color,
                         });

                        $('.menu-link:not(:nth-child(5))').css({
                           "color" : '#999',
                        });
                } else if ( offset >= Concl && offset < Coloph ) {
                    title.text('A New Kind of Print');
                        $('.menu-link:nth-child(6)').css({
                           "color" : color,
                         });

                        $('.menu-link:not(:nth-child(6))').css({
                           "color" : '#999',
                        });
                } else if ( offset >= Coloph && offset < Footer ) {
                    title.text('Colophon');
                        $('.menu-link:nth-child(7)').css({
                           "color" : color,
                         });

                        $('.menu-link:not(:nth-child(7))').css({
                           "color" : '#999',
                        });
                } else {
                    //
                }
            }

            function showMenu(isBlue) {
                $('.header-stuff:nth-of-type(1)').click( function() {
                   
                    $(".menu").toggle();
                    if( isBlue == false ) {
                        $(this).css({
                            'color' : 'blue',
                        });
                        isBlue = true;

                    } else {
                        $(this).css({
                            "color": "#999",
                        });
                        isBlue = false;
                    }
                });

                $('.header-stuff:nth-of-type(2)').click( function() {
                    $(".abstract").toggle();
               });


            }

            function scrollPage(event) {
                 $('a.menu-link').click( function() {
                    event.preventDefault;
                    var tag = $(this).attr('href');
                    var tagLoc = $(tag).offset().top - 50; 
                    $(document).scrollTo( tagLoc, 800 );

                 });
            }

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
                $('.os').text("The version you use is " + os );
                $('.cookies').text("Cookies are enabled:  " + cookies );
                $('.language').text("Browser language is " + language );
                $('.browserversion').text("Browser version is " + version );

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



            $(document).ready( function() {

                $('#Landing').mouseover( function() {
                    $('.landing-title').focus();
                })

                var myVid= $("#iframe");
                myVid.muted=true;

                // formatLinks();
                logThesis();
                showContentMode(false);

                setHeightContent();
                placeReferences(false);
                scrollToText(event);
                scrollToReferences(event);
                scrollPage(event);
                hideReferences();
                hideImages();
                showPercentage();
                showMenu(false);
                killContent();
                showTextOnly();
                viewCode();
                
                scrollToChapter();

                showTime();
                showVisitTime();
                showBrowserSystem();

                // setImageDistance();

                $("img.side-image").lazyload();

                $('header').click( function() {
                    $("pre").css({
                        "width" : $(window).width(),
                        "height" : $(window).height(),
                        "margin-left" : -50 + "%"
                    });

                    // $('pre').html( $('body').html() );
                    console.log( $('body').text() );
                });
                $('.code-block').keyup( function() {
                   viewCode();

                });
               
                $('#Landing').focus();

            });

            $(window).resize( function () {
                setHeightContent();
                placeReferences(true);
                showPercentage();

            });

            $(document).on( 'scroll', function() {
                scrollToChapter();
            })

