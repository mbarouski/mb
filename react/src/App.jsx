const roles = [
  { name: 'SWE', place: 'Google', url: 'https://google.com' },
  { name: 'BCompSc', place: 'BSUIR', url: 'https://bsuir.by' },
];

const links = [
  { url: 'https://www.linkedin.com/in/maksim-barouski/', name: 'LinkedIn' },
];

export default function App() {
  return (
    <div className="page">
      <div className="top">
        <div className="top-content">
          <h1 className="fullname">Maksim Barouski</h1>

          <ul className="role-list">
            {roles.map((role) => (
              <li key={role.name} className="role-item">
                {role.name}&nbsp;@&nbsp;<a href={role.url}>{role.place}</a>
              </li>
            ))}
          </ul>

          <ul className="page-list">
            {links.map((link) => (
              <li key={link.url} className="page-item">
                <a href={link.url} target="_blank" rel="noreferrer">
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
