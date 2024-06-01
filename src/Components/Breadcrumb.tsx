import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
  link: string;
  linkText: string;
  current: string;
}

const Breadcrumbs = ({ title, link, linkText, current }: BreadcrumbProps) => {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-3xl font-semibold ">{title}</h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to={link}>
              {linkText} /
            </Link>
          </li>
          <li className="font-medium text-primary">{current}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
