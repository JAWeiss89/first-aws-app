import './App.css';
import { useEffect, useState } from 'react';
import ImageUploadForm from './ImageUploadForm';
import keys from "./config.json";
import aws from 'aws-sdk';



function App() {
  const [bucketContents, setBucketContents] = useState(null);

  useEffect(() => {
    async function getPicture() {
    try {
      aws.config.setPromisesDependency();
      aws.config.update({
        accessKeyId: keys.AccessKeyID,
        secretAccessKey: keys.SecretAccessKey,
        region: 'us-east-2'
      });
  
      const s3 = new aws.S3();
      const response = await s3.listObjectsV2({
        Bucket: 'imagestest07'
      }, function(err, data) {
        if (err) {
          console.log("Errrror")
        } else {
          console.log(data);
        }
      });
      setBucketContents(response);
      console.log({response})

    } catch(e) {
      console.log("Error!", e);
    }
  }
  
  getPicture()
  
  }, []);

  return (
    <div className="App">
        <h1>Connecting to AWS</h1>
        <p>Images from S3 bucket below</p>
        {bucketContents 
        ? <h2>bucket contents has loaded</h2>
        : <h2>Loading</h2>} 
        <ImageUploadForm />
    </div>
  );
}

export default App;
