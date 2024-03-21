import Header from "./components/Header"
import Building from "./components/Building"
import Cover from "./components/Cover"
import Live from "./components/Live"
import Footer from "./components/Footer"
import Sports from "./components/Sports"
import cover_img1 from './assets/Images/cover-img/cover-1.jpg'
import cover_img2 from './assets/Images/cover-img/cover-2.jpg'
import cover_img3 from './assets/Images/cover-img/cover-3.jpg'
import cover_img4 from './assets/Images/cover-img/cover-4.jpg'


function App() {

  return (
    <>
    <Header/>
    <Building/>
    <div className="--display-flex-row-wrap">
      <Cover
        heading = 'Past & Current Seasons'
        series = 'Tv Shows'
        img = {cover_img1}
      />
      <Cover
        heading = 'New & Classic'
        series = 'TMovies'
        img = {cover_img2}
      />
      <Cover
        heading = 'Groundbreaking'
        series = 'Hulu Originals'
        img = {cover_img3}
      />
      <Cover
        heading = 'Add-on'
        series = 'Premiums'
        img = {cover_img4}
      />
    </div>
    <Live/>
    <Sports/>
    <Footer/>

  
    </>
  )
}

export default App
