import { useState } from "react";
// unicafe
const Display = ({ content }) => <h1>{content}</h1>;

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;

    if (all == 0) {
        return <div>No feedback given</div>;
    }

    const average = (good * 1 + bad * -1) / all;
    const positive = good / all + " %";
    return (
        <div>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive} />
        </div>
    );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
    <div>
        {text} {value}
    </div>
);

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClicks = () => {
        const updatedGood = good + 1;
        setGood(updatedGood);
    };

    const handleNeutralClicks = () => {
        const updatedNeutral = neutral + 1;
        setNeutral(updatedNeutral);
    };

    const handleBadClicks = () => {
        const updatedBad = bad + 1;
        setBad(updatedBad);
    };

    return (
        <div>
            <Display content='give feedback' />
            <Button onClick={handleGoodClicks} text='good' />
            <Button onClick={handleNeutralClicks} text='neutral' />
            <Button onClick={handleBadClicks} text='bad' />
            <Display content='statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
