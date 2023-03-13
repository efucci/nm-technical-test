const weekDayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const boxWidth = 200

export function getDayName (date) {
  return  weekDayName[date.getDay()]
}

export function getFormattedDate (date) {
  const monthStr = String(date.getMonth()+1).padStart(2, '0') 
  return `${date.getDate()}.${monthStr}`
}

export function getBoxWidth (start, end ) {
  const interval = (end - start) / 60000 // minutes
  return boxWidth * interval / 60
}