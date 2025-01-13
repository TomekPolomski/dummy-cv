interface Experience {
	year: number;
	description: string;
}

interface CVData {
	photo: string;
	name: string;
	lastName: string;
	position: string;
	experience: Experience[];
	education: string[];
}

export const cvData: CVData = {
	photo: 'https://placehold.co/300x300?text=TP',
	name: 'Tommy',
	lastName: 'Polomsky',
	position: 'developer',
	experience: [
		{ year: 2020, description: 'Lorem ipsum' },
		{ year: 2023, description: 'Dolor sit amet' },
		{ year: 2024, description: 'Consectetur adipiscing elit' },
	],
	education: [
		'Phasellus varius risus magna',
		'Duis faucibus quam',
		'Mauris pharetra finibus',
		'Quis hendrerit velit porta',
	],
};
