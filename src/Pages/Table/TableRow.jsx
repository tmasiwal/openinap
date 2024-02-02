import React, { useState } from "react";

const TableRow = ({ index,el }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tag, setTag] = useState("");

  const handleTagChange = (event) => {
    const selectedTag = event.target.value;

    // If the tag is not already in the selectedTags array, add it
    if (!selectedTags.includes(selectedTag) && selectedTag !== "") {
      setSelectedTags([...selectedTags, selectedTag]);
    }


    // Update the current selected tag
    setTag(selectedTag);
  };

  const handleRemoveTag = (selectedTag) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== selectedTag));
  };

  return (
    <tr>
      <td>{index < 10 ? `0${index+1}` : index+1}</td>
      <td>{el.Links}</td>
      <td>{el.Prefix}</td>
      <td>
        <select value={tag} onChange={handleTagChange}>
          <option value="">Select Tags</option>
          <option value="TAG 1 x">Tag 1</option>
          <option value="TAG 2 x">Tag 2</option>
          <option value="TAG 3 x">Tag 3</option>
          <option value="TAG 4 x">Tag 4</option>
          <option value="TAG 5 x">Tag 5</option>
          <option value="TAG 6 x">Tag 6</option>
          <option value="TAG 7 x">Tag 7</option>
        </select>
      </td>
      <td>
        <div className="td-div">
    
          <ul>
            {selectedTags.map((selectedTag, index) => (
              <li key={index} onClick={() => handleRemoveTag(selectedTag)}>
                {selectedTag}
              </li>
            ))}
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
