var N = 8;
var WH = 100/N;
var COLORS = {
    "check": {
        "red": "red",
        "blue": "blue"
    },
    "cell": {
        "black": "black",
        "white": "white"
    }
};


function drawBoard(n) {
    var board = document.createElement('div');
    board.id = 'board';
    for (var i = 1; i <= n; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        row.style.height = WH + '%';
        for (var j = 1; j <= n; j++) {
            var isBlack = j % 2 == i % 2;
            var cell = drawCell(isBlack ? COLORS.cell.black : COLORS.cell.white, isBlack && (i < 4 || i > 5), i < 4? COLORS.check.blue : COLORS.check.red);
            cell.style.width = WH + '%';
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    return board;
}

function checkClickHandle(event) {
    var actives = document.querySelector('.check.active');
    if(actives !== null){
        actives.classList.remove('active');
    }
    this.classList.toggle('active');
}

function cellClickHandle(event) {
    if(this.children.length == 0)
}

function drawCell(color, withCheck=false, checkColor) {
    var cell = document.createElement('div');
    cell.className = "cell cell__" + color;
    if(color == COLORS.cell.black) {
        cell.addEventListener('click', cellClickHandle);
    }
    if ( withCheck ) {
        var check = document.createElement('div');
        check.className = "check check__" + checkColor;
        check.addEventListener('click', checkClickHandle);
        cell.appendChild(check);
    }
    return cell;
}

var board = drawBoard(N);
var checkers = document.getElementById('checkers');
checkers.appendChild(board);
