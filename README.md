this is my ajax application, note that l did not upload the node_modules because its too big about 85mb and the maximum size for github its 25mb per repisitory. Firstly i created this project by creating a folder then in the terminal i run (npm create vite@latest react -- --template react) for it to provide a project structure. after that i created components folder inside the src. the app include 3 sections: a greeting, a counter and a task list. the request fetchUser, we use  fetch("https://randomuser.me/api/") to return a promise and await to wait for the server to respond. i used await response.json() to parse JSON response into a usable javascript. in the state management on loading, it starts as true the i set it to false in the finally block so that it turns off whether the request succeeds or fails. also the error, if the try block throws an error like no internt the catch block sets this state. 

in my components i have Counter.jsx which counts, clicking + adds number to the cpounter and - subtract number from the counter.
the other component file is greeting where it fetches a random user
then i have the TaskItem.jsx which tells if the task is done or not, also when i want to delete a task
in the TaskList.jsx file is responsible for listing the task name added by the user
lastly on components l have UserProfile.jsx where the fetch request is set

after editing the files and saving i ran the commands in the terminal:
cd react
npm install
npm run dev
after that a local host is provided where l will see the output.
