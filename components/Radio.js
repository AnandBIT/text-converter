import styles from '../styles/Radio.module.css';

const Radio = ({ name, id = name, value, label, checked, onChange }) => {
	return (
		<div className='relative'>
			<input
				type='radio'
				name={name}
				id={id}
				className={styles.input}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id} className={styles.label}>
				<div className={styles.btn}></div>
				{label}
			</label>
		</div>
	);
};

export default Radio;
