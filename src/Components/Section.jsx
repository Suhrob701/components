import React from 'react'
import nnn from '../assets/nnn.png'
import first from '../assets/first.png'
import second from '../assets/second.png'
import section from '../assets/section.png'
import group from '../assets/group.png'
import ggg from '../assets/ggg.png'
import lll from '../assets/lll.png'
import end from '../assets/end.png'

const Section = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-center font-Poppins font-medium text-1xl text-[#696984]'>Trusted by 5,000+ Companies Worldwide</h3>
            <div>
                <img src={nnn} alt="" className='w-[800px] mx-auto mt-8' />
            </div>

            <div className='mt-20'>
                <h1 className='text-center font-Poppins font-semibold text-3xl text-[#2F327D]'>What is <span className='text-orange-500'>Skilline?</span></h1>
                <p className='w-[600px] text-center mx-auto mt-6 text-[#696984]'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>

            <div className='flex gap-20 justify-center mt-20'>
                <img src={first} alt="" />
                <img src={second} alt="" />
            </div>

            <div className='flex mt-30 justify-evenly'>
                <div>
                    <h3 className='w-[400px] h-[116px] font-Poppins font-bold text-2xl text-[#2F327D]'>Everything you can do in a physical classroom, <span className='text-orange-500'>you can do with Skilline</span></h3>
                    <p className='w-[420px] h-[116px] font-Poppins text-[#696984] font-normal'>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <a className='font-normal font-Poppins text-[#696984]' href="Learn more">Learn more</a>
                </div>
                <div>
                    <img src={section} alt="" />
                </div>
            </div>

            <div>
                <h1 className='text-[#2F327D] font-bold text-center text-3xl m-20'>Our <span className='text-orange-500'>Features</span></h1>
                <p className='font-normal text-[#696984] text-center -mt-15'>This very extraordinary feature, can make learning activities more efficient</p>

                <div className='flex mx-auto justify-evenly mt-10'>
                    <div className='mt-20'>
                        <h3 className='font-Poppins font-semibold text-3xl w-[300px] h-[128px]'><span className='text-orange-500'>Tools</span> For Teachers And Learners</h3>
                        <p className='w-[350px] text-[#696984]'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>
                    <div>
                        <img src={group} alt="" className='w-[400px]' />
                    </div>
                </div>
            </div>


            <div className='flex mx-auto justify-evenly mt-10'>

                <div>
                    <img src={ggg} alt="" className='w-[400px]' />
                </div>


                <div className='mt-20'>
                    <h3 className='text-[#2F327D] font-bold text-center text-3xl max-w-[20px]'>
                        Assessments,<span className='text-orange-500'>Quizzes</span>, Tests
                    </h3>

                    <p className='w-[350px] text-[#696984] mt-4 '>Class has a dynamic set of teaching tools built to be deployed and used during class.
                        Teachers can handout assignments in real-time for students to complete and submit.</p>
                </div>
            </div>



            <div>
                <div className='flex mx-auto justify-evenly mt-10'>
                    <div className='mt-20'>
                        <h3 className='font-Poppins font-semibold text-4xl w-[370px] h-[127px]'><span className='text-orange-500'>Class Management</span> Tools for Educators</h3>
                        <p className='w-[350px] text-[#696984]'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                    </div>
                    <div>
                        <img src={lll} alt="" className='w-[400px]' />
                    </div>
                </div>
            </div>

        
            <div className='flex mx-auto justify-evenly mt-10'>

                <div>
                    <img src={end} alt="" className='w-[400px]' />
                </div>


                <div className='mt-15'>
                    <h3 className='text-[#2F327D] font-bold text-center text-3xl w-[200px] ml-[-20px]'>
                    <span className='text-orange-500'>One-on-One</span> Discussion
                    </h3>

                    <p className='w-[350px] text-[#696984] mt-4 '>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            </div>


        </div>
    )
}

export default Section
