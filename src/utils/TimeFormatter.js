const TimeFormatter = ({timeToFormat, country}) => {
  const timeZoneEEST = ["Finland", "Estonia", "Latvia", "Lithuania"]
  const timeZone = timeZoneEEST.includes(country) ? "Europe/Helsinki" : "Europe/Budapest"

  const timeInMilliseconds = timeToFormat*1000
  const timeInDate = new Date(timeInMilliseconds)
  const time = Intl.DateTimeFormat('fi-FI', {timeZone: timeZone,hour: "2-digit", minute: "2-digit"}).format(timeInDate)
    return time
}

export default TimeFormatter;