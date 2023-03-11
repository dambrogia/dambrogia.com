const cards = [
  {
    image: '/home/psa.png',
    company: 'Palmetto State Armory',
    title: 'Principal Software Architect',
    link: 'https://palmettostatearmory.com',
  }, {
    image: '/home/gigasavvy.png',
    company: 'Gigasavvy',
    title: 'Full Stack Developer',
    link: 'https://gigasavvy.com',
  }, {
    image: '/home/dolls-kill.png',
    company: 'DollsKill',
    title: 'Software Engineer',
    link: 'https://dollskill.com',
  },
]

function Card({image, company, title}: { image: string, company: string, title: string }) {
  return <div className="card w-full bg-base-100 shadow-xl">
    <figure className="bg-gray-200"><img src={image} alt={company} /></figure>
    <div className="card-body text-center">
      <h2 className="card-title inline-block">{company}</h2>
      <p className="text-sm mt-2 font-thin">{title}</p>
    </div>
  </div>
}

export default function RecentWork() {
  return <section className="c-recent-work">
    <div className="u-container py-24 md:py-48">
      <div className="u-row flex flex-wrap items-center justify-center">
        {cards.map(v => {
          return <div key={v.company} className="u-col w-full sm:w-1/2 lg:w-1/3 py-4">
            <Card image={v.image} company={v.company} title={v.title} />
          </div>
        })}
      </div>
    </div>

  </section>
}
