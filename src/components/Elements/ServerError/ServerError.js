import React from 'react';
import './ServerError.css';

function ServerError({ errorText, isReqDone }) {
  return (
    <p className={isReqDone ? 'server-error' : 'server-error server-error_active'}>{errorText}</p>
  );
}

export default ServerError;
