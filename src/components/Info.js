import './Info.scss'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Reveal } from './Reveal'

export const Info = () => {
    return (
        <Reveal duration={0.75} delay={0.1}>
            <section className='info'>
                <div className='card'>
                    <RamenDiningIcon className='icon' />
                    <div className='text'>
                        <h3>Healthy eating</h3>
                        <p>
                            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                        </p>

                    </div>
                </div>
                <div className='card'>
                    <FitnessCenterIcon className='icon two' />
                    <div className='text'>
                        <h3>Regular exercise</h3>
                        <p>
                            Exercise improves fitness, aiads weight control, elevates mood, and reduces disease risk, fostering wellness and longetivity.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <NightsStayIcon className='icon three' />
                    <div className='text'>
                        <h3>Adequate sleep</h3>
                        <p>
                            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
                        </p>

                    </div>
                </div>

            </section>
        </Reveal>
    )
}
