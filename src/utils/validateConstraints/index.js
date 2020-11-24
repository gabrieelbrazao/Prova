export const constraintsNewMeetingStep1 = {
  name: {
    presence: {
      allowEmpty: false,
      message: "Nome não pode estar em branco.",
    },
  },
};

export const constraintsSignUpStep1 = {
  name: {
    presence: {
      allowEmpty: false,
      message: "Nome não pode estar em branco.",
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "E-mail não pode estar em branco.",
    },
    email: {
      message: "E-mail não pode estar inválido.",
    },
  },
};

export const constraintsSignUpStep2 = {
  password: {
    presence: {
      allowEmpty: false,
      message: "Senha não pode estar em branco.",
    },
    length: {
      minimum: 8,
      message: "Senha deve possuir pelo menos 8 caracteres.",
    },
  },
};

export const constraintsSignIn = {
  email: {
    presence: {
      allowEmpty: false,
      message: "E-mail não pode estar em branco.",
    },
    email: {
      message: "E-mail não pode estar inválido.",
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "Senha não pode estar em branco.",
    },
    length: {
      minimum: 8,
      message: "Senha deve possuir pelo menos 8 caracteres.",
    },
  },
};
