# Easybank Landing Page

This project is a solution to the [Easybank landing page challenge](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN) on Frontend Mentor. The goal was to build out the landing page and get it looking as close to the design as possible, ensuring an optimal layout for different device screen sizes and implementing hover and focus states for all interactive elements. Additionally, a dark theme mode has been implemented.

## Live Demo

Check out the live demo of the project [here](https://victorkevz.github.io/Easybank-homepage/).

## Repository

You can find the project repository [here](https://github.com/VictorKevz/Easybank-homepage.git).

## Built With

- HTML
- CSS
- ReactJS
- Vite
- Google Fonts
- Icons

## Features

- Responsive design for optimal layout on different device sizes.
- Hover and focus states for all interactive elements.
- Dark theme mode toggle.

## Project Structure

```jsx

function App() {
  const [isDark, setDark] = useState(false);

  const switchTheme = () => {
    setDark(!isDark);
    console.log("toggled!");
  };

  return (
    <main className="outer-container">
      <div className={`hero-bg ${isDark ? "bg-dark" : ""}`}></div>
      <div className="inner-container">
        <Navbar isDark={isDark} onSwitch={switchTheme} />
        <Hero isDark={isDark} />
        <Features isDark={isDark} />
        <Articles isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </main>
  );
}

export default App;
```

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/VictorKevz/Easybank-homepage.git
   ```

2. Install dependencies:
   ```bash
   cd Easybank-homepage
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.



## Acknowledgments

- Frontend Mentor for providing the challenge.
- All the resources and tools that helped in building this project.

Feel free to contribute, open issues, and submit pull requests!