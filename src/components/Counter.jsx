import { Button } from '@nextui-org/react'
import { counterSlice } from '../store/counterSlice'

export const Counter = () => {

    const count = counterSlice((state) => state.count)
    const { increment, decrement, incrementBy, reset } = counterSlice()

    return (
        <>
            <h2 className='text-center font-semibold my-3 text-lg'>Counter: {count}</h2>
            <div className='flex justify-between w-6/12 mx-auto'>
                <Button onClick={increment} color='primary' size='md' radius='lg' className='font-bold'>Increment</Button>
                <Button onClick={decrement} color='primary' size='md' radius='lg' className='font-bold'>Decrement</Button>
                <Button onClick={() => incrementBy(5)} color='primary' size='md' radius='lg' className='font-bold'>Incremenmt By 5</Button>
                <Button onClick={reset} color='primary' size='md' radius='lg' className='font-bold'>Reset</Button>
            </div>
        </>
    )
}
