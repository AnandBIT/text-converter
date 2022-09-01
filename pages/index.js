import { useState } from 'react';
import ConversionInput from '../components/ConversionInput';
import ConversionOutput from '../components/ConversionOutput';
import styles from '../styles/App.module.css';

function App() {
	const [conversion, convert] = useState({ edit: true, text: '', type: 'UPPERCASE' });

	return (
		<div className={styles.app}>
			<div className={styles.box}>
				<h1 className='text-black text-center text-5xl mb-10 font-semibold md:text-4xl sm:text-3xl'>
					Text Converter
				</h1>
				<div className='grid gap-4'>
					{conversion.edit ? (
						<ConversionInput conversion={conversion} convert={convert} />
					) : (
						<ConversionOutput conversion={conversion} convert={convert} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
