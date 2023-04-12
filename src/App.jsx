import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data'

export default function App() {
  const cardElements = data.map((e)=>{
    return <Card
      key={e.id}
      {...e}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cardsList'>
      {cardElements}
      </section>
    </div>
  )
}