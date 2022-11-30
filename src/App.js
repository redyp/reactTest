
import { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';

function App() {
    const eventList = [
        { id: 1, title: 'Mario games' },
        { id: 2, title: 'Browser castle speedrun' },
        { id: 3, title: 'Racing on Moo Moo farm.' },
    ];

    const [events, setEvents] = useState(eventList);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = (id) => setEvents((prevState) => prevState.filter((item) => item.id !== id))
    return (
        <div className="App">
            <h1>Hello world</h1>
            <EventList events={events} handleDelete={handleDelete} />
            <button onClick={() => setEvents(eventList)}>Refresh event</button>
            {showModal && <Modal>
                <h2>Term and Service</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe explicabo aperiam suscipit sit expedita aspernatur voluptates temporibus, obcaecati in assumenda fugiat architecto debitis! Fugiat iusto laborum nemo aliquam tempore?
                </p>
                <button onClick={() => setShowModal(false)}>Close</button>
            </Modal>}
            <button onClick={() => setShowModal(true)}>Term and Service</button>
        </div>
    );
}

export default App;
