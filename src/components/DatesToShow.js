import travelData from '../travelData';

const DatesToShow = () => {
  const today = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
  //console.log(today)
  const travelDays = travelData.map(d => (d.date))

  //console.log(travelDays.indexOf(today))

  if(travelDays.indexOf(today) < 0){
    console.log('alle nollan')
    return (
      <div>
        Ei kuulu agendaan
      </div>
    )
  }
  else if((travelDays.indexOf(today) >=0 && travelDays.indexOf(today) <=3) || travelDays.indexOf(today) >=10){
    console.log('0-3 tai yli 9')
    return (
      <div>Nää on matkapäivät sinne</div>
    )
  } else if(travelDays.indexOf(today) >=4 && travelDays.indexOf(today) <=9){
    console.log('4-9')
    return(
      <div>Nää on Unkaripäiviä</div>
    )
  }

}

export default DatesToShow;