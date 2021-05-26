# Group Name

Nuklex

# Group Members

Andrea Cappelletti 10529039 andrea8.cappelletti@mail.polimi.it

Sandro Maglione 10532096 sandro.maglione@mail.polimi.it

# Contribution

## Andrea Cappelletti

Backend, API configuration, Postgresql Database, Router, Dynamic requests

## Sandro Maglione

UI design, Folder structure and project organization, Routes and Components styling, Chatbot implementation

# Techinical documentation

## Server and Database

For the backend technology we decided to implement Supabase, an on Cloud solution very similar to Firebase.

Server: Supabase https://supabase.io

Database: PostgreSQL https://supabase.io/database

## Components developed

### Layout

- `layout/HeaderMenu.vue`: Navigation menu of the website, containing the `<header>` tag. It is included inside the `default.vue` layout and shared between all the routes of the website. Contains the landamark links.
- `layout/FooterSection.vue`: Contains the `<footer>` tag and it includes general information about the company. It is included inside the `default.vue` layout and shared between all the routes of the website.

### Section

- `section/HeroSection.vue`: Included in the homepage of the website (`index.vue`). Contains the hero section with the company slogan and presentation.
- `section/GridSection.vue`: Shared between multiple routes. It contains a shared style and layout for grid of elements to display in different pages. This single component ensures a shared style between the website pages.
- `section/FeatureSection.vue`: Shared between multiple routes. It contains a layout with an image on the left and a title and description on the right. Used to highlight specific section in multiple pages of the website.
- `section/TestimonialsSection.vue`: Layout list for the testimonials section of the website (inside `aboutus.vue`).

### Base

- `base/OrientationInfo.vue`: Components used to display information about the current and previous pages.
- `base/SectionTitle.vue`: Shared style and layout for the title of each section of the website.
- `base/Chat.vue`: Contains the code to display and use the chatbot in the website. It is included in all pages inside `default.vue` layout.

## Plugins

- `supabase`: Backend-as-a-service plugin. Includes functions to fetch data from backend.
- `mmcc`: Setup for chatbot functionalities.

# Additional comments
