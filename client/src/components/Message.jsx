import React, { useEffect, useState } from 'react';

const Message = ({ match }) => {
    const [content, setContent] = useState('AA');

    const handleChange = e => setContent(e.target.value);

    return (
        <div>
            <h1>Write Something</h1>
            <div>
                <p>{content}</p>
                <textarea value={content} onChange={handleChange}></textarea>
            </div>
        </div>
    )
};

export default Message;