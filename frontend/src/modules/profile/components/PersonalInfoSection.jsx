import { useEffect, useState } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { useAuth } from "../../../app/provider/useAuth";
import { profileApi } from "../api/profileApi";
import { ProfileForm } from "./ProfileForm";
import { ProfileSummary } from "./ProfileSummary";

const savedNotice = "Đã lưu thông tin cá nhân.";

export function PersonalInfoSection() {
  const { updateUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [notice, setNotice] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    profileApi.get().then((result) => {
      if (result.error) setLoadError(result.error);
      else setProfile(result.data);
    });
  }, []);

  function startEditing() {
    setNotice("");
    setSubmitError("");
    setIsEditing(true);
  }

  async function handleSubmit(values) {
    setSubmitError("");
    setIsSubmitting(true);
    const result = await profileApi.update(values);
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    setProfile(result.data);
    updateUser({ fullName: result.data.fullName });
    setIsEditing(false);
    setNotice(savedNotice);
  }

  return (
    <Card body>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 mb-0">Thông tin cá nhân</h2>
        {profile && !isEditing && (
          <Button variant="outline-primary" size="sm" onClick={startEditing}>
            Chỉnh sửa
          </Button>
        )}
      </div>

      {notice && <Alert variant="success">{notice}</Alert>}
      {loadError && <Alert variant="danger">{loadError}</Alert>}
      {!profile && !loadError && (
        <Spinner animation="border" size="sm" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
      )}
      {profile && !isEditing && <ProfileSummary profile={profile} />}
      {profile && isEditing && (
        <ProfileForm
          profile={profile}
          onSubmit={handleSubmit}
          onCancel={() => setIsEditing(false)}
          submitError={submitError}
          isSubmitting={isSubmitting}
        />
      )}
    </Card>
  );
}
