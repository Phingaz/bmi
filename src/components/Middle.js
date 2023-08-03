import "./Middle.scss"
import img from "../asset/sushi.png"


export const Middle = () => {
    return (
            <section className='middle'>
                <div className='img'>
                    <img src={img} alt='' />
                </div>

                <div className='txt'>
                    <h1>What your BMI result means</h1>

                    <p>
                        A BMI range of 18.5 to 24.9 is considered a 'healthy weight'. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obeisity and type 2 diabetes. Aim for a nutritous diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days.
                    </p>
                </div>
            </section>

    )
}
