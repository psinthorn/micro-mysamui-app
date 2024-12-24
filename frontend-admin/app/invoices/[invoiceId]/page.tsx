import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Params {
  invoiceId: string;
}

const InvoicePage = async ({ params }: { params: Params }) => {
  const { userId } = await auth();
  if (!userId) return;
  const {invoiceId} = await params;
  const invoiceIdNumber = parseInt(invoiceId);
  
  const [invoice] = await db.select().from(Invoices)
  .where( 
    and(
      eq(Invoices.id, invoiceIdNumber),
      eq(Invoices.userId, userId)
    )
  ).limit(1);

const Available_Status = ['draft', 'open', 'pending', 'overdue', 'paid', 'void'];

  if (!invoice) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl text-red-500">Invoice not found</h1>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex justify-between items-center mb-8">
        <div> <h1 className="text-3xl font-bold mb-4">Invoice Details</h1></div>
        <div className="flex justify-between gap-4 items-center">
          <div>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none text-sm text-gray-300' asChild>
             <Button variant="outline">Change Status</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>Change Status</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
              {Available_Status.map((status) => (
                <DropdownMenuItem key={status}>{status}</DropdownMenuItem>
              ))}
              
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none text-sm text-gray-300' asChild>
             <Button variant="outline">...</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>...</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
                <DropdownMenuItem>Payment</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem> 
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
       
        
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Invoice Number:</h2>
          <span className="text-lg">{invoice.id}</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Billing Name:</h2>
          <span className="text-lg"></span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Billing Email:</h2>
          <span className="text-lg">{invoice.email}</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Amount:</h2>
          <span className="text-lg">${(invoice.amount / 100).toFixed(2)}</span>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-semibold">Description:</h2>
          <span className="text-lg">{invoice.description}</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Status:</h2>
          <span className="text-lg"><Badge className={cn(
            "ml-2 capitalize",
            invoice.status === "paid" && "bg-green-500",
            invoice.status === "draft" && "bg-yellow-500",
            invoice.status === "sent" && "bg-blue-500",
            invoice.status === "pending" && "bg-orange-500",
            )} >{invoice.status}</Badge></span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Created At:</h2>
          <span className="text-lg">{new Date(invoice.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;