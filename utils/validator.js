exports.validateUser = ({ name, email, role_id }) => {
  if (!name || name.length < 3) {
    return 'Name must be at least 3 characters';
  }

  if (!email || !email.includes('@')) {
    return 'Invalid email';
  }

  if (!role_id) {
    return 'Role is required';
  }

  return null;
};