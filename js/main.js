var N = 8;
var WH = 100/N;

function drawBoard(n) {
    var board = document.createElement('div');
    board.id = 'board';
    for (var i = 1; i <= n; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        row.style.height = WH + '%';
        for (var j = 1; j <= n; j++) {
            var isBlack = j % 2 == i % 2;
            var cell = drawCell(isBlack ? "black" : "white", isBlack && (i < 4 || i > 5), i < 4? 'blue' : 'red');
            cell.style.width = WH + '%';
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    return board;
}

function drawCell(color, withCheck=false, checkColor) {
    var cell = document.createElement('div');
    cell.className = "cell cell__" + color;
    if ( withCheck ) {
        var check = document.createElement('div');
        check.className = "check check__" + checkColor;
        cell.appendChild(check);
    }
    return cell;
}

var board = drawBoard(N);
var checkers = document.getElementById('checkers');
checkers.appendChild(board);
