(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
  function Cell(x, y) {
    var _this = this;

    _classCallCheck(this, Cell);

    this.x = x;
    this.y = y;
    this.id = 'cell_' + x + '_' + y;
    this.color = _constants.COLORS.cell[x % 2 === y % 2];
    this.checker = null;
    this.cellDOM = function () {
      var cell = document.createElement('div');
      cell.id = _this.id;
      cell.className = 'cell cell__' + _this.color;
      cell.style.width = _constants.WH + '%';
      cell.style.height = _constants.WH + '%';
      if (!cell.hasOwnProperty('obj')) {
        cell.obj = _this;
      }
      return cell;
    }();
  }

  _createClass(Cell, [{
    key: 'getPosition',
    value: function getPosition() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: 'containChecker',
    value: function containChecker(checker) {
      this.checker = checker;
    }
  }, {
    key: 'hasChecker',
    value: function hasChecker() {
      return this.checker != null;
    }
  }, {
    key: 'removeChecker',
    value: function removeChecker() {
      if (this.checker) {
        this.cellDOM.removeChild(this.checker.checkerDOM);
        this.checker = null;
      }
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      this.cellDOM.classList.toggle('highlight');
    }
  }, {
    key: 'unhighlight',
    value: function unhighlight() {
      this.cellDOM.classList.remove('highlight');
    }
  }, {
    key: 'isHighlighted',
    value: function isHighlighted() {
      return this.cellDOM.classList.contains('highlight');
    }
  }]);

  return Cell;
}();

