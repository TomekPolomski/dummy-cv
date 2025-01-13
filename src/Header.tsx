import { cvData } from './cvData';

const Header = () => {
	return (
		<header className='cv-header'>
			<h1>
				{cvData.name} {cvData.lastName} 'CV
			</h1>
		</header>
	);
};
export default Header;
