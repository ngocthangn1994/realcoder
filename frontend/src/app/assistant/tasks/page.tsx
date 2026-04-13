import { AppShell } from '@/components/dashboard/app-shell';
const links=[{href:'/assistant/dashboard',label:'Dashboard'},{href:'/assistant/clients',label:'Assigned Clients'},{href:'/assistant/jobs',label:'Delegated Jobs'},{href:'/assistant/tasks',label:'Tasks'},{href:'/assistant/chat',label:'Team Chat'},{href:'/assistant/reports',label:'Reports'}];
export default function Page(){return <AppShell title="Assistant Tasks" links={links}><div className="rounded-xl border bg-white p-4">Assistant tasks workspace for client support workflow.</div></AppShell>}
