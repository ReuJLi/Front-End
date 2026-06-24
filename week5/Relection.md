# AI Reflection

1. What did you ask the AI to do?
I asked AI to help style all my pages using the BYUH brand colors and make the CSS global throughout all pages. I also asked it to build full CRUD for the Events entity, build a frontend for Events, and update the Incident Report fields to include worker initials, student name, and student ID.

2. What did it do well?
It did really well at setting up the CSS system and keeping styles consistent across all pages. It was also very quick at generating the Events frontend and writing the API fetch calls with JWT authentication.

3. What did it get wrong or what did you have to fix?
It added dropdowns for fields that didn't need them, like Event Name and Student ID, which wouldn't work well in practice. It also repeatedly added inline CSS styling when building new components even though I had already set up a global CSS file. I had to correct it multiple times on that.

4. What did you learn from working with it?
I learned that AI doesn't consistently hold on to instructions across a conversation. I had to repeatedly remind it to put CSS in the global file rather than inline. It also tends to add features it thinks are suitable without being asked, so if I wasn't specific enough with my instructions it will make assumptions and take charge. Being detailed and specific is key to getting useful output.