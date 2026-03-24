# 🎬 TMDBFLIX - Movie Discovery & Tracking Platform

A high-performance movie streaming discovery application built with the modern web stack. This project serves as a comprehensive exploration of asynchronous state management, secure authentication, and responsive UI architecture.

## 🛠️ Tech Stack & Technical Choices

### **Frontend Architecture**

- **React (Vite v7)**: Leveraged the latest Vite version for near-instantaneous hot module replacement (HMR) and optimized build speeds.
- **Tailwind CSS**: Used for rapid, utility-first styling and maintaining a consistent dark-themed "Netflix" aesthetic.
- **Shadcn UI**: Integrated for high-quality, accessible components (Modals, Inputs, Buttons) that maintain a professional look and feel.

### **State & Data Management**

- **TanStack Query (React Query)**: The backbone of the app's data layer. Handles caching TMDB API responses, loading states, and error management.
- **Axios**: Configured with a central instance and interceptors to handle TMDB Bearer token authentication.
- **React Hook Form & Zod**: A powerhouse duo for form management. Zod provides schema-based validation for Login and Registration, ensuring data integrity before reaching the backend.

### **Backend & Security**

- **Supabase**: Utilized as a "Backend-as-a-Service" for:
  - **PostgreSQL**: Storing user-specific data like favorites.
  - **GoTrue Auth**: Handling secure JWT-based sign-in and sign-up flows.
- **TMDB API**: The primary data source for real-time movie and TV show information.

---

## 🌟 Key Features

### 1. 🔍 Advanced Search

Implemented a dynamic search engine that allows users to find films instantly. The search bar is fully responsive, moving into a dedicated mobile drawer on smaller screens to preserve UI clarity.

### 2. 🔐 Secure Authentication

- **Registration & Login**: Fully validated forms using Zod schemas.
- **Session Management**: Persistent user sessions handled via Supabase, allowing users to stay logged in across refreshes.

### 3. 🎬 Cinematic Detail Pages

Each film features a dedicated details page pulling deep metadata from TMDB, including:

- High-definition backdrops and posters.
- Cast & Crew carousels.
- Related movie recommendations.
- Budget, Revenue, and Genre tags.

### 4. ❤️ Protected Favorites & "My List"

- **Authenticated Access**: Only logged-in users can view their "My List" page.
- **Real-time Database Sync**: Users can toggle movies as favorites, which syncs directly to their unique Supabase user ID.
- **Persistence**: Favorites remain saved even after logging out and back in.

### 5. 👤 Account Dashboard

A dedicated space for users to view their account metadata, including their username and email, providing a personalized experience.

---

## 📂 Project Structure

###### what is difference between useQuery and useMutation?

- useQuery is used to fetch data from the server such get movies or get tv shows
- useMutation is used to update data on the server such login or signup or add to favorites

```

```
