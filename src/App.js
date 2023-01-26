import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="Name">
            <p style={{fontSize: "2em"}}>
                <b>MARK GUIANG</b>
            </p>
            <p>
                09973422709 ◇ Tarlac City, Tarlac
            </p>
            <p>
                mrguiang@up.edu.ph ◇ github.com/mahikgot
            </p>
        </div>
        <div className="Education">
            <p>
                <b>EDUCATION</b>
            </p>
            <hr/>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>
                    <b>BS in Computer Engineering</b>
                    , University of the Philippines - Diliman
                </p>
                <p>
                    September 2019 - Present
                </p>
            </div>
        </div>
        <div className="Skills">
            <p>
                <b>SKILLS</b>
            </p>
            <hr/>
        </div>
    </div>
  );
}

export default App;
