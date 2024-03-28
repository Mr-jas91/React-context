# React Context

## Introduction

Welcome to the React Context guide! This README will provide you with an overview of React Context, its usage, and best practices.

## How it Works

At the core of React Context are three main components:

1. **Context Object:** This is created using `React.createContext()` and serves as the container for the shared state.
   
2. **Provider Component:** This component wraps your application or a specific part of it and provides the context value to all consuming components within its tree.

3. **Consumer Component:** This component allows consuming the context value within its render method. It can be nested inside any component within the Provider's tree.

## Usage

### Creating a Context

```jsx
import React from 'react';

const MyContext = React.createContext();
export default MyContext;
