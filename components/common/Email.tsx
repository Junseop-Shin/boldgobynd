import Link from "next/link";

interface EmailProps {
  email: string;
}

const Email = ({ email }: EmailProps) => {
  return <Link href={`mailto:${email}?subject=[BOLD 문의]`}>{email}</Link>;
};

export default Email;
