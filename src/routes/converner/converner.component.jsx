import React from 'react'
import Navbar from '../navbar/navbar.component'
import Laptop from '../../assets/IMG_20231105_074136.png'

const Converner = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full bg-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#4e2686] font-bold ">CONVENER'S MESSAGE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Dear participants and quiz enthusiasts,
          </h1>
          <p className=' text-justify'>
          I am delighted to announce the upcoming Silchar Quiz Festival 2023, where champions rise! As the Convenor of this prestigious event, it is my honor to invite you all to unlock your knowledge and be a part of this incredible journey.

          Scheduled to take place from 21st to 26th November 2023, the Silchar Quiz Festival promises an exhilarating experience for the participants. We have carefully designed a diverse range of online and offline events to cater to every quiz enthusiast's interests and preferences.

          From 21st to 23rd November, the online events will provide an opportunity for participants to showcase their expertise and compete with fellow quizzers virtually. These events will not only test your knowledge but also challenge your critical thinking and efficiency of answering.

          The excitement continues as we transition to the offline events from 24th to 26th November at the beautiful city of Silchar in Assam. Here, participants will have the chance to engage in thrilling face-to-face quizzes, surrounded by the vibrant atmosphere of our festival. Our team has left no stone unturned in ensuring that these offline events are both intellectually stimulating and socially engaging.

          We have curated an extensive range of topics, ensuring that there is something for everyone. Whether you are a history buff, a science enthusiast, or a sports aficionado, this festival has a quiz tailored just for you.

          Furthermore, we have invited renowned quizmasters and experts from various fields to make this event truly exceptional. Their expertise and experience will add an extra layer of excitement and challenge to each quiz, making it an unforgettable experience for all participants.

          I encourage all of you to seize this opportunity to not only showcase your knowledge but also learn from fellow quizzers. The Silchar Quiz Festival 2023 will serve as a platform for intellectual growth, fostering a spirit of healthy competition and camaraderie.

          On behalf of the organizing committee, I extend my gratitude to all our sponsors, partners, and volunteers who have worked tirelessly to make this event possible. Their unwavering support and dedication have been instrumental in shaping the Silchar Quiz Festival into what it is today.

          So mark your calendars for 21st to 26th November 2023 and join us in Silchar, Assam, for an unforgettable journey of knowledge and discovery. Together, let us unlock our potential, embrace the thrill of competition, and rise as champions!

          Warm regards,

          </p>
          <button className=" text-left bg-slate-200 w-[200px] rounded-md font-medium text-[#4e2686] my-6 md:mx-0 mx-auto py-3 cursor-default">
          Shri Dipayan Chakraborty
          Hon'ble MLA, Silchar
          Convenor, Silchar Quiz Festival 2023
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Converner