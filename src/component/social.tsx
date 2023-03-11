import {socialLinks} from '@/model/social'
import Link from 'next/link'

export default function Social() {
  return <section className="c-social">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="bg-secondary-content text-secondary py-16 flex justify-center items-center flex-col ">
        <p className='text-3xl font-bold'>Feel like being social?</p>
        <p className='text-lg font-thin pt-4'>Connect with me!</p>
      </div>
      <div className="py-16">
        <div className="max-w-full w-full md:w-[700px] flex flex-wrap items-center justify-center flex-row mx-auto">
          {socialLinks.map(l => <Link key={l.label} href={l.link} target="_blank" className="px-12 py-8 text-5xl text-secondary">{l.icon}</Link>)}
        </div>
      </div>
    </div>
  </section>
}
