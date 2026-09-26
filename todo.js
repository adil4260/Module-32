const todopost = () => {
    url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            todoDisplayPost(data);
        })
}
// completed: false
// id: 1
// title: "delectus aut autem"
// userId: 1
const todoDisplayPost = (posts) => {
    todoPostContainer = document.getElementById("todo-container")
    posts.forEach((post) => {
        console.log(post)
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class="todo-card">
              <p>${post.completed == true
                ? `<i class="fa-solid fa-square-check"></i>`
                : `<i class="fa-regular fa-square-check"></i>`
            } </p>
          <h4>${post.title}</h4>
        </div>
        `;
        todoPostContainer.append(todoCard)
    });
}
todopost();
