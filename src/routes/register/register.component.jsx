import React from 'react'
import Navbar from '../navbar/navbar.component'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { useContext } from 'react'

const Register = () => {
    const navigate = useNavigate()
    const currentUser = useContext(UserContext)
    const handleOf = () =>{
        if(currentUser.currentUser=== null){
            navigate('/auth')
        }else{
            navigate('/oreg')
        }
        console.log(currentUser.currentUser)
    }
    const handleSc = () =>{
        if(currentUser.currentUser=== null){
            navigate('/auth')
        }else{
            navigate('/sreg')
        }
        console.log(currentUser.currentUser)
    }
    const handleAc = () =>{
        if(currentUser.currentUser=== null){
            navigate('/auth')
        }else{
            navigate('/areg')
        }
        console.log(currentUser.currentUser)
    }
  return (
  <>
    <Navbar/>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Register</h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Get ready to embark on an exciting journey of wits and wisdom. Join our quiz and let your knowledge shine through! Test your smarts, win prizes, and become the quiz champion today.</p>
        </div>
        {/* <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transform transition duration-500" onClick={handleOf}>
                <h3 className="mb-4 text-2xl font-semibold">Offline</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Register for offline quiz.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">Rs.199</span>
                    <span className="text-gray-500 dark:text-gray-400">/person</span>
                </div>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transform transition duration-500" onClick={handleOf}>
                <h3 className="mb-4 text-2xl font-semibold">Online</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Register for online quiz.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">Rs.99</span>
                    <span className="text-gray-500 dark:text-gray-400">/person</span>
                </div>
            </div>
            
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transform transition duration-500" onClick={handleSc}>
                <h3 className="mb-4 text-2xl font-semibold">School</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Free of cost registration for school students.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">Free</span>
                    <span className="text-gray-500 dark:text-gray-400"></span>
                </div>
            </div>
            
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-110 transform transition duration-500" onClick={handleAc}>
                <h3 className="mb-4 text-2xl font-semibold">Accomodation</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">For Accomodation, free of cost registration.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">Free</span>
                    <span className="text-gray-500 dark:text-gray-400"></span>
                </div>
            </div>
        </div> */}
        <p className="mb-5 font-light text-gray-500 md:text-2xl sm:text-xl dark:text-gray-400">Registration begins at 07/11/2023.</p>

    </div>
    </section>

  </>
  )
}

export default Register