exports.default = Cell;

},{"./constants":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checker = function () {
  function Checker(color) {
    var _this = this;

    _classCallCheck(this, Checker);

    this.color = color;
    this.cell = null;
    this.marked = false;
    this.queen = false;
    this.checkerDOM = function () {
      var checker = document.createElement('div');
      checker.className = 'checker checker__' + _this.color;
      if (!checker.hasOwnProperty('obj')) {
        checker.obj = _this;
      }
      return checker;
    }();
  }

  // public methods


  _createClass(Checker, [{
    key: 'activate',
    value: function activate() {
      this.checkerDOM.classList.toggle('active');
    }
  }, {
    key: 'belongsTo',
    value: function belongsTo(cell) {
      this.cell = cell;
      if (cell) {
        cell.cellDOM.appendChild(this.checkerDOM);
      }
    }
  }, {
    key: 'mark',
    value: function mark() {
      this.marked = true;
      this.checkerDOM.classList.toggle('marked');
    }
  }, {
    key: 'unmark',
    value: function unmark() {
      this.marked = false;
      this.checkerDOM.classList.remove('marked');
    }
  }, {
    key: 'isMarked',
    value: function isMarked() {
      return this.marked;
    }
  }, {
    key: 'isMovePossible',
    value: function isMovePossible(currentChecker, currentTurnColor) {
      return this.color === currentTurnColor && this.isMarked() && (currentChecker == null || currentChecker !== this);
    }
  }, {
    key: 'moveTo',
    value: function moveTo(cell) {
      this.cell.removeChecker();
      this.belongsTo(cell);
      cell.containChecker(this);
    }
  }, {
    key: 'canQueened',
    value: function canQueened() {
      return !this.queen && this.cell.x === _constants.QUEEN_LINE[this.color];
    }
  }, {
    key: 'makeQueen',
    value: function makeQueen() {
      this.queen = true;
      this.checkerDOM.classList.toggle('queen');
    }
  }, {
    key: 'isQueen',
    value: function isQueen() {
      return this.queen;
    }
  }]);

  return Checker;
}();

exports.default = Checker;

},{"./constants":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _GameState = require('./GameState.js');

var _GameState2 = _interopRequireDefault(_GameState);

var _Checker = require('./Checker');

var _Checker2 = _interopRequireDefault(_Checker);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameBoard = function () {
  function GameBoard(board) {
    _classCallCheck(this, GameBoard);

    this.boardDOM = board;
    this.draw();
    this.state = new _GameState2.default();
  }

  _createClass(GameBoard, [{
    key: 'start',
    value: function start() {
      this.state.startGame();
      this.markAvailableCheckers(this.state.currentTurn);
    }

    // drawing board

  }, {
    key: 'draw',
    value: function draw() {
      for (var i = 1; i <= _constants.N; i++) {
        for (var j = 1; j <= _constants.N; j++) {
          var cell = new _Cell2.default(i, j);
          cell.cellDOM.addEventListener('click', this.cellClickHandle.bind(this));
          this.boardDOM.appendChild(cell.cellDOM);
          this.drawChecker(cell);
        }
      }
    }
  }, {
    key: 'drawChecker',
    value: function drawChecker(cell) {
      if (cell.y % 2 === cell.x % 2 && (cell.x < _constants.TOP_UP || cell.x > _constants.BOTTOM_FROM)) {
        this.createChecker(cell.x < _constants.TOP_UP ? _constants.COLORS.checker.dark : _constants.COLORS.checker.light, cell);
      }
    }
  }, {
    key: 'createChecker',
    value: function createChecker(color, cell) {
      var checker = new _Checker2.default(color);
      checker.checkerDOM.addEventListener('click', this.checkerClickHandle.bind(this));
      checker.belongsTo(cell);
      cell.containChecker(checker);
      return checker;
    }
  }, {
    key: 'checkerClickHandle',
    value: function checkerClickHandle(e) {
      var checker = e.target.obj;
      this.deactivateCheckers();
      if (checker !== undefined && checker.isMovePossible(this.state.currentChecker, this.state.currentTurn)) {
        var availableMoves = this.getAvailableMoves(checker);
        checker.activate();
        this.showMoves(availableMoves.moves);
        this.state.currentChecker = checker;
      } else {
        this.state.currentChecker = null;
      }

      return false;
    }
  }, {
    key: 'cellClickHandle',
    value: function cellClickHandle(e) {
      var cell = e.target.obj;
      if (cell instanceof _Cell2.default && this.state.currentChecker && cell.isHighlighted()) {
        this.move(this.state.currentChecker, cell);
      }
      return false;
    }
  }, {
    key: 'move',
    value: function move(checker, cell) {
      var wasEaten = this.eatIfItPossible(checker, cell);
      checker.moveTo(cell);
      console.log(wasEaten);
      if (checker.canQueened()) {
        console.log('QUEENED');
        checker.makeQueen();
      }

      var mustEat = this.getAvailableMoves(checker, true); // only for eat(jump)
      this.deactivateCheckers();
      if (wasEaten && mustEat) {
        checker.activate();
        this.showMoves(mustEat.moves);
      } else {
        var checkers = this.getCheckers(this.state.currentTurn, true);
        checkers.forEach(function (checker) {
          return checker.unmark();
        });
        this.state.setNexnTurn();
        this.markAvailableCheckers(this.state.currentTurn);
      }

      this.state.updateInfo();
    }
  }, {
    key: 'getCell',
    value: function getCell(pos) {
      var cell = document.getElementById('cell_' + pos.x + '_' + pos.y);
      return cell ? cell.obj : null;
    }
  }, {
    key: 'getCheckers',
    value: function getCheckers(color) {
      var marked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var checkers = document.querySelectorAll('.checker.checker__' + color + (marked ? '.marked' : ''));
      checkers = Object.keys(checkers).map(function (i) {
        return checkers[i] = checkers[i].obj;
      });
      return checkers;
    }
  }, {
    key: 'showMoves',
    value: function showMoves(moves) {
      if (moves) {
        moves.forEach(function (move) {
          if (move && move.cell) {
            move.cell.highlight();
          }
        });
      }
    }
  }, {
    key: 'getAvailableMoves',
    value: function getAvailableMoves(checker) {
      var onlyEat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var checkerMoves = _constants.MOVE_MAP[checker.color];
      var enemyEatingFilter = function enemyEatingFilter(mv) {
        return mv && mv.cell && mv.type === _constants.MOVE_TYPE.EAT;
      };
      var freeMoveFilter = function freeMoveFilter(mv) {
        return mv && mv.cell && mv.type === _constants.MOVE_TYPE.FREE;
      };
      var moves = [];
      if (checker.isQueen()) {
        var _moves;

        console.log('searching moves for queen');
        (_moves = moves).push.apply(_moves, _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[_constants.LEFT], onlyEat)).concat(_toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[_constants.RIGHT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[_constants.LEFT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[_constants.RIGHT], onlyEat))));
      } else {
        // console.log('searching moves for checker')
        moves.push(this.getAvailableCell(checker, checkerMoves.fw[_constants.LEFT], onlyEat), this.getAvailableCell(checker, checkerMoves.fw[_constants.RIGHT], onlyEat), this.getAvailableCell(checker, checkerMoves.bw[_constants.LEFT], true), this.getAvailableCell(checker, checkerMoves.bw[_constants.RIGHT], true));
      }
      if (moves.some(enemyEatingFilter)) {
        moves = {
          type: _constants.MOVE_TYPE.EAT,
          moves: moves.filter(enemyEatingFilter)
        };
      } else {
        moves = {
          type: _constants.MOVE_TYPE.FREE,
          moves: moves.filter(freeMoveFilter)
        };
      }
      // if (checker.isQueen()) {
      //   console.log('ALO', moves)
      // }
      return moves.moves.length ? moves : null;
    }
  }, {
    key: 'getAvailableCellsForQueen',
    value: function getAvailableCellsForQueen(checker, direction, onlyEat) {
      var aCell = {};
      var ret = [];
      var eatDirection = false;
      var curDirection = direction;
      do {
        // console.log('DIRECTION', curDirection, eatDirection ? false : onlyEat)
        aCell = this.getAvailableCell(checker, curDirection, eatDirection ? false : onlyEat);
        if (aCell) {
          var isEat = aCell.type === _constants.MOVE_TYPE.EAT;
          if (eatDirection && isEat) {
            break;
          }
          eatDirection = isEat ? true : eatDirection;
          curDirection = this.calcNextDirectionCell(curDirection, direction, isEat ? 2 : 1);
          if (eatDirection) {
            aCell.type = _constants.MOVE_TYPE.EAT;
          }
          console.log(aCell);
          ret.push(aCell);
          // if (!confirm('CYKA BLYAT')) {
          //   break
          // }
        } else {
          break;
        }
        // console.log(aCell, aCell ? aCell.cell.cellDOM : '', curDirection)
      } while (aCell !== null);

      return ret;
    }
  }, {
    key: 'getAvailableCell',
    value: function getAvailableCell(checker, direction) {
      var onlyEat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var curPos = checker.cell.getPosition();
      var cell = this.getCell({ x: curPos.x + direction.x, y: curPos.y + direction.y });
      if (cell && !cell.hasChecker() && !onlyEat) {
        return {
          type: _constants.MOVE_TYPE.FREE,
          cell: cell
        };
      }
      if (cell && cell.hasChecker() && checker.color !== cell.checker.color) {
        var cellAfterEat = this.cellAfterEating(cell.getPosition(), direction);
        if (cellAfterEat) {
          return {
            type: _constants.MOVE_TYPE.EAT,
            cell: cellAfterEat
          };
        }
      }

      return null;
    }
  }, {
    key: 'cellAfterEating',
    value: function cellAfterEating(enemyPosition, direction) {
      var cell = this.getCell({
        x: enemyPosition.x + Math.sign(direction.x),
        y: enemyPosition.y + Math.sign(direction.y)
      });
      return cell && !cell.hasChecker() ? cell : null;
    }
  }, {
    key: 'eatIfItPossible',
    value: function eatIfItPossible(checker, nextCell) {
      var curCell = checker.cell;
      if (Math.abs(curCell.x - nextCell.x) >= 2) {
        var direction = this.calcDirectionOfMove(curCell, nextCell);
        var enemyCell = !checker.isQueen() ? this.getCell({ x: curCell.x + direction.x, y: curCell.y + direction.y }) : this.findEnemyCell(curCell, nextCell, direction);
        if (enemyCell && enemyCell.checker) {
          enemyCell.checker.belongsTo(null);
          enemyCell.removeChecker();
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'findEnemyCell',
    value: function findEnemyCell(cellFrom, cellTo, direction) {
      var enemy = null;
      var curDirection = this.calcNextDirectionCell(cellFrom, direction);
      while (enemy !== cellTo) {
        enemy = this.getCell(curDirection);
        // console.log(curDirection, enemy, this.getCell(curDirection))
        if (enemy && enemy.hasChecker() || !enemy) {
          break;
        }
        curDirection = this.calcNextDirectionCell(curDirection, direction);
        // if (!confirm('CYKA BLYAT')) {
        //   break
        // }
      }
      return enemy;
    }
  }, {
    key: 'calcNextDirectionCell',
    value: function calcNextDirectionCell(curDirection, direction) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      return {
        x: curDirection.x + direction.x * offset,
        y: curDirection.y + direction.y * offset
      };
    }
  }, {
    key: 'calcDirectionOfMove',
    value: function calcDirectionOfMove(curCell, nextCell) {
      return {
        x: Math.sign(nextCell.x - curCell.x),
        y: Math.sign(nextCell.y - curCell.y)
      };
    }
  }, {
    key: 'markAvailableCheckers',
    value: function markAvailableCheckers(color) {
      var _this = this;

      var checkers = this.getCheckers(color);
      var eatMoves = false;
      var freeMoves = [];
      checkers.forEach(function (checker) {
        var moves = _this.getAvailableMoves(checker);
        if (moves) {
          if (moves.type === _constants.MOVE_TYPE.EAT) {
            checker.mark();
            eatMoves = true;
          } else {
            freeMoves.push(checker);
          }
        }
      });
      if (!eatMoves && freeMoves.length) {
        freeMoves.forEach(function (checker) {
          return checker.mark();
        });
      }
    }
  }, {
    key: 'deactivateCheckers',
    value: function deactivateCheckers() {
      var activeCheckers = document.getElementsByClassName('checker active');
      if (activeCheckers.length) {
        Object.keys(activeCheckers).map(function (i) {
          return activeCheckers[i].classList.remove('active');
        });
        var highlights = document.querySelectorAll('.cell.highlight');
        Object.keys(highlights).map(function (i) {
          return highlights[i].obj.unhighlight();
        });
      }
    }
  }]);

  return GameBoard;
}();

exports.default = GameBoard;

},{"./Cell":1,"./Checker":2,"./GameState.js":4,"./constants":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameState = function () {
  function GameState() {
    _classCallCheck(this, GameState);

    this.TURNS = [_constants.COLORS.checker.light, _constants.COLORS.checker.dark];
    // 0 - light, 1 - dark
    this.started = false;
    this.currentTurn = this.TURNS[0];
    this.turnsCount = 0;
    this.currentChecker = null;
    this.updateInfo();
  }

  _createClass(GameState, [{
    key: 'startGame',
    value: function startGame() {
      this.start = true;
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.currentChecker = null;
      this.currentTurn = null;
    }
  }, {
    key: 'setNexnTurn',
    value: function setNexnTurn() {
      this.turnsCount++;
      this.currentTurn = this.TURNS[this.turnsCount % 2];
    }
  }, {
    key: 'updateInfo',
    value: function updateInfo() {
      var turnsCountDOM = document.getElementById('turns_count');
      var turnColorDOM = document.getElementById('current_turn_color');
      turnsCountDOM.textContent = this.turnsCount;
      turnColorDOM.style.backgroundColor = _constants.BG_COLORS[this.currentTurn];
    }
  }]);

  return GameState;
}();

exports.default = GameState;

},{"./constants":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _QUEEN_LINE, _MOVE_MAP;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var N = exports.N = 8;
var WH = exports.WH = 100 / N;
var TOP_UP = exports.TOP_UP = 4;
var BOTTOM_FROM = exports.BOTTOM_FROM = N - 3;
var BG_COLORS = exports.BG_COLORS = {
  red: '#d74545',
  blue: '#448aff'
};
var COLORS = exports.COLORS = {
  checker: {
    light: 'red',
    dark: 'blue'
  },
  cell: {
    true: 'black',
    false: 'white'
  }
};
var MOVE_TYPE = exports.MOVE_TYPE = {
  FREE: 0,
  EAT: 1
};
var LEFT = exports.LEFT = 0;
var RIGHT = exports.RIGHT = 1;
var QUEEN_LINE = exports.QUEEN_LINE = (_QUEEN_LINE = {}, _defineProperty(_QUEEN_LINE, COLORS.checker.dark, N), _defineProperty(_QUEEN_LINE, COLORS.checker.light, 1), _QUEEN_LINE);
var MOVE_MAP = exports.MOVE_MAP = (_MOVE_MAP = {}, _defineProperty(_MOVE_MAP, COLORS.checker.light, {
  fw: [{ x: -1, y: -1 }, { x: -1, y: 1 }],
  bw: [{ x: 1, y: -1 }, { x: 1, y: 1 }]
}), _defineProperty(_MOVE_MAP, COLORS.checker.dark, {
  fw: [{ x: 1, y: -1 }, { x: 1, y: 1 }],
  bw: [{ x: -1, y: -1 }, { x: -1, y: 1 }]
}), _MOVE_MAP);

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameBoard = require('./GameBoard');

var _GameBoard2 = _interopRequireDefault(_GameBoard);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var board = document.getElementById('board');

var Checkers = function () {
  function Checkers(args) {
    _classCallCheck(this, Checkers);

    console.time('New board');
    this.board = new _GameBoard2.default(board);
    this.test();
    this.board.start();
    console.timeEnd('New board');
  }
  // TEST


  _createClass(Checkers, [{
    key: 'test',
    value: function test() {
      console.log('TESTING');
      // this.deleteChecker(1, 1)
      this.deleteChecker(1, 3);
      this.deleteChecker(2, 2);
      // this.deleteChecker(3, 1)
      this.deleteChecker(3, 3);
      this.deleteChecker(3, 5);
      // this.deleteChecker(6, 6)
      // this.deleteChecker(6, 8)
      // this.deleteChecker(7, 7)
      // this.deleteChecker(8, 6)
      // this.deleteChecker(8, 8)
      this.testCheckers([
      // {x: 3, y: 1, color: COLORS.checker.light},
      { x: 2, y: 2, color: _constants.COLORS.checker.light },
      // {x: 7, y: 7, color: COLORS.checker.dark}
      { x: 4, y: 6, color: _constants.COLORS.checker.dark }]);
    }
  }, {
    key: 'testCheckers',
    value: function testCheckers(checkers) {
      var _this = this;

      checkers.forEach(function (checker) {
        var testCell = document.getElementById('cell_' + checker.x + '_' + checker.y).obj;
        var testChecker = _this.board.createChecker(checker.color, testCell);
      });
    }
  }, {
    key: 'deleteChecker',
    value: function deleteChecker(x, y) {
      var cell = document.getElementById('cell_' + x + '_' + y).obj;
      if (!cell || !cell.checker) return false;
      cell.removeChecker();
      return true;
    }
  }]);

  return Checkers;
}();

function resizeHandle() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var minWH = Math.floor(Math.min(w, h) * 0.9);
  board.style.width = minWH + 'px';
  board.style.height = minWH + 'px';
  board.style.left = Math.floor((w - minWH) / 2) + 'px';
  console.log('Window', board, minWH);
}

window.onload = function () {
  window.checkers = new Checkers();
  // resizeHandle()
  console.log('Loaded');
};

// window.onresize = resizeHandle

},{"./GameBoard":3,"./constants":5}]},{},[6])