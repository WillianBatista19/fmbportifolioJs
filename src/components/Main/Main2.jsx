import FmbName from '../../assets/FMBName.png'
import EdMain from '../../assets/Edmain.png'
import { TypeAnimation } from 'react-type-animation';

function Main2() {
    return (
        <div className='bg-primary-100'>
            <div className='container max-w-full flex items-center justify-center'>
                <img className='pt-8 md:pt-30 w-48 md:w-64 lg:w-96' src={FmbName} alt="Logo Willian Dev" />
            </div>

            <section className='container max-w-full flex flex-col items-center lg:flex-row lg:items-stretch'>
                <h1 className='text-white text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 md:mb-0 lg:w-1/2 lg:text-left lg:ml-40'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FEB692] to to-[#EA5455]'>Olá, eu sou{" "}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Willian',
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

                <img className='w-full lg:w-1/2 mb-8 lg:mb-0' src={EdMain} alt="Ed" />
            </section>
        </div>
    )
}

export default <Main2></Main2>;
