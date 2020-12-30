import React, {useState} from 'react';


const ImageUploadForm = () => {
    let [upload, setUpload] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(upload);
    }
    
    const handleChange = (event) => {
        setUpload(event.target.value);
    }


    return (
        <div className="ImageUploadForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="image-upload">Image Upload: </label>
                <input type="file" id="image-upload" value={upload} onChange={handleChange} />
                <button>Upload!</button>
            </form>
        </div>
    )
}

export default ImageUploadForm;