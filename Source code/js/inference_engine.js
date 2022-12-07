$(window).on('load', function(){

  var Intestinal_Parasite_Name = "Intestinal_Parasite";
  var Pneumonia_Name = "Pneumonia";
  var Swine_Dysentery_Name = "Swine Dysentery";
  var E_Coli_Name = "E-Coli";
  var Swine_Fever_Name = "Swine Fever";

  var Intestinal_Parasite_ID = 1;
  var Pneumonia_ID = 2;
  var Swine_Dysentery_ID = 3;
  var E_Coli_ID = 4;
  var Swine_Fever_ID = 5;

  var co = " Coughing (Ubo)";
  var dr = " Diarrhea (Pag-tatae)";
  var lwf = " Live Worms Expelled in the Feces (Pag-tatae na merong uod)";
  var la = " Loss of Appetite (Walang ganang kumain)";
  var bd = " Bloody Diarrhea (Madugong pag-tatae)";
  var wl = " Weight Loss (Nababaawasan ang timbang)";
  var sg = " Slow Growth (Mabagal na paglaki)";
  var tr = " Trembling (Panginginig)";
  var fv = " Fever (Lagnat)";
  var roe = " Reddening of Eyes (Pamumula ng mga mata)";
  var vom = " Vomiting (Pagsusuka)";

  var db=openDatabase("expert_db","1.0","expert_db", 65535); // creating of database, expert_db is the database name
  const observed_symptoms = [];
  var result;

  setTimeout(function() {
    $("#load").hide();
  }, 1000);


  /*
    * starting point of the forward chaining method
    * starts comparing facts based on the decision tree
    * see the decision tree for more guidance
    * conclude if the required facts matches to the rule
    * conclude if the facts did not matches to all rules
  */

  //fct_1
  $("#fever_dialog_1").show();
  $('.fever_click_submit_1').click(function(){
    result = $('input[name="fever1_choice"]:checked').val();

    if(result == 1){
      observed_symptoms.push(fv);
      fever1_hide();

      //fct_2
      $("#loss_appetite_dialog_1").show();
      $('.loss_appetite_click_submit_1').click(function(){
        result = $('input[name="loss_appetite1_choice"]:checked').val();

        if(result == 1){
          observed_symptoms.push(la);
          loss_appetite1_hide();

          //fct_4
          $("#trembling_dialog_1").show();
          $('.trembling_click_submit_1').click(function(){
            result = $('input[name="trembling1_choice"]:checked').val();

            if(result == 1){
              observed_symptoms.push(tr);
              trembling1_hide();

              //fct_8
              $("#diarrhea_dialog_2").show();
              $('.diarrhea_click_submit_2').click(function(){
                result = $('input[name="diarrhea2_choice"]:checked').val();

                if(result == 1){
                  observed_symptoms.push(dr);
                  diarrhea2_hide();

                  //fct_14
                  $("#coughing_dialog_2").show();
                  $('.coughing_click_submit_2').click(function(){
                    result = $('input[name="coughing2_choice"]:checked').val();

                    if(result == 1){
                      observed_symptoms.push(co);
                      coughing2_hide();

                      //fct_22
                      $("#weight_loss_dialog_2").show();
                      $(".weight_loss_click_submit_2").click(function(){
                        result = $('input[name="weight_loss2_choice"]:checked').val();

                        if(result == 1){
                        //fct_34 conclusion_5
                        observed_symptoms.push(wl);
                        alert("Your swine has " + Pneumonia_Name);
                        window.location.href='disease_pages/Pneumonia.html';

                       //fetch local storage value
                       localStorage.setItem("observed1", observed_symptoms);
	                     return false;
                       
                      }
                        else{
                            weight_loss2_hide();

                            //fct_35
                            $("#slow_growth_dialog_2").show();
                            $(".slow_growth_click_submit_2").click(function(){
                            result = $('input[name="slow_growth2_choice"]:checked').val();

                            if(result == 1){

                              //fct_46 conclusion_8
                              observed_symptoms.push(sg);
                              alert("Your swine has " + Pneumonia_Name);
                              window.location.href='disease_pages/Pneumonia.html';

                              //fetch local storage value
                              localStorage.setItem("observed1", observed_symptoms);
	                            return false;

                            }
                            else{

                              //fct_47 unknown_12
                              alert_unknown();

                            }
                          });
                        }
                      });

                    }
                    else{
                      //fct_23 unknown_5

                      alert_unknown();

                    }
                  });


                }
                else{
                  //fct_15 conclusion_1
                  alert("Your swine has " + Swine_Fever_Name);
                  window.location.href='disease_pages/SwineFever.html';
                  
                  //fetch local storage value
                  localStorage.setItem("observed1", observed_symptoms);
	                return false;
                 
                 
                }
              });
            }
            else {
              //fct_9 unknown_2
              alert_unknown();

            }
          });
        }
        else {
          //fct_5 unknown_1
          alert_unknown();

          }
      });
    }
    else {
      fever1_hide();

      //fct_3
      $("#roe_dialog_1").show();
      $('.roe_click_submit_1').click(function(){
        result = $('input[name="roe1_choice"]:checked').val();

        if(result == 1){
          observed_symptoms.push(roe);
          roe1_hide();

          //fct_6
          $("#loss_appetite_dialog_2").show();
          $('.loss_appetite_click_submit_2').click(function(){
            result = $('input[name="loss_appetite2_choice"]:checked').val();

            if(result == 1){
              observed_symptoms.push(la);
              loss_appetite2_hide();

              //fct_10
              $("#trembling_dialog_2").show();
              $('.trembling_click_submit_2').click(function(){
                result = $('input[name="trembling2_choice"]:checked').val();

                if(result == 1){
                  observed_symptoms.push(tr);
                  trembling2_hide();

                  //fct_16
                  $("#diarrhea_dialog_3").show();
                  $('.diarrhea_click_submit_3').click(function(){
                    result = $('input[name="diarrhea3_choice"]:checked').val();


                    if(result == 1){
                      observed_symptoms.push(dr);
                      diarrhea3_hide();

                      //fct_24
                      $("#coughing_dialog_3").show();
                      $(".coughing_click_submit_3").click(function(){
                        result = $('input[name="coughing3_choice"]:checked').val();

                        if(result == 1){
                          observed_symptoms.push(co);
                          coughing3_hide();

                          //fct_36
                          $("#weight_loss_dialog_4").show();
                          $(".weight_loss_click_submit_4").click(function(){
                            result = $('input[name="weight_loss4_choice"]:checked').val();

                            if(result == 1){
                              //fct_48 conclusion_9
                              observed_symptoms.push(wl);
                              alert("Your swine has " + Pneumonia_Name);
                              window.location.href='disease_pages/Pneumonia.html';

                              //fetch local storage value
                              localStorage.setItem("observed1", observed_symptoms);
	                            return false;

                            }
                            else{
                              $("#weight_loss_dialog_4").hide();

                              //fct_49
                              $("#slow_growth_dialog_4").show();
                              $(".slow_growth_click_submit_4").click(function(){
                                result = $('input[name="slow_growth4_choice"]:checked').val();

                                if(result == 1){
                                  //fct_56 conclusion_12
                                  observed_symptoms.push(sg);
                                  alert("Your swine has " + Pneumonia_Name);
                                  window.location.href='disease_pages/Pneumonia.html';

                                  //fetch local storage value
                                  localStorage.setItem("observed1", observed_symptoms);
	                                return false;

                                }
                                else{
                                  //fct_57 unknown_15
                                  alert_unknown();

                                }
                              });
                            }
                          });
                        }
                        else{
                          //fct_37 unknown_8
                          alert_unknown();

                        }
                      });
                    }
                    else{
                      //fct_25 conclusion_2
                      alert("Your swine has " + Swine_Fever_Name);
                      window.location.href='disease_pages/SwineFever.html';

                      //fetch local storage value
                      localStorage.setItem("observed1", observed_symptoms);
                      return false;
                    }
                  });
                }
                else{
                  //fct_17 unknown_4
                  alert_unknown();

                }
              });
            }
            else{
              //fct_11 unknown_3
              alert_unknown();

            }
          });
        }
        else {
          roe1_hide();

          //fct_7
          $("#diarrhea_dialog_1").show();
          $('.diarrhea_click_submit_1').click(function(){
            result = $('input[name="diarrhea1_choice"]:checked').val();

            if(result == 1){
              observed_symptoms.push(dr);
              diarrhea1_hide();

              //fct_12
              $("#coughing_dialog_1").show();
              $('.coughing_click_submit_1').click(function(){
                result = $('input[name="coughing1_choice"]:checked').val();

                if(result == 1){
                  observed_symptoms.push(co);
                  coughing1_hide();

                  //fct_18
                  $("#loss_appetite_dialog_3").show();
                  $('.loss_appetite_click_submit_3').click(function(){
                    result = $('input[name="loss_appetite3_choice"]:checked').val();

                    if(result == 1){
                      observed_symptoms.push(la);
                      loss_appetite3_hide();

                      //fct_26
                      $("#trembling_dialog_3").show();
                      $(".trembling_click_submit_3").click(function(){
                        result = $('input[name="trembling3_choice"]:checked').val();

                        if(result == 1){
                          observed_symptoms.push(tr);
                          trembling3_hide();

                          //fct_38
                          $("#weight_loss_dialog_5").show();
                          $(".weight_loss_click_submit_5").click(function(){
                            result = $('input[name="weight_loss5_choice"]:checked').val();

                            if(result == 1){
                            //fct_50 conclusion_10
                            observed_symptoms.push(wl);
                            alert("Your swine has " + "Intestinal Parasite");
                            window.location.href='disease_pages/IntestinalParasites.html';

                            //fetch local storage value
                            localStorage.setItem("observed1", observed_symptoms);
	                          return false;

                            }
                            else{
                              weight_loss5_hide();

                              //fct_51
                              $("#slow_growth_dialog_5").show();
                              $(".slow_growth_click_submit_5").click(function(){
                              	result = $('input[name="slow_growth5_choice"]:checked').val();

                              	if(result == 1){
                              	   //fct_58 conclusion_13
                                   observed_symptoms.push(sg);
                                   alert("Your swine has " + "Intestinal Parasite");
                                   window.location.href='disease_pages/IntestinalParasites.html';

                                   //fetch local storage value
                                   localStorage.setItem("observed1", observed_symptoms);
	                                 return false;
                              	}
                              	else{
                                  //fct_59 unknown_16
                                  alert_unknown();

                              	}
                              });
                            }
                          });
                        }
                        else{
                          //fct_39 unknown_9
                          alert_unknown();

                        }
                      });
                    }
                    else{
                      //fct_27 unknown_6
                      alert_unknown();

                    }
                  });
                }
                else{
                  coughing1_hide();

                  //fct_19
                  $("#vomiting_dialog_1").show();
                  $('.vomiting_click_submit_1').click(function(){
                    result = $('input[name="vomiting1_choice"]:checked').val();

                    if(result == 1){
                      //fct_28 conclusion_3
                      observed_symptoms.push(vom);
                      alert("Your swine has " + E_Coli_Name);
                      window.location.href='disease_pages/E-Coli.html';

                      //fetch local storage value
                      localStorage.setItem("observed1", observed_symptoms);
                      return false;

                    }
                    else{
                      vomiting1_hide();

                      //fct_29
                      $("#weight_loss_dialog_3").show();
                      $(".weight_loss_click_submit_3").click(function(){
                        result = $('input[name="weight_loss3_choice"]:checked').val();

                        if(result == 1){
                          //fct_40 conclusion_6
                          observed_symptoms.push(wl);
                          alert("Your swine has " + Swine_Dysentery_Name);
                          window.location.href='disease_pages/SwineDysentery.html';

                          //fetch local storage value
                          localStorage.setItem("observed1", observed_symptoms);
	                        return false;

                        }
                        else{
                          weight_loss3_hide();

                          //fct_41
                          $("#slow_growth_dialog_3").show();
                          $(".slow_growth_click_submit_3").click(function(){
                            result = $('input[name="slow_growth3_choice"]:checked').val();

                              if(result == 1){
                                //fct_52 conclusion_11
                                observed_symptoms.push(sg);
                                alert("Your swine has " + Swine_Dysentery_Name);
                                window.location.href='disease_pages/SwineDysentery.html';

                                //fetch local storage value
                                localStorage.setItem("observed1", observed_symptoms);
	                              return false;

                            }
                            else{
                            //fct_53 unknown_13
                            alert_unknown();

                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
            else{
              diarrhea1_hide();

              //fct_13
              $("#bloody_diarrhea_dialog_1").show();
              $('.bloody_diarrhea_click_submit_1').click(function(){
                result = $('input[name="bloody_diarrhea1_choice"]:checked').val();

                if(result == 1){
                  observed_symptoms.push(bd);
                  bloody_diarrhea1_hide();

                  //fct_20
                  $("#weight_loss_dialog_1").show();
                  $(".weight_loss_click_submit_1").click(function(){
                    result = $('input[name="weight_loss1_choice"]:checked').val();

                    if(result == 1){
                      //fct_30 conclusion_4
                      observed_symptoms.push(wl);
                      alert("Your swine has " + Swine_Dysentery_Name);
                      window.location.href='disease_pages/SwineDysentery.html';

                      //fetch local storage value
                      localStorage.setItem("observed1", observed_symptoms);
                      return false;

                    }
                    else{
                      weight_loss1_hide();

                      //fct_31
                      $("#slow_growth_dialog_1").show();
                      $(".slow_growth_click_submit_1").click(function(){
                        result = $('input[name="slow_growth1_choice"]:checked').val();

                        if(result == 1){
                          //fct_42 conclusion_7
                          observed_symptoms.push(sg);
                          alert("Your swine has " + Swine_Dysentery_Name);
                          window.location.href='disease_pages/SwineDysentery.html';

                          //fetch local storage value
                          localStorage.setItem("observed1", observed_symptoms);
	                        return false;

                        }
                        else{
                          //fct_43 unknown_10
                          alert_unknown();

                        }
                      });
                    }
                  });
                }
                else{
                  bloody_diarrhea1_hide();

                  //fct_21
                  $("#lwf_dialog_1").show();
                  $(".lwf_click_submit_1").click(function(){
                    result = $('input[name="lwf1_choice"]:checked').val();

                    if(result == 1){
                      observed_symptoms.push(lwf);
                      lwf1_hide();

                      //fct_32
                      $("#coughing_dialog_4").show();
                      $(".coughing_click_submit_4").click(function(){
                        result = $('input[name="coughing4_choice"]:checked').val();

                        if(result == 1){
                          observed_symptoms.push(co);
                          coughing4_hide();

                          //fct_44
                          $("#loss_appetite_dialog_4").show();
                          $(".loss_appetite_click_submit_4").click(function(){
                            result = $('input[name="loss_appetite4_choice"]:checked').val();

                            if(result == 1){
                              observed_symptoms.push(la);
                              loss_appetite4_hide();

                              //fct_54
                              $("#trembling_dialog_4").show();
                              $(".trembling_click_submit_4").click(function(){
                              	result = $('input[name="trembling4_choice"]:checked').val();

                              	if(result == 1){
                              	   observed_symptoms.push(tr);
                                   trembling4_hide();

                                   //fct_60
                                   $("#weight_loss_dialog_6").show();
                                   $(".weight_loss_click_submit_6").click(function(){
                                     result = $('input[name="weight_loss6_choice"]:checked').val();

                                    if(result == 1){
                                       //fct_62 conclusion_14

                                       observed_symptoms.push(wl);
                                       alert("Your swine has " + "Intestinal Parasite");
                                       window.location.href='disease_pages/IntestinalParasites.html';

                                       //fetch local storage value
                                      localStorage.setItem("observed1", observed_symptoms);
	                                    return false;

                                     }
                                     else{
                                       weight_loss6_hide();

                                       //fct_63
                                       $("#slow_growth_dialog_6").show();
                                       $(".slow_growth_click_submit_6").click(function(){
                                      	result = $('input[name="slow_growth6_choice"]:checked').val();

                                      	if(result == 1){
                                      	   //fct_64 conclusion_15
                                          observed_symptoms.push(sg);
                                          alert("Your swine has " + "Intestinal Parasite");
                                          window.location.href='disease_pages/IntestinalParasites.html';

                                          //fetch local storage value
                                          localStorage.setItem("observed1", observed_symptoms);
	                                        return false;

                                      	}
                                      	else{
                                          //fct_65 unknown_18
                                          alert_unknown();

                                      	}
                                      });
                                     }
                                 });
                              	}
                              	else{
                                //fct_61 unknown_17
                                alert_unknown();

                              	}
                              });
                            }
                            else{
                              //fct_55 unknown_14
                              alert_unknown();

                            }
                          });
                        }
                        else{
                          //fct_45 unknown_11
                          alert_unknown();

                        }
                      });
                    }
                    else{
                      //fct_33 unknown_7
                      alert_unknown();

                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });

  /*
    * END OF FORWARD CHAINING METHOD
  */

  //hide modal functions//

  //fever
  function fever1_hide(){
    $("#fever_dialog_1").hide();
    $("#fever_dialog_form_1").trigger("reset");
  }

  //loss of appetite
  function loss_appetite1_hide(){
    $("#loss_appetite_dialog_1").hide();
    $("#loss_appetite_dialog_form_1").trigger("reset");
  }
  function loss_appetite2_hide(){
    $("#loss_appetite_dialog_2").hide();
    $("#loss_appetite_dialog_form_2").trigger("reset");
  }
  function loss_appetite3_hide(){
    $("#loss_appetite_dialog_3").hide();
    $("#loss_appetite_dialog_form_3").trigger("reset");
  }
  function loss_appetite4_hide(){
    $("#loss_appetite_dialog_4").hide();
    $("#loss_appetite_dialog_form_4").trigger("reset");
  }

  //reddening of eyes
  function roe1_hide(){
    $("#roe_dialog_1").hide();
    $("#roe_dialog_form_1").trigger("reset");
  }

  //coughing
  function coughing1_hide(){
    $("#coughing_dialog_1").hide();
    $("#coughing_dialog_form_1").trigger("reset");
  }
  function coughing2_hide(){
    $("#coughing_dialog_2").hide();
    $("#coughing_dialog_form_2").trigger("reset");
  }
  function coughing3_hide(){
    $("#coughing_dialog_3").hide();
    $("#coughing_dialog_form_3").trigger("reset");
  }
  function coughing4_hide(){
    $("#coughing_dialog_4").hide();
    $("#coughing_dialog_form_4").trigger("reset");
  }

  //diarrhea
  function diarrhea1_hide(){
    $("#diarrhea_dialog_1").hide();
    $("#diarrhea_dialog_form_1").trigger("reset");
  }
  function diarrhea2_hide(){
    $("#diarrhea_dialog_2").hide();
    $("#diarrhea_dialog_form_2").trigger("reset");
  }
  function diarrhea3_hide(){
    $("#diarrhea_dialog_3").hide();
    $("#diarrhea_dialog_form_3").trigger("reset");
  }

  //live worms expelled in the feces
  function lwf1_hide(){
    $("#lwf_dialog_1").hide();
    $("#lwf_dialog_form_1").trigger("reset");
  }

  //bloody diarrhea
  function bloody_diarrhea1_hide(){
    $("#bloody_diarrhea_dialog_1").hide();
    $("#bloody_diarrhea_dialog_form_1").trigger("reset");
  }

  //weight loss
  function weight_loss1_hide(){
    $("#weight_loss_dialog_1").hide();
    $("#weight_loss_dialog_form_1").trigger("reset");
  }
  function weight_loss2_hide(){
    $("#weight_loss_dialog_2").hide();
    $("#weight_loss_dialog_form_2").trigger("reset");
  }
  function weight_loss3_hide(){
    $("#weight_loss_dialog_3").hide();
    $("#weight_loss_dialog_form_3").trigger("reset");
  }
  function weight_loss4_hide(){
    $("#weight_loss_dialog_4").hide();
    $("#weight_loss_dialog_form_4").trigger("reset");
  }
  function weight_loss5_hide(){
    $("#weight_loss_dialog_5").hide();
    $("#weight_loss_dialog_form_5").trigger("reset");
  }
  function weight_loss6_hide(){
    $("#weight_loss_dialog_6").hide();
    $("#weight_loss_dialog_form_6").trigger("reset");
  }

  //slow growth
  function slow_growth1_hide(){
    $("#slow_growth_dialog_1").hide();
    $("#slow_growth_dialog_form_1").trigger("reset");
  }
  function slow_growth2_hide(){
    $("#slow_growth_dialog_2").hide();
    $("#slow_growth_dialog_form_2").trigger("reset");
  }
  function slow_growth3_hide(){
    $("#slow_growth_dialog_3").hide();
    $("#slow_growth_dialog_form_3").trigger("reset");
  }
  function slow_growth4_hide(){
    $("#slow_growth_dialog_4").hide();
    $("#slow_growth_dialog_form_4").trigger("reset");
  }
  function slow_growth5_hide(){
    $("#slow_growth_dialog_5").hide();
    $("#slow_growth_dialog_form_5").trigger("reset");
  }
  function slow_growth6_hide(){
    $("#slow_growth_dialog_6").hide();
    $("#slow_growth_dialog_form_6").trigger("reset");
  }

  //trembling
  function trembling1_hide(){
    $("#trembling_dialog_1").hide();
    $("#trembling_dialog_form_1").trigger("reset");
  }
  function trembling2_hide(){
    $("#trembling_dialog_2").hide();
    $("#trembling_dialog_form_2").trigger("reset");
  }
  function trembling3_hide(){
    $("#trembling_dialog_3").hide();
    $("#trembling_dialog_form_3").trigger("reset");
  }
  function trembling4_hide(){
    $("#trembling_dialog_4").hide();
    $("#trembling_dialog_form_4").trigger("reset");
  }

  //vomiting
  function vomiting1_hide(){
    $("#vomiting_dialog_1").hide();
    $("#vomiting_dialog_form_1").trigger("reset");
  }

  //conclusion and autosaving function
  function conclusion(diseaseName, diseaseID){
    //this function will interact with the database
    db.transaction(function(transaction){
      // Get the <span> element that closes the modal
      span.onclick = function() {
      modal.style.display = "none";
      window.location.href='problem_identifier.html';
      alert("Identified problem automatically been saved");
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        window.location.href='problem_identifier.html';
       alert("Identified problem automatically been saved");
      }
    }

    $(".inner_div").hide();

    var sql="SELECT * FROM disease_table WHERE id = " + diseaseID;
    transaction.executeSql(sql,undefined,function(transaction,result) {
    if(result.rows.length){
      for(var i=0;i<result.rows.length;i++){
        var row=result.rows.item(i);
        var disease_name=row.disease_name;
        var description=row.description;
        var symptoms=row.symptoms;
        var cause=row.cause;
        var treatment=row.treatment;
        var prevention=row.prevention;


      $("#disease").append('<h5 class="h5_disease_name">Disease name</h5><p class="disease_name">'+disease_name+'</p><h5 class="h5_description">Description</h5><p class="description">'+description+'</p> <h5 class="h5_observed">Your observed signs & symptoms</h5> <button class="view_observed">View</button><button class="hide_observed">Hide</button> <p class="observed">'+observed_symptoms+'</p> <h5 class="h5_symptoms">Signs & symptoms</h5><button class="view_symptoms">View</button><button class="hide_symptoms">Hide</button><p class="symptoms">'+symptoms+'</p>  <h5 class="h5_cause">Cause</h5><button class="view_cause">View</button><button class="hide_cause">Hide</button><p class="cause">'+cause+'</p><h5 class="h5_treatment">Treatment</h5><button class="view_treatment">View</button><button class="hide_treatment">Hide</button><p class="treatment">'+treatment+'</p><h5 class="h5_prevention">Prevention</h5><button class="view_prevention">View</button><button class="hide_prevention">Hide</button><p class="prevention">'+prevention+'</p>');

        //symptoms
        $(".symptoms").hide();
        $(".hide_symptoms").hide();

        //viewing and hiding functions of the details of a specific indentified disease
        $(".view_symptoms").on("click",function(){
         $(".symptoms").show();
         $(".view_symptoms").hide();
         $(".hide_symptoms").show();
        });
        $(".hide_symptoms").on("click",function(){
          $(".view_symptoms").show();
          $(".symptoms").hide();
          $(".hide_symptoms").hide();
        });

       //observed symptoms
       $(".observed").hide();
       $(".hide_observed").hide();

       //viewing and hiding functions of the details of a specific indentified disease
       $(".view_observed").on("click",function(){
        $(".observed").show();
        $(".view_observed").hide();
        $(".hide_observed").show();
       });
       $(".hide_observed").on("click",function(){
         $(".view_observed").show();
         $(".observed").hide();
         $(".hide_observed").hide();
       });


        //cause
        $(".cause").hide();
        $(".hide_cause").hide();

        //viewing and hiding functions of the details of a specific indentified disease
        $(".view_cause").on("click",function(){
         $(".cause").show();
         $(".view_cause").hide();
         $(".hide_cause").show();
        });
        $(".hide_cause").on("click",function(){
          $(".view_cause").show();
          $(".cause").hide();
          $(".hide_cause").hide();
        });


        //treatment
        $(".treatment").hide();
        $(".hide_treatment").hide();

        //viewing and hiding functions of the details of a specific indentified disease
        $(".view_treatment").on("click",function(){
         $(".treatment").show();
         $(".view_treatment").hide();
         $(".hide_treatment").show();
        });
        $(".hide_treatment").on("click",function(){
          $(".view_treatment").show();
          $(".treatment").hide();
          $(".hide_treatment").hide();
        });

        //prevention
        $(".prevention").hide();
        $(".hide_prevention").hide();

        //viewing and hiding functions of the details of a specific indentified disease
        $(".view_prevention").on("click",function(){
         $(".prevention").show();
         $(".view_prevention").hide();
         $(".hide_prevention").show();
        });
        $(".hide_prevention").on("click",function(){
          $(".view_prevention").show();
          $(".prevention").hide();
          $(".hide_prevention").hide();
        });


        modal.style.display = "block";
          }
        }
      },function(transaction,err){
        alert(err.message);
      });
    });

    //for saving date
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

     var today = year + "-" + month + "-" + day;

     var date_identified = today;

    db.transaction(function(transaction){
      var sql="INSERT INTO problem_table (disease_id,problem,observed_symptoms,date) VALUES(?,?,?,?)";
        transaction.executeSql(sql,[diseaseID,diseaseName,observed_symptoms,date_identified],function(){
        },function(transaction,err){
      alert(err.message);
      });
    });
  }

  //alert functions
  function alert_unknown(){
    var desc_str = "Intestinal Parasite" + ", " + Pneumonia_Name + ", " + Swine_Dysentery_Name + ", " + E_Coli_Name + ", " + "and " + Swine_Fever_Name;

    //alert title
    $("#alert_title").text("The observed signs and symptoms are not covered in this application");

    //alert desc
    $("#description").text(desc_str);

    //alert oss
    $("#alert_oss_tab").text("The observed signs and symptoms");

    //alert observed symptoms
    $("#observedSymptoms").text(observed_symptoms);

    $("#description").hide();
    $("#hide_desc").hide();
    $("#observedSymptoms").hide();
    $("#hide_os").hide();
    var dialog = document.getElementById('my-dialog');
    dialog.show();
  }

  //INSERTING DATA INTO TABLE WHEN PRESSING THE PROCEED BUTTON
  $("#proceed_button").click(function(){
  var disease_id=$("#disease_id").val();
  var problem=$("#problem").val();

  var observed2 = localStorage.getItem("observed1");


  //for saving date
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

   var today = year + "-" + month + "-" + day;
   var date_identified = today;
  
  db.transaction(function(transaction){
  var sql="INSERT INTO problem_table (disease_id,observed_symptoms,problem,date) VALUES(?,?,?,?)";
  transaction.executeSql(sql,[disease_id,observed2,problem,date_identified],function(){
    alert("Identified problem automatically been saved");
    window.location.href='../problem_identifier.html';
  },function(transaction,err){
    alert(err.message);
  })
  })
  })


  //modal function
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];

  //modal function
  var modal3 = document.getElementById("myModal3");

  // Get the <span> element that closes the modal
  var span3 = document.getElementsByClassName("close3")[0];

});
