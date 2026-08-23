import DoctorBio from "@/components/DoctorBio";
import { doctors } from "@/lib/site-data";

export const metadata = { title: "Dr. Jin Kim | Pine Smiles" };

export default function JinPage() {
  const doc = doctors.kim;
  return <DoctorBio name={doc.name} role={doc.role} bio={doc.bio} color="blue" />;
}
