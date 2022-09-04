import React, { useState } from "react";

import './css/FileUploadStyle.css'
function FileUpload() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="FileUpload mt-4">
			<input type="file" onChange={handleChange}  accept="image/*" name="course_image"/>
			<img src={file} className='inputimg'/>

		</div>

	);
}

export default FileUpload;
