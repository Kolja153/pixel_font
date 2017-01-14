var mass ;
var row ;
var column ;

newTable();



function newTable(){
	$("#content").text('');
	row = $("#row").val();
	column = $("#column").val();	
	mass = createMass(row,column);

	createTable (row,column);

	$( "td" ).click(function() {
	
	colColor(this);	

	if (mass[this.id[6]][this.id[7]] == 0){
		mass[this.id[6]][this.id[7]] = 1;
	}
	else
	{
		mass[this.id[6]][this.id[7]] = 0;
	}
	
	createLine(mass,row);	
})

}

function createLine(mass,rmax) {
	$( "#array").text('');
	var string='';
	for(var i = 0; i < rmax; i++) {
		var line = mass[i];
		line=line.join();
		console.log( );
		
		$( "#line"+i).text( "row    "+i+'     bin = '+line+'      hex = 0x' +ConvertBase.bin2hex(line.replace(/,/g, '')));
			string=string+'0x'+ConvertBase.bin2hex(line.replace(/,/g,''));
			if (i<rmax-1){string=string+','};
			$( "#array").text(string);

		//$( "#array").append( '0x'+ConvertBase.bin2hex(line.replace(/,/g, ''))+',');		
	}
}

function createMass(rmax,cmax) {
	var rmax,cmax;
	var row = [];
	for(var i = 0; i < rmax; i++) {
		var column = [];
		for(var j = 0; j < cmax; j++) {
			column[j] = 0;
		}
		row[i] = column ;
	}

	return row;

}


function cleartable() {

	$('.click').removeClass("click");
	mass = createMass();
	createLine(mass);
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

function createTable (rmax,cmax){ 
	
	$( "#content").append( '<table id="symbol" height="160" width="180" border="1"></table>	');
	for(var i = 0; i < rmax; i++) {
		$( "#content").append( '<br><label id ="line'+i+'">row '+i+' = </label>');
		}
	for(var i = 0; i < rmax; i++) {
  		 $( "#symbol" ).append( '<tr id ="row'+i+'""></tr>' );

	   for (var j = 0; j < cmax; j++) {
		$( "#row"+i ).append( '<td id ="column'+i+j+'" class="noclick"> </td>' );

	   }  
	}

$( "#content").append( '<p>array = {<span id ="array"></span>}</p>');
$( "#content").append( '<p></p><button onclick="cleartable()">очистити</button>' );
}