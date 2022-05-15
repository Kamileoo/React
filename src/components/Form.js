import React, {useState} from "react";

const Form = ({movieDB, setMovieDB}) => {
    const [nameText, setNameText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const [imagePrev, setImagePrev] = useState(null);
    const [ratingVal, setRatingValue] = useState("1");

    const submitHandler = (e) => {
        e.preventDefault();
        if (nameText==="" || descriptionText==="" || imagePrev===null) {
            return;
        }

        let lastID = 0;
        if (movieDB.length > 0) {
            lastID = movieDB[movieDB.length - 1].id + 1;
        };
        // setImagePrev(URL.createObjectURL(imagePath));
        setMovieDB([
            ...movieDB, {id: lastID, name: nameText, description: descriptionText, image: imagePrev, rating: ratingVal}
        ]);
    };

    return (
        <form className="form-box">
            <input value={nameText} onChange={(e) => setNameText(e.target.value)} type="text" placeholder="Movie name" className="name_input field" />
            <input value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)} type="text" placeholder="Description" className="des_input field"/>
            <input onChange={(e) => setImagePrev(URL.createObjectURL(e.target.files[0]))} type="file" placeholder="Image" className="img_input" />
            {/* <input onChange={(e) => setImagePath(e.target.files[0])} type="file" placeholder="Image" className="img_input" /> */}
            <select value={ratingVal} onChange={(e) => setRatingValue(e.target.value)} name="ratings" className="ratings-choose chooser">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={submitHandler} className="add_button addButton">Add</button>
        </form>
    );
};

export default Form;