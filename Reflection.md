# AI and Reflection

1. What did you ask the AI to do?
I used AI throughout the process of building the frontend and connecting my React app to my real Express/MongoDB backend. I asked it to help me build a Sign Up form and enhance the Login form with a logout button. I also asked it to help with sending real authenticated requests to my API. There were also some debugging issues. 

2. What did it do well?
It was good at walking me through patterns step by step instead of just handing me a finished file, which helped me actually understand. It was also good at helping me debug, when my Sign Up request kept failing, it had me check the browser console, then test the backend directly with `curl`, which narrowed the problem down (first to a missing CORS setup, then to a Docker container that hadn't restarted properly after I fixed the code).

3. What did it get wrong or what did you have to fix?
The AI didn't catch one bug on its own — my `pages` folder had been duplicated with a capital "P" (`Pages`) while the imports were referencing it with a lowercase. It walked me through several other possibilities first (clearing the console, checking for duplicate browser tabs, adding test `console.log` statements) before this was found. It took a while because VS Code was letting me edit the file without any errors but the server was still using the old reference. So the browser was running just fine but none the fixes I was making in VS was actually doing anything. 

4. What did you learn from working with it?
I learned a lot about debugging real backend/frontend integration issues, which is different from the more contained bugs I'd hit in earlier weeks with fake data. Tonight specifically I learned how to read CORS errors and understand what they actually mean (the browser blocking cross-origin requests unless the server explicitly allows it), how to verify whether my Docker containers were actually running and healthy versus just appearing to be. 