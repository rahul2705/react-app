##Summary
This repo explores the react js by performing basic CRUD operations on it.

Here, I have created a Student Management System which has following features :
* Add a student
* View a student by student id
* View all students
* Delete student by student id

### Basic Project Setup
* Create a react project by executing the below command
    ```
    npx create-react-app react-app
  ```

    This command creates a react project with name *react-app*.
    It has following files
    * **package.json** which tells about different dependencies present in project
    * **node_modules** contains all the js files required
    * **public** contains the initial index.html file
    * **src** folder contains all the components
    * **yarn.lock** need to learn more about this 
* Execute the below commands to test the new project
    ```
       cd react-app
       npm start 
   ```
    This will start the server and render a web page in http://localhost:3000
* Install material ui and material icons via below commands :
    ```
       npm install @material-ui/core
       npm install @material-ui/icons
    ```