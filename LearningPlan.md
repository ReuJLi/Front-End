4 Week React Learning Plan
Schedule: Mon-Fri 2hrs/day. Saturday- 3hrs. 

Week 1 (May 12-17) : React Foundations
Goal: Understand how React thinks and build first real UI screens. 

    Mon: Install Node.js, VS Code with React extentions (ESLint, React DevTools).
         Scaffold project and tour file structure to make sure the dev server runs. 
    Tue: JSX syntax,functional components, and props. Build a static IncidentCard component that accepts reportType, studentName, date, and description as props. 
    Wed: useState hook: controlled inputs, toggles. Build a login form that captures email and password in state(no submit logic yet).
    Thu: Conditional rendering and list rendering with .map() + keys. Build an IncidentList that renders several IncidentCard components from a hardcoded array. 
    Fri: Component composition and basic styling. Set up Tailwind CSS or CSS Modules. Style login page and incident lists. 
    Sat: Review and refactor. Build a layout component with a sidebar and main content area. 
Resources: 
    react.dev official tutorial 
    Traversy Media
    Frontend Mentor 
    
Milestones:
    Dev server is live, hot reload works.
    IncidentCard displays props correctly. 
    Login form fields are controlled via useState.
    IncidentList renders 5 mock reports with correct keys.
    Can explain why useState triggers a re-render. 
    
    
Week 2 (May 19-24) : State, Effects & Forms
Goal: Fetch real data, add multi-page routing, and build the full incident submission form. 

    Mon: useEffect: dependency array, cleanup, async fetching. Replace hardcoded array with data fetched from a mock API on backend. 
    Tue: React Router v6: BrowserRouter, Routes, Route, Link, NavLink. Add /login, /dashboard, /incidents, and /incidents/new routes. 
    Wed: Complex forms: multiple controlled inputs, select dropdowns, textareas. Build the full new Incident Report Form (student name, student ID, even name, incident type - injury vs honor code - description, severity).
    Thu: Client-side validation: required fields, minimum length. Handle loading and error states. POST to backend or a mock endpoint and show success/failure feedback. 
    Fri: useNavigate for redirect after form submit. useParams to build a single incident detail page at /incidents/:id
    Sat: Build the dashboard: fetch incidents, show summary stats (total, by type), display a recent list. Wire all routes together into a cohesive app. 
Resources:
    reactrouter.com official tutorial
    Web Dev Simplified
    React.dev
    react Hook Form
    
Milestones: 
    App has 4+ working routes with no crashes.
    incident list loads from a live API call with a loading spinner. 
    New Incident form validates and submits with visible success/error feedback.
    Single incident detail page works via URL params.
    Can explain the difference between [], [value], and no dependency array in useEffect. 
    
    
Week 3 (May 26-31) : Authentication & Protected Routes
Goal: Wire up regal login API, manage auth state globally, protect routes, and attach JWT tokens to every request. 

    Mon: Context API: createContext, useContext, Provider pattern. Build an AuthContext that holds user, login, and logout. Wrap your app in AuthProvider. 
    Tue: JWT login flow: POST to /auth/login -> receive token -> store in localStorage. Read the token on app mount to restore sessions. 
    Wed: ProtectedRoute component: redirects unauthenticated users to /login. Apply it to every non-login route. Test by manually clearing localStorage.
    Thu: Axios interceptors (or a fetch wrapper): automatically attach Authorization: Bearer <token> to every outgoing request. Redirect to login on 401 responses. 
    Fri: Role-based UI: show or hide admin actions based on the users role from the JWT payload. Implement logout( clear token, redirect).
    Sat: Full integration test: login -> view dashboard -> submit incident -> logout -> verify redirect. Add a staff profile display in the header. 
Resources: 
    Cosden solutions - React Auth with JWT
    react.dev- Passing Data Deeply with context
    axios-http.com
    jwt.io debugger
    Build a useAuth custom hook
    
Milestones:
    Staff can log in end-to-end (credentials -> token -> dashboard).
    Navigating to a protected route without a token redirects to login.
    Every API request includes the Authorization header automatically.
    Session persists on page refresh. 
    useAuth() custom hook is implemented and used across components. 
    
    
Week 4 (Jun 2-7) : Polish, Deploy & Career Skills 
Goal: Go from "it works" to "it's production-ready." Deploy app and learn what makes React developers hireable. 

    Mon: UX polish: skeleton loading screens, toast notifications (use react-hot-toast or sonner), empty states when no incidents exist. Add aria labels and keyboard navigation. 
    Tue: Custom hooks deep dive: extract data fetching into useincidents() and useIncident(id). Learn useMemo and useCallback - when they help and when they hurt.
    Wed: Responsive design: make dashboard an dforms work on mobile. Test at 375px width using Chrome DevTools.
    Thu:Deployment: npm run buld, deploy to Vercel or Netlify (connect your GitHub repo). Set your VITE_API_URL environment variable. 
    Fri: Career skills: intro to TanStack Query (React Query) for server state management, intro to component testing with React Testing Library. These are the two most commonly asked-about topics in frontend interviews. 
    Sat: Final review: walk through every feature as a real user. Write a README. Do a self code-review for naming, component size, and prop drilling. Celebrate. 
Reosurces: 
    TanStack Query Quick Start
    Laith Academy - React Testing Library
    Vercel
    react-hot-toast or Sonner
    Epic React by Kent C.Dodds
    
Milestones: 
    App is deployed at a public URL and works on a mobile phone. 
    Every async action show slaoding and error feedback.
    Custom hooks (useIncidents, useAuth) live in src/hooks/ and are reused.
    App is responsive at 375px.
    README documents setup, env vars, and features. 
    Can walk through the architecture in an interview: why Context, how auth works, how components are organized. 
    
