import React from 'react'
import { useDispatch } from "react-redux";
import { alertActions } from '../store/alertSlice';

const Home = () => {
    const dispatch = useDispatch();
    const displayAlert = () => {
        console.log("here")
        dispatch(alertActions.displayAlert({ title: "Sample alert", message: "This is how the alert looks", danger: true }));
      }
    return (
        <div>
            <h1>Home</h1>
            <button id="responsive-expand-button" className="btn btn-danger" type="button" onClick={displayAlert}>
            ⚠
          </button>
        </div>
    )
}

export default Home
