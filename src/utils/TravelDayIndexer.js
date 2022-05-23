import travelData from '../travelData';

const TravelDayIndexer = () => {
  const today = new Date('2022-05-27').toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const travelDays = travelData.map(d => (d.date))
  return travelDays.indexOf(today)
}

export default TravelDayIndexer;