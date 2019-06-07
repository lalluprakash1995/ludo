var count=1;
var allcolor = ["blue","green","red", "yellow"];
var pawnOut = {blue:0,green:0,red:0,yellow:0}
drawpath(6,3,"brpath");
drawpath(6,3,"gypath");
drawpath(3,6,"bgpath");
drawpath(3,6,"rypath");
var paths={redPath:[67,64,61,58,55,18,17,16,15,14,13,7,1,2,3,4,5,6,52,49,46,43,40,37,38,39,42,45,48,51,54,19,20,21,22,23,24,30,36,35,34,33,32,31,57,
    60,63,66,69,72,71,68,65,62,59,56],
    bluePath:[2,3,4,5,6,52,49,46,43,40,37,38,39,42,45,48,51,54,19,20,21,22,23,24,30,36,35,34,33,32,31,57,60,63,66,69,72,71,70,67,64,61,58,55,
        18,17,16,15,14,13,7,8,9,10,11,12],
    greenPath:[42,45,48,51,54,19,20,21,22,23,24,30,36,35,34,33,32,31,57,60,63,66,69,72,71,70,67,64,61,58,55,18,17,16,15,14,13,7,1,2,3,4,5,6,
            52,49,46,43,40,37,38,41,44,47,50,53],
    yellowPath:[35,34,33,32,31,57,60,63,66,69,72,71,70,67,64,61,58,55,18,17,16,15,14,13,7,1,2,3,4,5,6,52,49,46,43,40,37,38,39,42,45,48,51,54,
                19,20,21,22,23,24,30,29,28,27,26,25]};
