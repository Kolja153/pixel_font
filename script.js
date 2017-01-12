createTable ();
var mass = createMass();

$( "td" ).click(function() {
	var color = this;
	
	colColor(color);
	if (mass[this.id[6]][this.id[7]] == 0){
		mass[this.id[6]][this.id[7]] = 1;
	}
	else
	{
		mass[this.id[6]][this.id[7]] = 0;
	}
	
	createLine(mass);	
})

function createLine(mass) {
	for(var i = 0; i < 7; i++) {
		var line = mass[i];
		$( "#line"+i).text( "line"+i+' = '+line);
	}

	

}

function createMass() {

	var row = [];
	for(var i = 0; i < 7; i++) {
		var column = [];
		for(var j = 0; j < 8; j++) {
			column[j] = 0;
		}
		row[i] = column ;
	}

	console.log(row);
	return row;

}


function cleartable() {

	$('.click').removeClass("click");
}


function colColor(color){
	if (color.className == 'click')
	{
		$(color).removeClass("click");
		$(color).addClass("noclick");
	}
	else
	{
		$(color).removeClass("noclick");
		$(color).addClass("click");
	}
}

function createTable (){ 
	
	$( "#content").append( '<table id="symbol" height="160" width="180" border="1"></table>	');
	for(var i = 0; i < 7; i++) {
		$( "#content").append( '<br><label id ="line'+i+'">line'+i+' = 0,0,0,0,0,0,0,0 </label>');
	}
	
	for(var i = 0; i < 7; i++) {
  		 $( "#symbol" ).append( '<tr id ="row'+i+'""></tr>' );

	   for (var j = 0; j < 8; j++) {
		$( "#row"+i ).append( '<td id ="column'+i+j+'" class="noclick"> </td>' );

	   }  
	}


$( "#content").append( '<p></p><button onclick="cleartable()">очистити</button>' );
}