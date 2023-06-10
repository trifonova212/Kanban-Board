import {LIST_TYPES} from '../../config'
import css from './Footer.module.css'

const Footer = props => {

const {tasks} = props;

	function getTaskCount(status) {
		const listCount = tasks.filter(task => task.status === status);
		return listCount.length;
	};

	return (
		<footer className={css.footer}>
			<div className={css.counts}>
			<div className={css.count}>
				Active task: {getTaskCount(LIST_TYPES.BACKLOG) || '0'}
			</div>
            <div>
				Finished task: {getTaskCount(LIST_TYPES.FINISHED) || '0'}
			</div>
			</div>
			<div className={css.copy}>
				Kanban board by Kate, 2023
			</div>
		</footer>
	)
}

export default Footer