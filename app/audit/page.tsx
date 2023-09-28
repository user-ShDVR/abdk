import { TopBlockAudit } from "@/components/AuditPage/TopBlock/TopBlock";
import { ChooseAudit } from "@/components/AuditPage/choose2/Choose";
import { RequestAudit } from "@/components/AuditPage/request3/Request";


export default function Audit() {
  return (
    <main className='page'>
        <TopBlockAudit />
        <ChooseAudit />
        <RequestAudit />
    </main>
  )
}
