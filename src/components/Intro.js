import './Intro.scss'
import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'

export const Intro = () => {

    const [input, setInput] = useState({
        weight: '',
        height: '',
    })

    const [bmi, setBmi] = useState()

    const [measurement, setMeasurement] = useState('metric')

    const handleMeasurement = (e) => {
        setMeasurement(e.target.value)
    }

    useEffect(() => {
        const w = input.weight
        const h = input.height
        let bmi = 0;
        switch (measurement) {
            case 'metric':
                bmi = w / h / h * 10000
                break;
            case 'imperial':
                bmi = (w / (h * h)) * 703
                break;
            default:
                break;
        }
        setBmi((bmi).toFixed(2))
    }, [input, measurement])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput(p => ({
            ...p,
            [name]: value,
        }))
    }

    return (
        <Reveal duration={0.75}>
            <section className='intro'>

                <div className='main'>
                    <h1>Body Mass <br /> Index Calculator</h1>
                    <p>
                        Better understand your body weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, if offers a valuable starting point to evaluate your overall health and well-being.
                    </p>
                </div>

                <div className='calculator'>

                    <h3>Enter your details below</h3>

                    <div className='measurements'>
                        <div className='measurement'>
                            <input
                                name='metric'
                                type="radio"
                                value='metric'
                                checked={measurement === 'metric'}
                                onChange={handleMeasurement}
                                id='metric'

                            />
                            <label htmlFor='metric'>Metric</label>
                        </div>

                        <div className='measurement'>
                            <input
                                name='imperial'
                                type="radio"
                                value='imperial'
                                checked={measurement === 'imperial'}
                                onChange={handleMeasurement}
                                id='imperial'
                            />
                            <label htmlFor='imperial'>Imperial</label>
                        </div>
                    </div>

                    <div className='inputs'>
                        <div className='input'>
                            <label>Height</label>
                            <input
                                name='height'
                                value={input.height}
                                type='number'
                                placeholder='0'
                                onChange={handleChange}
                            />
                            <p className='size'>
                                {measurement === 'metric'
                                    ?
                                    'cm'
                                    :
                                    'in'
                                }
                            </p>
                        </div>
                        <div className='input'>
                            <label>Weight</label>
                            <input
                                name='weight'
                                value={input.weight}
                                type='number'
                                placeholder='0'
                                onChange={handleChange}
                            />
                            <p className='size'>
                                {measurement === 'metric'
                                    ?
                                    'kg'
                                    :
                                    'lb'
                                }
                            </p>
                        </div>
                    </div>

                    <div className='result'>
                        <h5>Welcome</h5>
                        <p>Enter your height and weight and youll see your BMI result here</p>
                        <div>
                            <p>Your BMI is <span className='bmi'>
                                {isNaN(bmi) ? 0 : bmi}
                            </span></p>
                        </div>
                    </div>

                </div>

            </section>
        </Reveal>
        
    )
}
