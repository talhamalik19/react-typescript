import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const timeRef = useRef<number | null>(null)
  const {isRunning} = useTimersContext()

  if (remainingTime <= 0 && timeRef.current) {
    clearInterval(timeRef.current);
  }

  useEffect(()=>{
    let timer : number;
    if(isRunning){
     timer = setInterval(()=>{
        setRemainingTime((prevTime)=> prevTime - 50)
      }, 50)
      timeRef.current = timer;
    }
    else if(timeRef.current){
        clearInterval(timeRef.current)
    }
    return()=>{
      clearInterval(timer)
    }
  }, [isRunning])

  const convertedTime = (remainingTime / 1000).toFixed(2)
  console.log(convertedTime)
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{convertedTime}</p>
    </Container>
  );
}
