AOS.init()

const dateEvent = new Date("dec 12, 2023 19:00")
const timeStampEvent = dateEvent.getTime()

const countHours = setInterval(() => {
  const currentTime = new Date()
  const timeStampCurrentTime = currentTime.getTime()

  const minutes = 1000 * 60 
  const hours = minutes * 60
  const days = hours * 24

  const timeUntilEvent = timeStampEvent - timeStampCurrentTime
  const daysUntilEvent = Math.floor(timeUntilEvent / days)
  const hoursUntilEvent = Math.floor((timeUntilEvent % days) / hours)
  const minutesUntilEvent = Math.floor((timeUntilEvent % hours) / minutes)
  const secondsUntilEvent = Math.round((timeUntilEvent % minutes) / 1000)
  
  document.getElementById('counter').innerHTML = `
    ${daysUntilEvent}d 
    ${hoursUntilEvent}h 
    ${minutesUntilEvent}m 
    ${secondsUntilEvent}s
  `

  if(timeUntilEvent < 0 ) {
    clearInterval(countHours)
    document.getElementById('delete').innerHTML = ''
    document.getElementById('counter').innerHTML = 'Terminou =('
  }
}, 1000)