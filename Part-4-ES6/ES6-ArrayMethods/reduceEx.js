let cars=[
  {"brand":"Maruti Suzuki","model":"Swift","price":650000,"color":"Red"},
  {"brand":"Maruti Suzuki","model":"Baleno","price":720000,"color":"Blue"},
  {"brand":"Maruti Suzuki","model":"Brezza","price":850000,"color":"White"},
  {"brand":"Hyundai","model":"Creta","price":1100000,"color":"Black"},
  {"brand":"Hyundai","model":"i20","price":750000,"color":"Grey"},
  {"brand":"Hyundai","model":"Venue","price":900000,"color":"Silver"},
  {"brand":"Tata","model":"Nexon","price":950000,"color":"White"},
  {"brand":"Tata","model":"Punch","price":600000,"color":"Orange"},
  {"brand":"Tata","model":"Harrier","price":1500000,"color":"Black"},
  {"brand":"Mahindra","model":"Thar","price":1400000,"color":"Red"},
  {"brand":"Mahindra","model":"Scorpio N","price":1600000,"color":"Black"},
  {"brand":"Mahindra","model":"XUV700","price":1800000,"color":"White"},
  {"brand":"Kia","model":"Seltos","price":1200000,"color":"Blue"},
  {"brand":"Kia","model":"Sonet","price":850000,"color":"Yellow"},
  {"brand":"Toyota","model":"Innova Crysta","price":2000000,"color":"Silver"},
  {"brand":"Toyota","model":"Fortuner","price":3500000,"color":"White"},
  {"brand":"Honda","model":"City","price":1200000,"color":"Brown"},
  {"brand":"Honda","model":"Amaze","price":800000,"color":"Grey"},
  {"brand":"Skoda","model":"Slavia","price":1300000,"color":"Blue"},
  {"brand":"Volkswagen","model":"Virtus","price":1400000,"color":"Red"}
]

let total_Cars_Values = cars.reduce((sum, car) => {
    return sum + car.price;
}, 0);

console.log(total_Cars_Values);