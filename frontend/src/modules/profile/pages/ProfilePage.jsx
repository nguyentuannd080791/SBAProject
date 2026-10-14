import { Stack } from "react-bootstrap";
import { AddressSection } from "../components/AddressSection";
import { PersonalInfoSection } from "../components/PersonalInfoSection";

export function ProfilePage() {
  return (
    <div className="mx-auto" style={{ maxWidth: 640 }}>
      <h1 className="h3 mb-4">Hồ sơ của tôi</h1>
      <Stack gap={4}>
        <PersonalInfoSection />
        <AddressSection />
      </Stack>
    </div>
  );
}
