import React from 'react';
import { useSelector } from 'react-redux';

const ListAppointments = () => {

    // get the appointments if the state
    const appointments = useSelector((state) => state.appointments);

    // conditional message
    const message = Object.keys(appointments.appointments).length === 0 ? 'No Appointments' : 'Manage Appointments here';

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
                <div className="appointment-list">
                    {appointments.appointments.map(appointment => (
                        <div className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{appointment.pet}</h3>
                                <p className="card-text"><span>Owner Name: </span>{appointment.owner}</p>
                                <p className="card-text"><span>Date: </span>{appointment.date}</p>
                                <p className="card-text"><span>Time: </span>{appointment.time}</p>
                                <p className="card-text"><span>Symptom: </span> <br />{appointment.symptom}</p>
                                <button
                                    className="btn btn-danger">Delete &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListAppointments;