import { FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaFileAlt } from "react-icons/fa";

// Single list of desktop windows, shared by the desktop icons and the dock.
export const sections = [
  { name: "about", label: "About", title: "About Me", Icon: FaUser },
  { name: "resume", label: "Resume", title: "Resume", Icon: FaFileAlt },
  { name: "skills", label: "Skills", title: "Skills", Icon: FaTools },
  { name: "projects", label: "Projects", title: "Projects", Icon: FaProjectDiagram },
  { name: "contact", label: "Contact Me", title: "Contact Me", Icon: FaEnvelope },
];
