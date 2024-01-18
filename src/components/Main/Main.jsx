import FmbName from '../../assets/FMBName.png'
import EdMain from '../../assets/Edmain.png'
import { TypeAnimation } from 'react-type-animation';

function Main() {
    return(
        <div className=' bg-primary-100'>
            <div className='container max-w-full flex items-center justify-center'>
                <img className='w-40 pt-12 pb-10 md:pt-16 md:w-64 lg:pt-14' src={FmbName} alt="Logo Willian Dev" />
            </div>

            <section className='inline max-w-full lg:flex items-center columns-2'>
                <h1 className='w-2/2 md:w-1/2 ml-3 lg:ml-40 text-white text-4xl md:text-7xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to to-pink-500'>Olá, eu sou{" "}</span>
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

                <img className='w-2/2 md:w-1/2' src={EdMain} alt="Ed" />
            </section>
        </div>
    )
}

export default Main;