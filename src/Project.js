import './Project.css';

const Project = ( {name, stack, points, link} ) => {
    return (
        <div className="Projects">
            <div className="FirstLine">
                <div className="NameAndStack">
                    <p><b>{name}</b></p>
                    <p>{stack}</p>
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
            <div className="Points">
                <ul>
                    {points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>

        </div>

    );
};

export default Project
