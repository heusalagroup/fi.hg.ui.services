# @heusalagroup/fi.hg.ui.services

Our enterprise library for web based frontend apps.

We will release our UI related services here as compile style library.

*Note!* This library does not require ReactJS and can be used independently in any browser environment. See also our [ReactJS components](https://github.com/heusalagroup/fi.hg.ui.components).

### It's MIT licenced

### It doesn't have many runtime dependencies

This library expects some of our libraries to exist in relative paths:

 * [@heusalagroup/fi.hg.core](https://github.com/heusalagroup/fi.hg.core) to be located in the relative path `../../ts`

The only 3rd party dependency we have is for [Lodash library](https://lodash.com/).

### It's well tested

Our unit tests exists beside the code. To run tests, check out our test repository [@heusalagroup/fi.hg.test](https://github.com/heusalagroup/fi.hg.test).

### We don't have traditional releases

This project evolves directly to our git repository in an agile manner.

This git repository contains only the source code for compile time use case. It is meant to be used as a git submodule 
in a NodeJS or webpack project.

Recommended way to initialize your project is like this:

```
mkdir -p src/fi/hg/ui

git submodule add git@github.com:heusalagroup/fi.hg.core.git src/fi/hg/ts
git config -f .gitmodules submodule.src/fi/hg/ts.branch main

git submodule add git@github.com:heusalagroup/fi.hg.ui.services.git src/fi/hg/ui/services
git config -f .gitmodules submodule.src/fi/hg/ui-services.branch main
```

Only required dependency is to [the Lodash library](https://lodash.com/):

```
npm install --save-dev lodash @types/lodash
```

Some of our code may use reflect metadata. It's optional otherwise.

```
npm install --save-dev reflect-metadata
```

### Commercial support

For commercial support check [Sendanor's organization page](https://github.com/sendanor).
