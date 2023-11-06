import Navbar from '../navbar/navbar.component'
import Event from '../../components/event/event.component'
import a from '../../assets/online/1.jpeg'
import b from '../../assets/online/2.jpeg'
import c from '../../assets/online/3.jpeg'
import d from '../../assets/online/4.jpeg'
import e from '../../assets/online/5.jpeg'
import f from '../../assets/online/6.jpeg'
import g from '../../assets/online/7.jpeg'
import h from '../../assets/online/8.jpeg'
import i from '../../assets/online/9.jpeg'

import a1 from '../../assets/offline/10.jpeg'
import b1 from '../../assets/offline/11.jpeg'
import c1 from '../../assets/offline/12.jpeg'
import d1 from '../../assets/offline/13.jpeg'
import e1 from '../../assets/offline/14.jpeg'
import f1 from '../../assets/offline/15.jpeg'
import g1 from '../../assets/offline/16.jpeg'
import h1 from '../../assets/offline/17.jpeg'
import i1 from '../../assets/offline/18.jpeg'
import j1 from '../../assets/offline/19.jpeg'
import k1 from '../../assets/offline/20.jpeg'

const EventPage = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Online Quiz</h2>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <Event price='6000' srcc={a}/>
              <Event price='6000' srcc={b}/>
              <Event price='6000' srcc={c}/>
              <Event price='6000' srcc={d}/>
              <Event price='6000' srcc={e}/>
              <Event price='6000' srcc={f}/>
              <Event price='6000' srcc={g}/>
              <Event price='6000' srcc={h}/>
              <Event price='6000' srcc={i}/>
            </div>
            </div>
          </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Offline Quiz</h2>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Event price='40000' srcc={a1}/>
            <Event price='40000' srcc={b1}/>
            <Event price='40000' srcc={c1}/>
            <Event price='40000' srcc={d1}/>
            <Event price='40000' srcc={e1}/>
            <Event price='40000' srcc={f1}/>
            <Event price='40000' srcc={g1}/>
            <Event price='40000' srcc={h1}/>
            <Event price='40000' srcc={i1}/>
            <Event price='40000' srcc={j1}/>
            <Event price='130000' srcc={k1}/>
            </div>
            </div>
          </div>
      </div>
  </div>
  )
}

export default EventPage