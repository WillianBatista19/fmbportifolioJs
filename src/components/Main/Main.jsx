import FmbName from '../../assets/FMBName.png'
import EdMain from '../../assets/Edmain.png'
import { TypeAnimation } from 'react-type-animation';

function Main() {
    return(
        <div className='bg-primary-100 lg:h-auto'>
            <div className='container max-w-full h-2/5 flex items-center justify-center'>
                <img className='w-52 pt-12 pb-10 md:pt-16 md:w-64 lg:pt-14' src={FmbName} alt="Logo Willian Dev" />
            </div>

            <section className='inline max-w-full lg:flex items-center columns-2'>
                <div className='md:w-1/2 h-1/5 ml-3 lg:ml-40 flex items-center'>
                    <h1 className=' text-white text-4xl md:text-7xl font-staubach'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to to-gray-400'>Olá, eu sou{" "}</span>
                        <br />
                    <TypeAnimation
                    sequence={[
                        'Willian!',
                        1000,
                        'Web Developer',
                        1000,
                        'Mobile Developer',
                        1000,
                        'UI/UX Designer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                    </h1>
                </div>
                
                <div className='flex mt-4 h-2/5 md:w-1/2 md:mt-0 items-end'>
                    <img src={EdMain} alt="Ed"/>
                </div>
                
            </section>
        </div>
    )
}

export default Main;