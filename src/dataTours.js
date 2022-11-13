import tour_01 from './assets/img-09.jpeg'
import tour_02 from './assets/img-06.jpeg'
import tour_03 from './assets/img-04.jpeg'
// dejar todas las imagenes de la mismas dimensiones para que las targetas se vean iguales

const links = [
  {
    id:1,
    img:tour_01,
    name:'Bahia de Zapallar',
    qty: 'Hasta 7 personas',
    duration: '25 a 30 minutos',
    other: 'Posible avistamiento del delfín residente de Zapallar',
    description:'Recorrido por el interior de la bahía de Zapallar abarcando todo el borde costero'
  },
  {
    id:2,
    img:tour_02,
    name:'Monumento Isla Cachagua',
    qty: 'Hasta 7 personas',
    duration: '80 a 90 minutos',
    other: 'Avistamiento pingüino de humboldt',
    description:'Visita al hogar del pinguino de humboldt y sector de anidación de pelicanos'
  }
  ,
  {
    id:3,
    img:tour_03,
    name:'Tour Personalizado',
    qty: 'Hasta 7 personas',
    duration: 'Sujeto a recorrido',
    other: 'Celebraciones, eventos, etc',
    description:'Personaliza tu recorrido cuando quieras y donde quieras'
  }
]

export default links