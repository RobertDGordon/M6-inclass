function Temperature({temp, units = "C"}) {
  let displayTemp = units === 'C' ? temp : ((temp * 9/5) +32)

  return (
    <span className="Temperature">
      <strong>{parseInt(displayTemp)}&deg;{units}</strong>
    </span>
  )
}

export default Temperature;