function Login() {
  return (
    <>
      <div>
        <span>Введите данные</span>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button>Войти</button>
          <div>
            <span>Ошибка</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login();
