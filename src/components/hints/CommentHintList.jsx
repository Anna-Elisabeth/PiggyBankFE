import React, { useState } from 'react';
import axios from 'axios';

const CommentHintList = ({ match }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = async () => {
        try {
            await axios.put(`http://localhost:8070/hint/update/${match.params.id}`, { comment });
            setComment('');
        } catch (error) {
            console.error('Error adding comment', error);
        }
    };

    return (
        <div>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default CommentHintList;