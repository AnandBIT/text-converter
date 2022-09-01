import converter from '../utils/converter';

const ConversionOutput = ({ conversion, convert }) => {
	return (
		<>
			<h3 className='text-black text-2xl font-bold'>Converted text is:</h3>
			<div className='bg-grey-light p-4' style={{ overflowWrap: 'anywhere' }}>
				{converter(conversion)}
			</div>
			<div className='flex'>
				<button
					className='underline mr-3'
					onClick={() => convert((prevState) => ({ ...prevState, edit: true }))}
				>
					Edit
				</button>
				<button
					className='underline'
					onClick={() => convert({ edit: true, text: '', type: 'UPPERCASE' })}
				>
					Convert More
				</button>
			</div>
		</>
	);
};

export default ConversionOutput;
