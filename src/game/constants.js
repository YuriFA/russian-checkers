export const N = 8
export const WH = 100 / N
export const TOP_UP = 4
export const BOTTOM_FROM = N - 3
export const BG_COLORS = {
  red: '#d74545',
  blue: '#448aff',
}
export const COLORS = {
  checker: {
    light: 'red',
    dark: 'blue',
  },
  cell: {
    true: 'black',
    false: 'white',
  },
}
export const PLAYER_COLOR = {
  1: COLORS.checker.light,
  2: COLORS.checker.dark,
}
export const MOVES = {
  MOVE_COMPLETED: 0,
  CAN_EAT_MORE: 1,
}
