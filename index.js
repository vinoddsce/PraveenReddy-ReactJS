function loadDoc() {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (this.status === 200) {
            let result = JSON.stringify(this.responseText);
            // result = JSON.parse(this.responseText);
            document.getElementById("data").innerHTML = result;
        }
    }

    http.open("GET", "https://jsonplaceholder.typicode.com/todos");
    http.send()

}