function checkResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export function getData() {
    return fetch('http://localhost:8081/productTypes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    })
    .then((res) => {
        return checkResponse(res);
    });
};