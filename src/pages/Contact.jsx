import { useLocation } from "react-router-dom";

export const Contact = () => {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get("name");
  console.log(name);
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius
        voluptas quam. Suscipit cum quo ratione voluptates ipsam, in, molestiae
        iure minus quisquam adipisci alias, maxime temporibus dicta iusto vero.
      </p>
    </div>
  );
};
