import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import "./index.css";
function TaskItem(props) {
  const { eachItem, deleteTask, editTask, updatedNoOfTimesEdited } = props;
  const { task_id, task, updatedTimes } = eachItem;
  console.log(task_id);

  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    deleteTask(task_id);
  };

  const handleEdit = () => {
    setEditMode(true);
    updatedNoOfTimesEdited();
  };

  const handleSave = () => {
    editTask(task_id, editedTask);
    setEditMode(false);
    updatedNoOfTimesEdited(task_id);
  };

  return (
    <li>
      <div className="task-item">
        {editMode ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            onBlur={handleSave}
          />
        ) : (
          <>
            <span className="span-tag" style={{ marginRight: "5px" }}>
              {`${task} (updated ${updatedTimes} times)`}
            </span>
            <div>
              <button
                onClick={handleEdit}
                style={{
                  backgroundColor: "transparent",
                  marginRight: "15px",
                  color: "white",
                  border: "none",
                }}
              >
                <MdOutlineModeEdit />
              </button>

              <button
                onClick={handleDelete}
                style={{
                  backgroundColor: "transparent",
                  color: "red",
                  border: "none",
                }}
              >
                X
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
