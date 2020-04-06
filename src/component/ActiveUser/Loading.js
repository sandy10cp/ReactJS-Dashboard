import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ marginLeft: '180%', marginTop: '80%' }}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading;
