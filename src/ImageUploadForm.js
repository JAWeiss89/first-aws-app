import React, {useState} from 'react';
import keys from './config.json'
// import {uploadFile} from 'react-s3'
import aws from 'aws-sdk'


const ImageUploadForm = () => {

    let [upload, setUpload] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(upload);
        // uploadFile(upload, config)
        //     .then(data => console.log({data}))
        //     .catch(err => console.error(err));
        s3.putObject({config}, function(err, data) {
            if (err) {
                console.log("Error on image upload")
              } else {
                console.log({data})
              }
        })
    }
    
    const handleChange = (event) => {
        setUpload(event.target.files[0]);
    }

    const config = {
        bucketName: 'imagestest07',
        dirName: 'Photos', 
        region: 'us-east-2',
        accessKeyId: keys.accessKeyId,
        secretAccessKey: keys.secretAccessKey,
      }
    
    const s3 = new aws.S3();
    
    return (
        <div className="ImageUploadForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="image-upload">Image Upload: </label>
                <input type="file" id="image-upload"  onChange={handleChange} />
                <button>Upload!</button>
            </form>
        </div>
    )
}

export default ImageUploadForm;