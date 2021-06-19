import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { USER_HOME_PATH } from "./constants/userPaths";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/User";
import { adminPaths } from './constants/paths';
import AdminPage from './pages/Admin';
import { ADMIN_HOME_PATH } from "./constants/adminPaths";
import { PARTNER_HOME_PATH } from "./constants/partnerPaths";
import PartnerPage from "./pages/Partner";

function App() {
  return (<>
    <Switch>
      <Route path={USER_HOME_PATH}>
        <UserPage />
      </Route>
      <Route path={PARTNER_HOME_PATH}>
        <PartnerPage />
      </Route>
      <Route path={ADMIN_HOME_PATH}>
        <AdminPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/">
        <div>
          <div className="fixed right-0 bottom-0 bg-black">Facebook</div>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/reset-password" exact>
                <div>Reset password</div>
              </Route>
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Route>
    </Switch>
  </>
  );
}

export default App;
