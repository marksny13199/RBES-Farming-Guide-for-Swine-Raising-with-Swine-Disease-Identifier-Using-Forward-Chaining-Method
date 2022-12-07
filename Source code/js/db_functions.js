var db=openDatabase("expert_db","1.0","expert_db", 65535); // creating of database, expert_db is the database name

var observed3;
var test;

$(function(){

loadData(); //Function to load our saved problems

//creation of problem_table
db.transaction(function(transaction){
	var sql="CREATE TABLE problem_table "+
	"(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT NOT NULL ,"+
	"disease_id INTEGER(50) NOT NULL,"+
	"observed_symptoms INTEGER(50) NOT NULL,"+
	"problem VARCHAR(100) NOT NULL,"+
	"date VARCHAR(100) NOT NULL)";
	transaction.executeSql(sql,undefined,function(){

	})
});

//creation of disease_table
//details of the disease are in here
db.transaction(function(transaction){
	var sql="CREATE TABLE disease_table "+
	"(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT NOT NULL ,"+
	"disease_name VARCHAR(100) NOT NULL,"+
	"description VARCHAR(100) NOT NULL,"+
	"symptoms VARCHAR(100) NOT NULL,"+
	"cause VARCHAR(100) NOT NULL,"+
	"treatment VARCHAR(100) NOT NULL,"+
	"prevention VARCHAR(100) NOT NULL)";
	transaction.executeSql(sql,undefined,function(){
		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, symptoms, cause, treatment, prevention) VALUES (0," Unknown Disease", " We cannot identify the disease, please consult a vetenenarian for further observations. ~ (Hindi namin makita ang sakit ng baboy mo, maaaring pumunta sa isang vetenenarian upang masuri pa ng husto ang iyong baboy.) ", " N/A " , " N/A ", "  N/A " , " N/A ")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, symptoms, cause, treatment, prevention) VALUES (1, "Intestinal Parasite ", " The Intestinal Parasite in swine resides in the stomach that irritates them and cause a lot of problems for their growth and digestion. The ascaris parasite is one of the most common internal parasites that is a large white roundworm that is found inside the small intestine. ~ (Ang Intestinal Parasite sa baboy ay naninirahan sa tiyan na nakakairita sa kanila at nagdudulot ng maraming problema sa kanilang paglaki at panunaw. Ang ascaris parasite ay isa sa mga pinakakaraniwang panloob na parasito na isang malaking puting roundworm na matatagpuan sa loob ng maliit na bituka.)", " Coughing (Pag-uubo), Diarrhea (Pag-tatae) or Live Worms Expelled in the feces (Pag-tatae na merong uod), Weight loss (Nababaawasan ang timbang) or Slow growth (Mabagal na paglaki), and Trembling (Panginginig) " , " The intestinal parasite is particularly come from oral ingestion of worm eggs this is due to the environment and sudden climate changes, dirty pens or lots may have more worm eggs and may cause internal parasites after the swine ingest it. ~ (Ang bituka na parasito ay partikular na nagmumula sa oral na paglunok ng mga itlog ng bulate ito ay dahil sa kapaligiran at biglaang pagbabago ng klima, ang maruming mga kulungan o lote ay maaaring magkaroon ng mas maraming itlog ng bulate at maaaring maging sanhi ng mga panloob na parasito pagkatapos itong kainin ng baboy.)", "  Use multi-vitamins powder and add it into a water soluble for easy digestion or use B-complex (injection) the following dosage and instruction are present in the vials make sure to check before you buy. ~ (Gumamit ng multi-vitamins powder at idagdag ito sa nalulusaw sa tubig para madaling matunaw o gamitin ang B-complex (injection) ang sumusunod na dosis at ang pagtuturo ay nasa mga vial siguraduhing suriin bago ka bumili.) " , " Clean the area and provide better shelter or pen that may help get rid or prevent of the worm eggs, also deworm the are every month.  ~ (Linisin ang lugar at magbigay ng mas magandang silungan o kulungan na maaaring makatulong sa pag-alis o pag-iwas sa mga itlog ng bulate, pati na rin ang pag-deworm sa bawat buwan.) ")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, symptoms, cause, treatment, prevention) VALUES (2," Pneumonia", " Pneumonia is an important disease and one of the factors is that it can cause limitation of production in swine and may have poor weight gain. ~ (Ang pulmonya ay isang mahalagang sakit at isa sa mga kadahilanan ay na ito ay maaaring maging sanhi ng limitasyon ng produksyon sa mga baboy at maaaring magkaroon ng mahinang pagtaas ng timbang.) ", " Coughing (Pag-uubo), Diarrhea (Pag-tatae), Fever (Lagnat) or Reddening of Eyes (Pamumula ng mga mata), Loss of Appetite (Walang ganang kumain), Weight loss (Nababaawasan ang timbang) or Slow growth (Mabagal na paglaki), and Trembling (Panginginig)" , " One of the causes are cold or wet floor that can give cold temperature for the swine, viruses and bacteria that gets from the dirt or dusty areas. ~ (Isa sa mga sanhi ay malamig o basang sahig na maaaring magbigay ng malamig na temperatura para sa mga baboy, mga virus at bacteria na nakukuha mula sa mga dumi o maalikabok na lugar.) ", "  Use heavy antibiotics for medications such as Terramycin La (Pfizer) or Enrofloxacin (Baytril) the number of dosage and instruction are present in the vials. ~ (Gumamit ng mabibigat na antibiotic para sa mga gamot tulad ng Terramycin La (Pfizer) o Enrofloxacin (Baytril) ang bilang ng dosis at pagtuturo ay nasa mga vials.) " , " Avoid wet floor (keep it dry) in the afternoon up to evening. Only clean and bath them in the morning until 10:00am after that let the floor dry. ~ (Iwasan ang basang sahig (panatilihin itong tuyo) sa hapon hanggang gabi. Linisin lamang at paliguan ang mga ito sa umaga hanggang 10:00am pagkatapos nito hayaang matuyo ang sahig.) ")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, symptoms, cause, treatment, prevention) VALUES (3," Swine Dysentery", " The Swine dysentery (SD) is one of the severe infectious diseases that is characterized by mucohemorrhagic diarrhea and marked inflammation limited to the large intestine. ~ (Ang Swine dysentery (SD) ay isa sa mga malubhang nakakahawang sakit na nailalarawan sa pamamagitan ng mucohemorrhagic diarrhea at markang pamamaga na limitado sa malaking bituka.) ", " Diarrhea or Bloody Diarrhea (Madugong pag-tatae), and Weight loss (Nababawasan ang timbang)  or Slow growth (Mabagal na paglaki)" , " Fecal-oral transmission occurs, and sources of infection include infected swine feces, contaminated lagoon water, and contaminated transport vehicles. ~ (Nangyayari ang fecal-oral transmission, at ang mga pinagmumulan ng impeksyon ay kinabibilangan ng mga nahawaang dumi ng baboy, kontaminadong tubig sa lagoon, at kontaminadong sasakyang pang-transportasyon.) ", " Water medication or herbal medicines that can be used to relieve the symptoms. If the problems need further medication use injectable vials such as Terramycin La (Pfizer) or Enrofloxacin (Baytri) the dosage and instruction are given in the vials.  ~ (Tubig na gamot o mga halamang gamot na maaaring gamitin upang maibsan ang mga sintomas. Kung ang mga problema ay nangangailangan ng karagdagang gamot, gumamit ng mga injectable vial tulad ng Terramycin La (Pfizer) o Enrofloxacin (Baytri) ang dosis at pagtuturo ay ibinibigay sa mga vial.) " , " Use any Water-soluble antibiotics with multi-vitamins and also always disinfect the area. (Gumamit ng anumang antibiotic na nalulusaw sa tubig na may mga multi-vitamin at dapat palaging i-disinfect ang lugar.) ")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, symptoms, cause, treatment, prevention) VALUES (4," E–Coli", " Colibacillosis, also known as E. coli infection, which is a typical bacterial disease caused by pathogenic Escherichia coli, is one of the major diseases for the swine industry (E. coli). It primarily injures and kills neonatal and recently weaned pigs. ~ (Ang Colibacillosis, na kilala rin bilang impeksyon sa E. coli, na isang tipikal na sakit na bacterial na dulot ng pathogenic na Escherichia coli, ay isa sa mga pangunahing sakit para sa industriya ng baboy (E. coli). Pangunahin nitong sinasaktan at pinapatay ang mga neonatal at kamakailang naalis na mga baboy.) ", " Diarrhea (Page-tatae) and Vomiting (Pag-susuka) " , " One of the causes of E-coli is ingesting bacteria in the feces of infected swine mostly this is because of unscheduled feeding or wrong food or feeds that may get them infected and vulnerable in infections. ~ (Isa sa mga sanhi ng E-coli ay ang paglunok ng bacteria sa dumi ng mga infected na baboy kadalasan ito ay dahil sa unscheduled feeding o maling pagkain o feeds na maaaring mahawa at madaling mahawa sa impeksyon.) ", "  Water-soluble antibiotics with multi-vitamins as medication and they should be treated individually to not cause some infections. ~ (Mga antibiotic na nalulusaw sa tubig na may mga multi-bitamina bilang gamot at dapat silang tratuhin nang paisa-isa upang hindi magdulot ng ilang impeksiyon.) " , " Keep the water source clean and surroundings clean. As for the food or feeds it must be new or latest. (Panatilihing malinis ang pinagmumulan ng tubig at malinis ang paligid. Kung tungkol sa pagkain o mga feed ay dapat na bago o pinakabago.) ")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, symptoms, cause, treatment, prevention) VALUES (5," Swine Fever", " Swine Fever is one of the viral diseases that is highly contagious and deadly in both domestic and feral swine of all ages. This cannot be transmitted from pigs to human and it is not food safety issue. ~ (Ang Swine Fever ay isa sa mga viral na sakit na lubhang nakakahawa at nakamamatay sa parehong domestic at feral na baboy sa lahat ng edad. Hindi ito maipapasa mula sa baboy patungo sa tao at hindi ito isyu sa kaligtasan ng pagkain.) ", " Fever (Lagnat) or Reddening of eyes (Pamumula ng mga mata), Loss of appetite (Walang ganang kumain), and Trembling (Panginginig) " , " The swine fever has a variety of causes such as Reddening of eyes, fever and insect bites (mosquitos). ~ (Ang swine fever ay may ibat ibang dahilan tulad ng pamumula ng mata, lagnat, at kagat ng insekto (lamok).) ", " Injecting Penicillin sulfa will help treat the fever the number of dosage and instruction are already present in the vials. ~ (Ang pag-iniksyon ng Penicillin sulfa ay makakatulong sa paggamot sa lagnat ang bilang ng dosis at pagtuturo ay naroroon na sa mga vial.) " , " Cleaning the surroundings or area, and always disinfect the area. ~ (Paglilinis ng paligid o lugar, at palaging disimpektahin ang lugar.) ")');

		});
	})
});


