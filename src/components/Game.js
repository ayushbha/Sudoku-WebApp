import React from 'react';

var items = []
var cells = []
var visited = []
var mode = ""
var render = 0
const Game = (props) => {
	const [gameboard,setBoard] = React.useState(CreateBoard())
	const [item,setItem] = React.useState([])

	const NewGame = () => {
		window.location.reload()
	}

	if(mode!=props.location.mode){
		render=0
		items.length=0
		cells.length=0
		visited.length=0
	}

	const CheckGame = () => {
		var table = document.getElementById("gametable")
		var flag = 0
		var sol_flag = 0
		var solution = []
		for (var i = 0; i < 9; i++) {
			var k = []
			for (var j = 0; j < 9; j++) {
				if(table.rows[i].cells[j].children[0].value){
					k.push(parseInt(table.rows[i].cells[j].children[0].value))
				}
				else{
					alert("Incomplete. Please Complete the Game.")
					flag=1
					break
				}
			}
			if(flag === 1){
				break
			}
			solution.push(k)
		}
		if(flag==0){
			var error = []
			for(var m=0;m<9;m++){
				for(var l=0;l<9;l++){
					if(solution[m][l]!=gameboard[m][l]){
						sol_flag = 1
						error.push([m,l])
					}
				}
			}
			ErrorBoard(error,solution)
			if(sol_flag==0){
				alert("Correct Solution")
				props.history.push("/")
			}
			else{
				alert("Wrong Solution. Try Again.")
			}
		}
	}

	function ErrorBoard(error,solution){
		var it = []
		var c = []
		var flag = 0
		for (var i = 0; i < 9; i++) {
			var cell = []
			for (var j = 0; j < 9; j++) {
				if(items[i].props.children[j].props.children.props.disabled == true){
					cell.push(<td key={i.toString() + j.toString()}><input type='text' maxLength='1' size='1' value={solution[i][j]} onChange={Check} disabled/></td>)
				}
				else{
					flag=0
					for(var l=0;l<error.length;l++){
						if(error[l][0]==i && error[l][1]==j){
							flag=1
							cell.push(<td key={i.toString() + j.toString()}><input type='text' maxLength='1' size='1' defaultValue={solution[i][j]} onChange={Check} style={{background:"red"}}/></td>)
						}
					}
					if(flag==0){
						cell.push(<td key={i.toString() + j.toString()}><input type='text' maxLength='1' size='1' defaultValue={solution[i][j]} onChange={Check} style={{background:"green"}}/></td>)
					}
				}
			}
			c.push(cell)
		}
		for(var k=0;k<9;k++){
			it.push(<tr key={k}>{c[k]}</tr>)
		}
		setItem(it)
	}

	function CreateBoard() {
		var board = []
		for (var i = 0; i < 9; i++) {
			var a=[]
			for (var j = 0; j < 9; j++) {
				a.push(0)
			}
			board.push(a)
		}
		var count = 0
		while(count<20){
			let k = Math.floor(Math.random() * 9) + 1
			let x = Math.floor(Math.random() * 9)
			let y = Math.floor(Math.random() * 9)
			if(board[x][y] === 0){
				if(isValid(board,x,y,k)){
					board[x][y] = k
					count += 1
				}
			}
		}
		if(sodokoSolver(board)===false){
			var b = CreateBoard()
			return b
		}
		else{
			return board
		}
	}

	function isValid(board, row, col, k) {
	    for (let i = 0; i < 9; i++) {
	        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
	        const n = 3 * Math.floor(col / 3) + i % 3;
	        if (board[row][i] === k || board[i][col] === k || board[m][n] === k) {
	          return false;
	        }
	    }
	    return true;
	}


	function sodokoSolver(data) {
	  for (let i = 0; i < 9; i++) {
	    for (let j = 0; j < 9; j++) {
	      if (data[i][j] === 0) {
	        for (let k = 1; k <= 9; k++) {
	          if (isValid(data, i, j, k)) {
	            data[i][j] = k;
	          if (sodokoSolver(data)) {
	           return data;
	          } else {
	           data[i][j] = 0;
	          }
	         }
	       }
	       return false;
	     }
	   }
	 }
	 return data;
	}

	const Check = (e) => {
		if((e.target.value < "1" || e.target.value > "9" ) && e.target.value.length !== 0){
			e.target.value = ""
			e.target.focus()
			alert("Only Numbers[1-9] are Allowed")
		}
		e.target.setAttribute("style","background:white")
	}

	if(items.length===0 || render===0){
		var count = 0
		var fixed = 0
		for (var k = 0; k < 9; k++) {
			var v = []
			for (var m = 0; m < 9; m++) {
				v.push(0)
			}
			visited.push(v)
		}
		mode = props.location.mode
		if(props.location.mode==="Hard"){
			fixed = 29
		}
		else if(props.location.mode==="Medium"){
			fixed = 34
		}
		else if(props.location.mode==="Easy" || props.location.mode===undefined){
			fixed = 39
		}
		else if(props.location.mode==="Very Easy"){
			fixed = 45
		}
		for (var i = 0; i < 9; i++) {
			var row = []
			for(var j=0; j < 9; j++){
				if(count<fixed && Math.random()>0.65 && visited[i][j]===0){
					row.push(<td key={i.toString()+j.toString()}><input type='text' maxLength='1' size='1' value={gameboard[i][j]} onChange={Check} disabled/></td>)
					count = count + 1
					visited[i][j]=1
				}
				else{
					row.push(<td key={i.toString()+j.toString()}><input type='text' maxLength='1' size='1' onChange={Check}/></td>)
				}
			}
			cells.push(row)
		}
		while(count<fixed){
			let x = Math.floor(Math.random() * 9)
			let y = Math.floor(Math.random() * 9)
			if(visited[x][y]===0){
				visited[x][y]=1
				cells[x][y] = <td key={x.toString()+y.toString()}><input type='text' maxLength='1' size='1' value={gameboard[x][y]} onChange={Check} disabled/></td>
				count+=1
			}
		}
		for(var l=0;l<9;l++){
			items.push(<tr key={l}>{cells[l]}</tr>)
		}
		setItem(items)
		render+=1
	}

	return(
		<div>
			<div>
				<h1>Play Sudoku</h1>
			</div>
			<div style={{marginTop:'5%',width:"100%",textAlign:"-webkit-center"}}>
				<table id="gametable">
					<tbody>
						{item}
					</tbody>
				</table>
				<div style={{width:"30%",marginTop:"5%",display:"flex",margin:"5% auto", marginLeft:"43%"}}>
					<div>
						<button className="button" style={{height:'100%',padding:"5%"}} onClick={NewGame}>New Game</button>
					</div>
					<div>
						<button className="button" style={{height:'100%',marginLeft:"5%",padding:"5%"}} onClick={CheckGame}>Check Solution</button>
					</div>
					<div>
						<button className="button" style={{height:'100%',marginLeft:"5%",padding:"5%"}} onClick={()=>props.history.goBack()}>Go Back</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Game;