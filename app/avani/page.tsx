import DoctorBio from "@/components/DoctorBio";
import { doctors } from "@/lib/site-data";

export const metadata = { title: "Dr. Avani Gandhi | Pine Smiles" };

export default function AvaniPage() {
  const doc = doctors.gandhi;
  return <DoctorBio name={doc.name} role={doc.role} bio={doc.bio} color="pink" />;
}
