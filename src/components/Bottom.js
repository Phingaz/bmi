import "./Bottom.scss"
import TransgenderIcon from '@mui/icons-material/Transgender';
import CakeIcon from '@mui/icons-material/Cake';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import GroupsIcon from '@mui/icons-material/Groups';
import { FadeIn } from './Reveal'


export const Bottom = () => {
    return (
       <FadeIn delay={0.3} duration={1}>
            <section className='bottom'>
                <div className='txt'>
                    <h1>Limitations of BMI</h1>
                    <p>
                        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certian cases, the measurement may not be beneficial to use.
                    </p>
                </div>


                <div className='info'>
                    <div className='card'>
                        <div className='wrapper'>
                            <TransgenderIcon className='icons one' />
                            <h3>Gender</h3>
                        </div>
                        <p>
                            The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evluating their BMI
                        </p>
                    </div>
                    <div className='card'>
                        <div className='wrapper'>
                            <FitnessCenterIcon className='icons two' />
                            <h3>Muscle</h3>
                        </div>
                        <p>
                            BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat
                        </p>
                    </div>
                    <div className='card'>
                        <div className='wrapper'>
                            < CakeIcon className='icons three' />
                            <h3>Age</h3>
                        </div>
                        <p>
                            In aging individuals, increased bodt fat and muscle loss may cause BMI to underestimate body fat content
                        </p>
                    </div>
                    <div className='card'>
                        <div className='wrapper'>
                            <ChildCareIcon className='icons four' />
                            <h3>Pregnancy</h3>
                        </div>
                        <p>
                            Expectant mothers experiance weight gain due to their growing baby. Maintaining a healthy pre-pregnancy. BMI is advisable to minimise health risks for both mother and child.
                        </p>
                    </div>
                    <div className='card'>
                        <div className='wrapper'>
                            <GroupsIcon className='icons five' />
                            <h3>Race</h3>
                        </div>
                        <p>
                            Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practise nurse.
                        </p>
                    </div>

                </div>

            </section>
       </FadeIn>
    )
}
