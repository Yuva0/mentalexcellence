Website: https://www.mentalexcellence.in/ [Website is currently down]

 
I had created mental excellence with the sole purpose of helping people achieve excellence of the mind. I felt that if you can make your mind strong and reach its highest potential, you can accomplish whatever you want. However, in this article I will discuss more about the technical aspects of it, like how the blog is created and all the features that are added.

 
As mentioned, this website is created using MERN stack and it took me 3 months to complete. All the data containing articles, quotes, stories and cards are stored in MongoDB (a NoSQL database). We have used RestAPIs using Express to do CRUD operations (create, read, update and delete).

 
Also, all the images are hosted in a CDN (content delivery network) called bunny.net. All the images are then fetched from there using the APIs and hence CORS (cross origin resource sharing) had to be enabled. The domain is bought from namecheap and the project is deployed in a VPS server hosted in hostinger.com

 
I have divided this entire tutorial into two halves (frontend and backend) for easier understanding of the website.

 

Frontend
The frontend is created using ReactJS and is present in the ‘client’ folder. There are in total 6 pages present in the whole website.

 

Homepage
The homepage is the landing where the user first lands on. The URL for this www.mentalexcellence.in. It has five major components -

 
1. Cover Page is the starting point of the homepage where I ask the main question ‘Why should you strive to pursue Mental Excellence?’. It consists of the answer along with the ‘Know More’ button if the user wishes to go into further details.

 
2. Quote of the Day consists of a quote along with the author’s name which I manually updated everyday to make the user keep coming back to visit the website.

 
3. Articles - Article Section consists of the latest three articles that I have written. The articles include the cover image, title, upload date, category, duration to read and a short description about the article. Depending on the screen size, some sections are hidden to not increase the total length of the article.

 
4. Stories Section consists of the latest eight stories. They consist of the cover image, title along with the duration to read and since they are less important than articles, their size is smaller.

 
5. Cards Section consists of the latest six cards. They consist of the cover image and the title and on clicking, they open a popup explaining the card instead of navigating to the article page section.

 

Articles Page
Articles Page consists of all the articles present in the entire blog. There is also pagination present where after viewing 20 articles, you have to click the next button to view the next set of articles.

 

Cards Page
Cards Page follows the same format as articles page and shows all the cards present in the entire blog.

 

Stories Page
Stories Page also shows all the stories that are present in the entire blog.

 

Category Page
A person can filter based on category and display all information related to that category only. It has similar components like Homepage which are the cover page of the category, articles, cards and stories pertaining to that category.

 

Detailed Page
Detailed Page holds the main content of the article. If you open an article, you will be presented to the detailed page. It consists of the Top section which consists of the title, author, date, duration, cover image and image caption. The Bottom Section consists of the main content of the blog along with how many people have liked it.

 

Layout Components
There are also 3 components present which are part of the layout.

1. Header is the topmost section of the website. It consists of the logo in the left section and the list items consists of home, categories, stories and settings on the right.

 
2. Footer is the bottommost section of the website. It consists of all the necessary links along policies and follow options.

 
3. Modal - When you click on a particular card, it opens the modal/dialog section. That is where the person can see all the details about that particular card and if he ever wants to get out of it, he has to just click somewhere else.

 

Features
There are also a few features that I have added which enhance the website.

1. Settings - The blog also gives flexibility to the user to choose from white, ochre or dark themes and can even change the alignment as per their need.

 
2. Cookies - The site also contains cookies which helps the user to store their settings when they visit the website next time.

 
3. Hide Header - The user can also hide the header using the up arrow button. It is extremely useful when the screen size is less and the header occupies a lot of space.

 
4.Spinning Wheel - Whenever data is getting fetched from the backend, a spinning wheel is displayed so that the user knows that data is loading.

 

Assets
There are assets also present in the client (frontend) folder which consist of images which are used everywhere like logo and cover page icon. These assets are stored there since they are used everywhere it’s better to store it there where it can be used quickly.

 

Custom Hooks
I have two custom hooks present -

1. useButtonHide - This is used to hide the modal/navigations whenever the user clicks outside of its space.

 
2. useWindowDimensions - This is used to check window dimensions (width and height) of the screen as it keeps changing.

 

Utility Functions
I have 3 utility functions present -

1. fetchDate - It is used to parse json datetime format to ‘DD Month Year’ format.

 
2. firstLetterUpper - It is used to convert the first letter of a string to uppercase.

 
3. getAxiosRequest - This is used to fetch data from the backend using Axios.

 

Packages Used
I have imported some external libraries for the project -

1. FontAwesome - It is used to display various types of icons

 
2. Axios - It is used to send APIs to the backend

 

Backend
The backend is created using NodeJS, ExpressJS with MongoDB as the database. It is stored in the ‘api’ folder. The index.js is the main file where I connect to the database and open the server.

 

MongoDB
It is used to store the data. It consists of a database which consists of multiple collections like Articles, Cards, Stories, Quotes etc which then again have rows of data.

 
The backend also consists of two main folders -

1. Models - The models folder consists of the schema for all the collections present in the database. They consist of the required, optional and unique fields along with their data types.

 
2. Routes - The routes folder consists of how the CRUD api is constructed for all the collections along with the other apis like liking an article etc.

 

Packages Used
There are external libraries also used for the backend.

Cors - Cross Origin Resource Sharing is imported to enable displaying of data from other websites. Since I have used bunny.net for hosting my images (CDN), I needed to enable CORS for this functionality.

 
Dotenv file is used to create .env file to store private values like MongoDB public URL and port number

 
Express is used to perform api operations

 
Mongoose is used to connect to the database.

 
Multer is used for storing BLOBs of data.

 
Nodemon is for running the index.js and automatically reflecting the changes whenever the files are saved.

 

Websites Used
Bunny.net is used for storing images and they provide a URL which has a similar name to the website name.

 
Namecheap is used to purchase the domain. However, the A records are pointing towards Hostinger ip address since that is where the files are stored.

 
Hostinger is used to host the website. It consists of a VPS (virtual private server) for installing node and npm for hosting react websites.

 

 
This is how the whole website is configured and it took me 3 months to create the website from scratch.
