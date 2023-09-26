import { TopBlock } from "@/components/MainPage/TopBlock/TopBlock";
import { Clients } from "@/components/MainPage/clients2/Clients";
import { Expertise } from "@/components/MainPage/expertise4/Expertise";
import { Services } from "@/components/MainPage/services3/Services";

export default function Home() {
  return (
    <main className='page'>
      <TopBlock />
      <Clients />
      <Services />
      <Expertise />
    </main>
  )
}
