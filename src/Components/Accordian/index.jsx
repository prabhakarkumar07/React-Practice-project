//single selection
//multiple selection

import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const [enableMultiSElection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiselection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSElection)}>
        Enable Multi selection
      </button>
      <div className="accodian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className=" item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSElection
                    ? () => handleMultiselection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSElection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content"> {dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content"> {dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
