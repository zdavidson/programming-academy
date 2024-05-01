import Typography from "@mui/material/Typography";
import Link from "next/link";

const NavElement = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <Typography sx={{ marginRight: "1vw" }}>{children}</Typography>
    </Link>
  );
};

export default NavElement;
