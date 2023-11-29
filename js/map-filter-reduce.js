const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const usersThreeLanguagesOrMore = users.filter(user => user.languages.length >= 3);
console.log(usersThreeLanguagesOrMore)

//3. Use .map to create an array of strings where each element is a user's email address
const usersEmailAddress = users.map(user => user.email);
console.log(usersEmailAddress)

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const userExperiece = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const userAverageExperience = userExperiece / users.length
console.log(userExperiece)
console.log(userAverageExperience)

//5. Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, "")

console.log(longestEmail)

//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userList = users.reduce((accumulator, user, index) => {
    const separation = index == users.length -1 ? "." : ", ";
    return `${accumulator}${user.name}${separation}`;
}, "Your instructors are: ");

console.log(userList)

// const usersList = `Your instructors are: ${users.map(user => user.name).join(', ')}.`;
//
// console.log(usersList);

const uniqueLanguages = users.reduce((accumulator, user) => {
    user.languages.forEach(language => {
        if (!accumulator.includes(language)) {
            accumulator.push(language);
        }
    });
    return accumulator;
}, []);

console.log(uniqueLanguages)

