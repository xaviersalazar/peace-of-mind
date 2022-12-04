# Peace of Mind
New repository for [Peace of Mind](https://www.peaceofmindmassagecorpuschristi.com/)

This app is created with `React` and `Tailwindcss`. It uses `Supabase` for authentication/access to admin functionality. It also uses `Apollo GraphQL` to access data hosted on the `Apollo GraphQL Server` in a separate instance thats hosted on Heroku (see [peace-of-mind-api](https://github.com/xaviersalazar/peace-of-mind-api) for more info)

### v1.0
- [x] Migrate all current features to new site to include
  - [x] Pages
    - [x] Home
    - [x] About page
    - [x] Besame pages
    - [x] Salon pages
    - [x] Services pages
  - [ ] Contact Us form
  - [ ] Gift Card form
- [x] ~~Integrate with [peace-of-mind-api](https://github.com/xaviersalazar/peace-of-mind-api) to get services~~
- [x] ~~Create basic Admin functionality~~
  - [x] ~~Login page~~
  - [x] ~~Sign-up page (dev only)~~
  - [x] ~~Dashboard page (widgets coming soon)~~
  - [x] ~~Services page~~
    - [x] ~~Table of paginated services~~
    - [x] ~~Edit a service~~
    - [x] ~~Delete a service~~

### v2.0
- [ ] Search & Filter for services on `Admin -> Services` page
- [ ] Add dashboard widgets on `Admin -> Dashboard` page (metrics, recent contact form submissions, etc)
- [ ] Dark Mode