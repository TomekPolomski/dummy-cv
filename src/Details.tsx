import { cvData } from './cvData';

const Details = () => {
	return (
		<section className='cv-details'>
			<h2 className='subheading'>Experience</h2>
			<ul>
				{cvData.experience.map(experience => (
					<li key={experience.year}>
						<strong>{experience.year}</strong> - {experience.description}
					</li>
				))}
			</ul>
			<h2 className='subheading'>Education</h2>
			<ul>
				{cvData.education.map((education, index) => (
					<li key={index}>{education}</li>
				))}
			</ul>
		</section>
	);
};
export default Details;
