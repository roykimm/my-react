import React , { useState , useEffect }from 'react'

function FileTest() {

    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");

    const newBook = () => {
        const uploadData = new FormData();
        uploadData.append('title', title);
        uploadData.append('cover', cover, cover.name);

        fetch('http://127.0.0.1:8000/api/books/', 
            {
                method : 'POST',
                body: uploadData,
                headers : {
                    //"Content-Type":"multipart/form-data",
                    // "Access-Control-Allow-Origin" : "*",
                    // "Access-Control-Request-Headers" : "Content-Type, x-requested-with",
                    // "Access-Control-Allow-Headers" : "Content-Type",
                    // "type": "formData"
                }
            }
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <div className="filetest">
            <h3>Upload images with react</h3>
            <label htmlFor="">
                Title
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </label>
            <br />
            <label htmlFor="">
                Cover
                <input 
                    type="file"
                    onChange={(e) => setCover(e.target.files[0])}
                />
            </label>
            <br />
            <button onClick={newBook}>New Book</button>
        </div>
    )
}

export default FileTest;