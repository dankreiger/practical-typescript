const routeToAdminPage = role => role;
const routeToHomePage = email => email;

interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  if ('role' in usr) {
    // hover on `usr` - should see `Admin`
    return routeToAdminPage(usr.role);
  }
  // hover on `usr` - should see `User`
  return routeToHomePage(usr.email);
}
