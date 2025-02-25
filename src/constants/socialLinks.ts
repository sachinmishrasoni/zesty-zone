import Icons from "@/icons";

interface SocialLink {
  href: string;
  icon: (props: { size: number }) => JSX.Element; // Function type for dynamic props
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/zestyzone",
    icon: Icons.Facebook, // Pass the component reference
  },
  {
    href: "https://www.instagram.com/zestyzone",
    icon: Icons.Instagram,
  },
  {
    href: "https://www.twitter.com/zestyzone",
    icon: Icons.Twitter,
  },
];

export default socialLinks;
