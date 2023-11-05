import Navbar from '../navbar/navbar.component'
import Event from '../../components/event/event.component'
import a from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.21 PM (1).jpeg'
import b from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.21 PM.jpeg'
import c from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.22 PM (1).jpeg'
import d from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.22 PM (2).jpeg'
import e from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.22 PM.jpeg'
import f from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.23 PM (1).jpeg'
import g from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.22 PM (2).jpeg'
import h from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.23 PM.jpeg'
import i from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.29 PM.jpeg'

import a1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.24 PM (1).jpeg'
import b1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.24 PM (2).jpeg'
import c1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.25 PM (1).jpeg'
import d1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.25 PM.jpeg'
import e1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.26 PM (2).jpeg'
import f1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.26 PM.jpeg'
import g1 from '../../assets/offline/WhatsApp Image 2023-11-05 at 1.23.24 PM (1).jpeg'
import h1 from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.23 PM.jpeg'
import i1 from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.29 PM.jpeg'
import j1 from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.23 PM.jpeg'
import k1 from '../../assets/online/WhatsApp Image 2023-11-05 at 1.23.29 PM.jpeg'

const EventPage = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Online Quiz</h2>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <Event price='50' srcc={a}/>
              <Event price='50' srcc={b}/>
              <Event price='50' srcc={c}/>
              <Event price='50' srcc={d}/>
              <Event price='50' srcc={e}/>
              <Event price='50' srcc={f}/>
              <Event price='50' srcc={g}/>
              <Event price='50' srcc={h}/>
              <Event price='50' srcc={i}/>
            </div>
            </div>
          </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Offline Quiz</h2>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Event price='50' srcc={a1}/>
            <Event price='50' srcc={b1}/>
            <Event price='50' srcc={c1}/>
            <Event price='50' srcc={d1}/>
            <Event price='50' srcc={e1}/>
            <Event price='50' srcc={f1}/>
            <Event price='50' srcc={g1}/>
            <Event price='50' srcc={h1}/>
            <Event price='50' srcc={i1}/>
            <Event price='50' srcc={j1}/>
            <Event price='50' srcc={k1}/>
            </div>
            </div>
          </div>
      </div>
  </div>
  )
}

export default EventPage