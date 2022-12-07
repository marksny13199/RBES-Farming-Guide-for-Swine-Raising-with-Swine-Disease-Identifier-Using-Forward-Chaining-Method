var db=openDatabase("expert_db","1.0","expert_db", 65535); // creating of database, expert_db is the database name


$(function(){

loadData(); //loading problem_list

//creation of problem_table
db.transaction(function(transaction){
	var sql="CREATE TABLE problem_table "+
	"(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT NOT NULL ,"+
	"disease_id INTEGER(50) NOT NULL,"+
	"problem VARCHAR(100) NOT NULL,"+
	"date VARCHAR(100) NOT NULL)";
	transaction.executeSql(sql,undefined,function(){

	})
});

//creation of disease_table
db.transaction(function(transaction){
	var sql="CREATE TABLE disease_table "+
	"(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT NOT NULL ,"+
	"disease_name VARCHAR(100) NOT NULL,"+
	"description VARCHAR(100) NOT NULL,"+
	"cause VARCHAR(100) NOT NULL,"+
	"treatment VARCHAR(100) NOT NULL,"+
	"prevention VARCHAR(100) NOT NULL)";
	transaction.executeSql(sql,undefined,function(){
		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (1, "Hog Cholera", "Also known as swine fever, hog cholera is one of the most common diseases on commercial hog farms. This is a virus that causes widespread disease and symptoms such as paralysis, diarrhea, lack of appetite, fever, abortion, and often, death. It only spreads from pig to pig. The virus does not spread through the wind or via insects. " , "It is caused by a virus of the genus Pestivirus of the family Flaviviridae, which is closely related to the viruses that cause bovine viral diarrhoea in cattle and border disease in sheep.", "If the disease is still in its early stage, inject hog cholera serum. If the animal has been ill for more than three days, the serum is useless." , "Dead animals should be burned and buried with lime, Cook kitchen scraps before feeding, Practice regular vaccination, Disinfect pens of infected animals, Purchase animals from reputable sources, and Isolate newly purchased animals for observation for about a month.")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (2," Anemia", "Anemia is associated with the reduction of red blood cells in the body. It can happen as the result of a hemorrhage (often occurring during farrowing) as well as, more commonly, dietary insufficiencies." , "Anemia causes a variety of issues, including pale skin, rapid breathing, scours, weakness, and jaundice. It is most common in piglets and causes them to develop symptoms starting at about one week of age. " , "Piglets should be injected with 150-200mg of iron dextran in either a 1 or 2ml dose." , "To prevent piglets from becoming anemic, iron is best given from three to five days of age and not at birth.")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (3," E-Coli", "Colibacillosis, or E.coli infection, is one of the major diseases for swine industry which is a typical bacterial disease caused by pathogenic Escherichia coli (E. coli). It mostly causes illness and death in neonatal and recently weaned pigs." , "Pigs get E-Coli by ingesting (oral) the bacteria in the feces of infected pigs" , "Sick pigs should be treated individually and group treatment applied to the pigs by water medication. If pigs appear dehydrated, then electrolytes should be provided in a separate drinker supply. Antibiotics often used for the treatment of E. coli are apramycin, neomycin, tiamulin and sulphonamides" ,"Keep pigs and surroundings clean.")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (4," Foot and mouth disease", "Foot-and-mouth disease (FMD) is a highly contagious viral disease of many wild and domestic cloven-footed mammals and many other animals. In swine, the disease is characterized by vesicles on the feet, snout and in the mouth." , "Caused by a virus, foot and mouth disease causes fever, blisters, lameness, loss of appetite, excessive salivation, and death in many cases.", "The disease will be managed through quarantine, restriction of movement of animals in quarantined areas, slaughter followed by burial or incineration of infected and exposed animals and disinfection of production sites. Eradication is considered to be less costly than living with FMD." , "You need to vaccinate your breeding stock to prevent foot and mouth disease, but keep in mind that it’s short-lived. Vaccination should be done regularly in the fall months.")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (5," Coccidiosis", "A disease characterized by diarrhea in suckling and recently weaned pigs. The disease is usually caused by Isospora suis but occasionally by other Eimeria spp." , "Coccidiosis is caused by small parasites called coccidia that live and multiply inside the host cells, mainly in the intestinal tract. There are three types, Eimeria, Isospora and Cryptosporidia. Disease is common and widespread in sucking piglets and occasionally in pigs up to 15 weeks of age.", "Coccidiosis in piglets can be treated with trimethoprim sulphonamide and they should be supported with electrolyte. Toltrazuril given as an oral suspension by stomach tube on day 3 prevents diarrhoea, prevents oocyst shedding and can maintain piglet growth.", "One of the best ways to prevent a coccidiosis outbreak is by practicing responsible sanitation and litter management.")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (6," Swine Dysentery", "Swine dysentery (SD) is a severe, infectious disease characterized by mucohemorrhagic diarrhea and marked inflammation limited to the large intestine (cecum and/or colon). Spirochaetal colitis (SC) causes milder colitis in young -pigs." , "Swine dysentery (SD) is caused by a small, spiral shaped bacterium called Brachyspira hyodysenteriae.","Antimicrobials are an effective treatment for swine dysentery if started early, and water medication may be preferred,  Some herbal medicines can be used to relieve the symptoms of diarrhea and dehydration, Inject Tylosin into the hip or neck. Repeat injection for 3-4 days.", "Delay reusing the pens of infected animals and Disinfect pens")');
			tx.executeSql('INSERT INTO disease_table (id, disease_name , description, cause, treatment, prevention) VALUES (7," Intestinal Parasite", "The most common internal parasite of pigs is ascaris, a large white roundworm found in the small intestine. Other worms inhabit the stomach, large intestine and lungs. Worms affect pigs of all ages. " , "Internal parasites include various types of internal worms that can naturally infect pigs due to oral ingestion of worm eggs from the pig environment (pen floors, dirt lots, deep bedding, etc.). Once ingested, internal parasites go through several life-cycle changes as they mature "," Herbal medicine—betel nuts or leaves of sugar apple, for young pigs. Deworm with Latigo 50. Give 1-2 tablets per animal and for breeders (boars, sow, gilts). Deworm with Latigo 500. Give 2 tablets per animal.", "Keep animals and surroundings clean and Deworm, then repeat deworming after 21 days to break the life cycle of the roundworm. Then, deworm every three months.")');
		});
	})
});
// CREATING TABLE ENDS HERE

