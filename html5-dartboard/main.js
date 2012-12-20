var which = 0;
var board;
var side_len = 100;
var margin = side_len/10;
var stroke_wid = side_len/20;
var active = true;

function draw(length,width){
	fillboard(length,width);
	$("canvas").click(function(e){
		if(active){
			var x = Math.floor((e.pageX-$("canvas").offset().left) / side_len);
			var y = Math.floor((e.pageY-$("canvas").offset().top) / side_len);
			if(which==0){
				/*
				if(draw_pic("x.jpg",x,y,1)){
					other(which);	
				}
				*/
				if(draw_x(x,y)){
					checkWin(board)
					if(active){
						other(which);	
					}
				}
				
			}else{
				/*
				if(draw_pic("o.jpg",x,y,0)){
					other(which);	
				}
				*/
				if(draw_o(x,y)){
					checkWin(board)
					if(active){
						other(which);	
					}
				}
			}
		}
	});
}

function other(w){
	if(w==0){
		which = 1;	
	}else if(w==1){
		which = 0;	
	}
	document.getElementById('message').innerHTML = "It is player "+which+"'s turn.";
}

function setSize(s){
	side_len = s;
	margin = side_len/10;
	stroke_wid = side_len/20;	
}

function fillboard(x,y){
	if(x>0 && y>0){
		which = 0;
		document.getElementById("stretch").style.height=(y*side_len)+"px";
		document.getElementById("stretch").style.width=(x*side_len)+"px";
		board = Array(x);
		for(var i=0;i<x;i++){
			board[i] = Array(y)
			for(var k=0;k<y;k++){
				board[i][k] = 0;	
			}
		}
		
		$("canvas").attr("width",side_len*x);
		$("canvas").attr("height",side_len*y);
		for(var i=1;i<y;i++){
			$("canvas").drawLine({
				strokeStyle: "#000",
				strokeWidth: 1,
				x1: 0, y1: side_len*i,
				x2: side_len*x, y2: side_len*i
			});	
		}
		for(var i=1;i<x;i++){
			$("canvas").drawLine({
				strokeStyle: "#000",
				strokeWidth: 1,
				x1: side_len*i, y1: 0,
				x2: side_len*i, y2: side_len*y 
			});	
		}
	}
}
//0 = blank, 1 = x, 2 = o
function draw_x(x,y){
	if(board[x][y]){ return false; }
	$("canvas").drawLine({
		strokeStyle: "#00F",
		strokeWidth:stroke_wid,
		x1: x*side_len + margin, y1: y*side_len + margin,
		x2: (x+1)*side_len - margin, y2: (y+1)*side_len - margin
	}).drawLine({
		strokeStyle: "#00F",
		strokeWidth:stroke_wid,
		x1: x*side_len + margin, y1: (y+1)*side_len - margin,
		x2: (x+1)*side_len - margin, y2: y*side_len + margin
	});
	board[x][y] = 1;
	return true;
}

function draw_o(x,y){
	//Change later
	if(board[x][y]){ return false; }
	$("canvas").drawArc({
		strokeStyle: "red",
		strokeWidth: stroke_wid,
		x: side_len*x+side_len/2, y: side_len*y+side_len/2,
		radius: side_len/2 - margin,
		start:0, end:359,
		closed: true
	});
	board[x][y] = 2;
	return true;
}

function draw_pic(x,y,src,value){
	if(board[x][y]){ return false; }
	$("canvas").drawImage({
		source: src,
		x: side_len*x+side_len/2, y: side_len*y+side_len/2,
		width: side_len - 2*margin,
		height: side_len - 2*margin,
		fromCenter: true
	});
	board[x][y] = value;
	return true;
}