var clicked = false;
var onboard = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
var positions = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
var currentPositions={
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
}
function drawpath(col,row,wheretoAdd){
	for(var i=0; i<row; i++){
		for(var j=0; j<col; j++){
	        /*id=count++;*/
	        var addclass="border-right float-left rbpath";
	        if(i==1 || i==3 || i==5){
	        	addclass="border-right border-top border-bottom float-left rbpath";
	        }
			var div = document.createElement("div")
	        div.setAttribute("class", addclass)
	        div.setAttribute("id","block"+count++)
	        document.getElementById(wheretoAdd).appendChild(div);
		}
		var cleardiv=document.createElement("div")
        cleardiv.setAttribute("class", "clearfix")
        document.getElementById(wheretoAdd).appendChild(div);
	}
}
var starArray=["block2","block15","block67","block42","block35","block43","block22","block66"];
/*for(i=0;i<8;i++){
	var star = document.createElement("div")
	star.setAttribute("class","star")
	document.getElementById(starArray[i]).appendChild(star);
	var element = document.getElementById(starArray[i]);
  	element.classList.add("mystar");
}*/
function HaveHover() {
    var count = 0;
    var toKill = "";
    for (var i = 0; i < allcolor.length; i++) {
        for (var n = 1; n <= 4; n++) {
            var firstPawn = allcolor[i] + "pawn" + n;
            var secondPawn=currntPawn;
            //console.log(firstPawn);
            console.log(firstPawn+currentPositions[firstPawn]);
           // console.log(secondPawn);
            console.log(secondPawn+currentPositions[currntPawn]);
            if (currentPositions[firstPawn]!=0 && currentPositions[currntPawn]!=0 && currentPositions[firstPawn]===currentPositions[currntPawn] && allcolor[i]!=currntColor) {
                count++;
                toKill = allcolor[i] + "pawn" + n;
                return toKill;
            }
        }
    }
    return false;
}
function CheckForWinner() {
    if (pawnOut[currntColor] == 4) {
        var dice = document.getElementById("dice");
        var player = document.getElementById("player");
       /* var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        dice.innerText = "";*/
        dice.style.visibility = "hidden";
        /*uselesstext1.innerText = "";
        uselesstext2.innerText = "";*/
        player.innerText = "The Winner is the "+currntColor+" player";
    }
}
function ResetPawn(victim) {
    onboard[victim] = 0;
    positions[victim] = 0;
    currentPositions[victim]=0;
    var pawnToMove = document.getElementById(victim);
    pawnToMove.parentElement.removeChild(pawnToMove);
    //var pawnToMove = document.getElementById(victim);
    switch(victim){
        case "redpawn1":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-danger roundPiece")
            div.setAttribute("id","redpawn1");
            div.setAttribute("onclick","movePawn('red',1)")
            document.getElementById("parentredpawn1").appendChild(div);
        break;
        case "redpawn2":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-danger roundPiece")
            div.setAttribute("id","redpawn2");
            div.setAttribute("onclick","movePawn('red',2)")
            document.getElementById("parentredpawn2").appendChild(div);
        break;
        case "redpawn3":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-danger roundPiece")
            div.setAttribute("id","redpawn3");
            div.setAttribute("onclick","movePawn('red',3)")
            document.getElementById("parentredpawn3").appendChild(div);
        break;
        case "redpawn4":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-danger roundPiece")
            div.setAttribute("id","redpawn4");
            div.setAttribute("onclick","movePawn('red',4)")
            document.getElementById("parentredpawn4").appendChild(div);
        break;
        case "bluepawn1":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-primary roundPiece")
            div.setAttribute("id","bluepawn1");
            div.setAttribute("onclick","movePawn('blue',1)")
            document.getElementById("parentbluepawn1").appendChild(div);
        break;
        case "bluepawn2":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-primary roundPiece")
            div.setAttribute("id","bluepawn2");
            div.setAttribute("onclick","movePawn('blue',2)")
            document.getElementById("parentbluepawn2").appendChild(div);
        break;
        case "bluepawn3":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-primary roundPiece")
            div.setAttribute("id","bluepawn3");
            div.setAttribute("onclick","movePawn('blue',3)")
            document.getElementById("parentbluepawn3").appendChild(div);
        break;
        case "bluepawn4":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-primary roundPiece")
            div.setAttribute("id","bluepawn4");
            div.setAttribute("onclick","movePawn('blue',4)")
            document.getElementById("parentbluepawn4").appendChild(div);
        break;
        case "greenpawn1":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-success roundPiece")
            div.setAttribute("id","greenpawn1");
            div.setAttribute("onclick","movePawn('green',1)")
            document.getElementById("parentgreenpawn1").appendChild(div);
        break;
        case "greenpawn2":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-success roundPiece")
            div.setAttribute("id","greenpawn2");
            div.setAttribute("onclick","movePawn('green',2)")
            document.getElementById("parentgreenpawn2").appendChild(div);
        break;
        case "greenpawn3":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-success roundPiece")
            div.setAttribute("id","greenpawn3");
            div.setAttribute("onclick","movePawn('green',3)")
            document.getElementById("parentgreenpawn3").appendChild(div);
        break;
        case "greenpawn4":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-success roundPiece")
            div.setAttribute("id","greenpawn4");
            div.setAttribute("onclick","movePawn('green',4)")
            document.getElementById("parentgreenpawn4").appendChild(div);
        break;
        case "yellowpawn1":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-warning roundPiece")
            div.setAttribute("id","yellowpawn1");
            div.setAttribute("onclick","movePawn('yellow',1)")
            document.getElementById("parentyellowpawn1").appendChild(div);
        break;
        case "yellowpawn2":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-warning roundPiece")
            div.setAttribute("id","yellowpawn2");
            div.setAttribute("onclick","movePawn('yellow',2)")
            document.getElementById("parentyellowpawn2").appendChild(div);
        break;
        case "yellowpawn3":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-warning roundPiece")
            div.setAttribute("id","yellowpawn3");
            div.setAttribute("onclick","movePawn('yellow',3)")
            document.getElementById("parentyellowpawn3").appendChild(div);
        break;
        case "yellowpawn4":
            var div=document.createElement('div')
            div.setAttribute('class',"border rounded-circle p-3 bg-warning roundPiece")
            div.setAttribute("id","yellowpawn4");
            div.setAttribute("onclick","movePawn('yellow',4)")
            document.getElementById("parentyellowpawn4").appendChild(div);
        break;
    }

}  
function Stuck() {
    var text = document.getElementById('player');
    if (onboard[currntPawn] == 0||currntPos+num>56) {
        if (DontHaveOtherFree()||currntPos+num>56) {
            clicked = false;
            var dice = document.getElementById('dice');
            dice.style.backgroundImage = "url(../asset/images/dice.gif)";
            alert("Unfortunatlly you stuck");
            window.setTimeout(changePlayer, 1000);
            
        }
    }
}
function DontHaveOtherFree() {
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "pawn" + i] == 1 || positions[text.innerText + "pawn" + i]+num>=56) return false;
    }
    return true;
}
function randomNum() {
    if (!clicked) {
        num = Math.floor((Math.random() * 6) + 1);;
        var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(../asset/images/" + num + ".jpg)";
        clicked = true;
    }
    if (num != 6&&DontHaveOtherFree()) {
       /* var bad = document.getElementById('badtext');*/
       /* bad.innerText = "Unfortunatlly you stuck";*/
        window.setTimeout(changePlayer, 1000);
        clicked = false;
    }
}
function changePlayer() {
    if (num != 6){
    var text = document.getElementById('player');
    switch (text.innerText) {
        case "red": text.innerText = text.style.color = "blue"; break;
        case "blue": text.innerText = text.style.color = "green"; break;
        case "yellow": text.innerText = text.style.color = "red"; break;
        case "green": text.innerText = text.style.color = "yellow"; break;
    }
    }
    /*var badtext = document.getElementById('badtext');
    badtext.innerText = "";*/
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(../asset/images/dice.gif)";
}
function movePawn(pawncolor,pawnnum){
	var text = document.getElementById('player');
	numOfPaw = pawnnum;
	currntColor=pawncolor;
	currntPawn=currntColor+'pawn'+pawnnum;
	currntPos=positions[currntPawn];
	//console.log("outside "+currntPawn);
	if (num + currntPos > 56) {
        Stuck();
    }
    else{
		if(clicked){
			//alert("insede if checked"+currntPawn);
			var position=currntPos;
			if(text.innerText==currntColor){
				if (onboard[currntPawn] === 1 || num === 6) {
					if (onboard[currntPawn] === 0) {
                        var elem = document.getElementById(currntPawn);
                        elem.parentElement.removeChild(elem);
                        switch(pawncolor){
                            case 'red':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-danger newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                document.getElementById("block"+paths.redPath[0]).appendChild(div);
                                positions[currntPawn]= 0;
                                currentPositions[currntPawn]=paths.redPath[0];
                            break;
                            case 'blue':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-primary newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                document.getElementById("block2").appendChild(div);
                                positions[currntPawn]= 0;
                                currentPositions[currntPawn]=paths.bluePath[0];
                            break;
                            case 'yellow':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-warning newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                document.getElementById("block35").appendChild(div);
                                positions[currntPawn]= 0;
                                currentPositions[currntPawn]=paths.yellowPath[0];
                            break;
                            case 'green':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-success newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                document.getElementById("block42").appendChild(div);
                                positions[currntPawn]= 0;
                                currentPositions[currntPawn]=paths.greenPath[0];
                            break;

                        }
                        onboard[currntPawn]=1;
                    }   
                    else{
                        var elem = document.getElementById(currntPawn);
                        elem.parentElement.removeChild(elem);
                        //console.log("i am out");
                        switch(pawncolor){
                            case 'red':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-danger newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                var next=positions[currntPawn]+num;
                                document.getElementById("block"+paths.redPath[next]).appendChild(div);
                                currentPositions[currntPawn]=paths.redPath[next];
                            break;
                            case 'green':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-success newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                var next=positions[currntPawn]+num;
                                document.getElementById("block"+paths.greenPath[next]).appendChild(div);
                                currentPositions[currntPawn]=paths.greenPath[next];
                            break;
                            case 'blue':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-primary newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                var next=positions[currntPawn]+num;
                                document.getElementById("block"+paths.bluePath[next]).appendChild(div);
                                currentPositions[currntPawn]=paths.bluePath[next];
                            break;
                            case 'yellow':
                                var div=document.createElement('div')
                                div.setAttribute('class',"border rounded-circle p-3 bg-warning newroundPiece")
                                div.setAttribute("id",currntPawn);
                                div.setAttribute("onclick","movePawn("+"'"+pawncolor+"'"+","+pawnnum+")")
                                var next=positions[currntPawn]+num;
                                document.getElementById("block"+paths.yellowPath[next]).appendChild(div);
                                currentPositions[currntPawn]=paths.yellowPath[next];
                            break;
                        }
                        positions[currntPawn]+=num;
                        var victim = HaveHover();
                        if (victim != false) {
                            ResetPawn(victim);
                        }
                        if (currntPos == 56) { pawnOut[currntColor]++; onboard[currntPawn] = 0; positions[currntPawn] = 0; document.getElementById(currpawn).style.visibility = "hidden"; };
                        CheckForWinner();
                        changePlayer();
                    }
                    num = 0;
                    clicked = false;
                    var dice = document.getElementById('dice');
                    dice.style.backgroundImage = "url(../asset/images/dice.gif)";
                }
                else {
                    Stuck();
                }
                   
			}
		}
    }
}
    