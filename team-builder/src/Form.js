import React, { useState } from 'react';

export default function Form (props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a Team Member!</h2>
                <button>Submit</button>
            </div>

            <div>
                <h4>General Information</h4>
                <label>Name:
                    <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onInputChange}
                    maxLength='100'
                    />
                </label>
                <label htmlFor='emailInput'>Email:
                    <input
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <label>Role:
                    <select
                        name="role"
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select a Role --</option>
                        <option value='Full Stack Web Developer'>Full Stack Web Developer</option>
                        <option value='JavaScript React Developer'>JavaScript React Developer</option>
                        <option value='Back End Engineer'>Back End Engineer</option>
                    </select>
                    </label>
            </div>
        </form>
    )
};