function load_disease(){

}

//For Removing tables so that dili na mag query query
//I hide lng ang buttons sa css
$("#remove").click(function(){

if(!confirm("Are you sure to delete this table?","")) return;;
db.transaction(function(transaction){
	var sql="DROP TABLE disease_table";
	transaction.executeSql(sql,undefined,function(){
		alert("Table is deleted successfully")
	},function(transaction,err){
		alert(err.message);
	})
});
});

$("#remove2").click(function(){

	if(!confirm("Are you sure to delete this table?","")) return;;
	db.transaction(function(transaction){
		var sql="DROP TABLE problem_table";
		transaction.executeSql(sql,undefined,function(){
			alert("Table is deleted successfully")
		},function(transaction,err){
			alert(err.message);
		})
	});
});
//DELETING TABLE ENDS HERE


//INSERTING DATA INTO TABLE WHEN PRESSING THE PROCEED BUTTON
$("#proceed_button").click(function(){
var disease_id=$("#disease_id").val();
var problem=$("#problem").val();
var date=$("#date").val();

db.transaction(function(transaction){
var sql="INSERT INTO problem_table (disease_id,problem,date) VALUES(?,?,?)";
transaction.executeSql(sql,[disease_id,problem,date],function(){
	alert("Identied disease automatically been saved");
	window.location.href='../home.html';
},function(transaction,err){
	alert(err.message);
})
})
})

//INSERTING DATA ENDS HERE


//FETCHING OUR RECORD
$("#list").click(function(){
loadData();
})

//FUNCTION TO LOAD OUR RECORDS
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
	$("#problem_list").append('<tr id="del'+id+'"><td id="problem_header">'+problem+'</td><td class="date_content" id="newqty'+id+'">'+date+'</td><td><center><button href="#" class="fa fa-trash delete_problem" data-id="'+id+'"> </button></center></td><td><center><button href="#" data-toggle="modal" data-target="#exampleModal" class="fas fa-eye view_problem" data-disease_id="'+disease_id+'"></button></center></td></center></tr>');
	 }
   }
 })
})

//setTimeout was used to execute codes inside it to be loaded after records are loaded/fetched.

//delete function
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
//view function for disease details
$(".view_problem").on("click",function(){
	var disease_id=$(this).data("disease_id");
	modal.style.display = "block";
	db.transaction(function(transaction){
		var sql="SELECT * FROM disease_table WHERE id = ?"
		transaction.executeSql(sql,[disease_id],function(transaction,result) {
			if(result.rows.length){

				for(var i=0;i<result.rows.length;i++){
					var row=result.rows.item(i);
					var disease_name=row.disease_name;
					var description=row.description;
					var cause=row.cause;
					var treatment=row.treatment;
					var prevention=row.prevention;
					$("#disease_list").append('<h5> Disease Name</h5><p>'+disease_name+'</p><h5>Description</h5><p>'+description+'</p><h5>Cause</h5><p>'+cause+'</p><h5>Treatment</h5><p>'+treatment+'</p><h5>Prevention</h5><p>'+prevention+'</p>');
				}
				}else{
					$("#disease_list").append('<tr><td colspan="3" align="center">No disease identified yet</td></tr>');
				}
		},function(transaction,err){
			alert(err.message);
	})
  });
});
},500);
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
