export default function Hero() {
  return <div className="c-hero relative xl:!bg-center  bg-cover" style={{ backgroundImage: 'url(/home/dominic-dambrogia.jpeg)', filter: 'grayscale(25%)', backgroundPosition: '90% 50%' }}>
    <div className="w-full h-full" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div className="u-container py-72" >
        <div className="u-row">
          <div className="u-col w-full text-center">
            <h1 className='text-5xl mb-12 font-bold'>Dominic D'Ambrogia</h1>
            <h3 className='text-2xl mb-1 font-thin'>Principal Software Architect</h3>
            <h5 className='text-lg font-thin'>&copy; Palmetto State Armory</h5>
          </div>

          <div className="u-col w-full flex items-center justify-center pt-16">
            <button className="btn btn-secondary gap-2">
              <i className="uil uil-github text-lg"></i>
              <span className="">GitHub</span>
            </button>
            <button className="btn btn-secondary gap-2 ml-6">
              <i className="uil uil-envelope text-lg"></i>
              <span className="">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

}