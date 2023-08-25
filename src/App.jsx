import { useState } from 'react';

const PrototypeForm = () => {
	const [formValues, setFormValues] = useState({
		key1: 'Barbara',
		key2: 'Hepworth',
		key3: 'bhepworth@react.com',
		key4: 'love cats'
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value
		}));
	};

	return (
		<div>
			<label htmlFor="key1">Name:</label>
			<input type="text" id="key1" name="key1" value={formValues.key1} onChange={handleChange} />
			<br />
			<label htmlFor="key2">Last Name:</label>
			<input type="text" id="key2" name="key2" value={formValues.key2} onChange={handleChange} />
			<br />
			<label htmlFor="key3">Email:</label>
			<input type="text" id="key3" name="key3" value={formValues.key3} onChange={handleChange} />
			<br />
			<label htmlFor="key4">Like:</label>
			<input type="text" id="key4" name="key4" value={formValues.key4} onChange={handleChange} />
			<br />
			<div>
				<h3>Данные</h3>
				<p>Name: {formValues.key1}</p>
				<p>Last Name: {formValues.key2}</p>
				<p>Email: {formValues.key3}</p>
				<p>Like: {formValues.key4}</p>
			</div>
		</div>
	);
};

export default PrototypeForm;