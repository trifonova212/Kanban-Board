import { useState } from "react";
import { Link } from "react-router-dom";
import { LIST_TYPES } from "../../config";
import FormAddNewTask from "../forms/FormAddNewTask";
import css from "./List.module.css";
import SelectCard from "./selectCard/SelectCard"
import Scrollbars from "react-custom-scrollbars-2";

const List = (props) => {

    const { title, type, tasks, addNewTask, allTasks, setTasks } = props;
    const [isFormVisible, setFormVisible] = useState(false);
    const [isSelectVisible, setSelectVisible] = useState(false);

    const handleAddNewClick = () => {
        setFormVisible(!isFormVisible);
    };

    const handleSelectClick = () => {
        setSelectVisible(!isSelectVisible);
    };

    const handleSelectChange = (e) => {
        const updatedTasks = allTasks.map((task) => {
            if (task.id === e.target.value) {
                return { ...task, status: type };
            }
        return task;
        });
    setTasks(updatedTasks);
    };

    const handleClick = () => {
        setSelectVisible(false);
    };

    const selectCardProps = {
        tasks: allTasks,
        onClick: handleClick,
        onChange: handleSelectChange,
        changeStatus:
            type === LIST_TYPES.READY
            ? "backlog"
            : type === LIST_TYPES.IN_PROGRESS
            ? "ready"
            : type === LIST_TYPES.FINISHED
            ? "inProgress"
            : "",
    };

    return (
        <div className={css.list}>
            <Scrollbars className={css.scroll} autoHide autoHeight autoHeightMax={700}>
                <h2 className={css.listTitle}>{title}</h2>
                {tasks.map((task) => (
                    <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                    <div className={css.task}>{task.title}</div>
                    </Link>
                ))}

        {type === LIST_TYPES.BACKLOG 
            ?   <button className={css.addButton} onClick={handleAddNewClick}>
                {isFormVisible ? '' : '+ Add card'}
                </button> 
            :   <button className={css.addButton} onClick={handleSelectClick}>
                {isSelectVisible ? '' : '+ Add card'}
                </button>
         }
            </Scrollbars>

        {type === LIST_TYPES.BACKLOG && isFormVisible && (
            <FormAddNewTask
            addNewTask={addNewTask}
            setFormVisible={setFormVisible}
            />
        )}
      
        {type !== LIST_TYPES.BACKLOG && isSelectVisible && (
            <SelectCard {...selectCardProps} />
        )}
    </div>
    );
};

export default List;