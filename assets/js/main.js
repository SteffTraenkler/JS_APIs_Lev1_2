// fetch('https://picsum.photos/v2/list')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         json.forEach(ele => {
//             let figure = document.createElement('figure');
//             document.body.appendChild(figure);
//             let img = document.createElement('img');
//             img.src = ele.download_url;
//             let figcaption = document.createElement('figcaption');
//             figcaption.innerText = ele.author;
//             let a = document.createElement('a');
//             a.href = ele.url;
//             a.target = '_blank';
//             a.innerText = 'See More';
//             figure.appendChild(img);
//             figure.appendChild(figcaption);
//             figure.appendChild(a);
//         });
//     });


//-> the MUCH shorter version!!! (but the lesson wanted the use of appendChild)
fetch('https://picsum.photos/v2/list?page=2&limit=100')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        json.forEach(ele => {
            document.body.innerHTML += `<figure>
            <img src="${ele.download_url}">
            <figcaption>${ele.author}</figcaption>
            <a href='${ele.url}' target='_blank'>See More</a>
        </figure>`
        });
    });


