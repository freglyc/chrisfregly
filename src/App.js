import avatar from "./resources/avatar.jpg"

export default function App() {
  return (
    <div className="flex flex-col items-center m-8 md:m-12">
      <div className="w-full max-w-lg flex flex-col items-center">
        <img className="w-24 h-24 rounded-full" src={avatar} alt={"avatar"} />
        <p className="mt-2 text-lg">Chris Fregly</p>
        <p className="text-sm text-neutral-500">A creative who codes - based in SF</p>
        <div className="w-full flex flex-col items-center mt-3">
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="https://www.linkedin.com/in/chrisfregly" target="_blank" rel="noreferrer">Linkedin</a>
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="https://github.com/chrisfregly" target="_blank" rel="noreferrer">Github</a>
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="https://dribbble.com/chrisfregly" target="_blank" rel="noreferrer">Dribbble</a>
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="https://www.instagram.com/chris.fregly" target="_blank" rel="noreferrer">Instagram</a>
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="mailto:hello@chrisfregly.com">Contact</a>
        </div>
        <p className="mt-6">Projects</p>
        <div className="w-full flex flex-col items-center">
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="https://ultralitepack.com" target="_blank" rel="noreferrer">Ultralitepack</a>
          <a className="w-full bg-indigo-500 text-neutral-100 p-3 rounded-md mt-3 text-center" href="https://quibbble.com" target="_blank" rel="noreferrer">Quibbble</a>
        </div>
      </div>
    </div>
  )
}