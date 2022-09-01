import styles from '../styles/ConversionInput.module.css';
import Radio from './Radio';
import { useState } from 'react';

const conversionDetails = [
	{
		name: 'convert',
		id: 'UPPERCASE',
		value: 'UPPERCASE',
		label: 'Convert text to uppercase',
	},
	{
		name: 'convert',
		id: 'LOWERCASE',
		value: 'LOWERCASE',
		label: 'Convert text to lowercase',
	},
	{
		name: 'convert',
		id: 'ENCODE_BASE64',
		value: 'ENCODE_BASE64',
		label: 'Encode Base64',
	},
	{
		name: 'convert',
		id: 'DECODE_BASE64',
		value: 'DECODE_BASE64',
		label: 'Decode Base64',
	},
];

const ConversionInput = ({ conversion, convert }) => {
	const [text, setText] = useState(conversion.text);
	const [conversionType, setConversionType] = useState(conversion.type);

	return (
		<>
			<h3 className='text-black text-2xl font-bold sm:text-xl'>
				Text to be converted:
			</h3>
			<textarea
				name='conversionText'
				id='conversionText'
				cols='30'
				rows='5'
				className={styles.textBox}
				placeholder='What needs to be converted'
				value={text}
				onChange={(e) => setText(e.target.value)}
			></textarea>
			<div className='grid gap-2 ml-2'>
				{conversionDetails.map(({ name, id, value, label }) => {
					return (
						<Radio
							name={name}
							id={id}
							value={value}
							label={label}
							checked={value === conversionType ? true : false}
							onChange={(e) => setConversionType(e.target.value)}
							key={id}
						/>
					);
				})}
			</div>
			<button
				className={styles.btn}
				onClick={() => convert({ edit: false, text: text, type: conversionType })}
			>
				SUBMIT
			</button>
		</>
	);
};

export default ConversionInput;
