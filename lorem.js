const init = () => {
	const nrofParagraphs = 5;
	const minSentences = 3;
	const maxSentences = 7;
	const minWords = 4;
	const maxWords = 10;
	const commaProb = 0.1;

	let field = document.getElementById( 'lorem' );
	// Words.
	const words = [
		'a',
		'ad',
		'adipiscing',
		'adipisicing',
		'aliqua',
		'aliquet',
		'aliquip',
		'amet',
		'anim',
		'arcu',
		'at',
		'auctor',
		'aute',
		'bibendum',
		'blandit',
		'cillum',
		'commodo',
		'consectetur',
		'consequat',
		'convallis',
		'cras',
		'culpa',
		'cupidatat',
		'cursus',
		'deserunt',
		'diam',
		'dictumst',
		'dis',
		'do',
		'dolor',
		'dolore',
		'dui',
		'duis',
		'ea',
		'eget',
		'eiusmod',
		'elementum',
		'elit',
		'enim',
		'esse',
		'est',
		'et',
		'eu',
		'euismod',
		'ex',
		'excepteur',
		'exercitation',
		'facilisis',
		'faucibus',
		'fugiat',
		'gravida',
		'id',
		'in',
		'incididunt',
		'integer',
		'interdum',
		'irure',
		'justo',
		'labore',
		'laboris',
		'laborum',
		'lacus',
		'leo',
		'lobortis',
		'magna',
		'malesuada',
		'massa',
		'mattis',
		'mauris',
		'minim',
		'molestie',
		'mollit',
		'montes',
		'mus',
		'nascetur',
		'nec',
		'neque',
		'nibh',
		'nisi',
		'nisl',
		'non',
		'nostrud',
		'nulla',
		'nunc',
		'occaecat',
		'officia',
		'pariatur',
		'parturient',
		'pharetra',
		'proident',
		'purus',
		'qui',
		'quis',
		'quisque',
		'reprehenderit',
		'ridiculus',
		'sagittis',
		'sapien',
		'sed',
		'sint',
		'sit',
		'sunt',
		'suscipit',
		'tellus',
		'tempor',
		'tincidunt',
		'tortor',
		'turpis',
		'ullamco',
		'ultrices',
		'ultricies',
		'urna',
		'ut',
		'varius',
		'vel',
		'velit',
		'veniam',
		'vitae',
		'viverra',
		'voluptate',
		'volutpat',
		'vulputate',
	];

	let output = '';

	for( let p = 0; p < nrofParagraphs; p++ ) {
		output += '<p>';
		let sentences = [];
		let nrofSentences = minSentences + Math.floor( Math.random() * ( maxSentences - minSentences ) );
		for( let s = 0; s < nrofSentences; s++ ){
			let nrofWords = minWords + Math.floor( Math.random() * ( maxWords - minWords ) );
			let sentenceWords = [];
			for( let w = 0; w < nrofWords; w++ ){
				if( p === 0 && s === 0 && w === 0 ){
					sentenceWords = "Lorem ipsum".split(' ');
					w = 2;
				}
				let random = Math.floor( Math.random() * words.length );
				let word = words[ random ];
				if( w === 0 ){
					word = ucFirst( word );
				}
				if( w > 1 && w < nrofWords-2 && Math.random() < commaProb ){
					word += ',';
				}
				sentenceWords.push( word );
			}
			sentences.push( sentenceWords.join(' ') + '.' );
		}
		output += sentences.join(' ');
		output += '</p>';
	}

	field.innerHTML = output;
}

function ucFirst( input ) {
	return String( input ).charAt(0).toUpperCase() + String( input ).slice(1);
}

document.addEventListener( 'DOMContentLoaded', init, false );
