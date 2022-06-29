export default function User({ user }) {
  const {
    name,
    email,
    address: { city, street }
  } = user;

  return (
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>

      <li>
        Address:
        <ul>
          <li>Street: {street}</li>
          <li>City: {city}</li>
        </ul>
      </li>
    </ul>
  );
}
