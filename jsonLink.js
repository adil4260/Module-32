const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') //API-এর কাছে request পাঠাচ্ছে।
        .then((response) => response.json()) //API থেকে যে response আসছে, সেটাকে JSON-এ convert করছে।
        .then((data) => console.log(data)); //JSON থেকে পাওয়া data console-এ দেখাচ্ছে।
}