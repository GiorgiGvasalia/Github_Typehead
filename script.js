const form = document.getElementById("myForm")

// adding event listener for button click and for enter click

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const search = document.getElementById("search").value

    const originalName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    // api connection


    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        // place for display results and inline styling
        // clicking users photo for navigate to github profile

        document.getElementById("result").innerHTML = `
        <h3>${data.login}</h3>
        <a target="_blank" href="https://www.github.com/${originalName}">
        <img style="width: 150px; height: 150px; background: cover; border: 4px solid black; border-radius: 50%"
        src="${data.avatar_url}"/></a>
        `
    })
})