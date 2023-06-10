import css from "./SelectCard.module.css";

function SelectCard(props) {

    const { changeStatus, onChange, tasks, onClick} = props;

    return (
        <div>
            <select className={css.select} onChange={onChange}>
                <option className={css.option}>Select a task</option>
                {tasks
                .filter((task) => task.status === changeStatus)
                .map((task) => {
                    return (
                        <option key={task.id} className={css.option} value={task.id}>
                            {task.title}
                        </option>
                    );
                })}
            </select>
            <button className={css.hide} onClick={onClick}>Hide</button>
        </div>
    );
}
  
export default SelectCard