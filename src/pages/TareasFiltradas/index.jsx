import Card from 'components/Card';
import { getTasks } from 'pages/Tareas/listcards';
import { useState, useEffect } from 'react';

function Lista({ filter = "Todas" } = {}) {
    const [List, setList] = useState([]);

    useEffect(function () {
        if(filter) {
            getTasks(filter).then(res => setList(res));
        } else {
            getTasks("Todas").then(res => setList(res));
        }
    }, [filter])

    return <>
        {List.map(item => (
            <Card
                state={item.state}
                date={item.date}
                title={item.title}
                subject={item.subject}
                cardType={item.cardType}
                key={item.title}
            />
        ))}
    </>
}

export default Lista;
