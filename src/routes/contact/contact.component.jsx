import React from 'react'
import Navbar from '../navbar/navbar.component'

const Contact = () => {
  return (
    <div>
    <Navbar/>
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
            <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Address</h3>
            <p className="text-gray-600">
                Banga Bhawan<br/>
                Sadarghat Market, AK chanda Road, Silchar, Assam 788001<br/>
                India
            </p>
            </div>

            <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
            <p className="text-gray-600">(+91)7002139471</p>
            </div>

            <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
            <p className="text-gray-600">admin@silcharquizfest.com</p>
            </div>

            <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Nearest Train Station</h3>
            <p className="text-gray-600 font-semibold">1. Silchar (1.5 kms from the venue)</p>
            <p>Direct trains are available from Secunderabad, Kolkata, Guwahati, Dibrugarh, Naharlagun, New Delhi, Chennai, Thiruvananthapuram, Agartala, Coimbatore, Bhubaneswar and Rangiya</p><br/> 
            <p className=' text-gray-600 font-semibold'>2. Badarpur (30 kms from the venue)</p>
            <p>Direct trains are available from Agartala, Guwahati, Mumbai, Secunderabad, Bangalore, Chennai, Firozpur Cantt., New Delhi, Anand Vihar, Dibrugarh, Bhubaneswar, Dankuni, Kolkata and various other places.</p>
            </div>

            <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Nearest Airport</h3>
            <p className="text-gray-600 font-semibold">Silchar (IXS)</p>
            <p>Direct flights are available from Kolkata, Guwahati, Shillong and other cities.
            </p>
            </div>

            <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Note</h3>
            <p className="text-gray-600">Free of cost accommodation shall be available for outstation participants during the quiz fest.</p>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Contact