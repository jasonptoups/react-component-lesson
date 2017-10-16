# Reusable Form Components

## Set Up

```sh
 $ git clone git@git.generalassemb.ly:ga-wdi-exercises/react-reusable-form-components.git
 $ cd react-reusable-form-components/
 $ yarn install #`npm install` works as well
```

## Bill of Materials

- `<Label />`
- `<TextInput />`
- `<ProgressBar />`
- `<PasswordInput />`
- `<RegistrationForm />`

## Component Hierarchy

- `<RegistrationForm/>`
  - `<TextInput />` (Username)
  - `<PasswordInput />` (Password)
    - `<TextInput />`
      - `<Label />`
    - `<ProgressBar />`
