import './Info.scss'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NightsStayIcon from '@mui/icons-material/NightsStay';
export const Info = () => {
    return (
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
                        Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                    </p>
                </div>
            </div>
            <div className='card'>
                <NightsStayIcon className='icon three' />
                <div className='text'>
                    <h3>Adequate sleep</h3>
                    <p>
                        Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                    </p>

                </div>
            </div>

        </section>
    )
}
