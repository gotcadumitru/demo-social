import React, { useState, useRef, useEffect } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {

  let [editMode,setEditMode] = useState(false);
  let [status,setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  };
  useEffect(()=>{
    setStatus(props.status);
  },[props.status])
  const deactivateEditMode = () => {
    props.updateStatus(status);
    setEditMode(false);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };
  return <div>
      {!editMode ? <div>
          <span onDoubleClick={activateEditMode}>{status || "Nema Statusa"}</span>
        </div> : <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
        </div>}


    </div>;
};
export default ProfileStatusWithHooks;