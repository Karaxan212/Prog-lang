// Массив пользователей
const users = [
    { login: "admin", password: "1234", name: "Администратор" },
    { login: "Chygyz", password: "1111", name: "Чынгыз" },
    { login: "Altay", password: "2222", name: "Алтай" },
    { login: "Albert", password: "3333", name: "Альберт" },
    { login: "Adis", password: "4444", name: "Адис" },
  ];
  
  // Функция авторизации
  function login() {
    const loginInput = document.getElementById("login").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
  
    // Поиск пользователя через find
    const user = users.find(u => u.login === loginInput && u.password === passwordInput);
  
    if (user) {
      message.textContent = `Добро пожаловать, ${user.name}! 👋`;
      message.className = "success";
    } else {
      message.textContent = "Ошибка: неверный логин или пароль!";
      message.className = "error";
    }
  }  