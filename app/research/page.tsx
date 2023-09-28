import { TopBlockResearch } from "@/components/ResearchPage/TopBlock/TopBlock";
import { ChooseResearch } from "@/components/ResearchPage/choose2/Choose";
import { RequestResearch } from "@/components/ResearchPage/request3/Request";



export default function Research() {
  return (
    <main className='page'>
        <TopBlockResearch />
        <ChooseResearch />
        <RequestResearch />
    </main>
  )
}
