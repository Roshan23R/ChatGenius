import React,{useState} from 'react'

const standardMessageForm = () => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");
    return (
        <div className='message-form-container'>
            {preview && (
                <div className='message-form-preview'>
                    <img className='message-form-preview-image' src ={}></img>
                </div>
            )}
        </div>
    )
}

export default standardMessageForm;
