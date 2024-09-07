import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createI18n } from 'vue-i18n'
import {
  faArrowsRotate,
  faBarsStaggered,
  faBed,
  faBroom,
  faCalendarDay,
  faCheck,
  faCheckCircle,
  faCheckToSlot,
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
  faCircleDollarToSlot,
  faClockRotateLeft,
  faCrown,
  faCube,
  faExclamation,
  faEye,
  faHandHoldingDollar,
  faHashtag,
  faPhone,
  faRightFromBracket,
  faRightToBracket,
  faSignInAlt,
  faSignOutAlt,
  faTimesCircle,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  init } from '@/services/pb'
import messages from '@/i18n/translate'
library.add(
  faPhone,
  faUser,
  faArrowsRotate,
  faEye,
  faCube,
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
  faClockRotateLeft,
  faRightToBracket,
  faCheckToSlot,
  faHandHoldingDollar,
  faExclamation,
  faCircleDollarToSlot,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faHashtag
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

const i18n = createI18n({
  locale: 'laos',
  messages: messages
})
app.use(i18n)
app.use(createPinia())
app.use(router)
init()

app.mount('#app')
