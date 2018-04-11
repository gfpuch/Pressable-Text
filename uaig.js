$(document).ready(function () {
                  frameRate    =  30;
                  timeInterval = Math.round( 1000 / frameRate );
                  relMouseX    = 0;
                  relMouseY    = 0;
                  offset = $('#c_splash').offset();
                  var xp = 0;
                  var yp = 0;
                  atimer = setInterval( function () { 
                                       if (spl) {
                                       xp += (relMouseX - xp) / 12;
                                       yp += (relMouseY - yp) / 12;
                                       if ((relMouseX > 0) && (relMouseX < 638) && (55 < mouseY) && (mouseY < 500)) {
                                            $("#intro").css({'-webkit-transform':'(0,0,0)', 'transform3d':'(0,0,0)', '-webkit-filter': 'blur(7px)', 'filter': 'blur(7px)'});
                                       } else {
                                            $("#intro").css({'-webkit-transform':'(0,0,0)', 'transform3d':'(0,0,0)', '-webkit-filter': 'blur(0px)', 'filter': 'blur(0px)'});
                                       }
                                       if ((relMouseX > 0) && (relMouseX < 120) && (55 < mouseY) && (mouseY < 500)) {
                                       $("#vision").stop().animate({'opacity':0.9, 'top': yp - 52}, {duration: 70, queue: false});
                                       
                                       } else {
                                       $("#vision").stop().animate({'opacity':0, 'top': '250px'}, {duration: 70, queue: false});
                                       }
                                       if ((relMouseX >= 120) && (relMouseX < 250) && (55 < mouseY) && (mouseY < 500)) {
                                       $("#kr").stop().animate({'opacity':0.9, 'top': yp - 52}, {duration: 70, queue: false});
                                       } else {
                                       $("#kr").stop().animate({'opacity':0, 'top': '250px'}, {duration: 70, queue: false});
                                       }
                                       if ((relMouseX >= 250) && (relMouseX < 380) && (55 < mouseY) && (mouseY < 500)) {
                                       $("#ml").stop().animate({'opacity':0.9, 'top': yp - 52}, {duration: 70, queue: false});
                                       } else {
                                       $("#ml").stop().animate({'opacity':0, 'top': '250px'}, {duration: 70, queue: false});
                                       }
                                       if ((relMouseX >= 380) && (relMouseX < 508) && (55 < mouseY) && (mouseY < 500)) {
                                       $("#ling").stop().animate({'opacity':0.9, 'top': yp - 52}, {duration: 70, queue: false});
                                       } else {
                                       $("#ling").stop().animate({'opacity':0, 'top': '250px'}, {duration: 70, queue: false});
                                       }
                                       if ((relMouseX >= 508) && (relMouseX < 638) && (55 < mouseY) && (mouseY < 500)) {
                                       $("#bio").stop().animate({'opacity':0.9, 'top': yp - 52}, {duration: 70, queue: false});
                                       } else {
                                       $("#bio").stop().animate({'opacity':0, 'top': '255px'}, {duration: 70, queue: false});
                                       }}

                                    }, timeInterval );
                  
                  var hover1 = false;
                  var ai = false;
                  var res = false;
                  var sch = false;
                  var mem = false;
                  var lin = false;
                  var joi = false;
                  var spl = true;
                  $("#l_ai").click(function () {
                                    $("#main").animate({
                                        scrollTop: $("#main").offset().top
                                    }, 'fast');
                                   if (!(ai)) {
                                   $("#l_ai").toggleClass("toggled");
                                   setTimeout(function() {
                                              $("#c_ai").fadeIn(100);
                                              }, 100);
                                   ai = true;
                                   }
                                   if (res) {
                                   $("#l_resources").toggleClass("toggled");
                                   $("#c_resources").fadeOut(100);
                                   res = false;
                                   }
                                   if (sch) {
                                   $("#l_schedule").toggleClass("toggled");
                                   $("#c_schedule").fadeOut(100);
                                   sch = false;
                                   }
                                   if (mem) {
                                   $("#l_members").toggleClass("toggled");
                                   $("#c_members").fadeOut(100);
                                   mem = false;
                                   }
                                   if (lin) {
                                   $("#l_links").toggleClass("toggled");
                                   $("#c_links").fadeOut(100);                                                                  
                                   lin = false;
                                   }
                                   if (joi) {
                                   $("#c_join").fadeOut(100);
                                   joi = false;
                                   }
                                   if (spl) {
                                   setTimeout(function () {
                                              $("#c_splash_wrapper, #c_splash").animate({'margin-left': '600px'});
                                              $("#c_splash").fadeOut(100);
                                              }, 100);
                                   spl = false;
                                   }
                                   });            
                  $("#l_resources").click(function() {
                                    $("#main").animate({
                                        scrollTop: $("#main").offset().top
                                    }, 'fast');
                                          if (ai) {
                                          $("#l_ai").toggleClass("toggled");
                                          $("#c_ai").fadeOut(100);
                                          ai = false;
                                          }
                                          if (!(res)) {
                                          $("#l_resources").toggleClass("toggled");
                                          setTimeout(function() {
                                                     $("#c_resources").fadeIn(100);
                                                     }, 100);
                                          res = true;
                                          }
                                          if (sch) {
                                          $("#l_schedule").toggleClass("toggled");
                                          $("#c_schedule").fadeOut(100);
                                          sch = false;
                                          }
                                          if (mem) {
                                          $("#l_members").toggleClass("toggled");
                                          $("#c_members").fadeOut(100);
                                          mem = false;
                                          }
                                          if (lin) {
                                          $("#l_links").toggleClass("toggled");
                                          $("#c_links").fadeOut(100);                                                                  
                                          lin = false;
                                          }
                                          if (joi) {
                                          $("#c_join").fadeOut(100);
                                          joi = false;
                                          }
                                          if (spl) {
                                          setTimeout(function () {
                                                     $("#c_splash_wrapper, #c_splash").animate({'margin-left': '600px'});
                                                     $("#c_splash").fadeOut(100);
                                                     }, 100);
                                          spl = false;
                                          }
                                          });
                  $("#l_schedule").click(function() {
                                    $("#main").animate({
                                        scrollTop: $("#main").offset().top
                                    }, 'fast');
                                         if (ai) {
                                         $("#l_ai").toggleClass("toggled");
                                         $("#c_ai").fadeOut(100);
                                         ai = false;
                                         }
                                         if (res) {
                                         $("#l_resources").toggleClass("toggled");
                                         $("#c_resources").fadeOut(100);
                                         res = false;
                                         }
                                         if (!(sch)) {
                                         $("#l_schedule").toggleClass("toggled");
                                         setTimeout(function() {
                                                    $("#c_schedule").fadeIn(100);
                                                    }, 100);
                                         sch = true;
                                         }
                                         if (mem) {
                                         $("#l_members").toggleClass("toggled");
                                         $("#c_members").fadeOut(100);
                                         mem = false;
                                         }
                                         if (lin) {
                                         $("#l_links").toggleClass("toggled");
                                         $("#c_links").fadeOut(100);                                                                  
                                         lin = false;
                                         }
                                         if (joi) {
                                         $("#c_join").fadeOut(100);
                                         joi = false;
                                         }
                                         if (spl) {
                                         setTimeout(function () {
                                                    $("#c_splash_wrapper, #c_splash").animate({'margin-left': '600px'});
                                                    $("#c_splash").fadeOut(100);
                                                    }, 100);
                                         spl = false;
                                         }
                                         });
                  $("#l_members").click(function() {
                                    $("#main").animate({
                                        scrollTop: $("#main").offset().top
                                    }, 'fast');
                                        if (ai) {
                                        $("#l_ai").toggleClass("toggled");
                                        $("#c_ai").fadeOut(100);
                                        ai = false;
                                        }
                                        if (res) {
                                        $("#l_resources").toggleClass("toggled");
                                        $("#c_resources").fadeOut(100);
                                        res = false;
                                        }
                                        if (sch) {
                                        $("#l_schedule").toggleClass("toggled");
                                        $("#c_schedule").fadeOut(100);
                                        sch = false;
                                        }
                                        if (!(mem)) {
                                        $("#l_members").toggleClass("toggled");
                                        setTimeout(function() {
                                                   $("#c_members").fadeIn(100);
                                                   }, 100);
                                        mem = true;
                                        }
                                        if (lin) {
                                        $("#l_links").toggleClass("toggled");
                                        $("#c_links").fadeOut(100);                                                                  
                                        lin = false;
                                        }
                                        if (joi) {
                                        $("#c_join").fadeOut(100);
                                        joi = false;
                                        }
                                        if (spl) {
                                        setTimeout(function () {
                                                   $("#c_splash_wrapper, #c_splash").animate({'margin-left': '600px'});
                                                   $("#c_splash").fadeOut(100);
                                                   }, 100);
                                        spl = false;
                                        }
                                        });
                  $("#l_links").click(function() {
                                    $("#main").animate({
                                        scrollTop: $("#main").offset().top
                                    }, 'fast');
                                      if (ai) {
                                      $("#l_ai").toggleClass("toggled");
                                      $("#c_ai").fadeOut(100);
                                      ai = false;
                                      }
                                      if (res) {
                                      $("#l_resources").toggleClass("toggled");
                                      $("#c_resources").fadeOut(100);
                                      res = false;
                                      }
                                      if (sch) {
                                      $("#l_schedule").toggleClass("toggled");
                                      $("#c_schedule").fadeOut(100);
                                      sch = false;
                                      }
                                      if (mem) {
                                      $("#l_members").toggleClass("toggled");
                                      $("#c_members").fadeOut(100);
                                      mem = false;
                                      }
                                      if (!(lin)) {
                                      $("#l_links").toggleClass("toggled");
                                      setTimeout(function() {
                                                 $("#c_links").fadeIn(100);
                                                 }, 100);
                                      lin = true;
                                      }
                                      if (joi) {
                                      $("#c_join").fadeOut(100);
                                      joi = false;
                                      }
                                      
                                      if (spl) {
                                      setTimeout(function () {
                                                 $("#c_splash_wrapper, #c_splash").animate({'margin-left': '600px'});
                                                 $("#c_splash").fadeOut(100);
                                                 }, 100);
                                      spl = false;
                                      
                                      }
                                      });
                  $("#l_join").click(function() {
                                    $("#main").animate({
                                        scrollTop: $("#main").offset().top
                                    }, 'fast');
                                      if (ai) {
                                      $("#l_ai").toggleClass("toggled");
                                      $("#c_ai").fadeOut(100);
                                      ai = false;
                                      }
                                      if (res) {
                                      $("#l_resources").toggleClass("toggled");
                                      $("#c_resources").fadeOut(100);
                                      res = false;
                                      }
                                      if (sch) {
                                      $("#l_schedule").toggleClass("toggled");
                                      $("#c_schedule").fadeOut(100);
                                      sch = false;
                                      }
                                      if (mem) {
                                      $("#l_members").toggleClass("toggled");
                                      $("#c_members").fadeOut(100);
                                      mem = false;
                                      }
                                      if (lin) {
                                      $("#l_links").toggleClass("toggled");
                                      $("#c_links").fadeOut(100);
                                      lin = false;
                                      }
                                      if (!(joi)) {
                                      setTimeout(function() {
                                                 $("#c_join").fadeIn(100);
                                                 }, 100);
                                      joi = true;
                                      }
                                      
                                      if (spl) {
                                      setTimeout(function () {
                                                 $("#c_splash_wrapper, #c_splash").animate({'margin-left': '600px'});
                                                 $("#c_splash").fadeOut(100);
                                                 }, 100);
                                      spl = false;
                                      
                                      }
                                      });

                  $("#l_splash").click(function() {
                                       
                                       if (!(spl)) {
                                       $("#c_splash").fadeIn(100);
                                       $("#c_splash_wrapper, #c_splash").animate({'margin-left': '0%'});
                                       spl = true;
                                       }  
                                       if (ai) {
                                       $("#l_ai").toggleClass("toggled");
                                       setTimeout(function () {
                                                  $("#c_ai").fadeOut(100);
                                                  }, 400);
                                       ai = false;
                                       }
                                       if (res) {
                                       $("#l_resources").toggleClass("toggled");
                                       setTimeout(function () {
                                                  $("#c_resources").fadeOut(100);
                                                  }, 400);
                                       res = false;
                                       }
                                       if (sch) {
                                       $("#l_schedule").toggleClass("toggled");
                                       setTimeout(function () {
                                                  $("#c_schedule").fadeOut(100);
                                                  }, 400);
                                       sch = false;
                                       }
                                       if (mem) {
                                       $("#l_members").toggleClass("toggled");
                                       setTimeout(function () {
                                                  $("#c_members").fadeOut(100);
                                                  }, 400);
                                       mem = false;
                                       }
                                       if (lin) {
                                       $("#l_links").toggleClass("toggled");
                                       setTimeout(function () {
                                                  $("#c_links").fadeOut(100);
                                                  }, 400);
                                       lin = false;
                                       }
                                       if (joi) {
                                       setTimeout(function () {
                                                  $("#c_join").fadeOut(100);
                                                  }, 400);
                                       joi = false;
                                       }
                                       
                                       });
                  
                  $("#arrow_wrapper").hover(function () {
                                            $("#arrow").stop().animate({'margin-bottom':'-100px'}, {duration: 100, queue: false});
                                            $("#banner, #banner_wrapper").stop().animate({'bottom':'0'}, {duration: 100, queue: false});
                                            $("#shadow").stop().animate({'bottom': '100px'}, {duration: 300, queue: false});
                                            }, function () {
                                            $("#banner, #banner_wrapper").stop().animate({'bottom':'-100px'}, {duration: 100, queue: false});
                                            $("#shadow").stop().animate({'bottom':'0'}, {duration: 250, queue: false});
                                            $("#arrow").animate({'margin-bottom':'0'}, {duration: 100, queue: false});
                                            });
                  $("#banner").hover(function () {
                                            $("#arrow").stop().animate({'margin-bottom':'-100px'}, {duration: 100, queue: false});
                                            $("#banner, #banner_wrapper").stop().animate({'bottom':'0'}, {duration: 100, queue: false});
                                            $("#shadow").stop().animate({'bottom': '100px'}, {duration: 250, queue: false});
                                            }, function () { });
                  $("#facebook").hover(function () {
                                            $("#facebook").toggleClass("tossing");
                                            });
                  $("#google").hover(function () {
                                       $("#google").toggleClass("tossing");
                                       });
                  
});
$(document).mousemove( function(e) {
                      mouseX = e.pageX;
                      mouseY = e.pageY;
                      relMouseX = mouseX - offset.left;
                      relMouseY = mouseY - offset.top;
});
