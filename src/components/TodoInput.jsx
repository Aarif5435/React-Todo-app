import "./style.css";

export const TodoInput = ({ setValue, val, data }) => {
  return (
    <div className="input-div">
      <input
        value={val}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            if (val == "") {
              alert("Add items please");
            } else {
              data();
            }
          }
        }}
        className="input-tag"
        type="text"
        placeholder="Add a Item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (val == "") {
            alert("Add items please");
          } else {
            data();
          }
        }}
        className="btn-tag"
      >
        +
      </button>
    </div>
  );
};
