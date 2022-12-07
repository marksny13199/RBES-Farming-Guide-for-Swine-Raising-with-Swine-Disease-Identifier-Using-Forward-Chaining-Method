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

      //to check what is the highest probability
      if (Swine_Dysentery_Output == highest_prob){
        window.location.href='./Diseases_Page/Swine Dysentery.html';
      }
      if (Hog_Cholera_Output == highest_prob){
        window.location.href='./Diseases_Page/Hog Cholera.html';
      }
      if (Intestinal_parasites_Output == highest_prob){
        window.location.href='./Diseases_Page/Intestinal parasites.html';
      }
      if (E_Coli_Output == highest_prob){
        window.location.href='./Diseases_Page/E-Coli.html';
      }
      if (Foot_and_mouth_Output == highest_prob){
        window.location.href='./Diseases_Page/Foot and mouth disease.html';
      }
      if (Coccidiosis_Output == highest_prob){
        window.location.href='./Diseases_Page/Coccidiosis.html';
      }
      if (Anemia_Output == highest_prob){
        window.location.href='./Diseases_Page/Anemia.html';
      }
  }
