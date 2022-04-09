const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

// função assíncrona / receber os gatinhos
const getCats = async () => {
	const data = await fetch(BASE_URL)

	// convertendo pra json
	.then((res) => res.json())

	// verificando se obter um erro
	.catch((e) => console.log(e));

    // pegar o primeiro elemento [0] para obter apenas a URL que nós queremos dele
	return data[0].url;
};


// função assíncrona 
const loadImg = async () => {
	const catImg = document.getElementById('cat');

	// obtendo as imagens dos gatinhos
	catImg.src = `${await getCats()}`
};


// evento do botão para mostrar as imangens
document.getElementById('change-cat').addEventListener('click', loadImg);

// No carregamento da página chamamos a função para resultar uma imagem
window.onload = loadImg();

