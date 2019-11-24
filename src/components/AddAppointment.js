import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointmentAction } from '../actions/appointmentActions';
import { validateFormAction } from '../actions/validateActions';
import uuid from 'uuid/v4';

const AddAppointment = () => {

    // component state
    const [pet, savePet] = useState('');
    const [owner, saveOwner] = useState('');
    const [date, saveDate] = useState('');
    const [time, saveTime] = useState('');
    const [symptom, saveSymptom] = useState('');

    // dispatch for execute the actions
    const dispatch = useDispatch();
    const addNewAppointment = (appointment) => dispatch(addAppointmentAction(appointment));
    const validateForm = (state) => dispatch(validateFormAction(state));

    // useSelector is equivalent to mapStateToProps in Hooks
    const error = useSelector((state) => state.error);

    console.log(error);

    // when the form is send
    const submitNewAppointment = e => {
        e.preventDefault();

        // validate the form
        // trim delete the empty spaces
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === '') {
            validateForm(true);
            return;
        }

        validateForm(false);

        // create the new appointment
        addNewAppointment({
            id: uuid(),
            pet,
            owner,
            date,
            time,
            symptom
        })

        // store in the state and restart the form
        savePet('');
        saveOwner('');
        saveDate('');
        saveTime('');
        saveSymptom('');
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Add appointments here</h2>
                <form onSubmit={submitNewAppointment}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pet Name"
                                value={pet}
                                onChange={e => savePet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Owner Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pet Owner Name"
                                value={owner}
                                onChange={e => saveOwner(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input
                                type="date"
                                className="form-control"
                                value={date}
                                onChange={e => saveDate(e.target.value)}
                            />
                        </div>
                        <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="time"
                                className="form-control"
                                value={time}
                                onChange={e => saveTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Symptom</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                value={symptom}
                                onChange={e => saveSymptom(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Add</button>
                        </div>
                    </div>
                </form>
                {error.error ? <div className="alert alert-danger text-center p2">All fields are required</div> : null}
            </div>
        </div>
    );
}

export default AddAppointment;