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

    var gameController = {
        moves: {
            [ COLORS.checker.light ]: [
                { "x": -1, "y": -1 },
                { "x": -1, "y": 1 },
                { "x": 1, "y": -1 },
                { "x": 1, "y": 1 }
            ],
            [ COLORS.checker.dark ]: [
                { "x": 1, "y": -1 },
                { "x": 1, "y": 1 },
                { "x": -1, "y": -1 },
                { "x": -1, "y": 1 }
            ]
        },
        showAvailableMoves(checker) {
            var curPosition = checker.cell.getPosition();
            var checkerMoves = this.moves[checker.color];
            // var lCell = self.getCell(curPosition.x + checkerMoves.left.x, curPosition.y + checkerMoves.left.y);
            // var rCell = self.getCell(curPosition.x + checkerMoves.right.x, curPosition.y + checkerMoves.right.y);
            checkerMoves.forEach((v, i) => {
                // console.log(v);
                var cell = self.getCell(curPosition.x + v.x, curPosition.y + v.y);
                if( cell != undefined) {
                    if(i < 2) {
                        if( !cell.hasChecker() ) {
                            cell.highlight();
                        } else {
                            console.log('has other');
                        }
                    } else {
                        if( cell.hasChecker() && checker.color !== cell.checker.color) {
                            console.log('has enemy');
                        }
                    }
                }
                // console.log(cell);
            });
            // console.log(lCell, rCell);
        },


    }

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
        this.getPosition = () => {
            return {
                "x": self.x,
                "y": self.y
            }
        };
        this.containChecker = (checker) => self.checker = checker;
        this.hasChecker = () => self.checker != null;
        this.removeChecker = () => self.checker = null;
        this.highlight = () => self.cellDOM.classList.toggle("highlight");
        this.unhighlight = () => self.cellDOM.classList.remove("highlight");
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

    this.getCell = (x, y) => {
        var cell = document.getElementById('cell_' + x + '_' + y);
        return cell? cell.obj : undefined;
    }

    function checkerClickHandle(e) {
        var checker = this.obj;
        if(checker !== undefined && checker.isMovePossible(self.currentChecker, self.currentTurn)) {
            var actives = document.querySelector(".checker.active");
            if(actives !== null) {
                actives.classList.remove("active");
                var hl = document.querySelectorAll(".cell.highlight");
                Object.keys(hl).map((v) => hl[v].obj.unhighlight());
            }
            this.classList.toggle("active");
            gameController.showAvailableMoves(checker);

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

    var testChecker = new Checker(3, 2);
    var testCell = document.getElementById('cell_5_5').obj;
    testChecker.belongsTo(testCell);
    testCell.containChecker(testChecker);
}


Checkers.init = function() {
    window.checkers = new Checkers();
}

Checkers.init();
