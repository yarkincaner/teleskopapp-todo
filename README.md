# TeleskopApp project - TodoList

This is a recruitment project for TeleskopApp.

## Description

A simple todo application with appealing ui and animations. Using [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) public api to `GET`, `POST` and `PATCH` todos.

## Installing

Clone the repo

```bash
git clone https://github.com/yarkincaner/teleskopapp-todo.git
```

Navigate to the project folder

```bash
cd teleskopapp-todo
```

if you don't have `pnpm` installed on your computer you should install it from [here](https://pnpm.io/installation)

Then install the dependencies.

```bash
pnpm install
```

Finally you can run developer server

```bash
pnpm dev
```

Project should be running at http://localhost:3000

## Features
* Add, delete, and complete todos.
* Use Tanstack Query to handle api requests.
* Use Zustand to manage global states and state changes.
* Validate todos with zod library and strictly typed objects.
* Handle forms with react-hook-form.
* Feedback on success and error states with toast notifications.