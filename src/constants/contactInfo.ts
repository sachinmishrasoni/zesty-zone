import { JSX } from "react";
import Icons from "@/icons"; // Import your icons module

// Define the type for contact information
interface ContactInfo {
  label: string;
  value: string;
  icon: (props: { size: number; className: string }) => JSX.Element; // Function to render the icon
}

// Contact information data
const contactInfo: ContactInfo[] = [
  {
    label: "Address",
    value: "123 Main Street, City, State, Country",
    icon: Icons.MapMarker, // Reference to the icon component
  },
  {
    label: "Phone",
    value: "+1 (123) 456-7890",
    icon: Icons.Phone,
  },
  {
    label: "Email",
    value: "info@zesty-zone.com",
    icon: Icons.Email,
  },
];

export default contactInfo;
