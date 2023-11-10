export const login = async (email: string, password: string) => {
  const res = await fetch("http://localhost:3131/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!res.ok) {
    throw new Error(`Failed with status ${res.status}`);
  }
  const data = await res.json();

  return data.data.token;
};

export const auth = async (token: string) => {
  const res = await fetch("http://localhost:3131/user/token", {
    method: "POST",
    headers: {
      token: token,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed with status ${res.status}`);
  }
  const data = await res.json();

  const uuid = data.data.uuid;
  return uuid;
};

export const signup = async (body: SignupBody) => {
  const res = await fetch("http://localhost:3131/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Failed with status ${res.status}`);
  }
  const data = await res.json();

  return data.data.token;
};
