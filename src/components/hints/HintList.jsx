import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hintList.css';

const HintList = () => {
    const [hintLists, setHintLists] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        const fetchHintLists = async () => {
            try {
                const response = await axios.get('http://localhost:8070/hint/get');
                setHintLists(response.data);
            } catch (error) {
                console.error('Error fetching hint lists', error);
            }
        };

        fetchHintLists();
    }, []);

    const handleEdit = (id) => {
        setEditingId(id);
        setEditingText(''); // Set the editing text to an empty string
    };

    const handleSave = async () => {
        const updatedHintList = hintLists.find(hintList => hintList.id === editingId);
        const existingComments = updatedHintList.hintList.split(' | ')[1] || '';
        const updatedText = updatedHintList.hintList.split(' | ')[0] + ' | ' + existingComments + (existingComments ? '<br />' : '') + editingText;

        try {
            await axios.patch(`http://localhost:8070/hint/update/${editingId}`, { hintList: updatedText });
            setHintLists(hintLists.map(hintList => hintList.id === editingId ? { ...hintList, hintList: updatedText } : hintList));
            setEditingId(null);
            setEditingText('');
        } catch (error) {
            console.error('Error updating hint list', error);
        }
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/hint/delete/${id}`);
            setHintLists(hintLists.filter(hintList => hintList.id !== id));
        } catch (error) {
            console.error('Error deleting hint list', error);
        }
    };

    return (
        <div className="background">
             <h1 className="heading"> Swine and Shine Top Handy Hints Lists</h1>
             <br/>
             <h2 className="heading"> Squeal with delight! Share your money-saving tips in the comments.</h2>
             <br/>
            <div className="hint-list-container">
                {hintLists.map((hintList, index) => (
                    <div key={index} className="hint-list-card">
                        <h2 className="hint-list-title">Hint List {index + 1}</h2>
                        {editingId === hintList.id ? (
                            <div>
                                <textarea rows="5" cols="50" value={editingText} onChange={e => setEditingText(e.target.value)} />
                                <button onClick={handleSave}>Save</button>
                            </div>
                        ) : (
                            <>
                               <ul className="hint-list-content">
                                    {hintList.hintList.split(' | ')[0].split(', ').map((hint, hintIndex) => (
                                        <li key={hintIndex}>{hint}</li>
                                    ))}
                                </ul>
                                {hintList.hintList.split(' | ')[1] && (
                                  <>
                                  <h4>Comments:</h4> {/* Add this line */}
                                  <h5 className="user-comment" dangerouslySetInnerHTML={{ __html: hintList.hintList.split(' | ')[1] }} />
                              </>
                                )}
                            </>
                        )}
                        <button className= "button" onClick={() => handleEdit(hintList.id)}>Leave a Comment</button>

                        <button className= "button" onClick={() => handleDelete(hintList.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HintList;