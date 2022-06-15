import clnm from "./index.module.scss";
export const Footer = () => {
  return (
    <div className={clnm.footer}>
      <p className={clnm.footerFont}>Double-click to edit a todo</p>
      <p className={clnm.footerFont}>
        Created by <span>Remo H. Jansen</span>
      </p>
      <p className={clnm.footerFont}>
        Part of <span>TodoMVC</span>
      </p>
    </div>
  );
};
