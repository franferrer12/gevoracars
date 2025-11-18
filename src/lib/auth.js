import bcrypt from 'bcryptjs';
import db from './db.js';

export function validateUser(username, password) {
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

  if (!user) {
    return null;
  }

  const isValid = bcrypt.compareSync(password, user.password);

  if (!isValid) {
    return null;
  }

  // No devolver la contraseña
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export function getUserById(id) {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  if (!user) return null;

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export function createSession(user) {
  return {
    userId: user.id,
    username: user.username,
    email: user.email,
    role: user.role
  };
}
