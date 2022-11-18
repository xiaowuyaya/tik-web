import Donate from '@/pages/donate/Donate'
import Home from '@/pages/home/Home'
import Release from '@/pages/release/Release'
import Contact from "@/pages/contact/Contact";

const routers = [
  {
    key:'home',
    path: '/',
    component: <Home />,
  },
  {
    key: 'donate',
    path: '/donate',
    component: <Donate />,
  },
  {
    key: 'release',
    path: '/release',
    component: <Release />,
  },
  {
    key: 'contact',
    path: '/contact',
    component: <Contact />
  }
]

export default routers
