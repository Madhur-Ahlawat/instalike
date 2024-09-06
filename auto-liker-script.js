// Profile data
const profile = {
    posts: parseInt(document.getElementsByClassName("g47SY")[0].textContent),
    username: document.getElementsByClassName("_7UhW9")[0].textContent,
    index: 0
}

// Check if user is on the correct page, if not, attempt to redirect to the correct page.
IG_Check = () => {
    if (!profile.posts) return console.error("Error: Posts could not be found. Are you on the right page?");
    if (!profile.username) return console.error("Error: Username could not be found. Are you on the right page?");
    if (typeof profile.posts != "number") return console.error("Error: TotalPosts is not a number which means the class name has probably changed.");
    if (profile.posts < 1) return console.warn("Warning: There are not posts to like.");

    const _Location = window.location.href;
    if (_Location.slice(_Location.length - 6 - profile.username.length) != `${profile.username}/feed/`) {
        alert("This script is running on the incorrect page and will attempt to navigate to the correct page. You will need to reload this script.");
        window.location.href = `https://www.instagram.com/${profile.username}/feed/`;
    };
}

// Generates a random time above 7500
randomTime = () => {
    console.time("Timeout");
    return Math.random() * ((Math.random() * 5000) / Math.PI) + 7500;
}

// Prints user profile data
IG_PrintProfile = () => {
    console.log(`Instagram Autoliker by @Lillious`);
    console.log(`Username: ${profile.username}`);
    console.log(`Total Posts: ${profile.posts}`);
}

// Autolike function
IG_AutoLike = () => {
    setTimeout(() => {
        if (profile.index >= profile.posts) return console.log("Finished auto liking.");
        profile.index++;
        window.scrollTo(0, document.body.scrollHeight);
        let like = document.getElementsByClassName("fr66n")[profile.index].getElementsByClassName("wpO6b")[0];
        if (like) {
            like.click();
        } else {
            return console.error("Error: Like button could not be found.");
        }
        console.log(`Posts Liked: ${profile.index}/${profile.posts}`);
        console.timeEnd("Timeout");
        IG_AutoLike();
    }, randomTime());
};

IG_Check();
IG_PrintProfile();
IG_AutoLike();
