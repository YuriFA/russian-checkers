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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNlbGwuanMiXSwibmFtZXMiOlsiQ2VsbCIsIngiLCJ5IiwiaWQiLCJjb2xvciIsImNlbGwiLCJjaGVja2VyIiwiY2VsbERPTSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsInJlbW92ZUNoaWxkIiwiY2hlY2tlckRPTSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBRXFCQSxJO0FBQ25CLGdCQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxFQUFMLGFBQWtCRixDQUFsQixTQUF1QkMsQ0FBdkI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsa0JBQU9DLElBQVAsQ0FBYUosSUFBSSxDQUFKLEtBQVVDLElBQUksQ0FBM0IsQ0FBYjtBQUNBLFNBQUtJLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFnQixZQUFNO0FBQ3BCLFVBQU1GLE9BQU9HLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBSixXQUFLRixFQUFMLEdBQVUsTUFBS0EsRUFBZjtBQUNBRSxXQUFLSyxTQUFMLG1CQUErQixNQUFLTixLQUFwQztBQUNBQyxXQUFLTSxLQUFMLENBQVdDLEtBQVg7QUFDQVAsV0FBS00sS0FBTCxDQUFXRSxNQUFYO0FBQ0EsVUFBSSxDQUFDUixLQUFLUyxjQUFMLENBQW9CLEtBQXBCLENBQUwsRUFBaUM7QUFDL0JULGFBQUtVLEdBQUw7QUFDRDtBQUNELGFBQU9WLElBQVA7QUFDRCxLQVZjLEVBQWY7QUFXRDs7OztrQ0FFYztBQUNiLGFBQU87QUFDTEosV0FBRyxLQUFLQSxDQURIO0FBRUxDLFdBQUcsS0FBS0E7QUFGSCxPQUFQO0FBSUQ7OzttQ0FFZUksTyxFQUFTO0FBQ3ZCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7aUNBRWE7QUFDWixhQUFPLEtBQUtBLE9BQUwsSUFBZ0IsSUFBdkI7QUFDRDs7O29DQUVnQjtBQUNmLFVBQUksS0FBS0EsT0FBVCxFQUFrQjtBQUNoQixhQUFLQyxPQUFMLENBQWFTLFdBQWIsQ0FBeUIsS0FBS1YsT0FBTCxDQUFhVyxVQUF0QztBQUNBLGFBQUtYLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7QUFDRjs7O2dDQUVZO0FBQ1gsV0FBS0MsT0FBTCxDQUFhVyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixXQUE5QjtBQUNEOzs7a0NBRWM7QUFDYixXQUFLWixPQUFMLENBQWFXLFNBQWIsQ0FBdUJFLE1BQXZCLENBQThCLFdBQTlCO0FBQ0Q7OztvQ0FFZ0I7QUFDZixhQUFPLEtBQUtiLE9BQUwsQ0FBYVcsU0FBYixDQUF1QkcsUUFBdkIsQ0FBZ0MsV0FBaEMsQ0FBUDtBQUNEOzs7Ozs7a0JBcERrQnJCLEkiLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09MT1JTLCBXSH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcclxuICBjb25zdHJ1Y3RvciAoeCwgeSkge1xyXG4gICAgdGhpcy54ID0geFxyXG4gICAgdGhpcy55ID0geVxyXG4gICAgdGhpcy5pZCA9IGBjZWxsXyR7eH1fJHt5fWBcclxuICAgIHRoaXMuY29sb3IgPSBDT0xPUlMuY2VsbFsgeCAlIDIgPT09IHkgJSAyIF1cclxuICAgIHRoaXMuY2hlY2tlciA9IG51bGxcclxuICAgIHRoaXMuY2VsbERPTSA9ICgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjZWxsLmlkID0gdGhpcy5pZFxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsIGNlbGxfXyR7dGhpcy5jb2xvcn1gXHJcbiAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBgJHtXSH0lYFxyXG4gICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke1dIfSVgXHJcbiAgICAgIGlmICghY2VsbC5oYXNPd25Qcm9wZXJ0eSgnb2JqJykpIHtcclxuICAgICAgICBjZWxsLm9iaiA9IHRoaXNcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2VsbFxyXG4gICAgfSkoKVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9zaXRpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRhaW5DaGVja2VyIChjaGVja2VyKSB7XHJcbiAgICB0aGlzLmNoZWNrZXIgPSBjaGVja2VyXHJcbiAgfVxyXG5cclxuICBoYXNDaGVja2VyICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrZXIgIT0gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hlY2tlciAoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2VyKSB7XHJcbiAgICAgIHRoaXMuY2VsbERPTS5yZW1vdmVDaGlsZCh0aGlzLmNoZWNrZXIuY2hlY2tlckRPTSlcclxuICAgICAgdGhpcy5jaGVja2VyID0gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0ICgpIHtcclxuICAgIHRoaXMuY2VsbERPTS5jbGFzc0xpc3QudG9nZ2xlKCdoaWdobGlnaHQnKVxyXG4gIH1cclxuXHJcbiAgdW5oaWdobGlnaHQgKCkge1xyXG4gICAgdGhpcy5jZWxsRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXHJcbiAgfVxyXG4gIFxyXG4gIGlzSGlnaGxpZ2h0ZWQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbERPTS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpXHJcbiAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrZXIuanMiXSwibmFtZXMiOlsiQ2hlY2tlciIsImNvbG9yIiwiY2VsbCIsIm1hcmtlZCIsInF1ZWVuIiwiY2hlY2tlckRPTSIsImNoZWNrZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNlbGxET00iLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsImN1cnJlbnRDaGVja2VyIiwiY3VycmVudFR1cm5Db2xvciIsImlzTWFya2VkIiwicmVtb3ZlQ2hlY2tlciIsImJlbG9uZ3NUbyIsImNvbnRhaW5DaGVja2VyIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUVxQkEsTztBQUNuQixtQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLQyxVQUFMLEdBQW1CLFlBQU07QUFDdkIsVUFBTUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRixjQUFRRyxTQUFSLHlCQUF3QyxNQUFLUixLQUE3QztBQUNBLFVBQUksQ0FBQ0ssUUFBUUksY0FBUixDQUF1QixLQUF2QixDQUFMLEVBQW9DO0FBQ2xDSixnQkFBUUssR0FBUjtBQUNEO0FBQ0QsYUFBT0wsT0FBUDtBQUNELEtBUGlCLEVBQWxCO0FBUUQ7Ozs7K0JBRVc7QUFDVixXQUFLRCxVQUFMLENBQWdCTyxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsUUFBakM7QUFDRDs7OzhCQUVVWCxJLEVBQU07QUFDZixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFJQSxJQUFKLEVBQVU7QUFDUkEsYUFBS1ksT0FBTCxDQUFhQyxXQUFiLENBQXlCLEtBQUtWLFVBQTlCO0FBQ0Q7QUFDRjs7OzJCQUVPO0FBQ04sV0FBS0YsTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLRSxVQUFMLENBQWdCTyxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsUUFBakM7QUFDRDs7OzZCQUVTO0FBQ1IsV0FBS1YsTUFBTCxHQUFjLEtBQWQ7QUFDQSxXQUFLRSxVQUFMLENBQWdCTyxTQUFoQixDQUEwQkksTUFBMUIsQ0FBaUMsUUFBakM7QUFDRDs7OytCQUVXO0FBQ1YsYUFBTyxLQUFLYixNQUFaO0FBQ0Q7OzttQ0FFZWMsYyxFQUFnQkMsZ0IsRUFBa0I7QUFDaEQsYUFBTyxLQUFLakIsS0FBTCxLQUFlaUIsZ0JBQWYsSUFBbUMsS0FBS0MsUUFBTCxFQUFuQyxLQUF1REYsa0JBQWtCLElBQWxCLElBQTBCQSxtQkFBbUIsSUFBcEcsQ0FBUDtBQUNEOzs7MkJBRU9mLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsQ0FBVWtCLGFBQVY7QUFDQSxXQUFLQyxTQUFMLENBQWVuQixJQUFmO0FBQ0FBLFdBQUtvQixjQUFMLENBQW9CLElBQXBCO0FBQ0Q7OztpQ0FFYTtBQUNaLGFBQU8sQ0FBQyxLQUFLbEIsS0FBTixJQUFlLEtBQUtGLElBQUwsQ0FBVXFCLENBQVYsS0FBZ0Isc0JBQVcsS0FBS3RCLEtBQWhCLENBQXRDO0FBQ0Q7OztnQ0FFWTtBQUNYLFdBQUtHLEtBQUwsR0FBYSxJQUFiO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQk8sU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLE9BQWpDO0FBQ0Q7Ozs4QkFFVTtBQUNULGFBQU8sS0FBS1QsS0FBWjtBQUNEOzs7Ozs7a0JBOURrQkosTyIsImZpbGUiOiJDaGVja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUVVFRU5fTElORSB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tlciB7XHJcbiAgY29uc3RydWN0b3IgKGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIHRoaXMuY2VsbCA9IG51bGxcclxuICAgIHRoaXMubWFya2VkID0gZmFsc2VcclxuICAgIHRoaXMucXVlZW4gPSBmYWxzZVxyXG4gICAgdGhpcy5jaGVja2VyRE9NID0gKCgpID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIGNoZWNrZXIuY2xhc3NOYW1lID0gYGNoZWNrZXIgY2hlY2tlcl9fJHt0aGlzLmNvbG9yfWBcclxuICAgICAgaWYgKCFjaGVja2VyLmhhc093blByb3BlcnR5KCdvYmonKSkge1xyXG4gICAgICAgIGNoZWNrZXIub2JqID0gdGhpc1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjaGVja2VyXHJcbiAgICB9KSgpXHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSAoKSB7XHJcbiAgICB0aGlzLmNoZWNrZXJET00uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICB9XHJcblxyXG4gIGJlbG9uZ3NUbyAoY2VsbCkge1xyXG4gICAgdGhpcy5jZWxsID0gY2VsbFxyXG4gICAgaWYgKGNlbGwpIHtcclxuICAgICAgY2VsbC5jZWxsRE9NLmFwcGVuZENoaWxkKHRoaXMuY2hlY2tlckRPTSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hcmsgKCkge1xyXG4gICAgdGhpcy5tYXJrZWQgPSB0cnVlXHJcbiAgICB0aGlzLmNoZWNrZXJET00uY2xhc3NMaXN0LnRvZ2dsZSgnbWFya2VkJylcclxuICB9XHJcblxyXG4gIHVubWFyayAoKSB7XHJcbiAgICB0aGlzLm1hcmtlZCA9IGZhbHNlXHJcbiAgICB0aGlzLmNoZWNrZXJET00uY2xhc3NMaXN0LnJlbW92ZSgnbWFya2VkJylcclxuICB9XHJcbiAgXHJcbiAgaXNNYXJrZWQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFya2VkXHJcbiAgfVxyXG5cclxuICBpc01vdmVQb3NzaWJsZSAoY3VycmVudENoZWNrZXIsIGN1cnJlbnRUdXJuQ29sb3IpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbG9yID09PSBjdXJyZW50VHVybkNvbG9yICYmIHRoaXMuaXNNYXJrZWQoKSAmJiAoY3VycmVudENoZWNrZXIgPT0gbnVsbCB8fCBjdXJyZW50Q2hlY2tlciAhPT0gdGhpcylcclxuICB9XHJcblxyXG4gIG1vdmVUbyAoY2VsbCkge1xyXG4gICAgdGhpcy5jZWxsLnJlbW92ZUNoZWNrZXIoKVxyXG4gICAgdGhpcy5iZWxvbmdzVG8oY2VsbClcclxuICAgIGNlbGwuY29udGFpbkNoZWNrZXIodGhpcylcclxuICB9XHJcblxyXG4gIGNhblF1ZWVuZWQgKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLnF1ZWVuICYmIHRoaXMuY2VsbC54ID09PSBRVUVFTl9MSU5FW3RoaXMuY29sb3JdXHJcbiAgfVxyXG5cclxuICBtYWtlUXVlZW4gKCkge1xyXG4gICAgdGhpcy5xdWVlbiA9IHRydWVcclxuICAgIHRoaXMuY2hlY2tlckRPTS5jbGFzc0xpc3QudG9nZ2xlKCdxdWVlbicpXHJcbiAgfVxyXG4gIFxyXG4gIGlzUXVlZW4gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVlZW5cclxuICB9XHJcbn1cclxuIl19
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
      if (checker.canQueened()) {
        checker.makeQueen();
      }

      var mustEat = this.getAvailableMoves(checker, true);
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

      var checkersDOM = document.querySelectorAll('.checker.checker__' + color + (marked ? '.marked' : ''));
      return Object.keys(checkersDOM).map(function (i) {
        return checkersDOM[i].obj;
      });
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

        (_moves = moves).push.apply(_moves, _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[_constants.LEFT], onlyEat)).concat(_toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[_constants.RIGHT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[_constants.LEFT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[_constants.RIGHT], onlyEat))));
      } else {
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
          ret.push(aCell);
        } else {
          break;
        }
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
        if (enemy && enemy.hasChecker() || !enemy) {
          break;
        }
        curDirection = this.calcNextDirectionCell(curDirection, direction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVCb2FyZC5qcyJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJib2FyZCIsImJvYXJkRE9NIiwiZHJhdyIsInN0YXRlIiwic3RhcnRHYW1lIiwibWFya0F2YWlsYWJsZUNoZWNrZXJzIiwiY3VycmVudFR1cm4iLCJpIiwiaiIsImNlbGwiLCJjZWxsRE9NIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNlbGxDbGlja0hhbmRsZSIsImJpbmQiLCJhcHBlbmRDaGlsZCIsImRyYXdDaGVja2VyIiwieSIsIngiLCJjcmVhdGVDaGVja2VyIiwiY2hlY2tlciIsImRhcmsiLCJsaWdodCIsImNvbG9yIiwiY2hlY2tlckRPTSIsImNoZWNrZXJDbGlja0hhbmRsZSIsImJlbG9uZ3NUbyIsImNvbnRhaW5DaGVja2VyIiwiZSIsInRhcmdldCIsIm9iaiIsImRlYWN0aXZhdGVDaGVja2VycyIsInVuZGVmaW5lZCIsImlzTW92ZVBvc3NpYmxlIiwiY3VycmVudENoZWNrZXIiLCJhdmFpbGFibGVNb3ZlcyIsImdldEF2YWlsYWJsZU1vdmVzIiwiYWN0aXZhdGUiLCJzaG93TW92ZXMiLCJtb3ZlcyIsImlzSGlnaGxpZ2h0ZWQiLCJtb3ZlIiwid2FzRWF0ZW4iLCJlYXRJZkl0UG9zc2libGUiLCJtb3ZlVG8iLCJjYW5RdWVlbmVkIiwibWFrZVF1ZWVuIiwibXVzdEVhdCIsImNoZWNrZXJzIiwiZ2V0Q2hlY2tlcnMiLCJmb3JFYWNoIiwidW5tYXJrIiwic2V0TmV4blR1cm4iLCJ1cGRhdGVJbmZvIiwicG9zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcmtlZCIsImNoZWNrZXJzRE9NIiwicXVlcnlTZWxlY3RvckFsbCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJoaWdobGlnaHQiLCJvbmx5RWF0IiwiY2hlY2tlck1vdmVzIiwiZW5lbXlFYXRpbmdGaWx0ZXIiLCJtdiIsInR5cGUiLCJFQVQiLCJmcmVlTW92ZUZpbHRlciIsIkZSRUUiLCJpc1F1ZWVuIiwicHVzaCIsImdldEF2YWlsYWJsZUNlbGxzRm9yUXVlZW4iLCJmdyIsImJ3IiwiZ2V0QXZhaWxhYmxlQ2VsbCIsInNvbWUiLCJmaWx0ZXIiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJhQ2VsbCIsInJldCIsImVhdERpcmVjdGlvbiIsImN1ckRpcmVjdGlvbiIsImlzRWF0IiwiY2FsY05leHREaXJlY3Rpb25DZWxsIiwiY3VyUG9zIiwiZ2V0UG9zaXRpb24iLCJnZXRDZWxsIiwiaGFzQ2hlY2tlciIsImNlbGxBZnRlckVhdCIsImNlbGxBZnRlckVhdGluZyIsImVuZW15UG9zaXRpb24iLCJNYXRoIiwic2lnbiIsIm5leHRDZWxsIiwiY3VyQ2VsbCIsImFicyIsImNhbGNEaXJlY3Rpb25PZk1vdmUiLCJlbmVteUNlbGwiLCJmaW5kRW5lbXlDZWxsIiwicmVtb3ZlQ2hlY2tlciIsImNlbGxGcm9tIiwiY2VsbFRvIiwiZW5lbXkiLCJvZmZzZXQiLCJlYXRNb3ZlcyIsImZyZWVNb3ZlcyIsIm1hcmsiLCJhY3RpdmVDaGVja2VycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoaWdobGlnaHRzIiwidW5oaWdobGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTO0FBQ25CLHFCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtDLFFBQUwsR0FBZ0JELEtBQWhCO0FBQ0EsU0FBS0UsSUFBTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSx5QkFBYjtBQUNEOzs7OzRCQUVRO0FBQ1AsV0FBS0EsS0FBTCxDQUFXQyxTQUFYO0FBQ0EsV0FBS0MscUJBQUwsQ0FBMkIsS0FBS0YsS0FBTCxDQUFXRyxXQUF0QztBQUNEOzs7MkJBRU87QUFDTixXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsaUJBQWhCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQixhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsaUJBQWhCLEVBQXdC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QixPQUFEO0FBQUEsaUJBQWFBLFFBQVEwRixJQUFSLEVBQWI7QUFBQSxTQUFsQjtBQUNEO0FBQ0Y7Ozt5Q0FFcUI7QUFDcEIsVUFBTUMsaUJBQWlCeEQsU0FBU3lELHNCQUFULENBQWdDLGdCQUFoQyxDQUF2QjtBQUNBLFVBQUlELGVBQWUvQixNQUFuQixFQUEyQjtBQUN6QnBCLGVBQU9DLElBQVAsQ0FBWWtELGNBQVosRUFBNEJqRCxHQUE1QixDQUFnQyxVQUFDdEQsQ0FBRDtBQUFBLGlCQUFPdUcsZUFBZXZHLENBQWYsRUFBa0J5RyxTQUFsQixDQUE0QkMsTUFBNUIsQ0FBbUMsUUFBbkMsQ0FBUDtBQUFBLFNBQWhDO0FBQ0EsWUFBSUMsYUFBYTVELFNBQVNJLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjtBQUNBQyxlQUFPQyxJQUFQLENBQVlzRCxVQUFaLEVBQXdCckQsR0FBeEIsQ0FBNEIsVUFBQ3RELENBQUQ7QUFBQSxpQkFBTzJHLFdBQVczRyxDQUFYLEVBQWNzQixHQUFkLENBQWtCc0YsV0FBbEIsRUFBUDtBQUFBLFNBQTVCO0FBQ0Q7QUFDRjs7Ozs7O2tCQXRRa0JwSCxTIiwiZmlsZSI6IkdhbWVCb2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE4sIENPTE9SUywgVE9QX1VQLCBCT1RUT01fRlJPTSwgTU9WRV9UWVBFLCBMRUZULCBSSUdIVCwgTU9WRV9NQVAgfSBmcm9tICcuL2NvbnN0YW50cydcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tICcuL0dhbWVTdGF0ZS5qcydcclxuaW1wb3J0IENoZWNrZXIgZnJvbSAnLi9DaGVja2VyJ1xyXG5pbXBvcnQgQ2VsbCBmcm9tICcuL0NlbGwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yIChib2FyZCkge1xyXG4gICAgdGhpcy5ib2FyZERPTSA9IGJvYXJkXHJcbiAgICB0aGlzLmRyYXcoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKVxyXG4gIH1cclxuXHJcbiAgc3RhcnQgKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5zdGFydEdhbWUoKVxyXG4gICAgdGhpcy5tYXJrQXZhaWxhYmxlQ2hlY2tlcnModGhpcy5zdGF0ZS5jdXJyZW50VHVybilcclxuICB9XHJcblxyXG4gIGRyYXcgKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTjsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IE47IGorKykge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbChpLCBqKVxyXG4gICAgICAgIGNlbGwuY2VsbERPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2VsbENsaWNrSGFuZGxlLmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5ib2FyZERPTS5hcHBlbmRDaGlsZChjZWxsLmNlbGxET00pXHJcbiAgICAgICAgdGhpcy5kcmF3Q2hlY2tlcihjZWxsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3Q2hlY2tlciAoY2VsbCkge1xyXG4gICAgaWYgKGNlbGwueSAlIDIgPT09IGNlbGwueCAlIDIgJiYgKGNlbGwueCA8IFRPUF9VUCB8fCBjZWxsLnggPiBCT1RUT01fRlJPTSkpIHtcclxuICAgICAgdGhpcy5jcmVhdGVDaGVja2VyKGNlbGwueCA8IFRPUF9VUCA/IENPTE9SUy5jaGVja2VyLmRhcmsgOiBDT0xPUlMuY2hlY2tlci5saWdodCwgY2VsbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoZWNrZXIgKGNvbG9yLCBjZWxsKSB7XHJcbiAgICBjb25zdCBjaGVja2VyID0gbmV3IENoZWNrZXIoY29sb3IpXHJcbiAgICBjaGVja2VyLmNoZWNrZXJET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoZWNrZXJDbGlja0hhbmRsZS5iaW5kKHRoaXMpKVxyXG4gICAgY2hlY2tlci5iZWxvbmdzVG8oY2VsbClcclxuICAgIGNlbGwuY29udGFpbkNoZWNrZXIoY2hlY2tlcilcclxuICAgIHJldHVybiBjaGVja2VyXHJcbiAgfVxyXG5cclxuICBjaGVja2VyQ2xpY2tIYW5kbGUgKGUpIHtcclxuICAgIGNvbnN0IGNoZWNrZXIgPSBlLnRhcmdldC5vYmpcclxuICAgIHRoaXMuZGVhY3RpdmF0ZUNoZWNrZXJzKClcclxuICAgIGlmIChjaGVja2VyICE9PSB1bmRlZmluZWQgJiYgY2hlY2tlci5pc01vdmVQb3NzaWJsZSh0aGlzLnN0YXRlLmN1cnJlbnRDaGVja2VyLCB0aGlzLnN0YXRlLmN1cnJlbnRUdXJuKSkge1xyXG4gICAgICBjb25zdCBhdmFpbGFibGVNb3ZlcyA9IHRoaXMuZ2V0QXZhaWxhYmxlTW92ZXMoY2hlY2tlcilcclxuICAgICAgY2hlY2tlci5hY3RpdmF0ZSgpXHJcbiAgICAgIHRoaXMuc2hvd01vdmVzKGF2YWlsYWJsZU1vdmVzLm1vdmVzKVxyXG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRDaGVja2VyID0gY2hlY2tlclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Q2hlY2tlciA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNlbGxDbGlja0hhbmRsZSAoZSkge1xyXG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0Lm9ialxyXG4gICAgaWYgKGNlbGwgaW5zdGFuY2VvZiBDZWxsICYmIHRoaXMuc3RhdGUuY3VycmVudENoZWNrZXIgJiYgY2VsbC5pc0hpZ2hsaWdodGVkKCkpIHtcclxuICAgICAgdGhpcy5tb3ZlKHRoaXMuc3RhdGUuY3VycmVudENoZWNrZXIsIGNlbGwpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIG1vdmUgKGNoZWNrZXIsIGNlbGwpIHtcclxuICAgIGNvbnN0IHdhc0VhdGVuID0gdGhpcy5lYXRJZkl0UG9zc2libGUoY2hlY2tlciwgY2VsbClcclxuICAgIGNoZWNrZXIubW92ZVRvKGNlbGwpXHJcbiAgICBpZiAoY2hlY2tlci5jYW5RdWVlbmVkKCkpIHtcclxuICAgICAgY2hlY2tlci5tYWtlUXVlZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG11c3RFYXQgPSB0aGlzLmdldEF2YWlsYWJsZU1vdmVzKGNoZWNrZXIsIHRydWUpXHJcbiAgICB0aGlzLmRlYWN0aXZhdGVDaGVja2VycygpXHJcbiAgICBpZiAod2FzRWF0ZW4gJiYgbXVzdEVhdCkge1xyXG4gICAgICBjaGVja2VyLmFjdGl2YXRlKClcclxuICAgICAgdGhpcy5zaG93TW92ZXMobXVzdEVhdC5tb3ZlcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNoZWNrZXJzID0gdGhpcy5nZXRDaGVja2Vycyh0aGlzLnN0YXRlLmN1cnJlbnRUdXJuLCB0cnVlKVxyXG4gICAgICBjaGVja2Vycy5mb3JFYWNoKChjaGVja2VyKSA9PiBjaGVja2VyLnVubWFyaygpKVxyXG4gICAgICB0aGlzLnN0YXRlLnNldE5leG5UdXJuKClcclxuICAgICAgdGhpcy5tYXJrQXZhaWxhYmxlQ2hlY2tlcnModGhpcy5zdGF0ZS5jdXJyZW50VHVybilcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZUluZm8oKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2VsbCAocG9zKSB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGxfJHtwb3MueH1fJHtwb3MueX1gKVxyXG4gICAgcmV0dXJuIGNlbGwgPyBjZWxsLm9iaiA6IG51bGxcclxuICB9XHJcblxyXG4gIGdldENoZWNrZXJzIChjb2xvciwgbWFya2VkID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGNoZWNrZXJzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNoZWNrZXIuY2hlY2tlcl9fJHtjb2xvcn0ke21hcmtlZCA/ICcubWFya2VkJyA6ICcnfWApXHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2hlY2tlcnNET00pLm1hcCgoaSkgPT4gY2hlY2tlcnNET01baV0ub2JqKVxyXG4gIH1cclxuXHJcbiAgc2hvd01vdmVzIChtb3Zlcykge1xyXG4gICAgaWYgKG1vdmVzKSB7XHJcbiAgICAgIG1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcclxuICAgICAgICBpZiAobW92ZSAmJiBtb3ZlLmNlbGwpIHtcclxuICAgICAgICAgIG1vdmUuY2VsbC5oaWdobGlnaHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZU1vdmVzIChjaGVja2VyLCBvbmx5RWF0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGNoZWNrZXJNb3ZlcyA9IE1PVkVfTUFQWyBjaGVja2VyLmNvbG9yIF1cclxuICAgIGNvbnN0IGVuZW15RWF0aW5nRmlsdGVyID0gKG12KSA9PiBtdiAmJiBtdi5jZWxsICYmIG12LnR5cGUgPT09IE1PVkVfVFlQRS5FQVRcclxuICAgIGNvbnN0IGZyZWVNb3ZlRmlsdGVyID0gKG12KSA9PiBtdiAmJiBtdi5jZWxsICYmIG12LnR5cGUgPT09IE1PVkVfVFlQRS5GUkVFXHJcbiAgICBsZXQgbW92ZXMgPSBbXVxyXG4gICAgaWYgKGNoZWNrZXIuaXNRdWVlbigpKSB7XHJcbiAgICAgIG1vdmVzLnB1c2goXHJcbiAgICAgICAgLi4udGhpcy5nZXRBdmFpbGFibGVDZWxsc0ZvclF1ZWVuKGNoZWNrZXIsIGNoZWNrZXJNb3Zlcy5md1sgTEVGVCBdLCBvbmx5RWF0KSxcclxuICAgICAgICAuLi50aGlzLmdldEF2YWlsYWJsZUNlbGxzRm9yUXVlZW4oY2hlY2tlciwgY2hlY2tlck1vdmVzLmZ3WyBSSUdIVCBdLCBvbmx5RWF0KSxcclxuICAgICAgICAuLi50aGlzLmdldEF2YWlsYWJsZUNlbGxzRm9yUXVlZW4oY2hlY2tlciwgY2hlY2tlck1vdmVzLmJ3WyBMRUZUIF0sIG9ubHlFYXQpLFxyXG4gICAgICAgIC4uLnRoaXMuZ2V0QXZhaWxhYmxlQ2VsbHNGb3JRdWVlbihjaGVja2VyLCBjaGVja2VyTW92ZXMuYndbIFJJR0hUIF0sIG9ubHlFYXQpXHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vdmVzLnB1c2goXHJcbiAgICAgICAgdGhpcy5nZXRBdmFpbGFibGVDZWxsKGNoZWNrZXIsIGNoZWNrZXJNb3Zlcy5md1sgTEVGVCBdLCBvbmx5RWF0KSxcclxuICAgICAgICB0aGlzLmdldEF2YWlsYWJsZUNlbGwoY2hlY2tlciwgY2hlY2tlck1vdmVzLmZ3WyBSSUdIVCBdLCBvbmx5RWF0KSxcclxuICAgICAgICB0aGlzLmdldEF2YWlsYWJsZUNlbGwoY2hlY2tlciwgY2hlY2tlck1vdmVzLmJ3WyBMRUZUIF0sIHRydWUpLFxyXG4gICAgICAgIHRoaXMuZ2V0QXZhaWxhYmxlQ2VsbChjaGVja2VyLCBjaGVja2VyTW92ZXMuYndbIFJJR0hUIF0sIHRydWUpXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChtb3Zlcy5zb21lKGVuZW15RWF0aW5nRmlsdGVyKSkge1xyXG4gICAgICBtb3ZlcyA9IHtcclxuICAgICAgICB0eXBlOiBNT1ZFX1RZUEUuRUFULFxyXG4gICAgICAgIG1vdmVzOiBtb3Zlcy5maWx0ZXIoZW5lbXlFYXRpbmdGaWx0ZXIpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vdmVzID0ge1xyXG4gICAgICAgIHR5cGU6IE1PVkVfVFlQRS5GUkVFLFxyXG4gICAgICAgIG1vdmVzOiBtb3Zlcy5maWx0ZXIoZnJlZU1vdmVGaWx0ZXIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtb3Zlcy5tb3Zlcy5sZW5ndGggPyBtb3ZlcyA6IG51bGxcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJsZUNlbGxzRm9yUXVlZW4gKGNoZWNrZXIsIGRpcmVjdGlvbiwgb25seUVhdCkge1xyXG4gICAgbGV0IGFDZWxsID0ge31cclxuICAgIGxldCByZXQgPSBbXVxyXG4gICAgbGV0IGVhdERpcmVjdGlvbiA9IGZhbHNlXHJcbiAgICBsZXQgY3VyRGlyZWN0aW9uID0gZGlyZWN0aW9uXHJcbiAgICBkbyB7XHJcbiAgICAgIGFDZWxsID0gdGhpcy5nZXRBdmFpbGFibGVDZWxsKGNoZWNrZXIsIGN1ckRpcmVjdGlvbiwgZWF0RGlyZWN0aW9uID8gZmFsc2UgOiBvbmx5RWF0KVxyXG4gICAgICBpZiAoYUNlbGwpIHtcclxuICAgICAgICBsZXQgaXNFYXQgPSBhQ2VsbC50eXBlID09PSBNT1ZFX1RZUEUuRUFUXHJcbiAgICAgICAgaWYgKGVhdERpcmVjdGlvbiAmJiBpc0VhdCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWF0RGlyZWN0aW9uID0gaXNFYXQgPyB0cnVlIDogZWF0RGlyZWN0aW9uXHJcbiAgICAgICAgY3VyRGlyZWN0aW9uID0gdGhpcy5jYWxjTmV4dERpcmVjdGlvbkNlbGwoY3VyRGlyZWN0aW9uLCBkaXJlY3Rpb24sIGlzRWF0ID8gMiA6IDEpXHJcbiAgICAgICAgaWYgKGVhdERpcmVjdGlvbikge1xyXG4gICAgICAgICAgYUNlbGwudHlwZSA9IE1PVkVfVFlQRS5FQVRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0LnB1c2goYUNlbGwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSAoYUNlbGwgIT09IG51bGwpXHJcblxyXG4gICAgcmV0dXJuIHJldFxyXG4gIH1cclxuXHJcbiAgZ2V0QXZhaWxhYmxlQ2VsbCAoY2hlY2tlciwgZGlyZWN0aW9uLCBvbmx5RWF0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGN1clBvcyA9IGNoZWNrZXIuY2VsbC5nZXRQb3NpdGlvbigpXHJcbiAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogY3VyUG9zLnggKyBkaXJlY3Rpb24ueCwgeTogY3VyUG9zLnkgKyBkaXJlY3Rpb24ueSB9KVxyXG4gICAgaWYgKGNlbGwgJiYgIWNlbGwuaGFzQ2hlY2tlcigpICYmICFvbmx5RWF0KSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTU9WRV9UWVBFLkZSRUUsXHJcbiAgICAgICAgY2VsbDogY2VsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2VsbCAmJiBjZWxsLmhhc0NoZWNrZXIoKSAmJiBjaGVja2VyLmNvbG9yICE9PSBjZWxsLmNoZWNrZXIuY29sb3IpIHtcclxuICAgICAgbGV0IGNlbGxBZnRlckVhdCA9IHRoaXMuY2VsbEFmdGVyRWF0aW5nKGNlbGwuZ2V0UG9zaXRpb24oKSwgZGlyZWN0aW9uKVxyXG4gICAgICBpZiAoY2VsbEFmdGVyRWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHR5cGU6IE1PVkVfVFlQRS5FQVQsXHJcbiAgICAgICAgICBjZWxsOiBjZWxsQWZ0ZXJFYXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY2VsbEFmdGVyRWF0aW5nIChlbmVteVBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoe1xyXG4gICAgICB4OiBlbmVteVBvc2l0aW9uLnggKyBNYXRoLnNpZ24oZGlyZWN0aW9uLngpLFxyXG4gICAgICB5OiBlbmVteVBvc2l0aW9uLnkgKyBNYXRoLnNpZ24oZGlyZWN0aW9uLnkpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGNlbGwgJiYgIWNlbGwuaGFzQ2hlY2tlcigpID8gY2VsbCA6IG51bGxcclxuICB9XHJcblxyXG4gIGVhdElmSXRQb3NzaWJsZSAoY2hlY2tlciwgbmV4dENlbGwpIHtcclxuICAgIGNvbnN0IGN1ckNlbGwgPSBjaGVja2VyLmNlbGxcclxuICAgIGlmIChNYXRoLmFicyhjdXJDZWxsLnggLSBuZXh0Q2VsbC54KSA+PSAyKSB7XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY2FsY0RpcmVjdGlvbk9mTW92ZShjdXJDZWxsLCBuZXh0Q2VsbClcclxuICAgICAgY29uc3QgZW5lbXlDZWxsID0gIWNoZWNrZXIuaXNRdWVlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRDZWxsKHsgeDogY3VyQ2VsbC54ICsgZGlyZWN0aW9uLngsIHk6IGN1ckNlbGwueSArIGRpcmVjdGlvbi55IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5maW5kRW5lbXlDZWxsKGN1ckNlbGwsIG5leHRDZWxsLCBkaXJlY3Rpb24pXHJcbiAgICAgIGlmIChlbmVteUNlbGwgJiYgZW5lbXlDZWxsLmNoZWNrZXIpIHtcclxuICAgICAgICBlbmVteUNlbGwuY2hlY2tlci5iZWxvbmdzVG8obnVsbClcclxuICAgICAgICBlbmVteUNlbGwucmVtb3ZlQ2hlY2tlcigpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBmaW5kRW5lbXlDZWxsIChjZWxsRnJvbSwgY2VsbFRvLCBkaXJlY3Rpb24pIHtcclxuICAgIGxldCBlbmVteSA9IG51bGxcclxuICAgIGxldCBjdXJEaXJlY3Rpb24gPSB0aGlzLmNhbGNOZXh0RGlyZWN0aW9uQ2VsbChjZWxsRnJvbSwgZGlyZWN0aW9uKVxyXG4gICAgd2hpbGUgKGVuZW15ICE9PSBjZWxsVG8pIHtcclxuICAgICAgZW5lbXkgPSB0aGlzLmdldENlbGwoY3VyRGlyZWN0aW9uKVxyXG4gICAgICBpZiAoZW5lbXkgJiYgZW5lbXkuaGFzQ2hlY2tlcigpIHx8ICFlbmVteSkge1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgY3VyRGlyZWN0aW9uID0gdGhpcy5jYWxjTmV4dERpcmVjdGlvbkNlbGwoY3VyRGlyZWN0aW9uLCBkaXJlY3Rpb24pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW5lbXlcclxuICB9XHJcblxyXG4gIGNhbGNOZXh0RGlyZWN0aW9uQ2VsbCAoY3VyRGlyZWN0aW9uLCBkaXJlY3Rpb24sIG9mZnNldCA9IDEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IGN1ckRpcmVjdGlvbi54ICsgZGlyZWN0aW9uLnggKiBvZmZzZXQsXHJcbiAgICAgIHk6IGN1ckRpcmVjdGlvbi55ICsgZGlyZWN0aW9uLnkgKiBvZmZzZXRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGNEaXJlY3Rpb25PZk1vdmUgKGN1ckNlbGwsIG5leHRDZWxsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBNYXRoLnNpZ24obmV4dENlbGwueCAtIGN1ckNlbGwueCksXHJcbiAgICAgIHk6IE1hdGguc2lnbihuZXh0Q2VsbC55IC0gY3VyQ2VsbC55KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0F2YWlsYWJsZUNoZWNrZXJzIChjb2xvcikge1xyXG4gICAgY29uc3QgY2hlY2tlcnMgPSB0aGlzLmdldENoZWNrZXJzKGNvbG9yKVxyXG4gICAgbGV0IGVhdE1vdmVzID0gZmFsc2VcclxuICAgIGxldCBmcmVlTW92ZXMgPSBbXVxyXG4gICAgY2hlY2tlcnMuZm9yRWFjaCgoY2hlY2tlcikgPT4ge1xyXG4gICAgICBjb25zdCBtb3ZlcyA9IHRoaXMuZ2V0QXZhaWxhYmxlTW92ZXMoY2hlY2tlcilcclxuICAgICAgaWYgKG1vdmVzKSB7XHJcbiAgICAgICAgaWYgKG1vdmVzLnR5cGUgPT09IE1PVkVfVFlQRS5FQVQpIHtcclxuICAgICAgICAgIGNoZWNrZXIubWFyaygpXHJcbiAgICAgICAgICBlYXRNb3ZlcyA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnJlZU1vdmVzLnB1c2goY2hlY2tlcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAoIWVhdE1vdmVzICYmIGZyZWVNb3Zlcy5sZW5ndGgpIHtcclxuICAgICAgZnJlZU1vdmVzLmZvckVhY2goKGNoZWNrZXIpID0+IGNoZWNrZXIubWFyaygpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVhY3RpdmF0ZUNoZWNrZXJzICgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZUNoZWNrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tlciBhY3RpdmUnKVxyXG4gICAgaWYgKGFjdGl2ZUNoZWNrZXJzLmxlbmd0aCkge1xyXG4gICAgICBPYmplY3Qua2V5cyhhY3RpdmVDaGVja2VycykubWFwKChpKSA9PiBhY3RpdmVDaGVja2Vyc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcclxuICAgICAgdmFyIGhpZ2hsaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbC5oaWdobGlnaHQnKVxyXG4gICAgICBPYmplY3Qua2V5cyhoaWdobGlnaHRzKS5tYXAoKGkpID0+IGhpZ2hsaWdodHNbaV0ub2JqLnVuaGlnaGxpZ2h0KCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVTdGF0ZS5qcyJdLCJuYW1lcyI6WyJHYW1lU3RhdGUiLCJUVVJOUyIsImNoZWNrZXIiLCJsaWdodCIsImRhcmsiLCJzdGFydGVkIiwiY3VycmVudFR1cm4iLCJ0dXJuc0NvdW50IiwiY3VycmVudENoZWNrZXIiLCJ1cGRhdGVJbmZvIiwic3RhcnQiLCJ0dXJuc0NvdW50RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInR1cm5Db2xvckRPTSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUFDcUJBLFM7QUFDbkIsdUJBQWU7QUFBQTs7QUFDYixTQUFLQyxLQUFMLEdBQWEsQ0FBRSxrQkFBT0MsT0FBUCxDQUFlQyxLQUFqQixFQUF3QixrQkFBT0QsT0FBUCxDQUFlRSxJQUF2QyxDQUFiO0FBQ0E7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0wsS0FBTCxDQUFXLENBQVgsQ0FBbkI7QUFDQSxTQUFLTSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLFVBQUw7QUFDRDs7OztnQ0FFWTtBQUNYLFdBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0Q7Ozs4QkFFVTtBQUNULFdBQUtGLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxXQUFLRixXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7OztrQ0FFYztBQUNiLFdBQUtDLFVBQUw7QUFDQSxXQUFLRCxXQUFMLEdBQW1CLEtBQUtMLEtBQUwsQ0FBWSxLQUFLTSxVQUFMLEdBQWtCLENBQTlCLENBQW5CO0FBQ0Q7OztpQ0FFYTtBQUNaLFVBQU1JLGdCQUFnQkMsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQUF0QjtBQUNBLFVBQU1DLGVBQWVGLFNBQVNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQXJCO0FBQ0FGLG9CQUFjSSxXQUFkLEdBQTRCLEtBQUtSLFVBQWpDO0FBQ0FPLG1CQUFhRSxLQUFiLENBQW1CQyxlQUFuQixHQUFxQyxxQkFBVyxLQUFLWCxXQUFoQixDQUFyQztBQUNEOzs7Ozs7a0JBOUJrQk4sUyIsImZpbGUiOiJHYW1lU3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT0xPUlMsIEJHX0NPTE9SUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuVFVSTlMgPSBbIENPTE9SUy5jaGVja2VyLmxpZ2h0LCBDT0xPUlMuY2hlY2tlci5kYXJrIF1cclxuICAgIC8vIDAgLSBsaWdodCwgMSAtIGRhcmtcclxuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlXHJcbiAgICB0aGlzLmN1cnJlbnRUdXJuID0gdGhpcy5UVVJOU1swXVxyXG4gICAgdGhpcy50dXJuc0NvdW50ID0gMFxyXG4gICAgdGhpcy5jdXJyZW50Q2hlY2tlciA9IG51bGxcclxuICAgIHRoaXMudXBkYXRlSW5mbygpXHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWUgKCkge1xyXG4gICAgdGhpcy5zdGFydCA9IHRydWVcclxuICB9XHJcblxyXG4gIGVuZEdhbWUgKCkge1xyXG4gICAgdGhpcy5jdXJyZW50Q2hlY2tlciA9IG51bGxcclxuICAgIHRoaXMuY3VycmVudFR1cm4gPSBudWxsXHJcbiAgfVxyXG5cclxuICBzZXROZXhuVHVybiAoKSB7XHJcbiAgICB0aGlzLnR1cm5zQ291bnQrK1xyXG4gICAgdGhpcy5jdXJyZW50VHVybiA9IHRoaXMuVFVSTlNbIHRoaXMudHVybnNDb3VudCAlIDIgXVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5mbyAoKSB7XHJcbiAgICBjb25zdCB0dXJuc0NvdW50RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5zX2NvdW50JylcclxuICAgIGNvbnN0IHR1cm5Db2xvckRPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50X3R1cm5fY29sb3InKVxyXG4gICAgdHVybnNDb3VudERPTS50ZXh0Q29udGVudCA9IHRoaXMudHVybnNDb3VudFxyXG4gICAgdHVybkNvbG9yRE9NLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEJHX0NPTE9SU1sgdGhpcy5jdXJyZW50VHVybiBdXHJcbiAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJOIiwiV0giLCJUT1BfVVAiLCJCT1RUT01fRlJPTSIsIkJHX0NPTE9SUyIsInJlZCIsImJsdWUiLCJDT0xPUlMiLCJjaGVja2VyIiwibGlnaHQiLCJkYXJrIiwiY2VsbCIsInRydWUiLCJmYWxzZSIsIk1PVkVfVFlQRSIsIkZSRUUiLCJFQVQiLCJMRUZUIiwiUklHSFQiLCJRVUVFTl9MSU5FIiwiTU9WRV9NQVAiLCJmdyIsIngiLCJ5IiwiYnciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxnQkFBSSxDQUFWO0FBQ0EsSUFBTUMsa0JBQUssTUFBTUQsQ0FBakI7QUFDQSxJQUFNRSwwQkFBUyxDQUFmO0FBQ0EsSUFBTUMsb0NBQWNILElBQUksQ0FBeEI7QUFDQSxJQUFNSSxnQ0FBWTtBQUN2QkMsT0FBSyxTQURrQjtBQUV2QkMsUUFBTTtBQUZpQixDQUFsQjtBQUlBLElBQU1DLDBCQUFTO0FBQ3BCQyxXQUFTO0FBQ1BDLFdBQU8sS0FEQTtBQUVQQyxVQUFNO0FBRkMsR0FEVztBQUtwQkMsUUFBTTtBQUNKQyxVQUFNLE9BREY7QUFFSkMsV0FBTztBQUZIO0FBTGMsQ0FBZjtBQVVBLElBQU1DLGdDQUFZO0FBQ3ZCQyxRQUFNLENBRGlCO0FBRXZCQyxPQUFLO0FBRmtCLENBQWxCO0FBSUEsSUFBTUMsc0JBQU8sQ0FBYjtBQUNBLElBQU1DLHdCQUFRLENBQWQ7QUFDQSxJQUFNQyxrRkFDVFosT0FBT0MsT0FBUCxDQUFlRSxJQUROLEVBQ2NWLENBRGQsZ0NBRVRPLE9BQU9DLE9BQVAsQ0FBZUMsS0FGTixFQUVlLENBRmYsZUFBTjtBQUlBLElBQU1XLDBFQUNUYixPQUFPQyxPQUFQLENBQWVDLEtBRE4sRUFDZTtBQUN4QlksTUFBSSxDQUNGLEVBQUVDLEdBQUcsQ0FBQyxDQUFOLEVBQVNDLEdBQUcsQ0FBQyxDQUFiLEVBREUsRUFFRixFQUFFRCxHQUFHLENBQUMsQ0FBTixFQUFTQyxHQUFHLENBQVosRUFGRSxDQURvQjtBQUt4QkMsTUFBSSxDQUNGLEVBQUVGLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQUMsQ0FBWixFQURFLEVBRUYsRUFBRUQsR0FBRyxDQUFMLEVBQVFDLEdBQUcsQ0FBWCxFQUZFO0FBTG9CLENBRGYsOEJBV1RoQixPQUFPQyxPQUFQLENBQWVFLElBWE4sRUFXYztBQUN2QlcsTUFBSSxDQUNGLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQUMsQ0FBWixFQURFLEVBRUYsRUFBRUQsR0FBRyxDQUFMLEVBQVFDLEdBQUcsQ0FBWCxFQUZFLENBRG1CO0FBS3ZCQyxNQUFJLENBQ0YsRUFBRUYsR0FBRyxDQUFDLENBQU4sRUFBU0MsR0FBRyxDQUFDLENBQWIsRUFERSxFQUVGLEVBQUVELEdBQUcsQ0FBQyxDQUFOLEVBQVNDLEdBQUcsQ0FBWixFQUZFO0FBTG1CLENBWGQsYUFBTiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTiA9IDhcclxuZXhwb3J0IGNvbnN0IFdIID0gMTAwIC8gTlxyXG5leHBvcnQgY29uc3QgVE9QX1VQID0gNFxyXG5leHBvcnQgY29uc3QgQk9UVE9NX0ZST00gPSBOIC0gM1xyXG5leHBvcnQgY29uc3QgQkdfQ09MT1JTID0ge1xyXG4gIHJlZDogJyNkNzQ1NDUnLFxyXG4gIGJsdWU6ICcjNDQ4YWZmJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgY2hlY2tlcjoge1xyXG4gICAgbGlnaHQ6ICdyZWQnLFxyXG4gICAgZGFyazogJ2JsdWUnXHJcbiAgfSxcclxuICBjZWxsOiB7XHJcbiAgICB0cnVlOiAnYmxhY2snLFxyXG4gICAgZmFsc2U6ICd3aGl0ZSdcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRSA9IHtcclxuICBGUkVFOiAwLFxyXG4gIEVBVDogMVxyXG59XHJcbmV4cG9ydCBjb25zdCBMRUZUID0gMFxyXG5leHBvcnQgY29uc3QgUklHSFQgPSAxXHJcbmV4cG9ydCBjb25zdCBRVUVFTl9MSU5FID0ge1xyXG4gIFsgQ09MT1JTLmNoZWNrZXIuZGFyayBdOiBOLFxyXG4gIFsgQ09MT1JTLmNoZWNrZXIubGlnaHQgXTogMVxyXG59XHJcbmV4cG9ydCBjb25zdCBNT1ZFX01BUCA9IHtcclxuICBbIENPTE9SUy5jaGVja2VyLmxpZ2h0IF06IHtcclxuICAgIGZ3OiBbXHJcbiAgICAgIHsgeDogLTEsIHk6IC0xIH0sXHJcbiAgICAgIHsgeDogLTEsIHk6IDEgfVxyXG4gICAgXSxcclxuICAgIGJ3OiBbXHJcbiAgICAgIHsgeDogMSwgeTogLTEgfSxcclxuICAgICAgeyB4OiAxLCB5OiAxIH1cclxuICAgIF1cclxuICB9LFxyXG4gIFsgQ09MT1JTLmNoZWNrZXIuZGFyayBdOiB7XHJcbiAgICBmdzogW1xyXG4gICAgICB7IHg6IDEsIHk6IC0xIH0sXHJcbiAgICAgIHsgeDogMSwgeTogMSB9XHJcbiAgICBdLFxyXG4gICAgYnc6IFtcclxuICAgICAgeyB4OiAtMSwgeTogLTEgfSxcclxuICAgICAgeyB4OiAtMSwgeTogMSB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiJdfQ==
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
    this.board.start();
    console.timeEnd('New board');
  }

  _createClass(Checkers, [{
    key: 'test',
    value: function test() {
      this.deleteChecker(1, 3);
      this.deleteChecker(2, 2);
      this.deleteChecker(3, 3);
      this.deleteChecker(3, 5);
      this.testCheckers([{ x: 2, y: 2, color: _constants.COLORS.checker.light }, { x: 4, y: 6, color: _constants.COLORS.checker.dark }]);
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
}

window.onload = function () {
  window.checkers = new Checkers();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjRhYzAwMDAuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ2hlY2tlcnMiLCJhcmdzIiwiY29uc29sZSIsInRpbWUiLCJzdGFydCIsInRpbWVFbmQiLCJkZWxldGVDaGVja2VyIiwidGVzdENoZWNrZXJzIiwieCIsInkiLCJjb2xvciIsImNoZWNrZXIiLCJsaWdodCIsImRhcmsiLCJjaGVja2VycyIsImZvckVhY2giLCJ0ZXN0Q2VsbCIsIm9iaiIsInRlc3RDaGVja2VyIiwiY3JlYXRlQ2hlY2tlciIsImNlbGwiLCJyZW1vdmVDaGVja2VyIiwicmVzaXplSGFuZGxlIiwidyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoIiwiaW5uZXJIZWlnaHQiLCJtaW5XSCIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0Iiwib25sb2FkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFkOztJQUVNQyxRO0FBQ0osb0JBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFDakJDLFlBQVFDLElBQVIsQ0FBYSxXQUFiO0FBQ0EsU0FBS04sS0FBTCxHQUFhLHdCQUFjQSxLQUFkLENBQWI7QUFDQSxTQUFLQSxLQUFMLENBQVdPLEtBQVg7QUFDQUYsWUFBUUcsT0FBUixDQUFnQixXQUFoQjtBQUNEOzs7OzJCQUVPO0FBQ04sV0FBS0MsYUFBTCxDQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBLFdBQUtBLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDQSxXQUFLQSxhQUFMLENBQW1CLENBQW5CLEVBQXNCLENBQXRCO0FBQ0EsV0FBS0EsYUFBTCxDQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsQ0FDaEIsRUFBQ0MsR0FBRyxDQUFKLEVBQU9DLEdBQUcsQ0FBVixFQUFhQyxPQUFPLGtCQUFPQyxPQUFQLENBQWVDLEtBQW5DLEVBRGdCLEVBRWhCLEVBQUNKLEdBQUcsQ0FBSixFQUFPQyxHQUFHLENBQVYsRUFBYUMsT0FBTyxrQkFBT0MsT0FBUCxDQUFlRSxJQUFuQyxFQUZnQixDQUFsQjtBQUlEOzs7aUNBRWFDLFEsRUFBVTtBQUFBOztBQUN0QkEsZUFBU0MsT0FBVCxDQUFpQixVQUFDSixPQUFELEVBQWE7QUFDNUIsWUFBTUssV0FBV2xCLFNBQVNDLGNBQVQsV0FBZ0NZLFFBQVFILENBQXhDLFNBQTZDRyxRQUFRRixDQUFyRCxFQUEwRFEsR0FBM0U7QUFDQSxZQUFNQyxjQUFjLE1BQUtyQixLQUFMLENBQVdzQixhQUFYLENBQXlCUixRQUFRRCxLQUFqQyxFQUF3Q00sUUFBeEMsQ0FBcEI7QUFDRCxPQUhEO0FBSUQ7OztrQ0FFY1IsQyxFQUFHQyxDLEVBQUc7QUFDbkIsVUFBTVcsT0FBT3RCLFNBQVNDLGNBQVQsV0FBZ0NTLENBQWhDLFNBQXFDQyxDQUFyQyxFQUEwQ1EsR0FBdkQ7QUFDQSxVQUFJLENBQUNHLElBQUQsSUFBUyxDQUFDQSxLQUFLVCxPQUFuQixFQUE0QixPQUFPLEtBQVA7QUFDNUJTLFdBQUtDLGFBQUw7QUFDQSxhQUFPLElBQVA7QUFDRDs7Ozs7O0FBR0gsU0FBU0MsWUFBVCxHQUF5QjtBQUN2QixNQUFNQyxJQUFJQyxPQUFPQyxVQUFqQjtBQUNBLE1BQU1DLElBQUlGLE9BQU9HLFdBQWpCO0FBQ0EsTUFBTUMsUUFBUUMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxHQUFMLENBQVNSLENBQVQsRUFBWUcsQ0FBWixJQUFpQixHQUE1QixDQUFkO0FBQ0E3QixRQUFNbUMsS0FBTixDQUFZQyxLQUFaLEdBQXVCTCxLQUF2QjtBQUNBL0IsUUFBTW1DLEtBQU4sQ0FBWUUsTUFBWixHQUF3Qk4sS0FBeEI7QUFDQS9CLFFBQU1tQyxLQUFOLENBQVlHLElBQVosR0FBc0JOLEtBQUtDLEtBQUwsQ0FBVyxDQUFDUCxJQUFJSyxLQUFMLElBQWMsQ0FBekIsQ0FBdEI7QUFDRDs7QUFFREosT0FBT1ksTUFBUCxHQUFnQixZQUFNO0FBQ3BCWixTQUFPVixRQUFQLEdBQWtCLElBQUlkLFFBQUosRUFBbEI7QUFDRCxDQUZEIiwiZmlsZSI6ImZha2VfZjRhYzAwMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZUJvYXJkJ1xyXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJylcclxuXHJcbmNsYXNzIENoZWNrZXJzIHtcclxuICBjb25zdHJ1Y3RvciAoYXJncykge1xyXG4gICAgY29uc29sZS50aW1lKCdOZXcgYm9hcmQnKVxyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoYm9hcmQpXHJcbiAgICB0aGlzLmJvYXJkLnN0YXJ0KClcclxuICAgIGNvbnNvbGUudGltZUVuZCgnTmV3IGJvYXJkJylcclxuICB9XHJcblxyXG4gIHRlc3QgKCkge1xyXG4gICAgdGhpcy5kZWxldGVDaGVja2VyKDEsIDMpXHJcbiAgICB0aGlzLmRlbGV0ZUNoZWNrZXIoMiwgMilcclxuICAgIHRoaXMuZGVsZXRlQ2hlY2tlcigzLCAzKVxyXG4gICAgdGhpcy5kZWxldGVDaGVja2VyKDMsIDUpXHJcbiAgICB0aGlzLnRlc3RDaGVja2VycyhbXHJcbiAgICAgIHt4OiAyLCB5OiAyLCBjb2xvcjogQ09MT1JTLmNoZWNrZXIubGlnaHR9LFxyXG4gICAgICB7eDogNCwgeTogNiwgY29sb3I6IENPTE9SUy5jaGVja2VyLmRhcmt9XHJcbiAgICBdKVxyXG4gIH1cclxuXHJcbiAgdGVzdENoZWNrZXJzIChjaGVja2Vycykge1xyXG4gICAgY2hlY2tlcnMuZm9yRWFjaCgoY2hlY2tlcikgPT4ge1xyXG4gICAgICBjb25zdCB0ZXN0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsXyR7Y2hlY2tlci54fV8ke2NoZWNrZXIueX1gKS5vYmpcclxuICAgICAgY29uc3QgdGVzdENoZWNrZXIgPSB0aGlzLmJvYXJkLmNyZWF0ZUNoZWNrZXIoY2hlY2tlci5jb2xvciwgdGVzdENlbGwpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2hlY2tlciAoeCwgeSkge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsXyR7eH1fJHt5fWApLm9ialxyXG4gICAgaWYgKCFjZWxsIHx8ICFjZWxsLmNoZWNrZXIpIHJldHVybiBmYWxzZVxyXG4gICAgY2VsbC5yZW1vdmVDaGVja2VyKClcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNpemVIYW5kbGUgKCkge1xyXG4gIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gIGNvbnN0IGggPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICBjb25zdCBtaW5XSCA9IE1hdGguZmxvb3IoTWF0aC5taW4odywgaCkgKiAwLjkpXHJcbiAgYm9hcmQuc3R5bGUud2lkdGggPSBgJHttaW5XSH1weGBcclxuICBib2FyZC5zdHlsZS5oZWlnaHQgPSBgJHttaW5XSH1weGBcclxuICBib2FyZC5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5mbG9vcigodyAtIG1pbldIKSAvIDIpfXB4YFxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5jaGVja2VycyA9IG5ldyBDaGVja2VycygpXHJcbn1cclxuXHJcbiJdfQ==
},{"./GameBoard":3,"./constants":5}]},{},[6])