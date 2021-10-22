const linksSocialMedia = {

    github: 'FelipeSNeves',
    youtube: 'channel/UC1yrjj7BRynj93sZPKRGwBQ',
    facebook: 'people/Felipe-Neves/100044999773489/',
    instagram: 'felipeneves2794',

}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {

        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;

    }

}

changeSocialMediaLinks();

function getGitHubProfileInfos() {

    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            photoProfile.src = data.avatar_url
            userName.textContent = data.name
            linkProfile.href = data.html_url
            userLogin.textContent = data.login
            userBio.textContent = data.bio

        })




}

getGitHubProfileInfos();