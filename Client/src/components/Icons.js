import React from "react";
import "./Icons.css";
import {
  SiNodeDotJs,
  SiReact,
  SiMongodb,
  SiPython,
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
} from "react-icons/si";

const JavascriptIcon = () => {
  return (
    <div className="icon-container">
      <SiJavascript className="icon" />
      <p>Javascript</p>
    </div>
  );
};

const NodeIcon = () => {
  return (
    <div className="icon-container">
      <SiNodeDotJs className="icon" />
      <p>Node.js</p>
    </div>
  );
};

const ReactIcon = () => {
  return (
    <div className="icon-container">
      <SiReact className="icon react-icon" />
      <p>React</p>
    </div>
  );
};

const MongoDBIcon = () => {
  return (
    <div className="icon-container">
      <SiMongodb className="icon mongodb-icon" />
      <p>MongoDB</p>
    </div>
  );
};

const MySQLIcon = () => {
  return (
    <div className="icon-container">
      <SiMysql className="icon mongodb-icon" />
      <p>MySQL</p>
    </div>
  );
};

const HTML5Icon = () => {
  return (
    <div className="icon-container">
      <SiHtml5 className="icon" />
      <p>Html5</p>
    </div>
  );
};

const CSS3Icon = () => {
  return (
    <div className="icon-container">
      <SiCss3 className="icon" />
      <p>CSS3</p>
    </div>
  );
};

const BootstrapIcon = () => {
  return (
    <div className="icon-container">
      <SiBootstrap className="icon" />
      <p>Bootstrap</p>
    </div>
  );
};

const GitIcon = () => {
  return (
    <div className="icon-container">
      <SiGit className="icon" />
      <p>Git</p>
    </div>
  );
};

const PythonIcon = () => {
  return (
    <div className="icon-container">
      <SiPython className="icon" />
      <p>Python</p>
    </div>
  );
};

const DjangoIcon = () => {
  return (
    <div className="icon-container">
      <SiDjango className="icon" />
      <p>Django</p>
    </div>
  );
};

export {
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  MongoDBIcon,
  MySQLIcon,
  HTML5Icon,
  CSS3Icon,
  BootstrapIcon,
  GitIcon,
  PythonIcon,
  DjangoIcon,
};
