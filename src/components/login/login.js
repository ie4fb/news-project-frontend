import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { login } from '../../services/actions/login';

import { useHistory } from 'react-router';
import styles from './login.module.css';

function Login() {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoggedIn } = useSelector((store) => store.login);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/admin');
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        email: values.email || '',
        password: values.password || '',
      })
    );
  }

  return (
    <section className={styles.login}>
      <h2 className={styles.heading}>Новости новостюшки</h2>
      <form className={styles.form} onSubmit={handleSubmit} method='GET'>
        <h3 className={styles.title}>Авторизация</h3>
        <fieldset className={styles.fields}>
          <input
            className={cn(styles.input, {
              [styles.inputInvalid]: errors.email,
            })}
            value={values.email || ''}
            onChange={handleChange}
            name='email'
            placeholder='Email'
            type='email'
            required
            autoComplete='username'
          />
          <input
            className={cn(styles.input, {
              [styles.inputInvalid]: errors.password,
            })}
            value={values.password || ''}
            onChange={handleChange}
            name='password'
            placeholder='Пароль'
            type='password'
            required
            minLength='4'
            autoComplete='current-password'
          />
          <span
            className={cn(styles.error, {
              [styles.errorActive]: errors.submit,
            })}
          >
            {errors.submit || ''}
          </span>
        </fieldset>
        <button
          name='Войти'
          type='submit'
          disabled={!isValid}
          className={cn(styles.saveButton, {
            [styles.saveButtonDisabled]: !isValid,
          })}
        >
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
