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

var _QUEEN_LINE;

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QUEEN_LINE = (_QUEEN_LINE = {}, _defineProperty(_QUEEN_LINE, _constants.COLORS.checker.dark, _constants.N), _defineProperty(_QUEEN_LINE, _constants.COLORS.checker.light, 1), _QUEEN_LINE);

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
      var selfTurn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.marked = true;
      if (selfTurn) {
        this.checkerDOM.classList.toggle('marked');
      }
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
      return !this.queen && this.cell.x === QUEEN_LINE[this.color];
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

var _MOVE_MAP;

var _constants = require('./constants');

var _Checker = require('./Checker');

var _Checker2 = _interopRequireDefault(_Checker);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LEFT = 0;
var RIGHT = 1;

var MOVE_MAP = (_MOVE_MAP = {}, _defineProperty(_MOVE_MAP, _constants.COLORS.checker.light, {
  fw: [{ x: -1, y: -1 }, { x: -1, y: 1 }],
  bw: [{ x: 1, y: -1 }, { x: 1, y: 1 }]
}), _defineProperty(_MOVE_MAP, _constants.COLORS.checker.dark, {
  fw: [{ x: 1, y: -1 }, { x: 1, y: 1 }],
  bw: [{ x: -1, y: -1 }, { x: -1, y: 1 }]
}), _MOVE_MAP);

var MOVE_TYPE = {
  FREE: 0,
  EAT: 1
};

