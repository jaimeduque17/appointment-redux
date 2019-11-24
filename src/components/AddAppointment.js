import React, { useState } from 'react';

const AddAppointment = () => {

    // component state
    const [pet, savePet] = useState('');
    const [owner, saveOwner] = useState('');
    const [date, saveDate] = useState('');
    const [time, saveTime] = useState('');
    const [symptom, saveSymptom] = useState('');

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Add appointments here</h2>
                <form>
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
            </div>
        </div>
    );
}

export default AddAppointment;