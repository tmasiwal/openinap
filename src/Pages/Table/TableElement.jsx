import React from "react";
import TableRow from "./TableRow";
import "./Table.css"

const TableElement = () => {
  const data = [
    { Links: "www.google.com", Prefix: "prefixsample" },
    { Links: "www.google.com", Prefix: "prefixsample" },
    ,
    { Links: "www.google.com", Prefix: "prefixsample" },
    ,
    { Links: "www.google.com", Prefix: "prefixsample" },
  ];
  return (
    <div style={{widows:"100%"}}>
      <p>Uploads</p>

      <table>
        <thead>
          <tr>
            <th>SI.NO.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
          <tbody>
            {data.map((el, index) => {
              return <TableRow key={index} index={index} el={el} />;
            })}
          </tbody>
      </table>
    </div>
  );
};

export default TableElement;
