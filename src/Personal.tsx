import { cvData } from './cvData';

const Personal = () => {
	return (
		<aside className='cv-personal'>
			<h2 className='subheading'>Personal data</h2>
			<div className='img-box'>
				<img
					src={cvData.photo}
					alt={`${cvData.name} ${cvData.lastName} profile photo`}
					className='cv-photo'
				/>
			</div>
			<h2>
				{cvData.name} {cvData.lastName}
			</h2>
			<h3>{cvData.position}</h3>
		</aside>
	);
};
export default Personal;
