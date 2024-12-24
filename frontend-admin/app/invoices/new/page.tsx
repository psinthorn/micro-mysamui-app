'use client';

import { sql } from 'drizzle-orm' 
import { db } from '@/db'

import { useState, startTransition, SyntheticEvent } from 'react';
import SubmitButton  from '@/components/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createAction } from '@/app/actions'
import Form from 'next/form'

const page = () => {

  const [state, setState] = useState('ready')

  const handleOnSubmit = async (event: SyntheticEvent) => {
    if(state === 'pending') {
      event.preventDefault()
      return;
    }
    setState('pending');
    }


  return (
    <div className=''>
      <h1 className='gap-4 text-center'>Create Invoice</h1>
     
      <Form action={createAction} onSubmit={handleOnSubmit}  className='grid gap-6 max-w-xs'>
        <div>
          <Label className='block mb-2 font-semibold text-sm' htmlFor='name'>Billing Name</Label>
          <Input className='focus:outline-none' id="name" name="name" placeholder='Enter billing name' />
        </div>
        <div>
          <Label className='block mb-2 font-semibold text-sm focus:outline-none' htmlFor="email" >Billing Email</Label>
          <Input className='focus:outline-none' id="email" name="email" placeholder='Enter billing Email' />
          </div>
        <div>
          <Label className='block mb-2 font-semibold text-sm focus:outline-none' htmlFor="amount" >Amount</Label>
          <Input className='focus:outline-none' id="amount" name="amount" placeholder='Enter billing amount' />
        </div>
        <div>
          <Label className='block mb-2 font-semibold text-sm focus:outline-none' htmlFor="description" >Description</Label>
          <Textarea className='focus:outline-none' id="description" name="description" placeholder='Enter billing description' />
        </div>
        <div>
          <SubmitButton />
        </div>
      </Form>
  </div>
  )
}

export default page