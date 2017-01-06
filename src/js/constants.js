export const N = 8
export const WH = 100 / N
export const TOP_UP = 4
export const BOTTOM_FROM = N - 3
export const BG_COLORS = {
  red: '#d74545',
  blue: '#448aff'
}
export const COLORS = {
  checker: {
    light: 'red',
    dark: 'blue'
  },
  cell: {
    true: 'black',
    false: 'white'
  }
}
export const PLAYER_COLOR = {
  0: COLORS.checker.light,
  1: COLORS.checker.dark
}
export const MOVE_TYPE = {
  FREE: 0,
  EAT: 1
}
export const LEFT = 0
export const RIGHT = 1
export const QUEEN_LINE = {
  [ COLORS.checker.dark ]: N,
  [ COLORS.checker.light ]: 1
}
export const MOVE_MAP = {
  [ COLORS.checker.light ]: {
    fw: [
      { x: -1, y: -1 },
      { x: -1, y: 1 }
    ],
    bw: [
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ]
  },
  [ COLORS.checker.dark ]: {
    fw: [
      { x: 1, y: -1 },
      { x: 1, y: 1 }
    ],
    bw: [
      { x: -1, y: -1 },
      { x: -1, y: 1 }
    ]
  }
}
