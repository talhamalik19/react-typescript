import React, { type ChangeEvent } from 'react';
import { useState, FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  // const goal = useRef<HTMLInputElement>(null);
  // const summary = useRef<HTMLInputElement>(null);
  const [goal, setGoal] = useState<string>('')
  const [summary, setSummary] = useState<string>('')

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setGoal(event.target.value)
  }

  const onSummaryChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setSummary(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const enteredGoal = goal.current!.value;
    // const enteredSummary = summary.current!.value;

    // event.currentTarget.reset();
    onAddGoal(goal, summary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" value={goal} onChange={onTitleChange} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" value={summary} onChange={onSummaryChange} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
