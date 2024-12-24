import TableList from '@/components/dashboard/TableList'

import { db } from '@/db' 
import { Invoices } from '@/db/schema'
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';


const Dashboard = async () => {
  const { userId } = await auth();
  if(!userId) return;
  const results = await db.select().from(Invoices).where(eq(Invoices.userId, userId));
  // console.log(results)
  return (
    <div>
      <h1 className='gap-4 text-center'>Dashboard</h1>
      <TableList invoices={results} />
    </div>
  )
}

export default Dashboard