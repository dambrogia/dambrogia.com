import Header from "./header"
import Footer from "./footer"

interface OneColumnProps {
  container?: true
}

export default function OneColumn(props: React.PropsWithChildren<OneColumnProps>) {
  return (
    <div>
      <Header />
      <div className={props.container ? 'container' : 'no-container'}>
        <div className="-mx-4">
          <div className="w-full px-4">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
