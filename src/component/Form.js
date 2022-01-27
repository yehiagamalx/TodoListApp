import React from "react";
import { nanoid } from "nanoid";

function Form({
  inputText,
  setInputText,
  todoitemsAreHere,
  setTodoitemsAreHere,
  setStatus,
  todoCat,
  setTodoCat,
  setCategroies,
  categroies,
  inputCat,
  setInputCat,
  catColor,
  setCatColor,
}) {
  // Lets Create Some Functions!

  // First Function will handle Changes in Input text
  const HandleInputText = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const HandleTodoCat = (event) => {
    // event.preventDefault();
    setTodoCat(event.target.value);
  };

  //Second Function will handle Submit Button
  const HandleSumbit = (event) => {
    event.preventDefault();
    setTodoitemsAreHere([
      ...todoitemsAreHere,
      {
        text: inputText,
        completed: false,
        cat: todoCat,
        id: nanoid(),
        color: detectColor(),
      },
    ]);
    function detectColor() {
      return categroies
        .filter((x) => x.name === todoCat)
        .map((y) => y.color)[0];
    }
  };
  // function StatusHandler
  const StatusHandler = (e) => {
    setStatus(e.target.value);
  };

  // function handle validation
  const isValidCat = (event) => {
    event.preventDefault();
    if (inputCat === "") {
      alert("please type your Cat");
    } else {
      CreateCats(event);
      setInputCat("");
      setCatColor("");
    }
  };

  const isValid = (event) => {
    event.preventDefault();
    if (inputText === "" || todoCat === "") {
      alert("please type your to-do and select Cat");
    } else {
      HandleSumbit(event);
      setInputText("");
      setTodoCat("");
      const inputUnChecked = () => {
        let target = event.target;
        for (let i = 2; i <= categroies.length + 1; i++) {
          target[i].checked = false;
        }
      };
      inputUnChecked();
    }
  };

  // function handle Create categroies

  const HandleinputCat = (event) => {
    event.preventDefault();
    setInputCat(event.target.value);
  };

  const CreateCats = (event) => {
    event.preventDefault();
    setCategroies([
      ...categroies,
      {
        name: inputCat,
        id: nanoid(),
        color: catColor,
      },
    ]);
  };

  const HandleCatColor = (event) => {
    event.preventDefault();
    setCatColor(event.target.value);
  };

  return (
    <div className="the-form">
      {/* here we create categroies */}
      <div>
        <form onSubmit={isValidCat} className="cat-form">
          <input
            type="text"
            placeholder="type your cat"
            value={inputCat}
            onChange={HandleinputCat}
          />
          <input type="color" value={catColor} onChange={HandleCatColor} />
          <button>create</button>
        </form>
      </div>
      {/* here we create categroies */}
      <form onSubmit={isValid}>
        <div className="form-add-item">
          <input
            type="text"
            placeholder="type a task to do"
            onChange={HandleInputText}
            value={inputText}
          />
          {/* div will show categroies */}
          <div className="category-group" onChange={HandleTodoCat}>
            {categroies.map((cat) => (
              <label key={cat.id}>
                <input type="radio" name="action" value={cat.name} />
                {cat.name}
              </label>
            ))}
          </div>
          {/* div will show categroies */}
          <button type="input">Add</button>
        </div>

        <div className="div main-filter">
          <select onChange={StatusHandler}>
            <option>All</option>
            <option>Done</option>
            <option>On List</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
