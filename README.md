# GameStop React App For Games

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Alt text](/public/images/gameStopApp.png)

---

## Starting The App And The Server

> The App

Pull the app from this GitHub from this page and install the project in the console:

```bash
npm install
```

Then write npm start:

```bash
npm start
```

After successfully starting the server you should see this message:

```
You can now view project-defense-gamestop in the browser.

  Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

> The Server

After downloading the app and starting the app from this GitHub page you will also have the folder with the server and you need to start it so the app can work. Go into the server folder in the console:

```bash
cd server
```

And than just start the server:

```bash
node server.js
```

After successfully starting the server you should see this message:

```
Server started on port 3030. You can make requests to http://localhost:3030/
Admin panel located at http://localhost:3030/admin
```

---

## Available Functionality

---

### Full user authorization with login, register and logout

> Login

You can go to _/games/login_ or click the **Login link** to go to the login page:

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmEwZDA4ZDdiMWVkMmM4OTBmNDFmOWIxYTQwMDc3NDEyYmY5YzFhYyZjdD1n/cScvjVDVerfP9iWrq6/giphy.gif)

You have to enter email and password to login and if you don't enter the correct email or password an **error will show** on the screen:

![](/public/images/loginError.png)

> Register

You can go to _/games/register_ or click the **Register link** to go to the login page:

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmU0ZTc3MzExMmFjYTNiN2M5MDlkY2I0MTgzMTIyYjQ3OWNhOWZlZSZjdD1n/s6k7BzHKzcu7DKgKRp/giphy.gif)

You have to enter email and password to register and if you don't enter the correct email or password an **error will show** on the screen:

![](/public/images/registerError.png)

> Logout

After successfully registering an account or login you have the option to logout on _/games/logout_ or by clicking the **Logout link** After logging out the app will redirect you to _/games/login_:

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWIxMGEzMjU4NzVmYzNjYWQ0ODEwOGU4OGUwNWE3ZGJhMWJjMjQ5ZSZjdD1n/WDTHkXdD7K0KN9LHu1/giphy.gif)

> Route Guards

If you are not registered or logged in you can't use the other functionalities of the app, also if you are not login already you can't use the logout functionality, because the app has route guards and if you try do go somewhere without registering or login in the app **will redirect you**

---

### All CRUD operations

> Create games

After logging in you can go to _/games/create_ or the **Create link** and create a game post with the title, the image (**only URL**), the maxLevel you have reached, the category and summary of the game:

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGFjNWNlMDliODE2ZjEyZThjZjY5YWU3ZjA4OGVmNGUwNDE1ZTk4OCZjdD1n/6sNfbkV0Qh4VuZq8dW/giphy.gif)

if you don't fill all the fields with information about the game an **error will show** on the screen when posting the game:

![](/public/images/createError.png)

You can also create comments by going to the **Game Details page** and if you are not the owner of that game you can leave comments under that game:

![](https://media.giphy.com/media/UWcS3AhPlF8PUB6CPc/giphy.gif)

> Read Games (In Catalog)

After logging in you can go to _/games/catalog_ or click on the **Catalog Link**
after you are in the Catalog page all games of of all users will show on the screen and you can also click on the **Details Link** under every game to view further information only about that specific game:

![](/public/images/catalog.png)

> Update

After logging in you can go to _/games/edit/(theIdOfTheGameYouWantToEditHere)_ or the navigate to /games/catalog/ and then click on the **Details Link** under a game and edit your game post with the title, the image (**only URL**), the maxLevel you have reached, the category and summary of the game:

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjIwZmM5ZGM5NDlhNjY4NDRhZDMzOTg4YzRjODZmMGJlYzMyZWFlOCZjdD1n/gJ6bqvAr65u1avNCiV/giphy.gif)

if you don't fill all the fields with information about the game an **error will show** on the screen when posting the game:

![](/public/images/editError.png)

> Delete

You can delete a game by going to the /games/details/(specificGameIdHere) or by clicking on the **Catalog Link** and the on the **Details link** under every game in the Catalog. After that there will be 2 buttons if you are the owner of the game **Delete** and **Edit** for deleting the game press the **Delete** button and after that a confirmation window will appear click ok and then the app will redirect you to the Catalog page:

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjgwM2IzNGI1NWQyODBkM2Y1MGQ3YTM5YzhjNmE3Y2ZmZWQzZmYxMiZjdD1n/xQpVzCM32Rw7L9kW2q/giphy.gif)

> Route Guards

If you are not registered or logged in you can't use the other functionalities of the app. You can't edit games that are not your own, you can't delete games that are not your own, you can't delete and edit games if you are not registered or logged in. Every of the action listed above **will result in redirect from the app**

---

## Server Used For The App

You can learn more about the [SoftUni practice server](https://github.com/softuni-practice-server/softuni-practice-server).
