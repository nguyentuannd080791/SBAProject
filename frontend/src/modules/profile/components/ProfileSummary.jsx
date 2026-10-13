export function ProfileSummary({ profile }) {
  return (
    <dl className="row mb-0">
      <dt className="col-sm-4">Họ và tên</dt>
      <dd className="col-sm-8">{profile.fullName}</dd>
      <dt className="col-sm-4">Email</dt>
      <dd className="col-sm-8">{profile.email}</dd>
      <dt className="col-sm-4">Số điện thoại</dt>
      <dd className="col-sm-8 mb-0">{profile.phone}</dd>
    </dl>
  );
}
