import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Calendar, CreditCard, Folders, LayoutDashboard, Newspaper, NotebookPen, Settings, User } from "lucide-react"
import Link from "next/link"
import Footer from "./Footer"

const Sidebar = () => {
  return (
  <div className="h-[100vh]">
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/dashboard">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <NotebookPen className="mr-2 h-4 w-4" />
            <Link href="/invoices/new">Invoices</Link>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <Link href="/calendar">Calendar</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-2 h-4 w-4" />
            <Link href="/posts">Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="mr-2 h-4 w-4" />
            <Link href="/categories">Categories</Link>
          </CommandItem>
        
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4"/>
            <span>Profile</span>
            <CommandShortcut>Ctrl + P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4"/>
            <span>Billing</span>
            <CommandShortcut>Command + B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4"/>
            <span>Settings</span>
            <CommandShortcut>Command + S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      {/* <Footer /> */}
    </Command>
    
  </div>
  )
}

export default Sidebar