var GameBoard = function () {
  function GameBoard(boardDOM) {
    _classCallCheck(this, GameBoard);

    this.boardDOM = boardDOM;
    this.draw();
  }

  // drawing board


  _createClass(GameBoard, [{
    key: 'draw',
    value: function draw() {
      for (var i = 1; i <= _constants.N; i++) {
        for (var j = 1; j <= _constants.N; j++) {
          var cell = new _Cell2.default(i, j);
          // cell.cellDOM.addEventListener('click', this.cellClickHandle.bind(this))
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
      // checker.checkerDOM.addEventListener('click', this.checkerClickHandle.bind(this))
      checker.belongsTo(cell);
      cell.containChecker(checker);
      return checker;
    }
  }, {
    key: 'move',
    value: function move(checker, cell) {
      var moveResult = '';
      var wasEaten = this.eatIfItPossible(checker, cell);
      checker.moveTo(cell);
      if (checker.canQueened()) {
        console.log('QUEENED');
        checker.makeQueen();
      }

      var mustEat = this.getAvailableMoves(checker, true); // only for eat(jump)
      this.deactivateCheckers();
      if (wasEaten && mustEat) {
        checker.activate();
        this.showMoves(mustEat.moves);
        moveResult = _constants.MOVES.CAN_EAT_MORE;
      } else {
        var checkers = this.getCheckers(checker.color, true);
        checkers.forEach(function (checker) {
          return checker.unmark();
        });
        moveResult = _constants.MOVES.MOVE_COMPLETED;
      }
      return moveResult;
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

      var checkerMoves = MOVE_MAP[checker.color];
      var enemyEatingFilter = function enemyEatingFilter(mv) {
        return mv && mv.cell && mv.type === MOVE_TYPE.EAT;
      };
      var freeMoveFilter = function freeMoveFilter(mv) {
        return mv && mv.cell && mv.type === MOVE_TYPE.FREE;
      };
      var moves = [];
      if (checker.isQueen()) {
        var _moves;

        console.log('searching moves for queen');
        (_moves = moves).push.apply(_moves, _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[LEFT], onlyEat)).concat(_toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[RIGHT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[LEFT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[RIGHT], onlyEat))));
      } else {
        // console.log('searching moves for checker')
        moves.push(this.getAvailableCell(checker, checkerMoves.fw[LEFT], onlyEat), this.getAvailableCell(checker, checkerMoves.fw[RIGHT], onlyEat), this.getAvailableCell(checker, checkerMoves.bw[LEFT], true), this.getAvailableCell(checker, checkerMoves.bw[RIGHT], true));
      }
      if (moves.some(enemyEatingFilter)) {
        moves = {
          type: MOVE_TYPE.EAT,
          moves: moves.filter(enemyEatingFilter)
        };
      } else {
        moves = {
          type: MOVE_TYPE.FREE,
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
          var isEat = aCell.type === MOVE_TYPE.EAT;
          if (eatDirection && isEat) {
            break;
          }
          eatDirection = isEat ? true : eatDirection;
          curDirection = this.calcNextDirectionCell(curDirection, direction, isEat ? 2 : 1);
          if (eatDirection) {
            aCell.type = MOVE_TYPE.EAT;
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
          type: MOVE_TYPE.FREE,
          cell: cell
        };
      }
      if (cell && cell.hasChecker() && checker.color !== cell.checker.color) {
        var cellAfterEat = this.cellAfterEating(cell.getPosition(), direction);
        if (cellAfterEat) {
          return {
            type: MOVE_TYPE.EAT,
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
          if (moves.type === MOVE_TYPE.EAT) {
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

},{"./Cell":1,"./Checker":2,"./constants":5}],4:[function(require,module,exports){
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
    this.gameStarted = false;
    this.currentTurn = this.TURNS[0];
    this.turnsCount = 0;
    this.currentChecker = null;
  }

  _createClass(GameState, [{
    key: 'startGame',
    value: function startGame() {
      this.gameStarted = true;
      this.updateInfo();
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      if (this.gameStarted) {
        this.gameStarted = false;
        this.currentChecker = null;
        this.currentTurn = null;
      }
    }
  }, {
    key: 'setNexnTurn',
    value: function setNexnTurn() {
      if (this.gameStarted) {
        this.turnsCount++;
        this.currentTurn = this.TURNS[this.turnsCount % 2];
      }
    }
  }, {
    key: 'updateInfo',
    value: function updateInfo() {
      var infoDOM = document.getElementById('info');
      if (this.gameStarted) {
        var turnsCountDOM = document.getElementById('turns_count');
        var turnColorDOM = document.getElementById('current_turn_color');
        infoDOM.style.visibility = 'visible';
        turnsCountDOM.textContent = this.turnsCount;
        turnColorDOM.style.backgroundColor = _constants.BG_COLORS[this.currentTurn];
      } else {
        infoDOM.style.visibility = 'hidden';
      }
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
var PLAYER_COLOR = exports.PLAYER_COLOR = {
  1: COLORS.checker.light,
  2: COLORS.checker.dark
};
var MOVES = exports.MOVES = {
  MOVE_COMPLETED: 0,
  CAN_EAT_MORE: 1
};

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import PlayerHuman from './Player'


var _constants = require('./constants');

var _GameBoard = require('./GameBoard');

var _GameBoard2 = _interopRequireDefault(_GameBoard);

var _GameState = require('./GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkers = function () {
  function Checkers(boardDOM) {
    var online = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var chatContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Checkers);

    console.time('New board');
    this.board = new _GameBoard2.default(boardDOM);
    boardDOM.addEventListener('click', this.boardEventHandler.bind(this));
    console.timeEnd('New board');
    this.state = new _GameState2.default();
    this.playerColor = _constants.COLORS.checker.light;
    this.online = online;
    this.chatContent = chatContent;
    if (online) {
      this.chatMessages = [];
      this.socket = io();
      this.bindSocketEvents();
      this.socket.emit('add player');
    } else {
      // this.test()
      this.start();
    }
  }

  _createClass(Checkers, [{
    key: 'start',
    value: function start() {
      if (!this.state.gameStarted) {
        this.state.startGame();
        this.markAvailableCheckers();
      }
      console.log('game started');
    }
  }, {
    key: 'restart',
    value: function restart() {
      var boardDOM = this.board.boardDOM;
      boardDOM.innerHTML = '';
      this.board = new _GameBoard2.default(boardDOM);
      this.state.endGame();
      this.state = new _GameState2.default();
    }
  }, {
    key: 'bindSocketEvents',
    value: function bindSocketEvents() {
      this.socket.on('can play', this.onCanPlay.bind(this));
      this.socket.on('message', this.onMessage.bind(this));
      this.socket.on('enemy player connected', this.onEnemyPlayerConnected.bind(this));
      this.socket.on('enemy player moved', this.onEnemyPlayerMoved.bind(this));
      this.socket.on('chat message', this.onChatMessage.bind(this));
      this.socket.on('restart game', this.onRestartGame.bind(this));
    }
  }, {
    key: 'markAvailableCheckers',
    value: function markAvailableCheckers() {
      if (this.canMove()) {
        this.board.markAvailableCheckers(this.state.currentTurn);
      }
    }
  }, {
    key: 'boardEventHandler',
    value: function boardEventHandler(e) {
      var elClass = e.target.getAttribute('class');
      if (elClass) {
        if (elClass.indexOf('cell') !== -1) {
          this.cellClickHandle(e);
        } else if (elClass.indexOf('checker') !== -1) {
          this.checkerClickHandle(e);
        }
      }
      return false;
    }
  }, {
    key: 'checkerClickHandle',
    value: function checkerClickHandle(e) {
      var checker = e.target.obj;
      this.board.deactivateCheckers();
      if (checker !== undefined && checker.isMovePossible(this.state.currentChecker, this.state.currentTurn)) {
        var availableMoves = this.board.getAvailableMoves(checker);
        checker.activate();
        this.board.showMoves(availableMoves.moves);
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
      var checker = this.state.currentChecker;
      if (cell instanceof _Cell2.default && checker && cell.isHighlighted()) {
        if (this.online) {
          this.socket.emit('move', {
            from: checker.cell.getPosition(),
            to: cell.getPosition()
          });
        }
        this.move(checker, cell);
      }
      return false;
    }
  }, {
    key: 'canMove',
    value: function canMove() {
      return this.playerColor === this.state.currentTurn;
    }
  }, {
    key: 'move',
    value: function move(checker, toCell) {
      var isEnemyMove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!isEnemyMove && this.canMove() || isEnemyMove && !this.canMove()) {
        var moveResult = this.board.move(checker, toCell);
        if (moveResult === _constants.MOVES.MOVE_COMPLETED) {
          this.state.setNexnTurn();
          this.markAvailableCheckers(this.state.currentTurn);
        } else if (moveResult === _constants.MOVES.CAN_EAT_MORE) {
          // IDK
        }
        this.state.updateInfo();
      }
    }
  }, {
    key: 'onCanPlay',
    value: function onCanPlay(data) {
      if (data && data.hasOwnProperty('id')) {
        console.log('You can play');
        this.playerColor = _constants.PLAYER_COLOR[data.id];
        if (data.id === 2) {
          // this.playerColor(COLORS.checker.dark)
          this.board.boardDOM.style.transform = 'rotate(180deg)';
          this.start();
        } else {
          this.board.boardDOM.style.transform = 'rotate(0deg)';
        }
      } else {
        console.log('cant play');
      }
    }
  }, {
    key: 'onMessage',
    value: function onMessage(data) {
      console.log(data.message);
    }
  }, {
    key: 'onEnemyPlayerConnected',
    value: function onEnemyPlayerConnected() {
      console.log('all players ready to start this');
      this.start();
    }
  }, {
    key: 'onEnemyPlayerMoved',
    value: function onEnemyPlayerMoved(data) {
      console.log(data);
      var checker = this.board.getCell(data.from).checker;
      var cell = this.board.getCell(data.to);
      if (checker && cell) {
        this.move(checker, cell, true);
      }
    }
  }, {
    key: 'onChatMessage',
    value: function onChatMessage(data) {
      if (data.message) {
        this.addChatMessage(data.message);
      } else {
        console.log('There is a problem: ' + data);
      }
    }
  }, {
    key: 'addChatMessage',
    value: function addChatMessage(message) {
      this.chatMessages.push(message);
      var html = '';
      for (var i = 0; i < this.chatMessages.length; i++) {
        html += this.chatMessages[i] + '<br />';
      }
      if (this.chatContent) {
        this.chatContent.innerHTML = html;
      }
    }
  }, {
    key: 'onRestartGame',
    value: function onRestartGame(data) {
      console.log('Restarting game...\nWait for players...');
      this.onCanPlay(data);
      this.restart();
    }

    // TEST

  }, {
    key: '_test',
    value: function _test() {
      console.log('TESTING');
      this._deleteCheckers([{ x: 1, y: 3 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 5 }]);
      this._testCheckers([{ x: 2, y: 2, color: _constants.COLORS.checker.light }, { x: 4, y: 6, color: _constants.COLORS.checker.dark }]);
    }
  }, {
    key: '_testCheckers',
    value: function _testCheckers(checkers) {
      var _this = this;

      checkers.forEach(function (checker) {
        var testCell = document.getElementById('cell_' + checker.x + '_' + checker.y).obj;
        _this.board.createChecker(checker.color, testCell);
      });
    }
  }, {
    key: '_deleteCheckers',
    value: function _deleteCheckers(positions) {
      positions.forEach(function (pos) {
        var cell = document.getElementById('cell_' + pos.x + '_' + pos.y).obj;
        if (!cell || !cell.checker) return false;
        cell.removeChecker();
      });
      return true;
    }
  }]);

  return Checkers;
}();

window.onload = function () {
  var boardDOM = document.getElementById('board');
  var chatContent = document.getElementById('chat_content');
  var messageField = document.getElementById('message');
  var send = document.getElementById('send');

  var online = true;

  var game = new Checkers(boardDOM, online, chatContent);

  send.addEventListener('click', function () {
    if (messageField.value.length) {
      var text = game.playerColor + ': ' + messageField.value;
      game.socket.emit('send', { message: text });
      messageField.value = '';
      game.addChatMessage(text);
    }
  });
  // console.log('Loaded')
};

},{"./Cell":1,"./GameBoard":3,"./GameState":4,"./constants":5}]},{},[6])