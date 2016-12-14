const N = 8;
const WH = 100 / N;
const COLORS = {
    "checker": {
        "light": "red",
        "dark": "blue"
    },
    "cell": {
        "true": "black",
        "false": "white"
    }
};

function Checkers() {
    var self = this;

    this.N = N;
    this.TURNS = [ COLORS.checker.light, COLORS.checker.dark ];

    this.currentTurn = this.TURNS[0]; // 0 - light, 1 - dark
    this.currentChecker = null;

    this.boardDOM = document.getElementById('checkers');

    function Cell(x, y) {
        var self = this;

        this.x = x;
        this.y = y;
        this.id = "cell_" + x + "_" + y;
        this.color = COLORS.cell[ x % 2 === y % 2 ];

        this.checker = null;

        this.cellDOM = (() => {
            var cell = document.createElement('div');
            cell.id = self.id;
            cell.className = "cell cell__" + self.color;
            cell.style.width = WH + '%';
            cell.style.height = WH + '%';
            if( !cell.hasOwnProperty('obj') ) {
                cell.obj = self;
            }
            return cell;
        })();


        //public methods
        this.getPostition = () => {
            return {
                "x": self.x,
                "y": self.y
            }
        };
        this.containChecker = (checker) => self.checker = checker;
        this.hasChecker = () => self.checker != null;
        this.removeChecker = () => self.checker = null;

    }

    function Checker(x, y) {
        var self = this;

        this.color = x < 4? COLORS.checker.dark : COLORS.checker.light;
        this.cell = null;

        this.checkerDOM = (() => {
            var checker = document.createElement('div');
            checker.className = "checker checker__" + self.color;
            if( !checker.hasOwnProperty('obj') ) {
                checker.obj = self;
            }
            checker.addEventListener('click', checkerClickHandle);
            return checker;
        })();

        //public methods
        this.isRed = () => self.color = COLORS.checker.light;
        this.isBlue = () => self.color = COLORS.checker.dark;
        this.belongsTo = (cell) => {
            self.cell = cell;
            cell.cellDOM.appendChild(self.checkerDOM);
        }
        this.canTurn = (currentTurn) => self.color == currentTurn;
        this.isMovePossible = (currentChecker, currentTurn) => {
            return self.canTurn && ( currentChecker == null ||  currentChecker != self);
        }

    }
    function checkerClickHandle(e) {
        var checker = this.obj;
        if(checker !== undefined && checker.isMovePossible(self.currentChecker, self.currentTurn)) {
            var actives = document.querySelector(".checker.active");
            if(actives !== null) {
                actives.classList.remove("active");
            }
            // self.showPossibleMoves(checker);       TODO

        }
    }

    function drawBoard() {
        for (var i = 1; i <= self.N; i++) {
            for (var j = 1; j <= self.N; j++) {
                var cell = new Cell(i, j);
                self.boardDOM.appendChild(cell.cellDOM);
                drawChecker(cell);
            }
        }
    }

    function drawChecker(cell) {
        if (cell.y % 2 === cell.x % 2 && (cell.x < 4 || cell.x > 5)) {
          var checker = new Checker(cell.x, cell.y);
          checker.belongsTo(cell);
          cell.containChecker(checker);
        }
    }


    drawBoard();
}


Checkers.init = function() {
    window.checkers = new Checkers();
}

Checkers.init();