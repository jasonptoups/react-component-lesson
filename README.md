# Reusable Form Components

## Set Up

```sh
 $ git clone git@git.generalassemb.ly:ga-wdi-exercises/react-reusable-form-components.git
 $ cd react-reusable-form-components/
 $ yarn install 
```

> *If you don't have yarn installed, you can use `npm install`*. `yarn` can be installed with `npm i -g yarn`.

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
