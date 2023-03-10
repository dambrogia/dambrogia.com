import Link from 'next/link'
import { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <div className="layout__header u-container">
      <div className="u-row">
        <div className="u-col w-full">
          <div className="navbar bg-base-100 !px-0">
            <div className="flex-1">
              <a className="font-semibold text-xl">dambrogia.com</a>
            </div>
            <button className="btn btn-square btn-ghost" onClick={() => setActive(!active)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <LinksOverlay active={active} close={() => setActive(false)} />
    </div>
  )
}

function LinksOverlay({ active, close}: { active: boolean, close: any }) {
  const arr = [
    { label: "Stack Overflow", icon: <i className="text-3xl uil uil-arrow"></i>, link: 'https://stackoverflow.com/users/3404054/domdambrogia' },
    { label: "Github", icon: <i className="text-3xl uil uil-github"></i>, link: 'https://github.com/dambrogia' },
    { label: "LinkedIn", icon: <i className="text-3xl uil uil-linkedin"></i>, link: 'https://www.linkedin.com/in/dominic-dambrogia-262016b8/' },
    { label: "Instagram", icon: <i className="text-3xl uil uil-instagram"></i>, link: 'https://www.instagram.com/dombrogia/' },
  ]
  const listItems = arr.map(v => {
    return <li key={v.label} className='pb-12'>
      <Link href={v.link} target='_blank' className='flex justify-between items-center text-xl w-64'>
        <span>{v.label}</span>
        <span>{v.icon}</span>
      </Link>
    </li>
  })

  const overlayActive = active ? '!top-0 !delay-[0]' : '';
  const bgActive = active ? '!opacity-90 !delay-200' : '';

  return <div className={`header__overlay fixed left-0 -top-full ${overlayActive} w-screen h-screen delay-200`}>
    <div className={`overlay__bg w-full h-full opacity-0 bg-slate-800 ${bgActive} relative duration-200 `}>
      <button className="btn btn-square absolute top-4 right-4" onClick={close}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <ul className={`absolute top-1/2 left-1/2`} style={{ transform: 'translateX(-50%) translateY(-50%)' }}>{listItems}</ul>
    </div>
  </div>
}
