console.warn('CV Screener');

const data = [
    {
        name: 'Terminator',
        age: 20,
        city: 'Kolkata',
        lang: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Natasha',
        age: 21,
        city: 'Delhi',
        lang: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        name: 'Karry',
        age: 26,
        city: 'Mumbai',
        lang: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/10.jpg'
    },
    {
        name: 'Rummy',
        age: 42,
        city: 'Goa',
        lang: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/21.jpg'
    },
    {
        name: 'Peter',
        age: 38,
        city: 'Chennai',
        lang: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/19.jpg'
    }
]

function cvIterator(profile) {
    let index = 0;
    return {
        next: function () {
            return index < profile.length ?
                { value: profile[index++], done: false } : { done: true }
        }
    };
}

const btn = document.getElementById('next');
next.addEventListener('click', nextCV);

let candidates = cvIterator(data);
nextCV();

function nextCV() {
    const currentCan = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCan != undefined) {
        image.innerHTML = `<img src="${currentCan.image}"></img>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name : ${currentCan.name}</li>
    <li class="list-group-item">Age : ${currentCan.age}</li>
    <li class="list-group-item">City : ${currentCan.city}</li>
    <li class="list-group-item">Language: ${currentCan.lang}</li>
    <li class="list-group-item">Framework : ${currentCan.framework}</li>
  </ul>`;
    }
    else{
        alert('Applications Ended');
        window.location.reload();
    }
}