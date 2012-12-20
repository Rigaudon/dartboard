// JavaScript Document
draw_x = function(x,y){
	return draw_pic(x, y, "x.jpg", 1);	
}
draw_o = function(x,y){
	return draw_pic(x, y, "o.jpg", 2);	
}
function checkWin(board){
	for(var i=0;i<10;i++){
		for(var k=0;k<10;k++){
			if(board[i][k]==0){
				continue;	
			}
			check_from_point(board, i, k);
		}
	}
}
function check_from_point(board, i, k){
	var in_a_row = 0;	
	x = i;
	y = k;
	while(board[x][y]==board[i][k]){
		//down
		in_a_row++;
		y++;
	}
	if(in_a_row>=5){
		active = false;
		alert(board[i][k]+" wins!");
	}
	
	in_a_row = 0;
	x = i;
	y = k;
	while(board[x][y]==board[i][k]){
		//right
		in_a_row++;
		x++;
	}
	if(in_a_row>=5){
		active = false;
		alert(board[i][k]+" wins!");
	}
	
	in_a_row = 0;
	x = i;
	y = k;
	while(board[x][y]==board[i][k]){
		//diag down right
		in_a_row++;
		y++;
		x++;
	}
	if(in_a_row>=5){
		active = false;
		alert(board[i][k]+" wins!");
	}
	
	in_a_row = 0;
	x = i;
	y = k;
	while(board[x][y]==board[i][k]){
		//diag down left
		in_a_row++;
		y++;
		x--;
	}
	if(in_a_row>=5){
		active = false;
		alert(board[i][k]+" wins!");
	}
}
document.getElementById('options').style.display='none';
setSize(30);
draw(10,10);
draw_x(4,4);
draw_o(4,5);
draw_x(5,5)
draw_o(5,4);