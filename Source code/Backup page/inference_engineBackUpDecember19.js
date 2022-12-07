      let conflict_set = [];
      var Swine_Dysentery=0;
      var Hog_Cholera=0;
      var Intestinal_parasites=0;
      var E_Coli=0;
      var Foot_and_mouth=0;
      var Coccidiosis=0;
      var Anemia=0;

      var Swine_Dysentery_Output=0.0;
      var Hog_Cholera_Output=0.0;
      var Intestinal_parasites_Output=0.0;
      var E_Coli_Output=0.0;
      var Foot_and_mouth_Output=0.0;
      var Coccidiosis_Output=0.0;
      var Anemia_Output=0.0;

   
      var confirmG;

      function inference_engine(form) {
       var knownfacts = form.fact;
       var Factvalues = [];
       

      //for storing inputs of known facts inputted by the user
      // inside this array will be compare to the rules
      for (var i=0, iLen=knownfacts.length; i<iLen; i++) {
         if (knownfacts[i].checked) {
          Factvalues.push(knownfacts[i].value);
          }
       }

       //this section serves as the rules
       
       //first rule
       for(var rule1 = 0; rule1 <= Factvalues.length; rule1++){
        if (Factvalues[rule1] == "bloody_diarrhea"){
            Swine_Dysentery++;  
        }
        if (Factvalues[rule1] == "dehydration"){
            Swine_Dysentery++;
        }
        if (Factvalues[rule1] == "weakness"){
            Swine_Dysentery++;
        }
        if (Factvalues[rule1] == "skinny"){
            Swine_Dysentery++;
        }
        if (Swine_Dysentery == 4){
          window.location.href='./Diseases_Page/Swine Dysentery.html';
          break;
        }
        if (Swine_Dysentery != 4){
         Swine_Dysentery_Output = Swine_Dysentery / 23 * 100;
        }
        }
        conflict_set.push(Swine_Dysentery_Output); 
        //second rule
        for(var rule2 = 0; rule2 <= Factvalues.length; rule2++){
          if (Factvalues[rule2] == "weakness"){
              Hog_Cholera++;
          }
          if (Factvalues[rule2] == "fever"){
              Hog_Cholera++;
          }
          if (Factvalues[rule2] == "constipation_then_diarrhea"){
              Hog_Cholera++;
          }
          if (Factvalues[rule2] == "vomiting"){
             Hog_Cholera++;
          }
          if (Factvalues[rule2] == "loss_of_appetite"){
              Hog_Cholera++;
          }
          if (Factvalues[rule2] == "trembling"){
              Hog_Cholera++;
          } 
          if (Hog_Cholera == 6){
            window.location.href='./Diseases_Page/Hog Cholera.html';
            break;
          }
          if (Hog_Cholera != 6){
            Hog_Cholera_Output = Hog_Cholera / 23 * 100;
           }
          }
           conflict_set.push(Hog_Cholera_Output); 
          //third rule
          for(var rule3 = 0; rule3 <= Factvalues.length; rule3++){
            if (Factvalues[rule3] == "live_worms_expelled_in_the_feces"){
              Intestinal_parasites++;
            }
            if (Factvalues[rule3] == "diarrhea"){
              Intestinal_parasites++;
            }
            if (Factvalues[rule3] == "weight_loss"){
              Intestinal_parasites++;
            }
            if (Factvalues[rule3] == "slow_growth"){
              Intestinal_parasites++;
            }
            if (Factvalues[rule3] == "coughing"){
              Intestinal_parasites++;
            }
            if (Factvalues[rule3] == "loss_of_appetite"){
              Intestinal_parasites++;
            } 
            if (Intestinal_parasites == 6){
              window.location.href='./Diseases_Page/Intestinal parasites.html';
              break;
            }
            if (Intestinal_parasites != 6){
              Intestinal_parasites_Output = Intestinal_parasites / 23 * 100;
             }
            }
             conflict_set.push(Intestinal_parasites_Output); 
          
            //fourth rule
            for(var rule4 = 0; rule4 <= Factvalues.length; rule4++){
              if (Factvalues[rule4] == "whitish_to_yellowish_diarrhea"){
                  E_Coli++;
              }
              if (Factvalues[rule4] == "vomiting"){
                  E_Coli++;
              }
              if (Factvalues[rule4] == "dehydration"){
                  E_Coli++;
              }
              if (E_Coli == 3){
                window.location.href='./Diseases_Page/E-Coli.html';
                break;
              }
              if (E_Coli != 3){
                E_Coli_Output = E_Coli / 23 * 100;
               }
              }
               conflict_set.push(E_Coli_Output); 

             //fifth rule
             for(var rule5 = 0; rule5 <= Factvalues.length; rule5++){
              if (Factvalues[rule5] == "skin_rash_on_hands_mouth_and_or_feet"){
                  Foot_and_mouth++;
              }
              if (Factvalues[rule5] == "fever"){
                  Foot_and_mouth++;
              }
              if (Factvalues[rule5] == "loss_of_appetite"){
                  Foot_and_mouth++;
              }
              if (Factvalues[rule5] == "excessive_salivation"){
                  Foot_and_mouth++;
              }
              if (Foot_and_mouth == 4){
                window.location.href='./Diseases_Page/Foot and mouth disease.html';
                break;
              }
              if (Foot_and_mouth != 4){
                Foot_and_mouth_Output = Foot_and_mouth / 23 * 100;
               }
              }
               conflict_set.push(Foot_and_mouth_Output); 

              //sixth rule
              for(var rule6 = 0; rule6 <= Factvalues.length; rule6++){
                if (Factvalues[rule6] == "yellow_to_clear_and_pasty_diarrhea_or_bloody"){
                   Coccidiosis++;
                }
                if (Factvalues[rule6] == "dehydration"){
                   Coccidiosis++;
                }
                if (Factvalues[rule6] == "failure_to_gain_weight"){
                   Coccidiosis++;
                }
                if (Factvalues[rule6] == "acidic_feces"){
                   Coccidiosis++;
                }
                if (Coccidiosis == 4){
                  window.location.href='./Diseases_Page/Coccidiosis.html';
                  break;
                }
                if (Coccidiosis != 4){
                  Coccidiosis_Output = Coccidiosis / 23 * 100;
                 }
                }
                 conflict_set.push(Coccidiosis_Output); 

                //seventh rule
                for(var rule7 = 0; rule7 <= Factvalues.length; rule7++){
                  if (Factvalues[rule7] == "skin_has_slight_yellow_appearance"){
                     Anemia++;
                  }
                  if (Factvalues[rule7] == "rapid_breathing"){
                     Anemia++;
                  }
                  if (Factvalues[rule7] == "weakness"){
                      Anemia++;
                  }
                  if (Factvalues[rule7] == "hemorrhage"){
                      Anemia++;
                  }
                  if (Anemia == 4){
                    window.location.href='./Diseases_Page/Coccidiosis.html';
                    break;
                  }
                  if (Anemia != 4){
                    Anemia_Output = Anemia / 23 * 100;
                   }
                  }
                   conflict_set.push(Anemia_Output); 


                  console.log(conflict_set);

                  

                  
      //this part will determine what is the highest probability to be deduce.
      //note loop when storing value in an array

      //declare an emplty array to concatenate with the probablity output from the if else statement or from the rule
      var probability = [];

      var probability_final = probability.concat(conflict_set);
      
       //set the value from the first index
       var highest_prob = probability_final[0];

       //compare and determine what is the highest value inside the array
      for (var i = 0; i < probability_final.length ;i++){
         if (probability_final[i] >= highest_prob){
           highest_prob = probability_final[i];
         }
      }

      //to check if the highest probability is on conflic then proceed to the next page to verify again

        //for rule 1

        //verify if rule 1 and rule 2 has the same probability
      
        //verify 2 rules if it is equal

        //check if rule 1 2 is equal
        if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
          window.location.href='Diseases_Page/Verify_2_rules/VerifyRule1&2.html';
        }
        //check if rule 1 3 is equal
        else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
          window.location.href='Diseases_Page/Verify_2_rules/VerifyRule1&3.html';
        }
        // check if rule 1 4 is equal
        else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
          window.location.href='Diseases_Page/Verify_2_rules/VerifyRule1&4.html';
        }
         // check if rule 1 5 is equal
        else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
          window.location.href='Diseases_Page/Verify_2_rules/VerifyRule1&5.html';
        }
        // check if rule 1 6 is equal
        else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
          window.location.href='Diseases_Page/Verify_2_rules/VerifyRule1&6.html';
        }
        // check if rule 1 7 is equal
        else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
          window.location.href='Diseases_Page/Verify_2_rules/VerifyRule1&7.html';
        }
       //verify 3 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
          console.log("rule 1 2 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("rule 1 2 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 1 2 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 1 2 6");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 1 2 7");
       }
       //verify 4 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("rule 1 2 3 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("rule 1 2 3 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("rule 1 2 3 6");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("rule 1 2 3 7");
       }
       //verify by 5 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("rule 1 2 3 4 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("rule 1 2 3 4 6");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 1 2 3 4 7");
       }
       //verify by 6 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 1 2 3 4 5 6");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 1 2 3 4 5 7");
       }
       //verify by 7 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 1 2 3 4 5 6 7");
       }


       //verify for rule 2
       //verify 2 rules

       //check if rule 2 & 1 is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        window.location.href='Diseases_Page/Verify_2_rules/VerifyRule2&1.html';
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        window.location.href='Diseases_Page/Verify_2_rules/VerifyRule2&3.html';
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        window.location.href='Diseases_Page/Verify_2_rules/VerifyRule2&4.html';
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        window.location.href='Diseases_Page/Verify_2_rules/VerifyRule2&5.html';
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        window.location.href='Diseases_Page/Verify_2_rules/VerifyRule2&6.html';
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        window.location.href='Diseases_Page/Verify_2_rules/VerifyRule2&7.html';
       }

       //verify 3 rules   
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 2 3 7");
       }

       //verify 4 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 2 3 4 7");
       }

       //verify 5 rules it is is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4 5 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4 5 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 2 3 4 5 7");
       }

       //verify 6 rules if it is equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 2 3 4 5 6 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 2 3 4 5 6 7");
       }

       //verify 7 rules of ot os equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 2 3 4 5 6 7 1");
       }

       //rule 3

       //verify if 2 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 7");
       }

       //verify if 3 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 4 7");
       }

       //verify if 4 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 5 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 5 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 5 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 4 5 7");
       }

       //verify if 5 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 5 6 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 3 4 5 6 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 4 5 6 7");
       }

      //verify if 6 rules are equal
      else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 4 5 6 7 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 4 5 6 7 2");
       }

       //verify if 7 rules are equal

       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 3 4 5 6 7 1 2");
       }


       //rule4

       //verify if 2 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 1");
       } 
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 7");
       }

       //verify if 3 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 7");
       }

       //verify if 4 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 6 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 6 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 4 5 6 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7");
       }

       //verify if 5 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7 3");
       }

       //verify if 6 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7 1 2");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7 1 3");
       }

       //verify if 7 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 4 5 6 7 1 2 3");
       }

       //rule 5

       //verify if 2 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 6");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 7");
       }

       //verify if 3 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 6 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 6 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 6 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 5 6 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7");
       }

       //verify if 4 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 4");
       }

       //verify if 5 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1 2");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1 4");
       }
       //verify if 6 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1 2 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1 2 4");
       }

       //verify if 7 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 5 6 7 1 2 3 4");
       }

      //rule 6

      //veirify if 2 rules are equal
      else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 6 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 6 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 6 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 6 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output != highest_prob){
        console.log("Rule 6 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7");
       }

       //verify if 3 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 5");
       }

       //verify if 4 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 5");
       }

       //verify if 5 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2 5");
       }

       //verify if 6 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2 3 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2 3 5");
       }

       //verify if 7 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 6 7 1 2 3 4 5");
       }

       //rule 7

       //verify if 2 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 2");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 3");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 4");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 5");
       }
       else if (Swine_Dysentery_Output != highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 6");
       }

       //verify if 3 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output != highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 6");
       }

       //verify if 4 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output != highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 6");
       }

       //verify if 5 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3 4");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output != highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3 6");
       }

       //verify if 6 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output != highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3 4 5");
       }
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output != highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3 4 6");
       }

       //verify if 7 rules are equal
       else if (Swine_Dysentery_Output == highest_prob && Hog_Cholera_Output == highest_prob && Intestinal_parasites_Output == highest_prob && E_Coli_Output == highest_prob && Foot_and_mouth_Output == highest_prob && Coccidiosis_Output == highest_prob && Anemia_Output == highest_prob){
        console.log("Rule 7 1 2 3 4 5 6");
       }
  
      //to check what is the highest probability
      else if (Swine_Dysentery_Output == highest_prob){
        window.location.href='./Diseases_Page/Swine Dysentery.html';
      }
      else if (Hog_Cholera_Output == highest_prob){
        window.location.href='./Diseases_Page/Hog Cholera.html';
      }
      else if (Intestinal_parasites_Output == highest_prob){
        window.location.href='./Diseases_Page/Intestinal parasites.html';
      }
      else if (E_Coli_Output == highest_prob){
        window.location.href='./Diseases_Page/E-Coli.html';
      }
      else if (Foot_and_mouth_Output == highest_prob){
        window.location.href='./Diseases_Page/Foot and mouth disease.html';
      }
      else if (Coccidiosis_Output == highest_prob){
        window.location.href='./Diseases_Page/Coccidiosis.html';
      }
      else if (Anemia_Output == highest_prob){
        window.location.href='./Diseases_Page/Anemia.html';
      } 
     
  }
  
  
