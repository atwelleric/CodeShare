import React from 'react';
import './codeForm.css';
function codeForm(props) {
	return (
		<form
			className='code-form'
			encType='multipart/form-data'
			onSubmit={props.handleSubmit}>
			<label className='label' htmlFor='title'>
				Title
			</label>
			<input
				className='title-input'
				type='text'
				placeholder='Code Title'
				value={props.code.title}
				onChange={props.handleChange}
				required
				id='title'
				name='title'
			/>

			<label className='label' htmlFor='body'>
				Code
			</label>
			<textarea
				className='code-input'
				rows='25'
				value={props.code.body}
				onChange={props.handleChange}
				placeholder='Code'
				name='body'
				id='body'
			/>

			<label className='label' htmlFor='description'>
				Description
			</label>
			<textarea
				className='description-input'
				value={props.code.description}
				onChange={props.handleChange}
				placeholder='Code Description'
				name='description'
				id='description'
			/>

				<label className='label' htmlFor='image'>
					Image
				</label>
			<div className='image-input'>
				<input
					className='image'
					type='file'
					onChange={props.handleChange}
					placeholder='Code image'
					accept='image/*'
					name='img'
					id='img'
				/>
			</div>

			{props.containsImage && <p className='image-added'>Image Added!</p>}

			{props.notLoggedIn && <p className='not-login'>You must be logged in</p>}

			<button className='submit-button' type='submit'>
				Submit
			</button>
		</form>
	);
}

export default codeForm;
