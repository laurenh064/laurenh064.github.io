import { onMount, type Component, type JSXElement, onCleanup, createSignal } from 'solid-js';
import About from './components/About'
import Accounts from './components/Accounts';
import particleSettings from './assets/particleSettings.json'
import Projects from './components/Projects';

// Resuable content header
const Header: Component<{
  title: string
  class: string
  children: JSXElement
}> = (props) => (
  <div class='' classList={{ [props.class]: true }}>
    <div class='bg-artichoke bg-opacity-50 py-2 rounded-xl backdrop-blur-sm px-3 mb-2'>
      {props.title}
    </div>
    <div>
      {props.children}
    </div>
  </div>
)

declare function particlesJS(id: string, options: unknown): void
let particleInterval: number | null = null
function App() {
  const [particlesInitialized, setParticlesInitialized] = createSignal(false)
  onMount(() => {
    const tryParticle = () => {
      if (
        typeof particlesJS === "function" &&
        !particlesInitialized() &&
        (document.querySelector("#bg-polygon-canvas") as HTMLDivElement)
          .clientWidth > window.innerWidth
      ) {
        setParticlesInitialized(true)
        particlesJS("bg-polygon-canvas", particleSettings)
      } else {
        requestAnimationFrame(tryParticle)
      }
    }
    particleInterval = requestAnimationFrame(tryParticle)
  })
  onCleanup(() => {
    if (particleInterval) {
      cancelAnimationFrame(particleInterval)
    }
  })

  return (
    <div class='grid left-0 top-0 right-0 h-content min-h-screen absolute overflow-hidden text-white'>
      <div class='flex overflow-hidden justify-center items-center'>
        <div class='w-[650px] bg-raisin/60 rounded-lg shadow-lg backdrop-blur-sm p-2'>
          <div class=' px-5 pt-3 pb-1'>
            <div class="text-[1.8em] font-bold">Lauren's Stuff</div>
            <div class='opacity-80 text-sm italic pt-0'>
              Welcome, have a look around...
            </div>
          </div>

          <div class='flex flex-wrap flex-grow justify-between p-2 relative'>
            <About />
            <Header title='Social' class='w-fit'>
              <Accounts />
            </Header>
            <Header title='Projects' class='grow pl-3'>
              <Projects />
            </Header>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 min-h-screen -z-10">
        <div id="bg-polygon-canvas" class="-inset-12 absolute bg-raisin-dark" />
      </div>
    </div>

  );
};

export default App;
function createRef<T>() {
  throw new Error('Function not implemented.');
}

