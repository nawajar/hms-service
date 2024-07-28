import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowsRotate,
  faBarsStaggered,
  faBed,
  faBroom,
  faCalendarDay,
  faCheck,
  faCheckCircle,
  faCircleCheck,
  faClockRotateLeft,
  faCrown,
  faCube,
  faEye,
  faPhone,
  faRightFromBracket,
  faSignInAlt,
  faSignOutAlt,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faPhone,
  faUser,
  faArrowsRotate,
  faEye,
  faCube,
  faBarsStaggered,
  faCheckCircle,
  faTimesCircle,
  faSignInAlt,
  faSignOutAlt,
  faCircleCheck,
  faBed,
  faCrown,
  faBroom,
  faBarsStaggered,
  faRightFromBracket,
  faCalendarDay,
  faClockRotateLeft
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
