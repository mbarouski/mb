import { CameraIcon, LinkedinIcon } from './icons.jsx';

const roles = [
  { name: 'SWE', place: 'Google', url: 'https://google.com' },
  { name: 'BCompSc', place: 'BSUIR', url: 'https://bsuir.by' },
];

const links = [
  { url: 'https://www.linkedin.com/in/maksim-barouski/', label: 'LinkedIn', icon: <LinkedinIcon /> },
  { url: 'https://www.instagram.com/photodos/', label: 'Photography', icon: <CameraIcon /> },
];

export default function App() {
  return (
    <main className="page">
      <div className="card">
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
              <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
