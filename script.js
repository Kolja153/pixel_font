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
	$( "#array").text('');
	var string='';
	for(var i = 0; i < 7; i++) {
		var line = mass[i];
		line=line.join();
		console.log( );
		
		$( "#line"+i).text( "line"+i+'     bin = '+line+'      hex = 0x' +ConvertBase.bin2hex(line.replace(/,/g, '')));
			string=string+'0x'+ConvertBase.bin2hex(line.replace(/,/g,''));
			if (i<6){string=string+','};
			$( "#array").text(string);

		//$( "#array").append( '0x'+ConvertBase.bin2hex(line.replace(/,/g, ''))+',');		
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

$( "#content").append( '<p>array = {<span id ="array">0x0,0x0,0x0,0x0,0x0,0x0,0x0</span>}</p>');
$( "#content").append( '<p></p><button onclick="cleartable()">очистити</button>' );
}