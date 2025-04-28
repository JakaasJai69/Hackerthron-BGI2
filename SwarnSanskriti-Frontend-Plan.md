# Swarn Sanskriti Frontend Prototype Plan

## 1. Key Features and User Flows

### Features:
- Digital Museum: Browse artifacts and cultural exhibits.
- AI Heritage Guide (Simulated): Chatbot-like interface with dummy messages.
- Gamified Learning: Quizzes and storytelling screens.
- Language Learning Modules: Basic language lessons with static content.
- Cultural Map of India: Interactive map with clickable regions (static simulation).

### User Flows:
- Home → Select Feature → Explore Content
- Example: Home → Digital Museum → View Artifact Details (static)
- Home → AI Heritage Guide → Chat Simulation
- Home → Gamified Learning → Start Quiz → Quiz Questions (static)
- Home → Language Learning → Select Language → Lesson Content
- Home → Cultural Map → Click Region → Show Info (static)

## 2. Frontend Tech Stack Choice

- **React.js** is chosen for:
  - Component-based architecture for modular UI.
  - Easy routing with React Router for navigation.
  - Better scalability for adding interactive UI elements.
  - Rich ecosystem and community support.
  - Facilitates a clean separation of concerns and reusable components.

## 3. Main UI Components / Screens

- **Header.jsx**: Persistent navigation menu with links to all features.
- **Footer.jsx**: Simple footer with copyright and links.
- **Home.jsx**: Overview of all features with clickable cards/buttons.
- **Museum.jsx**: Gallery of artifacts with static images and descriptions.
- **HeritageGuide.jsx**: Simulated chatbot interface with dummy messages.
- **QuizGame.jsx**: Static quiz interface with questions and options.
- **LanguageLearning.jsx**: Static language lessons with text and images.
- **CulturalMap.jsx**: Interactive map with clickable regions (static).
- **App.jsx**: Main app component with routing setup.

## 4. Project Structure Outline

```
/public
  index.html
/src
  /assets
    /images
      - placeholder images for artifacts, map, etc.
/components
  Header.jsx
  Footer.jsx
  Home.jsx
  Museum.jsx
  HeritageGuide.jsx
  QuizGame.jsx
  LanguageLearning.jsx
  CulturalMap.jsx
/styles
  main.css
App.jsx
index.js
package.json
README.md
```

## 5. Design Guidelines

- Use earthy tones (browns, ochres, greens) and classical fonts (e.g., serif fonts).
- Mobile-first responsive design.
- Use placeholder images/videos for content.
- Keep language simple and culturally respectful.
- Navigation menu persistent on all pages.

## 6. Clickable Prototype Details

- Use React Router for navigation.
- Each feature screen populated with static dummy content.
- Buttons and links navigate to respective screens.
- Simulate interactions like starting a quiz or chatting with the guide.
- No backend or AI functionality; purely frontend simulation.

---

This plan covers the full scope of the requested prototype. Upon your confirmation, I will proceed to create the React.js project files and implement the prototype accordingly.
