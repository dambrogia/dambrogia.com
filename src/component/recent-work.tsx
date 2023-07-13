import Link from 'next/link'

type RecentWork = {
  image: string;
  company: string;
  title: string;
  link: string;
}

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

function Card({image, company, title, link}: RecentWork) {
  return <div className="card w-full bg-base-100 shadow-xl">
    <Link href={link} target="_blank">
      <figure className="bg-gray-200"><img src={image} alt={company} /></figure>
      <div className="card-body text-center">
        <h2 className="card-title inline-block">{company}</h2>
        <p className="text-sm mt-2 font-thin">{title}</p>
      </div>
    </Link>
  </div>
}

export default function RecentWork() {
  return <section className="c-recent-work">
    <div className="u-container py-24 md:py-48">
      <div className="u-row flex flex-wrap items-center justify-center">
        {cards.map(v => {
          return <div key={v.company} className="u-col w-full sm:w-1/2 lg:w-1/3 py-4">
            <Card key={v.company} image={v.image} company={v.company} title={v.title} link={v.link} />
          </div>
        })}
      </div>
    </div>

  </section>
}
