import classes from './css/Logo.module.css';
import beomsangLogo from '../../assets/beomsang-logo.jpg';

export const Logo = ({ scrollY }) => {
  return (
    <>
      {scrollY >= 0 && (
        <section className={classes['box-logo']}>
          <img
            className={classes['box-logo__logo']}
            src={beomsangLogo}
            alt='범상'
          />
        </section>
      )}
    </>
  );
};
