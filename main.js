const cards = [
    {
        "name": 'Wayne Barnett',
        "role": 'Founder & CEO',
        "img": 'wayne-barnett-founder-ceo.jpg',
    },
    {
        "nome": 'Angela Caroll',
        "role": 'Chief Editor',
        "img": 'angela-caroll-chief-editor.jpg',
    },
    {
        "nome": 'Walter Gordon',
        "role": 'Office Manager',
        "img": 'walter-gordon-office-manager.jpg',
    },
    {
        "nome": 'Angela Lopez',
        "role": 'Social Media Manager',
        "img": 'angela-lopez-social-media-manager.jpg',
    },
    {
        "nome": 'Scott Estrada',
        "role": 'Developer',
        "img": 'scott-estrada-developer.jpg',
    },
    {
        "nome": 'Barbara Ramos',
        "ruolo": 'Graphic Designer',
        "img": 'barbara-ramos-graphic-designer.jpg',
    }
]

const ContainerTeam = document.querySelector('.team-container')
const Btn = document.getElementById('addMemberButton')


for (let i = 0; i < cards.length; i++) {
    createCards(cards[i])
};


Btn.addEventListener('click', function(){
    const object = {
        "nome": document.getElementById('name').value,
        "role": document.getElementById('role').value,
        "img": document.getElementById('image').value,
    }
    createCards(object)
    document.getElementById('name').value = ''
    document.getElementById('role').value = ''
    document.getElementById('image').value = ''
});


function createCards(obj) {
    ContainerTeam.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${obj.img}"
            alt="${obj.nome}"/>
        </div>
        <div class="card-text">
            <h3>${obj.nome}</h3>
            <p>${obj.role}</p>
        </div>
    </div>`
};