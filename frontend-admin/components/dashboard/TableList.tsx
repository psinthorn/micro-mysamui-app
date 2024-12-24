import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils";

const TableList = ({invoices}: any) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices?.map((invoice: any) => (
          <TableRow key={invoice.id}>
            <TableCell className="p-0">
              <Link className="block p-4" href={`/invoices/${invoice.id}`}>
              { new Date(invoice.created_at).toLocaleDateString()}
              </Link>
            </TableCell>
            <TableCell className="p-0 font-medium">
              <Link className="block p-4" href={`/invoices/${invoice.id}`} > {invoice.id}  </Link>
            </TableCell>
            <TableCell className="p-0">
              <Link className="block p-4" href={`/invoices/${invoice.id}`} > {invoice.name} </Link>
            </TableCell>
            <TableCell>
              <Link className="block p-4" href={`/invoices/${invoice.id}`} > {invoice.email} </Link>
            </TableCell>
            <TableCell className="p-0">
              <Link className="block p-4" href={`/invoices/${invoice.id}`} > Credit Card </Link>
            </TableCell>
            <TableCell>
              <Link className="block p-4" href={`/invoices/${invoice.id}`} > 
              <Badge className={cn(
                "ml-2 capitalize",
                invoice.status === "paid" && "bg-green-500",
                invoice.status === "draft" && "bg-yellow-500",
                invoice.status === "sent" && "bg-blue-500",
                invoice.status === "pending" && "bg-orange-500",
                )} >{invoice.status}</Badge></Link>
            </TableCell>
            <TableCell className="p-0 text-right">
              <Link className="block p-4" href={`/invoices/${invoice.id}`} > {(invoice.amount / 100).toFixed(2)} </Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  )
}

export default TableList