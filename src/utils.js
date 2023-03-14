const weekDayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const boxWidth = 200 // size for each hour label

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

export function shiftByTime (elem) {
  const now = new Date()
  const totalMinutes = now.getHours() * 60 + now.getMinutes()
  const shift = boxWidth * totalMinutes / 60
  elem.style.left = shift + 'px'
}

export function scrollToNow (elem, shiftX) {
  if (elem) {
    const totalShift = shiftX - window.innerWidth / 2 // to have yellow line at screen center
    elem.scrollTo(totalShift , 0)
  }
}