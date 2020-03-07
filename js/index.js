import lottie from 'lottie-web'
import '../scss/style.scss'
import data from './data.json'

const anime = lottie.loadAnimation({
  container: document.getElementById('lottie'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: data
})
