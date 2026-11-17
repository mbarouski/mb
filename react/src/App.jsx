import { useState } from 'react';
import DesktopIcon from './DesktopIcon.jsx';
import { LinkedinIcon, MailIcon } from './icons.jsx';
import pdfIcon from './assets/pdf.svg';

const roles = [
  { name: 'SWE', place: 'Google', url: 'https://google.com' },
  { name: 'BCompSc', place: 'BSUIR', url: 'https://bsuir.by' },
];

const links = [
  { url: 'https://www.linkedin.com/in/maksim-barouski/', icon: <LinkedinIcon />, label: 'LinkedIn' },
  { url: 'mailto:maksim.barouski@gmail.com', icon: <MailIcon />, label: 'Mail' },
  { url: 'https://www.instagram.com/photodos/', name: 'Photography' },
];

const desktopIcons = [
  { id: 'cv', name: 'CV.pdf', image: pdfIcon, link: 'assets/CV.pdf' },
];

export default function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  function handleSelect(id, multiple) {
    setSelectedIds((current) => {
      if (!multiple) return [id];
      return current.includes(id) ? current : [...current, id];
    });
  }

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
                <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
                  {link.name ? <span>{link.name}</span> : link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="desktop-icons">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            {...icon}
            selected={selectedIds.includes(icon.id)}
            onSelect={(multiple) => handleSelect(icon.id, multiple)}
          />
        ))}
      </div>
    </div>
  );
}
