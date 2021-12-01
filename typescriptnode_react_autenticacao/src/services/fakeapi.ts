interface Response {
    data: {
        user: {
            name: string;
            email: string;
        };
        token: string;
    };
}

// Subtituir por uma função de acesso ao backend de autenticação
export function autenticar(uri: string, user: object): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            token:
              'isso seria um token JWT por exemplo',
            user: {
              name: 'John Doe',
              email: 'johndoe@gmail.com',
            },
          },
        });
      }, 2000);
    });
  }