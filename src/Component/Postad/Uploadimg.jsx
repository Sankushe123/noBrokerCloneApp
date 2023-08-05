import React,{useState,useRef} from 'react'
import './uploadimg.scss'
import axios from 'axios';

let imgId=0;
const Uploadimg = ({userdata,setUserdata}) => {
    const [uploadimages,setUploadimages] = useState([null]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const inputRef = useRef();

    const handleFileChange = (event) => {
      const files1 = event.target.files;
      setUploadimages(files1);
      const fileUrls = [];
  
      for (let i = 0; i < files1.length; i++) {
        const file = files1[i];
        const fileUrl = URL.createObjectURL(file);
        fileUrls.push(fileUrl);
      }
  
      setSelectedFiles(fileUrls);
    };

    const handleUpload=()=>{
    let newArray = [];
		for (let i = 0; i < uploadimages.length; i++) {
			let formData = new FormData();
			formData.append('file', uploadimages[i]);
			formData.append('upload_preset', 'userPropertyImg');
      axios.post('https://api.cloudinary.com/v1_1/dzmndqvb2/image/upload', formData)
				.then((response) => {
          console.log("Done upload");
          // newArray.push(response.data.url)
          // let urls = [ ...url];
					// urls.push(response.data.url);
					// setUrl({ urls });
          // console.log(url);
          newArray.push(response.data.url)
         
				}).catch((err)=>{
          console.log(err);
        })
        setUserdata({...userdata,newArrayImg:newArray});
        console.log(userdata.newArrayImg);
    }
	};
  return (
    <div className='uploadimgContainer'>
      <div className="imgdisplay">
        {selectedFiles.map((fileURL, index) => (
          <img key={index} src={fileURL} alt={`File ${index}`} />
        ))}
      </div>
      <div className="imgselect">
          <input  type="file" 
          hidden 
          multiple
          ref={inputRef} 
          accept="image/png, image/jpeg"
          onChange= {handleFileChange}/>
          <button className="selectfile"onClick={() => inputRef.current.click()}>Select File</button>
          <button onClick={handleUpload}>upload</button>
      </div> 
      {

      }
    </div>
  )
}

export default Uploadimg;