// Tic tac toe rules
function checkWin(board){
	if(board[0][0]&&board[0][0]==board[1][1]&&board[0][0]==board[2][2]){
		document.getElementById("message").innerHTML = board[0][0]+" wins!";
		alert(board[0][0]+" wins!");
		active = false;	
	}else if(board[2][0]&&board[2][0]==board[1][1]&&board[2][0]==board[0][2]){
		document.getElementById("message").innerHTML = board[2][0]+" wins!";
		alert(board[2][0]+" wins!");
		active = false;		
	}
	for(var i=0;i<3;i++){
		if(board[0][i]&&board[0][i]==board[1][i]&&board[0][i]==board[2][i]){
			document.getElementById("message").innerHTML = board[0][i]+" wins!";
			alert(board[0][i]+" wins!");
			active = false;	
		}else if(board[i][0]&&board[i][0]==board[i][1]&&board[i][0]==board[i][2]){
			document.getElementById("message").innerHTML = board[i][0]+" wins!";
			alert(board[i][0]+" wins!");
			active = false;
		}
	}
}
draw(3,3);