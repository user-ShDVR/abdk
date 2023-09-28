import { TopBlockConsulting } from "@/components/ConsultingPage/TopBlock/TopBlock";
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";




export default function Consulting() {
  return (
    <main className='page'>
        <TopBlockConsulting />
        <ChooseConsulting />
        <RequestConsulting />
    </main>
  )
}
