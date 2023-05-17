import './Intro.css'
import { IoLogoJavascript, IoLogoReact, IoLogoPython } from 'react-icons/io5';
import { FaAws } from 'react-icons/fa'
import { SiSupabase, SiPostgresql } from 'react-icons/si'

export default function Intro(){
    return(
        <div className='intoWrapper'>
            <div className='intro'>Hi, I'm Anselm, a software engineer.</div>
            <div className='experienceWrapper'>
                <div className='experience'>
                    <IoLogoReact size={28}/>
                    <div className='expName'>React</div>
                </div>
                <div className='experience'>
                    <IoLogoJavascript size={28}/>
                    <div className='expName'>JavaScript</div>
                </div>
                <div className='experience'>
                    <IoLogoPython size={28}/>
                    <div className='expName'>Python</div>
                </div>
                <div className='experience'>
                    <SiPostgresql size={28}/>
                    <div className='expName'>Postgresql</div>
                </div>
                <div className='experience'>
                    <FaAws size={28}/>
                    <div className='expName'>AWS</div>
                </div>
                <div className='experience'>
                    <SiSupabase size={28}/>
                    <div className='expName'>Supabase</div>
                </div>
            </div>
        </div>
    )
}