const CODES = {
  A: 65,
  Z: 90,
}

function toCell(_, col) {
  return `
    <div class="cell" data-col="${col}" contenteditable></div>
  `
}

function toColumn(col, index) {
  return `
  <div class="column" data-type="resizeable" data-col="${index}">
    ${col}
    <div class="col-resize" data-resize="col"></div>
  </div>
  `
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
  <div class="row" data-type="resizeable">
    <div class="row-info">
    ${index ? index : ''}
    ${resize}
    </div>
    <div class="row-data">${content}</div>
  </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  // My realization!
  // let cols = []

  // for (let i = 0; i < colsCount; i++) {
  //   cols.push(createCol(String.fromCharCode(CODES.A + i)))
  // }

  // cols = cols.join('')

  // rows.push(createRow(cols))

  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(toCell).join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
