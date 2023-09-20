import { Button } from '@nextui-org/react'
import React from 'react'
import { Counter, Posts } from './components'

export const App = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-4'>Zustand + React</h1>
            <Counter />
            <Posts />
        </div>
    )
}
