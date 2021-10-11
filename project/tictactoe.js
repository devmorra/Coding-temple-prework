let TicTacToe = class{
    constructor(parent, boardWidth, boardHeight, winrequirement){
        this.parent = parent;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.winrequirement = winrequirement;
        this.rows = [];
        this.winner = "";
        this.movesMade = 0;
        this.maxMoves = boardWidth * boardHeight;
        this.currentPlayer = "X";

        this.mainDiv = document.createElement("div");
        this.mainDiv.style.display = "grid";
        this.mainDiv.style.gridAutoRows = "auto";
        this.mainDiv.style.maxWidth = boardWidth * 25 + "px"

        this.resetButton = document.createElement("button");
        this.resetButton.innerHTML = "Reset board";
        this.resetButton.parent = this;
        this.resetButton.style.gridRow = 2;
        this.resetButton.onclick = function(){
            this.parent.resetBoard();
        }
        this.mainDiv.appendChild(this.resetButton);

        this.dialog = document.createElement("div");
        this.dialog.innerHTML = this.currentPlayer + "'s turn";
        this.dialog.style.textAlign = "center";
        this.dialog.style.gridRow = 1;
        this.mainDiv.appendChild(this.dialog);

        this.boardDiv = document.createElement("div");
        this.boardDiv.style.display = "grid";
        this.boardDiv.style.gridAutoColumns = "25px"
        this.boardDiv.style.gridAutoRows = "25px"



        
        for (let x = 0; x < boardWidth; x++){
            var r = [];
            for (let y = 0; y < boardHeight; y++){
                var btn = document.createElement("button");
                btn.innerHTML ="  "
                btn.style.gridRow = y + 1;
                btn.style.gridColumn = x + 1;
                btn.parent = this;
                btn.onclick = function(){
                    this.parent.btnFunc(Number(x), Number(y));
                }
                this.boardDiv.appendChild(btn);
                r.push(btn);
            }
            this.rows.push(r);
        }
        // console.log(this.rows);
        this.boardDiv.style.rows = 3;
        this.mainDiv.appendChild(this.boardDiv);
        this.parent.appendChild(this.mainDiv);
    }
    
    
    inBounds(x,y){
        return (x >=0 && x < this.boardWidth && y >=0 && y < this.boardHeight);
    }
    
    checkUpLeft(x,y){
        // console.log("upLeft " + x+", "+y)
        if(this.inBounds(x,y))
        {
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (x-1 >= 0 && y-1 >= 0 ){
                    return 1 + this.checkUpLeft(x-1, y-1);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkDownRight(x,y){
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (x+1 < this.boardWidth && y+1 < this.boardHeight ){
                    return 1 + this.checkDownRight(x+1, y+1);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkUpRight(x,y){
        // console.log("upRight " + x+", "+y)
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (x+1 >= 0 && y-1 >= 0 ){
                    return 1 + this.checkUpRight(x+1, y-1);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkDownLeft(x,y){
        // console.log("downLeft " + x+", "+y)
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (x-1 >= 0 && y+1 >= 0 ){
                    return 1 + this.checkDownLeft(x-1, y+1);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkUp(x,y){
        // console.log("up " + x+", "+y)
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (y-1 >= 0 ){
                    return 1 + this.checkUp(x, y-1);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkDown(x,y){
        // console.log("down " + x+", "+y)
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (y+1 < this.boardHeight){
                    return 1 + this.checkDown(x, y+1);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkLeft(x,y){
        // console.log("left " + x+", "+y)
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (x-1 >= 0 ){
                    return 1 + this.checkLeft(x-1, y);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
    
    checkRight(x,y){
        // console.log("right " + x+", "+y)
        if (this.inBounds(x,y)){
            if (this.currentPlayer === this.rows[x][y].innerHTML){
                if (x+1 >= 0 ){
                    return 1 + this.checkUp(x+1, y);
                }
                else{
                    return 1;
                }
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
   
    resetBoard(){
        // console.log("resetting")
        this.movesMade = 0;
        this.dialog.innerHTML = this.currentPlayer + "'s turn"
        for (var y=0; y < this.boardHeight; y++)
        {
            // console.log(y)
            for (var x=0; x < this.boardWidth; x++)
            {
                // console.log(y)
                // console.log(y,x)
                this.rows[x][y].disabled = false;
                this.rows[x][y].innerHTML = " ";
                // this.currentPlayer = "X";

            }
        }
    }

    checkWins(x, y){
        // alert(1 + this.checkUpLeft(x-1, y-1, this.currentPlayer) + this.checkDownRight(x+1, y+1, this.currentPlayer));
        // console.log("UpLeftDownRight: " + Number(1 + this.checkUpLeft(x-1, y-1) + this.checkDownRight(x+1, y+1)));
        // console.log("LeftRight: " + Number(1 + this.checkLeft(x-1, y) + this.checkRight(x+1, y)));
        // console.log("UpRightDownLeft:" + Number(1 + this.checkUpRight(x+1, y-1) + this.checkDownLeft(x-1, y+1)));
        // console.log("UpDown: " + Number(1 + this.checkUp(x, y-1) + this.checkDown(x, y+1)));
        if (1 + this.checkUpLeft(x-1, y-1) + this.checkDownRight(x+1, y+1) >= this.winrequirement){
            alert(this.currentPlayer + " wins!");
            return true;
        }
        else if (1 + this.checkLeft(x-1, y) + this.checkRight(x+1, y) >= this.winrequirement){
            alert(this.currentPlayer + " wins!");
            return true;
        }
        else if (1 + this.checkUpRight(x+1, y-1) + this.checkDownLeft(x-1, y+1) >= this.winrequirement){
            alert(this.currentPlayer + " wins!");
            return true;
        }
        else if (1 + this.checkUp(x, y-1) + this.checkDown(x, y+1) >= this.winrequirement){
            alert(this.currentPlayer + " wins!");
            return true;
        }
    }
    
    checkDraw(){
        // console.log(`${this.movesMade} >= ${this.maxMoves}?`)
        return this.movesMade >= this.maxMoves;
    }

    disableButtons(){
        for (let y = 0; y < this.boardHeight; y++){
            for (let x = 0; x < this.boardWidth; x++){
                this.rows[x][y].disabled = true;
            }
        }
    }

    btnFunc(x, y){
        var b = this.rows[x][y];
        this.movesMade += 1;
        b.innerHTML = this.currentPlayer;
        b.disabled = true;
        if (this.checkWins(x,y))
        {
            this.disableButtons();
            this.dialog.innerHTML = this.currentPlayer + " wins!"
        }
        else if(this.checkDraw()){
            this.dialog.innerHTML = "Draw!"
        }
        else{
            if (this.currentPlayer === "X"){
                this.currentPlayer = "O";
            }
            else{
                this.currentPlayer = "X";
            }

            this.dialog.innerHTML = (this.currentPlayer + "'s turn")
        }
    }
}

let ticTacToe = new TicTacToe(document.body, 3, 3, 3);

let ticTacToe2 = new TicTacToe(document.body, 10, 10, 5);