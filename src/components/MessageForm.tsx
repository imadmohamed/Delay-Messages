import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Input } from './ui/input'

const MessageForm = () => {
  return (
    <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Dm Delay Button</h2>

        <Textarea
        placeholder='Type your message...'
        value="hello guys"
        />

        <Input
        type='number'
        placeholder='Delay in seconds'
        value="5"
        />

        <Button>Sent with delay</Button>
    </div>
  )
}

export default MessageForm