# Robotics Company Website

Modern and professional robotics company website. A fully-featured corporate website developed for a company offering industrial automation, AI image processing, and custom robot solutions.

![Resim1](https://github.com/user-attachments/assets/340e9ffc-6ba7-4bca-a7b7-fe7021988ac8)

## Features

- **Modern Design**: Responsive and user-friendly interface
- **Quote Request System**: Modal-based quick quote form
- **Project Gallery**: Detailed project showcase pages
- **Service Presentations**: Comprehensive service descriptions
- **Team Profiles**: Expert staff introductions
- **Contact Form**: Database-integrated messaging system
- **Database**: Full data management with PostgreSQL

## Technology Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **UI Components**: Shadcn/ui
- **Routing**: Wouter
- **Form Management**: React Hook Form
- **State Management**: TanStack Query

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up database:
```bash
npm run db:push
```

3. Start development server:
```bash
npm run dev
```

## Usage

- Home: Company introduction and services
- Projects: Detailed examination of completed projects
- Services: Descriptions of offered services
- Team: Expert staff profiles
- Get Quote: Quick quote request form
- Contact: Message sending system

## Project Structure

```
├── client/src/
│   ├── components/     # UI components
│   ├── pages/         # Page components
│   └── lib/           # Utility functions
├── server/            # Backend API
├── shared/           # Shared type definitions
└── README.md
```

## Contributing

This project is developed for demonstration purposes. You can open issues for development suggestions.

## License

This project is developed under the MIT license.
