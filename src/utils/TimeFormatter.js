const TimeFormatter = ({timeToFormat}) => {
  const timeInMilliseconds = timeToFormat*1000
  const timeInDate = new Date(timeInMilliseconds)
  const time = Intl.DateTimeFormat('fi-FI', {timeZone: "Europe/Budapest",hour: "2-digit", minute: "2-digit"}).format(timeInDate)
    return time
}

export default TimeFormatter;