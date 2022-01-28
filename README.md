# Getting Started with Create React App
## Live Demo of this website :

- [Live Site Link](https://naughty-rosalind-5d9541.netlify.app/)


- [server Link](https://github.com/Shorifzaman/blog-server/)
- [client Link](https://github.com/Shorifzaman/blog-client-travelmate/)



##  this website details :

- tour gideline blogs
- Reliability
- express service
- user login 
- Admin Dashboard
- Dynamice update and delete 
- user post a blog 
- The app has been hosted on heroku here. P.S: 
- - You might have to wait for a few seconds for the heroku site to respond.
This is a blogging PWA with user authentication and authorization. There is also a social login option, to login using your Twitter or Google accounts. The blog posts are displayed in the reverse chronological order by default.
There is no exploitation of data, as the app only requires access to your accounts to fetch your unique ID for authentication/authorization purposes, and no personal details(except your registred user name on the social account) is used by the application.
The frontend of the app is built using React and I have used Bootstrap classes for styling the compnents in addition to my local CSS styles.
It is a blog app that lets users read the existing blog posts without logging in, and lets them share their thoughts using the anonymous comment section.
Each comment has a unique jdenticon icon to represent the user who commented anonymously
There is also a profanity filter to disallow usage of certain NSFW words in the comments' section. This is not an attempt to hinder freedom of speech, but instead it is a necessary aid to prevent misuse of the platform by nefarious users.
In order to write a new blog post, the user has to login using one of the social media login options provided. The react-social-login package is being used to provide the user authentication and authorization.
It has been deployed using Heroku's free tier and the Mongodb Atlas's cloud service is used for the database service. The access to the database is restricted to only 1 authorised user, and as mentioned earlier, there is no personal user data stored in it.
The rich editor used is the CKEditor 5's React WYSIWYG component (What You See Is What You Get) with a toolkit that supports bold, italics, hyperlinks, image embeds, indentations, blockquotes, video embeds, lists (ordered and unordered) and options to undo and redo changes as needed.
The application currently has more then 60 registered users, you can check out the app here or by using the link in the description section
Challenges faced
There were a few challenges that came up during the development of the application. In this section, I aim to clarify my approach in overcoming these challeges, as a way to help you understand the code better, in case you decide to dive in!

- Handling user authentication and user authorization
I initially intended on using the authentication token strategy to authenticate users, but that process of authentication seemed to be a little more cumbersome for the final user. This is why the social logins was the next solution to try and implement using the passport-google-oauth and the passport-twitter strategies. The server side of the implementation involves obtaining a JWT from the client, based on the unique IDs assigned by either Google/Twitter and processing it to validate the user session or revoke it. The clint side implementation involves displaying the correct social login buttons using react-google-login and react-twitter-login. Note that these npm packages aren't meant to be used as stand-alone modes of user authentication in production sites. They are only used to obtain the valid JWT in each case, these session cookies are stored in the local storage of the user's browser for a day, and are then timed out (user is logged out) in case of inactivity. The credentials for the google and twitter login can be obtained using the developer accounts for both platforms.

- Handling rich editor text/sanitizing the blog data
Another important issue that I realized during the development process was that the blog input is basically an open ended user input that is being stored in the DB and is displayed to the user screens(for users who haven't registered, as well as registered users). This could lead to potential XSS attacks as any malicious code injection can also take place in the comment section/ blog post input. To avoid any such risks, it is important to sanitize the user input before POSTing it to the DB. The sanitize-html-react package is a handy subsidiary to the more widely used sanitize-html package, which removes any potential script tags from begin executed as part of the user input blog post/comment.

Rich Editor/Markdown Editor
Although it may seem obvious that the editor used in a blogging platform needs to support multiple text editing options, it was a little challenging to find the appropriate solution to fit the needs of the current project. There were many WYSIWYG editors which provided sufficient documentation too, but in the end, the most optimal solution to the issue was to use the CKeditor rich HTML editor's React component implementation, with a custom toolbar


## Technologies

[![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/shorifzaman)
[![Tailwind Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/shorifzaman)
[![Firebase Badge](https://img.shields.io/badge/Firebase-FFCB2B?style=for-the-badge&logo=firebase&logoColor=white)](https://github.com/shorifzaman)
[![React Router Badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://github.com/shorifzaman)
[![Git Badge](https://img.shields.io/badge/git-f34f29?style=for-the-badge&logo=git&logoColor=white)](https://github.com/shorifzaman)
[![Yarn Badge](https://img.shields.io/badge/yarn-0078D6?style=for-the-badge&logo=yarn&logoColor=white)](https://github.com/shorifzaman)
[![Vercel Badge](https://img.shields.io/badge/vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/shorifzaman)
[![Vs Code Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D6?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://github.com/shorifzaman)

##  Developed By Shorifuzzaman 💻