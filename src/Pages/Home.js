import '../Pages/Home.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import gmail from '../images/gmail.png'

function Home() {
    return (
        <div className="home-bg">
            <p className='name'>Jaiwin</p>
            <h1 className='surname'>Chaudhari</h1>
            <p className='spacing-p'>Full Stack Developer</p>
            <div className='button-div'>
                <a href='https://drive.google.com/file/d/1MuHeghhIqr8NsxPh--8Tpqx7jssGRFJA/view?usp=sharing' target='_blank'><button className='button-home'>Resume</button></a>
                {/* <button className='button-home'>Project</button> */}
            </div>
            <div className='home-footer'>
                <a href='https://www.linkedin.com/in/jaiwin-chaudhari-1ab866250/' target='_blank'><img src={linkedin}/></a>
                <a href='https://github.com/Jaiwincr7' target='_blank'><img src={github}></img></a>
            </div>
        </div>
    )
}

export default Home