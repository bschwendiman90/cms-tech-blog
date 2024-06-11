# CMS Tech Blog

## Description

A tech blog where registered people can post and add comments to existing posts.

## Installation

The database will need to be created using postgreSQL in the command line run the schema.sql in the db folder. After the database is created using npm install in the command line with install the necessary packages. The database can be seeded using the npm run seed command from the command line. Finally run the server using node server.js

## Usage

A user can create a new account using the sign up button on the login page. After signing up the user can use the dashboard to create a new post. They can go to the homepage and click on a post to add a new comment. They can use the see comments button to see all of the comments for a given post. In the comments page they can click on the post to either update it or delete it if they are the original user.

![homepage](assets\images\comment-page.png)
![comment page](assets\images\comment-page.png)
![dashboard](assets\images\dashboard.png)
![leave a comment](assets\images\leave-a-comment.png)
![sign up form](assets\images\sign-up-form.png)


## License

MIT