// for removing and refreshing of all tables
$("#delete_all_problem").click(function(){
db.transaction(function(transaction){
	var sql="DROP TABLE disease_table";
	transaction.executeSql(sql,undefined,function(){

	},function(transaction,err){
		alert(err.message);
	})
});
});

$("#delete_all_problem").click(function(){

	if(!confirm("Are you sure you want to delete all the saved diseases?","")) return;;
	db.transaction(function(transaction){
		var sql="DROP TABLE problem_table";
		transaction.executeSql(sql,undefined,function(){
			alert("All saved diseases succesfully been deleted");
			window.location.href='ProblemPage.html';
		},function(transaction,err){
			alert(err.message);
		})
	});
});

//DELETING TABLE ENDS HERE

//Function to load our saved problems
function loadData(){
	$("#problem_list").children().remove();
	db.transaction(function(transaction){
	var sql="SELECT * FROM problem_table ORDER BY id DESC";
	transaction.executeSql(sql,undefined,function(transaction,result){
if(result.rows.length){

for(var i=0;i<result.rows.length;i++){
	var row=result.rows.item(i);
	var disease_id= row.disease_id;
	var problem=row.problem;
	var id=row.id;
	var date=row.date;
	$("#problem_list").append('<tr id="del'+id+'"><td id="problem_header">'+problem+'</td><td class="date_content" id="newqty'+id+'">'+date+'</td><td><center><button href="#" class="fa fa-trash delete_problem" data-id="'+id+'"> </button></center></td><td><center><button href="#" data-toggle="modal" data-target="#exampleModal" class="fas fa-eye view_problem" data-id="'+id+'"data-disease_id="'+disease_id+'"></button></center></td></center></tr> ');
	 }
   }
 })
})

//deleting a specific saved problem
setTimeout(function(){
 $(".delete_problem").click(function(){
  var sure=confirm("Are you sure you want to delete this saved disease?");
  if(sure===true){
  var id=$(this).data("id");
  db.transaction(function(transaction){
  var sql="DELETE FROM problem_table where id=?";
  transaction.executeSql(sql,[id],function(){
  $("#del"+id).fadeOut();
	alert("Disease identified deleted successfully");
   },function(transaction,err){
		alert(err.message);
	   })
	});
   }
})

//viewing the details of a specific saved problem
$(".view_problem").on("click",function(){
	var disease_id=$(this).data("disease_id");
	var observed_id=$(this).data("id");

	console.log(observed_id);
	
	db.transaction(function(transaction){
		var observedSql= "SELECT * FROM problem_table WHERE id = ?"
		transaction.executeSql(observedSql,[observed_id],function(transaction,result2) {
			if(result2.rows.length){

				for(var a=0;a<result2.rows.length;a++){
					var row2=result2.rows.item(a);
					var g =row2.observed_symptoms;
				}
				}
	
			// fetching observed signs and symptoms
			localStorage.setItem("observed2", g);

			if (disease_id == 1){
				window.location.href='saved_conclusions/IntestinalParasites.html';
			}
			if (disease_id == 2){
				window.location.href='saved_conclusions/Pneumonia.html';
			}
			if (disease_id == 3){
				window.location.href='saved_conclusions/SwineDysentery.html';
			}
			if (disease_id == 4){
				window.location.href='saved_conclusions/E-Coli.html';
			}
			if (disease_id == 5){
				window.location.href='saved_conclusions/SwineFever.html';
			}
			
		},function(transaction,err){
			alert(err.message);
		})
  	})
  	

	 

		

});
},100);
}
	//END OF loadData() function

	//MODAL FUNCTIONS
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
    var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    window.location.href='ProblemPage.html';
    }

	// When the user clicks anywhere outside of the modal, close it
  	window.onclick = function(event) {
  	if (event.target == modal) {
    modal.style.display = "none";
    window.location.href='ProblemPage.html';
    }
  }
});
