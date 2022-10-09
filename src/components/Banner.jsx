import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};


const Banner = ({title}) => (
  <div className="d-flex justify-content-between">
    <header>
      <h1> {title} </h1>
    </header>
    <AuthButton/>
  </div>
  
);

export default Banner;