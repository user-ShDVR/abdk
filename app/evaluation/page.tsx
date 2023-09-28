import { TopBlockEvaluation } from "@/components/EvaluationPage/TopBlock/TopBlock";
import { ChooseEvaluation } from "@/components/EvaluationPage/choose2/Choose";
import { RequestEvaluation } from "@/components/EvaluationPage/request3/Request";




export default function Consulting() {
  return (
    <main className='page'>
        <TopBlockEvaluation />
        <ChooseEvaluation />
        <RequestEvaluation />
    </main>
  )
}
