import PropTypes from 'prop-types';

function EventList({ events, handleDelete }) {
    return (
        <>
            {events.map(({ id, title }) => (<h2 key={id} onClick={() => handleDelete(id)}>{title}</h2>))}
        </>
    )
}

EventList.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
}

export default EventList
