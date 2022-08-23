import React, { useState, useEffect, useRef } from 'react';
// import {CheckSquare, Clock, MoreHorizontal,Calendar,List,Tag,Trash,Type,X, } from "react-feather";

import './styles/board.css';

function Board(PropTypes) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="board">
            <div className="board_header">
                <p className="board_header_title">
                    {PropTypes.board?.title}
                    <span>{PropTypes.board?.cards?.length || 0}</span>
                </p>
                <div className="board_header_title_more" onClick={() => setShowDropdown(true)}>
           
            {showDropdown && (
              <Dropdown
               class="board_dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => PropTypes.removeBoard()}>Delete Board</p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="board_cards custom-scroll">
          {PropTypes.board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              boardId={PropTypes.board.id}
              removeCard={PropTypes.removeCard}
              dragEntered={PropTypes.dragEntered}
              dragEnded={PropTypes.dragEnded}
              updateCard={PropTypes.updateCard}
            />
          ))}
          <Editable
            text="+ Add Card"
            placeholder="Enter Card Title"
            displayClass="board_add-card"
            editClass="board_add-card_edit"
            onSubmit={(value) => PropTypes.addCard(PropTypes.board?.id, value)}
          />
        </div>
      </div>
    );
  }
  
  /**********************************card******************* */
  
  function Card(PropTypes) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    const { id, title, date, tasks, labels } = PropTypes.card;
  
    const formatDate = (value) => {
      if (!value) return "";
      const date = new Date(value);
      if (!date) return "";
  
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Aprl",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
  
      const day = date.getDate();
      const month = months[date.getMonth()];
      return day + " " + month;
    };
  
    return (
      <>
        {showModal && (
          <CardInfo
            onClose={() => setShowModal(false)}
            card={PropTypes.card}
            boardId={PropTypes.boardId}
            updateCard={PropTypes.updateCard}
          />
        )}
        <div
          className="card"
          draggable
          onDragEnd={() => PropTypes.dragEnded(PropTypes.boardId, id)}
          onDragEnter={() => PropTypes.dragEntered(PropTypes.boardId, id)}
          onClick={() => setShowModal(true)}
        >
          <div className="card_top">
            <div className="card_top_labels">
              {labels?.map((item, index) => (
                <label key={index} style={{ backgroundColor: item.color }}>
                  {item.text}
                </label>
              ))}
            </div>
            <div
              className="card_top_more"
              onClick={(event) => {
                event.stopPropagation();
                setShowDropdown(true);
              }}
            >
              {/* <MoreHorizontal /> */}
              {showDropdown && (
                <Dropdown
                  class="board_dropdown"
                  onClose={() => setShowDropdown(false)}
                >
                  <p onClick={() => PropTypes.removeCard(PropTypes.boardId, id)}>
                    Delete Card
                  </p>
                </Dropdown>
              )}
            </div>
          </div>
          <div className="card_title">{title}</div>
          <div className="card_footer">
            {date && (
              <p className="card_footer_item">
              
                {formatDate(date)}
              </p>
            )}
            {tasks && tasks?.length > 0 && (
              <p className="card_footer_item">
                
                {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
  
  /*********************Card info******************************* */
  function CardInfo(PropTypes) {
    const colors = [
      "#a8193d",
      "#4fcc25",
      "#1ebffa",
      "#8da377",
      "#9975bd",
      "#cf61a1",
      "#240959",
    ];
  
    const [selectedColor, setSelectedColor] = useState();
    const [values, setValues] = useState({
      ...PropTypes.card,
    });
  
    const updateTitle = (value) => {
      setValues({ ...values, title: value });
    };
  
    const updateDesc = (value) => {
      setValues({ ...values, desc: value });
    };
  
    const addLabel = (label) => {
      const index = values.labels.findIndex((item) => item.text === label.text);
      if (index > -1) return;
  
      setSelectedColor("");
      setValues({
        ...values,
        labels: [...values.labels, label],
      });
    };
  
    const removeLabel = (label) => {
      const tempLabels = values.labels.filter((item) => item.text !== label.text);
  
      setValues({
        ...values,
        labels: tempLabels,
      });
    };
  
    const addTask = (value) => {
      const task = {
        id: Date.now() + Math.random() * 2,
        completed: false,
        text: value,
      };
      setValues({
        ...values,
        tasks: [...values.tasks, task],
      });
    };
  
    const removeTask = (id) => {
      const tasks = [...values.tasks];
  
      const tempTasks = tasks.filter((item) => item.id !== id);
      setValues({
        ...values,
        tasks: tempTasks,
      });
    };
  
    const updateTask = (id, value) => {
      const tasks = [...values.tasks];
  
      const index = tasks.findIndex((item) => item.id === id);
      if (index < 0) return;
  
      tasks[index].completed = value;
  
      setValues({
        ...values,
        tasks,
      });
    };
  
    const calculatePercent = () => {
      if (!values.tasks?.length) return 0;
      const completed = values.tasks?.filter((item) => item.completed)?.length;
      return (completed / values.tasks?.length) * 100;
    };
  
    const updateDate = (date) => {
      if (!date) return;
  
      setValues({
        ...values,
        date,
      });
    };
  
    useEffect(() => {
      if (PropTypes.updateCard) PropTypes.updateCard(PropTypes.boardId, values.id, values);
    }, [values]);
  
    return (
      <Modal onClose={PropTypes.onClose}>
        <div className="cardinfo">
          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              {/* <Type /> */}
              <p>Title</p>
            </div>
            <Editable
              defaultValue={values.title}
              text={values.title}
              placeholder="Enter Title"
              onSubmit={updateTitle}
            />
          </div>
  
          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
           
              <p>Description</p>
            </div>
            <Editable
              defaultValue={values.desc}
              text={values.desc || "Add a Description"}
              placeholder="Enter description"
              onSubmit={updateDesc}
            />
          </div>
  
          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
             
              <p>Date</p>
            </div>
            <input
              type="date"
              defaultValue={values.date}
              min={new Date().toISOString().substr(0, 10)}
              onChange={(event) => updateDate(event.target.value)}
            />
          </div>
  
          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              
              <p>Labels</p>
            </div>
            <div className="cardinfo_box_labels">
              {values.labels?.map((item, index) => (
                <label
                  key={index}
                  style={{ backgroundColor: item.color, color: "#fff" }}
                >
                  {item.text}
                 
                </label>
              ))}
            </div>
            <ul>
              {colors.map((item, index) => (
                <li
                  key={index + item}
                  style={{ backgroundColor: item }}
                  className={selectedColor === item ? "li_active" : ""}
                  onClick={() => setSelectedColor(item)}
                />
              ))}
            </ul>
            <Editable
              text="Add Label"
              placeholder="Enter label text"
              onSubmit={(value) =>
                addLabel({ color: selectedColor, text: value })
              }
            />
          </div>
  
          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
            
              <p>Tasks</p>
            </div>
            <div className="cardinfo_box_progress-bar">
              <div
                className="cardinfo_box_progress"
                style={{
                  width: `${calculatePercent()}%`,
                  backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
                }}
              />
            </div>
            <div className="cardinfo_box_task_list">
              {values.tasks?.map((item) => (
                <div key={item.id} className="cardinfo_box_task_checkbox">
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={(event) =>
                      updateTask(item.id, event.target.checked)
                    }
                  />
                  <p className={item.completed ? "completed" : ""}>{item.text}</p>
                  {/* <onClick={() => removeTask(item.id)} /> */}
                </div>
              ))}
            </div>
            <Editable
              text={"Add a Task"}
              placeholder="Enter task"
              onSubmit={addTask}
            />
          </div>
        </div>
      </Modal>
    );
  }
  
  /***********************Dropdown****************** */
  function Dropdown(PropTypes) {
    const dropdownRef = useRef();
  
    const handleClick = (event) => {
      if (
        dropdownRef &&
        !dropdownRef.current?.contains(event.target) &&
        PropTypes.onClose
      )
        PropTypes.onClose();
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  
    return (
      <div
        ref={dropdownRef}
        className={`dropdown custom-scroll ${PropTypes.class ? PropTypes.class : ""}`}
      >
        {PropTypes.children}
      </div>
    );
  }
  
  
  /*******************************Editable************************* */
  function Editable(PropTypes) {
    const [isEditable, setIsEditable] = useState(false);
    const [inputText, setInputText] = useState(PropTypes.defaultValue || "");
  
    const submission = (e) => {
      e.preventDefault();
      if (inputText && PropTypes.onSubmit) {
        setInputText("");
        PropTypes.onSubmit(inputText);
      }
      setIsEditable(false);
    };
  
    return (
      <div className="editable">
        {isEditable ? (
          <form
            className={`editable_edit ${PropTypes.editClass ? PropTypes.editClass : ""}`}
            onSubmit={submission}
          >
            <input
              type="text"
              value={inputText}
              placeholder={PropTypes.placeholder || PropTypes.text}
              onChange={(event) => setInputText(event.target.value)}
              autoFocus
            />
            <div className="editable_edit_footer">
              <button type="submit">{PropTypes.buttonText || "Add"}</button>
              {/* <X onClick={() => setIsEditable(false)} className="closeIcon" /> */}
            </div>
          </form>
        ) : (
          <p
            className={`editable_display ${
              PropTypes.displayClass ? PropTypes.displayClass : ""
            }`}
            onClick={() => setIsEditable(true)}
          >
            {PropTypes.text}
          </p>
        )}
      </div>
    );
  }
  
  
  /*******************Model************************** */
 function Modal(PropTypes) {
    return (
      <div
        className="modal"
        onClick={() => (PropTypes.onClose ? PropTypes.onClose() : "")}
      >
        <div
          className="modal_content custom-scroll"
          onClick={(event) => event.stopPropagation()}
        >
          {PropTypes.children}
        </div>
      </div>
    );
}
/******************************************Create********************* */
function Create() {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <div className="app">
     
      <div className="app_boards_container">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
            />
          ))}
          <div className="app_boards_last">
            <Editable
              displayClass="app_boards_add-board"
              editClass="app_boards_add-board_edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



export {Board,Editable};

