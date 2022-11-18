import ReactDOM from 'react-dom/client'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Nav from './component/nav/Nav'
import './index.less'
import routers from './router'
import Footer from "@/component/footer/Footer";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Nav/>
    <Routes>
      {routers.map((route) => (
        <Route key={route.key} path={route.path} element={route.component}/>
      ))}
    </Routes>
    <Footer />
  </HashRouter>
)
